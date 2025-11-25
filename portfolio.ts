import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Abdul Basit Tanveer",
  title: "Hi all, I'm Abdul Basit",
  description:
    "I'm a passionate Frontend React Developer with hands-on experience building modern, high-performance web applications using React.js, Next.js, JavaScript, and UI/UX best practices. I love learning new technologies, improving user experiences, and delivering clean, efficient, and scalable code. I'm self-motivated, detail-oriented, and always excited to collaborate and grow with a team",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "Basitkh12",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:basitk365@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdul-basit-aa8942236/",
  github: "https://github.com/Basitkh12",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Frontend Developer passionate about building modern web applications",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        // emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        // {
        //   skillName: "Python",
        //   iconifyTag: "logos:python",
        // },
        // {
        //   skillName: "Django",
        //   iconifyTag: "vscode-icons:file-type-django",
        // },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        // {
        //   skillName: "AWS",
        //   iconifyTag: "logos:aws",
        // },
        // {
        //   skillName: "Heroku",
        //   iconifyTag: "logos:heroku-icon",
        // },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        // {
        //   skillName: "Docker",
        //   iconifyTag: "logos:docker-icon",
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "React", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "NextJs",
    progressPercentage: "60",
  },
  {
    Stack: "Tailwindcss",
    progressPercentage: "95",
  },
    {
    Stack: "Redux Toolkit",
    progressPercentage: "90",
  },
 
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "City University Of Science and Information Technology Peshawar",
    subHeader: "Bachelor of Science in Software Engineering",
    duration: "September 2018 - September 2022",
    desc: "",
    grade: "3.27 GPA",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "FAS Logistics",
    companyLogo: "/img/icons/common/fas.svg",
    date: "Feb 2025 - Present",
    desc: "I am currently working as a Frontend Developer at FAS Logistics, where I contribute to the DropYou logistics solution. My responsibilities include building and enhancing core product features, developing responsive landing pages, and maintaining the admin dashboard. I work extensively with React, Next.js, modern UI libraries, API integrations, and real-time interfaces to ensure a smooth and reliable user experience.",
  },
  {
    role: "Frontend Developer",
    company: "Apptex Software Solutions",
    companyLogo: "/img/icons/common/apptex.png",
    date: "Jan 2024 - Oct 2024",
    desc: "At Apptex, I contributed to projects such as Omni Casca and Skiwit, where I focused on building modern, responsive, and high-performance frontend interfaces. I developed reusable React components, integrated REST APIs, optimized performance, and ensured seamless cross-platform compatibility. Working closely with backend and design teams, I delivered intuitive UI/UX experiences that aligned with client requirements and enhanced overall product usability."
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Frontend Developer",
    company: "Libra Pharmaceuticals",
    companyLogo: "/img/icons/common/libra.png",
    date: "Sep 2023 - Feb 2024",
    desc: "At Libra Pharmaceuticals, I worked on their Rsheen POS (Point-of-Sale) system and played a key role in developing a complete software solution for their MMR operations. I designed and built efficient, user-friendly web interfaces that improved workflow, accuracy, and overall usability. My work included creating responsive UI components, integrating APIs, enhancing system functionality.",
  },
  {
    role: "Frontend Developer",
    company: "SMSAMI Inc",
    companyLogo: "/img/icons/common/smsami.png",
    date: "Dec 2022 - Aug 2023",
    desc: "As a Frontend Developer at Smsami, I worked on two major projects: E-Retail Point and Ziggy Job. I was responsible for building responsive, user-friendly interfaces using React.js and modern frontend best practices. My work included developing reusable components, improving UI/UX flows, integrating REST APIs, and optimizing overall performance.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "DropYou",
    desc: "Solution For Logistics.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://m.dropyou.co.uk/",
  },
  {
    name: "DropYou Landing Page",
    desc: "DropYou Landing Page.",
    link: "https://www.dropyou.co.uk/",
  },
  {
    name: "DropYou Admin Dashboard",
    desc: "Dashboard to keep track of different statistics",
    link: "https://admin.dropyou.co.uk/",
  },
  {
    name: "FAS logistics Landing Page",
    desc: "Landing Page of the company.",
    link: "https://www.faslogistics.co.uk/",
  },
    {
    name: "OMNI landing Page",
    desc: "Landing Page for Omni. A one stop solution for Barbers",
    link: "https://omniconnectsdigital.com/",
  },
     {
    name: "E-Retail Point",
    desc: "POS for retail stores and Pharmacies",
    link: "https://eretailpoint.com/",
  },
      {
    name: "Abbas Law",
    desc: "Law Firm",
    link: "https://abbaslaw.ca/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Abdul Basit Tanveer",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/90819670?v=4",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Abdul Basit",
  ],
};
