import { prevUser } from "./context/UserContext";

const geminiApiKey = import.meta.env.VITE__GEMINI_API_KEY;

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;

export async function generateResponse() {
    const RequestOption = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "contents": [{
                "parts": [
                    { "text": prevUser.prompt },
                    prevUser.data ? [{
                        "inline_data": {
                            "mime_type": prevUser.mime_type,
                            "data": prevUser.data,
                        }
                    }] : [],
                ]
            }]
        }),

    };

    try {
        let response = await fetch(API_URL, RequestOption);
        let data = await response.json();
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.?)\*\*/g, "$1").trim();
        return apiResponse;
    } catch {

    }
}