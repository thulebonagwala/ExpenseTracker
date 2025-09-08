import api from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

export async function handleUpload(file) {
    const formData = new FormData();
    formData.append("profilePic", file);

    try {
        const res = await api.post(API_PATHS.AUTH.PROFILE_PIC,formData);

        // const data = await res.json();
    } catch (err) {
        console.error("Upload failed", err);
    }
};