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
    linkedin: "https://www.linkedin.com/in/dauhnamcud1812/",
    facebook: "https://www.facebook.com/dauhnamcud/",
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
      "Started as a full-stack developer and grew into a Team Leader role managing multi-disciplinary teams. Architected and shipped 6+ products serving millions of users across Japan, Korea, and Southeast Asia. Pioneered technical solutions, led architectural decisions, and mentored engineers across all seniority levels.",
    highlights: [
      "Led 6+ enterprise projects generating ~30M+ USD in combined revenue",
      "Managed and mentored teams of 10–80 engineers across 6 concurrent projects",
      "Consistently exceeded delivery KPIs by 15–30% quarterly, earning Best G-Runner 2025",
      "Designed cloud architectures on AWS, reducing infrastructure costs by 20% while improving performance",
      "Established best practices in API design, CI/CD, and system monitoring across teams",
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
      "Leading a 40-person team building a marketplace platform connecting travelers with local guides across Japan. Architected the full-stack solution, established team processes, and drove product growth from launch to 10K+ monthly users.",
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
      "Led a specialized desktop application for managing hotel operations across 500+ properties in Japan. Built with Electron and Python backend, streamlining staff workflows and reducing booking errors by 35%.",
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
      "Contributed to a Shopify-based e-commerce platform specializing in premium Japanese food products. Implemented custom themes and payment integrations, supporting $2M+ in annual sales.",
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
      "Built core marketplace features for Indonesia's largest regional e-commerce platform. Implemented vendor onboarding, payment systems, and performance optimizations supporting 500K+ daily transactions.",
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
      "Contributing to Japan's largest B2B construction materials ordering platform serving 5000+ enterprise clients. Built APIs, optimized database queries, and established monitoring systems handling 100K+ daily orders.",
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
      "Developed a comprehensive customer care platform and domain management system serving 50K+ Japanese businesses. Built RESTful APIs, implemented real-time notifications, and migrated legacy systems to modern architecture.",
    tech: ["Laravel", "jQuery", "Oracle", "HTML/CSS"],
    platform: "Web (Windows)",
    featured: false,
  },
];

export const skills = {
  languages: ["PHP", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
  backend: ["Laravel", "Node.js", "NestJS", "Express", "Django", "RESTful API Design"],
  frontend: ["Vue.js", "React", "NuxtJS", "Livewire", "Electron", "Responsive Design"],
  databases: ["MySQL", "PostgreSQL", "SQL Server", "DB2", "MongoDB", "Oracle", "MariaDB"],
  devops: ["AWS (EC2, RDS, S3, CloudFront)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Cloudflare", "Firebase", "Linux"],
  leadership: ["Team Management", "Technical Architecture", "Requirement Analysis", "Mentoring", "Performance Optimization", "Pre-Sales Support"],
};

export const education = {
  school: "Hanoi University",
  degree: "Bachelor of Information Technology",
  period: "2017 — 2021",
};

export const certifications = [
  { name: "GMO-Z.COM Runsystem", score: "Full-stack Developer → Team Leader", year: "2021 — Present" },
];

export const awards = [
  { name: "Best G-Runner", org: "GMO-Z.COM RUNSYSTEM JSC.", year: "2025" },
];
