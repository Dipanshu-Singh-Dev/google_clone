import styles from "./ResultContainer.module.css";
import { motion } from "framer-motion";
const ResultContainer = ({ link, displayLink, title, snippet }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.25 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
      }}
      className={styles.container}
    >
      <p className={styles.link}>{displayLink}</p>
      <a href={link} className={styles.anchor}>
        {title}
      </a>
      <p className={styles.snippet}>{snippet}</p>
    </motion.div>
  );
};

export default ResultContainer;
