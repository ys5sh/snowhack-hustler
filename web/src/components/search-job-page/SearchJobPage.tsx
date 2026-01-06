"use client";
import React, { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  Star,
  Bookmark,
  MapPin,
  DollarSign,
  Briefcase,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  matchScore: number;
  type: string;
  description: string;
  isTopMatch?: boolean;
  logo: string;
}

const CareerAIDashboard = () => {
  const [salaryRange, setSalaryRange] = useState([50, 250]);
  const [selectedFilters, setSelectedFilters] = useState({
    remote: true,
    usa: false,
    europe: false,
    fullTime: false,
    contract: false,
    internship: false,
  });

  const topMatches: Job[] = [
    {
      id: "1",
      title: "Senior Product Designer",
      company: "Stripe",
      location: "San Francisco, CA",
      salary: "$180k - $240k",
      matchScore: 98,
      type: "Full-time",
      description:
        "We are looking for a senior designer to lead our payment checkout experiences. You have strong skills in Figma, Qkd...",
      isTopMatch: true,
      logo: "💳",
    },
    {
      id: "2",
      title: "Staff UX Researcher",
      company: "Airbnb",
      location: "Remote",
      salary: "$150k - $220k",
      matchScore: 94,
      type: "Contract",
      description:
        "Join our Research team. Ideal candidate has 5+ years in qualitative research and experience with global markets...",
      isTopMatch: true,
      logo: "🏠",
    },
  ];

  const newOpportunities: Job[] = [
    {
      id: "3",
      title: "UX Engineer II",
      company: "Microsoft",
      location: "Redmond, WA (Hybrid)",
      salary: "$135k - $170k",
      matchScore: 85,
      type: "Full-time",
      description:
        "Bridging the gap between design and engineering. You will prototype new interaction models for Surface devic...",
      logo: "🪟",
    },
    {
      id: "4",
      title: "Product Design Manager",
      company: "Meta",
      location: "Menlo Park, CA",
      salary: "$175k - $250k",
      matchScore: 82,
      type: "Full-time",
      description:
        "Leading a team of 5 designers on the Realty Labs team. Experience with AR/VR interfaces is a huge plus...",
      logo: "📘",
    },
    {
      id: "5",
      title: "Senior UI Designer",
      company: "Netflix",
      location: "Los Gatos, CA",
      salary: "$160k - $230k",
      matchScore: 78,
      type: "Full-time",
      description:
        "Focused on TV and cinematic interfaces. You will work closely with our content creative teams...",
      logo: "🎬",
    },
  ];

  const FilterSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      {children}
    </div>
  );

  const JobCard = ({ job, isTopMatch }: { job: Job; isTopMatch?: boolean }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
            {job.logo}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {job.title}
            </h3>
            <p className="text-sm text-gray-600">
              {job.company} • {job.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600">
              {job.matchScore}%
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <DollarSign className="w-4 h-4" />
          {job.salary}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          {job.type}
        </span>
        <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-medium">
          ★ Remote Friendly
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4">{job.description}</p>

      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
        <button className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Bookmark className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <span className="font-bold text-xl">CareerAI</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for jobs, skills, companies..."
                className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Dashboard
              </a>
              <a href="#" className="hover:text-gray-900">
                My Resumes
              </a>
              <a href="#" className="hover:text-gray-900">
                Applications
              </a>
            </nav>
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-5 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900">Filters</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Reset All
                </button>
              </div>

              <FilterSection title="LOCATION">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.remote}
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          remote: !selectedFilters.remote,
                        })
                      }
                    />
                    <span className="text-sm text-gray-700">Remote Only</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.usa}
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          usa: !selectedFilters.usa,
                        })
                      }
                    />
                    <span className="text-sm text-gray-700">United States</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.europe}
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          europe: !selectedFilters.europe,
                        })
                      }
                    />
                    <span className="text-sm text-gray-700">Europe</span>
                  </label>
                </div>
              </FilterSection>

              <FilterSection title="JOB TYPE">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.fullTime}
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          fullTime: !selectedFilters.fullTime,
                        })
                      }
                    />
                    <span className="text-sm text-gray-700">Full-time</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.contract}
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          contract: !selectedFilters.contract,
                        })
                      }
                    />
                    <span className="text-sm text-gray-700">Contract</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.internship}
                      className="w-4 h-4 text-blue-600 rounded"
                      onChange={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          internship: !selectedFilters.internship,
                        })
                      }
                    />
                    <span className="text-sm text-gray-700">Internship</span>
                  </label>
                </div>
              </FilterSection>

              <FilterSection title="SALARY RANGE">
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={salaryRange[1]}
                    onChange={(e) =>
                      setSalaryRange([salaryRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${salaryRange[0]}k</span>
                    <span>${salaryRange[1]}k+</span>
                  </div>
                </div>
              </FilterSection>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start gap-2 mb-2">
                  <Star className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-blue-900 mb-1">
                      PRO Feature
                    </h4>
                    <p className="text-xs text-blue-700 mb-3">
                      Get better job matches for every job you apply to.
                    </p>
                    <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Analysis Complete Banner */}
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">
                ANALYSIS COMPLETE
              </span>
            </div>

            {/* Results Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                We found <span className="text-blue-600">124 roles</span>{" "}
                matching your profile
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-sm text-gray-600">📄</span>
                  <span className="text-sm text-gray-700">
                    Resume_Senior_Product_Des....pdf
                  </span>
                  <span className="text-xs text-gray-500">
                    uploaded 2 days ago
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
                  <span>Switch Resume</span>
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                  Upload New
                </button>
              </div>
            </div>

            {/* Top Matches */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Top Matches for You
                  </h2>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View all <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {topMatches.map((job) => (
                  <JobCard key={job.id} job={job} isTopMatch />
                ))}
              </div>
            </div>

            {/* New Opportunities */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  New Opportunities
                </h2>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                  <option>Sort by: Most Recent</option>
                  <option>Best Match</option>
                  <option>Highest Salary</option>
                </select>
              </div>
              <div className="space-y-4">
                {newOpportunities.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Load More Opportunities
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CareerAIDashboard;
