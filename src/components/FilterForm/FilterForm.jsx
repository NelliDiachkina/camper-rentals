import { useState } from 'react';
import Equipment from '../Equipment/Equipment';

const equipment = {
  AC: 'AC',
  Automatic: 'automatic',
  Kitchen: 'kitchen',
  TV: 'TV',
  Bathroom: 'bathroom',
};

const FilterForm = () => {
  const [selectCheckboxes, setSelectCheckboxes] = useState([]);

  const handleCheckboxChange = e => {
    const { value, checked } = e.target;
    setSelectCheckboxes(prevSelected =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter(checkbox => checkbox !== value)
    );
  };

  console.log(selectCheckboxes);
  return (
    <Equipment
      options={equipment}
      selectedValues={selectCheckboxes}
      handleChange={handleCheckboxChange}
    />
  );
};
export default FilterForm;
