import React, { useContext } from 'react';
import { ThemeContext } from '../../context/Theme.context';
import { Link } from 'react-router-dom';

// Components
import ButtonNoStyle from '../Button/ButtonNoStyle';

// Styles
import { HeaderContainer, HeaderDiv } from './Header.styles';
import DarkMode from '../../icons/DarkMode';
import LightMode from '../../icons/LightMode';

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderDiv postion="flex-start">
        <Link className="link-btn" to="/">
          <img src="https://developer.nytimes.com/logos/logo?v=1600101622804" alt="logo" />
        </Link>
      </HeaderDiv>
      <HeaderDiv postion="center" flex="1">
        <h3>NYT articles</h3>
      </HeaderDiv>
      <HeaderDiv postion="flex-end">
        <ButtonNoStyle onClick={toggleDarkMode}>{darkMode ? <DarkMode /> : <LightMode />}</ButtonNoStyle>
      </HeaderDiv>
    </HeaderContainer>
  );
}
