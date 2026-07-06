import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Mail,
  Linkedin,
  ExternalLink,

} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { HireMeDialog } from "@/components/HireMeDialog";
import { Reveal } from "@/components/Reveal";
import { CertificateMarquee } from "@/components/CertificateMarquee";
import { trackEvent } from "@/lib/analytics";

import heroGlass from "@/assets/hero-glass.jpg";
import proj1a from "@/assets/proj1-1.jpg";
import proj1b from "@/assets/proj1-2.jpg";
import proj1c from "@/assets/proj1-3.jpg";
import proj1d from "@/assets/proj1-4.jpg";
import proj2a from "@/assets/proj2-1.jpg";
import proj2b from "@/assets/proj2-2.jpg";
import proj2c from "@/assets/proj2-3.jpg";
import proj2d from "@/assets/proj2-4.jpg";
import proj3a from "@/assets/proj3-1.jpg";
import proj3b from "@/assets/proj3-2.jpg";
import proj3c from "@/assets/proj3-3.jpg";
import proj3d from "@/assets/proj3-4.jpg";

const DESCRIPTION =
  "Abel Tegegn is a Senior Full-Stack Software Engineer building modern web applications, AI integrations (RAG, LLM evaluation, MCP), WordPress websites, and scalable backend systems.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abel Tegegn — Full-Stack Software & AI Engineer" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Full-Stack Engineer, AI Engineer, RAG, LLM, MCP, Next.js, React, WordPress, FastAPI, backend, system design",
      },
      { property: "og:title", content: "Abel Tegegn — Full-Stack Software & AI Engineer" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Abel Tegegn — Full-Stack Software & AI Engineer" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abel Tegegn",
          jobTitle: "Full-Stack Software Engineer",
          description: DESCRIPTION,
          knowsAbout: [
            "AI Engineering",
            "Retrieval-Augmented Generation",
            "Large Language Models",
            "Model Context Protocol",
            "Next.js",
            "React",
            "Node.js",
            "Python",
            "System Design",
            "DevOps",
          ],
          sameAs: [
            "https://linkedin.com",
            "https://github.com",
            "https://upwork.com",
            "https://fiverr.com",
          ],
        }),
      },
    ],
  }),
});

const services = [
  "AI Applications & Agentic Workflows",
  "Custom Web Applications (Next.js & TypeScript)",
  "Scalable API & Backend Systems",
  "Automation Pipelines & Tooling",
  "Cloud Native Deployment & DevOps",
  "High-Density System Architecture & Testing",
];

const projects = [
  {
    title: "Insight AI Platform",
    description:
      "An AI analytics workspace that turns raw data into decisions with natural-language querying, live dashboards and automated reporting.",
    stack: ["Next.js", "OpenAI", "FastAPI", "Postgres", "Redis"],
    images: [proj1a, proj1b, proj1c, proj1d],
    site: "https://example.com",
    source: "https://github.com",
  },
  {
    title: "Atelier Commerce",
    description:
      "A high-performance headless storefront with a refined editorial layout, sub-second navigation and a seamless checkout flow.",
    stack: ["Next.js", "TypeScript", "Node", "Stripe", "Tailwind"],
    images: [proj2a, proj2b, proj2c, proj2d],
    site: "https://example.com",
    source: "https://github.com",
  },
  {
    title: "Meridian Studio Site",
    description:
      "A bespoke WordPress corporate website with a custom block theme, editable content models and finely tuned performance.",
    stack: ["WordPress", "PHP", "Laravel", "MySQL", "Tailwind"],
    images: [proj3a, proj3b, proj3c, proj3d],
    site: "https://example.com",
    source: "https://github.com",
  },
  {
    title: "Nimbus SaaS Dashboard",
    description:
      "A real-time analytics dashboard with role-based access, live charts and a fast, keyboard-driven interface for busy teams.",
    stack: ["React", "TypeScript", "Node", "Postgres", "Redis"],
    images: [proj1c, proj2a, proj3b, proj1d],
    site: "https://example.com",
    source: "https://github.com",
  },
  {
    title: "Verse Content API",
    description:
      "A scalable headless CMS and content API powering multiple frontends with edge caching and granular versioning.",
    stack: ["Go", "FastAPI", "Postgres", "Docker", "Redis"],
    images: [proj2c, proj3a, proj1b, proj2d],
    site: "https://example.com",
    source: "https://github.com",
  },
  {
    title: "Aurora Booking Platform",
    description:
      "A booking and scheduling platform with conflict-free reservations, payments and automated email workflows.",
    stack: ["Next.js", "Stripe", "Node", "Postgres", "Tailwind"],
    images: [proj3c, proj1a, proj2b, proj3d],
    site: "https://example.com",
    source: "https://github.com",
  },
];


