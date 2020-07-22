import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface IButton {
  color: string;
  disabled?: boolean;
}

interface IButtonArea {
  direction: string;
}

export const Container = styled(Animated.View)`
  background: #fff;
  z-index: 300;
  box-shadow: 0px -1px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: space-between;
  padding-bottom: 22px;
`;

export const ButtonArea = styled.View<IButtonArea>`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  height: 85px;
`;

export const Button = styled.TouchableOpacity<IButton>`
  background: ${props => props.color};
  width: 48%;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'PoppinsBold';
`;

export const Form = styled.View`
  margin: 0 22px;
`;

export const ValueWrapper = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-color: #f0f2f5;
  border-bottom-width: 1px;
  padding-bottom: 18px;
`;

export const ValueTitle = styled.Text`
  font-family: 'Poppins';
  font-size: 32px;
  color: #363f5f;
`;

export const ValueInput = styled.TextInput`
  font-family: 'PoppinsBold';
  font-size: 32px;
  color: #363f5f;
`;

export const InputWrapper = styled.View`
  padding: 18px 0;
  border-color: #f0f2f5;
  border-bottom-width: 1px;
`;

export const InputTitle = styled.Text`
  font-family: 'Poppins';
  font-size: 24px;
  color: #363f5f;
`;

export const InputBottom = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin-left: 10px;
  color: #363f5f;
  width: 90.5%;
  font-size: 14px;

  &::placeholder {
    color: #969cb3;
  }
`;
