import { useSelector } from 'react-redux';
import { selectCampers, selectError } from '../../redux/campers/selectors';
import css from './CampersList.module.css';
import CamperItem from '../CamperItem /CamperItem ';
import { NoResults } from '../NoResults/NoResults';

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const isError = useSelector(selectError);

  return (
    <>
      {isError ? (
        <NoResults />
      ) : (
        <ul className={css.campersList}>
          {campers.map(camper => {
            return (
              <li key={camper.id} className={css.campersListItem}>
                {<CamperItem camper={camper} />}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CampersList;
