import { useNavigate } from 'react-router-dom';
import css from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={css.heroSection}>
      <div className={css.container}>
        <div className={css.contentWrapper}>
          <div className={css.textWrapper}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>
              You can find everything you want in our catalog
            </p>
          </div>
          <button
            type="button"
            className={css.heroBtn}
            onClick={handleClick}
            aria-label="Go to catalog page of campers"
          >
            View Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
