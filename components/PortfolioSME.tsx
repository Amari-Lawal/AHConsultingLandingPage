'use client';

import React from 'react';

// ==========================================
// SME & GROWTH PORTFOLIO DATA (AMARI - DARK)
// ==========================================

const P1_NAV_LINKS = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const P1_STATS = [
  { value: '5/5', suffix: '', label: 'Services Assessed', description: 'Complete NIST cybersecurity maturity coverage for CNI transport networks' },
  { value: '20+', suffix: '', label: 'Repositories Mastered', description: 'Seamless features delivered within massive Home Office caseworking systems' },
  { value: 'Next-Q', suffix: '', label: 'Roadmap Alignment', description: 'Evidence-based user trials directly unlocking Ministry of Defence features' },
  { value: 'Active', suffix: '', label: 'BAU Integration', description: 'Assessed security recommendations successfully launched into live operations' },
];

const P1_STATUS_ITEMS = [
  { label: 'Availability', value: '● Available', isGreen: true },
  { label: 'Location', value: 'London, UK' },
  { label: 'Contract type', value: 'Freelance / B2B' },
  { label: 'Notice period', value: '2 weeks' },
  { label: 'Remote', value: 'Yes' },
  { label: 'Primary stack', value: 'Java · C# · Python · GCP · Security' },
];

const P1_EXPERTISE = [
  {
    title: 'Java & Backend Engineering',
    description: 'I build clean, testable, and robust backend microservices with Java 17+, Spring Boot, and modern design patterns. I love solving high-concurrency caseworking workflows.',
    tags: ['Java 21', 'Spring Boot', 'Microservices', 'Spring Security', 'Maven'],
    isAccent: true,
  },
  {
    title: 'SecOps & APM Diagnostics',
    description: 'I use Datadog telemetry to debug live production environments fast, and embed security scans (like Checkmarx) directly into CI/CD pipelines for peaceful releases.',
    tags: ['Datadog', 'Checkmarx', 'Production Debugging', 'Secure SDLC'],
    isAccent: true,
  },
  {
    title: 'Fullstack Support (C# & Web APIs)',
    description: 'Supporting full-stack ASP.NET Core applications and delivering clean web APIs. Focused on building responsive system features that admins and researchers love.',
    tags: ['C#', 'ASP.NET Core', 'Fullstack', 'Web APIs', 'SQL Server'],
    isAccent: false,
  },
  {
    title: 'Evidence-Led Feature Discovery',
    description: 'I organize user trials and run structured stakeholder interviews. Using Likert-scale sentiment math, I write actionable reports to validate your upcoming roadmaps.',
    tags: ['User Trials', 'Interviews', 'Data Analysis', 'Likert Scaling'],
    isAccent: false,
  },
];

const P1_PROJECTS = [
  {
    tag: 'Java Engineering',
    tagClass: 'bg-[#58A6FF]/10 text-[#58A6FF] border border-[#58A6FF]/20',
    title: 'Large-Scale caseworking microservices (Home Office)',
    description: 'Contributed feature updates and backend logic across a massive 20-repository public sector caseworking app. Ensured strict performance and uptime across distributed codebases.',
    tags: ['Java', 'Spring Boot', 'Microservices', 'API Design', 'Multi-Repo'],
    metric: '20+',
    metricLabel: 'Repositories managed',
  },
  {
    tag: 'Cybersecurity',
    tagClass: 'bg-[#E76500]/10 text-[#FF8C42] border border-[#E76500]/20',
    title: 'National Infrastructure maturity audit (National Highways)',
    description: 'Conducted priority cybersecurity audits across national transport infrastructure using the NIST Framework. Delivered clean, practical recommendations built to launch directly into active operations.',
    tags: ['NIST Framework', 'PA Consulting', 'Security Maturity', 'CNI Protection'],
    metric: '100%',
    metricLabel: 'Assessed audit scope',
  },
  {
    tag: 'APM & Backend',
    tagClass: 'bg-[#3FB950]/10 text-[#3FB950] border border-[#3FB950]/20',
    title: 'Production support & scanning integration (Rentokil Initial)',
    description: 'Shipped robust backend features while automating static security testing using Checkmarx. Leveraged advanced Datadog APM tracing to rapidly isolate and debug production user issues.',
    tags: ['Java', 'Checkmarx SAST', 'Datadog APM', 'Live Tracing'],
    metric: '0',
    metricLabel: 'Live incident downtime',
  },
  {
    tag: 'User Research',
    tagClass: 'bg-[#58A6FF]/10 text-[#58A6FF] border border-[#58A6FF]/20',
    title: 'User sentiment trials & analytics (Ministry of Defence)',
    description: 'Ran user trials and stakeholder interviews. Leveraged qualitative feedback and quantitative Likert scaling to compile report deliverables that greenlit high-priority features.',
    tags: ['User Research', 'Likert Scales', 'Data Analysis', 'Roadmap Alignment'],
    metric: 'Active',
    metricLabel: 'Quarterly features cleared',
  },
];

