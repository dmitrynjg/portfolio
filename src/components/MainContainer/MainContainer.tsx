import { Container } from '@mantine/core';
import React from 'react';
import { useStyles } from './style';

export const MainContainer = ({ children, className, ...other }: { children: React.ReactNode, className?: string }) => {
  const { classes } = useStyles();
  return <Container className={`${classes.container} ${className}`} fluid {...other}>{children}</Container>;
};
