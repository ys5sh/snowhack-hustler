export const extractSkillsFromResumeImage = async (image: File) => {
  const base64 = Buffer.from(await image.arrayBuffer()).toString("base64");

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyCyXu38aEePBtKSCgN6Ni-ZdlmMuX4i1qg`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
You are an AI resume analyzer.

Extract core skills from the resume image.
Return ONLY valid JSON:

{
  "technicalSkills": [],
  "softSkills": [],
  "toolsAndTechnologies": [],
  "domainSkills": []
}
`,
              },
              {
                inlineData: {
                  mimeType: image.type, // image/png, image/jpeg
                  data: base64,
                },
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) throw new Error("No response from Gemini");

  return JSON.parse(text);
};

export const fileToBase64 = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString("base64");
};
