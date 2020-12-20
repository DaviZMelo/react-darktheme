import React, { useContext } from 'react';
import Switch from 'react-dark-mode-toggle';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        size={300}
      />
    </Container>

  );
};

export default Header;
