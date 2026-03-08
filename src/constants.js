// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import typeScriptLogo from "./assets/tech_logo/typescript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import mysqlLogo from "./assets/tech_logo/mysql.png";

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";


// Education Section Logo's

import Nutanlogo from "./assets/education_logo/Nutanlogo.jpeg";
import ABPlogo from "./assets/education_logo/ABPlogo.jpg";

// Project Section Logo's
import project from "./assets/work_logo/project0.0.png";
import project1 from "./assets/work_logo/project 0.png";
import project4 from "./assets/work_logo/project 4.png";
import project3 from "./assets/work_logo/project 1.jpg";
import project5 from "./assets/work_logo/image.png";
import project6 from "./assets/work_logo/project 6.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typeScriptLogo },

    ],
  },
];

export const education = [
  {
    id: 1,
    img: Nutanlogo,
    school: "Nutan College of Engineering and Research",
    date: "2021 - 2025",
    grade: "7.16",
    desc: "I completed my B.Tech in Computer Science Engineering from Nutan College of Engineering and Research, Talegaon Dabhade, Pune, where I gained a strong foundation in core computer science subjects and modern software technologies. During my studies, I explored areas like Data Structures and Algorithms, Web Development, Operating Systems, and Database Management Systems, which helped me build solid problem-solving and coding skills. I also worked on several practical projects that allowed me to apply theoretical concepts to real-world scenarios, strengthening my interest in creating efficient, user-friendly, and impactful software solutions.",
    degree:
      "Bachelor of Technology - B.Tech (Computer Science And Engineering)",
  },
  {
    id: 2,
    img: ABPlogo,
    school: "ABP Shikshan Shamuh Nave Pargaon, Kolhapur",
    date: "2021",
    grade: "83.17",
    desc: "I completed my Class 12 education from ABP Shikshan Shamuh, Nave Pargaon, Kolhapur, where I pursued the Science stream with PCM (Physics, Chemistry, Mathematics) along with Computer Science. My higher secondary studies helped me build a strong analytical foundation and sparked my interest in technology, programming, and problem-solving.",
    degree: "HSC(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: ABPlogo,
    school: "ABP Shikshan Shamuh Nave Pargaon, Kolhapur",
    date: "2019",
    grade: "87.5%",
    desc: "Completed my 10th (SSC) under the Maharashtra State Board at ABP Shikshan Samuh, Nave Pargaon, Kolhapur, studying core subjects like Mathematics, Science, English, Social Science, and Marathi, which built a strong academic foundation.",
    degree: "SSC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "FitTrack AI – AI Fitness Tracking App",
    description:
      "Developed an AI-based fitness tracking web application using React and Strapi CMS. Integrated Gemini AI API to analyze food images and estimate calorie intake.Implemented user authentication and a responsive dashboard for tracking daily nutrition.",
    image: project,
    tags: ["React", "Strapi", "Gemini AI", "Tailwind CSS"],
    github:
      "https://github.com/Vicky-2004/Fitness_Tracker",
  },
  {
    id: 1,
    title: "DevWrite – Full Stack Blogging Platform",
    description:
      "Developed a full-stack blogging platform using React, Appwrite, and TinyMCE.Implemented authentication, CRUD operations, and image uploads using Appwrite Storage.Integrated a rich-text editor for blog creation and deployed the application on Vercel.",
    image: project1,
    tags: ["React", "Appwrite", "TinyMCE"," Tailwind CSS"],
    github:
      "https://github.com/Vicky-2004/Blog-App-project-",
  },
  {
    id: 4,
    title: "Multipage Grocery Website with React & Tailwind CSS",
    description:
      "Built a responsive multipage grocery website using React JS and Tailwind CSS with dynamic routing via React Router DOM. Developed reusable components and enhanced UI using Swiper.js and React Icons. Ensured mobile-first design for seamless responsiveness across devices.",
    image: project4,
    tags: ["React JS", "React Router DOM", "HTML", "Tailwind-CSS", "Swiper.js"],
    github:
      "https://github.com/Vicky-2004/Multipage-Grocery-Website-with-React-Tailwind-CSS",
  },
  {
    id: 3,
    title: "Machine Learning Model for Heart disease prediction",
    description:
      "Collaborated with a team of three to develop a machine learning solution for heart disease prediction using Logistic Regression. Performed data preprocessing and feature analysis to improve model accuracy and evaluated performance using standard classification metrics.",
    image: project3,
    tags: ["Python", "Logistic Regression model", ,],
    github: "https://github.com/Vicky-2004/Heart-Diesease-Prediction",
  },
  {
    id: 5,
    title: "Smart Todo App",
    description:
      "Developed a Todo application using React Context API for global state management and Local Storage to persist user data. Enabled users to add, update, delete, and manage tasks efficiently with data retained even after page refresh. Focused on clean component architecture and improved user experience.",
    image: project5,
    tags: ["React JS", "CSS", "HTML", "Context API"],
    github: "https://github.com/Vicky-2004/react-todo-context-localstorage",
  },
  {
    id: 6,
    title: "Weather Forecast Widget",
    description:
      "Built a responsive weather widget using React.js, Material UI, and the OpenWeather API, enabling users to search any city and instantly view real-time temperature, humidity, and weather conditions.",
    image: project6,
    tags: ["React.js", "HTML", "Tailwind-CSS"],
    github: "https://github.com/Vicky-2004/Weather-Forecast-Widget",
  },
];
