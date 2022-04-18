import styled from 'styled-components';
import { ReactComponent as Person } from '../../../Assets/Svg/Settings_person.svg';

export const SettingsSectionWrapper = styled.div`
  position: relative;
  width: 40%;
  min-width: 600px;
  height: 700px;
  padding: 40px 50px 30px 50px;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPerson = styled(Person)`
  position: absolute;
  bottom: 0;
  right: -215px;
`;

