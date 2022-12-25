import './style.css';

const InputText = ({ label, placeholder, valor, handleName, isRequired }) => {
  const onDigit = (e) => {
    handleName(e.target.value);
  };

  return (
    <div className='text-field'>
      <label htmlFor='name'>{label}</label>
      <input
        id='name'
        type='text'
        placeholder={placeholder}
        value={valor}
        onChange={onDigit}
        required={isRequired}
      />
    </div>
  );
};

export default InputText;
