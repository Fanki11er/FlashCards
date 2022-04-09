import styled from 'styled-components';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';

export const StyledRegistrationForm = styled(StyledForm)`
  grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 1fr;
  height: 620px;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.7fr 0.3fr;
  width: 100%;
  height: 100%;
`;

