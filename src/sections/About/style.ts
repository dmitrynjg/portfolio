import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? '#040204' : theme.white,
    [theme.fn.smallerThan('sm')]: {
      // flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },
  titleLibries: {
    marginBottom: 10,
  },
  image: {
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
      //maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,
    
    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },



  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

}));
