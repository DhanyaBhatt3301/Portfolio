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
  tailwind,
  nodejs,
  mongodb,
  git,
  stripe,
  prisma,
  postgresql,
  aahvan,
  voxx,
  ShikShakShopLogo,
  CaseUpLogo,
  pioneer,
  VoxxCover,
  AahvanCover,
  ShikShakShopCover,
  CaseUpCover,
  CollaberaLogo,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "stripe",
    icon: stripe,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Database engineer intern",
    company_name: "Collabera",
    icon: CollaberaLogo,
    iconBg: "#E6DEDD",
    date: "June -July 2024",
    points: [
      "Worked as a Database engineering intern on prjects at Collabera Digital",
      "Understood and mastered the power of RDBMS at large scale.",
      "Worked with technologies like SQL and MS SQL Server.",
      "Learnt about the workings of a corporate culture and working in the IT department.",
    ],
  },
  {
    title: "Personalized Phone Case",
    company_name: "CaseUp",
    icon: CaseUpLogo,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Case Up enables users to generate custom made personalized phone case designs.",
      "Built with Typescript, Next.js, React, Tailwind CSS, and PostgreSQL, Prisma ORM & Neon Tech PostgreSQL provider for fast & scalable data storage.",
      "Stripe Payment Gateway for secure and reliable payment session management.",
      "Prisma ORM and UploadThings to store data on local storage and faster data retrieving strategies.",
    ],
  },
  {
    title: "Messaging Web App",
    company_name: "Voxx",
    icon: voxx,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Voxx enables instant communication using web sockets and Pusher.",
      "Built with Typescript, Next.js, React, Tailwind CSS, and Redis for fast data storage.",
      "Leveraging Redis for speedy data retrieval, ensuring quick message delivery.",
      "Responsive design and seamless authentication for a smooth user experience.",
    ],
  },
  {
    title: "Ecommerce Marketplace",
    company_name: "Shik Shak Shop",
    icon: ShikShakShopLogo,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "A platform built for online buying and selling.",
      "Utilizes Next.js 14 for backend, React and Tailwind CSS for frontend, Payload CMS for admin dashboard management, Stripe for payments authentication, and MongoDB for database storage.",
      "Incorporates TypeScript for enhanced code quality and development efficiency.",
      "Offers secure payments via Stripe, efficient content management through Payload CMS, and robust data storage with MongoDB, ensuring a seamless e-commerce experience.",
    ],
  },

  {
    title: "College Techfest",
    company_name: "Aahvan 2k23",
    icon: aahvan,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Developed a visually appealing website for the college techfest, Aahvan 2k23, using HTML, CSS, and JavaScript to create an engaging user interface.",
      "Through this project, gained proficiency in designing user interfaces and optimizing user experience, contributing to the website's attractiveness and usability.",
      "The website served as a platform to promote Aahvan 2k23, attracting participants and attendees by showcasing event details, schedules, and highlights.",
      "This project provided hands-on experience in web development and design, fostering skills applicable to future projects and opportunities.",
    ],
  },
  // {
  //   title: "Company Website",
  //   company_name: "Pioneer",
  //   icon: pioneer,
  //   iconBg: "#383E56",
  //   date: "2022",
  //   points: [
  //     "Created a business company website using HTML, CSS, and JavaScript to showcase products/services and enhance online presence.",
  //     "Applied SEO techniques to optimize the website, resulting in increased visibility and reach for the business, attracting more customers.",
  //     "Through this project, gained valuable experience in web development and SEO, leading to employment with a company.",
  //     "The improved online presence and SEO strategies contributed to the business's growth and expansion, fostering greater customer engagement and opportunities.",
  //   ],
  // },
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

const projects = [
  {
    name: "CaseUp",
    description:
      "Developed a full-stack web application using Next.js, React.js, Tailwind CSS, Prisma, and TypeScript. Enabled users to upload custom images for personalized phone cases, and integrating Stripe for payments and Kinde for authentication.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "blue-text-gradient",
      },
    ],
    image: CaseUpCover,
    source_code_link: "https://github.com/Dhanya3301/caseup",
    deployed_link: "https://caseup-woad.vercel.app/",
  },
  {
    name: "Voxx",
    description:
      "Web-based real time messaging application that allows users to communicate over text messages. Google based account authentication helps secure user privacy.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Pusher",
        color: "pink-text-gradient",
      },
    ],
    image: VoxxCover,
    source_code_link: "https://github.com/Dhanya3301/voxx.git",
    deployed_link: "https://voxx.vercel.app/",
  },
  {
    name: "Shik Shak Shop",
    description:
      "Web-based digital marketplace that allows users to buy and sell digital assets for USD. Payments are accepted over stripe accepting UPI or ATM cards.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Payload",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: ShikShakShopCover,
    source_code_link: "https://github.com/Dhanya3301/Shik-Shak-Shop.git",
    deployed_link: "https://shik-shak-shop-production.up.railway.app/",
  },
  {
    name: "Aahvan 2k23",
    description:
      "Developed a dynamic and interactive website using HTML5, CSS3 & Javascript for my college's tech fest event, featuring event schedules, registration forms, and multimedia galleries. The site enhanced user engagement with a responsive and interactive design, effectively promoting the fest and facilitating participant involvement.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: AahvanCover,
    source_code_link: "https://github.com/Dhanya3301/Aahvan-2k23.git",
    deployed_link: "https://aahvan-2k23.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
