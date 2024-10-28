import CategoriesList from '../CategoriesList/CategoriesList';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sprite from '../../assets/icons/sprite.svg';
import css from './CamperItem.module.css';
import { selectLocation } from '../../redux/filters/selectors';

const CamperItem = ({ camper }) => {
  const navigate = useNavigate();
  const selectedLocation = useSelector(selectLocation);
  const handleClick = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <>
      <img
        className={css.img}
        src={camper.gallery[0].original}
        alt={camper.name}
        width="292"
        height="320"
      />
      <div>
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
          <div
            className={`${css.item} ${
              selectedLocation.split(',')[0] ===
              camper.location.split(',')[1].trim()
                ? css.active
                : ''
            }`}
          >
            <svg
              width={16}
              height={16}
              aria-label="Location"
              className={css.icon}
            >
              <use href={`${sprite}#map`} />
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
    </>
  );
};

export default CamperItem;
