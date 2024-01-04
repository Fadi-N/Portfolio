import {IoLogoJavascript} from "react-icons/io";
import React from "react";
import {BiLogoBootstrap, BiLogoTypescript} from "react-icons/bi";
import {FaCss3, FaDatabase, FaHtml5, FaReact} from "react-icons/fa";
import {SiRedux, SiTailwindcss, SiAngular, SiNextdotjs, SiSass} from "react-icons/si";
import {PiStudent} from "react-icons/pi";
import {MdOutlineWorkOutline} from "react-icons/md";

export const links = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Skills",
        hash: "#skills"
    }, {
        name: "Experience",
        hash: "#experience"
    },
    {
        name: "Contact",
        hash: "#contact"
    },

] as const;

export const experiencesData = [
    {
        title: "Master of Science",
        subtitle: "Computer Science",
        location: "Warsaw University of Technology",
        icon: React.createElement(PiStudent),
        date: "10.2023 - "
    },
    {
        title: "Junior Web Developer",
        location: "Remote",
        description: "During my 2 years, I have improved in using React and Angular to develop websites, applications and tools. I specialise in designing and improving front-end views, writing and improving JavaScript and CSS routines and performing accuracy testing for web applications. I am adept at creating clear and concise documentation for a smooth understanding of a project, I bring a focused and practical approach to web development.",
        icon: React.createElement(MdOutlineWorkOutline),
        date: "03.2022 - "
    },
    {
        title: "Bachelor of Engineering",
        subtitle: "Computer Science",
        location: "Nicolaus Copernicus University",
        icon: React.createElement(PiStudent),
        date: "10.2019 - 02.2023"
    },
    {
        title: "Service Desk Consultant",
        location: "Toruń, Poland",
        description: "I specialised in quickly resolving technical and functional issues, offering guidance to users. Proficient with system tracking tools, I effectively diagnosed and fixed problems while instructing team members on how to make the best use of internal tools.",
        icon: React.createElement(MdOutlineWorkOutline),
        date: "2019 - 2019"
    }
];

export const projectsData = [
    {
        title: "Product Information Management Editor Tool",
        subtitle: "PIM Editor Tool",
        description: "App Creates stunning websites effortlessly. Users experience smooth content creation using the lexical editor from Facebook. Effortlessly add various HTML tags such as buttons, images and links. The backbone of the tool is a JSON object, facilitating the transfer of values. The app is two-way binding. Designed for optimal view previews on different devices, the app provides a responsive experience on screens of different sizes. During the process of content creating, dynamic tabs present the JSON and HTML structure. Import any JSON entity seamlessly and enjoy a live preview of your work.",
        tags: ["JavaScript", "React", "Redux", "HTML", "CSS", "SCSS", "Bootstrap 5", "JSON"],
        url:"",
        footer: "I apologize, but I cannot share the source code due to contractual clauses in my employment agreement.",
        imageUrl: "./pim.png"
    },
    {
        title: "A Property Rental App",
        subtitle: "RentMe",
        description: "With a focus on user authentication, I integrated NextAuth.js for seamless login, signup, and OAuth (Google and GitHub). Elevating user experience, I employed react-hot-toast for intuitive notifications and error handling. The app boasts Next.js 13 routing, ensuring smooth navigation. Users can personalize their experience through filtered listings based on preferences, backed by middleware for authentication checks and data validation. Route Handlers (POST, GET, DELETE) facilitate efficient data management. Experience the convenience of reservation and trip functionalities, enabling users to effortlessly book, cancel, and view their trips. Additionally, a \"Favorites\" feature allows users to curate a collection of preferred listings. This project exemplifies my commitment to creating robust, user-friendly applications.",
        tags: ["JavaScript", "React", "Next.JS", "HTML", "Tailwind", "Prisma"],
        url: "https://github.com/Fadi-N/next-js-13-app",
        footer: "",
        imageUrl: "./rent.png"
    },
    {
        title: "Configurator Website",
        subtitle: "CONFI",
        description: "Description",
        tags: ["TypeScript", "Angular", "HTML", "CSS", "SCSS", "Bootstrap 5"],
        url:"",
        footer: "I apologize, but I cannot share the source code due to contractual clauses in my employment agreement.",
        imageUrl: "./confi.png"
    },
    {
        title: "Rolling Up & Down Blinds App",
        subtitle: "RollMe",
        description: "Description",
        tags: ["TypeScript", "Angular", "HTML", "CSS", "SCSS",],
        url: "",
        footer: "",
        imageUrl: "./curtain.png"
    },
    {
        title: "Search Engine App",
        subtitle: "SearchMe",
        description: "This innovative project streamlines business information retrieval through two search forms, accommodating searches based on NIP or REGON. The user-friendly application demands the input of a specific date for each search, ensuring precise results. Upon form completion and submission, the Ministry of Finance API transforms JSON data into valuable insights, presenting details such as business name, location, and other relevant specifics. This project showcases my proficiency in leveraging technology to create efficient, data-driven solutions that enhance user experiences",
        tags: ["Java", "Spring Boot", "HTML", "CSS", "API"],
        url: "https://github.com/Fadi-N/SearchEngineAPI",
        footer: "",
        imageUrl: "./api.png"
    }
] as const;

export const skillsData = [
    {
        title: "JavaScript",
        icon: React.createElement(IoLogoJavascript, {color: "#F0DB4F"})
    },
    {
        title: "TypeScript",
        icon: React.createElement(BiLogoTypescript, {color: "#007acc"})
    },
    {
        title: "React",
        icon: React.createElement(FaReact, {color: "#61DBFB"})
    },
    {
        title: "Angular",
        icon: React.createElement(SiAngular, {color: "#c3002f"})
    },
    {
        title: "Next.JS",
        icon: React.createElement(SiNextdotjs)
    },
    {
        title: "Redux",
        icon: React.createElement(SiRedux, {color: "#764abc"})
    },
    {
        title: "Database",
        icon: React.createElement(FaDatabase, {color: "#00758F"})
    },
    {
        title: "HTML",
        icon: React.createElement(FaHtml5, {color: "#e34c26"})
    },
    {
        title: "CSS",
        icon: React.createElement(FaCss3, {color: "#264de4"})
    },
    {
        title: "SCSS",
        icon: React.createElement(SiSass, {color: "#cc6699"})
    },
    {
        title: "Bootstrap 5",
        icon: React.createElement(BiLogoBootstrap, {color: "#563d7c"})
    },
    {
        title: "Tailwind",
        icon: React.createElement(SiTailwindcss, {color: "#06b6d4"})
    }
] as const;