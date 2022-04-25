import styled from 'styled-components';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';

export const StyledRegistrationForm = styled(StyledForm)`
  grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
  height: 680px;
  width: 100%;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  padding-left: 4rem;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.7fr 0.3fr;
  width: 100%;
  height: 100%;
`;
