import React from "react";
import { motion } from "framer-motion";
import variants from "../ModalVariants";
import ButtonVariants from "../../Variants/ButtonFramerVariants";
import styles from "./ImageModal.module.css";

const ImageModal = ({ handleClose, target, type }) => {
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });
  if (type !== "image") return null;
  return (
    <div
    >
      <motion.div
        className={styles.backdrop}
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflowY: "scroll",display:"flex",alignItems:"center",justifyContent:"center" }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={styles.container}
        >
          <img
            className={styles.image}
            src={target.urls.full}
            alt="preview"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              margin:"5px 10px"
            }}
          >
            <p>
              <span style={{ color: "black" }}>by </span> {target.user.name}
            </p>
            <p>
              <span style={{ color: "black" }}>Published on </span>
              {target.user.updated_at.substring(0, 10)}
            </p>
            <a href={target.urls.full}>
              <motion.button
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  margin: "25px",
                  border: "1px solid black",
                  backgroundImage:
                    "linear-gradient(to right,white, ghostwhite)",
                }}
                whileInView="inView"
                whileHover="hover"
                initial="hidden"
                whileTap="click"
                variants={ButtonVariants}
              >
                Download
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
