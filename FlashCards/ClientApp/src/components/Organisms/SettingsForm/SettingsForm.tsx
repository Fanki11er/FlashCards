import { Formik } from 'formik';
import { SmallerCancelButton, SmallerEditButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import useAuth from '../../../Hooks/useAuth';
import { ButtonsWrapper, Label, LongInputWrapper, ShortInputWrapper, StyledInput, StyledSettingsForm } from './SettingsForm.styles';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import endpoints from '../../../Api/endpoints';
import { useNavigate } from 'react-router';
import routes from '../../../Routes/routes';
import { AuthUser } from '../../../Interfaces/Interfaces';

interface MyFormValues {
  userName: string;
  dailyFlashCards: number;
  maximumBreak: number;
  percentNew: number;
}

const SettingsForm = () => {
  const { auth, setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { settingsEndpoint } = endpoints;
  const { main } = routes;
  const navigate = useNavigate();

  const initialValues: MyFormValues = {
    userName: auth?.name ? auth?.name : '',
    dailyFlashCards: auth?.settings ? auth.settings.dailyFlashCards : 20,
    maximumBreak: auth?.settings ? auth.settings.maximumBreak : 20,
    percentNew: auth?.settings ? auth.settings.percentNew : 20,
  };

  const handleSubmit = async (values: MyFormValues) => {
    const { userName, dailyFlashCards, maximumBreak, percentNew } = values;
    if (userName === '' || dailyFlashCards < 0 || maximumBreak < 0 || percentNew < 0) {
      return;
    }
    if (
      userName === auth?.name &&
      dailyFlashCards === auth.settings.dailyFlashCards &&
      maximumBreak === auth.settings.maximumBreak &&
      percentNew === auth.settings.percentNew
    ) {
      return;
    }
    try {
      const response = await axiosPrivate.post(
        settingsEndpoint,
        JSON.stringify({
          userName,
          dailyFlashCards,
          maximumBreak,
          percentNew,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      console.log(response);
      response && setAuth(response?.data as AuthUser);
      navigate(main);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log('SUBMIT');
        handleSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      <StyledSettingsForm>
        <FormHeader>Ustawienia</FormHeader>
        <LongInputWrapper>
          <Label>Nazwa użytkownika</Label>
          <StyledInput name="userName" />
        </LongInputWrapper>
        <ShortInputWrapper>
          <Label>Ile fishek dziennie</Label>
          <StyledInput name={'dailyFlashCards'} type="number" />
        </ShortInputWrapper>
        <ShortInputWrapper>
          <Label>Maksymalna przerwa</Label>
          <StyledInput name={'maximumBreak'} type="number" />
        </ShortInputWrapper>
        <ShortInputWrapper>
          <Label>Procent nowych</Label>
          <StyledInput name={'percentNew'} type="number" />
        </ShortInputWrapper>

        <ButtonsWrapper>
          <SmallerEditButton type={'submit'}>Edytuj</SmallerEditButton>
          <SmallerCancelButton onClick={() => navigate(main)}>Anuluj</SmallerCancelButton>
        </ButtonsWrapper>
      </StyledSettingsForm>
    </Formik>
  );
};

export default SettingsForm;

//
