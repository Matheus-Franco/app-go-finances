import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import api from '../../services/api';

import formatValue from '../../utils/formatValue';

import {
  TransactionComponent,
  TransactionTitle,
  TransactionValue,
  ButtonIcon,
  DetailTransaction,
  Container,
  TransactionDate,
  TransactionCategory,
} from './styles';

interface ITransaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

const Transaction: React.FC = () => {
  const [isDetailed, setIsDetailed] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const transactionsResponse = await api.get('/transactions');

      const transactionsFormatted = transactionsResponse.data.transactions.map(
        (transaction: ITransaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-br',
          ),
        }),
      );

      setTransactions(transactionsFormatted);
    }

    loadTransactions();
  }, []);

  function toggleDetailed(): void {
    if (!isDetailed) {
      setIsDetailed(true);
    } else {
      setIsDetailed(false);
    }
  }

  return (
    <>
      {transactions.map(transaction => (
        <TransactionComponent key={transaction.id}>
          <Container>
            <View style={{ flexDirection: 'row' }}>
              {isDetailed ? (
                <ButtonIcon onPress={toggleDetailed}>
                  <Ionicons
                    name="ios-arrow-up"
                    size={24}
                    style={{ color: '#363F5F' }}
                  />
                </ButtonIcon>
              ) : (
                <ButtonIcon onPress={toggleDetailed}>
                  <Ionicons
                    name="ios-arrow-down"
                    size={24}
                    style={{ color: '#363F5F' }}
                  />
                </ButtonIcon>
              )}

              <TransactionTitle>{transaction.title}</TransactionTitle>
            </View>

            <TransactionValue
              color={transaction.type === 'outcome' ? '#e83f5b' : '#12a454'}
            >
              {transaction.type === 'outcome' && ' - '}
              {transaction.formattedValue}
            </TransactionValue>
          </Container>

          {isDetailed && (
            <DetailTransaction>
              <View style={{ flexDirection: 'row' }}>
                <Feather
                  name="calendar"
                  style={{ color: '#363F5F', marginLeft: 24 }}
                  size={24}
                />
                <TransactionDate>{transaction.formattedDate}</TransactionDate>
              </View>
              <TransactionCategory>
                {transaction.category.title}
              </TransactionCategory>
            </DetailTransaction>
          )}
        </TransactionComponent>
      ))}
    </>
  );
};

export default Transaction;
