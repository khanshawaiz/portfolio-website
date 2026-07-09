import { profile } from "./profile";

export type AboutHighlight = {
  title: string;
  description: string;
};

export type AboutDetail = {
  label: string;
  value: string;
};

export const aboutContent = {
  eyebrow: "About Me",
  title: "Engineering full-stack products and intelligent RAG systems.",
  summary: profile.summary,
  highlights: [
    {
      title: "MERN Stack Development",
      description:
        "Hands-on experience building MERN stack applications with MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      title: "AI & RAG Systems",
      description:
        "Built AI-powered applications using Retrieval-Augmented Generation (RAG), LangChain, Ollama, PostgreSQL + pgvector, ChromaDB, Gemini API, and Groq API.",
    },
    {
      title: "Academic Foundation",
      description:
        "Currently pursuing a Bachelor of Science in Computer Science at the University of Sindh, Jamshoro.",
    },
  ] satisfies AboutHighlight[],
  details: [
    { label: "Location", value: profile.location },
    { label: "Phone", value: profile.phone },
    { label: "Email", value: profile.email },
    { label: "Role", value: profile.title },
  ] satisfies AboutDetail[],
} as const;
