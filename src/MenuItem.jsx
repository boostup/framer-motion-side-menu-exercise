import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li variants={variants}>
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
