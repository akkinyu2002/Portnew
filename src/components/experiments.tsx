import { ArrowUpRight } from "lucide-react";
import { Section } from "./layout/section";

const experiments = [
  { number: "01", title: "Prompt / Pattern", type: "AI / Interface", tone: "ink" },
  { number: "02", title: "Generative Type", type: "Creative coding", tone: "accent" },
  { number: "03", title: "Shape / Space", type: "3D / Web", tone: "lime" },
  { number: "04", title: "Useful Friction", type: "Interaction", tone: "violet" },
];

export function Experiments() {
  return (
    <Section className="experiments" id="experiments" label="05 / Experiments">
      <div className="experiments__intro">
        <h2>Still figuring out<br /><em>what&apos;s possible.</em></h2>
        <p>Things I&apos;m building while learning new tools and following better questions.</p>
      </div>
      <div className="experiment-grid">
        {experiments.map((experiment) => (
          <article className={`experiment-card experiment-card--${experiment.tone}`} key={experiment.number}>
            <div className="experiment-card__visual" aria-hidden="true"><span>{experiment.number}</span><i /></div>
            <div className="experiment-card__info"><div><span>{experiment.number}</span><span>{experiment.type}</span></div><h3>{experiment.title}</h3><a href="#contact" aria-label={`Discuss ${experiment.title}`}>Explore <ArrowUpRight size={14} aria-hidden="true" /></a></div>
          </article>
        ))}
      </div>
    </Section>
  );
}
