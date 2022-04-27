import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationButton = styled(Link)`
  display: flex;
  width: 175px;
  height: 60px;
  font-size: ${({ theme }) => theme.fontSizes.navigationButton};
  background-color: ${({ theme }) => theme.colors.navigationButton};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkPurple};
  border: none;
  box-shadow: -3px 3px ${({ theme }) => theme.colors.transparentGray};
  font-weight: bold;
  font-family: 'Montserrat';
  margin: 0 25px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  :visited {
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
