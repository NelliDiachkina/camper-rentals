import css from './Filters.module.css';
import Equipment from '../Equipment/Equipment';
import Type from '../Type/Type';
import LocationSelect from '../LocationSelect/LocationSelect';

const Filters = () => {
  return (
    <aside className={css.aside}>
      <LocationSelect />
      <h3 className={css.title}>Filters</h3>
      <Equipment />
      <Type />
    </aside>
  );
};

export default Filters;
