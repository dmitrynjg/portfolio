import React from 'react';
import { useStyles } from './style';

export const Content = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return <div className={classes.content}>{children}</div>;
};
