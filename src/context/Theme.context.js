import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();
const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem('dark');
    if (local) setDarkMode(local === 'true');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark', darkMode ? 'false' : 'true');
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
