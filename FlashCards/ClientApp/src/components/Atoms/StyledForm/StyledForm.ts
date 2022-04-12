import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: grid;
  grid-column: 2 / span 1;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr 1fr;
  align-self: center;
  width: 100%;
  height: 550px;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding-left: 4rem;
`;

