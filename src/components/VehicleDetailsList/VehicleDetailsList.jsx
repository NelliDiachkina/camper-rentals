import { formatString, formatWord } from '../../helpers/utils';
import css from './VehicleDetailsList.module.css';

const VehicleDetailsList = ({ camper }) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <span>Form</span>
        <span>{camper.form ? formatWord(camper.form) : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Length</span>
        <span>{camper.length ? formatString(camper.length) : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Width</span>
        <span>{camper.width ? formatString(camper.width) : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Height</span>
        <span>{camper.height ? formatString(camper.height) : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Tank</span>
        <span>{camper.tank ? formatString(camper.tank) : null}</span>
      </li>
      <li className={css.listItem}>
        <span>Consumption</span>
        <span>{camper.consumption ? camper.consumption : null}</span>
      </li>
    </ul>
  );
};

export default VehicleDetailsList;
