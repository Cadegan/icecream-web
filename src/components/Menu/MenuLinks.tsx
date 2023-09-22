import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

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
    icon: "",
  },
  {
    id: 1,
    label: "Section 1",
    path: "#section1",
    icon: "",
  },
  {
    id: 2,
    label: "Section 2",
    path: "#section2",
    icon: "",
  },
  {
    id: 3,
    label: "Section 3",
    path: "#section3",
    icon: "",
  },
];

interface NavigationLinksProps {
  isVisible: boolean;
  handleClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

export const NavigationLinks = ({
  isVisible,
  handleClick,
}: NavigationLinksProps) => (
  <motion.ul
    variants={variants}
    className=" p-6 absolute top-24 -left-36 w-56 h-fit z-[99]"
  >
    {links.map(({ id, label, icon }) => (
      <MenuItem
        key={id}
        id={id}
        icon={icon}
        text={label}
        isVisible={isVisible}
        onClick={(event) => {
          // console.log("MenuItem clicked");
          handleClick(event);
        }}
      />
    ))}
  </motion.ul>
);
