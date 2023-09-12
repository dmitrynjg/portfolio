import { Text, Title, Image, Group, Flex } from '@mantine/core';
import React from 'react';
import { AvatarList } from '../../components/AvatarList/AvatarList';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import libries from './data/libries';
import { useStyles } from './style';
import { motion } from 'framer-motion';
import { leftAnimation, rightAnimation } from '../../helpers/animation';

export const About = () => {
  const { classes } = useStyles();
  return (
    <MainContainer>
      <motion.section
        initial='hidden'
        whileInView='visible'
        className={classes.wrapper}
      >
        <Group className={classes.body}>
          <motion.div
            variants={leftAnimation}
            custom={2}
          >
            <Title className={classes.title}>🖐️ Привет меня зовут Дмитрий</Title>
          </motion.div>
          <motion.div
            variants={leftAnimation}
            custom={1}
          >
            <Text
              fw={500}
              fz='lg'
              mb={5}
              sx={(theme) => ({
                color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.blue[4],
              })}
            >
              Я Fullstack JavaScript разработчик
            </Text>
          </motion.div>
          <motion.div
            variants={leftAnimation}
            custom={3}
          >
            <Flex
              fz='sm'
              c='dimmed'
            >
              На Backend я использую NestJS. Также у меня есть опыт работы с Headless CMS Strapi
              и Express.JS. В Frontend я предпочитаю использовать фреймворк ReactJS, обычно в сочетании с Tailwind.
              Однако, я также хорошо разбираюсь в других UI библиотеках. Например, данное портфолио написано с
              использованием Mantine.
            </Flex>
          </motion.div>
          <div>
            <motion.div
              variants={leftAnimation}
              custom={2.5}
            >
              <Text
                fw={500}
                sx={(theme) => ({
                  color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
                })}
                fz='lg'
                className={classes.titleLibries}
              >
                Библиотеки и Framework которые я использую
              </Text>
            </motion.div>
            <AvatarList avatars={libries} />
          </div>
        </Group>

        <motion.img
          variants={rightAnimation}
          src={'../../images/animated.gif'}
          className={classes.image}
        />
      </motion.section>
    </MainContainer>
  );
};
