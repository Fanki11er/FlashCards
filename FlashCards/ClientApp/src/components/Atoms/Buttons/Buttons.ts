import styled from 'styled-components';

export const DefaultButton = styled.button`
  width: 250px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.inputBlue};
  color: ${({ theme }) => theme.colors.buttonGreen};
  border: 3px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSizes.navigationButton};
  transition: color 0.5s, border 0.5s;
  justify-self: center;
  align-self: flex-start;
  margin-top: 25px;
  :hover {
    border: 3px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const MainMenuButton = styled(DefaultButton)`
    width: 350px;
`;

export const CancelButton = styled(DefaultButton)`
    color: ${({ theme }) => theme.colors.darkOrange};
    border: 3px solid ${({ theme }) => theme.colors.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    :visited {
      color: ${({ theme }) => theme.colors.darkOrange};
    }
`;
