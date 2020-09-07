import React from 'react';
import logo from '../../assets/logo.png';

import ValueCard from '../ValueCard';

import { Container, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />

      <ValueCard />
    </Container>
  );
};

export default Header;
