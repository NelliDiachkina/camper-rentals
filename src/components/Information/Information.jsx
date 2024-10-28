import { useSelector } from 'react-redux';
import { selectTotalItems } from '../../redux/campers/selectors';
import css from './Information.module.css';

const Information = () => {
  const total = useSelector(selectTotalItems);
  return (
    <div className={css.containerInformation}>
      <p>Total campers matching your request:</p>
      <p className={css.number}>{total}</p>
    </div>
  );
};

export default Information;
