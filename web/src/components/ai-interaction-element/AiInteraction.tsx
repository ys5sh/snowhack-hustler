import React, { useState } from 'react';

interface NavItem {
  label: string;
  icon: string;
  href: string;
  active?: boolean;
  filled?: boolean;
}

interface StatCard {
  id: string;
  label: string;
  value: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  change: string;
}

interface SuggestionCard {
  id: string;
  type: string;
  typeBg: string;
  typeColor: string;
  title: string;
  description: string;
  currentText?: string;
  suggestedText?: string;
  skills?: string[];
  newSkill?: string;
  primaryAction: string;
  secondaryAction: string;
}

interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: string;
  matchScore: string;
  matchNote: string;
}

const AiInteraction: React.FC = () => {
  const [fabOpen, setFabOpen] = useState<boolean>(false);
  const [dismissedSuggestions, setDismissedSuggestions] = useState<string[]>([]);

  const navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', href: '#', active: true, filled: true },
    { label: 'Resume Builder', icon: 'description', href: '#' },
    { label: 'Job Search', icon: 'work', href: '#' },
    { label: 'Interview Prep', icon: 'school', href: '#' }
  ];

  const stats: StatCard[] = [
    {
      id: 'resume',
      label: 'Resume Health',
      value: '85/100',
      icon: 'description',
      iconBg: 'bg-blue-50 dark:bg-blue-900/30',
      iconColor: 'text-blue-600',
      change: '+5%'
    },
    {
      id: 'match',
      label: 'Job Match Score',
      value: '92%',
      icon: 'work_history',
      iconBg: 'bg-purple-50 dark:bg-purple-900/30',
      iconColor: 'text-purple-600',
      change: '+12%'
    },
    {
      id: 'views',
      label: 'Profile Views',
      value: '145',
      icon: 'visibility',
      iconBg: 'bg-orange-50 dark:bg-orange-900/30',
      iconColor: 'text-orange-600',
      change: '+20%'
    }
  ];

  const suggestions: SuggestionCard[] = [
    {
      id: 'summary',
      type: 'Summary Rewrite',
      typeBg: 'bg-blue-600/10',
      typeColor: 'text-blue-600',
      title: 'Enhance Professional Summary',
      description: 'Your current summary is a bit generic. Here\'s a version tailored to the Senior Product Designer roles you are targeting.',
      currentText: 'Designer with 5 years experience looking for new opportunities.',
      suggestedText: 'Innovative Product Designer with 5+ years of experience scaling SaaS platforms. Proven track record in user-centric design...',
      primaryAction: 'Apply Suggestion',
      secondaryAction: 'Edit'
    },
    {
      id: 'skill',
      type: 'Skill Gap',
      typeBg: 'bg-purple-100 dark:bg-purple-900/40',
      typeColor: 'text-purple-700 dark:text-purple-300',
      title: 'Add "Figma Prototyping"',
      description: '85% of the jobs you matched with list "Advanced Prototyping" as a required skill. You have it in your projects, but not in your skills list.',
      skills: ['UI Design', 'User Research'],
      newSkill: 'Figma Prototyping',
      primaryAction: 'Add to Skills',
      secondaryAction: 'Ignore'
    }
  ];

  const jobs: JobMatch[] = [
    {
      id: '1',
      title: 'Senior Product Designer',
      company: 'Stripe',
      location: 'Remote',
      salary: '$140k - $180k',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBDiH5KLwQBCOmWidzCkYSuGoXSY1FMBQP0Vweyd_B-qU4PIpUEqXaNS1lt0serhm9aHIctbzKnXr_CJgAr79AXqnzuxr8f--UundEqHTicnIvgppqBvmqq4CoHFXOSrHn5GWLiTrOZZ4lx6Ms7PyD6tHqtvjMHa4wsPfjYoKE6hSgD2fGtercDCA9XS1If6_EO50-C19wFY6o4Q21zAF-kZfqcIAokBj5FqYOh3WA9t5l_QXDkLwLFYA4D2STIwfeLHOBJW12b8Ck',
      matchScore: '98%',
      matchNote: 'Perfect skill alignment'
    },
    {
      id: '2',
      title: 'UX Lead, Design Systems',
      company: 'Airbnb',
      location: 'San Francisco',
      salary: '$160k - $210k',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBflT2Lgl8gsBrvdIb-BOu8YqrnX8o-7FXTsarUQoPy3OxveKHUPIp1LEzG03XPZDRkXcHp8zPFR5cm3qqPUT5PJ-DGUmjv3cqUSJvAwPCvFeNxiIggvEZtiQGhuREevpwamdx6plQ6_d392H-HKVO1PTg33_IiLj1tfnlOhl4RO7kkb8HwHildkOWNGk1nlUhxXOM2y3J9tJXMp9fGf-JQJiHU1eKI_yTGTWMfvvub3FYRjWbFQVfZ6YEL8sDEeAKncx79scuP3nis',
      matchScore: '94%',
      matchNote: 'Strong culture fit'
    }
  ];

  const dismissSuggestion = (id: string): void => {
    setDismissedSuggestions([...dismissedSuggestions, id]);
  };

  const visibleSuggestions = suggestions.filter(s => !dismissedSuggestions.includes(s.id));

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Side Navigation */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 flex-shrink-0 transition-colors duration-200">
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/10 flex items-center justify-center rounded-xl size-10 text-blue-600">
                <span className="material-symbols-outlined text-2xl">auto_awesome</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 text-lg font-bold leading-tight">CareerAI</h1>
                <p className="text-slate-500 text-xs font-medium">Personal Assistant</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    item.active
                      ? 'bg-blue-600/10 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50 group'
                  }`}
                  href={item.href}
                >
                  <span className={`material-symbols-outlined ${item.filled ? 'filled' : ''} ${!item.active ? 'group-hover:text-blue-600 transition-colors' : ''}`}>
                    {item.icon}
                  </span>
                  <span className={`text-sm ${item.active ? 'font-semibold' : 'font-medium'}`}>
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Settings */}
          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors group" href="#">
              <span className="material-symbols-outlined group-hover:text-blue-600 transition-colors">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </a>
            <div className="flex items-center gap-3 px-4 py-3 mt-2 border-t border-gray-200 pt-4">
              <div
                className="size-8 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBS4mek9eVNixolsMq1IsKBBFXpIA-WZf031kAKS0qqehXVQ8nLgzMVItitf7-S2ih6GRoZ_YImFOMUg_mmBZHbFLhUBZ9ACUYiPlLg0bn8Qcs-hpjFq7JupGtTPpaWFgS6NBfS1M90X2W7AMqyFUjlGhlIIjXG_3XJS_HLDyP-zfLPump80tWMjtkOH8bqsFzLvFwKlJgPBVY0SwVGpy9koz0dxdo5JfFXI8Vpn52RG-F32tcw9tJWF7ml4b6JFPljMwT8E96AHfYm")'
                }}
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-slate-900">Alex Morgan</p>
                <p className="text-xs text-slate-500">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative h-full">
        <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-8 pb-32">
          {/* Header Image / Welcome Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden min-h-[180px] md:min-h-[220px] shadow-sm group">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBabZYkvFSYkrmUEo7-Q1N9ZKfQ8AXfD7uDDTSUTbK8x59bA743BMDm_ClrydnwmCVS9XVppxIiTlacK1H1G8osUuLwRd44wP6SqqQC5D7Gywq7pPdOKArJNmVYtHUzsg_f8EC5hSENbbWtye90EZ8k2h4WrGhvK5jXwvBt1Tx2dt9xK2P7pNwHdS22-MZdzbVoQT7Ts3l8HNmCRUYi0nQgsg7bqQvxWKrl3CA35nhiKOIGH3rrM-i0xnxNimwDBSyus7fufYMQOxrm")'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20"></div>
            <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end h-full">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex</h2>
              <p className="text-slate-200 text-sm md:text-base max-w-lg">
                Your AI assistant has analyzed 12 new job postings and found 3 potential improvements for your resume.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 ${stat.iconBg} rounded-lg ${stat.iconColor}`}>
                    <span className="material-symbols-outlined">{stat.icon}</span>
                  </div>
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-semibold">
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <p className="text-slate-900 text-2xl font-bold mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* AI Insights Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">auto_awesome</span>
                Resume Optimization Suggestions
              </h3>
              <button className="text-sm text-blue-600 font-medium hover:underline">View all</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {visibleSuggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
                >
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`${suggestion.typeBg} ${suggestion.typeColor} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                        {suggestion.type}
                      </div>
                      <span
                        onClick={() => dismissSuggestion(suggestion.id)}
                        className="text-slate-400 material-symbols-outlined text-sm cursor-pointer hover:text-slate-600"
                      >
                        close
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{suggestion.title}</h4>
                    <p className="text-slate-500 text-sm mb-4">{suggestion.description}</p>

                    {suggestion.currentText && suggestion.suggestedText && (
                      <>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-2">
                          <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Current</p>
                          <p className="text-sm text-slate-600 line-through decoration-slate-400 decoration-1">
                            {suggestion.currentText}
                          </p>
                        </div>
                        <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                          <p className="text-xs text-blue-600 uppercase font-semibold mb-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                            Suggested
                          </p>
                          <p className="text-sm text-slate-800">{suggestion.suggestedText}</p>
                        </div>
                      </>
                    )}

                    {suggestion.skills && suggestion.newSkill && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {suggestion.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                        <span className="px-3 py-1 rounded-full border border-dashed border-blue-600 bg-blue-50 text-blue-600 text-sm flex items-center gap-1 pl-2">
                          <span className="material-symbols-outlined text-[16px]">add</span>
                          {suggestion.newSkill}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 border-t border-gray-200 bg-slate-50 flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors shadow-sm">
                      {suggestion.primaryAction}
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">
                      {suggestion.secondaryAction}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Matches Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900">Smart Job Matches</h3>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-200">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center hover:bg-slate-50 transition-colors"
                >
                  <div className="size-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <img alt={`${job.company} Logo`} className="size-8 object-contain opacity-80" src={job.logo} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{job.title}</h4>
                    <p className="text-sm text-slate-500">
                      {job.company} • {job.location} • {job.salary}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm">
                        <span className="material-symbols-outlined text-base">verified</span>
                        {job.matchScore} Match
                      </div>
                      <p className="text-xs text-slate-400">{job.matchNote}</p>
                    </div>
                    <button className="bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Floating AI Assistant */}
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
        onMouseEnter={() => setFabOpen(true)}
        onMouseLeave={() => setFabOpen(false)}
      >
        {/* Chat Bubble */}
        <div
          className={`bg-white rounded-2xl rounded-br-none shadow-xl border border-gray-200 p-4 w-[300px] mb-2 transform origin-bottom-right transition-all duration-300 ${
            fabOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-3 mb-3 border-b border-gray-200 pb-2">
            <div className="size-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-lg">smart_toy</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Career Assistant</p>
              <p className="text-xs text-slate-500">Online</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded-lg rounded-tl-none">
              Hi Alex! I found a few things on your resume we could tweak for the Stripe application. Want to see?
            </p>
            <div className="flex gap-2 mt-1">
              <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors">
                Yes, show me
              </button>
              <button className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full hover:bg-slate-200 transition-colors">
                Maybe later
              </button>
            </div>
          </div>
        </div>

        {/* FAB Button */}
        <button
          className={`relative size-14 md:size-16 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center ${
            fabOpen ? 'rotate-90' : ''
          }`}
        >
          <span className={`material-symbols-outlined text-3xl ${fabOpen ? 'hidden' : ''}`}>auto_awesome</span>
          <span className={`material-symbols-outlined text-3xl ${fabOpen ? '-rotate-90' : 'hidden'}`}>close</span>
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 size-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        </button>
      </div>

      {/* Material Symbols CDN */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default AiInteraction;