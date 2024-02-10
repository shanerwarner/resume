import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/oracle5.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Oracle Database Administor",
    location: "SK International. Mumbai, INDIA",
    description:"Currently Working as an Oracle Database Administor with hands on experience on production servers.",
    description2: "Currently Working as an Oracle Database Administor",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Network Engineer L1",
    location: "Microsense Network Pvt. Ltd. Mumbai, INDIA",
    description:"I've worked as a L1 Network Support Enginnner at the Taj Mahal Palace and Towers, Colaba, Mumbai.",
    description2: "Currently Working as an Oracle Database Administor",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Executive Flight Ops Support",
    location: "IndiGo. Mumbai, INDIA",
    description:"Worked as a Aircraft Cokcpit Quality Check Executive.",
    description2: "Currently Working as an Oracle Database Administor",
    icon: React.createElement(CgWorkAlt),
    date: "2014 – 2017",
  },
  {
    title: "Customer Service Officer",
    location: "IndiGo. Mumbai, INDIA",
    description:"Assisting the Passangers with their inquiries providing Customer service, and information to ensure customer satisfaction, and Responsibilities as a Dispatch Coordinator.",
    description2: "",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2014",
  },
] as const;

export const projectsData = [
  {
    title: "12c to 19c Upgradation",
    description: "Successfully Migrated SFMS Database from 12c to 19c Standalone and on Oracle Failsafe",
    tags: ["Oracle", "19c", "19c", "Oracle Failsafe", "Windows Clustering"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "Oracle",
  "MongoDB",
  "MSSQL",
  "Windows Server",
  "Docker",
  "Kubernetes",
  "Git",
] as const;
