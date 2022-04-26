import styled from 'styled-components';
import { FormError } from '../../components/Atoms/FormError/FormError';

export const MainPageWrapper = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr 30% 1fr;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const StyledError = styled(FormError)`
  position: initial;
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
`;
