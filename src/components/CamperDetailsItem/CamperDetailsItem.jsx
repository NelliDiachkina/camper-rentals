import css from './CamperDetailsItem.module.css';
import sprite from '../../assets/icons/sprite.svg';

const CamperDetailsItem = ({ camper }) => {
  return (
    <section className={css.camperSection}>
      <h2 className={css.title}>{camper.name}</h2>
      <div className={css.wrapperItem}>
        <div className={css.item}>
          <svg width={16} height={16} aria-label="Rating">
            <use href={`${sprite}#icon-star`} />
          </svg>
          <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
        </div>
        <div className={css.item}>
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
      <p className={css.price}>{`€${camper.price.toFixed(2)}`}</p>
      <ul className={css.camperGallery}>
        {camper.gallery.map((item, index) => (
          <li className={css.camperGalleryItem} key={index}>
            <img
              className={css.camperGalleryImg}
              src={item.original}
              width={292}
              height={312}
              alt={camper.name}
            />
          </li>
        ))}
      </ul>
      <p className={css.description}>{camper.description}</p>
    </section>
  );
};

export default CamperDetailsItem;
