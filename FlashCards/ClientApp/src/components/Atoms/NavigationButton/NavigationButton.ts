import styled from 'styled-components';

export const NavigationButton = styled.button`
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
`;
