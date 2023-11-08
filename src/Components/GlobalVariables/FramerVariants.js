const variants = {
  animate: {
    duration: 0.2,
  },
  normal: {
    scale: 0.9,
    opacity: 0.5,
    transition: {
      duration: 0.2,
    },
  },
  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    scale: 1.025,
    zIndex: 1,
    transition: {
      duration: 0.2,
    },
  },
  click: {
    scale: 1,
    zIndex: 1,
    transition: {
      duration: 0.2,
    },
  },
};
export default variants;
