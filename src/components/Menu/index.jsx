import * as React from "react";
import { useRef, useEffect, useCallback } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { NavigationLinks } from "./MenuLinks";
import sunLogo from "../../icons/sun.svg";
import { BackgroundMenu } from "./MenuBackground";

export const MobileMenu = () => {
  const [isVisible, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleClick = useCallback(toggleOpen, [toggleOpen]);

  const escapeKeyListener = useCallback(
    (event) => event.key === "Escape" && toggleOpen(false),
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
    const handleVisibility = isVisible
      ? "addEventListener"
      : "removeEventListener";
    document[handleVisibility]("mousedown", outsideClickListener);
    document[handleVisibility]("keydown", escapeKeyListener);

    return () => {
      document.removeEventListener("mousedown", outsideClickListener);
      document.removeEventListener("keydown", escapeKeyListener);
    };
  }, [isVisible, escapeKeyListener, outsideClickListener]);

  return (
    <div className="fixed right-[3vw] top-[3vh] z-[999] h-24 w-24">
      <motion.nav
        initial={false}
        animate={isVisible ? "open" : "closed"}
        ref={containerRef}
        className="absolute z-[99] top-4 left-4"
      >
        <img
          src={sunLogo}
          alt=""
          className="h-28 animate-spin-slow relative z-[99]"
        ></img>
        <MenuToggle toggle={toggleOpen} />
        <NavigationLinks isVisible={isVisible} handleClick={handleClick} />
        <BackgroundMenu />
      </motion.nav>
    </div>
  );
};
