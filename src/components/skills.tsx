import { Section } from "./layout/section";

const skillGroups = {
  Design: ["Graphic Design", "Visual Identity", "Typography", "Photoshop", "Canva", "Figma"],
  Build: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Git / GitHub"],
  Create: ["Video Editing", "Motion", "Social Media Content"],
  Explore: ["AI", "Creative Coding", "3D", "WebGL"],
};

export function Skills() {
  return (
    <Section className="skills" id="skills" label="04 / Skills / Toolkit">
      <div className="skills__intro">
        <h2>A broad<br /><em>toolkit.</em></h2>
        <p>Enough range to follow an idea wherever it needs to go. Always with more to learn.</p>
      </div>
      <div className="skills__list">
        {Object.entries(skillGroups).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <ul>{items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
