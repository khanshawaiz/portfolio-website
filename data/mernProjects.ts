export type ProjectLink = {
  label: string;
  href: string;
};

export type MERNProject = {
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

export const mernProjectsContent = {
  eyebrow: "Full Stack / MERN Projects",
  title: "End-to-end web applications built with the MERN stack.",
  description:
    "Full-stack projects featuring MongoDB, Express.js, React.js, and Node.js with secure authentication, REST APIs, and responsive UIs.",
} as const;

export const mernProjects: MERNProject[] = [
  {
    id: "inotebook",
    title: "iNotebook – Secure MERN Notes Application",
    description:
      "Full-stack note management application with JWT-based authentication, protected CRUD operations, React Context API for state management, RESTful APIs, and a responsive Bootstrap interface.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubUrl: "https://github.com/khanshawaiz/simple-rag-project1",
    coverImage: "/projects/inotebook/cover.png",
    screenshots: ["/projects/inotebook/1.png", "/projects/inotebook/2.png"],
    featured: true,
  },
  {
    id: "shawaiz-store",
    title: "Shawaiz's Store – E-Commerce Website",
    description:
      "Customized and deployed a production-ready e-commerce website using WordPress and WooCommerce, featuring product management, shopping cart, checkout, and customer account functionality.",
    technologies: ["WordPress", "WooCommerce"],
    liveDemoUrl: "https://shawaiz.aleemassociates.com",
    featured: true,
  },
  {
    id: "student-registration",
    title: "Student Registration System",
    description:
      "Built a complete CRUD application with server-side validation, duplicate record prevention, and secure database operations using Express.js and MongoDB.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API"],
    githubUrl: "https://github.com/khanshawaiz/student-registration-system",
    coverImage: "/projects/student-registration/cover.png",
    screenshots: ["/projects/student-registration/1.png"],
  },
  {
    id: "todo-app",
    title: "Full-Stack To-Do Application",
    description:
      "Created a task management application supporting complete CRUD functionality with MongoDB storage and asynchronous communication between frontend and backend using REST APIs.",
    technologies: ["MongoDB", "Node.js", "JavaScript", "REST API"],
    githubUrl: "https://github.com/khanshawaiz/full-stack-todo-application",
    coverImage: "/projects/todo-app/cover.png",
    screenshots: ["/projects/todo-app/1.png", "/projects/todo-app/2.png"],
  },
  {
    id: "newsmonkey",
    title: "NewsMonkey – React News Application",
    description:
      "Developed a responsive news application that retrieves live headlines across multiple categories using News API, with client-side routing through React Router.",
    technologies: ["React.js", "JavaScript", "Bootstrap", "React Router", "REST API"],
    githubUrl: "https://github.com/khanshawaiz/newsmonkey",
    coverImage: "/projects/newsmonkey/cover.png",
    screenshots: ["/projects/newsmonkey/1.png", "/projects/newsmonkey/2.png"],
  },
  {
    id: "textutils",
    title: "TextUtils – React Text Utility Application",
    description:
      "Built a text utility application providing text transformation, word and character counting, reading-time estimation, clipboard support, live preview, and dark/light mode.",
    technologies: ["React.js", "JavaScript", "Bootstrap", "React Router"],
    githubUrl: "https://github.com/khanshawaiz/textutils",
    coverImage: "/projects/textutils/cover.png",
    screenshots: ["/projects/textutils/1.png", "/projects/textutils/2.png"],
  },
];
