import css from './CategoriesItem.module.css';
import sprite from '../../assets/icons/sprite.svg';

const CategoriesItem = ({ text }) => {
  return (
    <>
      <li className={css.categoriesListItem}>
        <svg height={20} width={20} className={css.icon}>
          <use href={`${sprite}#${text}`} />
        </svg>
        <p>{text}</p>
      </li>
    </>
  );
};

export default CategoriesItem;
