import Button from '../Button';
import InputText from '../InputText';
import SelectDropdown from '../SelectDropdown';
import './style.css';

const Form = () => {
  const onSave = (e) => {
    e.preventDefault();
    console.log('Saved!');
  };

  return (
    <form className='squad-form' onSubmit={onSave}>
      <h1>Preencha os dados para criar o card do colaborador.</h1>
      <InputText />
      <SelectDropdown />
      <Button>Salvar</Button>
    </form>
  );
};

export default Form;
