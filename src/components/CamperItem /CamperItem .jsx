import CategoriesList from '../CategoriesList/CategoriesList';
import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import css from './CamperItem.module.css';

const CamperItem = ({ camper }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={camper.gallery[0].original}
        alt={camper.name}
        width="292"
        height="320"
      />
      <div className={css.content}>
        <div className={css.wrapperContent}>
          <h2 className={css.title}>{camper.name}</h2>
          <p className={css.price}>€{camper.price}.00</p>
        </div>
        <div className={css.wrapperItem}>
          <div className={css.item}>
            <svg width={16} height={16} aria-label="Rating">
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
          </div>
          <div className={css.item}>
            <svg width={16} height={16} aria-label="Location">
              <use href={`${sprite}#icon-map`} />
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <CategoriesList camper={camper} />
        <button
          className={css.btn}
          type="button"
          onClick={handleClick}
          aria-label="Show more information about camper"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperItem;
