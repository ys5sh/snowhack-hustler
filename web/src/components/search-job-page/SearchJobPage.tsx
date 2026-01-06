"use client";

import React from "react";
import Head from "next/head";

const JobSearchPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>CareerAI - Job Search by Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="sticky top-0 z-50 bg-white dark:bg-card-dark border-b border-[#f0f1f4] dark:border-gray-800 px-6 py-3">
          <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="size-8 text-primary">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold tracking-tight">CareerAI</h2>
              </div>
              {/* Search */}
              <div className="hidden md:flex items-center bg-background-light dark:bg-background-dark rounded-lg px-3 py-2 w-96">
                <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark">
                  search
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main-light dark:text-text-main-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark"
                  placeholder="Search for jobs, skills, companies..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              {/* Nav Links */}
              <nav className="hidden lg:flex gap-6">
                <a
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="#"
                >
                  Dashboard
                </a>
                <a
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="#"
                >
                  My Resumes
                </a>
                <a
                  className="text-sm font-medium hover:text-primary transition-colors"
                  href="#"
                >
                  Applications
                </a>
              </nav>
              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="size-10 flex items-center justify-center rounded-full hover:bg-background-light dark:hover:bg-gray-800 transition-colors relative">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                  <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-card-dark"></span>
                </button>
                <div
                  className="size-9 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUrBFRfTOifTrQf5Q56mGv_vkNuDHUXZvIN7WHOU9AyDksxzQW7HpjFp2Vqqc4PLpxlL0d74yJkxYakfapW0Ul0X5nkuyLFVWWUTsQ3dCwMqizHpUidKHLqvJAQiEciWGKOkbPIsaQAb_wIT_JLjn3WHX7awt8mieXfh26fkAaTQyG5ubof4nOtpbVBUucoue6PVDEjQymkhGFzGc13et3BqQr-eHruzhVrOO6LSyb_W0-3mVQ5__KjB44CzbnTRzQI_SVyT5yECTy")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 max-w-[1440px] mx-auto w-full pt-6 px-4 md:px-6 gap-8">
          {/* SideNavBar / Filters */}
          <aside className="hidden lg:flex w-64 flex-col gap-8 shrink-0 pb-10 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
            {/* Filters Section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button className="text-xs font-medium text-primary hover:underline">
                  Reset All
                </button>
              </div>
              {/* Filter Group: Location */}
              <div className="space-y-3">
                <div className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">
                    Location
                  </span>
                  <span className="material-symbols-outlined text-lg text-text-muted-light">
                    expand_less
                  </span>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      defaultChecked
                      className="rounded border-gray-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm">Remote Only</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="rounded border-gray-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm">United States</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="rounded border-gray-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm">Europe</span>
                  </label>
                </div>
              </div>
              {/* Filter Group: Job Type */}
              <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">
                    Job Type
                  </span>
                  <span className="material-symbols-outlined text-lg text-text-muted-light">
                    expand_less
                  </span>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      defaultChecked
                      className="rounded border-gray-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm">Full-time</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="rounded border-gray-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm">Contract</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="rounded border-gray-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm">Internship</span>
                  </label>
                </div>
              </div>
              {/* Filter Group: Salary */}
              <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark uppercase tracking-wide">
                    Salary Range
                  </span>
                  <span className="material-symbols-outlined text-lg text-text-muted-light">
                    expand_less
                  </span>
                </div>
                <div className="px-1 pt-2 pb-4">
                  <div className="relative h-1 bg-gray-200 rounded-full">
                    <div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-primary rounded-full"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[20%] size-4 bg-white border-2 border-primary rounded-full cursor-pointer shadow-sm"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-[30%] size-4 bg-white border-2 border-primary rounded-full cursor-pointer shadow-sm"></div>
                  </div>
                  <div className="flex justify-between mt-3 text-xs text-text-muted-light font-medium">
                    <span>$80k</span>
                    <span>$220k+</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Ad/Promo Space */}
            <div className="mt-auto bg-gradient-to-br from-primary/10 to-purple-500/10 p-4 rounded-xl border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm">
                <span className="material-symbols-outlined text-lg">
                  auto_awesome
                </span>
                PRO Feature
              </div>
              <p className="text-xs text-text-muted-light mb-3">
                Get tailored cover letters for every job you apply to.
              </p>
              <button className="w-full py-2 bg-white text-primary text-xs font-bold rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                Upgrade Now
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col gap-8 pb-10">
            {/* Hero / Resume Context */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-white dark:bg-card-dark shadow-soft border border-gray-100 dark:border-gray-800 p-6 md:p-8">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-end justify-between">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full w-fit border border-green-100">
                    <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                    Analysis Complete
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark leading-tight">
                    We found <span className="text-primary">124</span> roles
                    matching your profile
                  </h1>
                  <div className="flex items-center gap-3 text-sm text-text-muted-light dark:text-text-muted-dark bg-background-light dark:bg-gray-800/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700 w-fit">
                    <span className="material-symbols-outlined text-primary">
                      description
                    </span>
                    <span className="font-medium text-text-main-light dark:text-text-main-dark">
                      Resume_Senior_Product_Des...pdf
                    </span>
                    <span className="text-xs opacity-70 border-l border-gray-300 dark:border-gray-600 pl-3">
                      Updated 2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-background-light hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-text-main-light dark:text-text-main-dark text-sm font-semibold rounded-lg transition-colors border border-transparent dark:border-gray-700">
                    <span className="material-symbols-outlined text-[20px]">
                      switch_access_shortcut
                    </span>
                    Switch Resume
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      upload
                    </span>
                    Upload New
                  </button>
                </div>
              </div>
            </div>

            {/* Chips Mobile (Visible only on mobile/tablet) */}
            <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <button className="flex h-9 whitespace-nowrap items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 px-4">
                <span className="text-sm font-medium">Location</span>
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 whitespace-nowrap items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 px-4">
                <span className="text-sm font-medium">Remote</span>
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 whitespace-nowrap items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 px-4">
                <span className="text-sm font-medium">Salary</span>
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
            </div>

            {/* Content Area: Top Matches */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined fill text-yellow-500">
                    star
                  </span>
                  Top Matches for You
                </h2>
                <a
                  className="text-sm font-medium text-primary hover:text-blue-700 flex items-center gap-1"
                  href="#"
                >
                  View all
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Job Card 1 (High Match) */}
                <div className="group bg-white dark:bg-card-dark rounded-xl p-5 border border-primary/20 shadow-soft hover:shadow-lg hover:border-primary/40 transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="size-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-2 border border-gray-100 dark:border-gray-700">
                        <img
                          alt="Stripe Company Logo"
                          className="w-full h-auto object-contain"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHr1BddPzn9osntan1DGwab6FVYM7WsLlUFpIpOD1ZHYltAhCNUVCMPuNHCDHZXlqXZ2c4HMy5ivM1M9Gu7z6VlSPYYk7Tl9DXpdHkairK3qdvH4pHycPOe0qpvaMQJIRWkJZJArxn4tYcPs_r-Iog2BRezsr0Tti1bvzx5p-XMvx8ZoLiGqiOUn26FjPYAOvEDRcbNxdEgFoiv-E3KQI_Ss5ljUol04Tycwe-n9ZbCa-uO8bA1zxaBx9Bcu3UiBwkn0OZZ2q9ZjZ5"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                          Senior Product Designer
                        </h3>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
                          Stripe • San Francisco, CA
                        </p>
                      </div>
                    </div>
                    {/* Match Score */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1.5 text-primary font-bold text-lg">
                        <span className="material-symbols-outlined fill text-[20px]">
                          verified
                        </span>
                        98%
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted-light">
                        Match Score
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-background-light dark:bg-gray-800 text-xs font-semibold text-text-muted-light border border-gray-200 dark:border-gray-700 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        payments
                      </span>{" "}
                      $180k - $240k
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        public
                      </span>{" "}
                      Remote Friendly
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-background-light dark:bg-gray-800 text-xs font-semibold text-text-muted-light border border-gray-200 dark:border-gray-700">
                      Full-time
                    </span>
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark line-clamp-2 mb-4 leading-relaxed">
                    We are looking for a senior designer to lead our payment
                    checkout experiences. You have strong skills in{" "}
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-1 rounded">
                      Figma
                    </span>
                    ,{" "}
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-1 rounded">
                      Design Systems
                    </span>
                    , and user research...
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button className="flex-1 bg-primary hover:bg-blue-700 text-white font-semibold text-sm h-10 rounded-lg transition-colors shadow-sm">
                      Apply Now
                    </button>
                    <button
                      className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-text-muted-light hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      title="Save Job"
                    >
                      <span className="material-symbols-outlined">
                        bookmark
                      </span>
                    </button>
                  </div>
                </div>

                {/* Job Card 2 (High Match) */}
                <div className="group bg-white dark:bg-card-dark rounded-xl p-5 border border-primary/20 shadow-soft hover:shadow-lg hover:border-primary/40 transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="size-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-2 border border-gray-100 dark:border-gray-700">
                        <img
                          alt="Airbnb Company Logo"
                          className="w-full h-auto object-contain"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5blAWrZPaPvQXK8w3C8x-wiL06ZMbV8lJLTlKkMLiWD4z0yf9reZ7zPV3bWe_CJZ21idBQGbOKhLD5rFbZMlvkEAM3vSukjmOa8YsTta-JBp6sqzbcBkaACS-LH0RcsbMGZQ4Qzg1-DH3Tj_5NATYO5rYyjPGFdvx2Zzf5_XG_CXOsvxcy6yPY0J4BYWqIC9rmF0O-LNG3oomVp9gy8ugL2Dy6nwhBPRy-68ILxWaHxAI0ZE9pw3-qcFzoFSt5TOXNj77vcwY9xS"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                          Staff UX Researcher
                        </h3>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
                          Airbnb • Remote
                        </p>
                      </div>
                    </div>
                    {/* Match Score */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1.5 text-primary font-bold text-lg">
                        <span className="material-symbols-outlined fill text-[20px]">
                          verified
                        </span>
                        94%
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted-light">
                        Match Score
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-background-light dark:bg-gray-800 text-xs font-semibold text-text-muted-light border border-gray-200 dark:border-gray-700 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        payments
                      </span>{" "}
                      $160k - $210k
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-xs font-semibold text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        bolt
                      </span>{" "}
                      Urgent
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-background-light dark:bg-gray-800 text-xs font-semibold text-text-muted-light border border-gray-200 dark:border-gray-700">
                      Contract
                    </span>
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark line-clamp-2 mb-4 leading-relaxed">
                    Join our host experience team. Ideal candidate has 5+ years
                    in{" "}
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-1 rounded">
                      qualitative research
                    </span>{" "}
                    and experience with global markets...
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button className="flex-1 bg-primary hover:bg-blue-700 text-white font-semibold text-sm h-10 rounded-lg transition-colors shadow-sm">
                      Apply Now
                    </button>
                    <button
                      className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-text-muted-light hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      title="Save Job"
                    >
                      <span className="material-symbols-outlined">
                        bookmark
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Area: New Opportunities */}
            <section className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  New Opportunities
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted-light font-medium">
                    Sort by:
                  </span>
                  <select className="bg-transparent text-sm font-semibold border-none focus:ring-0 cursor-pointer text-text-main-light dark:text-text-main-dark p-0 pr-6">
                    <option>Most Recent</option>
                    <option>Salary: High to Low</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {/* Standard Job Card */}
                <div className="group bg-white dark:bg-card-dark rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                    <div className="flex gap-4 items-start">
                      <div className="size-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-2 border border-gray-100 dark:border-gray-700 shrink-0">
                        <img
                          alt="Microsoft Logo"
                          className="w-full h-auto object-contain"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnjCdNHhVDAQnWz_veVz0zbzMJPAO2zllwy9WLL91KKjHUYACOO-OzVB_XV6oxT4fmnuscDvkQ4bqfNLDdwRYnLx511nIS4c8ioYYiYACG4GDadKMrHEgfouthAkz3xCQM3Zjd4VM5nzX5g3niE43iyt9J9oCO1VqBjDGGy1Kk29oVi-BrakC7WzV_8W8cPQVb4LaWd7DLmevUmUmXi_zP7NvHrA7T0CdgsCDSHWk1m_64AqzXkPCFNbjkPwn6-FkUc2c3tmux4Ayv"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                          UX Engineer II
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted-light mt-1">
                          <span className="font-medium text-text-main-light dark:text-text-main-dark">
                            Microsoft
                          </span>
                          <span className="size-1 rounded-full bg-gray-300"></span>
                          <span>Redmond, WA (Hybrid)</span>
                          <span className="size-1 rounded-full bg-gray-300"></span>
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            $135k - $170k
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pl-16 md:pl-0">
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          85% Match
                        </span>
                        <span className="text-xs text-text-muted-light">
                          Posted 4h ago
                        </span>
                      </div>
                      <button className="hidden md:flex h-9 px-4 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark line-clamp-2 mt-3 pl-0 md:pl-16">
                    Bridging the gap between design and engineering. You will
                    prototype new interaction models for Surface devices...
                  </p>
                </div>

                {/* Standard Job Card */}
                <div className="group bg-white dark:bg-card-dark rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                    <div className="flex gap-4 items-start">
                      <div className="size-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-2 border border-gray-100 dark:border-gray-700 shrink-0">
                        <img
                          alt="Meta Logo"
                          className="w-full h-auto object-contain"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp57I7_6xgZqsjitXmPFzzX9DOAilzC7Vljjv6Q7tZErKw1Vgy441mEPpp5G2WHCBG7McTUAiQL6eQLhrEEmykxFSV3WZHbkgXw6apwSN4HIKPK62BglZ0-O_mBuLESzkfcPds1K0kJO5IV4ivFLbir8p0fvOPxrYRxkMMz6bxqFHcnv8PQhIZYy6F_kSN85qtp_IomlX5-ZuuElQRRvwA9DrGWxpQijQyKOArJlLJraRQ87liErLULql5XPtteOTeRn2eAHVhRXHq"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                          Product Design Manager
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted-light mt-1">
                          <span className="font-medium text-text-main-light dark:text-text-main-dark">
                            Meta
                          </span>
                          <span className="size-1 rounded-full bg-gray-300"></span>
                          <span>Menlo Park, CA</span>
                          <span className="size-1 rounded-full bg-gray-300"></span>
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            $210k - $280k
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pl-16 md:pl-0">
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          82% Match
                        </span>
                        <span className="text-xs text-text-muted-light">
                          Posted 6h ago
                        </span>
                      </div>
                      <button className="hidden md:flex h-9 px-4 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark line-clamp-2 mt-3 pl-0 md:pl-16">
                    Leading a team of 5 designers on the Reality Labs team.
                    Experience with AR/VR interfaces is a huge plus...
                  </p>
                </div>

                {/* Standard Job Card */}
                <div className="group bg-white dark:bg-card-dark rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                    <div className="flex gap-4 items-start">
                      <div className="size-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-2 border border-gray-100 dark:border-gray-700 shrink-0">
                        <img
                          alt="Netflix Logo"
                          className="w-full h-auto object-contain"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrpKH5XxzXMiAuhE0f816lz50OzpEpRarvPCJPqfN0NR5yXwT04uGuxIs1kTp9IxJVWD8z4hNPL4gzKG89sUlrZnMcNwxxra3h6ffua7Zb24Wg_oPOXVcczoW545DrX4N0PZZTdeolq-xWTIW2TKBzX29KJPpm4LUV4RSmqK3ZHt-Ggp02axEvMcuOG5k8klDzbbsfbobz6ZKn7PY8j9W-c5ngade1nzkphxT_kqneXdrrem93ZbIpUdcOsTKhrjolfYZReLObC0Ku"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                          Senior UI Designer
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted-light mt-1">
                          <span className="font-medium text-text-main-light dark:text-text-main-dark">
                            Netflix
                          </span>
                          <span className="size-1 rounded-full bg-gray-300"></span>
                          <span>Los Gatos, CA</span>
                          <span className="size-1 rounded-full bg-gray-300"></span>
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            $190k - $350k
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pl-16 md:pl-0">
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          78% Match
                        </span>
                        <span className="text-xs text-text-muted-light">
                          Posted 8h ago
                        </span>
                      </div>
                      <button className="hidden md:flex h-9 px-4 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark line-clamp-2 mt-3 pl-0 md:pl-16">
                    Focusing on TV and cinematic interfaces. You will work
                    closely with our content creative teams...
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="text-sm font-semibold text-primary hover:bg-primary/5 px-6 py-3 rounded-full transition-colors border border-primary/20">
                  Load More Opportunities
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>

      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
        }
        .material-symbols-outlined {
          font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        }
        .material-symbols-outlined.fill {
          font-variation-settings: "FILL" 1;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </>
  );
};

export default JobSearchPage;
