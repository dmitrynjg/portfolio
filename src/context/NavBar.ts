import React, { createContext } from 'react';

interface ScrollIntoViewAnimation {
  alignment?: 'start' | 'end' | 'center';
}

export interface NavBarScrollType {
  scrollIntoAbout?: ({ alignment }?: ScrollIntoViewAnimation) => void | undefined;
  scrollIntoWork?: ({ alignment }?: ScrollIntoViewAnimation) => void | undefined;
  scrollIntoContacts?: ({ alignment }?: ScrollIntoViewAnimation) => void | undefined;
  aboutRef?: React.MutableRefObject<any> | undefined;
  worksRef?: React.MutableRefObject<any> | undefined;
  contactsRef?: React.MutableRefObject<any> | undefined;
}

export const NavBarScroll = createContext({});
