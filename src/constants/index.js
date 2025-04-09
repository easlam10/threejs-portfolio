export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'Voqal - AI Mock Interviews Platform',
    desc: 'Voqal is an AI-powered mock interview platform that helps users practice, refine, and ace real-world job interviews. Leveraging Vapi.ai, the app simulates lifelike conversational interviews, while Google Gemini delivers instant, detailed feedback on responses, tone, and clarity.',
    subdesc:
      'Built with Vapi, Next.js, Firebase, Tailwind CSS, and TypeScript, it offers a seamless, scalable experience—from real-time voice interactions to performance analytics.',
    href: 'https://ai-mock-interviews-virid-xi.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/Firebase.png',
      },
    ],
  },
  {
    title: 'My Portfolio - 3d Portfolio',
    desc: 'an immersive 3D portfolio showcasing my expertise in full-stack development with a focus on the MERN stack (MongoDB, Express.js, React, Node.js). ',
    subdesc:
      ' Built with React, Three.js, and Tailwind CSS, the site blends dynamic 3D visuals with seamless interactivity, offering a unique way to explore my projects, skills, and experience.',
    href: 'https://threejs-portfolio-chi-seven.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Threejs',
        path: '/assets/threejs.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Ragzon Solutions',
    pos: 'Full Stack Web Developer (MERN)',
    duration: 'November, 2024 - Present',
    title:
      'As an Entry-Level Full Stack Developer (MERN) at Ragzon Solutions, I develop responsive web applications using React.js, Next.js, and Tailwind CSS for the frontend, while building RESTful APIs with Node.js, Express.js, and MongoDB for backend functionality. I leverage Next.js for both server-side rendering and API routes to create optimized full-stack solutions. My responsibilities include version control using Git/GitHub for collaborative development and deploying applications on platforms like Vercel/Netlify with performance optimization in mind',
    icon: '/assets/ragzon.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Marines IT',
    pos: 'Web Development Intern',
    duration: 'August, 2024 - October, 2024',
    title:
      "I have developed a solid foundation in web development through mastering HTML5, CSS3, and JavaScript fundamentals. Building on this knowledge, I've acquired essential React.js skills including component creation, state management, and lifecycle methods. I've implemented responsive design principles using CSS and Bootstrap (Reactstrap) to create accessible, user-friendly interfaces, while also learning to integrate APIs with React to fetch and display dynamic content.. This experience has helped me understand the importance of writing reusable, maintainable code to optimize development workflows",
    icon: '/assets/marine.png',
    animation: 'clapping',
  },
  
];
