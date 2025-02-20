import { prevUser } from "./context/UserContext";

const huggingFaceApiKey = import.meta.env.VITE_HUGGING_FACE_API_KEY;

export async function query() {
    const response = await fetch(
        "https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
        {
            headers: {
                Authorization: huggingFaceApiKey,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ "inputs": prevUser.prompt }),
        }
    );

    const result = await response.blob();
    return result;
}