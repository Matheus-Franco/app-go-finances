import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { ITransaction } from './index';

interface IValueType {
  color: string;
}

export const Container = styled(FlatList as new () => FlatList<ITransaction>)`
  flex: 1;
  margin-top: 70px;
  margin-bottom: 10px;
  width: 85%;
`;

export const TransactionItem = styled.View`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 6px 24px;
  margin-top: 10px;
  justify-content: center;
`;

export const TransactionTitle = styled.Text`
  color: #363f5f;
  font-size: 20px;
  font-family: 'Poppins';
`;

export const TransactionValue = styled.Text<IValueType>`
  font-size: 20px;
  font-family: 'Poppins';
  color: ${props => props.color};
`;

export const TransactionCategory = styled.Text`
  color: #363f5f;
  font-size: 12px;
  font-family: 'Poppins';
`;

export const TransactionDate = styled.Text`
  color: #363f5f;
  font-size: 12px;
  font-family: 'Poppins';
`;
