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
        description: "description",
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
        description: "description",
        icon: React.createElement(MdOutlineWorkOutline),
        date: "2019 - 2019"
    }
];

export const projectsData = [
    {
        title: "Product Information Management Editor Tool",
        subtitle: "PIM Editor Tool",
        description: "Description",
        tags: ["JavaScript", "React", "Redux", "HTML", "CSS", "Bootstrap 5"],
        url: "",
        imageUrl: "./pim.png"
    },
    {
        title: "A Property Rental App",
        subtitle: "RentMe",
        description: "Description",
        tags: ["JavaScript", "React", "Next.JS", "HTML", "Tailwind", "Prisma"],
        url: "",
        imageUrl: "./rent.png"
    },
    {
        title: "Configurator Website",
        subtitle: "CONFI",
        description: "Description",
        tags: ["TypeScript", "Angular", "HTML", "CSS", "Bootstrap 5"],
        url: "",
        imageUrl: "./confi.png"
    },
    {
        title: "Rolling Up & Down Blinds App",
        subtitle: "RollMe",
        description: "Description",
        tags: ["TypeScript", "Angular", "HTML", "CSS"],
        url: "",
        imageUrl: "./curtain.png"
    },
    {
        title: "Search Engine App",
        subtitle: "SearchMe",
        description: "Description",
        tags: ["Java", "Spring Boot", "API"],
        url: "",
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