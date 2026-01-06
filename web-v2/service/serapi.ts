import { getJson } from "serpapi";
import { generateSkillsFromResume } from "./google-gemini";

export const getResult = async (query: string, location: string) => {
  const result = await getJson({
    engine: "google",
    api_key: "68dd363995d240eda99b6720a710984630c2ae355855220e3abbce871d636dfa",
    q: query,
    location: location,
  });
  return result;
};

export async function searchJobs(
  query: string,
  location: string,
  resume?: File
) {
  let finalQuery = query;

  // ✅ Resume-based search
  if (resume) {
    const skills = await generateSkillsFromResume(resume);

    finalQuery = `
      ${skills.skills.join(" ")}
      jobs
    `;
  }

  // 🔍 Call SerpAPI function directly
  const results = await getResult(finalQuery, location);

  return {
    query: finalQuery,
    results,
  };
}
