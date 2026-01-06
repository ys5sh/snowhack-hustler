"use client";

import { useState } from "react";

const ResumeOptamizationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "Alex Morgan",
    professionalTitle: "Senior Product Designer",
    professionalSummary:
      "Product Designer with 7+ years of experience in building user-centric digital products. Specialized in design systems, prototyping, and user research. Proven track record of improving user engagement by 40% through iterative design processes.",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 000-1234",
    linkedin: "linkedin.com/in/alexmorgan",
    portfolio: "alexdesigns.com",
    jobDescription: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#f6f6f8] text-[#111218] min-h-screen flex flex-col overflow-x-hidden">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#f0f1f4] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-8 text-[#1337ec] flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">
                auto_graph
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Career AI</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium text-gray-500 hover:text-[#1337ec] transition-colors"
              href="#"
            >
              Dashboard
            </a>
            <a className="text-sm font-medium text-[#1337ec]" href="#">
              Resume Builder
            </a>
            <a
              className="text-sm font-medium text-gray-500 hover:text-[#1337ec] transition-colors"
              href="#"
            >
              Job Tracker
            </a>
            <a
              className="text-sm font-medium text-gray-500 hover:text-[#1337ec] transition-colors"
              href="#"
            >
              Interviews
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div
              className="size-9 rounded-full bg-gray-200 bg-cover bg-center border border-gray-100"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJZ-3t6AZft_uu9HGqZKlRAP5DfhRAoAVlrBIBctYwsCwEnbsRz0g9EGzODscbMjKpq_o1Sk2bPOQcmGSnM7oAnz159eVYzc1yXO5zxTWOn72Hr5Il0cQimNQZn6QpXB5zbB79DPyyzzg4gL0lERtVklCEA4_ORnYKkLhrR7MiY0B5WTDghoTkEFwmmqLd2VnuFHBUkaoEOH_5-xeAHJ_rCmFOEhm2ne1RtO3ZtNYso9j_Z559n5u5h-k1rAqSUAemspiXI3BRuuuc')",
              }}
            ></div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1280px] flex flex-col gap-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a className="hover:text-[#1337ec]" href="#">
              Dashboard
            </a>
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
            <span className="font-semibold text-gray-900">
              Resume Optimization
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#111218]">
                Resume Optimization &amp; ATS Check
              </h1>
              <p className="text-gray-500 mt-2 text-base">
                Edit your details and get instant AI feedback to improve your
                hiring chances.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  file_download
                </span>
                Export PDF
              </button>
              <button className="px-4 py-2 bg-[#1337ec] text-white rounded-lg text-sm font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-md shadow-blue-500/20">
                <span className="material-symbols-outlined text-[20px]">
                  save
                </span>
                Save Changes
              </button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            {/* LEFT COLUMN: Editor */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Upload/Import Area */}
              <div className="bg-white p-6 rounded-xl border border-dashed border-[#1337ec]/30 bg-[#1337ec]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-white flex items-center justify-center text-[#1337ec] shadow-sm">
                    <span className="material-symbols-outlined">
                      cloud_upload
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Import from file
                    </p>
                    <p className="text-xs text-gray-500">
                      Auto-fill details from PDF or DOCX
                    </p>
                  </div>
                </div>
                <button className="text-[#1337ec] text-sm font-semibold hover:underline">
                  Browse files
                </button>
              </div>

              {/* Editor Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Stepper */}
                <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4 overflow-x-auto">
                  <div className="flex items-center gap-2 min-w-max">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center size-6 rounded-full bg-[#1337ec] text-white text-xs font-bold">
                        1
                      </span>
                      <span className="text-sm font-bold text-[#1337ec]">
                        Personal Info
                      </span>
                    </div>
                    <div className="w-8 h-[1px] bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center size-6 rounded-full bg-white border border-gray-300 text-gray-500 text-xs font-bold">
                        2
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        Experience
                      </span>
                    </div>
                    <div className="w-8 h-[1px] bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center size-6 rounded-full bg-white border border-gray-300 text-gray-500 text-xs font-bold">
                        3
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        Skills
                      </span>
                    </div>
                    <div className="w-8 h-[1px] bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center size-6 rounded-full bg-white border border-gray-300 text-gray-500 text-xs font-bold">
                        4
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        Education
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Full Name
                      </label>
                      <input
                        className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-2 focus:ring-[#1337ec]/20 outline-none transition-all text-sm"
                        placeholder="e.g. John Doe"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Professional Title
                      </label>
                      <input
                        className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-2 focus:ring-[#1337ec]/20 outline-none transition-all text-sm"
                        placeholder="e.g. Software Engineer"
                        type="text"
                        name="professionalTitle"
                        value={formData.professionalTitle}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Professional Summary
                    </label>
                    <textarea
                      className="w-full h-32 p-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-2 focus:ring-[#1337ec]/20 outline-none transition-all text-sm resize-none leading-relaxed"
                      placeholder="Write a short summary about your professional background..."
                      name="professionalSummary"
                      value={formData.professionalSummary}
                      onChange={handleInputChange}
                    />
                    <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                      <span>Minimum 200 characters recommended</span>
                      <span>{formData.professionalSummary.length} chars</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">
                          mail
                        </span>
                        <input
                          className="w-full h-11 pl-11 pr-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-2 focus:ring-[#1337ec]/20 outline-none transition-all text-sm"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">
                          call
                        </span>
                        <input
                          className="w-full h-11 pl-11 pr-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-2 focus:ring-[#1337ec]/20 outline-none transition-all text-sm"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        LinkedIn URL
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">
                          link
                        </span>
                        <input
                          className="w-full h-11 pl-11 pr-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-2 focus:ring-[#1337ec]/20 outline-none transition-all text-sm"
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Portfolio Website
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">
                          language
                        </span>
                        <input
                          className="w-full h-11 pl-11 pr-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-2 focus:ring-[#1337ec]/20 outline-none transition-all text-sm"
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <button className="px-6 py-2.5 bg-[#1337ec] text-white rounded-lg text-sm font-bold hover:bg-blue-700 flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all">
                      Next: Experience
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ATS Analysis */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Overall Score Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1337ec]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      ATS Score
                    </h3>
                    <p className="text-sm text-gray-500">
                      Based on general standards
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
                    Good Match
                  </span>
                </div>
                <div className="flex items-center gap-6 mb-6">
                  {/* Circular Progress Indicator */}
                  <div className="relative size-24 flex-none">
                    <svg
                      className="size-full -rotate-90"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="text-gray-100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      ></path>
                      <path
                        className="text-[#1337ec]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="78, 100"
                        strokeLinecap="round"
                        strokeWidth="3"
                      ></path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-black text-gray-900">
                        78
                      </span>
                      <span className="text-[10px] font-medium text-gray-500 uppercase">
                        Score
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">
                        check_circle
                      </span>
                      <span>Keywords</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="material-symbols-outlined text-green-500 text-[18px]">
                        check_circle
                      </span>
                      <span>Formatting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="material-symbols-outlined text-amber-500 text-[18px]">
                        warning
                      </span>
                      <span>Brevity</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Description Matcher */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#1337ec]">
                    work
                  </span>
                  <h3 className="font-bold text-gray-900">
                    Job Description Match
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Paste a job description to see how well you match specific
                  requirements.
                </p>
                <div className="relative mb-4">
                  <textarea
                    className="w-full h-24 p-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1337ec] focus:ring-1 focus:ring-[#1337ec] outline-none text-xs resize-none"
                    placeholder="Paste job description text here..."
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                  />
                  <button className="absolute bottom-2 right-2 p-1.5 bg-white border border-gray-200 rounded hover:text-[#1337ec] transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      upload_file
                    </span>
                  </button>
                </div>
                <button className="w-full py-2 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-black transition-colors">
                  Analyze Match
                </button>
              </div>

              {/* Recommendations Widget */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="font-bold text-gray-900 text-sm">
                    Recommendations
                  </h3>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    3 Critical
                  </span>
                </div>
                <div className="divide-y divide-gray-100">
                  {/* Rec Item 1 */}
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex gap-3">
                      <div className="mt-0.5 min-w-[20px]">
                        <span className="material-symbols-outlined text-red-500 text-[20px]">
                          error
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          Add missing hard skills
                        </p>
                        <p className="text-xs text-gray-500 leading-normal">
                          Your resume is missing 'Figma Variables' and 'Agile'
                          which are popular in your industry.
                        </p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Rec Item 2 */}
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex gap-3">
                      <div className="mt-0.5 min-w-[20px]">
                        <span className="material-symbols-outlined text-amber-500 text-[20px]">
                          lightbulb
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          Use active voice
                        </p>
                        <p className="text-xs text-gray-500 leading-normal">
                          Found 3 instances of passive voice in your summary.
                          Try starting sentences with verbs.
                        </p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Rec Item 3 */}
                  <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex gap-3">
                      <div className="mt-0.5 min-w-[20px]">
                        <span className="material-symbols-outlined text-blue-500 text-[20px]">
                          info
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          Quantify results
                        </p>
                        <p className="text-xs text-gray-500 leading-normal">
                          Try adding numbers or percentages to your 'Senior
                          Designer' role description.
                        </p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-b-xl text-center">
                  <button className="text-xs font-bold text-[#1337ec] hover:underline">
                    View Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeOptamizationPage;
