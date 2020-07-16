import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <AntDesign name="loading2" size={24} color="white" />
    </Container>
  );
};

export default Loading;
