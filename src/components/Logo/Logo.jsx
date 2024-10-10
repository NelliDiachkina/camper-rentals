import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={css.logo} aria-label="Go to TravelTrucks home page">
      <svg className={css.logoIcon} aria-hidden="true">
        <use href={`${sprite}#logo`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
