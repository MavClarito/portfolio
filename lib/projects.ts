export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  gradientStart: string;
  gradientEnd: string;
  emoji?: string;
  image?: string;
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
    image: "/images/algsat.png",
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
    image: "/images/danceofhex.png",
    tech: ["Deep Learning", "Python", "Satellite Imagery", "React", "Git"],
  },
  {
    id: "parcelver",
    title: "Smart Parcel Locker",
    description: "The project aims to solve security and convenience concerns in the Philippines that have answers in traditional lockers or mailboxes. Reducing theft in most cases results in increased usage for these systems since the locations are not preferred for homes. The project seeks to create a convenient and safe delivery system to all people. By providing a reliable alternative for secure parcel handling, the system encourages wider adoption and improves overall delivery accessibility.",
    link: "",
    gradientStart: "#b17507ff",
    gradientEnd: "#1a252f",
    emoji: "📦",
    image: "/images/parcel.png",
    tech: ["C++", "C", "Git"],
  },
  {
    id: "farmradar",
    title: "Farm Radar",
    description: "A web and mobile platform that helps farmers monitor the health of their crops using Copernicus Sentinel-2 satellite imagery. The system processes satellite data to generate NDVI, NDWI, and vegetation health maps, showing which areas of a farm are healthy, stressed, or need irrigation.",
    link: "",
    gradientStart: "#047e04ff",
    gradientEnd: "#1a252f",
    emoji: "🛰️ ",
    tech: ["Deep Learning", "Python", "Satellite Imagery", "React", "Git"],
  },
  {
    id: "xpense",
    title: "Expense Tracker Mobile App (In Production)",
    description: "The project tackles the growing cost-of-living challenges in the Philippines by giving users a smarter way to monitor grocery prices. Its key advantage is the integration of OCR-based text extraction, allowing users to quickly scan receipts or shelf labels and automatically capture item names and prices without manual typing. Paired with an interactive map system, the app helps shoppers instantly locate nearby stores and compare real-time prices across different locations. A built-in community feature enables users to contribute verified price updates, creating a shared, crowd-sourced database of the most affordable options.",
    link: "",
    gradientStart: "#047e04ff",
    gradientEnd: "#1a252f",
    emoji: "💵",
    tech: ["React native", "JS", "TSX", "Git"],
  },
];
