export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string[];
};

export const educationContent = {
  eyebrow: "Education",
  title: "Building a strong foundation in computer science and technology.",
  description:
    "Academic background spanning computer science, information technology, and pre-medical studies.",
} as const;

export const educationEntries: EducationEntry[] = [
  {
    id: "bs-cs",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "University of Sindh, Jamshoro",
    period: "2024 – 2027",
    details: ["Expected Graduation: 2027"],
  },
  {
    id: "intermediate",
    degree: "Intermediate (Pre-Medical)",
    institution: "IBA Public School Sukkur",
    period: "2022",
    details: [],
  },
];
