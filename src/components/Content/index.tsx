import React from 'react';
import { ScrollView } from 'react-native';

import Transaction from '../Transaction';

import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <Transaction />
      </ScrollView>
    </Container>
  );
};

export default Content;
