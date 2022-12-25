import { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';
import SelectDropdown from '../SelectDropdown';
import './style.css';

const Form = () => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

  const onSave = (e) => {
    e.preventDefault();
    console.log(nome);
    console.log(cargo);
    console.log('Saved!');
    setNome('');
    setCargo('');
  };

  return (
    <form className='squad-form' onSubmit={onSave}>
      <h1>Preencha os dados para criar o card do colaborador.</h1>
      <InputText
        label='Nome de usuário no GitHub'
        placeholder='Digite o nome de usuário'
        valor={nome}
        handleName={(value) => setNome(value)}
        isRequired={true}
      />
      <SelectDropdown
        label={'Cargo'}
        valor={cargo}
        handleCargo={(value) => setCargo(value)}
        isRequired={true}
      />
      <Button>Salvar</Button>
    </form>
  );
};

export default Form;
