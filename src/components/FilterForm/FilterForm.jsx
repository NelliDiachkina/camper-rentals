import css from './FilterForm.module.css';
import Equipment from '../Equipment/Equipment';
import Type from '../Type/Type';
import LocationSelect from '../LocationSelect/LocationSelect';

const FilterForm = () => {
  return (
    <aside className={css.aside}>
      <LocationSelect />
      <h3 className={css.title}>Filters</h3>
      <Equipment />
      <Type />
      <button className={css.btn} type="button">
        Search
      </button>
    </aside>
  );
};

export default FilterForm;
