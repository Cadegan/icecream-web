import { motion } from "framer-motion";

const sidebar = {
  closed: {
    backgroundColor: "#FFA600",
    clipPath: "circle(30px at 280px 84px)",
    transition: {
      delay: 0.5,
      type: "tween",
      stiffness: 400,
      damping: 40,
    },
  },
  open: (height = 100) => ({
    backgroundColor: "#43597d",
    clipPath: `circle(${height * 2 + 200}px at 400px 110px)`,
    transition: {
      type: "tween",
      stiffness: 20,
      restDelta: 2,
    },
  }),
};

export const BackgroundMenu = () => (
  <motion.div
    className="absolute z-[98] w-[28rem] h-[32rem] overflow-hidden -left-60 -top-11"
    variants={sidebar}
  />
);
