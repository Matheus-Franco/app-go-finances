import React from 'react';
import { ScrollView } from 'react-native';
import ValueCard from '../ValueCard';

import Transaction from '../Transaction';
import Footer from '../Footer';

import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <ValueCard />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          { marginLeft: 20 },
          {
            transform: [{ translateY: -62 }],
          },
        ]}
      >
        <Transaction />
        <Transaction />
        <Transaction />
      </ScrollView>
      <Footer />
    </Container>
  );
};

export default Content;
