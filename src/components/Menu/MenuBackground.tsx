import { motion } from "framer-motion";

const sidebar = {
  closed: {
    backgroundColor: "#FFA600",
    borderRadius: "44% 56% 56% 44% / 56% 58% 42% 44%",
    // top: "-44px",
    height: "50px",
    width: "50px",
    top: "1.9rem",
    left: "0.9rem",
    zIndex: 30,
    transition: {
      delay: 0.5,
      type: "tween",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    backgroundColor: "#43597d",
    borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
    height: "500px",
    width: "500px",
    top: "-5rem",
    left: "-15rem",
    transition: {
      type: "tween",
      stiffness: 20,
      restDelta: 2,
    },
  },
};

export const BackgroundMenu = () => (
  <motion.div className="absolute overflow-hidden" variants={sidebar} />
);
