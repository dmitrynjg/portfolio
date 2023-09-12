import React from 'react';
import { Header, Group, ActionIcon, Text, useMantineColorScheme, Burger } from '@mantine/core';
import { useStyles } from './style';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useNabarMenu } from '../../helpers/hooks/useNabarMenu';
import { Logo } from '../Logo/Logo';
import NavbarMainLink from './NavbarMainLinks/NavBarMainLink';
import { MainContainer } from '../MainContainer/MainContainer';
import { useHeadroom } from '@mantine/hooks';

export const NavbarListLink = ({ className }: { className?: string }) => {
  const { scrolls } = useNabarMenu();
  return (
    <NavbarMainLink
      className={className || ''}
      links={[
        {
          name: 'Контакты',
          onClick: () => {
            if (scrolls.scrollIntoContacts) {
              scrolls.scrollIntoContacts();
            }
          },
        },
        {
          name: 'Работы',
          onClick: () => {
            if (scrolls.scrollIntoWork) {
              scrolls.scrollIntoWork();
            }
          },
        },
        {
          name: 'Обо мне',
          onClick: () => {
            if (scrolls.scrollIntoAbout) {
              scrolls.scrollIntoAbout();
            }
          },
        },
      ]}
    />
  );
};

export const Navbar = () => {
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { isOpen, toggleMenu } = useNabarMenu();
  const pinned = useHeadroom({ fixedAt: 90 });

  return (
    <Header
      height={isOpen ? 100 : 62}
      px='md'
      className={pinned ? cx(classes.header, classes.headerPinned) : classes.header}
    >
      <MainContainer className={classes.inner}>
        <Group>
          <Burger
            size={18}
            opened={isOpen}
            onClick={() => toggleMenu()}
            className={classes.burger}
          />
          <Logo className={classes.logo} />
        </Group>
        <Group>
          <NavbarListLink className={classes.links} />
        </Group>
        <Group
          position='center'
          my={30}
        >
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size='lg'
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? '#040204' : theme.colors.gray[0],
              color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
            })}
          >
            {colorScheme === 'dark' ? <IconSun size='1.2rem' /> : <IconMoonStars size='1.2rem' />}
          </ActionIcon>
        </Group>
      </MainContainer>
      {isOpen && <NavbarListLink />}
    </Header>
  );
};
