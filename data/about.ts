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
  title: "From MERN to AI – building full-stack products with a purpose.",
  summary: `I'm a developer who bridges traditional web development with emerging AI capabilities. My journey started with the MERN stack – building secure, production-ready applications with JWT authentication, REST APIs, and responsive frontends. What drives me is creating software that doesn't just work, but solves real problems.

  More recently, I've been deep in the AI space – building RAG systems that combine the power of large language models with vector databases like pgvector and ChromaDB. I'm particularly interested in how semantic search and document Q&A can transform how we interact with information.

  Right now, I'm pursuing my Bachelor's in Computer Science and looking for opportunities where I can contribute to meaningful projects – whether that's shipping production MERN apps, experimenting with AI integration, or bridging the two. I believe in continuous learning and always look to grab the opportunities.`,
  highlights: [
    {
      title: "MERN Stack Development",
      description:
        "I build full-stack applications with MongoDB, Express.js, React.js, and Node.js – focusing on secure authentication, RESTful APIs, and responsive user experiences that scale.",
    },
    {
      title: "AI & RAG Systems",
      description:
        "I develop AI-powered applications using Retrieval-Augmented Generation (RAG), LangChain, Ollama, PostgreSQL with pgvector, ChromaDB, Gemini API, and Groq API – creating intelligent systems that understand and retrieve information.",
    },
    {
      title: "What's Next",
      description:
        "I'm exploring how to make AI more accessible and practical – building tools that help people interact with their data intuitively. I'm open to roles where I can contribute to both traditional web development and AI-powered applications.",
    },
  ] satisfies AboutHighlight[],
  details: [
    { label: "Location", value: profile.location },
    { label: "Phone", value: profile.phone },
    { label: "Email", value: profile.email },
    { label: "Role", value: profile.title },
  ] satisfies AboutDetail[],
} as const;