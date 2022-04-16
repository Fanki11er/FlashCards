import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';
import { ReactComponent as Hut } from '../../../Assets/Svg/Hut.svg';

export const LearnSectionWrapper = styled.div`
  position: relative;
  width: 80%;
  min-width: 800px;
  height: 520px;
  padding: 60px 60px 30px 60px;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  border-radius: 15px;
  display: grid;
  grid-template-rows: 1fr 60px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.3fr 0.7fr;
  grid-row-gap: 15px;
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 40px;
  padding: 5px 10px;
  color: ${(props: ThemeProps) => props.theme.colors.lightBlue};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
`;

export const StyledHut = styled(Hut)`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -80px;
  right: -35px;
`;

