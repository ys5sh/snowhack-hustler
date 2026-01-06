"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  MessageSquare,
  Settings,
  LayoutDashboard,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Award,
  Zap,
  Flame,
} from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");

  const assignments = [
    {
      id: 1,
      title: "Build a Rate-Limited API",
      description:
        "Implement a REST API in Node.js that handles traffic spikes using Redis for rate limiting.",
      difficulty: "Medium",
      duration: "2h 30m",
      xp: 150,
      tags: ["Node.js", "Redis", "Backend"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
      difficultyColor: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Refactor Legacy SQL",
      description:
        "Optimize a set of slow-performing SQL queries to improve database performance.",
      difficulty: "Easy",
      duration: "45m",
      xp: 90,
      tags: ["SQL", "Optimization"],
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=200&fit=crop",
      difficultyColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Implement OAuth2 Flow",
      description:
        "Secure a React application by implementing a complete OAuth2 authentication flow.",
      difficulty: "Hard",
      duration: "4h",
      xp: 300,
      tags: ["Security", "React", "Auth"],
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=200&fit=crop",
      difficultyColor: "bg-red-500",
    },
    {
      id: 4,
      title: "Unit Testing with PyTest",
      description:
        "Increase code coverage for a Python microservice using PyTest and mocking.",
      difficulty: "Medium",
      duration: "1h 15m",
      xp: 150,
      tags: ["Python", "Testing", "PyTest"],
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=200&fit=crop",
      difficultyColor: "bg-yellow-500",
    },
    {
      id: 5,
      title: "Responsive CSS Grid",
      description:
        "Convert a flexbox layout into a modern CSS Grid system with responsive breakpoints.",
      difficulty: "Easy",
      duration: "30m",
      xp: 90,
      tags: ["CSS", "Design", "Frontend"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      difficultyColor: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">CareerAI</h1>
            <p className="text-xs text-gray-500">Pro Plan</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-medium"
          >
            <Award className="w-5 h-5" />
            <span>Skill Assignments</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition"
          >
            <FileText className="w-5 h-5" />
            <span>Resume Builder</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition"
          >
            <Users className="w-5 h-5" />
            <span>Career Coach</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium text-sm text-gray-900">Sarah Jenkins</p>
            <p className="text-xs text-gray-500">Level 5 Developer</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">Skill Assignments</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search assignments..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <MessageSquare className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Level Up Your Skills
                </h1>
                <p className="text-gray-600">
                  AI-curated coding challenges tailored to close your resume
                  gaps and boost your hiring potential.
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition">
                <Zap className="w-5 h-5" />
                Generate New Challenge
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Current Level</span>
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    Level 5
                  </span>
                  <span className="text-sm text-gray-500">Dev</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Total XP</span>
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    1,250
                  </span>
                  <span className="text-sm text-green-600 font-medium">
                    +150 this week
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Daily Streak</span>
                  <Flame className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    3 Days
                  </span>
                  <span className="text-sm text-orange-600 font-medium">
                    🔥 On Fire!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              {["all", "recommended", "inProgress", "completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    activeTab === tab
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab === "all"
                    ? "All Tasks"
                    : tab === "inProgress"
                    ? "In Progress"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Difficulty</option>
                <option>Duration</option>
                <option>XP</option>
              </select>
            </div>
          </div>

          {/* Assignment Grid */}
          <div className="grid grid-cols-3 gap-6">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <img
                    src={assignment.image}
                    alt={assignment.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <span
                    className={`absolute top-4 left-4 ${assignment.difficultyColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {assignment.difficulty}
                  </span>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{assignment.duration}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {assignment.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {assignment.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {assignment.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1 text-blue-600 font-semibold">
                      <Award className="w-4 h-4" />
                      <span>+{assignment.xp} XP</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                      Start Task
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* More Assignments Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-blue-300 flex flex-col items-center justify-center p-8 hover:border-blue-400 transition cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <span className="text-3xl">+</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                More Assignments?
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Generate 3 new assignments tailored to your skills
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
