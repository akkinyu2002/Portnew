import { Section } from "./layout/section";

const capabilities = [
  {
    number: "01",
    title: "Design",
    description: "Visual identity, graphic design, typography and digital communication.",
  },
  {
    number: "02",
    title: "Build",
    description: "Websites, interfaces and software experiments with a human edge.",
  },
  {
    number: "03",
    title: "Create",
    description: "Video, motion and social content with a sense of rhythm.",
  },
  {
    number: "04",
    title: "Explore",
    description: "AI, creative coding and emerging technology in progress.",
  },
];

export function Capabilities() {
  return (
    <Section className="capabilities" id="capabilities" label="01 / Capability / Identity">
      <div className="capabilities__intro">
        <h2>Different tools,<br /><em>one point of view.</em></h2>
        <p>The work starts with looking closely.</p>
      </div>

      <div className="capabilities__list">
        {capabilities.map((capability) => (
          <article className="capability-row" key={capability.number}>
            <span className="capability-row__number">{capability.number}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
