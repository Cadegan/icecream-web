import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    // y: 50,
    // opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  id: number;
  icon: string;
  text: string;
  isVisible: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export const MenuItem = ({
  id,
  icon,
  text,
  isVisible,
  onClick,
}: MenuItemProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.li
          className="h-10 list-none no-underline mb-5 flex items-center cursor-pointer rounded-lg border-solid border-2 border-white text-white z-[999]"
          variants={variants}
          key={id}
          initial={{
            y: 50,
            opacity: 0,
          }}
          exit={{
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 },
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
        >
          <div className=" flex-[25px 0] m-5">
            <img src={icon} alt="" />
          </div>
          <div className="flex-1">{text}</div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};
