import React from 'react';
import { View } from 'react-native';

import {
  Container,
  ButtonArea,
  Button,
  ButtonText,
  Form,
  FormArea,
  Icon,
  Input,
  Title,
  InputArea,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ButtonArea direction="row">
        <Button widthSize={180} color="#5537CE">
          <ButtonText>Paguei</ButtonText>
        </Button>
        <Button widthSize={180} color="#FE883B">
          <ButtonText>Recebi</ButtonText>
        </Button>
      </ButtonArea>

      <Form>
        <FormArea>
          <View style={{ width: '70%' }}>
            <Title>Valor</Title>
          </View>
          <View style={{ width: '30%' }}>
            <Input placeholder="R$0.00" />
          </View>
        </FormArea>

        <FormArea>
          <View>
            <Title>Título</Title>
            <InputArea>
              <Icon name="edit-2" color="#363f5f" size={24} />
              <Input placeholder="Adicione o título do lançamento" />
            </InputArea>
          </View>
        </FormArea>

        <FormArea>
          <View>
            <Title>Categoria</Title>
            <InputArea>
              <Icon name="list" color="#363f5f" size={24} />
              <Input placeholder="Outros" />
            </InputArea>
          </View>
        </FormArea>

        <FormArea>
          <View>
            <Title>Data</Title>
            <InputArea>
              <Icon name="calendar" color="#363f5f" size={24} />
              <Input placeholder="Hoje" />
            </InputArea>
          </View>
        </FormArea>
      </Form>

      <ButtonArea direction="column">
        <Button widthSize={370} color="#12A454">
          <ButtonText>Adicionar</ButtonText>
        </Button>
        <Button widthSize={370} color="#E83F5B">
          <ButtonText>Cancelar</ButtonText>
        </Button>
      </ButtonArea>
    </Container>
  );
};

export default Footer;
