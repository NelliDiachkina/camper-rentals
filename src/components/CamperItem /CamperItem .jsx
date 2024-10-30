import CategoriesList from '../CategoriesList/CategoriesList';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import sprite from '../../assets/icons/sprite.svg';
import css from './CamperItem.module.css';
import { selectLocation } from '../../redux/filters/selectors';
import { toggleFavorites } from '../../redux/favorites/slice';
import { selectFavoritesList } from '../../redux/favorites/selectors';

const CamperItem = ({ camper }) => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectLocation);
  const favoritesList = useSelector(selectFavoritesList);
  const isFavorite = favoritesList.includes(camper.id);
  const isSelectedLocation =
    selectedLocation.split(',')[0] === camper.location.split(',')[1].trim();

  const handleFavoriteClick = () => {
    dispatch(toggleFavorites(camper.id));
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
          <div className={css.wrapperItemContent}>
            <p className={css.price}>{`€${camper.price.toFixed(2)}`}</p>
            <button
              className={`${css.btnHeart} ${isFavorite ? css.active : ''}`}
            >
              <svg
                width={24}
                height={24}
                className={css.icon}
                aria-label="Add to favorites"
                onClick={handleFavoriteClick}
              >
                <use href={`${sprite}#heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.wrapperItem}>
          <div className={css.item}>
            <svg width={16} height={16} aria-label="Rating">
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
          </div>
          <div
            className={`${css.itemLocation} ${
              isSelectedLocation ? css.activeLocation : ''
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
        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.btn}
          aria-label="Show more information about camper"
        >
          Show more
        </Link>
      </div>
    </>
  );
};

export default CamperItem;
