export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  result?: string;
  description: string;
}

export interface ExperienceProject {
  id: string;
  title: string;
  category: "Environmental Conservation" | "Conference & Representation" | "Scientific Research";
  date: string;
  tagline: string;
  description: string;
  details: string[];
  techStack: string[];
  image: string;
  role: string;
  organization: string;
  aspect: "landscape" | "portrait" | "standard";
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export const PERSONAL_INFO = {
  name: "Joana Binte Islam",
  monogram: "JBI",
  role: "Student",
  field: "Forestry & Environment",
  location: "Gazipur, Dhaka, Bangladesh",
  status: "Open to Research Opportunities & Academic Collaborations",
  bioHeadline:
    "Undergraduate student in Forestry & Environment with a passion for environmental conservation, biodiversity, sustainable resource management, AI, and coding.",
  aboutMe:
    "I'm an undergraduate student with a strong academic background and with a passion for environmental conservation, biodiversity, sustainable resource management, AI, and coding. I believes in humanity, respect, and lifelong learning. Committed to personal growth while contributing to environmental sustainability and seeking opportunities to contribute to research while developing professional skills.",
  stats: [
    { label: "Academic Standing", value: "BS (Hons)" },
    { label: "HSC & SSC GPA", value: "5.00" },
    { label: "Focus Areas", value: "Env & AI" },
    { label: "Core Values", value: "Lifelong Learning" },
  ],
};

export const CONTACT_INFO = {
  email: "joanabinteislam@gmail.com",
  location: "Gazipur, Dhaka, Bangladesh",
  linkedIn: "https://www.linkedin.com/in/joana-binte-islam-582514428",
  linkedInDisplay: "linkedin.com/in/joana-binte-islam-582514428",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joana-binte-islam-582514428",
    handle: "in/joana-binte-islam-582514428",
  },
  {
    name: "Email",
    url: "mailto:joanabinteislam@gmail.com",
    handle: "joanabinteislam@gmail.com",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "gau-bs",
    degree: "BS (Hons) in Forestry and Environment",
    institution: "Gazipur Agricultural University, Gazipur",
    period: "2025 — Present",
    description:
      "Rigorous academic curriculum covering ecological conservation, forest dynamics, biodiversity evaluation, climate mitigation, and sustainable land resource administration.",
  },
  {
    id: "navoganga-hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Navoganga Degree College, Narail",
    period: "2022 — 2023",
    result: "GPA 5.00 / 5.00",
    description:
      "Graduated in Science with a perfect GPA 5.00. Developed strong foundation in physics, chemistry, biology, analytical methods, and active extracurricular debating.",
  },
  {
    id: "rrf-ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Range Reserve Force Secondary School, Khulna",
    period: "2020 — 2021",
    result: "GPA 5.00 / 5.00",
    description:
      "Completed secondary education with top honors and a perfect GPA 5.00, demonstrating dedication to academic excellence and school leadership initiatives.",
  },
];

export const PROJECTS_EXPERIENCE: ExperienceProject[] = [
  {
    id: "iaas-clean-up",
    title: "IAAS Cleaning Program",
    category: "Environmental Conservation",
    date: "3 August 2026",
    role: "Participant & Environmental Steward",
    organization: "International Association of Students in Agricultural and Related Sciences (IAAS)",
    tagline: "Campus clean-up initiative promoting ecological sustainability and community awareness.",
    description:
      "Participated in an IAAS-organized campus clean-up initiative, contributing to environmental sustainability, teamwork, and community engagement while promoting environmental awareness.",
    details: [
      "Active participant in the IAAS campus ecological drive dedicated to zero-waste awareness.",
      "Engaged in hands-on waste sorting, recyclable isolation, and ecological habitat upkeep.",
      "Collaborated with peers to foster teamwork, civic responsibility, and environmental consciousness.",
    ],
    techStack: [
      "Environmental Sustainability",
      "IAAS",
      "Teamwork & Leadership",
      "Community Engagement",
      "Resource Conservation",
    ],
    image: "/images/iaas-cleaning.jpg",
    aspect: "landscape",
  },
  {
    id: "gauic-conference",
    title: "Faculty Stall Representative in International Conference",
    category: "Conference & Representation",
    date: "13 & 14 December 2025",
    role: "Official Faculty Stall Representative",
    organization: "Faculty of Forestry and Environment, GAUIC",
    tagline: "Represented the Faculty of Forestry and Environment at the GAUIC international conference.",
    description:
      "Represented the stall of Faculty of Forestry and Environment at the GAUIC, assisting visitors, promoting the faculty, and collaborating with senior students to provide information and engage attendees.",
    details: [
      "Selected to represent the Faculty of Forestry and Environment stall at the prestigious GAUIC international conference.",
      "Welcomed international researchers, academicians, and visiting delegates, presenting key department initiatives.",
      "Collaborated seamlessly with senior students and faculty members to communicate scientific findings effectively.",
    ],
    techStack: [
      "Poster & Presentation Design",
      "Public Communication",
      "Management Skill",
      "Stakeholder Engagement",
      "Forestry Science",
    ],
    image: "/images/gauic-conference.jpg",
    aspect: "standard",
  },
  {
    id: "science-fair",
    title: "Science Fair Group Presentation",
    category: "Scientific Research",
    date: "4 February 2024",
    role: "Presenter & Research Team Member",
    organization: "College Science Fair Exhibition",
    tagline: "Collaborative research and visual presentation of core scientific principles.",
    description:
      "Presented a group project at the college Science Fair, demonstrating teamwork, presentation skills, and effective communication of scientific concepts.",
    details: [
      "Co-designed informative research posters and structured visual diagrams using PowerPoint and Canva.",
      "Articulated complex hypotheses and methodologies clearly to panel evaluators and attendees.",
      "Demonstrated exemplary presentation skills, active listening, and cohesive group synergy under live scrutiny.",
    ],
    techStack: [
      "Scientific Presentation",
      "Debating & Oratory",
      "Teamwork",
      "Canva & PowerPoint",
      "Analytical Rigor",
    ],
    image: "/images/science-fair.jpg",
    aspect: "standard",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Leadership & Communication",
    skills: ["Debating", "Teamwork and Leadership", "Management skill", "Public Speaking", "Community Engagement"],
  },
  {
    title: "Presentation & Design",
    skills: ["Poster and Presentation Design", "Microsoft PowerPoint", "Canva (Basic)", "Visual Storytelling"],
  },
  {
    title: "Software & Digital Tools",
    skills: ["Microsoft Word", "Microsoft Excel (Basic)", "Research Documentation", "Data Organization"],
  },
  {
    title: "Domain & Technology Passions",
    skills: [
      "Environmental Conservation",
      "Biodiversity",
      "Sustainable Resource Management",
      "Artificial Intelligence (AI)",
      "Coding & Algorithms",
    ],
  },
];
