import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebar} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => setOpen(!isOpen)} />
    </motion.nav>
  );
};
