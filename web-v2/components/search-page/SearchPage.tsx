"use client";

import { useState } from "react";
import { Search, Upload, Loader2, MapPin } from "lucide-react";
import { searchJobs } from "@/service/serapi";

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      alert("Only image files (PNG, JPG, JPEG, WEBP) are allowed");
      return;
    }

    setResume(file);
  };

  const handleSearch = async () => {
    if (!query && !resume) {
      alert("Please enter text or upload a resume");
      return;
    }

    setLoading(true);

    if (!query && !resume) {
      alert("Please enter text or upload a resume");
      return;
    }

    setLoading(true);

    try {
      if (!resume) {
        return;
      }
      const result = await searchJobs(query, location, resume);

      console.log("Search Results:", result);
      // later: setResults(result.results)
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          AI Resume Search
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="space-y-4">
            {/* Search + Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Job title, skills, keyword..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location (city, country, remote)"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Resume Upload */}
            <label className="flex items-center gap-3 p-4 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50">
              <Upload className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 text-sm">
                {resume ? resume.name : "Upload resume image (PNG, JPG, WEBP)"}
              </span>
              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleResumeUpload}
                className="hidden"
              />
            </label>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Searching...
                </>
              ) : (
                "Search"
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Results include Jobs, Courses, and YouTube resources
        </p>
      </div>
    </div>
  );
}
