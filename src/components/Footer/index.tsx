import React, { useRef, useState, useEffect } from 'react';
import { Animated, Dimensions, View, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  ButtonArea,
  Button,
  ButtonText,
  Form,
  ValueWrapper,
  ValueTitle,
  ValueInput,
  InputWrapper,
  InputTitle,
  InputBottom,
  Input,
} from './styles';

const dimensions = Dimensions.get('window');
const translateYDown = dimensions.height / 2.2;
const translateYUp = -dimensions.height / 3.69;

const Footer: React.FC = () => {
  const translateY = useRef(new Animated.Value(translateYDown)).current;
  const [selectedAction, setSelectedAction] = useState<
    'pay' | 'receive' | 'none'
  >('none');

  function showFooter() {
    Animated.timing(translateY, {
      toValue: translateYUp,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function hideFooter() {
    Animated.timing(translateY, {
      toValue: translateYDown,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    if (selectedAction === 'none') {
      hideFooter();
    } else {
      showFooter();
    }
  }, [selectedAction]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={dimensions.height - translateYUp}
      style={{
        flex: 1,
      }}
    >
      <Container
        style={{
          height: dimensions.height - 120,
          transform: [{ translateY }],
        }}
      >
        <View>
          <ButtonArea direction="row">
            <Button
              onPress={() => setSelectedAction('pay')}
              color="#5537CE"
              disabled={selectedAction === 'pay'}
            >
              <ButtonText>Paguei</ButtonText>
            </Button>
            <Button
              onPress={() => setSelectedAction('receive')}
              color="#FE883B"
              disabled={selectedAction === 'receive'}
            >
              <ButtonText>Recebi</ButtonText>
            </Button>
          </ButtonArea>

          <Form>
            <ValueWrapper>
              <ValueTitle>Valor</ValueTitle>

              <ValueInput value="R$0,00" />
            </ValueWrapper>

            <InputWrapper>
              <InputTitle>Título</InputTitle>
              <InputBottom>
                <MaterialCommunityIcons
                  name="pencil"
                  size={24}
                  color="#363F5F"
                />
                <Input placeholder="Adicione o título do lançamento" />
              </InputBottom>
            </InputWrapper>

            <InputWrapper>
              <InputTitle>Categoria</InputTitle>
              <InputBottom>
                <MaterialCommunityIcons name="menu" size={24} color="#363F5F" />
                <Input placeholder="Selecione uma categoria" />
              </InputBottom>
            </InputWrapper>

            <InputWrapper>
              <InputTitle>Data</InputTitle>
              <InputBottom>
                <MaterialCommunityIcons
                  name="calendar-blank-outline"
                  size={24}
                  color="#363F5F"
                />
                <Input value="Hoje" />
              </InputBottom>
            </InputWrapper>
          </Form>
        </View>

        <ButtonArea direction="column">
          <Button onPress={() => setSelectedAction('none')} color="#E83F5B">
            <ButtonText>Cancelar</ButtonText>
          </Button>

          <Button color="#12A454">
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </ButtonArea>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Footer;
