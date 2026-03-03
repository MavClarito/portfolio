export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  gradientStart: string;
  gradientEnd: string;
  emoji: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "algal",
    title: "Deep Learning Algal Bloom Estimator",
    description:
      "Real‑time web app integrating satellite data and deep learning for algal bloom detection.",
    link: "https://algsat-47ca8.web.app/#/",
    gradientStart: "#1e3a8a",
    gradientEnd: "#0a192f",
    emoji: "🌊",
    tech: ["React", "Python", "TensorFlow"],
  },
  {
    id: "honeycomb",
    title: "Geometry & Waggle Dance Analysis",
    description:
      "Analyzed honeycomb structure and bee communication using statistical methods.",
    link: "https://danceofhexagons.vercel.app/",
    gradientStart: "#3b3b6d",
    gradientEnd: "#0d0d0d",
    emoji: "🐝",
    tech: ["Python", "OpenCV", "HTML", "CSS", "JS"],
  },
  {
    id: "placeholder1",
    title: "Proj 1",
    description: "Nothing to add for now",
    link: "https://example.com/1",
    gradientStart: "#2c3e50",
    gradientEnd: "#1a252f",
    emoji: "🛠️",
    tech: [""],
  },
];