const P1_STACK = [
  {
    group: 'Java & Backend',
    items: ['Java 21 / 17 / 11', 'Spring Boot 3', 'Spring Security', 'Hibernate / JPA', 'Microservices', 'Maven / Gradle'],
  },
  {
    group: 'SecOps & APM',
    items: ['NIST Cyber Framework', 'Checkmarx SAST', 'Datadog APM', 'Secure SDLC', 'Docker / Kubernetes', 'Relational DBs'],
  },
  {
    group: 'Web & Research',
    items: ['C# / ASP.NET Core', 'Python / Django / Flask', 'User Trial Design', 'Likert Scaling', 'Actionable Insights', 'Data Analysis'],
  },
];

const P1_TESTIMONIALS = [
  {
    quote: 'Amari is the engineer you bring in when you need someone who can switch effortlessly between backend microservices, security compliance, and user feedback analysis. Highly practical, down-to-earth delivery style.',
    initials: 'MD',
    name: 'Ministry of Defence Product Owner',
    role: 'Principal Delivery Manager · UK Defence Tech',
  },
  {
    quote: 'He was instrumental in delivering our national infrastructure security assessments using the NIST framework. He translates complex requirements into straightforward guidelines that launch seamlessly into BAU.',
    initials: 'PA',
    name: 'PA Consulting Lead',
    role: 'Managing Consultant · Public Sector Advisory',
  },
];

interface PortfolioSMEProps {
  availabilityQuarter: string;
  onToggleLayout: (isEnterprise: boolean) => void;
  isEnterprise: boolean;
}

