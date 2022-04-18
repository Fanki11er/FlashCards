import styled from 'styled-components';
import { DefaultField } from '../../Atoms/DefaultField/DefaultField';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';

export const StyledLearnAnswerForm = styled(StyledForm)`
  grid-template-rows: 100px 100px;
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  grid-row-gap: 10px;
  height: 250px;
  width: 100%;
  background: transparent;
  padding: 0;
`;

export const AnswerInput = styled(DefaultField)`
  display: grid;
  width: 100%;
  grid-column: 1 / span 1;
`;

