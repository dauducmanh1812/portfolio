export const personalInfo = {
  name: "Đỗ Đức Mạnh",
  nameEn: "Do Duc Manh",
  title: "Full-stack Software Engineer",
  subtitle: "Team Leader",
  phone: "+84 974 629 096",
  email: "ttducmanh.1812@gmail.com",
  location: "Cầu Giấy, Hà Nội",
  birthday: "December 18, 1999",
  photo: "/profile.jpg",
  social: {
    github: "https://github.com/ducmanh",
    linkedin: "https://linkedin.com/in/ducmanh",
    facebook: "https://facebook.com/ducmanh",
  },
  objective:
    "Full-stack Software Engineer and Team Leader with 5+ years of hands-on experience in application development and system design, including 2 years in leadership roles. Experienced in leading development teams and delivering scalable application platforms. Strong in defining technical solutions, designing cloud-based architectures across multiple technology stacks, and collaborating with customers during development to meet business objectives.",
};

export const experience = [
  {
    company: "GMO-Z.COM RUNSYSTEM JSC.",
    period: "2021 — Present",
    role: "Full-stack Developer → Team Leader",
    description:
      "Building and leading development of enterprise-scale web applications for Japanese and Southeast Asian clients. Promoted to Team Leader in 2023, managing cross-functional teams up to 80 members.",
    highlights: [
      "Led 6+ projects across e-commerce, hospitality, travel, and construction domains",
      "Managed teams ranging from 10 to 80 members",
      "Exceeded sales/delivery KPIs by 15-30% quarterly",
      "Awarded Best G-Runner 2025",
    ],
  },
];

export const projects = [
  {
    id: "noplan",
    name: "NoPlan Japan",
    period: "Apr 2024 — Present",
    role: "Team Leader",
    teamSize: 40,
    description:
      "A platform connecting travelers with local guides for unique, immersive experiences beyond typical tourist spots in Japan.",
    tech: ["Laravel", "Livewire", "MySQL", "AWS", "Stripe", "Firebase", "Cloudflare"],
    platform: "Web + Tablet + Mobile",
    featured: true,
  },
  {
    id: "hotel-tool",
    name: "Hotel Staff Management Tool",
    period: "Jan 2024 — Mar 2024",
    role: "Team Leader",
    teamSize: 10,
    description:
      "A specialized desktop application built with Electron for managing hotel room operations and optimizing booking processes.",
    tech: ["Vue.js", "Electron", "Python"],
    platform: "Desktop (Windows)",
    featured: false,
  },
  {
    id: "jp-ecommerce",
    name: "Japanese Food E-Commerce",
    period: "Nov 2023 — Dec 2023",
    role: "Member",
    teamSize: 30,
    description:
      "A Japanese e-commerce website serving various food products to domestic consumers, built on Shopify.",
    tech: ["Shopify Liquid", "JavaScript", "CSS"],
    platform: "Web + Tablet + Mobile",
    featured: false,
  },
  {
    id: "id-ecommerce",
    name: "Indonesia E-Commerce Platform",
    period: "Jul 2023 — Oct 2023",
    role: "Member",
    teamSize: 20,
    description:
      "A comprehensive online shopping platform with vendor services for the Indonesian market.",
    tech: ["Laravel", "React", "MySQL"],
    platform: "Web + Mobile",
    featured: true,
  },
  {
    id: "fukagawa",
    name: "Fukagawa Construction Platform",
    period: "May 2022 — Present",
    role: "Member",
    teamSize: 80,
    description:
      "A large-scale Japanese platform for construction materials ordering and information management serving enterprise clients.",
    tech: ["Laravel", "Vue.js", "NuxtJS", "MySQL", "DB2", "SQL Server"],
    platform: "Web + Mobile",
    featured: true,
  },
  {
    id: "iris",
    name: "IRIS (CS1-Renewal) + MuseAPI",
    period: "Jan 2021 — May 2022",
    role: "Member",
    teamSize: 20,
    description:
      "A Japanese platform offering customer care services, staff tools, and domain registration/management with user-friendly frontend and robust backend.",
    tech: ["Laravel", "jQuery", "Oracle", "HTML/CSS"],
    platform: "Web (Windows)",
    featured: false,
  },
];

export const skills = {
  languages: ["PHP", "JavaScript", "TypeScript", "Python", "SQL"],
  backend: ["Laravel", "Node.js", "NestJS", "Express", "Django"],
  frontend: ["Vue.js", "React", "NuxtJS", "Livewire", "Electron"],
  databases: ["MySQL", "PostgreSQL", "SQL Server", "DB2", "MongoDB", "Oracle", "MariaDB"],
  cloud: ["AWS", "Docker", "Git", "CI/CD", "Cloudflare", "Firebase"],
  other: ["RESTful API Design", "Technical Solution Design", "Requirement Analysis", "Pre-Sales Support"],
};

export const education = {
  school: "Hanoi University",
  degree: "Bachelor of Information Technology",
  period: "2017 — 2021",
};

export const certifications = [
  { name: "TOEIC", score: "935", year: "2025" },
];

export const awards = [
  { name: "Best G-Runner", org: "GMO-Z.COM RUNSYSTEM JSC.", year: "2025" },
];
