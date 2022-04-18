import { Formik } from 'formik';
import { SmallerCancelButton, SmallerEditButton } from '../../Atoms/Buttons/Buttons';
import { FormHeader } from '../../Atoms/FormHeader/FormHeader';
import { ButtonsWrapper, Label, LongInputWrapper, ShortInputWrapper, StyledInput, StyledSettingsForm } from './SettingsForm.styles';

interface Props {}

interface MyFormValues {
  answer: string;
}

const SettingsForm = (props: Props) => {
  const initialValues: MyFormValues = { answer: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      <StyledSettingsForm>
        <FormHeader>Ustawienia</FormHeader>
        <LongInputWrapper>
          <Label>Nazwa użytkownika</Label>
          <StyledInput value={'TEST'} />
        </LongInputWrapper>
        <ShortInputWrapper>
          <Label>Ile fishek dziennie</Label>
          <StyledInput value={20} type="number" />
        </ShortInputWrapper>
        <ShortInputWrapper>
          <Label>Maksymalna przerwa</Label>
          <StyledInput value={20} type="number" />
        </ShortInputWrapper>
        <ShortInputWrapper>
          <Label>Procent nowych</Label>
          <StyledInput value={20} type="number" />
        </ShortInputWrapper>
        <ButtonsWrapper>
          <SmallerEditButton>Edytuj</SmallerEditButton>
          <SmallerCancelButton>Anuluj</SmallerCancelButton>
        </ButtonsWrapper>
      </StyledSettingsForm>
    </Formik>
  );
};

export default SettingsForm;

