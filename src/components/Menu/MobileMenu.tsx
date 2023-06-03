import * as React from "react";
import { useRef, useEffect, useCallback } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { NavigationLinks } from "./MenuLinks";
import { BackgroundMenu } from "./MenuBackground";
import { SunLogo } from "../../icons/SunLogo";

export const MobileMenu = () => {
  const [isVisible, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      toggleOpen();
    },
    [toggleOpen]
  );

  const escapeKeyListener = useCallback(
    (event: KeyboardEvent | Event) => {
      if ((event as KeyboardEvent).key === "Escape") {
        toggleOpen(0);
      }
    },
    [toggleOpen]
  );

  const outsideClickListener = useCallback(
    (event: MouseEvent | Event) => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
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
