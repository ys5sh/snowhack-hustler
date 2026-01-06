export const generateCombinedSearchQueryFromResume = async (
  image: File,
  baseQuery: string // e.g., "Frontend Developer"
): Promise<string> => {
  // Helper to clean Gemini's response text
  function cleanText(text: string) {
    return text.replace(/```/g, "").trim();
  }

  try {
    // Convert image to base64 (browser-compatible)
    const arrayBuffer = await image.arrayBuffer();
    const base64 = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    // Construct the prompt for Gemini
    const prompt = `
You are an AI assistant that creates a single, concise search query.

I will provide you a resume image and a base query.
Your task is to generate a **single search query** that covers all three types of results:
- Job listings
- Online courses
- YouTube tutorials

Use the resume to extract skills, relevant experience, and keywords.
Include the base query: "${baseQuery}".

Return ONLY the combined search query text (no JSON, no extra formatting).
`;

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyCyXu38aEePBtKSCgN6Ni-ZdlmMuX4i1qg`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
                {
                  inlineData: {
                    mimeType: image.type,
                    data: base64,
                  },
                },
              ],
            },
          ],
        }),
      }
    );

    const dataJson = await response.json();
    const rawText = dataJson?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      console.warn("No text returned from Gemini API");
      return "";
    }

    return cleanText(rawText);
  } catch (error) {
    console.error("Error generating combined search query from resume:", error);
    return "";
  }
};

export const fileToBase64 = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString("base64");
};
