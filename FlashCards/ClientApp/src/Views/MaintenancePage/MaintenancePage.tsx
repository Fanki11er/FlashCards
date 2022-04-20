import AddFlashCardsSection from "../../components/Organisms/AddFlashCardsSection/AddFlashCardsSection";
import FlashCardsListSection from "../../components/Organisms/FlashCardsListSection/FlashCardsListSection";
import { MaintenancePageWrapper } from "./MaintenancePage.styled";



const MaintenancePage = () => {
    const test=true;

    return(
        <MaintenancePageWrapper>
            {test? <FlashCardsListSection/>:
            <AddFlashCardsSection/>}
        </MaintenancePageWrapper>
    );
};

export default MaintenancePage;