import React from 'react';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { Title, Flex } from '@mantine/core';
import { Work } from '../../components/Work/Work';
import works from './data/works';
import { useNabarMenu } from '../../helpers/hooks/useNabarMenu';


export const Works = () => {
  const { scrolls } = useNabarMenu();
  return (
    <MainContainer>
      <Title>Мои работы</Title>
      <Flex
        wrap={'wrap'}
        style={{ width: '100%', marginTop: 20 }}
        ref={scrolls.worksRef}
      >
        {works.map((work) => (
          <Work {...work} key={work.title}/>
        ))}
      </Flex>
    </MainContainer>
  );
};
