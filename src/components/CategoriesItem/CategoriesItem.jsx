import css from './CategoriesItem.module.css';
import sprite from '../../assets/icons/sprite.svg';

const CategoriesItem = ({ text, icon }) => {
  return (
    <>
      <svg height={20} width={20} className={css.icon}>
        <use href={`${sprite}#${icon}`} />
      </svg>
      <p>{text}</p>
    </>
  );
};

export default CategoriesItem;
