import { StyledForm } from './Form.style';
import TEXTS from '../../../../constants/texts';
import Input from '../../../../components/atoms/Input';
import Button from '../../../../components/atoms/Button/Button';
import { CONTACTINPUTS } from '../../../../constants/inputs';

const Form = () => {
  return (
    <StyledForm
      onClick={(e) => {
        e.preventDefault();
      }}>
      {CONTACTINPUTS.map((input) => (
        <Input
          key={input.id}
          placeholder={input.placeholder}
          type={input.type}
        />
      ))}
      <Button primary text={TEXTS.contactPage.btnTxt} />
    </StyledForm>
  );
};

export default Form;