const caseStudies = [
  {
    title: "Scaling an AI Support Assistant",
    problem:
      "A SaaS team was drowning in repetitive support tickets, with response times stretching past 24 hours.",
    solution:
      "Built a retrieval-augmented assistant that drafts accurate answers from the knowledge base and hands off edge cases to humans.",
    technologies: "Next.js, FastAPI, OpenAI, Postgres (pgvector), Redis",
    result:
      "Resolved 68% of tickets automatically and cut median first-response time from 24h to under 2 minutes.",
  },
  {
    title: "Rebuilding a Legacy Storefront",
    problem:
      "An aging store loaded in 6+ seconds, hurting conversion and search ranking during peak traffic.",
    solution:
      "Migrated to a headless Next.js frontend with edge caching, image optimization and incremental static rendering.",
    technologies: "Next.js, TypeScript, Node, Stripe, Cloudflare",
    result:
      "Reduced load time to 0.9s, lifting conversion by 34% and organic traffic by 41% in three months.",
  },
  {
    title: "Automating Content Operations",
    problem:
      "A media company manually reformatted and published dozens of articles daily across multiple channels.",
    solution:
      "Designed an automation pipeline that ingests drafts, formats content and syncs publishing across WordPress and social channels.",
    technologies: "Python, WordPress REST API, Go, Docker",
    result:
      "Eliminated ~30 hours of manual work per week and removed publishing errors entirely.",
  },
  {
    title: "Real-Time Booking Backend",
    problem:
      "A scheduling product suffered from double-bookings and race conditions under concurrent load.",
    solution:
      "Engineered a transactional booking service with optimistic locking, queue-based processing and idempotent APIs.",
    technologies: "Go, Postgres, Redis, Docker",
    result:
      "Zero double-bookings across 200k+ reservations and 99.98% uptime since launch.",
  },
];

const aiCapabilities = [
  "RAG",
  "Prompt Engineering",
  "LLM Evaluation",
  "AI Model Fine-tuning",
  "MCP (Model Context Protocol)",
  "AI Chatbots",
  "Multi-modal AI",
  "AI Search",
  "AI Workflows",
  "AI Guardrails",
  "AI Testing",
  "AI Observability",
];

