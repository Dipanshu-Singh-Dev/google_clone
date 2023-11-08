import React from "react";
import { motion } from "framer-motion";
import variants from "../ModalVariants";
import styles from "./NewsModal.module.css";

const NewsModal = ({ handleClose, target, type }) => {
  console.log(handleClose, target);
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });
  if (type !== "news") return null;
  return (
    <div>
      <motion.div
        className={styles.backdrop}
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflowY: "hidden" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={styles.container}
        >
          <img className={styles.image} src={target.image_url} alt="preview" />
          <div className={styles.newsContainer}>
            <p
              className={styles.title}
              style={{ color: "black", fontSize: "large" }}
            >
              {target.title}
            </p>
            <p className={styles.content}>{target.content}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewsModal;
