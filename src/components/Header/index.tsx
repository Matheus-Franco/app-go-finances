import React from 'react';
import { Feather } from '@expo/vector-icons';

import ValueCard from '../ValueCard';

import { Container, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        <Feather name="dollar-sign" size={32} color="#FE883B" />
        gofinances
      </Title>
      <ValueCard />
    </Container>
  );
};

export default Header;
