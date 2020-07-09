import styled from 'styled-components/native';

export const Container = styled.View`
  height: 58px;
  width: 374px;

  background: #fff;

  border-radius: 16px;

  padding: 6px;
  margin-bottom: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TransactionTitle = styled.Text`
  color: #363f5f;
  font-size: 16px;
  margin-right: 60px;
`;

export const TransactionValue = styled.Text`
  color: #12a454;
  font-size: 16px;
`;
