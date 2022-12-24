import Button from '../Button';
import InputText from '../InputText';
import SelectDropdown from '../SelectDropdown';
import './style.css';

const Form = () => {
  return (
    <form className='squad-form'>
      <h1>Preencha os dados para criar o card do colaborador.</h1>
      <InputText />
      <SelectDropdown />
      <Button>Salvar</Button>
    </form>
  );
};

export default Form;
