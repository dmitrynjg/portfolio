import React from 'react';
import { useStyles } from './style';
import { ThemeIcon, Text, Box } from '@mantine/core';

export interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
  href?: string;
}

export type ContactIconVariant = 'white' | 'gradient';

export const ContactIcon = ({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  href,
  ...others
}: ContactIconProps) => {
  const { classes, cx } = useStyles({ variant });
  return (
    <div
      className={cx(classes.wrapper, className)}
      {...others}
    >
      {variant === 'gradient' ? (
        <ThemeIcon
          size={40}
          radius='md'
          className={classes.icon}
        >
          <Icon size='1.5rem' />
        </ThemeIcon>
      ) : (
        <Box mr='md'>
          <Icon size='1.5rem' />
        </Box>
      )}

      <div>
        <Text
          size='md'
          className={classes.title}
        >
          {title}
        </Text>

        {href ? (
          <a
            className={classes.description}
            href={href}
          >
            {description}
          </a>
        ) : (
          <Text className={classes.description}>{description}</Text>
        )}
      </div>
    </div>
  );
};
