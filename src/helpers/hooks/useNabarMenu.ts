import { useState, useContext } from 'react';
import { NavBarScroll, NavBarScrollType } from '../../context/NavBar';

type TypeNavbarMenuHook = { isOpen: boolean; toggleMenu: Function; scrolls: NavBarScrollType };

export const useNabarMenu = (): TypeNavbarMenuHook => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const scrolls: NavBarScrollType = useContext(NavBarScroll);
  return { isOpen, toggleMenu, scrolls };
};
