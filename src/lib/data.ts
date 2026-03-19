import type {
  Experience,
  Project,
  Achievement,
  SkillGroup,
  SocialLink,
  RpgStat,
} from "@/types";

export const ROLES = [
  "Full Stack Engineer",
  "Problem Architect",
  "Performance Optimizer",
  "Code Craftsman",
  "React Developer",
  "Node.js Developer",
];

export const RPG_STATS: RpgStat[] = [
  { label: "LeetCode", value: "1300+", sub: "Problems solved", xp: "+150 XP" },
  { label: "B.tech", value: "9.11", sub: "/ 10.0 · RCET", xp: "+200 XP" },
  {
    label: "Build Time",
    value: "45%",


    sub: "Reduced · Innovaccer",
    xp: "+300 XP",
  },
  { label: "Conversion", value: "+13.5%", sub: "MakeMyTrip", xp: "+250 XP" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "innovaccer",
    company: "Innovaccer",
    role: "Software Development Engineer 2",
    type: "Full-time · Noida, India",
    range: "Oct 2024 — Present",
    location: "Noida, India",
    tag: "Innovaccer",
    bullets: [
      "Vibe-coded features on <strong>Alameda</strong>, a US Government healthcare product, using Claude, Cursor, GitHub Copilot — reducing story points and delivery time significantly.",
      "Developed <strong>Contact Tracing</strong> to track individuals and close contacts for communicable disease cases.",
      "Built <strong>ASQ Assessment & Scale-Based Risk Reports</strong> surfacing patient risk scores to care managers.",
      "Engineered <strong>Email Reporting System</strong> for clinical reports via customisable templates.",
      "Developed <strong>Case Management Landing Page</strong> — unified dashboard of patient activities.",
      "Reduced build time by <strong>45%</strong> via Webpack caching, code-splitting & config refactoring.",
      "Achieved <strong>95% code coverage</strong> on the US Government product stack.",
    ],
    techs: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Webpack",
      "CI/CD",
      "Firebase",
      "Figma MCP",
      "Claude AI",
    ],
  },
  {
    id: "makemytrip",
    company: "MakeMyTrip",
    role: "Senior Software Engineer 1",
    type: "Full-time · Gurugram, India",
    range: "Jul 2022 — Oct 2024",
    location: "Gurugram, India",
    tag: "MakeMyTrip",
    bullets: [
      "Pioneered the <strong>Seat Availability Feature</strong> across Web & App — <strong>13.5% increase</strong> in user interactions.",
      "Migrated trains home, listing & traveller booking review pages across platforms.",
      "Implemented <strong>station, nearby station & train auto-suggest</strong>, elevating user convenience.",
      "Added <strong>Bus interlinking</strong> in trains SEO pages, increasing bus bookings by <strong>5%</strong>.",
      "Created Rails Information Services — Live Train Status, Schedule, Platform Locator — traffic +<strong>12%</strong>.",
      "SEO improvements for Goibibo Train Route & Detail pages, traffic +<strong>8%</strong>.",
    ],
    techs: ["React.js", "Next.js", "React Native", "Redux", "Node.js", "SEO"],
  },
  {
    id: "zunroof",
    company: "Zunroof",
    role: "Software Development Engineer",
    type: "Full-time · Gurugram, India",
    range: "Aug 2021 — Jul 2022",
    location: "Gurugram, India",
    tag: "Zunroof",
    bullets: [
      "Deployed <strong>EV Charger systems & Smart Locks</strong>, driving +<strong>10%</strong> user engagement.",
      "Designed <strong>Repeat Sales Feature</strong>, boosting recurring revenue by <strong>5%</strong>.",
      "Integrated <strong>Alexa & Google Assistant Skills</strong>, increasing engagement by <strong>7.5%</strong>.",
    ],
    techs: ["JavaScript", "React.js", "Node.js", "Firebase", "IoT"],
  },
  {
    id: "rcet",
    company: "RCET",
    role: "B.Tech — Computer Science & Engineering",
    type: "Rungta College of Engineering & Technology, Bhilai · CGPA: 9.11 / 10",
    range: "Aug 2018 — Jun 2022",
    location: "Bhilai, India",
    tag: "RCET",
    bullets: [
      "<strong>Student of the Year Batch 2018-2022</strong>",
      "Lead <strong>Rungta Business Incubator</strong>  (RuBI), the entrepreneurship cell of RCET, to promote entrepreneurship and innovation.",
      "Created <strong>Toodle</strong>, an e-learning platform adopted by 10,000+ engineering students.",
      "Finalist at <strong>Smart India Hackathon 2020</strong> with project Tribie.",
      "Received <strong>Letter of Felicitation from the CSVTU Vice Chancellor</strong> for the Toodle platform.",
    ],
    techs: ["Entrepreneurship", "Leadership", "Coding"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    icon: "</>",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    icon: "◈",
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "Tailwind CSS",
      "Webpack",
    ],
  },
  {
    id: "backend",
    icon: "◆",
    title: "Backend & Cloud",
    skills: [
      "Node.js",
      "REST APIs",
      "Firebase",
      "Cloud Functions",
      "Express.js",
      "GraphQL",
    ],
  },
  {
    id: "tools",
    icon: "△",
    title: "Tools & Practices",
    skills: [
      "Git",
      "CI/CD",
      "System Design",
      "Figma / MCP",
      "Cursor AI",
      "Claude AI",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "toodle",
    num: "01 — Featured Project",
    title: "Toodle — E-Learning Platform",
    description:
      "Single stop for engineering students — notes, video lectures, quizzes & forums. Grew to 10,000+ active students. Recognised by CSVTU VC.",
    stack: ["Moodle", "CSS", "JavaScript", "PHP"],
    link: "https://toodle.rungta.ac.in",
    linkLabel: "toodle.rungta.ac.in ↗",
  },
  {
    id: "linkedin-clone",
    num: "02 — Clone Project",
    title: "LinkedIn Clone",
    description:
      "Full-featured social platform with auth, post feed, profile management & real-time notifications using Firebase.",
    stack: ["React.js", "Firebase", "Redux", "CSS"],
    link: "https://github.com/Shubham-js/Linkedin-Project",
    linkLabel: "View on GitHub ↗",
  },
  {
    id: "portfolio-v1",
    num: "03 — Personal",
    title: "Portfolio",
    description:
      "First iteration of personal portfolio — clean minimal design with project showcases & Firebase hosting.",
    stack: ["React.js", "Next.js", "CSS3"],
    link: "https://shubhamjs.in",
    linkLabel: "Live Preview ↗",
  },
  {
    id: "tribie",
    num: "04 — Hackathon · SIH 2020",
    title: "Tribie — Community Marketplace App",
    description:
      "National finalist at Smart India Hackathon 2020. Community-driven multivendor marketplace built in 36 hours.",
    stack: ["React Native", "Node.js", "Firebase"],
    link: "#",
    linkLabel: "SIH 2020 Finalist ↗",
  },
  {
    id:'mind-relaxtion-app',
    num: "05 — Mind Relaxation App",
    title: "Mind Relaxation App",
    description:
      "A web app that helps users relax and de-stress by drawing shapes and patterns and music on every key press.",
    stack: ["Paper.js", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Shubham-js/Patatap-Clone",
    linkLabel: "View on GitHub ↗",
  },
  {
    id:'gmail-clone',
    num: "06 — Gmail Clone",
    title: "Gmail Clone",
    description:
      "A clone of Gmail that looks like Gmail.",
    stack: ["React.js", "Tailwind CSS"],
    link: "https://github.com/Shubham-js/gmail-clone",
    linkLabel: "View on GitHub ↗",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "eom",
    icon: "🏆",
    title: "Employee of the Month — Aug 2025",
    description:
      "Recognised at Innovaccer for outstanding contributions to the Alameda US Government healthcare product.",
  },
  {
    id: "leetcode",
    icon: "⚡",
    title: "Top 0.5% on LeetCode (2024)",
    description:
      "1,250+ DSA & Database problems solved. Consistently ranked among top coders globally.",
  },
  {
    id: "codechef",
    icon: "★",
    title: "4-Star Coder — CodeChef (2022)",
    description:
      "Achieved 4-star rating through consistent competitive programming performance.",
  },
  {
    id: "techgig",
    icon: "💯",
    title: "200/200 — TechGig Code Gladiators",
    description:
      "Perfect score in Cognizant's prestigious national coding competition.",
  },
  {
    id: "sih",
    icon: "🎯",
    title: "Smart India Hackathon 2020 Finalist",
    description:
      "Reached national finals with Tribie — a community travel & group management application.",
  },
  {
    id: "csvtu",
    icon: "🎓",
    title: "Letter of Felicitation — CSVTU VC",
    description:
      "Personally recognised by the Vice Chancellor for Toodle, impacting 10,000+ students.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:shubhamcomputer33@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham-js/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/Shubham-js", icon: "github" },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/shubham-js/",
    icon: "leetcode",
  },
  { label: "+91 6200905133", href: "tel:+916200905133", icon: "phone" },
];

export const TOAST_ACHIEVEMENTS = [
  { icon: "🏆", msg: "Employee of the Month!" },
  { icon: "⚡", msg: "Top 0.5% on LeetCode" },
  { icon: "💯", msg: "Perfect Score: Code Gladiators" },
  { icon: "🎯", msg: "SIH 2020 Finalist" },
  { icon: "🎓", msg: "Felicitation from CSVTU VC" },
  { icon: "★", msg: "4-Star on CodeChef" },
];
