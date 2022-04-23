import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import AddFlashCardsSection from "../../components/Organisms/AddFlashCardsSection/AddFlashCardsSection";
import EditFlashCardModal from "../../components/Organisms/EditFlashCardModal/EditFlashCardModal";
import FlashCardsListSection from "../../components/Organisms/FlashCardsListSection/FlashCardsListSection";
import { FlashCard } from "../../Interfaces/Interfaces";
import routes from "../../Routes/routes";
import { MaintenancePageWrapper } from "./MaintenancePage.styled";
type LocationProps = {
    state: {
      action: string;
    };
};


const MaintenancePage = () => {
    const {main} = routes;
    const[isModalOpened, setIsModalOpened] = useState(false);
    const[selectedFlashCard, setSelectedFlashCard ] = useState<FlashCard | undefined>(undefined);
    const[goToMain, setGoToMain] = useState(false);
    const location = useLocation() as LocationProps;
    const navigate = useNavigate();
    const action = location.state?.action;
    



    const openModal = (flashcard: FlashCard)=>{
        setSelectedFlashCard(flashcard);
    }
    const closeModal = ()=>{
        setSelectedFlashCard(undefined);
        setGoToMain(true);    
    }

    useEffect(()=>{
        if(!selectedFlashCard){
            setIsModalOpened(false);
        }
        else{
            setIsModalOpened(true);
        }
    },[selectedFlashCard]);

    useEffect(()=> {
        if(goToMain){
            navigate(main);
        }
    },[goToMain, main, navigate]);


    return(
        <MaintenancePageWrapper>
            {action === "EDIT" && <FlashCardsListSection openModal={openModal}/>}
            {action === "ADD" && <AddFlashCardsSection/>}
          
           {selectedFlashCard && <EditFlashCardModal isOpened={isModalOpened} flashCard={selectedFlashCard} closeModal={closeModal}/>}
        </MaintenancePageWrapper>
    );
};

export default MaintenancePage;