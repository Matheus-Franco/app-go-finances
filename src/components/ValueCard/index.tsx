import React from 'react';

import {
  Container,
  ValueCardTotal,
  ValueCardTitle,
  SpaceBetweenDiv,
} from './styles';

const ValueCard: React.FC = () => {
  return (
    <Container>
      <SpaceBetweenDiv>
        <ValueCardTitle>Total</ValueCardTitle>
        <ValueCardTitle>$</ValueCardTitle>
      </SpaceBetweenDiv>

      <ValueCardTotal>R$ 24.000,00</ValueCardTotal>
    </Container>
  );
};

export default ValueCard;
