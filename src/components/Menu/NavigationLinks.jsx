import * as React from "react";
// import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
// import aboutIcon from "../../../assets/about_icon.svg";
// import skillsIcon from "../../../assets/skills_icon.svg";
// import projectsIcon from "../../../assets/projects_icon.svg";
// import homeIcon from "../../../assets/home_icon.svg";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  {
    id: 0,
    label: "Home",
    path: "#",
    // icon: homeIcon,
  },
  {
    id: 1,
    label: "About me",
    path: "#about",
    // icon: aboutIcon,
  },
  {
    id: 2,
    label: "Skills",
    path: "#skills",
    // icon: skillsIcon,
  },
  {
    id: 3,
    label: "My projects",
    path: "#projects",
    // icon: projectsIcon,
  },
];

export const NavigationLinks = ({ isVisible, handleClick }) => (
  <motion.ul variants={variants}>
    {links.map(({ id, label, path, icon }) => (
      <></>
    ))}
  </motion.ul>
);
