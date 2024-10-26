import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectHasNextPage,
  selectIsLoading,
  selectLimit,
  selectPage,
} from '../../redux/campers/selectors';
import css from './CampersList.module.css';
import CamperItem from '../CamperItem /CamperItem ';
import { NoResults } from '../NoResults/NoResults';
import {
  selectFilters,
  selectForm,
  selectLocation,
} from '../../redux/filters/selectors';
import { getAllCampers } from '../../redux/campers/operations';
import { getFilters } from '../../helpers/filters';
import { incrementPage } from '../../redux/campers/slice';
import Loader from '../../components/Loader/Loader';

const CampersList = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFilters);
  const form = useSelector(selectForm);
  const limit = useSelector(selectLimit);
  const campers = useSelector(selectCampers);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const hasNextPage = useSelector(selectHasNextPage);

  const handleClick = () => {
    dispatch(incrementPage());
    const filters = getFilters({
      page: page + 1,
      limit,
      location,
      equipment,
      form,
    });
    dispatch(getAllCampers(filters));
  };

  return (
    <>
      {isError ? (
        <NoResults />
      ) : (
        <section className={css.campersListSection}>
          <ul className={css.campersList}>
            {campers.map(camper => {
              return (
                <li key={camper.id} className={css.campersListItem}>
                  {<CamperItem camper={camper} />}
                </li>
              );
            })}
          </ul>
          {isLoading && <Loader />}
          {hasNextPage && (
            <button
              className={css.btn}
              type="button"
              disabled={isLoading}
              onClick={handleClick}
            >
              Load more
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default CampersList;
