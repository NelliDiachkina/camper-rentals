import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import css from './Header.module.css';
import clsx from 'clsx';
import Container from '../Container/Container';

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.isActive);
};

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Logo />
          <ul className={css.navList}>
            <li>
              <NavLink to="/" className={makeLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={makeLinkClass}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
