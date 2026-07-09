import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    url: siteConfig.url,
    sameAs: [
      "https://github.com/khanshawaiz",
      "https://linkedin.com/in/shawaiz-khan-113851292",
    ],
    description: profile.summary,
    knowsAbout: [
      "MERN Stack",
      "JavaScript (ES6)",
      "Python",
      "HTML5",
      "CSS3",
      "React.js",
      "Bootstrap",
      "React Router",
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "JWT Authentication",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "pgvector",
      "WordPress",
      "WooCommerce",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Ollama",
      "ChromaDB",
      "Gemini API",
      "Groq API",
      "Vector Databases",
      "Semantic Search",
      "Git",
      "GitHub",
      "VS Code",
      "XAMPP",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
