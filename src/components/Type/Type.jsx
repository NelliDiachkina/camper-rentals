import css from './Type.module.css';
import sprite from '../../assets/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectForm } from '../../redux/filters/selectors';
import { setForm } from '../../redux/filters/slice';
import { typeFormOptions } from './types';

export const Type = () => {
  const dispatch = useDispatch();
  const selectedFormType = useSelector(selectForm);

  const handleChange = e => {
    dispatch(setForm(e.target.value));
  };

  return (
    <fieldset className={css.fieldset}>
      <legend className={css.legend}>Vehicle type</legend>
      <hr className={css.line} />
      <ul className={css.inputsWrapper}>
        {typeFormOptions.map(({ name, value }) => (
          <li key={value} className={css.listItem}>
            <label
              className={`${css.label} ${
                selectedFormType === value ? css.checked : ''
              }`}
            >
              <input
                className={css.input}
                type="radio"
                name="typeForm"
                value={value}
                checked={selectedFormType === value}
                onChange={handleChange}
              />
              <div className={css.contentWrapper}>
                <svg width={32} height={32}>
                  <use href={`${sprite}#${value}`} />
                </svg>
                <span>{name}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default Type;
