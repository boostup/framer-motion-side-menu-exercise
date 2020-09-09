import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

export const Navigation = (props) => (
  <ul style={{ opacity: props.isOpen ? 1 : 0 }}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </ul>
);

const itemIds = [0, 1, 2, 3, 4];
