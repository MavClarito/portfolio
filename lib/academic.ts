export interface AcademicEntry {
  id: string;
  year: string;
  label: string;
  period: string;
  title: string;
  description: string;
  highlights: string[];
}

export const academicData: AcademicEntry[] = [
  {
    id: "year-2021",
    year: "2021",
    label: "1st Year",
    period: "A.Y. 2021–2022",
    title: "Foundation & Discovery",
    description:
      "Enrolled at the Technological Institute of the Philippines pursuing a B.S. in Computer Engineering. Built a strong foundation in engineering mathematics, physics, and C programming.",
    highlights: [
      "Objective Oriented Programming (C++)",
      "Calculus",
      "Programming Logic & Design",
      "Computer-Aided Drafting (CAD)",
    ],
  },
  {
    id: "year-2022",
    year: "2022",
    label: "2nd Year",
    period: "A.Y. 2022–2023",
    title: "Core Engineering Principles",
    description:
      "Delved into digital systems, circuit analysis, and networking while working on hands-on projects such as building logic circuits on breadboards and designing combinational systems.",
    highlights: [
      "Fundamentals of Electronic and Electrical Circuits",
      "Database Management Systems",
      "Logic Circuits and Design",
      "Computer Network & IoT",
    ],
  },
  {
    id: "year-2023",
    year: "2023",
    label: "3rd Year",
    period: "A.Y. 2023–2024",
    title: "Hardware-Software Integration",
    description:
      "Transitioned into microcontroller programming, embedded systems, and full-stack web development. Led a team project that implemented a real-time IoT environment monitoring system using Arduino and React.",
    highlights: [
      "Microprocessors & Microcontrollers",
      "Operating Systems",
      "Robotics & Automation (C/C++)",
      "Machine Perception (Python)",
    ],
  },
  {
    id: "year-2024-1",
    year: "2024",
    label: "4th Year · S1",
    period: "1st Sem, A.Y. 2024–2025",
    title: "Capstone & Specialization",
    description:
      "Began the capstone project - a web app that detects algal bloom levels in Laguna lake using deep learning. Focused on software design patterns, cloud deployment, and preparing for the thesis defense.",
    highlights: [
      "Capstone Project I",
      "Digital Signal  Processing and Application",
      "Software Design",
    ],
  },
  {
    id: "year-2024-2",
    year: "2024",
    label: "4th Year · S2",
    period: "2nd Sem, A.Y. 2024–2025",
    title: "Thesis Defense & Graduation",
    description:
      "Successfully defended the capstone thesis and completed the full-stack portfolio system. Prepared for professional engineering board exams and completed the required on-the-job training.",
    highlights: [
      "Capstone Project II – Final Defense",
      "Professional Practice & Ethics",
      "OJT / Internship",
    ],
  },
];
