import React from 'react';
import AlertProvider from './context/Alert.context';
import ArticlesProvider from './context/Articles.context';
import ThemeProvider from './context/Theme.context';

import AppRouter from './routes/AppRoutes';
import './styles/App.css';

function App() {
  return (
    <AlertProvider>
      <ArticlesProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </ArticlesProvider>
    </AlertProvider>
  );
}

export default App;
