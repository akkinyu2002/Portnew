export type ProjectTone = "cobalt" | "coral" | "lime" | "violet" | "charcoal" | "paper";

export type Project = {
  number: string;
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  tone: ProjectTone;
  link?: string;
  previewLabel?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Interactive Quiz Game",
    year: "Live Project",
    category: "Frontend / Web Development",
    description: "A fast, responsive browser trivia quiz application featuring dynamic scoring and instant answer feedback.",
    tags: ["JavaScript", "CSS", "HTML"],
    tone: "cobalt",
    link: "https://akkinyu2002.github.io/Boring-Projects-Just-to-be-active-/",
    previewLabel: "play / answer / score",
  },
  {
    number: "02",
    title: "Lumbini Nursery Website",
    year: "Live Project",
    category: "Frontend / Web Development",
    description: "A digital storefront and plant catalogue for Lumbini Nursery and Plant Service in Rupandehi, Nepal.",
    tags: ["JavaScript", "CSS", "HTML", "TypeScript"],
    tone: "coral",
    link: "https://akkinyu2002.github.io/Nursery-Website/",
    previewLabel: "browse / plant / bloom",
  },
  {
    number: "03",
    title: "CSITABMC Designs",
    year: "Live Project",
    category: "Graphic Design / Branding",
    description: "Promotional visual identity and event graphic designs crafted for CSITA BMC to highlight community tech initiatives.",
    tags: ["Photoshop", "Brand Identity", "Graphic Design"],
    tone: "lime",
    link: "https://www.behance.net/gallery/256473945/CSITABMC-Designs/modules/1495873023",
    previewLabel: "ideas / innovation / impact",
  },
  {
    number: "04",
    title: "CSIT Student Portal & Utilities",
    year: "Exploration",
    category: "Frontend / UI Engineering",
    description: "A student-centric digital hub featuring academic resources, notice feeds, and essential utility tools.",
    tags: ["Next.js", "TypeScript", "React"],
    tone: "violet",
    link: "https://github.com/akkinyu2002",
    previewLabel: "campus / connect / build",
  },
  {
    number: "05",
    title: "Video / Motion Showcase",
    year: "Live Project",
    category: "Video Editing / Motion",
    description: "Short-form motion graphics and visual edits exploring rhythm, dynamic cuts, and visual storytelling.",
    tags: ["Premiere Pro", "After Effects", "Motion"],
    tone: "charcoal",
    link: "https://pin.it/1jyvAem5M",
    previewLabel: "frame / cut / rhythm",
  },
  {
    number: "06",
    title: "Interactive 3D & Creative Prototypes",
    year: "Prototype",
    category: "Creative Code / Interaction",
    description: "Experimental browser canvas prototypes exploring reactive 3D depth, particle systems, and creative code.",
    tags: ["Three.js", "WebGL", "Creative Code"],
    tone: "paper",
    link: "https://github.com/akkinyu2002",
    previewLabel: "render / depth / interact",
  },
];
