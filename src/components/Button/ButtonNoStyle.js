import React from 'react';

// Styles
import { ButtonWithoutStyle } from './Button.styles';

export default function ButtonNoStyle({ onClick, children }) {
  return <ButtonWithoutStyle onClick={onClick}>{children}</ButtonWithoutStyle>;
}
