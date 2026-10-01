import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "04 / CSIT Student Portal & Utilities — Aakash Neupane",
  description:
    "A student-centric digital hub featuring academic resources, notice feeds, and essential utility tools built with Next.js, TypeScript and React.",
};

const features = [
  {
    number: "01",
    title: "Academic Resources",
    description:
      "Curated study materials, past papers, and reference notes organized by semester and subject for BSc CSIT students.",
  },
  {
    number: "02",
    title: "Notice Feed",
    description:
      "Real-time academic notices, exam schedules, and university announcements aggregated in a single clean interface.",
  },
  {
    number: "03",
    title: "Utility Tools",
    description:
      "GPA calculator, routine builder, and other everyday tools students actually need — designed to be fast and frictionless.",
  },
  {
    number: "04",
    title: "Community Connect",
    description:
      "A space for students to share resources, collaborate on projects, and stay connected across semesters.",
  },
];

const techStack = [
  { category: "Framework", tools: ["Next.js", "React"] },
  { category: "Language", tools: ["TypeScript"] },
  { category: "Styling", tools: ["CSS", "Responsive Design"] },
  { category: "Other", tools: ["REST APIs", "Git / GitHub"] },
];

const timeline = [
  { phase: "Research", status: "Complete" },
  { phase: "UI / UX Design", status: "Complete" },
  { phase: "Frontend Build", status: "In Progress" },
  { phase: "Backend & API", status: "Planned" },
];

export default function Project04() {
  return (
    <>
      {/* ── Minimal back-nav ── */}
      <header className="project-detail-header">
        <Container className="project-detail-header__inner">
          <Link href="/#work" className="project-detail-back">
            <ArrowLeft size={16} aria-hidden="true" />
            Back
          </Link>
          <span className="project-detail-header__number">04</span>
        </Container>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="project-detail-hero">
          <Container>
            <div className="project-detail-hero__meta">
              <span>04</span>
              <span>Exploration</span>
              <span>Frontend / UI Engineering</span>
            </div>
            <h1 className="project-detail-hero__title">
              CSIT Student<br />
              <em>Portal &amp; Utilities</em>
            </h1>
            <p className="project-detail-hero__description">
              A student-centric digital hub featuring academic resources, notice
              feeds, and essential utility tools — designed to make the everyday
              academic experience smoother and more connected.
            </p>
            <div className="project-detail-hero__actions">
              <a
                className="project-detail-hero__link"
                href="https://github.com/akkinyu2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Container>
        </section>

        {/* ── Visual Banner ── */}
        <section className="project-detail-banner">
          <Container>
            <div className="project-detail-banner__visual project-detail-banner__visual--violet">
              <span className="pd-banner__browser" />
              <span className="pd-banner__cross" />
              <span className="pd-banner__label">campus / connect / build</span>
              <span className="pd-banner__badge">CSIT</span>
            </div>
          </Container>
        </section>

        {/* ── Overview ── */}
        <section className="project-detail-section">
          <Container>
            <div className="project-detail-overview">
              <div className="project-detail-overview__left">
                <p className="section-label">Overview</p>
                <h2 className="project-detail-section__title">
                  Solving real<br />
                  <em>student problems.</em>
                </h2>
              </div>
              <div className="project-detail-overview__right">
                <p>
                  University students often rely on scattered WhatsApp groups,
                  random Google Drives, and word-of-mouth for essential academic
                  information. This project is an attempt to change that.
                </p>
                <p>
                  The CSIT Student Portal centralizes study materials, notice
                  feeds, and daily tools into one cohesive, well-designed
                  interface — purpose-built for BSc CSIT students in Nepal.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Features ── */}
        <section className="project-detail-section project-detail-section--border">
          <Container>
            <p className="section-label">Key Features</p>
            <div className="project-detail-features">
              {features.map((feature) => (
                <article className="pd-feature-row" key={feature.number}>
                  <span className="pd-feature-row__number">
                    {feature.number}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Tech Stack & Timeline ── */}
        <section className="project-detail-section project-detail-section--border">
          <Container>
            <div className="project-detail-tech-grid">
              <div>
                <p className="section-label">Tech Stack</p>
                <div className="pd-tech-list">
                  {techStack.map((group) => (
                    <div className="pd-tech-group" key={group.category}>
                      <h3>{group.category}</h3>
                      <ul>
                        {group.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="section-label">Timeline</p>
                <div className="pd-timeline">
                  {timeline.map((item) => (
                    <div className="pd-timeline__row" key={item.phase}>
                      <span className="pd-timeline__phase">{item.phase}</span>
                      <span className="pd-timeline__line" />
                      <span
                        className={`pd-timeline__status ${item.status === "In Progress" ? "pd-timeline__status--active" : ""}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Tags ── */}
        <section className="project-detail-section project-detail-section--border">
          <Container>
            <p className="section-label">Built With</p>
            <div className="project-detail-tags">
              {["Next.js", "TypeScript", "React", "CSS", "REST APIs", "Git"].map(
                (tag) => (
                  <span key={tag}>{tag}</span>
                )
              )}
            </div>
          </Container>
        </section>

        {/* ── Navigation ── */}
        <section className="project-detail-section project-detail-section--border project-detail-nav-section">
          <Container>
            <div className="project-detail-nav">
              <Link href="/#work" className="project-detail-nav__link">
                <ArrowLeft size={16} aria-hidden="true" />
                All Projects
              </Link>
              <a
                className="project-detail-nav__link"
                href="https://github.com/akkinyu2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
