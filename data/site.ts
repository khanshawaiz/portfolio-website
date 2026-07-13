import { profile } from "./profile";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI Projects", href: "#ai-projects" },
  { label: "MERN Projects", href: "#mern-projects" },
  { label: "Education", href: "#education" },
 
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
  url: "https://shawaizkhan.dev",
  author: profile.name,
  keywords: [
    "Shawaiz Khan",
    "Full Stack Developer",
    "MERN Stack",
    "AI/RAG Developer",
    "RAG",
    "LangChain",
    "Ollama",
    "PostgreSQL",
    "pgvector",
    "ChromaDB",
    "Gemini API",
    "Groq API",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "WordPress",
    "WooCommerce",
    "Portfolio",
  ],
} as const;
