export const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};

export const variantsRight = {
  hidden: {
    opacity: 0,
    translateX: 100,
  },
  hiddenDown: {
    opacity: 0,
    translateY: 100,
  },
  show: {
    opacity: 1,
    translateX: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  showDown: {
    opacity: 1,
    translateY: 0,
    transition:{
      delay: 0.2,
      duration: 0.3,
    }
  },
};
