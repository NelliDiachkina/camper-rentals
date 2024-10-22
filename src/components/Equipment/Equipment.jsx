import css from './Equipment.module.css';
import sprite from '../../assets/icons/sprite.svg';
import { capitalize } from '../../helpers/utils';
import { toggleFilters } from '../../redux/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors';

export const Equipment = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const options = Object.keys(filters);

  const handleChange = e => {
    const { name, checked } = e.target;
    dispatch(toggleFilters({ name, checked }));
  };

  return (
    <fieldset className={css.fieldset}>
      <legend className={css.legend}>Vehicle equipment</legend>
      <hr className={css.line} />
      <ul className={css.inputsWrapper}>
        {options.map(item => (
          <li key={item} className={css.listItem}>
            <label
              className={`${css.label} ${filters[item] ? css.checked : ''}`}
            >
              <input
                className={css.input}
                type="checkbox"
                name={item}
                checked={filters[item]}
                onChange={handleChange}
              />
              <div className={css.contentWrapper}>
                <svg width={32} height={32}>
                  <use href={`${sprite}#${item}`} />
                </svg>
                <span>{capitalize(item)}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default Equipment;
