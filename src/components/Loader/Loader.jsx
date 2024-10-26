import { SyncLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.wrapperLoader}>
      <SyncLoader color="#e44848" aria-label="Loading Spinner" />
    </div>
  );
};

export default Loader;
