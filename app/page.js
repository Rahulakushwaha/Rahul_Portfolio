import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Code2,
} from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";
import {
  profile,
  about,
  experience,
  projects,
  skills,
  education,
  certifications,
  achievements,
} from "@/lib/data";

const ICONS = {
  MapPin,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Code2,
};

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-muted hover:text-ink transition-colors"
    >
      {children}
    </a>
  );
}

function SectionEyebrow({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-signal tick">{index}</span>
      <span className="h-px flex-1 max-w-[40px] bg-border" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold tracking-tight">
            RK<span className="text-signal">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium border border-border rounded-full px-4 py-1.5 hover:border-signal hover:text-signal transition-colors"
          >
            Resume
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-graph pointer-events-none" />
        <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-5">
              {profile.roleLine}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-6 text-lg text-muted max-w-md leading-relaxed">
              {profile.pitch}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-ink text-bg font-medium text-sm px-5 py-3 rounded-full hover:bg-signal transition-colors"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-border text-sm px-5 py-3 rounded-full hover:border-signal hover:text-signal transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm px-5 py-3 rounded-full text-muted hover:text-ink transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-ink hover:border-signal transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-ink hover:border-signal transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border text-muted hover:text-ink hover:border-signal transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow index="01">About</SectionEyebrow>
          <h2 className="font-display text-3xl font-semibold mb-12 max-w-2xl">
            A little more about how I work.
          </h2>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="lg:col-span-2 space-y-3">
              {about.cards.map((c) => {
                const Icon = ICONS[c.icon];
                return (
                  <div
                    key={c.label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-5 hover:border-signal/50 transition-colors"
                  >
                    <div className="h-9 w-9 shrink-0 rounded-lg bg-surface2 border border-border flex items-center justify-center">
                      <Icon size={16} className="text-signal" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm text-ink">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionEyebrow index="02">Experience</SectionEyebrow>
          <h2 className="font-display text-3xl font-semibold mb-12">
            Where the work happened.
          </h2>
          <div className="space-y-10">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 pb-10 border-b border-border last:border-0"
              >
                <div>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <p className="mt-1 text-xs text-muted">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium">
                    {job.role} <span className="text-muted font-normal">· {job.company}</span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-signal" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow index="03">Projects</SectionEyebrow>
          <h2 className="font-display text-3xl font-semibold mb-12">
            Systems that made it past the notebook.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl border border-border bg-surface p-7 hover:border-signal/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-medium">{p.name}</h3>
                    <p className="text-sm text-muted mt-1">{p.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-lg text-accuracy tick">{p.metric.value}</p>
                    <p className="font-mono text-[10px] text-muted max-w-[90px]">{p.metric.label}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border text-muted group-hover:text-ink transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-5 font-mono text-[10px] text-muted">{p.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow index="04">Skills</SectionEyebrow>
          <h2 className="font-display text-3xl font-semibold mb-12">
            The stack behind the results.
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {skills.map((group) => (
              <div key={group.group}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal mb-4">
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg bg-surface border border-border text-muted hover:text-ink hover:border-signal/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Certifications + Achievements */}
      <section id="education" className="px-6 py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <SectionEyebrow index="05">Education</SectionEyebrow>
            <h2 className="font-display text-2xl font-semibold mb-8">Academic record.</h2>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school} className="border-b border-border pb-6 last:border-0">
                  <p className="font-medium">{e.program}</p>
                  <p className="text-sm text-muted mt-1">{e.school}</p>
                  <div className="flex items-center justify-between mt-2 font-mono text-xs text-muted">
                    <span>{e.period}</span>
                    <span className="text-accuracy">{e.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionEyebrow index="06">Certifications & Achievements</SectionEyebrow>
            <h2 className="font-display text-2xl font-semibold mb-8">Beyond the classroom.</h2>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1.5 rounded-lg bg-surface border border-border text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {achievements.map((a) => (
                <div key={a.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-calibration shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-sm text-muted">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal mb-5">
            Get in touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            Open to data science & ML roles —
            <br />
            let&rsquo;s talk about what you&rsquo;re building.
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-ink text-bg font-medium text-sm px-6 py-3 rounded-full hover:bg-signal transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 font-mono text-xs text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
              github ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
              linkedin ↗
            </a>
            <span>{profile.phone}</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-mono">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>built with next.js · deployed on vercel</span>
        </div>
      </footer>
    </main>
  );
}
