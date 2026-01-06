import { getJson } from "serpapi";
import { generateCombinedSearchQueryFromResume } from "./google-gemini";

export const getResult = async (query: string, location: string) => {
  const result = await getJson({
    engine: "google_jobs",
    api_key: "68dd363995d240eda99b6720a710984630c2ae355855220e3abbce871d636dfa",
    q: query,
    location: location,
  });

  const result2 = await getJson({
    engine: "google_videos",
    api_key: "68dd363995d240eda99b6720a710984630c2ae355855220e3abbce871d636dfa",
    q: query,
    location: location,
  });

  console.log("video result ", result2);
  console.log("jobs ", result);
  return result;
};

export async function searchJobs(
  query: string,
  location: string,
  resume?: File
) {
  if (!resume) {
    return;
  }
  // ✅ Resume-based search
  const combinedQuery = await generateCombinedSearchQueryFromResume(
    resume,
    query
  );
  console.log("Combined Query:", combinedQuery);

  // Then you can send it to SerpAPI:
  const response = await fetch("/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: combinedQuery,
      location: location,
    }),
  });

  const results = await response.json();
  console.log("Results:", results);
  return {
    results,
  };
}
