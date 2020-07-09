import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #ff872c;

  width: 80%;
  height: 124px;

  border-radius: 16px;

  margin-top: 60px;
  margin-left: 10%;
  margin-bottom: 48px;

  padding: 24px;

  box-shadow: 3px 3px 3px gray;
`;

export const CardView = styled.View`
  flex-direction: row;
`;

export const SpaceBetweenDiv = styled.View`
  justify-content: space-between;
  flex-direction: row;

  margin-bottom: 24px;

  width: 100%;
`;

export const ValueCardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const ValueCardTotal = styled.Text`
  color: #fff;

  font-size: 36px;
`;
