import FlashCardsAmount from '../../Atoms/FlashCardsAmount/FlashCardsAmount';
import { FlashCardsInfoWrapper } from './FlashCardsInfo.styles';
import { theme } from '../../../Theme/theme';
import { FlashCardsStatus } from '../../../Interfaces/Interfaces';

interface Props {
  flashCardsInfo: FlashCardsStatus | undefined;
}

const FlashCardsInfo = (props: Props) => {
  const { flashCardsInfo } = props;

  const { lightBlue, darkOrange, yellow } = theme.colors;
  return (
    <FlashCardsInfoWrapper>
      <FlashCardsAmount color={lightBlue} label={'Nowe'} amount={flashCardsInfo?.NewAmount ? flashCardsInfo.NewAmount : 0} />
      <FlashCardsAmount color={darkOrange} label={'Nauka'} amount={flashCardsInfo?.ToLearnAmount ? flashCardsInfo.ToLearnAmount : 0} />
      <FlashCardsAmount color={yellow} label={'Wszystkie'} amount={flashCardsInfo?.AllAmount ? flashCardsInfo.AllAmount : 0} />
    </FlashCardsInfoWrapper>
  );
};

export default FlashCardsInfo;
