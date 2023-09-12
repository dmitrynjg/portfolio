import { Card, Text, Image, Flex, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';
import { scaleAnimation } from '../../helpers/animation';
import { useStyles } from './style';

export interface WorkProps {
  poster: string;
  title: string;
  category: string;
  desc?: string;
  stack?: string[];
  typePoster?: string;
}

export function Work({ poster, title, category, typePoster, stack, desc }: WorkProps) {
  const { classes } = useStyles();
  return (
    <motion.div className={classes.cardWork}>
      <Card
        withBorder
        shadow='sm'
        radius='md'
        className={classes.cardWorkBody}
      >
        <Card.Section
          withBorder
          inheritPadding
          py='xs'
          className={classes.cardWorkBodyTitle}
        >
          <Group position='apart'>
            <Text weight={500}>{title}</Text>
            <Text>{category}</Text>
          </Group>
        </Card.Section>
        <Card.Section className={classes.cardWorkBodyLeft}>
          {typePoster === 'video' ? (
            <video
              loop
              autoPlay
              src={poster}
              muted
              style={{ width: '100%' }}
            />
          ) : (
            <Image src={poster} />
          )}
        </Card.Section>

        <motion.div className={classes.cardWorkBodyRight}>
          <Text
            mt='xl'
            color='dimmed'
            size='lg'
            style={{ marginBottom: 30 }}
          >
            {desc}
          </Text>
          {stack && (
            <Flex
              wrap={'wrap'}
              style={{ marginTop: 'auto' }}
            >
              {stack.map((name, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={scaleAnimation}
                  initial='hidden'
                  whileInView='visible'
                >
                  <Text className={classes.stackTitle}>{name}</Text>
                </motion.div>
              ))}
            </Flex>
          )}
        </motion.div>
      </Card>
    </motion.div>
  );
}
