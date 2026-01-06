'use client';
import React, { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface Skill {
  name: string;
  isAI?: boolean;
}

interface Resume {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  lastEdited: string;
}

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  status: 'Applied' | 'Saved';
  statusColor: string;
}

interface Tab {
  label: string;
  active: boolean;
}

interface Preference {
  id: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  enabled: boolean;
}

const ProfilePage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<Preference[]>([
    {
      id: 'dark-mode',
      icon: 'dark_mode',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-50 dark:bg-indigo-900/20',
      title: 'Dark Mode',
      description: 'Adjust the appearance of the app',
      enabled: false
    },
    {
      id: 'job-alerts',
      icon: 'mail',
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBg: 'bg-purple-50 dark:bg-purple-900/20',
      title: 'Job Alerts',
      description: 'Receive email digests for new matches',
      enabled: true
    }
  ]);

  const navLinks: NavLink[] = [
    { label: 'Dashboard', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Resumes', href: '#' },
    { label: 'Community', href: '#' }
  ];

  const skills: Skill[] = [
    { name: 'Product Strategy' },
    { name: 'UX Research' },
    { name: 'Figma' },
    { name: 'React' },
    { name: 'AI Suggestion', isAI: true }
  ];

  const tabs: Tab[] = [
    { label: 'My Documents', active: true },
    { label: 'Saved Jobs', active: false },
    { label: 'Account Settings', active: false },
    { label: 'Billing', active: false }
  ];

  const resumes: Resume[] = [
    {
      id: '1',
      title: 'Tech Lead Resume - Google',
      icon: 'picture_as_pdf',
      iconColor: 'text-red-500 dark:text-red-400',
      iconBg: 'bg-red-50 dark:bg-red-900/20',
      lastEdited: 'Edited 2 hours ago'
    },
    {
      id: '2',
      title: 'General Management CV',
      icon: 'description',
      iconColor: 'text-blue-500 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20',
      lastEdited: 'Edited yesterday'
    }
  ];

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Product Designer',
      company: 'Spotify',
      location: 'Remote',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1_KEtqtSIfHvnWaH3CS3t_jVwbFMqsZ-zIa7WBTQk-kIsX5tk1SNS-zGcYyuM4bDNI7ttZ0pRvDmZmNSLm9K99yvOhI9y-84gzKiAorGhuxVy3Wcoanvq-YitS2Av5AOuobclty4pd6KAbtoaZZ3Gzo05_nGs9tH9Q0pyuW-vesgqrtH6lx6zotnPYrNdh4e6qI0rvPVQOlUoSr1HC7lzEcbgKaJ1licaBQApwx3wEP5BThWyXc9qNApYmK3ooVeyGi807SFR7Uep',
      status: 'Applied',
      statusColor: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-100 dark:border-green-800'
    },
    {
      id: '2',
      title: 'UX Researcher',
      company: 'Airbnb',
      location: 'San Francisco',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzxmYhvmETAX4v2dHdZo_fQw88phOxpS4Hxi7PUE1NrFYI4-vFoTB9IslU2wQsiR_RXSNkWYUV-FI5cq9y8YXR7JtXPWoVbiwaeZpQTh16TOZEw4pkVmuH8YQG8w3VY3HEINrbpE3us-U-0E8qAV5tRc9QhNEcIQxvf9xbQTbbsP3TBTqbCAPXc6qewOoJytfewViwoOSp0bPoJMwufXVlcviCiwHEc_o7F0JhvZSDcwhcJzQqACy27BchJumJYAHcOzeqGSNvOMiX',
      status: 'Saved',
      statusColor: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700'
    }
  ];

  const togglePreference = (id: string): void => {
    setPreferences(prev =>
      prev.map(pref =>
        pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
      )
    );
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-gray-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white px-6 py-3 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="size-8 text-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">bubble_chart</span>
          </div>
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-[-0.015em]">CareerAI</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium leading-normal"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
            </button>
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-gray-100 cursor-pointer"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAauh6_nPvFAtFvlI_R47P7KIWIuI-tzzjp6GhZA4vVEAn-t-pglWxpgwgpf3m8RW6gXNeYh_-6ZfO4lltfcT601RfA-j8Kq71pbV3NvsNBo7gvkVKo3lrVrXANEqLGXjs8iAitsKe92cxDB5PrKdzaACzudzReq0mZyP--efIDG9mRveT7w5tL2vxolM5p4puv1tvy4sxA2ih7EHyJAj8igzqTq75QZZxLT8GKFarEwEpa-BVchf3N6dlb1knwWovorWvFWWoAx19m")'
              }}
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-900 p-2"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 px-4 md:px-8 py-8 w-full max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-6 text-sm">
          <a className="text-gray-600 hover:text-blue-600 transition-colors font-medium" href="#">
            Home
          </a>
          <span className="text-gray-600">/</span>
          <span className="text-gray-900 font-medium">Profile &amp; Settings</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar: Profile Card & Quick Stats */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
              </div>
              <div className="px-6 pb-6 -mt-12 flex flex-col items-center text-center">
                <div className="relative">
                  <div
                    className="bg-center bg-no-repeat bg-cover rounded-full size-24 border-4 border-white shadow-md"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDepofPgA4Xe6_0JLjlYB4a3A7vt2OSARcBMCIndz_5uQ5QdwEA7G7EIDqdkVgrXgx_yFhjlPM-ZaL-Vsu6EzRpZk0BPMdTfI5nVzg-FHlS1AMujTdM5-mMyb2qum05oy1FF9PRwp00hu_wQqlQ48ntf2lVFfk5KpD2qFivpCOotaM2o9046OZXY6ncnR6MHFjpwOQ4yQFjrSV3NGQGBGVS8AjibK4X51dxZZv5JIoXSzDf68hpSkeRGJnI9sFGAHE4xHUEoAAX62OM")'
                    }}
                  />
                  <div className="absolute bottom-1 right-1 bg-green-500 border-2 border-white rounded-full size-4"></div>
                </div>
                <h1 className="mt-4 text-xl font-bold text-gray-900">Alex Mercer</h1>
                <p className="text-gray-600 text-sm font-medium mb-1">Senior Product Designer</p>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mt-2 border border-blue-100">
                  Open to work
                </div>
                <div className="w-full mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                      Profile Strength
                      <span className="material-symbols-outlined text-base text-yellow-500" title="AI Estimated">
                        spark
                      </span>
                    </span>
                    <span className="text-sm font-bold text-blue-600">85%</span>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-left">Add 2 more skills to reach All-Star status.</p>
                </div>
              </div>
            </div>

            {/* Skills Widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Top Skills</h3>
                <button className="text-blue-600 hover:text-blue-700 p-1 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-default ${
                      skill.isAI
                        ? 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300 cursor-pointer group'
                        : 'bg-gray-50 text-gray-900 border-gray-200 hover:border-blue-600/50'
                    }`}
                  >
                    {skill.isAI && <span className="material-symbols-outlined text-base animate-pulse">auto_awesome</span>}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content: Settings & Data */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto pb-2 scrollbar-hide border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`px-5 py-3 text-sm font-${tab.active ? 'semibold' : 'medium'} ${
                    tab.active
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900 transition-colors'
                  } whitespace-nowrap`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Resumes Section */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Saved Resumes</h3>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm shadow-blue-500/30">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Create with AI
                </button>
              </div>

              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all hover:shadow-md hover:border-blue-600/30"
                >
                  <div className={`size-12 rounded-lg ${resume.iconBg} flex items-center justify-center ${resume.iconColor} shrink-0`}>
                    <span className="material-symbols-outlined text-2xl">{resume.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-gray-900 truncate">{resume.title}</h4>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <span className="material-symbols-outlined text-base">schedule</span>
                      {resume.lastEdited}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                    <button className="flex-1 sm:flex-none items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      AI Analyze
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* Saved Jobs Section Preview */}
            <section className="flex flex-col gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Recent Saved Jobs</h3>
                <a className="text-blue-600 text-sm font-semibold hover:underline" href="#">
                  View All
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="group bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-600/40 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-white p-2 rounded-lg border border-gray-100 size-12 flex items-center justify-center">
                        <img alt={`${job.company} Logo`} className="w-8 h-8 object-contain opacity-90" src={job.logo} />
                      </div>
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold border ${job.statusColor}`}>
                        {job.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h4>
                    <p className="text-sm text-gray-600">
                      {job.company} • {job.location}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Preferences Quick Toggles */}
            <section className="flex flex-col gap-4 pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Preferences</h3>
              <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                {preferences.map((pref) => (
                  <div key={pref.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${pref.iconBg} ${pref.iconColor}`}>
                        <span className="material-symbols-outlined">{pref.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{pref.title}</p>
                        <p className="text-xs text-gray-600">{pref.description}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={pref.enabled}
                        onChange={() => togglePreference(pref.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Material Symbols CDN */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default ProfilePage;