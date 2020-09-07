import React, { useState, useEffect } from 'react';

import { View } from 'react-native';

import Footer from '../../components/Footer';
import api from '../../services/api';

import formatValue from '../../utils/formatValue';

import {
  Container,
  TransactionItem,
  TransactionTitle,
  TransactionCategory,
  TransactionDate,
  TransactionValue,
} from './styles';

export interface ITransaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

const Dashboard: React.FC = () => {
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

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Container
          data={transactions}
          showsVerticalScrollIndicator={false}
          keyExtractor={transaction => transaction.id}
          renderItem={({ item: transaction }) => (
            <TransactionItem key={transaction.id}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}
              >
                <TransactionTitle>{transaction.title}</TransactionTitle>
                <TransactionValue
                  color={transaction.type === 'outcome' ? '#e83f5b' : '#12a454'}
                >
                  {transaction.formattedValue}
                </TransactionValue>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <TransactionCategory>
                  {transaction.category.title}
                </TransactionCategory>
                <TransactionDate>{transaction.formattedDate}</TransactionDate>
              </View>
            </TransactionItem>
          )}
        />
      </View>

      <Footer />
    </>
  );
};

export default Dashboard;
