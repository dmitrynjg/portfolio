import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.md,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  header: {
    height: rem(400),
    boxSizing: 'border-box',
    backgroundImage: theme.colorScheme === 'light' ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][6]
    } 100%)` : theme.colors.dark[7],
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'relative',
    padding: `calc(${theme.spacing.xl} * 1.5) calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.lg,
    marginBottom: theme.spacing.lg,

    [theme.fn.smallerThan(1080)]: {
      height: 'auto',
      flexDirection: 'column-reverse',
      alignItems: 'initial',
      padding: theme.spacing.xs,
    },
  },

  title: {
    color: theme.white,
    position: 'relative',
    zIndex: 1,
    fontSize: rem(46),
    fontWeight: 800,
    letterSpacing: rem(-0.5),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan(1080)]: {
      display: 'none'
      // fontSize: rem(22),
      // textAlign: 'center',
      // marginTop: theme.spacing.xl,
    },
  },

  titleOverlay: {
    zIndex: 0,
    position: 'absolute',
    color: theme.white,
    fontWeight: 900,
    opacity: 0.1,
    fontSize: rem(320),
    lineHeight: 1,
    top: rem(10),
    left: rem(32),
    pointerEvents: 'none',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan(1080)]: {
      display: 'none',
    },
  },

  contact: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    minWidth: 300,
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    borderRadius: theme.radius.lg,
    zIndex: theme.colorScheme === 'dark' ? 1 : 0,
    [theme.fn.smallerThan(1080)]: {
      padding: theme.spacing.xl,
    },
  },
  contactIcon: {
    marginBottom: 10,
  },
  contactTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xl,
    lineHeight: 1,
  },

  categoryCard: {
    height: rem(160),
    position: 'relative',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    color: theme.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    overflow: 'hidden',
    transition: 'background-size 300ms ease',

    '&:hover': {
      backgroundSize: '105%',
    },
  },

  categoryLabel: {
    color: theme.white,
    zIndex: 2,
    position: 'relative',
  },
}));
