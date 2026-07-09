export type ProjectLink = {
  label: string;
  href: string;
};

export type AIProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  coverImage?: string;
  screenshots?: string[];
  demoVideo?: string;
  featured?: boolean;
};

export const aiProjectsContent = {
  eyebrow: "AI & RAG Projects",
  title: "Intelligent applications powered by LLMs and vector databases.",
  description:
    "AI-powered projects built with Retrieval-Augmented Generation (RAG), LangChain, and vector databases for semantic search and context-aware responses.",
} as const;

export const aiProjects: AIProject[] = [
  {
    id: "rag-semantic-search",
    title: "RAG-Based Semantic Search System (PostgreSQL + pgvector)",
    description:
      "Built a semantic search system that stores and indexes document embeddings directly in PostgreSQL via the pgvector extension, with local embedding and inference through Ollama models for efficient similarity search across stored content.",
    technologies: ["Python", "PostgreSQL", "pgvector", "Ollama"],
    githubUrl: "https://github.com/khanshawaiz/rag-semantic-search-system",
    coverImage: "/projects/rag-semantic-search/cover.png",
    screenshots: [
      "/projects/rag-semantic-search/1.png",
      "/projects/rag-semantic-search/2.png",
    ],
    featured: true,
  },
  {
    id: "multi-document-rag",
    title: "Advanced Multi-Document RAG System",
    description:
      "Built a Retrieval-Augmented Generation system processing multiple PDF documents with incremental indexing, allowing new documents to be added without rebuilding the existing vector database.",
    technologies: ["Python", "LangChain", "ChromaDB", "Ollama"],
    githubUrl: "https://github.com/khanshawaiz/advanced-multi-document-rag",
    coverImage: "/projects/advanced-rag/cover.png",
    screenshots: ["/projects/advanced-rag/1.png"],
    featured: true,
  },
  {
    id: "document-qa",
    title: "RAG-Based Document Question Answering System",
    description:
      "Developed an AI-powered document question-answering application using Gemini embeddings, ChromaDB for vector storage and similarity search, and Groq LLM to generate context-aware responses from uploaded PDF documents.",
    technologies: ["Python", "Gemini API", "ChromaDB", "Groq API"],
    githubUrl: "https://github.com/khanshawaiz/rag-document-question-answering",
    coverImage: "/projects/document-qa/cover.png",
    screenshots: ["/projects/document-qa/1.png"],
  },
];
