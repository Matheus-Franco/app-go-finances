import styled from 'styled-components/native';

interface IButton {
  color: string;
}

export const Container = styled.View`
  height: 85px;
  background: #fff;
  z-index: 300;
  box-shadow: 0px -1px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<IButton>`
  background: ${props => props.color};
  width: 48%;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'PoppinsBold';
`;
