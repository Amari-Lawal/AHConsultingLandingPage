'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// ==========================================
// ENTERPRISE PORTFOLIO DATA (AMARI - LIGHT)
// ==========================================

const NAV_LINKS = [
  { label: 'Principles', href: '#principles' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const STATUS_ITEMS = [
  { label: 'Availability', value: '● Available', isGreen: true },
  { label: 'Location', value: 'London, UK' },
  { label: 'Contract type', value: 'Freelance / B2B' },
  { label: 'Notice period', value: '2 weeks' },
  { label: 'Remote', value: 'Yes' },
  { label: 'Primary stack', value: 'Java · C# · Python · GCP · Security' },
];

const METRICS = [
  { value: '5/5', suffix: '', label: 'Services Assessed', description: 'Complete NIST cybersecurity maturity coverage for CNI transport networks' },
  { value: '20+', suffix: '', label: 'Repositories Mastered', description: 'Seamless features delivered within massive Home Office caseworking systems' },
  { value: 'Next-Q', suffix: '', label: 'Roadmap Alignment', description: 'Evidence-based user trials directly unlocking Ministry of Defence features' },
  { value: 'Active', suffix: '', label: 'BAU Integration', description: 'Assessed security recommendations successfully launched into live operations' },
];

const PRINCIPLES = [
  {
    id: 'P.01',
    title: 'Ecosystem-wide engineering scale',
    description: 'I design and deliver features that integrate seamlessly across massive architectures. Navigating and maintaining integrity across 20+ active repositories, I ensure changes are robust, scalable, and secure under high-concurrency caseworking workloads.',
    tags: ['Multi-Repo Architecture', 'GovTech Scale', 'Microservices'],
  },
  {
    id: 'P.02',
    title: 'Operational accountability & live debugs',
    description: 'Software excellence requires absolute operational visibility. Utilizing telemetry platforms like Datadog to debug production issues in real-time, I ensure constant runtime availability and convert diagnostic data into robust feature upgrades.',
    tags: ['Datadog APM', 'Live Diagnostics', 'Production Telemetry'],
  },
  {
    id: 'P.03',
    title: 'Maturity & security by BAU design',
    description: 'Security is a core organizational habit, not an afterthought. Whether assessing critical transport infrastructure using the NIST Framework or automating Checkmarx CI/CD scans, I embed security directly into Business As Usual operations.',
    tags: ['NIST Framework', 'BAU Integration', 'Security Auditing'],
  },
  {
    id: 'P.04',
    title: 'Evidence-led strategic features',
    description: 'Engineering decisions should always be grounded in clear user feedback. I specialize in running user trials and interviews, applying rigorous Likert scale metrics to deliver actionable insight reports that greenlight high-impact feature lifecycles.',
    tags: ['User Trials', 'Sentiment Analytics', 'Product Roadmap'],
  },
];

const ENGAGEMENTS = [
  {
    category: 'Java Engineering',
    title: 'Production Support & Feature Delivery — Rentokil Initial',
    description: 'Drove critical backend feature development and security compliance across complex production environments. Implemented robust static application security testing using Checkmarx to mitigate risks pre-deployment. Leveraged advanced Datadog APM tracing to rapidly diagnose and debug production user issues, ensuring flawless runtime availability and delivering business-aligned backend solutions.',
    tags: ['Java', 'Spring Boot', 'Checkmarx', 'Datadog', 'Production Debugging', 'API Design'],
    stats: [
      { value: 'Robust', label: 'Secure features built' },
      { value: 'Proactive', label: 'Production debugging' },
      { value: 'Checkmarx', label: 'Rigorous risk mitigation' },
    ],
  },
  {
    category: 'User Research',
    title: 'Evidence-Based User Insight Trialing — Ministry of Defence',
    description: 'Led structured user trials and in-depth stakeholder interviews to gather qualitative user opinions. Performed rigorous quantitative data analysis using Likert scales and custom sentiment metrics to construct high-fidelity user insight deliverables. These insights directly informed and validated the product strategy, greenlighting multiple core features for the subsequent quarterly release.',
    tags: ['User Trials', 'Interviews', 'Data Analysis', 'Likert Scale', 'Product Strategy'],
    stats: [
      { value: 'Direct', label: 'Quarterly roadmap influence' },
      { value: 'Likert', label: 'Mathematical sentiment scaling' },
      { value: 'Actionable', label: 'Insights delivered to stakeholders' },
    ],
  },
  {
    category: 'Java Engineering',
    title: 'Distributed GovTech Caseworking Platform — Home Office',
    description: 'Engineered high-integrity caseworking software solutions for an application of significant national scale. Navigated and contributed across 20 distinct code repositories to design, build, and deliver robust feature sets. Significantly enhanced caseworking workflow reliability, system performance, and data processing stability under heavy public service workloads.',
    tags: ['Java', 'Spring', 'Microservices', 'Multi-Repo Architecture', 'GovTech', 'Caseworking'],
    stats: [
      { value: '20+', label: 'Repositories integrated' },
      { value: 'High', label: 'Caseworker efficiency gains' },
      { value: 'Scalable', label: 'Under peak demand' },
    ],
  },
  {
    category: 'Cybersecurity',
    title: 'National Infrastructure Maturity Assessment — National Highways (via PA Consulting)',
    description: 'Conducted high-priority cybersecurity maturity assessments across critical national transport infrastructure. Applied the NIST Cybersecurity Framework to audit multiple core operational services, successfully completing 100% of the target scope. Developed strategic assessment deliverables that were seamlessly integrated into Business As Usual (BAU), establishing a permanent post-assessment review cycle for continuous security improvement.',
    tags: ['NIST Framework', 'PA Consulting', 'Cybersecurity Audit', 'BAU Integration', 'CNI Protection'],
    stats: [
      { value: '100%', label: 'Target services assessed' },
      { value: 'BAU', label: 'Continuous review integration' },
      { value: 'CNI', label: 'Critical transport protection' },
    ],
  },
  {
    category: 'Fullstack Engineering',
    title: 'Clinical Research Application Feature Support — Health Research Authority',
    description: 'Provided fullstack ASP.NET support and feature engineering for a specialized clinical research application. Delivered key software updates and responsive workflow improvements that streamlined administrative tasks, secured regulatory compliance, and consistently enhanced usability for medical researchers.',
    tags: ['C#', 'ASP.NET Core', 'Fullstack', 'Clinical Systems', 'Feature Support'],
    stats: [
      { value: 'C#', label: 'Fullstack ASP.NET support' },
      { value: 'Active', label: 'Workflow streamlining' },
      { value: 'Compliant', label: 'Clinical research standards' },
    ],
  },
];

const CATEGORY_THEMES: Record<string, { bg: string; text: string; border: string }> = {
  'Java Engineering': {
    bg: 'bg-[#F5EEF7]',
    text: 'text-[#5B2D6E]',
    border: 'border-[#D8C5E0]',
  },
  'Cybersecurity': {
    bg: 'bg-[#FFF0EB]',
    text: 'text-[#D15400]',
    border: 'border-[#F8D2C4]',
  },
  'Fullstack Engineering': {
    bg: 'bg-[#EBF7FF]',
    text: 'text-[#006699]',
    border: 'border-[#C4E5F8]',
  },
  'User Research': {
    bg: 'bg-portfolio-green-bg',
    text: 'text-portfolio-green',
    border: 'border-[#BDD8C5]',
  },
};

const STACK_ITEMS = [
  {
    category: 'Java',
    technologies: 'Java (up to 21) · Spring Boot · Microservices · Multi-Repo Management · Datadog APM',
    proficiency: 5,
    proficiencyText: 'Expert',
    notes: 'Complex caseworking & production diagnostics',
  },
  {
    category: 'Python',
    technologies: 'Python · FastAPI · Flask · Django',
    proficiency: 4,
    proficiencyText: 'Advanced',
    notes: 'API development',
  },
  {
    category: 'Cybersecurity',
    technologies: 'NIST Framework · Security Maturity Assessments · Checkmarx SAST · Threat Mitigation',
    proficiency: 5,
    proficiencyText: 'Expert',
    notes: 'CNI assessments & secure lifecycles',
  },
  {
    category: 'User Research',
    technologies: 'User Trials · Stakeholder Interviews · Likert Scales · Quantitative Data Analysis',
    proficiency: 4,
    proficiencyText: 'Advanced',
    notes: 'Direct evidence-based roadmap validation',
  },
  {
    category: 'Fullstack C#',
    technologies: 'C# · ASP.NET Core · Web APIs · Feature Support & MVC Workflows',
    proficiency: 4,
    proficiencyText: 'Advanced',
    notes: 'Clinical support systems delivery',
  },
  {
    category: 'Infrastructure',
    technologies: 'GCP · Docker · Kubernetes · Relational Databases · Secure Integrations',
    proficiency: 4,
    proficiencyText: 'Advanced',
    notes: 'Enterprise and public sector Infrastructure',
  },
];

const TRUST_SIGNALS = [
  {
    badge: 'Verified',
    title: 'BAU-Ready Deliverables',
    description: 'Every assessment and feature is structured so your internal teams can easily integrate them into Business As Usual operations under consistent, lightweight review.',
  },
  {
    badge: 'Verified',
    title: 'Multi-Repo Mastered',
    description: 'Experienced in navigating and coding across massive enterprise architectures with 20+ active repositories, delivering seamless features without regression.',
  },
  {
    badge: 'Verified',
    title: 'Evidence-Led Development',
    description: 'Every feature is backed by rigorous stakeholder research, trial feedback, and data-driven sentiment analysis to guarantee product-market fit.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum pretium nunc, in facilisis arcu eleifend sed. Aliquam nec arcu id justo interdum vehicula. Ut a dolor mi.',
    initials: 'EP',
    name: 'Enterprise Partner',
    role: 'Executive Sponsor · Corporate Systems',
  },
  {
    quote: 'Integer congue neque sit amet ex porta, id sollicitudin elit facilisis. Sed id tortor vitae eros interdum interdum. Duis eleifend pretium nunc eu elementum.',
    initials: 'PM',
    name: 'Program Manager',
    role: 'Lead Delivery Director · Public Sector Advisory',
  },
];

const METRIC_CARD_CLASSES = [
  'p-6 md:p-12 border-r border-b md:border-b-0 border-portfolio-rule',
  'p-6 md:p-12 border-b md:border-b-0 md:border-r border-portfolio-rule',
  'p-6 md:p-12 border-r border-portfolio-rule',
  'p-6 md:p-12 border-portfolio-rule',
];

interface PortfolioEnterpriseProps {
  availabilityQuarter: string;
  onToggleLayout: (isEnterprise: boolean) => void;
  isEnterprise: boolean;
}

export default function PortfolioEnterprise({
  availabilityQuarter,
  onToggleLayout,
  isEnterprise,
}: PortfolioEnterpriseProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Proficiency rendering helper
  const renderPips = (score: number) => {
    return (
      <span className="inline-flex items-center gap-[3px] select-none">
        {[1, 2, 3, 4, 5].map((index) => {
          let pipClass = 'bg-portfolio-rule2'; // default off
          if (index <= score) {
            pipClass = score === 5 ? 'bg-portfolio-green' : 'bg-portfolio-accent';
          }
          return (
            <span
              key={index}
              className={`w-2 h-2 rounded-[1px] transition-all duration-300 ${pipClass}`}
            />
          );
        })}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-ink selection:bg-portfolio-accent-bg selection:text-portfolio-accent font-sans transition-colors duration-300">



      {/* ── NAV ── */}
      <nav className="bg-portfolio-surface border-b border-portfolio-rule px-6 md:px-12 sticky top-0 z-50 h-[56px] flex items-center justify-between">
        <div className="font-mono text-[13px] font-semibold text-portfolio-ink tracking-widest flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-portfolio-green inline-block animate-pulse" />
          AH Consulting
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center h-full">
          {NAV_LINKS.map((link, idx) => {
            const isFirst = idx === 0;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] text-portfolio-ink3 hover:text-portfolio-ink hover:bg-[#F2F1EE] px-5 h-[56px] flex items-center border-r border-portfolio-rule ${
                  isFirst ? 'border-l' : ''
                } transition-colors duration-150 tracking-wide`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block text-[12px] font-semibold bg-portfolio-accent hover:bg-portfolio-accent2 text-white px-5 py-2 transition-colors duration-150 tracking-widest uppercase"
        >
          Available for hire
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-portfolio-ink3 hover:text-portfolio-ink focus:outline-none p-1.5"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-portfolio-surface border-b border-portfolio-rule flex flex-col divide-y divide-portfolio-rule transition-all duration-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-[13px] text-portfolio-ink3 hover:text-portfolio-ink py-3 px-6 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-[12px] font-semibold bg-portfolio-accent text-white py-3 px-6 text-center tracking-widest uppercase"
          >
            Available for hire
          </a>
        </div>
      )}

      {/* ── RULE BAR ── */}
      <div className="h-[3px] bg-portfolio-accent w-full" />

      {/* ── HERO ── */}
      <section className="bg-portfolio-surface border-b border-portfolio-rule">
        <div className="max-w-[1080px] mx-auto py-16 md:py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-start">

          <div>
            <div className="inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold text-portfolio-green bg-portfolio-green-bg border border-[#BDD8C5] px-3 py-1.5 tracking-widest uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-portfolio-green inline-block" />
              Open to contracts — {availabilityQuarter}
            </div>

            <h1 className="font-serif text-3xl md:text-[2.75rem] font-light leading-[1.12] tracking-tight text-portfolio-ink mb-5">
              Technical Consultant &amp; Backend Engineer.<br />
              <strong className="font-medium">I build robust solutions with clear client impact.</strong>
            </h1>

            <p className="text-portfolio-ink3 font-light leading-relaxed text-[15px] max-w-[480px] mb-10">
              I design and deliver resilient backend applications, secure critical national systems, and translate user research into high-impact product features. Focused entirely on delivering tangible business value and bulletproof stability.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="#projects"
                className="font-sans text-[13px] font-medium bg-portfolio-accent hover:bg-portfolio-accent2 text-white px-6 py-3 tracking-wide transition-colors duration-150 text-center"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="font-sans text-[13px] font-normal bg-transparent hover:border-portfolio-ink3 hover:text-portfolio-ink text-portfolio-ink2 px-6 py-[11px] border border-portfolio-rule2 tracking-wide transition-all duration-150 text-center"
              >
                Discuss a project
              </a>
            </div>
          </div>

          {/* Right Status Panel */}
          <div className="bg-portfolio-bg border border-portfolio-rule p-6 w-full md:block">
            <div className="font-mono text-[10px] font-semibold text-portfolio-ink4 tracking-widest uppercase mb-4 pb-3 border-b border-portfolio-rule">
              Current status
            </div>

            <div className="space-y-0.5">
              {STATUS_ITEMS.map((item, idx) => {
                const isLast = idx === STATUS_ITEMS.length - 1;
                return (
                  <div
                    key={item.label}
                    className={`flex justify-between items-baseline py-2 ${
                      isLast ? '' : 'border-b border-portfolio-rule'
                    }`}
                  >
                    <span className="text-[12px] text-portfolio-ink3">{item.label}</span>
                    <span
                      className={`font-mono text-[13px] font-medium ${
                        item.isGreen ? 'text-portfolio-green' : 'text-portfolio-ink'
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

      {/* ── METRICS ROW ── */}
      <div className="bg-portfolio-surface border-b border-portfolio-rule">
        <div className="max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((metric, idx) => {
            const cardClass = METRIC_CARD_CLASSES[idx] || 'p-6 md:p-12 border-portfolio-rule';
            return (
              <div key={idx} className={cardClass}>
                <div className="font-serif text-3xl md:text-[2.4rem] font-light text-portfolio-ink leading-none mb-1.5">
                  {metric.value}
                  {metric.suffix && (
                    <sup className="text-[1.1rem] font-normal text-portfolio-accent relative -top-3 ml-0.5">
                      {metric.suffix}
                    </sup>
                  )}
                </div>
                <div className="text-[11px] text-portfolio-ink4 font-semibold tracking-wider uppercase">
                  {metric.label}
                </div>
                <div className="text-[11px] text-portfolio-ink4 mt-0.5 leading-snug">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── SECTION 1: PHILOSOPHY ── */}
      <section className="max-w-[1080px] mx-auto py-16 px-6 md:px-12 border-b border-portfolio-rule" id="principles">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-portfolio-rule">
          <span className="font-mono text-[11px] font-semibold text-portfolio-ink4 tracking-widest">01</span>
          <h2 className="font-serif text-2xl font-normal text-portfolio-ink">Engineering philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-portfolio-rule border border-portfolio-rule">
          {PRINCIPLES.map((principle) => (
            <div key={principle.id} className="bg-portfolio-surface p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-mono text-[10px] font-semibold text-portfolio-accent bg-portfolio-accent-bg border border-[#C5D5E8] px-2 py-0.5 tracking-widest flex-shrink-0 mt-0.5 uppercase">
                    {principle.id}
                  </span>
                  <h3 className="font-serif text-[1.05rem] font-normal text-portfolio-ink">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-[13px] text-portfolio-ink3 leading-relaxed font-light mb-6">
                  {principle.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {principle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 bg-portfolio-bg border border-portfolio-rule2 text-portfolio-ink3 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: WORK ── */}
      <section className="max-w-[1080px] mx-auto py-16 px-6 md:px-12 border-b border-portfolio-rule" id="projects">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-portfolio-rule">
          <span className="font-mono text-[11px] font-semibold text-portfolio-ink4 tracking-widest">02</span>
          <h2 className="font-serif text-2xl font-normal text-portfolio-ink">Selected engagements</h2>
        </div>

        <div className="space-y-[1px] bg-portfolio-rule">
          {ENGAGEMENTS.map((engagement, idx) => {
            const theme = CATEGORY_THEMES[engagement.category] || {
              bg: 'bg-portfolio-accent-bg',
              text: 'text-portfolio-accent',
              border: 'border-[#C5D5E8]',
            };

            return (
              <div
                key={idx}
                className="bg-portfolio-surface border border-portfolio-rule grid grid-cols-1 md:grid-cols-[1fr_200px] transition-all duration-200"
              >
                <div className="p-8">
                  <span
                    className={`font-mono text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 inline-block mb-4.5 ${theme.bg} ${theme.text} ${theme.border}`}
                  >
                    {engagement.category}
                  </span>
                  <h3 className="font-serif text-[1.1rem] font-normal text-portfolio-ink mb-2.5 mt-2">
                    {engagement.title}
                  </h3>
                  <p className="text-[13px] text-portfolio-ink3 leading-relaxed font-light">
                    {engagement.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {engagement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 bg-portfolio-bg border border-portfolio-rule2 text-portfolio-ink3 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-portfolio-rule p-8 bg-portfolio-bg flex flex-col justify-center gap-5">
                  {engagement.stats.map((stat, statIdx) => (
                    <React.Fragment key={statIdx}>
                      <div>
                        <div className="font-mono text-[1.4rem] font-semibold text-portfolio-ink leading-none">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-portfolio-ink4 font-normal mt-1 leading-snug">
                          {stat.label}
                        </div>
                      </div>
                      {statIdx < engagement.stats.length - 1 && (
                        <div className="h-px bg-portfolio-rule w-full" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 3: STACK ── */}
      <section className="max-w-[1080px] mx-auto py-16 px-6 md:px-12 border-b border-portfolio-rule" id="stack">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-portfolio-rule">
          <span className="font-mono text-[11px] font-semibold text-portfolio-ink4 tracking-widest">03</span>
          <h2 className="font-serif text-2xl font-normal text-portfolio-ink">Technical stack</h2>
        </div>

        <div className="overflow-x-auto border border-portfolio-rule">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-portfolio-bg">
                <th className="font-mono text-[10px] font-semibold text-portfolio-ink4 tracking-widest uppercase p-4 border border-portfolio-rule text-left w-[160px]">
                  Category
                </th>
                <th className="font-mono text-[10px] font-semibold text-portfolio-ink4 tracking-widest uppercase p-4 border border-portfolio-rule text-left">
                  Technologies
                </th>
                <th className="font-mono text-[10px] font-semibold text-portfolio-ink4 tracking-widest uppercase p-4 border border-portfolio-rule text-left w-[180px]">
                  Proficiency
                </th>
                <th className="font-mono text-[10px] font-semibold text-portfolio-ink4 tracking-widest uppercase p-4 border border-portfolio-rule text-left w-[200px]">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {STACK_ITEMS.map((item, idx) => (
                <tr key={idx} className="group">
                  <td className="font-mono text-[10px] font-semibold text-portfolio-accent tracking-widest uppercase p-3 border border-portfolio-rule bg-portfolio-surface group-hover:bg-[#FAFAF8] transition-colors whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="text-[13px] p-3 border border-portfolio-rule text-portfolio-ink2 bg-portfolio-surface group-hover:bg-[#FAFAF8] transition-colors align-top font-light">
                    {item.technologies}
                  </td>
                  <td className="text-[13px] p-3 border border-portfolio-rule text-portfolio-ink2 bg-portfolio-surface group-hover:bg-[#FAFAF8] transition-colors align-top">
                    <span className="flex items-center gap-2">
                      {renderPips(item.proficiency)}
                      <span className="text-[11px] font-mono font-medium text-portfolio-ink4">
                        {item.proficiencyText}
                      </span>
                    </span>
                  </td>
                  <td className="text-[11px] p-3 border border-portfolio-rule text-portfolio-ink4 bg-portfolio-surface group-hover:bg-[#FAFAF8] transition-colors align-top font-light">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 4: TRUST SIGNALS ── */}
      <section className="max-w-[1080px] mx-auto py-16 px-6 md:px-12 border-b border-portfolio-rule">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-portfolio-rule">
          <span className="font-mono text-[11px] font-semibold text-portfolio-ink4 tracking-widest">04</span>
          <h2 className="font-serif text-2xl font-normal text-portfolio-ink">
            Why clients trust me with critical systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-portfolio-rule border border-portfolio-rule">
          {TRUST_SIGNALS.map((signal, idx) => (
            <div key={idx} className="bg-portfolio-surface p-7">
              <span className="font-mono text-[10px] font-semibold text-portfolio-green bg-portfolio-green-bg border border-[#BDD8C5] inline-block px-2.5 py-1 tracking-widest uppercase mb-4">
                {signal.badge}
              </span>
              <h4 className="font-serif text-[1rem] font-normal text-portfolio-ink mb-2">
                {signal.title}
              </h4>
              <p className="text-[12px] text-portfolio-ink3 leading-relaxed font-light">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ── */}
      <section className="max-w-[1080px] mx-auto py-16 px-6 md:px-12 border-b border-portfolio-rule">
        <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-portfolio-rule">
          <span className="font-mono text-[11px] font-semibold text-portfolio-ink4 tracking-widest">05</span>
          <h2 className="font-serif text-2xl font-normal text-portfolio-ink">Client feedback</h2>
        </div>

        <div className="space-y-[1px] bg-portfolio-rule">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-portfolio-surface border border-portfolio-rule border-l-[3px] border-l-portfolio-accent p-8 md:p-10"
            >
              <p className="font-serif text-[1rem] font-light italic text-portfolio-ink2 leading-relaxed mb-6">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none bg-portfolio-accent-bg border border-[#C5D5E8] flex items-center justify-center font-mono text-[11px] font-semibold text-portfolio-accent flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-portfolio-ink">{testimonial.name}</div>
                  <div className="text-[11px] text-portfolio-ink4">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT/CTA SECTION ── */}
      <div id="contact" className="bg-portfolio-accent">
        <div className="max-w-[1080px] mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 md:gap-16">
          <div>
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-light text-white mb-2 leading-tight">
              Ready to build something you can rely on?
            </h2>
            <p className="text-sm text-white/70 font-light max-w-[600px] leading-relaxed">
              Available for architecture consulting, solution design, senior Java contracts, and fractional CTO engagements. Response within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 items-start md:items-end flex-shrink-0 w-full sm:w-auto">
            <a
              href="mailto:amari.lawal05@gmail.com"
              className="font-sans text-[13px] font-medium bg-white hover:bg-portfolio-accent-bg text-portfolio-accent px-7 py-3 tracking-wide transition-colors duration-150 whitespace-nowrap w-full sm:w-auto text-center"
            >
              amari.lawal05@gmail.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs font-normal bg-transparent text-white/75 hover:text-white px-7 py-2.5 border border-white/30 hover:border-white/70 tracking-wide transition-colors duration-150 whitespace-nowrap w-full sm:w-auto text-center"
            >
              View LinkedIn profile
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-portfolio-ink px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-mono text-[11px] text-white/35 tracking-wider text-center md:text-left leading-relaxed">
          © 2025 <span className="text-white/60">AH Consulting</span> · Senior Java Architect &amp; Solution Design Consultant · London, UK
        </p>
        <p className="font-mono text-[11px] text-white/35 tracking-wider text-center md:text-right leading-relaxed">
          Available for freelance engagements · <span className="text-white/60">amari.lawal05@gmail.com</span>
        </p>
      </footer>

      {/* Dynamic bottom-right sticky switch widget */}
      <div className="fixed bottom-6 right-6 z-50 bg-[#fff]/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-full px-4 py-2.5 flex items-center gap-3 select-none">
        <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Active Persona Layout</span>
        <div className="flex gap-1 bg-zinc-100 dark:bg-zinc-800 p-0.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50">
          <button
            onClick={() => onToggleLayout(false)}
            className={`text-[11px] font-mono font-medium px-3 py-1 rounded-full transition-all duration-200 ${
              !isEnterprise
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            SME &amp; Growth
          </button>
          <button
            onClick={() => onToggleLayout(true)}
            className={`text-[11px] font-mono font-medium px-3 py-1 rounded-full transition-all duration-200 ${
              isEnterprise
                ? 'bg-[#1A3A5C] text-white shadow-sm'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            Enterprise / Consultant
          </button>
        </div>
      </div>

    </div>
  );
}
