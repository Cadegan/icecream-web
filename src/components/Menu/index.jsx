import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { NavigationLinks } from "./NavigationLinks";
import { useCallback } from "react";
// import "./styles.css";

const sidebar = {
  closed: {
    backgroundColor: "#FFA600",
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "tween",
      stiffness: 400,
      damping: 40,
    },
  },
  open: (height = 100) => ({
    backgroundColor: "#43597d",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "tween",
      stiffness: 20,
      restDelta: 2,
    },
  }),
};

export const MobileMenu = () => {
  const [isVisible, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleClick = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const escapeKeyListener = useCallback(
    (event) => {
      if (event.key === "Escape") {
        toggleOpen(false);
      }
    },
    [toggleOpen]
  );

  const outsideClickListener = useCallback(
    (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        toggleOpen();
      }
    },
    [containerRef, toggleOpen]
  );

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", outsideClickListener);
      document.addEventListener("keydown", escapeKeyListener);
    } else {
      document.removeEventListener("mousedown", outsideClickListener);
      document.removeEventListener("keydown", escapeKeyListener);
    }
    return () => {
      document.removeEventListener("mousedown", outsideClickListener);
      document.removeEventListener("keydown", escapeKeyListener);
    };
  }, [isVisible, escapeKeyListener, outsideClickListener]);

  return (
    <motion.nav
      initial={false}
      animate={isVisible ? "open" : "closed"}
      ref={containerRef}
      className="mobileNavContainer"
    >
      <MenuToggle toggle={toggleOpen} />
      <NavigationLinks isVisible={isVisible} handleClick={handleClick} />
      <motion.div className="background" variants={sidebar} />
    </motion.nav>
  );
};
