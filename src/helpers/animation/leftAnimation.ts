import { Variants } from 'framer-motion';

export const leftAnimation: Variants = {
  hidden: {
    x: -120,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};