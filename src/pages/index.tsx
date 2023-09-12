import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Navbar } from '../components/Navbar/Navbar';
import { About } from '../sections/About/About';
import { Content } from '../components/Content/Content';
import { Contacts } from '../sections/Contacts/Conctacts';
import { Works } from '../sections/Works/Works';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar/>
      <Content>
        <About/>
        <Works/>
        <Contacts/>
      </Content>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Мое Портфолио</title>;
