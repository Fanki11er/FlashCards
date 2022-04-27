
import { useEffect, useState } from "react";
//import { useLocation } from "react-router";
//import { useNavigate } from "react-router";
import endpoints from "../../../Api/endpoints";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { FlashCard } from "../../../Interfaces/Interfaces";
import { TextField } from "../../Atoms/TextField/TextField";
import FlashCardsList from "../FlashCardsList/FlashCardsList";
import { FlashCardsListSectionWrapper, UpdatePerson } from "./FlashCardsListSection.styles"
interface Props {
  openModal: (flashCard: FlashCard) => void;
}

const FlashCardsListSection = (props: Props) =>{
  const {openModal} = props;

    const { allFlashCards } = endpoints;
    //const { login } = routes;
    const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
   // const [isUpdating, setIsUpdating] = useState<boolean>();
    //const [isLoading, setIsLoading] = useState(true);
    //const [isError, setError] = useState('');
    //const navigate = useNavigate();
    //const location = useLocation();
    //const [refresh, setRefresh] = useState(false);
    const axiosPrivate = useAxiosPrivate();
   // const[selectedFlashCard, setSelectedFlashCard]=useState<number|null>(null);
    //console.log(selectedFlashCard);
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
    
        const getFlashCards = async () => {
          //setIsLoading(true);
          //setError('');
          try {
            const response = await axiosPrivate.get(allFlashCards, {
              signal: controller.signal,
            });
            isMounted && setFlashCards(response.data);
            //setIsLoading(false);
            console.log(response.data);
          } catch (error: any) {
            //setIsLoading(false);
            //setError(error.message);
            console.log(error.message);
            /*navigate(login, {
              state: {
                from: location,
              },
              replace: true,
            });*/
          }
        };
    
        getFlashCards();
        return () => {
          isMounted = false;
          controller.abort();
        };
      }, [allFlashCards, axiosPrivate]);


    return (
        <FlashCardsListSectionWrapper>
            <TextField/>
            <FlashCardsList flashCards={flashCards} openModal={openModal}/>
            <UpdatePerson/>
        </FlashCardsListSectionWrapper>
    )
}

export default FlashCardsListSection;