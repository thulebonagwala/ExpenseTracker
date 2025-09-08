
export function getInitials(name) {
    if (!name) return "U"; // fallback
    return name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .slice(0, 2) // max 2 letterss
        .join("");
};


export async function getCroppedImg(imageSrc, crop) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    return new Promise((resolve) => {
        canvas.toBlob(
            (blob) => {
                if (!blob) {
                    return;
                }
                
                const file = new File([blob], "profile-picture.jpg", {
                    type: "image/jpeg",
                });
                resolve(file);
            },
            "image/jpeg",
            0.95 // quality
        );
    });
}

function createImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.setAttribute("crossOrigin", "anonymous"); // avoid CORS
        image.src = url;
    });
}