import { Avatar, Flex } from '@mantine/core';
import React from 'react';
import { useStyles } from './style';
import { motion } from 'framer-motion';
import { scaleAnimation } from '../../helpers/animation';

export interface AvatarType {
  src: string;
  desc: string;
}

export interface AvatarProps {
  avatars: AvatarType[];
}

export function AvatarList({ avatars }: AvatarProps) {
  const { classes } = useStyles();
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
    >
      <Flex wrap={'wrap'}>
        {avatars.map((avatar, index) => (
          <motion.div
            variants={scaleAnimation}
            custom={index}
            key={avatar.src}
          >
            <Avatar
              src={avatar.src}
              alt={avatar.desc}
              className={classes.avatar}
            />
          </motion.div>
        ))}
      </Flex>
    </motion.section>
  );
}
