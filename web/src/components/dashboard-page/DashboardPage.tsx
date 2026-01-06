import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex h-screen w-full">
      {/* SIDEBAR */}
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#151a2d] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 pb-2">
            <div className="flex gap-3 items-center">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-xl size-10 shadow-sm"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3fk-6dj-RaOEDT0Um6y0ou5jX0b8GdUpvsF0UCVKUGrTz0Ct6HCM3skrtT0Ha144WkFx-UA2XB9_LUlg8dXwhWOroXDdlZ5EsZj7BCuqzfgs_XDbtXruAEkBGuZWhSZdIPAJdHEORs8uD729_a5OHH1ui59Nx0K7OvwfXKZuY4Ez_G1YPYTSnO9bumiei2x9i5xo-iLTR9Akn_zG5ru1OwWD4yZTaCcx8Nom4RUma5me18eMNxDZljgXTi8X_0vsL0kbgKHC1na3f")',
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">
                  CareerAI
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
                  Personal Assistant
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
            {/* Dashboard (Active) */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:bg-primary dark:text-white group transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                dashboard
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>

            {/* Resume */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                description
              </span>
              <span className="text-sm font-medium">Resume &amp; ATS</span>
            </a>

            {/* Job Search */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                work
              </span>
              <span className="text-sm font-medium">Job Search</span>
            </a>

            {/* Assignments */}
            <div className="flex flex-col">
              <a
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white transition-colors"
                href="#"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px]">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">Assignments</span>
                </div>
                <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  3
                </span>
              </a>
            </div>

            {/* Settings */}
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[24px]">
                settings
              </span>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </nav>

          {/* Bottom User Actions */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors">
              <span className="material-symbols-outlined text-[24px]">
                logout
              </span>
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative">
        {/* Header Section */}
        <header className="w-full px-8 pt-8 pb-4">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                Good morning, Alex
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-sm">
                  trending_up
                </span>
                Your career score is up{" "}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  12%
                </span>{" "}
                this week.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined text-[20px]">
                  qr_code_scanner
                </span>
                <span>Scan Resume</span>
              </button>
              <button className="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all">
                <span className="material-symbols-outlined text-[20px]">
                  smart_toy
                </span>
                <span>Ask AI Coach</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="px-8 pb-12 w-full">
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Stat 1 */}
              <div className="bg-white dark:bg-[#1e2335] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    New Job Matches
                  </p>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-0.5 rounded-full font-medium">
                    +2 today
                  </span>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">
                  5
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white dark:bg-[#1e2335] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Active Applications
                  </p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">
                  12
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white dark:bg-[#1e2335] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Interviews
                  </p>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">
                  2
                </p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white dark:bg-[#1e2335] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Profile Views
                  </p>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                    +15%
                  </span>
                </div>
                <p className="text-slate-900 dark:text-white text-3xl font-bold">
                  48
                </p>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Col 1: Resume Health */}
              <div className="flex flex-col gap-6">
                {/* Resume Card */}
                <div className="bg-white dark:bg-[#1e2335] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">
                          description
                        </span>
                      </div>
                      <h3 className="text-slate-900 dark:text-white font-semibold">
                        Resume Health
                      </h3>
                    </div>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between items-end">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">
                        85
                        <span className="text-lg text-slate-400 font-normal">
                          /100
                        </span>
                      </span>
                      <span className="text-sm text-orange-500 font-medium">
                        Needs Attention
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-primary h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                      Action: Fix 3 formatting errors found by ATS scanner.
                    </p>
                  </div>
                  <button className="mt-2 w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Optimize Resume
                  </button>
                </div>

                {/* Career Coach Tip */}
                <div className="bg-gradient-to-br from-indigo-600 to-primary rounded-xl shadow-lg p-6 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-yellow-300">
                        lightbulb
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                        Daily AI Tip
                      </span>
                    </div>
                    <p className="font-medium text-lg leading-snug">
                      "Add numeric results to your 'Project Lead' role to
                      increase ATS visibility by ~20%."
                    </p>
                    <button className="self-start mt-2 text-sm font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors backdrop-blur-sm">
                      Apply Suggestion
                    </button>
                  </div>
                </div>
              </div>

              {/* Col 2: Job Tracker / Matches */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Assignments */}
                <div className="bg-white dark:bg-[#1e2335] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600">
                        <span className="material-symbols-outlined">
                          assignment_turned_in
                        </span>
                      </div>
                      <h3 className="text-slate-900 dark:text-white font-semibold">
                        Priority Assignments
                      </h3>
                    </div>
                    <a
                      className="text-primary text-sm font-medium hover:underline"
                      href="#"
                    >
                      View All
                    </a>
                  </div>
                  <div className="flex flex-col gap-3">
                    {/* Task Item 1 */}
                    <div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 dark:hover:border-primary/50 bg-slate-50 dark:bg-slate-800/30 transition-all group">
                      <div className="flex-shrink-0">
                        <input
                          className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
                          type="checkbox"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-primary transition-colors">
                          Update LinkedIn Headline
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          Based on new resume keywords
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded">
                          Due Today
                        </span>
                      </div>
                    </div>

                    {/* Task Item 2 */}
                    <div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 dark:hover:border-primary/50 bg-slate-50 dark:bg-slate-800/30 transition-all group">
                      <div className="flex-shrink-0">
                        <input
                          className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
                          type="checkbox"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-primary transition-colors">
                          Research "TechStart" Interview
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          Interview scheduled for Thu, 2pm
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-slate-500">
                          Tomorrow
                        </span>
                      </div>
                    </div>

                    {/* Task Item 3 */}
                    <div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 dark:hover:border-primary/50 bg-slate-50 dark:bg-slate-800/30 transition-all group">
                      <div className="flex-shrink-0">
                        <input
                          className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
                          type="checkbox"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-900 dark:text-white font-medium text-sm group-hover:text-primary transition-colors">
                          Complete Python Assessment
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          For Senior Dev Role at Acme Corp
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-slate-500">
                          In 2 days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Matches Table */}
                <div className="bg-white dark:bg-[#1e2335] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col flex-1">
                  <div className="p-6 pb-0 flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600">
                        <span className="material-symbols-outlined">
                          work_history
                        </span>
                      </div>
                      <h3 className="text-slate-900 dark:text-white font-semibold">
                        Top Job Matches
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400">
                        <span className="material-symbols-outlined">
                          filter_list
                        </span>
                      </button>
                      <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400">
                        <span className="material-symbols-outlined">
                          refresh
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                      <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase font-semibold text-slate-500 dark:text-slate-400">
                        <tr>
                          <th className="px-6 py-3">Role</th>
                          <th className="px-6 py-3">Company</th>
                          <th className="px-6 py-3">Match Score</th>
                          <th className="px-6 py-3">Status</th>
                          <th className="px-6 py-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                            Senior Product Designer
                          </td>
                          <td className="px-6 py-4 flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-700 bg-cover"
                              style={{
                                backgroundImage:
                                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARBFMg0GQYrp9ut3wUxoeGiJH0sDkrB2uFnbqLsLxTaAw_zDO6-Y8nLFdtlvabm6-KAzwiSP10sXONRnCBaqYGLuBouNj5msv3DFByZCYV2883p3NnOnS--JVlqEuraSYqhoXlYde2-bFSjEpAeohNnTYGbQ8JRO2OflquQij0ZQXuKFTNi_VbwKinPJuu3uPsEbwk64-se4KEh207LYEjBSSQarpLul7pzqzLlGOiTd3tv_CwEzwf_n_oIXO3RsF2NpRc6oSpuUBS")',
                              }}
                            ></div>
                            Acme Corp
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full text-xs">
                              98% Match
                            </span>
                          </td>
                          <td className="px-6 py-4">New</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:text-blue-700 font-medium text-sm">
                              Apply
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                            UX Researcher
                          </td>
                          <td className="px-6 py-4 flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-700 bg-cover"
                              style={{
                                backgroundImage:
                                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhr5sxkFQp5dMIZChdviRYd5hCY13oSDRFIqSgLifL6RsxvgiROe0EXeIUGfhkjN9-x4bTEGee0hd-x8T41ouv7FGsU0NICRwVSI7EUnKPJjYfqUSXmNGu10lKZoIAe6lcuSmXJBZ4tEmBpvZotxyenkfO-xP2-gKn1rscrindT7IYkAWr_ejjUyfGLVEmsTEIa8JlpE5zwUtRrtdKiaUo47358zDRj7S2Pf6lmyRSXZgCWam9gq9p8LnViYyWYt_1pSrv5gWBUWCy")',
                              }}
                            ></div>
                            GlobalSystems
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full text-xs">
                              92% Match
                            </span>
                          </td>
                          <td className="px-6 py-4">Saved</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:text-blue-700 font-medium text-sm">
                              Apply
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                            Product Manager
                          </td>
                          <td className="px-6 py-4 flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-700 bg-cover"
                              style={{
                                backgroundImage:
                                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYbBuH40JytBlyA0nsPPN4V_3xyw6jC4SiuysJyaumLBKtgh2lYp_5CgLVyq9LQ1xFS6XgJBQpGBtmIsjexP_l9ewEx9XXvGRnwIue8tgRJC-TjfYbTYSht1N9s54o6bHP4FLFRmgtv73C1kVSiXF1z4kYuyf-ZB-JXrJMxtASzjLjKfbz8S3Jh1muCpSU83k07GSZLAsd7ACGQbJo3sB6RbKueMVERs1AmzV6xTw8grA0Ql-V_7pZa7xcK6RJoukdm7_OHGCfB2pG")',
                              }}
                            ></div>
                            Innovate Inc
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 font-semibold bg-yellow-50 dark:bg-yellow-900/20 px-2 py-0.5 rounded-full text-xs">
                              85% Match
                            </span>
                          </td>
                          <td className="px-6 py-4">New</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:text-blue-700 font-medium text-sm">
                              Apply
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-white/5 text-center">
                    <button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                      View All 5 Matches
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
