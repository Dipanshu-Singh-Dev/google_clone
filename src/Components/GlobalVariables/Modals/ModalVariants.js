let variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.05,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};
export default variants;
