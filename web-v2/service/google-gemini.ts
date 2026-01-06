export const generateSkillsFromResume = async (resume: File) => {
  try {
    if (!resume) {
      throw new Error("Resume file is required");
    }

    // Convert PDF → base64
    const base64 = await fileToBase64(resume);
    const apiKey = "AIzaSyB2N4aaN18QrdX65cvXzddTbB0KvsBhFrs";
    const model = "gemini-1.5-pro"; // Best for document understanding
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const prompt = `
You are an AI resume analyzer.

Extract the candidate's core skills from the resume.
Return ONLY valid JSON in this format:

{
  "technicalSkills": [],
  "softSkills": [],
  "toolsAndTechnologies": [],
  "domainSkills": []
}
`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
              {
                inlineData: {
                  mimeType: "application/pdf",
                  data: base64,
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();

    const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textOutput) {
      throw new Error("No response from Gemini");
    }

    // Parse JSON safely
    const skills = JSON.parse(textOutput);

    return {
      success: true,
      skills,
    };
  } catch (error) {
    console.error("Skill extraction failed:", error);
    return {
      success: false,
      error: (error as { message: string }).message,
    };
  }
};

export const fileToBase64 = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString("base64");
};
