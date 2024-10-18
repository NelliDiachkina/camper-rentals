import css from './Equipment.module.css';
import sprite from '../../assets/icons/sprite.svg';

const options = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'];

export const Equipment = () => {
  return (
    <fieldset className={css.fieldset}>
      <legend className={css.legend}>Vehicle equipment</legend>
      <hr className={css.line} />
      <ul className={css.inputsWrapper}>
        {options.map(item => (
          <li key={item} className={css.listItem}>
            <label className={css.label}>
              <input
                className={css.input}
                type="checkbox"
                name={item}
                value={options[item]}
              />
              <div className={css.contentWrapper}>
                <svg width={32} height={32}>
                  <use href={`${sprite}#${item}`} />
                </svg>
                <span>{item}</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default Equipment;
