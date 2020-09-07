import React, { useRef, useState, useEffect } from 'react';
import { View, Animated, Dimensions, Alert } from 'react-native';

import {
  Container,
  ButtonArea,
  Button,
  ButtonText,
  Form,
  FormArea,
  Input,
  Icon,
  Title,
  InputArea,
} from './styles';

import api from '../../services/api';

const dimensions = Dimensions.get('window');

const Footer: React.FC = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [selectedAction, setSelectedAction] = useState<
    'pay' | 'receive' | 'none'
  >('none');

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  async function handleSubmit() {
    const data = {
      value,
      title,
      category,
      type,
    };

    try {
      await api.post('/transactions', data);

      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } catch (err) {
      Alert.alert('Ocorreu um erro.');
    }
  }

  function showFooter() {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function hideFooter() {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function selectTypeAndActionPay() {
    setSelectedAction('pay');
    setType('outcome');
  }

  function selectTypeAndActionReceive() {
    setSelectedAction('receive');
    setType('income');
  }

  useEffect(() => {
    if (selectedAction === 'none') {
      hideFooter();
    } else {
      showFooter();
    }
  }, [selectedAction]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container
      style={{
        height: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [85, dimensions.height],
        }),
        transform: [
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -100],
            }),
          },
        ],
      }}
    >
      <ButtonArea direction="row">
        <Button
          onPress={() => selectTypeAndActionPay()}
          widthSize={180}
          color="#5537CE"
          disabled={selectedAction === 'pay'}
        >
          <ButtonText>Paguei</ButtonText>
        </Button>
        <Button
          onPress={() => selectTypeAndActionReceive()}
          widthSize={180}
          color="#FE883B"
          disabled={selectedAction === 'receive'}
        >
          <ButtonText>Recebi</ButtonText>
        </Button>
      </ButtonArea>

      <Form>
        <FormArea>
          <View style={{ width: '70%' }}>
            <Title>Valor</Title>
          </View>
          <View style={{ width: '30%' }}>
            <Input
              value={value}
              onChangeText={text => setValue(text)}
              placeholder="R$0.00"
            />
          </View>
        </FormArea>

        <FormArea>
          <View>
            <Title>Título</Title>
            <InputArea>
              <Icon name="edit-2" color="#363f5f" size={24} />
              <Input
                value={title}
                onChangeText={text => setTitle(text)}
                placeholder="Título do lançamento"
              />
            </InputArea>
          </View>
        </FormArea>

        <FormArea>
          <View>
            <Title>Categoria</Title>
            <InputArea>
              <Icon name="list" color="#363f5f" size={24} />
              <Input
                value={category}
                onChangeText={text => setCategory(text)}
                placeholder="Outros"
              />
            </InputArea>
          </View>
        </FormArea>
      </Form>

      <ButtonArea direction="column">
        <Button onPress={() => handleSubmit()} widthSize={370} color="#12A454">
          <ButtonText>Adicionar</ButtonText>
        </Button>
        <Button
          onPress={() => setSelectedAction('none')}
          widthSize={370}
          color="#E83F5B"
        >
          <ButtonText>Cancelar</ButtonText>
        </Button>
      </ButtonArea>
    </Container>
  );
};

export default Footer;
