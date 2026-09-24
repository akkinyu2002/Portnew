import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "./layout/section";
import { ProjectCard } from "./project-card";

export function SelectedWork() {
  return (
    <Section className="selected-work" id="work" label="02 / Selected work">
      <div className="selected-work__intro">
        <h2>Selected<br /><em>Work</em></h2>
        <p>A collection of things I&apos;ve designed, built and experimented with.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
      <a className="selected-work__footer-link" href="#contact">
        Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </Section>
  );
}
