import './style.css';

const InputText = ({ label, placeholder, valor, handleName, isRequired }) => {
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
        required={isRequired}
      />
    </fieldset>
  );
};

export default InputText;
