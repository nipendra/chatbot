import { prevUser } from "./context/UserContext";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCBX3YvTLm_GrPtwAkYyjV0c1ElvVVCdz4";

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