import React from 'react';

// Styles
import { Button } from './Button.styles';

export default function ButtonSimple({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}
