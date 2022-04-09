import { Outlet } from 'react-router';
import Navigation from '../../components/Molecules/Navigation/Navigation';
import { MainTemplateWrapper } from './MainTemplate.styles';

const MainTemplate = () => {
  return (
    <MainTemplateWrapper>
      <Navigation />
      <Outlet />
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
