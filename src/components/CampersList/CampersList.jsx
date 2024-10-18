import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import css from './CampersList.module.css';
import CamperItem from '../CamperItem /CamperItem ';

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.campersList}>
      {campers.map(camper => {
        return (
          <li key={camper.id} className={css.campersListItem}>
            {<CamperItem camper={camper} />}
          </li>
        );
      })}
    </ul>
  );
};
export default CampersList;
