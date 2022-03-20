import React from 'react';

// Styles
import { CheckBox, CheckBoxWrapper, CheckBoxLabel, SwitchContainer } from './Switch.styles';

export default function Switch({ onChange, name, label }) {
  return (
    <SwitchContainer>
      <label htmlFor={`checkbox-${name}`}>{label}</label>
      <CheckBoxWrapper>
        <CheckBox id={`checkbox-${name}`} type="checkbox" name={name} onChange={onChange} />
        <CheckBoxLabel />
      </CheckBoxWrapper>
    </SwitchContainer>
  );
}
