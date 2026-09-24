import type { Project } from "@/data/projects";

function ProjectPreview({ tone }: { tone: Project["tone"] }) {
  return (
    <div className={`project-preview project-preview--${tone}`} aria-hidden="true">
      {tone === "cobalt" && <><span className="preview-orbit" /><span className="preview-label">spend / see / decide</span></>}
      {tone === "coral" && <><span className="preview-window" /><span className="preview-chart" /><span className="preview-dot" /></>}
      {tone === "lime" && <><span className="preview-stamp">EVENT<br />24</span><span className="preview-lines" /></>}
      {tone === "violet" && <><span className="preview-browser" /><span className="preview-cross" /></>}
      {tone === "charcoal" && <><span className="preview-play">play</span><span className="preview-film" /></>}
      {tone === "paper" && <><span className="preview-grid" /><span className="preview-cursor">+</span></>}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectPreview tone={project.tone} />
      <div className="project-card__info">
        <div className="project-card__meta"><span>{project.number}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        <p className="project-card__category">{project.category}</p>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
