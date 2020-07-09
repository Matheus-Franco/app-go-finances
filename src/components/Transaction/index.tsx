import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  TransactionTitle,
  TransactionValue,
  ButtonIcon,
} from './styles';

const Transaction: React.FC = () => {
  return (
    <>
      <Container>
        <ButtonIcon>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            style={{ color: '#363F5F', marginLeft: 5 }}
          />
        </ButtonIcon>
        <TransactionTitle>Investimento</TransactionTitle>
        <TransactionValue>R$ 500.00</TransactionValue>
      </Container>

      <Container>
        <ButtonIcon>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            style={{ color: '#363F5F', marginLeft: 5 }}
          />
        </ButtonIcon>
        <TransactionTitle>Investimento</TransactionTitle>
        <TransactionValue>R$ 500.00</TransactionValue>
      </Container>

      <Container>
        <ButtonIcon>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            style={{ color: '#363F5F', marginLeft: 5 }}
          />
        </ButtonIcon>
        <TransactionTitle>Investimento</TransactionTitle>
        <TransactionValue>R$ 500.00</TransactionValue>
      </Container>

      <Container>
        <ButtonIcon>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            style={{ color: '#363F5F', marginLeft: 5 }}
          />
        </ButtonIcon>
        <TransactionTitle>Investimento</TransactionTitle>
        <TransactionValue>R$ 500.00</TransactionValue>
      </Container>

      <Container>
        <ButtonIcon>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            style={{ color: '#363F5F', marginLeft: 5 }}
          />
        </ButtonIcon>
        <TransactionTitle>Investimento</TransactionTitle>
        <TransactionValue>R$ 500.00</TransactionValue>
      </Container>

      <Container>
        <ButtonIcon>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            style={{ color: '#363F5F', marginLeft: 5 }}
          />
        </ButtonIcon>
        <TransactionTitle>Investimento</TransactionTitle>
        <TransactionValue>R$ 500.00</TransactionValue>
      </Container>
    </>
  );
};

export default Transaction;
