import React, { useState } from "react";
import {
  Upload,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Download,
  Save,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const ResumeOptimizationPage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">✦</span>
            </div>
            <span className="font-semibold text-lg">Career AI</span>
          </div>
          <nav className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </a>
            <a href="#" className="text-blue-600 font-medium">
              Resume Builder
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Job Tracker
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Interviews
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative">
              <span className="text-gray-600">🔔</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          Dashboard › <span className="text-gray-900">Resume Optimization</span>
        </div>

        {/* Title Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Resume Optimization & ATS Check
            </h1>
            <p className="text-gray-600">
              Edit your details and get instant AI feedback to improve your
              hiring chances.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
            {/* Import Section */}
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Upload className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Import from file</p>
                  <p className="text-sm text-gray-600">
                    Supports: Word, PDF or DOCX
                  </p>
                </div>
              </div>
              <button className="text-blue-600 font-medium hover:underline">
                Browse files
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "personal"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                    1
                  </span>
                  Personal Info
                </span>
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "experience"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-300 text-white text-sm flex items-center justify-center">
                    2
                  </span>
                  Experience
                </span>
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "skills"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-300 text-white text-sm flex items-center justify-center">
                    3
                  </span>
                  Skills
                </span>
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "education"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-300 text-white text-sm flex items-center justify-center">
                    4
                  </span>
                  Education
                </span>
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value="Alex Morgan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value="Senior Product Designer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Summary
                </label>
                <textarea
                  rows={4}
                  value="Product designer with 7+ years of experience in building user-centric digital products. Specialized in design systems, prototyping, and user research. Proven track record of improving user satisfaction by 40% through iterative design processes."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-between mt-2">
                  <p className="text-xs text-gray-500">
                    Minimum 200 characters recommended
                  </p>
                  <p className="text-xs text-gray-500">245 chars</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value="alex.morgan@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value="+1 (555) 000-1234"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value="linkedin.com/in/alexmorgan"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio Website
                  </label>
                  <input
                    type="url"
                    value="alexdesigns.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  Next: Experience
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Recommendations */}
          <div className="space-y-6">
            {/* ATS Score */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">ATS Score</h3>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                  Good Match
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Based on general standards
              </p>

              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#3B82F6"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.78)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">78</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">Keywords</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">Formatting</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-700">Brevity</span>
                </div>
              </div>
            </div>

            {/* Job Description Match */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">
                  Job Description Match
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Paste a job description to see how well you match specific
                requirements.
              </p>
              <textarea
                placeholder="Paste job description here..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              />
              <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                Analyze Match
              </button>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Recommendations</h3>
                <span className="text-red-600 text-sm font-medium">
                  3 Critical
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      Add missing hard skills
                    </h4>
                    <p className="text-xs text-gray-600">
                      Your resume is missing 'Figma Variables' and 'Agile' which
                      are popular in your industry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      Use active voice
                    </h4>
                    <p className="text-xs text-gray-600">
                      Found 3 instances of passive voice in your summary. Try
                      starting sentences with verbs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      Quantify results
                    </h4>
                    <p className="text-xs text-gray-600">
                      Try adding numbers or percentages to your 'Senior
                      Designer' role description.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 text-blue-600 text-sm font-medium hover:underline">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeOptimizationPage;
