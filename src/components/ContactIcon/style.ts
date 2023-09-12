import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { variant }: any) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? theme.colorScheme === 'light'
          ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
              theme.colors[theme.primaryColor][6]
            } 100%)`
          : `linear-gradient(45deg, ${theme.colors.dark[5]} 0%, ${theme.colors.dark[6]} 100%)`
        : 'none',
    backgroundColor: theme.colorScheme === 'dark' ? theme.white : 'transparent',
  },

  title: {
    color:
      theme.colorScheme === 'dark'
        ? theme.white
        : variant === 'gradient'
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : variant === 'gradient' ? theme.black : theme.white,
  },
}));
