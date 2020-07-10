import React from 'react';
import { ScrollView } from 'react-native';
import ValueCard from '../ValueCard';

import Transaction from '../Transaction';

import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <ValueCard />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Transaction />
        <Transaction />
        <Transaction />
      </ScrollView>
    </Container>
  );
};

export default Content;