export default function PortfolioSME({
  availabilityQuarter,
  onToggleLayout,
  isEnterprise,
}: PortfolioSMEProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0F0F0] font-sans selection:bg-[#E76500]/30 selection:text-white transition-colors duration-300">
      
      {/* ── NAV ── */}
      <nav className="bg-[#0A0A0A]/92 backdrop-blur-md border-b border-white/10 px-6 md:px-12 sticky top-0 z-50 h-[56px] flex items-center justify-between">
        <div className="font-mono text-[13px] text-[#FF8C42] tracking-wider select-none flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3FB950] inline-block animate-pulse" />
          {"// AHConsulting.dev"}
        </div>
        <div className="hidden md:flex items-center gap-8">
          {P1_NAV_LINKS.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-[13px] text-white/45 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="text-[13px] font-medium text-[#E76500] hover:bg-[#E76500] hover:text-white border border-[#E76500] px-4 py-1.5 rounded transition-all duration-150"
        >
          Hire me
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-12 py-24 max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-start">
          <div>
            <div className="font-mono text-[12px] text-[#FF8C42] tracking-widest uppercase flex items-center gap-3 mb-6 before:content-[''] before:inline-block before:w-8 before:h-[1px] before:bg-[#FF8C42]">
              Available for freelance &amp; consulting
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-normal leading-[1.08] tracking-tight text-white mb-6">
              Backend Engineer &amp; <em className="italic text-[#FF8C42] not-styled font-serif">Security Maturity</em> Consultant
            </h1>
            <p className="text-[17px] text-white/45 max-w-[520px] leading-relaxed mb-10 font-light">
              I build robust backend systems, audit security maturity using the NIST framework, and design strategic features using evidence-led user research. Let&apos;s deliver business impact together.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E76500] hover:bg-[#FF8C42] text-white text-[14px] font-medium rounded transition-all duration-150 shadow-md"
              >
                View my work
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:border-white/30 text-white text-[14px] font-normal rounded border border-white/10 transition-all duration-150"
              >
                Let&apos;s talk
              </a>
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-[#3FB950] bg-[#3FB950]/10 border border-[#3FB950]/20 rounded px-3 py-1.5 mt-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FB950] inline-block animate-pulse" />
              <span>@Available — open to new contracts from <strong>{availabilityQuarter}</strong></span>
            </div>
          </div>

          {/* Right Status Panel styled in Premium Dark theme */}
          <div className="bg-[#141414] border border-white/10 p-6 rounded-lg w-full">
            <div className="font-mono text-[10px] font-semibold text-white/50 tracking-widest uppercase mb-4 pb-3 border-b border-white/10">
              Current status
            </div>

            <div className="space-y-0.5">
              {P1_STATUS_ITEMS.map((item, idx) => {
                const isLast = idx === P1_STATUS_ITEMS.length - 1;
                return (
                  <div
                    key={item.label}
                    className={`flex justify-between items-baseline py-2 ${
                      isLast ? '' : 'border-b border-white/5'
                    }`}
                  >
                    <span className="text-[12px] text-white/45">{item.label}</span>
                    <span
                      className={`font-mono text-[13px] font-medium ${
                        item.isGreen ? 'text-[#3FB950]' : 'text-white'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#141414] border-t border-b border-white/10">
        <div className="max-w-[900px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {P1_STATS.map((stat, idx) => (
            <div key={idx} className="p-4 border-r border-white/10 last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0 border-white/10">
              <div className="font-serif text-3xl text-white leading-none mb-1.5">
                {stat.value}
                {stat.suffix && <span className="text-[#E76500] ml-0.5">{stat.suffix}</span>}
              </div>
              <div className="text-[12px] text-[#FF8C42] tracking-wider font-medium uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-white/35 leading-relaxed font-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPERTISE ── */}
      <section className="px-6 md:px-12 py-20 max-w-[900px] mx-auto border-b border-white/10" id="expertise">
        <div className="font-mono text-[11px] text-[#E76500] tracking-widest uppercase mb-3">
          What I do
        </div>
        <h2 className="font-serif text-3xl text-white mb-10 font-normal">
          Areas of expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {P1_EXPERTISE.map((exp, idx) => (
            <div key={idx} className="bg-[#141414] p-8 hover:bg-[#1E1E1E] transition-colors duration-200 flex flex-col justify-between">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-3">
                  {exp.title}
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-sm border ${
                      exp.isAccent 
                        ? 'bg-[#E76500]/10 text-[#FF8C42] border-[#E76500]/25' 
                        : 'bg-white/5 text-white/50 border-white/10'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="px-6 md:px-12 py-20 max-w-[900px] mx-auto border-b border-white/10" id="projects">
        <div className="font-mono text-[11px] text-[#E76500] tracking-widest uppercase mb-3">
          Selected engagements
        </div>
        <h2 className="font-serif text-3xl text-white mb-10 font-normal">
          Recent work
        </h2>
        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {P1_PROJECTS.map((proj, idx) => (
            <div key={idx} className="bg-[#141414] p-8 hover:bg-[#1E1E1E] transition-colors duration-200 grid grid-cols-1 md:grid-cols-[1fr_140px] gap-6 items-start">
              <div>
                <span className={`font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm inline-block mb-3 ${proj.tagClass}`}>
                  {proj.tag}
                </span>
                <h3 className="text-[16px] font-semibold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6 font-light">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="font-mono text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 text-white/50 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:text-right flex-shrink-0 md:border-l border-white/10 md:pl-6 h-full flex flex-col justify-center">
                <div className="font-serif text-2xl text-white leading-none">
                  {proj.metric}
                </div>
                <div className="text-[11px] text-white/45 mt-1 leading-snug">
                  {proj.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="px-6 md:px-12 py-20 max-w-[900px] mx-auto border-b border-white/10" id="stack">
        <div className="font-mono text-[11px] text-[#E76500] tracking-widest uppercase mb-3">
          Technology
        </div>
        <h2 className="font-serif text-3xl text-white mb-10 font-normal">
          My stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {P1_STACK.map((group, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="font-mono text-[11px] text-[#E76500] tracking-widest uppercase mb-4">
                {group.group}
              </h4>
              <div className="flex flex-col gap-2.5">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <span className="w-1 h-1 rounded-full bg-[#E76500] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="px-6 md:px-12 py-20 max-w-[900px] mx-auto border-b border-white/10">
        <div className="font-mono text-[11px] text-[#E76500] tracking-widest uppercase mb-3">
          Social proof
        </div>
        <h2 className="font-serif text-3xl text-white mb-10 font-normal">
          Client feedback
        </h2>
        <div className="flex flex-col gap-4">
          {P1_TESTIMONIALS.map((test, idx) => (
            <div key={idx} className="bg-[#141414] border border-white/10 border-l-[3px] border-l-[#E76500] p-8 rounded-sm">
              <p className="font-serif text-[16px] italic text-white/85 leading-relaxed mb-6 font-light">
                “{test.quote}”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E76500]/25 border border-[#E76500]/40 flex items-center justify-center font-mono text-[12px] font-semibold text-[#FF8C42] flex-shrink-0">
                  {test.initials}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-white">{test.name}</div>
                  <div className="text-[11px] text-white/45">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div id="contact" className="px-6 py-24 text-center max-w-[900px] mx-auto">
        <div className="font-mono text-[11px] text-[#E76500] tracking-widest uppercase mb-3">
          Ready to work together?
        </div>
        <h2 className="font-serif text-4xl text-white mb-4 leading-tight">
          Let&apos;s build something <em className="italic text-[#FF8C42] not-styled font-serif">exceptional.</em>
        </h2>
        <p className="text-sm text-white/45 max-w-[420px] mx-auto leading-relaxed mb-8 font-light">
          Available for backend engineering contracts, security audits, and fractional feature advisory. Response within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <a 
            href="mailto:amari.lawal05@gmail.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E76500] hover:bg-[#FF8C42] text-white text-[14px] font-medium rounded transition-all duration-150 shadow-md"
          >
            amari.lawal05@gmail.com
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:border-white/30 text-white text-[14px] font-normal rounded border border-white/10 transition-all duration-150"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#141414] border-t border-white/10 py-8 px-6 md:px-12 text-center">
        <p className="font-mono text-[11px] text-white/45 tracking-wider">
          © 2025 <span className="text-[#E76500]">AH Consulting</span> · Senior Backend Engineer &amp; Security Consultant · London, UK
        </p>
      </footer>

      {/* Dynamic bottom-right sticky switch widget */}
      <div className="fixed bottom-6 right-6 z-50 bg-[#141414]/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-4 py-2.5 flex items-center gap-3 select-none">
        <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase">Active Persona Layout</span>
        <div className="flex gap-1 bg-white/5 p-0.5 rounded-full border border-white/10">
          <button
            onClick={() => onToggleLayout(false)}
            className={`text-[11px] font-mono font-medium px-3 py-1 rounded-full transition-all duration-200 ${
              !isEnterprise
                ? 'bg-[#E76500] text-white shadow-sm'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            SME &amp; Growth
          </button>
          <button
            onClick={() => onToggleLayout(true)}
            className={`text-[11px] font-mono font-medium px-3 py-1 rounded-full transition-all duration-200 ${
              isEnterprise
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            Enterprise / Consultant
          </button>
        </div>
      </div>

    </div>
  );
}
