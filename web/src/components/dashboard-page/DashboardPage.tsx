"use client";

import React, { useState } from "react";
import {
  Menu,
  FileText,
  Search,
  CheckSquare,
  Settings,
  LogOut,
  TrendingUp,
  AlertCircle,
  RefreshCw,
  MoreVertical,
  Sparkles,
} from "lucide-react";

const DashboardPage = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navItems = [
    { name: "Dashboard", icon: Menu },
    { name: "Resume & ATS", icon: FileText },
    { name: "Job Search", icon: Search },
    { name: "Assignments", icon: CheckSquare, badge: 1 },
    { name: "Settings", icon: Settings },
  ];

  const stats = [
    { label: "New Job Matches", value: 5, trend: "+2", subtext: "Today" },
    { label: "Active Applications", value: 12, trend: "", subtext: "" },
    { label: "Interviews", value: 2, trend: "", subtext: "" },
    { label: "Profile Views", value: 48, trend: "+15%", subtext: "" },
  ];

  const assignments = [
    {
      title: "Update LinkedIn Headline",
      desc: "Backed by new resume keywords",
      due: "Due Today",
      checked: false,
    },
    {
      title: 'Research "TechStart" Interview',
      desc: "Interview scheduled for Thu, 2pm",
      due: "Tomorrow",
      checked: false,
    },
    {
      title: "Complete Python Assessment",
      desc: "For Senior Dev role at Acme Corp",
      due: "In 2 days",
      checked: false,
    },
  ];

  const jobMatches = [
    {
      role: "Senior Product Designer",
      company: "Acme Corp",
      logo: "🏢",
      match: 88,
      status: "New",
    },
    {
      role: "UX Researcher",
      company: "EliteAnalytics",
      logo: "📊",
      match: 82,
      status: "Saved",
    },
    {
      role: "Product Manager",
      company: "Innovate Inc",
      logo: "💡",
      match: 85,
      status: "New",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">CareerAI</h1>
              <p className="text-xs text-gray-500">Personal Assistant</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors relative ${
                activeNav === item.name
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
              {item.badge && (
                <span className="absolute right-3 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <button className="m-4 flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Good morning, Alex
            </h2>
            <p className="text-gray-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Your career score is up 12% this week.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-8">
            <button className="px-6 py-2 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Scan Resume
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Ask AI Coach
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  {stat.trend && (
                    <span className="text-green-600 text-sm font-semibold mb-1">
                      {stat.trend}
                    </span>
                  )}
                </div>
                {stat.subtext && (
                  <p className="text-xs text-green-600 mt-1">{stat.subtext}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Resume Health */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Resume Health</h3>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">85</span>
                  <span className="text-xl text-gray-400 mb-2">/100</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-600 font-medium">
                    Needs Attention
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Action Tip: 3 formatting errors found by ATS scanner.
              </p>

              <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Optimize Resume
              </button>
            </div>

            {/* Priority Assignments */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-purple-600" />
                  <h3 className="font-bold text-gray-900">
                    Priority Assignments
                  </h3>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {assignments.map((assignment, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={assignment.checked}
                      className="w-5 h-5 mt-0.5 rounded border-gray-300"
                      readOnly
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">
                        {assignment.title}
                      </p>
                      <p className="text-xs text-gray-500">{assignment.desc}</p>
                    </div>
                    <span
                      className={`text-xs font-medium whitespace-nowrap ${
                        assignment.due === "Due Today"
                          ? "text-orange-600"
                          : "text-gray-500"
                      }`}
                    >
                      {assignment.due}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Daily AI Tip */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">DAILY AI TIP</span>
            </div>
            <p className="text-lg mb-4">
              Add numeric results to your 'Project Lead' role to increase ATS
              visibility by ~20%.*
            </p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Apply Suggestion
            </button>
          </div>

          {/* Top Job Matches */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 mt-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900">Top Job Matches</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">
                      Role
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">
                      Company
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">
                      Match Score
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobMatches.map((job, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 font-medium text-gray-900">
                        {job.role}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{job.logo}</span>
                          <span className="text-gray-700">{job.company}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                          {job.match}% Match
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-600">{job.status}</span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-blue-600 font-medium hover:underline">
                          Apply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="w-full py-3 mt-4 text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-colors">
              View All 5 Matches
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
