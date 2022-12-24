import './style.css';

const SelectDropdown = () => {
  return (
    <fieldset className='combo-box'>
      <label>Cargo</label>
      <select>
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
