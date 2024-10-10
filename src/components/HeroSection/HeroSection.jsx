import { Link } from 'react-router-dom';
import css from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.contentWrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
      </div>
      <Link
        className={css.heroBtn}
        to="/catalog"
        aria-label="Go to the catalog page"
      >
        View Now
      </Link>
    </section>
  );
};

export default HeroSection;
