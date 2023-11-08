import React from "react";
import styles from "./ProductContainer.module.css";
import variants from "../GlobalVariables/FramerVariants";
import { motion } from "framer-motion";
const ProductContainer = ({ elem, modalOpener }) => {
  console.log(elem);
  return (
    <motion.div
      initial="normal"
      whileInView="inView"
      whileTap="click"
      whileHover="hover"
      variants={variants}
      onClick={() => setTimeout(() => modalOpener(elem), 200)}
      className={styles.container}
    >
      <img
        style={{ borderRadius: "5px 5px 0 0 " }}
        className={styles.preview}
        src={elem.images[0]}
        alt="preview"
      />
      <p>{elem.title}</p>
    </motion.div>
  );
};

export default ProductContainer;
