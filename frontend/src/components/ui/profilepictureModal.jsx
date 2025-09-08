import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../../utils/helper";

export default function ProfilePictureModal({ isOpen, onClose, onUpload }) {
    const [image, setImage] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setImage(URL.createObjectURL(file));
    };

    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleSave = async () => {
        if (!image || !croppedAreaPixels) return;

        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        onUpload(croppedImage); // send back to parent
        onClose(); // close modal
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-xl shadow-lg w-[90%] md:w-[400px] relative"
                onClick={(e) => e.stopPropagation()} // prevent backdrop close
            >
                <h2 className="text-lg font-semibold mb-4">Upload Profile Picture</h2>

                {/* Cropper */}
                <div className="relative w-full h-64 bg-gray-200 mb-4 rounded">
                    {image ? (
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={1} // square crop for profile pic
                            cropShape="round" // circle mask
                            showGrid={false}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            No Image Selected
                        </div>
                    )}
                </div>

                {/* Zoom Slider */}
                {image && (
                    <input
                        type="range"
                        min={1}
                        max={3}
                        step={0.1}
                        value={zoom}
                        onChange={(e) => setZoom(e.target.value)}
                        className="w-full mb-4"
                    />
                )}

                {/* File Input */}
                <label className="cursor-pointer bg-indigo-600 text-white px-3 py-1 rounded">
                    Choose File
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Save
                    </button>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}