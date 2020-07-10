import styled from 'styled-components/native';

export const TransactionList = styled.View``;

export const TransactionComponent = styled.View``;

export const Container = styled.View`
  height: 70px;
  width: 374px;
  border-radius: 10px;

  background: #fff;
  padding: 6px 24px;
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  transform: translateY(8px);
`;

export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TransactionTitle = styled.Text`
  color: #363f5f;
  font-size: 16px;
  font-family: 'Poppins';
`;

export const TransactionValue = styled.Text`
  color: #12a454;
  font-size: 16px;
  font-family: 'Poppins';
`;

export const DetailTransaction = styled.View`
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-width: 1px;
  border-color: #f0f2f5;
  height: 45px;
  width: 374px;
  background: #fff;
  padding: 6px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TransactionDate = styled.Text`
  color: #363f5f;
  font-size: 16px;
  font-family: 'Poppins';
`;

export const TransactionCategory = styled.Text`
  color: #363f5f;
  font-size: 16px;
  font-family: 'Poppins';

  margin-right: 28px;
`;
