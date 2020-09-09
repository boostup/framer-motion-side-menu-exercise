import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 0%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ isOpen, toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      {isOpen ? (
        <>
          <Path d="M 3 16.5 L 17 2.5" />
          <Path d="M 2 9.423 L 20 9.423" style={{ opacity: 0 }} />
          <Path d="M 3 2.5 L 17 16.346" />
        </>
      ) : (
        <>
          <Path d="M 2 2.5 L 20 2.5" />
          <Path d="M 2 9.423 L 20 9.423" style={{ opacity: 1 }} />
          <Path d="M 2 16.346 L 20 16.346" />
        </>
      )}
    </svg>
  </button>
);
