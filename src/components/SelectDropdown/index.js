import './style.css';

const SelectDropdown = ({ label, valor, handleCargo }) => {
  return (
    <fieldset className='combo-box'>
      <label>{label}</label>
      <select onChange={(e) => handleCargo(e.target.value)} value={valor}>
        <option></option>
        <option>Programação</option>
        <option>Front-End</option>
        <option>Data Science</option>
        <option>Devops</option>
        <option>UX e Design</option>
        <option>Mobile</option>
      </select>
    </fieldset>
  );
};

export default SelectDropdown;
