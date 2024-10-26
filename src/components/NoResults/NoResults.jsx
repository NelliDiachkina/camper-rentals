import css from './NoResults.module.css';
import { TbCamper } from 'react-icons/tb';

export const NoResults = () => {
  return (
    <div className={css.container}>
      <TbCamper size={220} className={css.icon} />
      <h2 className={css.title}>No Campers Found</h2>
      <div>
        <p>No campers found for the selected criteria</p>
        <p> Please, try adjusting your search criteria</p>
      </div>
    </div>
  );
};
