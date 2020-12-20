import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
  font-size: 32px;
  font-weight: 16px;

  box-shadow: black 0px 0px 5px 0px;
`;
