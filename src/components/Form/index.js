import InputText from '../InputText';
import './form.css';

const Form = () => {
  return (
    <form className='squad-form'>
      <h1>Preencha os dados para criar o card do colaborador.</h1>
      <InputText />
    </form>
  );
};

export default Form;
