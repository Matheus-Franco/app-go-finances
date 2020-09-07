import styled from 'styled-components/native';

interface ICardActive {
  active: boolean;
}

export const Container = styled.TouchableOpacity<ICardActive>`
  background: ${(props): string => (props.active ? '#fe883b' : '#fff')};
  height: 138px;
  width: 85%;
  transform: translateY(40px);
  border-radius: 10px;
  padding: 24px 24px 14px 24px;
  justify-content: space-between;
  margin: 0 20px;
`;

export const DescriptionIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text<ICardActive>`
  color: ${(props): string => (props.active ? '#fff' : '#363F5F')};
  font-size: 14px;
  font-family: 'Poppins';
`;

export const Price = styled.Text<ICardActive>`
  color: ${(props): string => (props.active ? '#fff' : '#363F5F')};
  font-size: 36px;
  font-family: 'Poppins';
`;
