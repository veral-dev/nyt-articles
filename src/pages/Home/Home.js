import React, { useContext } from 'react';
import { ThemeContext } from '../../context/Theme.context';

// Components
import CardList from './_components/CardList/CardList';

// Styles
import { Main, Container } from '../../styles/general_styles';

export default function Home() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Main darkTheme={darkMode}>
      <Container>
        <CardList />
      </Container>
    </Main>
  );
}
