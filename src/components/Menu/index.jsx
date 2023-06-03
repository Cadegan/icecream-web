import * as React from "react";
import { useRef, useEffect, useCallback } from "react";
import { motion, useCycle, useMotionValue, useTransform } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { NavigationLinks } from "./MenuLinks";
import { BackgroundMenu } from "./MenuBackground";
import { SunLogo } from "../../icons/SunLogo";

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

  const color = useMotionValue(isVisible ? 0 : 1);
  const filter = useTransform(
    color,
    [0, 1],
    ["hue-rotate(0deg)", "hue-rotate(180deg)"]
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
        <SunLogo
          color={isVisible ? "rgb(255, 166, 0)" : "rgb(67, 89, 125)"}
          strokeWidth={isVisible ? "12" : "6"}
          className="h-24 w-24 relative z-[99] right-[0.6rem] top-[0.4rem]"
        ></SunLogo>
        <MenuToggle toggle={toggleOpen} />
        <NavigationLinks isVisible={isVisible} handleClick={handleClick} />
        <BackgroundMenu />
      </motion.nav>
    </div>
  );
};
