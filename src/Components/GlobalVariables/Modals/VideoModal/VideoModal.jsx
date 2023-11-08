import React from "react";
import { motion } from "framer-motion";
import variants from "../ModalVariants";
import ButtonVariants from "../../Variants/ButtonFramerVariants";
import styles from "./VideoModal.module.css";

const VideoModal = ({ handleClose, target }) => {
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });
  return (
    <div>
      <motion.div
        className={styles.backdrop}
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflowY: "scroll" }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          style={{
            textAlign: "center",
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "gray",
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={styles.container}
        >
          <video
            className={styles.modalVideo}
            height="auto"
            loop
            autoplay
            controls
          >
            <source src={target.videos.large.url} />
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoModal;
