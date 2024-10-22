import Equipment from '../Equipment/Equipment';
import Type from '../Type/Type';
import css from './FilterForm.module.css';

const FilterForm = () => {
  return (
    <aside className={css.aside}>
      <Equipment />
      <Type />
    </aside>
  );
};

export default FilterForm;
