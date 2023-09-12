import { Variants } from 'framer-motion';

export const rightAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.7 },
    x: 0,
  }),
};
