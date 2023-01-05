import { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';
import SelectDropdown from '../SelectDropdown';
import './style.css';

const Form = (props) => {
  const [userName, setUserName] = useState('');
  const [cargo, setCargo] = useState('');

  const onSave = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      userName,
      cargo,
    });
    console.log(userName);
    console.log(cargo);
    console.log('Saved!');
    setUserName('');
    setCargo('');
  };

  return (
    <section className='squad-form'>
      <form onSubmit={onSave}>
        <h1>Preencha os dados para criar o card do colaborador.</h1>
        <InputText
          label='Nome de usuário no GitHub'
          placeholder='Digite o nome de usuário'
          valor={userName}
          handleName={(value) => setUserName(value)}
          isRequired={true}
        />
        <SelectDropdown
          label={'Cargo'}
          valor={cargo}
          itens={props.times}
          handleCargo={(value) => setCargo(value)}
          isRequired={true}
        />
        <Button>Salvar</Button>
      </form>
    </section>
  );
};

export default Form;
