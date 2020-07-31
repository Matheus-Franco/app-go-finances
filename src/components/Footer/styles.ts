import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface IButton {
  color: string;
  widthSize: number;
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
`;

export const ButtonArea = styled.View<IButtonArea>`
  flex-direction: ${props => props.direction};
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  height: 85px;
`;

export const Button = styled.TouchableOpacity<IButton>`
  background: ${props => props.color};
  width: ${props => props.widthSize}px;
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
  height: 300px;
  margin: 0 20px 100px;
`;

export const InputArea = styled.View`
  flex-direction: row;
`;

export const FormArea = styled.View`
  height: 90px;
  width: 100%;
  flex-direction: row;
  align-items: center;

  background: transparent;
  border-bottom-width: 1px;
  border-color: #f0f2f5;
  padding: 8px;
`;

export const Icon = styled(Feather)`
  margin-right: 8px;
`;

export const Input = styled.TextInput`
  font-family: 'Poppins';
  font-size: 16px;
  color: #363f5f;
  width: 90%;
`;

export const Title = styled.Text`
  font-family: 'Poppins';
  font-size: 28px;
  color: #363f5f;
  width: 50%;
`;
