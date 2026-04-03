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
      "A web application that integrates Sentinel-2 satellite imagery with advanced deep learning models to detect and estimate algal bloom coverage in lakes. Features dynamic visualizations, historical trend analysis, and actionable insights for environmental monitoring and water quality management. The system provides a reliable decision-support tool for researchers, local agencies, and communities to proactively address water quality issues.",
    link: "https://algsat-47ca8.web.app/#/",
    gradientStart: "#1e3a8a",
    gradientEnd: "#1a252f",
    emoji: "🌊",
    tech: ["React", "Python", "TensorFlow", "Git"],
  },
  {
    id: "honeycomb",
    title: "Geometry & Waggle Dance Analysis",
    description:
      "Investigated honeycomb architecture and bee communication patterns through statistical modeling and data analysis. Explored spatial geometry and behavioral insights to understand hive efficiency and information flow within colonies. The study highlights how natural optimization strategies can inspire efficient structural design and communication systems in engineered environments.",
    link: "https://danceofhexagons.vercel.app/",
    gradientStart: "#cca80aff",
    gradientEnd: "#1a252f",
    emoji: "🐝",
    tech: ["Python", "OpenCV", "HTML", "CSS", "JS", "Git"],
  },
  {
    id: "parcelver",
    title: "Smart Parcel Locker",
    description: "The project aims to solve security and convenience concerns in the Philippines that have answers in traditional lockers or mailboxes. Reducing theft in most cases results in increased usage for these systems since the locations are not preferred for homes. The project seeks to create a convenient and safe delivery system to all people. By providing a reliable alternative for secure parcel handling, the system encourages wider adoption and improves overall delivery accessibility.",
    link: "https://docs.google.com/document/d/1_O2VcIL3NSvFfVOvVpvMh2A0YwDkmZCr0WUIkBbgQQk/edit?usp=sharing",
    gradientStart: "#b17507ff",
    gradientEnd: "#1a252f",
    emoji: "📦",
    tech: ["C++", "C", "Git"],
  },
  {
    id: "xpense",
    title: "Expense Tracker Mobile App (In Production)",
    description: "The project aims to address the rising cost-of-living challenges in the Philippines by helping users track grocery price changes and easily find the most affordable nearby stores. With fluctuating prices and limited access to real-time information, many shoppers struggle to budget efficiently. This project seeks to provide a fast, simple, and reliable mobile tool that empowers users to compare prices, view nearby store options, and make smarter purchasing decisions.",
    link: "https://docs.google.com/document/d/1_O2VcIL3NSvFfVOvVpvMh2A0YwDkmZCr0WUIkBbgQQk/edit?usp=sharing",
    gradientStart: "#047e04ff",
    gradientEnd: "#1a252f",
    emoji: "💵",
    tech: ["React native", "JS", "TSX", "Git"],
  },
];
