import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

function ProjectPreview({ project }: { project: Project }) {
  const { tone, previewLabel } = project;
  return (
    <div className={`project-preview project-preview--${tone}`} aria-hidden="true">
      {tone === "cobalt" && <span className="preview-orbit" />}
      {tone === "coral" && <><span className="preview-window" /><span className="preview-chart" /><span className="preview-dot" /></>}
      {tone === "lime" && <><span className="preview-stamp">CSITA<br />BMC</span><span className="preview-lines" /></>}
      {tone === "violet" && <><span className="preview-browser" /><span className="preview-cross" /></>}
      {tone === "charcoal" && <><span className="preview-play">play</span><span className="preview-film" /></>}
      {tone === "paper" && <><span className="preview-grid" /><span className="preview-cursor">+</span></>}
      {previewLabel && <span className="preview-label">{previewLabel}</span>}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__preview-link"
          aria-label={`Visit ${project.title}`}
        >
          <ProjectPreview project={project} />
        </a>
      ) : (
        <ProjectPreview project={project} />
      )}
      <div className="project-card__info">
        <div className="project-card__meta"><span>{project.number}</span><span>{project.year}</span></div>
        <h3>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__title-link"
            >
              <span>{project.title}</span>
              <ArrowUpRight size={22} className="project-card__arrow" aria-hidden="true" />
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="project-card__category">{project.category}</p>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
