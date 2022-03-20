import styled from 'styled-components';

export const Error404 = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

export const Main = styled.div`
  padding: 1rem;
  width: 100%;
  position: relative;
  height: calc(100vh - 90px);
  overflow-y: scroll;
  transition: 0.4s;
  background-color: ${({ darkTheme }) => (darkTheme ? '#1f2229' : '#f9f9f9')};
  color: ${({ darkTheme }) => (darkTheme ? '#ffffff' : '#3e4b54')};
  @media (min-width: 768px) {
    padding: 2rem;
  }
  > h2 {
    text-align: center;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: auto;
`;
