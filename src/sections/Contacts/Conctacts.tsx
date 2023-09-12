import { Title, Text } from '@mantine/core';
import { useScroll, useTransform, motion, Variants } from 'framer-motion';
import React from 'react';
import { ContactIcon } from '../../components/ContactIcon/ContactIcon';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { scaleAnimation } from '../../helpers/animation';
import { useNabarMenu } from '../../helpers/hooks/useNabarMenu';
import contacts from './data/contacts';
import { useStyles } from './style';

export function Contacts() {
  const { classes } = useStyles();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { scrolls } = useNabarMenu();

  return (
    <MainContainer className={classes.wrapper}>
      <motion.div
        variants={scaleAnimation}
        initial='hidden'
        animate='visible'
        style={{ scale }}
        ref={scrolls.contactsRef}
      >
        <div className={classes.header}>
          <Title className={classes.title}>Мои контакты</Title>
          <Title
            className={classes.titleOverlay}
            role='presentation'
          >
            Инфо
          </Title>

          <div className={classes.contact}>
            <Text
              size='xl'
              weight={500}
              className={classes.contactTitle}
            >
              Контакты
            </Text>

            {contacts.map((contact) => (
              <div className={classes.contactIcon} key={contact.label}>
                <ContactIcon
                  icon={contact.image}
                  title={contact.label}
                  description={contact.desc}
                  href={contact.href}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </MainContainer>
  );  
}
