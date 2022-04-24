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
  user-select: none;
  :hover {
    border: 3px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
  &.disable {
    color: ${({ theme }) => theme.colors.lightGrey};
    border: 3px solid ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.darkGrey};
    pointer-events: none;
  }
`;

export const MainMenuButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  text-align: center;
  text-decoration: none;
  :visited {
    color: ${({ theme }) => theme.colors.buttonGreen};
  }
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
export const DisabledButton = styled(MainMenuButton)`
  color: ${({ theme }) => theme.colors.lightGrey};
  border: 3px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  pointer-events: none;
`;

export const DeleteButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.darkOrange};
  border: 3px solid ${({ theme }) => theme.colors.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  :visited {
    color: ${({ theme }) => theme.colors.errorRed};
  }
`;
export const SmallerEditButton = styled(DefaultButton)`
  margin: 0;
  width: 200px;
`;

export const SmallerCancelButton = styled(CancelButton)`
  margin: 0;
  width: 200px;
`;
