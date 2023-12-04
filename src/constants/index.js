import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  webdev,
  next,
  hoobank,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: " ",
    icon: reactjs,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: " ",
    icon: reactjs,
    iconBg: "#00264d",
    date: "",
    points: [
      "Coordinate with development teams and designers to develop web applications that run on numerous platforms.",
      "Using React Native, design and develop user interface components for JavaScript-based online and mobile apps.",
      "Troubleshoot issues and improve front-end performance.",
      "Write reusable, effective, as well as scalable JavaScript code and create interchangeable front-end modules.",
    ],
  },
  {
    title: "Web Developer",
    company_name: " ",
    icon: webdev,
    iconBg: "#d1d1e0",
    date: " ",
    points: [
      "Website and software application designing, building, or maintaining.",
      "Ability to write and edit technical documentation.",
      "Creative problem-solving skills.",
      "Ability to work and thrive in a fast-paced environment.",
      "Creative problem-solving skills",
      "Determining user needs by analyzing technical requirements.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: " ",
    icon: next,
    iconBg: "#ffe6ee",
    date: " ",
    points: [
      "Designing, developing, and implementing web applications using Next.js and related front-end technologies, such as React, HTML, CSS, and JavaScript.",
      "Writing clean, maintainable, and well-structured code, adhering to best practices and industry standards for Next.js development.",
      "Optimizing web applications for maximum performance, compatibility, and responsiveness across various platforms and devices.",
      "Staying up to date with the latest advancements in Next.js, React, and front-end web development technologies, and identifying opportunities to enhance existing applications or create new ones.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Corey Robertson",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Tristan Campbell",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];

const projects = [
  {
    name: "HooBank",
    description:
      "Modern web development by building a responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ui/ux",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://modern-ui-ux-with-react-p9bwf2qnp-ifans-projects.vercel.app",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };