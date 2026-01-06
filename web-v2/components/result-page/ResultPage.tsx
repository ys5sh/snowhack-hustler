"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  BookOpen,
  Youtube,
  Search,
  User,
  MessageCircle,
  Send,
} from "lucide-react";

/* ================= TYPES ================= */

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  matchScore: number;
};

type Course = {
  id: string;
  title: string;
  platform: string;
  level: string;
};

type Video = {
  id: string;
  title: string;
  channel: string;
};

/* ================= COMPONENT ================= */

export default function ResultPage() {
  const [activeTab, setActiveTab] = useState<"jobs" | "courses" | "youtube">(
    "jobs"
  );

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [jobs, setJobs] = useState<Job[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  /* Ask Anything */
  const [chatOpen, setChatOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  /* ================= MOCK FETCH ================= */

  useEffect(() => {
    setTimeout(() => {
      setJobs([
        {
          id: "1",
          title: "Frontend Developer",
          company: "Google",
          location: "Remote",
          matchScore: 92,
        },
        {
          id: "2",
          title: "React Engineer",
          company: "Amazon",
          location: "Bangalore",
          matchScore: 88,
        },
      ]);

      setCourses([
        {
          id: "1",
          title: "Advanced React & TypeScript",
          platform: "Coursera",
          level: "Advanced",
        },
        {
          id: "2",
          title: "Frontend System Design",
          platform: "Udemy",
          level: "Intermediate",
        },
      ]);

      setVideos([
        {
          id: "1",
          title: "React Interview Questions",
          channel: "Codevolution",
        },
        {
          id: "2",
          title: "Frontend Roadmap 2025",
          channel: "Fireship",
        },
      ]);

      setLoading(false);
    }, 1200);
  }, []);

  /* ================= ASK ANYTHING ================= */

  const handleAsk = () => {
    if (!question) return;

    // Replace with AI API
    setAnswer(
      "Based on your resume and current search, improving system design and advanced React patterns will increase your job match by ~15%."
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-40 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* User */}
          <div className="text-xl font-semibold text-blue-600">
            Career<span className="text-gray-900">AI</span>
          </div>

          {/* Search */}
          <div className="flex-1 px-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs, courses, YouTube..."
                className="w-full pl-10 pr-4 py-2 rounded-full border focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Logo */}
        </div>
      </nav>

      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-8">
          <div className="flex gap-6 border-b mb-6">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`pb-2 flex gap-2 ${
                activeTab === "jobs"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              <Briefcase className="w-4 h-4" /> Jobs
            </button>

            <button
              onClick={() => setActiveTab("courses")}
              className={`pb-2 flex gap-2 ${
                activeTab === "courses"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Courses
            </button>

            <button
              onClick={() => setActiveTab("youtube")}
              className={`pb-2 flex gap-2 ${
                activeTab === "youtube"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              <Youtube className="w-4 h-4" /> YouTube
            </button>
          </div>

          {activeTab === "jobs" &&
            jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="bg-white p-4 rounded-xl shadow-sm mb-4 cursor-pointer border hover:border-blue-500"
              >
                <h3 className="font-medium text-lg">{job.title}</h3>
                <p className="text-sm text-gray-600">
                  {job.company} • {job.location}
                </p>
              </div>
            ))}

          {activeTab === "youtube" &&
            videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="bg-white p-4 rounded-xl shadow-sm mb-4 cursor-pointer border hover:border-red-500"
              >
                <h3 className="font-medium text-lg">{video.title}</h3>
                <p className="text-sm text-gray-600">
                  Channel: {video.channel}
                </p>
              </div>
            ))}
        </div>

        {/* RIGHT */}
        <div className="col-span-4">
          <div className="sticky top-24 bg-white p-5 rounded-xl shadow-sm">
            {!selectedJob && !selectedVideo && (
              <p className="text-gray-500 text-sm">
                Select a job or video to see details
              </p>
            )}

            {selectedJob && (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  {selectedJob.title}
                </h2>
                <p className="text-green-600">
                  Match Score: {selectedJob.matchScore}%
                </p>
              </>
            )}

            {selectedVideo && (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600">{selectedVideo.channel}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ================= ASK ANYTHING FLOAT ================= */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700"
          >
            <MessageCircle className="w-5 h-5" />
            Ask Anything
          </button>
        ) : (
          <div className="w-[360px] bg-white rounded-xl shadow-xl border p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Ask CareerAI</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400"
              >
                ✕
              </button>
            </div>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about jobs, skills, resume..."
              className="w-full border rounded-lg p-2 text-sm mb-2"
            />

            <button
              onClick={handleAsk}
              className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Ask
            </button>

            {answer && <p className="text-sm text-gray-700 mt-3">{answer}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