const expertise = [
  {
    title: "DevOps & Cloud",
    detail: "Docker, CI/CD, Kubernetes basics, Vercel, Railway / Koyeb.",
  },
  {
    title: "System Design",
    detail: "Scalable architectures and distributed systems.",
  },
  {
    title: "Testing & Quality Assurance",
    detail: "Playwright, Vitest, pytest — reliable, well-covered code.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "Python",
  "Node",
  "Go",
  "Docker",
  "Postgres",
  "Redis",
  "FastAPI",
  "Laravel",
  "WordPress",
  "Tailwind",
  "TypeScript",
];

const contacts = [
  {
    label: "Email",
    value: "abeltegegn191@gmail.com",
    href: "mailto:abeltegegn191@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/abel-tegegn",
    href: "https://www.linkedin.com/in/abel-tegegn-3254a841a",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@abel-tegegn",
    href: "https://github.com/abel-tegegn",
    icon: Github,
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-border pb-4">
      <span className="font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground">
        {index}
      </span>
      <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Toaster position="top-center" />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
            Abel Tegegn
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              Projects
            </a>
            <a href="#ai-engineering" className="transition-colors hover:text-foreground">
              AI Engineering
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="relative grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          {/* ambient purple glow */}
          <div
            className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]"
            aria-hidden
          />

          <div className="order-first animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-sans text-xs font-medium tracking-[0.15em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> AVAILABLE FOR WORK
            </p>
            <h1 className="mt-8 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
              Transform your ideas into digital success
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm Abel Tegegn — a Full-Stack Software Engineer building modern web
              applications, AI integrations, WordPress websites, and scalable backend
              systems.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={() => trackEvent("cta_view_projects")}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
              >
                View Projects
              </a>
              <HireMeDialog>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Hire Me
                </button>
              </HireMeDialog>
            </div>
          </div>

          {/* Animated glass visual — right on desktop, below text on mobile */}
          <div className="order-last">
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              <div className="animate-float">
                <img
                  src={heroGlass}
                  alt="Abstract purple glass sculpture representing engineering craft"
                  width={1024}
                  height={1024}
                  className="relative w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications marquee */}
        <section aria-label="Certifications" className="border-y border-border py-8">
          <p className="mb-6 text-center font-sans text-xs font-medium tracking-[0.2em] text-muted-foreground">
            CERTIFIED BY INDUSTRY LEADERS
          </p>
          <CertificateMarquee />
        </section>


        {/* Services */}
        <section id="services" className="scroll-mt-20 py-16">
          <SectionLabel index="01">Services</SectionLabel>
          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <div
                  key={service}
                  className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-muted"
                >
                  <span className="font-sans text-xs font-medium tracking-[0.15em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-10 font-serif text-lg font-medium tracking-tight">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </Reveal>

        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-16">
          <SectionLabel index="02">Featured Projects</SectionLabel>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 90} className="flex">
                <article className="flex flex-1 flex-col overflow-hidden rounded-md border border-border bg-card transition-transform duration-300 hover:-translate-y-1">
                  <ProjectCarousel images={project.images} alt={project.title} />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Pill key={tech}>{tech}</Pill>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                      >
                        Visit Website <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Source <Github className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </section>

        {/* Case Studies */}
        <section id="case-studies" className="scroll-mt-20 py-16">
          <SectionLabel index="03">Case Studies</SectionLabel>
          <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-card p-8">
                <h3 className="font-serif text-xl font-semibold tracking-tight">
                  {cs.title}
                </h3>
                <dl className="mt-6 space-y-5">
                  {[
                    ["Problem", cs.problem],
                    ["Solution", cs.solution],
                    ["Technologies", cs.technologies],
                    ["Result", cs.result],
                  ].map(([term, desc]) => (
                    <div key={term}>
                      <dt className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                        {term}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </Reveal>
        </section>

        {/* AI Engineering */}
        <section id="ai-engineering" className="scroll-mt-20 py-16">
          <SectionLabel index="04">AI Engineering</SectionLabel>
          <p className="mb-8 font-serif text-xl italic text-muted-foreground">
            Beyond AI agents.
          </p>
          <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
            {aiCapabilities.map((cap) => (
              <div
                key={cap}
                className="bg-card px-5 py-6 text-sm font-medium tracking-tight transition-colors hover:bg-muted"
              >
                {cap}
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {expertise.map((item) => (
              <div key={item.title} className="rounded-md border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </Reveal>

        </section>

        {/* Technologies */}
        <section id="technologies" className="scroll-mt-20 py-16">
          <SectionLabel index="05">Technologies</SectionLabel>
          <Reveal className="flex flex-wrap justify-center gap-3 py-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-card px-5 py-2.5 font-sans text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-muted"
              >
                {tech}
              </span>
            ))}
          </Reveal>

        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16">
          <SectionLabel index="06">Contact</SectionLabel>
          <div className="max-w-2xl">
            <p className="font-serif text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Have a project in mind? Let’s build something clear and durable.
            </p>
            <div className="mt-8">
              <HireMeDialog>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Hire Me <ArrowUpRight className="h-4 w-4" />
                </button>
              </HireMeDialog>
            </div>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {contacts.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent("contact_click", { channel: label })}
                    className="group flex items-center justify-between py-4 transition-colors hover:text-foreground"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-sans text-sm font-medium tracking-wide">
                        {label}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      {value}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span className="font-serif text-base font-medium text-foreground">
            Abel Tegegn
          </span>
          <span>© {new Date().getFullYear()} — Full-Stack Software Engineer</span>
        </div>
      </footer>
    </div>
  );
}
