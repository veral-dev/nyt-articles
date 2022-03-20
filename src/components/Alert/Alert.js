import React, { useEffect, useContext } from 'react';
import { AlertContext } from '../../context/Alert.context';

// Styles
import { AlertContainer } from './Alert.styles';

export default function Alert({ message }) {
  const { errorMsg, setErrorMsg } = useContext(AlertContext);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setErrorMsg(null);
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [errorMsg]);

  return <AlertContainer style={{ backgroundColor: '#f3aa9d' }}>{message}</AlertContainer>;
}
