import { getJson } from "serpapi";

export const getResult = async (query: string, location: string) => {
  const result = await getJson({
    engine: "google",
    api_key: "68dd363995d240eda99b6720a710984630c2ae355855220e3abbce871d636dfa",
    q: query,
    location: location,
  });
  return result;
};
