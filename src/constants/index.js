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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jin_guo,
    jigish_zaveri,
    shuangbao_wang,
    nucamp_logo,
    topCoder_logo,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Designer",
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
      title: "React Developer",
      company_name: "NuCamp",
      icon: nucamp_logo,
      iconBg: "#FFFFFF",
      date: "April 2023 - July 2023",
      points: [
        "Developed a user-friendly campsite booking web application using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, project managers, and other developers to improve product quality.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "JavaScript Developer",
      company_name: "TopCoder",
      icon: topCoder_logo,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - April 2023",
      points: [
        "Developed and maintained web applications using JavaScript and other related technologies.",
        "Collaborated with other teams such as designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design, ensuring cross-browser compatibility and improving site efficiency by 5%.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "NuCamp",
      icon: nucamp_logo,
      iconBg: "#FFFFFF",
      date: "April 2023 - July 2023",
      points: [
        "Developed a user-friendly campsite booking mobile application using React Native and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Debugged and troubleshooted using Expo Go to test product efficiency before deployment.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Maxwell is one of the most ambitious students I have ever taught. He collaborates well with others and is very team-oriented.",
      name: "Shuangbao Wang",
      designation: "Chairman",
      company: "Computer Science, Morgan State University",
      image: shuangbao_wang,
    },
    {
      testimonial:
        "I've never met a student who truly cares about their clients' success like Max does.",
      name: "Jigish Zaveri",
      designation: "Chairman",
      company: "Information Science, Morgan State University",
      image: jigish_zaveri,
    },
    {
      testimonial:
        "After Max optimized our grading application, its effectiveness increased by 10%. I can't thank him enough!",
      name: "Jin Guo",
      designation: "Professor",
      company: "Computer Science, Morgan State University",
      image: jin_guo,
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Spade-001",
    },
    {
      name: "Campsite Booking",
      description:
        "An extensive web application that enables users to search, book, and manage available campsites to go for later on in the holidays, based on their preferred locations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reactnative",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "jQuery",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Spade-001",
    },
    {
      name: "Current Page",
      description:
        "A comprehensive service booking platform that allows users to reach out and book its developer's services for their personal needs and purposes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Spade-001",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };