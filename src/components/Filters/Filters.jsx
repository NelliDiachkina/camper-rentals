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
import { selectIsLoading, selectLimit } from '../../redux/campers/selectors';
import { resetPage } from '../../redux/campers/slice';
import { getFilters } from '../../helpers/filters';

const Filters = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFilters);
  const form = useSelector(selectForm);
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);

  const handleClick = () => {
    dispatch(resetPage());
    const filters = getFilters({ page: 1, limit, location, equipment, form });
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
