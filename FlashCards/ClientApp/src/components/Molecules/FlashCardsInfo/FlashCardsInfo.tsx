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
      <FlashCardsAmount color={lightBlue} label={'Nowe'} amount={flashCardsInfo?.newAmount ? flashCardsInfo.newAmount : 0} />
      <FlashCardsAmount color={darkOrange} label={'Nauka'} amount={flashCardsInfo?.toLearnAmount ? flashCardsInfo.toLearnAmount : 0} />
      <FlashCardsAmount color={yellow} label={'Wszystkie'} amount={flashCardsInfo?.allAmount ? flashCardsInfo.allAmount : 0} />
    </FlashCardsInfoWrapper>
  );
};

export default FlashCardsInfo;
