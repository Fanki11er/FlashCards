import { FlashCard } from "../../../Interfaces/Interfaces";
import EditFlashCardSection from "../EditFlashCardSection/EditFlashCardSection";
import { EditFlashCardModalWrapper } from "./EditFlashCardModal.styled"

interface Props{
    isOpened: boolean;
    flashCard: FlashCard;
    closeModal: ()=> void;
}

const EditFlashCardModal = (props: Props)=>{
    const{isOpened, flashCard, closeModal}=props;
    return(
        <EditFlashCardModalWrapper isOpened={isOpened}>
            <EditFlashCardSection flashCard={flashCard} closeModal={closeModal}/>
        </EditFlashCardModalWrapper>
    )
}

export default EditFlashCardModal;