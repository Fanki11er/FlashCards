import styled from 'styled-components';
import { ReactComponent as MainFlashCard } from '../../Assets/Svg/MainFlashCard.svg';
import { ReactComponent as MainPerson } from '../../Assets/Svg/MainPerson.svg';

export const HeroPageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const StyledFlashCard = styled(MainFlashCard)``;

export const StyledMainPerson = styled(MainPerson)`
  position: absolute;
  left: -80%;
  bottom: -15%;
`;

