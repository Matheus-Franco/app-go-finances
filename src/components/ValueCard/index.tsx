import React, { useState, useMemo, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import Loading from '../Loading';

import { Container, DescriptionIcon, Description, Price } from './styles';

interface IIcon {
  name: string;
  color: string;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const cardTypes = ['Total', 'Entradas', 'Saídas'];

const ValueCard: React.FC = () => {
  const [cardType, setCardType] = useState<number>(0);
  const [balanceType, setBalanceType] = useState<number>(0);
  const [balance, setBalance] = useState<Balance>({} as Balance);
  const [loading, setLoading] = useState<boolean>(true);

  const balanceTypes = [balance.total, balance.income, balance.outcome];

  useEffect(() => {
    async function loadBalance(): Promise<void> {
      const response = await api.get('/transactions');

      const balanceFormatted = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setLoading(false);
      setBalance(balanceFormatted);
    }

    loadBalance();
  }, []);

  function handleClick(): void {
    if (cardType === 2) {
      setCardType(0);
      setBalanceType(0);
    } else {
      setCardType(cardType + 1);
      setBalanceType(balanceType + 1);
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
      {loading ? (
        <Loading />
      ) : (
        <Price active={cardType === 0}>{balanceTypes[balanceType]}</Price>
      )}
    </Container>
  );
};

export default ValueCard;
