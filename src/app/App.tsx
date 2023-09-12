import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import React from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { useScrollIntoView } from '@mantine/hooks';
import { NavBarScroll } from '../context/NavBar';
import { MantineColor } from '../context/MantineColor';

export const App = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const { scrollIntoView: scrollIntoAbout, targetRef: aboutRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: scrollIntoWork, targetRef: worksRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: scrollIntoContacts, targetRef: contactsRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          colors: {
            dark: [
              '#C1C2C5',
              '#A6A7AB',
              '#909296',
              '#5C5F66',
              '#373A40',
              '#2C2E33',
              '#1a1a1a',
              '#040204',
              '#141517',
              '#101113',
            ],
          },
        }}
      >
        <NavBarScroll.Provider
          value={{ scrollIntoAbout, scrollIntoWork, scrollIntoContacts, aboutRef, worksRef, contactsRef }}
        >
          <MantineColor.Provider value={{ colorScheme, toggleColorScheme }}>{children}</MantineColor.Provider>
        </NavBarScroll.Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
