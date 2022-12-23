import './style.css';

const InputText = () => {
  return (
    <fieldset className='text-field'>
      <label>Nome de usuário no GitHub</label>
      <input type='text' placeholder='Digite o nome de usuário' />
    </fieldset>
  );
};

export default InputText;
