import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Suryansh Singh",
  initials: "SS",
  url: "https://suryxnshsingh.me",
  location: "Indore, India",
  locationLink: "https://www.google.com/maps/place/indore",
  description: "Fullstack developer with an eye for design, building scalable webapps and crafting seamless user experiences.",
  summary:
    "Full Stack Engineer and CS Student currently pursuing BE in Electronics and Instrumentation Engineering. I have hands-on experience with modern web technologies and have worked remotely with a US-based fintech company. I enjoy building scalable applications, from departmental ERP systems to real-time video conferencing platforms. Always eager to learn and contribute to innovative projects.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "C++",
    "Next.js",
    "React.js",
    "CSS",
    "Tailwind CSS",
    "Zustand",
    "FramerMotion",
    "ReactQuery",
    "Node.js",
    "Express.js",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
    "Prisma",
    "Redis",
    "AWS",
    "Nginx",
    "PM2",
    "Vercel",
    "Cloudflare Workers",
    "Docker",
    "Git",
    "GitHub",
    "Postman",
    "Firebase",
    "Supabase",
    "RabbitMQ",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "suryxnshsingh@gmail.com",
    tel: "+91 7415718139",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/suryxnshsingh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/suryxnshsingh",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/suryxnshsingh",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:suryxnshsingh@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Invsto Inc.",
      href: "https://invsto.com",
      badges: [],
      location: "Remote (Pennsylvania, USA)",
      title: "Full Stack Engineer Intern",
      logoUrl: "/invsto.jpg",
      start: "Nov 2024",
      end: "Present",
      description:
        "Designed, built, and deployed the company's portfolio website with immersive, responsive design. Developed core frontend modules for SharkSigma (trading platform) using Next.js, TypeScript, and a Python-based strategy editor. Refactored backend OMS with FastAPI + RabbitMQ; scaled throughput from 200 → 1000+ orders/min. Implemented microservices with aio-pika, PostgreSQL, Redis; used circuit breakers, 2PC, and TLS. Set up CI/CD pipelines using GitHub Actions for testing, deployment, and orchestration.",
    },
  ],
  education: [
    {
      school: "Shri G.S. Institute of Technology and Science",
      href: "https://sgsits.ac.in",
      degree: "BE in Electronics and Instrumentation Engineering",
      logoUrl: "/sgsits.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "ERP/LMS System",
      href: "https://eilms-secret.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Built departmental ERP with QR-based attendance, internal forms, assignment management, and open-source simulator integrations. Integrated testing module with auto-evaluation, results summary, and email delivery. Automated Excel/PDF report generation. Deployed on college intranet using Nginx + PM2; used by 500+ daily.",
      technologies: [
        "React.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Zustand",
        "Nginx",
        "PM2",
      ],
      links: [
        {
          type: "Website",
          href: "https://eilms-secret.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/lms.mp4",
    },
    {
      title: "OcuLink",
      href: "https://oculink.suryxnshsingh.me",
      dates: "2024",
      active: true,
      description:
        "Real-time video/audio conferencing with screen sharing. Features: scheduling, recording, personal rooms. NeoBrutalism UI showcased on neobrutalism.dev",
      technologies: [
        "Next.js",
        "TypeScript",
        "GetStream",
        "Clerk",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://oculink.suryxnshsingh.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/suryxnshsingh/OcuLink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Eventsy",
      href: "https://eventsy-suryansh.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Event management app with CRUD and RSVP functionality built using the MERN stack.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://eventsy-suryansh.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/suryxnshsingh/Eventsy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/eventsy.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
