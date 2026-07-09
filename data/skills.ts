export type SkillCategoryIcon =
  | "frontend"
  | "backend"
  | "database"
  | "cms"
  | "ai"
  | "tools";

export type SkillCategory = {
  id: string;
  title: string;
  icon: SkillCategoryIcon;
  skills: string[];
  featured?: boolean;
};

export const skillsContent = {
  eyebrow: "Skills",
  title: "A stack built for modern web apps and AI-powered systems.",
  description:
    "Technical skills across frontend, backend, databases, CMS platforms, AI/ML tooling, and development workflows.",
} as const;

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    icon: "frontend",
    skills: ["JavaScript (ES6)", "Python", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "frontend",
    skills: ["React.js", "Bootstrap", "React Router"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express.js", "RESTful API Development", "JWT Authentication"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "pgvector"],
  },
  {
    id: "cms",
    title: "CMS",
    icon: "cms",
    skills: ["WordPress", "WooCommerce"],
  },
  {
    id: "ai-ml",
    title: "AI / LLM Technologies",
    icon: "ai",
    featured: true,
    skills: [
      "LangChain",
      "Ollama",
      "ChromaDB",
      "Gemini API",
      "Groq API",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases",
      "Semantic Search",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code", "XAMPP"],
  },
];
