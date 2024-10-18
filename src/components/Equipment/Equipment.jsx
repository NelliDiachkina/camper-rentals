import css from './Equipment.module.css';
import sprite from '../../assets/icons/sprite.svg';

export const Equipment = ({ options, handleChange, selectedValues }) => {
  const isSelected = value => selectedValues.includes(value);

  return (
    <fieldset className={css.fieldset}>
      <legend className={css.legend}>Vehicle equipment</legend>
      <hr className={css.line} />
      <ul className={css.inputsWrapper}>
        {Object.keys(options).map(item => (
          <li key={item} className={css.listItem}>
            <label
              className={`${css.label} ${
                isSelected(options[item]) ? css.checked : ''
              }`}
            >
              <input
                className={css.input}
                type="checkbox"
                name={item}
                value={options[item]}
                checked={isSelected(options[item])}
                onChange={handleChange}
              />
              <div className={css.contentWrapper}>
                <svg width={32} height={32}>
                  <use href={`${sprite}#${item.toLowerCase()}`} />
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
