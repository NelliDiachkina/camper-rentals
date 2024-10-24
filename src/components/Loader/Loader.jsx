import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <InfinitySpin
        visible={true}
        width="320"
        color="#e44848"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
