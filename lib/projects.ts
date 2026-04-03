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
      "A web application that integrates Sentinel‑2 satellite imagery with advanced deep learning models to detect and estimate algal bloom coverage in lakes. Features dynamic visualizations, historical trend analysis, and actionable insights for environmental monitoring and water quality management.",
    link: "https://algsat-47ca8.web.app/#/",
    gradientStart: "#1e3a8a",
    gradientEnd: "#0a192f",
    emoji: "🌊",
    tech: ["React", "Python", "TensorFlow", "Git"],
  },
  {
    id: "honeycomb",
    title: "Geometry & Waggle Dance Analysis",
    description:
      "Investigated honeycomb architecture and bee communication patterns through statistical modeling and data analysis. Explored spatial geometry and behavioral insights to understand hive efficiency and information flow within colonies.",
    link: "https://danceofhexagons.vercel.app/",
    gradientStart: "#3b3b6d",
    gradientEnd: "#0d0d0d",
    emoji: "🐝",
    tech: ["Python", "OpenCV", "HTML", "CSS", "JS", "Git"],
  },
  {
    id: "parcelver",
    title: "Parcel Locker",
    description: "The intention of the project is to create a new mail system for the citizens of the Philippines. The system will have more advanced safety measures to avoid losing items brought to customers.",
    link: "https://docs.google.com/document/d/1_O2VcIL3NSvFfVOvVpvMh2A0YwDkmZCr0WUIkBbgQQk/edit?usp=sharing",
    gradientStart: "#2c3e50",
    gradientEnd: "#1a252f",
    emoji: "📦",
    tech: ["C++", "C", "Git"],
  },
];
