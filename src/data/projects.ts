export type ProjectTone = "cobalt" | "coral" | "lime" | "violet" | "charcoal" | "paper";

export type Project = {
  number: string;
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  tone: ProjectTone;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "AI Expense Tracker",
    year: "Exploration",
    category: "Product design / Development / AI",
    description: "A considered way to turn everyday spending into a clearer, more useful picture.",
    tags: ["React", "AI", "Product"],
    tone: "cobalt",
  },
  {
    number: "02",
    title: "Business Management System",
    year: "Exploration",
    category: "UI design / Development",
    description: "An interface study for the busy, human parts of running a small business.",
    tags: ["TypeScript", "Systems", "UI"],
    tone: "coral",
  },
  {
    number: "03",
    title: "Event Visual Identity",
    year: "Selected study",
    category: "Graphic design / Branding",
    description: "A flexible visual language that makes an event feel present before it begins.",
    tags: ["Identity", "Typography", "Print"],
    tone: "lime",
  },
  {
    number: "04",
    title: "Website Project",
    year: "Exploration",
    category: "UI/UX / Frontend",
    description: "A digital space where structure, movement and content have room to breathe.",
    tags: ["Web", "Interaction", "Frontend"],
    tone: "violet",
  },
  {
    number: "05",
    title: "Video / Motion Project",
    year: "Ongoing",
    category: "Video editing / Motion",
    description: "Short-form visual experiments made to find rhythm in an idea.",
    tags: ["Motion", "Edit", "Content"],
    tone: "charcoal",
  },
  {
    number: "06",
    title: "Creative Technology Experiment",
    year: "Ongoing",
    category: "AI / Web / Interaction",
    description: "Small prototypes for the space between a useful tool and a playful surprise.",
    tags: ["Creative code", "3D", "Research"],
    tone: "paper",
  },
];
