import React from 'react';
import { Flex, NavLink } from '@mantine/core';

export interface NavbarLinks {
  name: string;
  link?: string;
  onClick?: Function;
}

const NavbarMainLink = ({ links = [], className }: { links: NavbarLinks[], className: string }): JSX.Element => {
  return (
    <Flex className={className}>
      {links.map(({ name, onClick }: NavbarLinks) => (
        <NavLink
          key={name}
          label={name}
          style={{textAlign: 'center', borderRadius: 5 }}
          noWrap={true}
          onClick={onClick ? () => onClick() : () => console.log('e')}
        />
      ))}
    </Flex>
  );
};

export default NavbarMainLink;
