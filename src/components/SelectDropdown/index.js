import './style.css';

const SelectDropdown = ({ label, valor, handleCargo, isRequired, itens }) => {
  return (
    <fieldset className='combo-box'>
      <label>{label}</label>
      <select
        onChange={(e) => handleCargo(e.target.value)}
        value={valor}
        required={isRequired}
      >
        <option></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default SelectDropdown;
