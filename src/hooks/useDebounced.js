import { useState, useEffect } from 'react';

export const useDebouncedValue = (input = '', time = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [input]);
  return debouncedValue;
};
