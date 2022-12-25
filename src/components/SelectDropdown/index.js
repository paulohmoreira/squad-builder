import './style.css';

const SelectDropdown = ({ label, valor, handleCargo, isRequired, itens }) => {
  return (
    <div className='combo-box'>
      <label htmlFor='cargo'>{label}</label>
      <select
        id='cargo'
        onChange={(e) => handleCargo(e.target.value)}
        value={valor}
        required={isRequired}
      >
        <option></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
