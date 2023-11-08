import React from "react";
import styles from "./NewsContainer.module.css";
import variants from "../GlobalVariables/FramerVariants";
import { motion } from "framer-motion";
const NewsContainer = ({ elem, modalOpener }) => {
  // console.log(elem, modalOpener);
  return (
    <motion.div
      variants={variants}
      alt="chal"
      id="123456"
      whileInView="inView"
      whileHover="hover"
      initial="normal"
      whileTap="click"
      className={styles.container}
      onClick={(e) => modalOpener(elem)}
    >
      <img className={styles.image} src={elem.image_url} alt="preview" />
      <p className={styles.title}>{elem.title}</p>
    </motion.div>
  );
};

export default NewsContainer;
