import Link from "next/link";
import React from "react";

interface Company {
  name: string;
}

interface JobMatch {
  id: string;
  company: string;
  position: string;
  location: string;
  match: number;
  logo: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface FooterSection {
  title: string;
  links: string[];
}

const HomePage: React.FC = () => {
  const companies: Company[] = [
    { name: "ACME Corp" },
    { name: "GlobalTech" },
    { name: "Nebula" },
    { name: "FoxRun" },
    { name: "Circle" },
  ];

  const jobMatches: JobMatch[] = [
    {
      id: "1",
      company: "Google",
      position: "Senior Product Designer",
      location: "Remote",
      match: 92,
      logo: "G",
    },
    {
      id: "2",
      company: "Spotify",
      position: "UX Researcher",
      location: "New York",
      match: 88,
      logo: "S",
    },
  ];

  const features: Feature[] = [
    {
      icon: "fact_check",
      title: "Resume Optimization",
      description:
        "Beat the ATS with AI-tailored keywords. Upload your resume and get instant feedback on how to improve your score for specific job descriptions.",
      link: "Learn more",
    },
    {
      icon: "manage_search",
      title: "Smart Job Search",
      description:
        "Stop scrolling aimlessly. Our AI finds roles that match 90%+ of your profile, skills, and preferences, saving you hours of searching.",
      link: "Learn more",
    },
    {
      icon: "mic",
      title: "Interview Prep",
      description:
        "Practice makes perfect. Engage in realistic voice mock interviews with our AI, receive instant feedback on your tone, pace, and answers.",
      link: "Learn more",
    },
  ];

  const footerSections: FooterSection[] = [
    {
      title: "Product",
      links: ["Resume Builder", "Job Matcher", "Interview Prep", "Pricing"],
    },
    {
      title: "Resources",
      links: ["Blog", "Career Guide", "Help Center", "Success Stories"],
    },
    { title: "Company", links: ["About Us", "Careers", "Legal", "Contact"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-600">smart_toy</span>
              <span className="text-xl font-bold text-gray-900">
                Career Copilot
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">
                Pricing
              </a>
              <a
                href="#resources"
                className="text-gray-700 hover:text-blue-600"
              >
                Resources
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href={"/login"}>
                <button className="text-gray-700 hover:text-blue-600">
                  Log In
                </button>
              </Link>
              <Link href={"/signup"}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="material-icons text-blue-600">colors</span>
                <span className="material-icons text-yellow-500">
                  auto_awesome
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  AI-Powered Career Growth
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Your AI Career Copilot for Resumes, Jobs, & Skills
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create your resume, check your ATS score, find matching jobs,
                and practice skills — all in one unified platform designed to
                accelerate your career.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                  Get Started Free
                  <span className="material-icons ml-2">arrow_forward</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                  <span className="material-icons mr-2">description</span>
                  Try Resume Builder
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Trusted by 10,000+ job seekers
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-4">
                dashboard.career-copilot.ai
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 mb-4 text-white">
                <div className="text-sm mb-2">ATS Score</div>
                <div className="text-4xl font-bold mb-2">87/100</div>
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-green-300">
                    trending_up
                  </span>
                  <span className="text-sm">Top 5% of candidates</span>
                </div>
                <div className="mt-4">
                  <span className="material-icons text-white">
                    check_circle
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-3">
                  Recent Matches
                </div>
                {jobMatches.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {job.logo}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {job.position}
                        </div>
                        <div className="text-xs text-gray-500">
                          {job.company} • {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-blue-600">
                      {job.match}% Match
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2 mb-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
                  Optimize Resume
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Practice Interview
                </button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="material-icons text-green-600">
                      rocket_launch
                    </span>
                    <div className="text-sm font-semibold text-gray-900 mt-1">
                      Daily Goal
                    </div>
                    <div className="text-xs text-gray-600">
                      3 Applications Sent!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by professionals securing roles at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className="text-2xl font-bold text-gray-400"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600">
              Stop juggling multiple tools. We've combined the best AI career
              technologies into one simple workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <span className="material-icons text-blue-600 text-4xl mb-4">
                  {feature.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                  {feature.link}
                  <span className="material-icons ml-1">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to land your dream job?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals using AI to accelerate their career
            growth today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 font-semibold">
              View Demo
            </button>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="material-icons text-blue-500">smart_toy</span>
                <span className="text-xl font-bold text-white">
                  Career Copilot
                </span>
              </div>
              <p className="text-sm">
                Empowering your career journey with advanced AI tools for
                resumes, job matching, and interview preparation.
              </p>
              <div className="flex space-x-4 mt-4">
                <span className="material-icons hover:text-blue-500 cursor-pointer">
                  public
                </span>
                <span className="material-icons hover:text-blue-500 cursor-pointer">
                  group
                </span>
                <span className="material-icons hover:text-blue-500 cursor-pointer">
                  share
                </span>
              </div>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:text-blue-500">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 AI Career Copilot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-blue-500">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-blue-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Material Icons CDN */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </div>
  );
};

export default HomePage;
