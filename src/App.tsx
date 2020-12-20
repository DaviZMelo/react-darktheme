import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistentState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Switcher from './components/Switcher';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('light', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header/>
        <Switcher toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
};

export default App;
