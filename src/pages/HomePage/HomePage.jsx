import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.homeSection}>
      <div className={css.contentWrapper}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        aria-label="Go to the catalog page"
      >
        View Now
      </button>
    </section>
  );
};

export default HomePage;
