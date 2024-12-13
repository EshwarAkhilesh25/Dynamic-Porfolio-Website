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
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Content Creater",
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
      title: "Software Engineer",
      company_name: "Tech Innovations Inc.",
      //icon: starbucks,
      iconBg: "#383E56",
      date: "2020",
      points: [
        "Developed and maintained front-end components using React.js to create responsive and user-friendly interfaces. ",
        "Implemented backend APIs and services using Node.js and Express.js, optimizing performance and scalability for large-scale applications."
      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "Mobile Solutions Co.",
      //icon: starbucks,
      iconBg: "#383E56",
      date: "2014",
      points: [
        "Designed and implemented UI components for cross-platform mobile apps using React Native, ensuring consistent user experiences across iOS and Android platforms. ",
        "Integrated mobile analytics and crash reporting tools to monitor app performance and user engagement, facilitating data-driven optimizations and enhancements."
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Digital Ventures Ltd.",
      //icon: starbucks,
      iconBg: "#383E56",
      date: "2009",
      points: [
        "Led the migration of legacy systems to modern web architectures, improving system reliability and performance.",
        "Collaborated with UX/UI designers to translate wireframes and prototypes into functional web applications, focusing on usability and accessibility."
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Tech Startup X",
      //icon: starbucks,
      iconBg: "#383E56",
      date: "2008",
      points: [
        "Contributed to the development of a minimum viable product (MVP), incorporating user feedback and iterative improvements.","Conducted automated testing and quality assurance to identify and resolve software defects, ensuring high-quality deliverables for project milestones."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const education = [
    {
      
      name: "Coding Academy",
      date: "2004-2008",
      des:"Diploma in Full-Stack Web Development I graduated with a Diploma in Full-Stack Web Development from Coding Academy, gaining hands-on experience in front-end and back-end technologies, including JavaScript, React.js, Node.js, and MongoDB.",
    },
    {
      name: "Tech Institute of Innovations",
      date: "2002-2004",
      des:"Master of Engineering in Software EngineeringI completed a Master of Engineering degree in Software Engineering from the Tech Institute of Innovations, focusing on advanced software design, architecture, and project management.",
    },
    {
      name: "University of Techland",
      des:"Bachelor of Science in Computer ScienceI obtained a Bachelor of Science degree in Computer Science from the University of Techland, equipping me with a strong foundation in software development, algorithms, and computer systems.",
      date: "2002",
      
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
      source_code_link: "https://github.com/",
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
  
  export { services, technologies, experiences, testimonials,projects,education };