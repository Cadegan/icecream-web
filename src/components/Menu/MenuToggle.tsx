import { motion } from "framer-motion";

const Path = ({
  strokeWidth = 3,
  strokeColor = "#FFFFFF",
  strokeLinecap = "round" as const,
  ...rest
}) => (
  <motion.path
    fill="transparent"
    strokeWidth={strokeWidth}
    stroke={strokeColor}
    strokeLinecap={strokeLinecap}
    {...rest}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle = ({ toggle }: MenuToggleProps) => (
  <button
    onClick={toggle}
    className=" flex justify-center items-center outline-none border-none cursor-pointer absolute top-[2.1rem] left-4 w-12 h-12 bg-transparent z-[1000] rounded-full"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
