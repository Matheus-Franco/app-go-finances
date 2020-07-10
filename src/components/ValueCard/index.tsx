import React, { useState, useMemo } from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, DescriptionIcon, Description, Price } from './styles';

interface IIcon {
  name: string;
  color: string;
}

const cardTypes = ['Total', 'Entradas', 'Saídas'];

const ValueCard: React.FC = () => {
  const [cardType, setCardType] = useState<number>(0);

  function handleClick(): void {
    if (cardType === 2) {
      setCardType(0);
    } else {
      setCardType(cardType + 1);
    }
  }

  const icon = useMemo((): IIcon => {
    if (cardType === 0) return { name: 'dollar-sign', color: '#fff' };
    if (cardType === 1) return { name: 'arrow-up-circle', color: '#12A454' };
    return { name: 'arrow-down-circle', color: '#E83F5B' };
  }, [cardType]);

  return (
    <Container activeOpacity={1} onPress={handleClick} active={cardType === 0}>
      <DescriptionIcon>
        <Description active={cardType === 0}>{cardTypes[cardType]}</Description>
        <Feather name={icon.name} color={icon.color} size={24} />
      </DescriptionIcon>
      <Price active={cardType === 0}>R$24.000,00</Price>
    </Container>
  );
};

export default ValueCard;
