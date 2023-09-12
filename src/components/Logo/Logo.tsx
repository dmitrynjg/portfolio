import { Text } from '@mantine/core';
import React from 'react';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Text
      ta='center'
      fz='xl'
      fw={700}
      sx={(theme) => ({
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.blue[4],
      })}
      className={className}
    >
      dmitrynjg
    </Text>
  );
};
