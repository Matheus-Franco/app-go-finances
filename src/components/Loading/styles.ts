import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  @keyframes spin {
    100% {
      --webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  svg {
    animation: spin 1s linear infinite;
  }
`;
