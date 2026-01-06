import React from "react";
import {
  Search,
  Mic,
  FileText,
  Briefcase,
  Users,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Career Copilot
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Resources
              </a> */}
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <button className="text-gray-600 hover:text-gray-900 cursor-pointer">
                  Log In
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm mb-6">
              <span>🚀</span>
              <span>AI-Powered Career Tools</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your AI Career Copilot for{" "}
              <span className="text-blue-600">Resumes, Jobs, & Skills</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create a professional resume in minutes with AI-powered tools,
              search and match jobs, and build career skills — all in one
              unified platform designed to accelerate your career.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <span>Start Resume Free</span>
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <span>Try AI Resume Builder</span>
              </button>
            </div>
            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">4.9/5</span>
              </div>
              <span className="text-sm text-gray-600">
                Trusted by 2M+ users
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Resume Score</span>
                </div>
                <div className="text-4xl font-bold text-gray-900">87/100</div>
              </div>
              <div className="w-20 h-20 rounded-full border-8 border-green-500 border-t-gray-200 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">87%</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    Senior Product Designer
                  </span>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    95% match
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Google • San Francisco, CA
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    UI/UX Designer
                  </span>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    92% match
                  </span>
                </div>
                <p className="text-xs text-gray-600">Microsoft • Remote</p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Analyze Resume
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">
              Free • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">
            Trusted by jobseekers from leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">
            <span className="text-2xl font-bold">Google</span>
            <span className="text-2xl font-bold">Microsoft</span>
            <span className="text-2xl font-bold">Amazon</span>
            <span className="text-2xl font-bold">Apple</span>
            <span className="text-2xl font-bold">Netflix</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600">
            Stop juggling between multiple tools. Career Copilot brings your
            entire job hunt into one simple workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Resume Optimization
            </h3>
            <p className="text-gray-600">
              Build and optimize ATS-friendly resumes with AI. Our advanced
              algorithms help increase job match scores and feedback on how to
              improve your application.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Smart Job Search
            </h3>
            <p className="text-gray-600">
              Stop scrolling through endless job posts that don't match. Our AI
              finds the best opportunities based on your skills, preferences,
              and job profile history.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Mic className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Interview Prep
            </h3>
            <p className="text-gray-600">
              Practice with AI-powered mock interviews tailored to your target
              role. Get instant feedback on your answers, tone, and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to land your dream job?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals using AI to accelerate their career
            growth today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-medium">
              Get Started Free
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 font-medium">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Career Copilot
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Your AI-powered career companion for resumes, jobs, and skill
                development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Job Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Interview Prep
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Career Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2025 Career Copilot. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
