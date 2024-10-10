import css from './CategoriesItem.module.css';
import sprite from '../../assets/icons/sprite.svg';

const CategoriesItem = ({ text }) => {
  return (
    <>
      <div className={css.container}>
        <svg height={20} width={20}>
          <use href={`${sprite}#icon-${text}`} />
        </svg>
        <p>{text}</p>
      </div>
    </>
  );
};

export default CategoriesItem;
