import React from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

export const Example = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <nav>
      <div
        className="background"
        style={{
          opacity: isOpen ? 1 : 0,
          clipPath: isOpen
            ? "circle(2200px at 40px 40px)"
            : "circle(30px at 40px 40px)",
        }}
      />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => setOpen(!isOpen)} isOpen={isOpen} />
    </nav>
  );
};
