import React from 'react';

import { Container, Button, ButtonText } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Button color="#5537CE;">
        <ButtonText>Paguei</ButtonText>
      </Button>
      <Button color="#FE883B;">
        <ButtonText>Recebi</ButtonText>
      </Button>
    </Container>
  );
};

export default Footer;
