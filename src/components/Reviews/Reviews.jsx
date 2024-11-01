import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import css from './Reviews.module.css';
import sprite from '../../assets/icons/sprite.svg';

const Reviews = () => {
  const camper = useSelector(selectCamperById);

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.list}>
        {camper.reviews.map((item, index) => (
          <li key={index} className={css.listItem}>
            <div className={css.wrapperContent}>
              <h3 className={css.title}>{item.reviewer_name[0]}</h3>
              <div className={css.wrapper}>
                <p className={css.titleText}>{item.reviewer_name}</p>
                <ul className={css.ratingList}>
                  {[...Array(5)].map((_, index) => (
                    <li key={index}>
                      <svg
                        width={16}
                        height={16}
                        aria-label="Rating"
                        className={
                          index < item.reviewer_rating ? css.filled : css.empty
                        }
                      >
                        <use href={`${sprite}#star`} />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.text}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
