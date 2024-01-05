import {IoLogoJavascript} from "react-icons/io";
import React from "react";
import {BiLogoBootstrap, BiLogoTypescript} from "react-icons/bi";
import {FaCss3, FaDatabase, FaHtml5, FaReact} from "react-icons/fa";
import {SiRedux, SiTailwindcss, SiAngular, SiNextdotjs, SiSass} from "react-icons/si";
import {PiStudent} from "react-icons/pi";
import {MdOutlineWorkOutline} from "react-icons/md";
import WebDeveloper from "@/components/descriptions/web-developer";
import ServiceDesk from "@/components/descriptions/service-desk";
import EditorTool from "@/components/descriptions/editor-tool";
import RentalApp from "@/components/descriptions/rental-app";
import SearchApp from "@/components/descriptions/search-app";
import Portfolio from "@/components/descriptions/portfolio";
import Confi from "@/components/descriptions/confi";
import RollingApp from "@/components/descriptions/rolling-app";

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
        description: React.createElement(WebDeveloper),
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
        description: React.createElement(ServiceDesk),
        icon: React.createElement(MdOutlineWorkOutline),
        date: "2019 - 2019"
    }
];

export const projectsData = [
    {
        title: "Product Information Management Editor Tool",
        subtitle: "PIM Editor Tool",
        description: React.createElement(EditorTool),
        tags: ["JavaScript", "React", "Redux", "HTML", "CSS", "SCSS", "Bootstrap 5", "JSON"],
        url: "",
        footer: "I apologize, but I cannot share the source code due to contractual clauses in my employment agreement.",
        imageUrl: "./pim.png"
    },
    {
        title: "A Property Rental App",
        subtitle: "RentMe",
        description: React.createElement(RentalApp),
        tags: ["JavaScript", "React", "Next.JS", "NextAuth.js", "HTML", "Tailwind", "Prisma", "Middleware", "React Hot Toast"],
        url: "https://github.com/Fadi-N/next-js-13-app",
        footer: "",
        imageUrl: "./rent.png"
    },
    {
        title: "Portfolio Website",
        subtitle: "Current site",
        description: React.createElement(Portfolio),
        tags: ["JavaScript", "React", "Next.JS", "HTML", "Tailwind", "JSON", "NextUI", "Framer Motion", "Resend", "React Email", "React Hot Toast"],
        url: "https://github.com/Fadi-N/Portfolio",
        footer: "",
        imageUrl: "./portfolio.png"
    },
    {
        title: "Configurator Website",
        subtitle: "CONFI",
        description: React.createElement(Confi),
        tags: ["TypeScript", "Angular", "HTML", "CSS", "SCSS", "Bootstrap 5"],
        url: "",
        footer: "I apologize, but I cannot share the source code due to contractual clauses in my employment agreement.",
        imageUrl: "./confi.png"
    },
    {
        title: "Rolling Up & Down Blinds App",
        subtitle: "RollMe",
        description: React.createElement(RollingApp),
        tags: ["TypeScript", "Angular", "HTML", "CSS", "SCSS",],
        url: "",
        footer: "I apologize, but I cannot share the source code due to contractual clauses in my employment agreement.",
        imageUrl: "./curtain.png"
    },
    {
        title: "Search Engine App",
        subtitle: "SearchMe",
        description: React.createElement(SearchApp),
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