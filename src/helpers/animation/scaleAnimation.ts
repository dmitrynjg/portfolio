import { Variants, Transition } from 'framer-motion';

export const scaleAnimation: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: (custom: number): Transition => ({
      dalay: custom * 0.07,
    }),
  },
};
