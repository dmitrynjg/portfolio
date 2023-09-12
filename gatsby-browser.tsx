import React from 'react';
import { App } from './src/app/App'

const Wrapper = ({ element }) => {
  return <App>{element}</App>;
};

export const wrapRootElement = Wrapper;
