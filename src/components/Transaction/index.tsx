import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import {
  TransactionComponent,
  TransactionTitle,
  TransactionValue,
  ButtonIcon,
  DetailTransaction,
  TransactionList,
  Container,
  TransactionDate,
  TransactionCategory,
} from './styles';

const Transaction: React.FC = () => {
  const [isDetailed, setIsDetailed] = useState(false);

  function toggleDetailed(): void {
    if (!isDetailed) {
      setIsDetailed(true);
    } else {
      setIsDetailed(false);
    }
  }

  return (
    <TransactionList>
      <TransactionComponent>
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

            <TransactionTitle>Investimento</TransactionTitle>
          </View>
          <TransactionValue>R$ 500.00</TransactionValue>
        </Container>

        {isDetailed && (
          <DetailTransaction>
            <View style={{ flexDirection: 'row' }}>
              <Feather
                name="calendar"
                style={{ color: '#363F5F', marginLeft: 24 }}
                size={24}
              />
              <TransactionDate>05/12/2001</TransactionDate>
            </View>
            <TransactionCategory>Comida</TransactionCategory>
          </DetailTransaction>
        )}
      </TransactionComponent>
    </TransactionList>
  );
};

export default Transaction;
