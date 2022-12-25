import './style.css';

const InputText = ({ label, placeholder, valor, handleName }) => {
  const onDigit = (e) => {
    handleName(e.target.value);
  };

  return (
    <fieldset className='text-field'>
      <label>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        value={valor}
        onChange={onDigit}
      />
    </fieldset>
  );
};

export default InputText;
