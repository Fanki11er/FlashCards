import AddFlashCardsSection from "../../components/Organisms/AddFlashCardsSection/AddFlashCardsSection";
import EditFlashCardModal from "../../components/Organisms/EditFlashCardModal/EditFlashCardModal";
import FlashCardsListSection from "../../components/Organisms/FlashCardsListSection/FlashCardsListSection";
import { MaintenancePageWrapper } from "./MaintenancePage.styled";



const MaintenancePage = () => {
    const test=true;

    return(
        <MaintenancePageWrapper>
            {test? <FlashCardsListSection/>:
            <AddFlashCardsSection/>}
            <EditFlashCardModal/>
        </MaintenancePageWrapper>
    );
};

export default MaintenancePage;