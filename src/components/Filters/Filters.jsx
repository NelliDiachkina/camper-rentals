import css from './Filters.module.css';
import Equipment from '../Equipment/Equipment';
import Type from '../Type/Type';
import LocationSelect from '../LocationSelect/LocationSelect';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilters,
  selectForm,
  selectLocation,
} from '../../redux/filters/selectors';
import { getAllCampers } from '../../redux/campers/operations';
import { selectIsLoading } from '../../redux/campers/selectors';

const Filters = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFilters);
  const form = useSelector(selectForm);
  const isLoading = useSelector(selectIsLoading);

  const handleClick = () => {
    const filters = {};
    if (location) {
      filters.location = location.split(',')[0];
    }
    if (equipment.AC) {
      filters.AC = equipment.AC;
    }
    if (equipment.automatic) {
      filters.transmission = 'automatic';
    }
    if (equipment.kitchen) {
      filters.kitchen = equipment.kitchen;
    }
    if (equipment.TV) {
      filters.TV = equipment.TV;
    }
    if (equipment.bathroom) {
      filters.bathroom = equipment.bathroom;
    }
    if (form) {
      filters.form = form;
    }

    dispatch(getAllCampers(filters));
  };

  return (
    <aside className={css.aside}>
      <LocationSelect />
      <h3 className={css.title}>Filters</h3>
      <Equipment />
      <Type />
      <button
        className={css.btn}
        type="button"
        aria-label="Search with filters"
        onClick={handleClick}
        disabled={isLoading}
      >
        Search
      </button>
    </aside>
  );
};

export default Filters;
