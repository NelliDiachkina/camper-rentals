import { NavLink } from 'react-router-dom';
import css from './Menu.module.css';
import { capitalize } from '../../helpers/utils';
import clsx from 'clsx';

const makeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.isActive);
};

const Menu = ({ paths }) => {
  return (
    <ul className={css.menu}>
      {paths.map(path => (
        <li key={path} className={css.menuItem}>
          <NavLink to={path} className={makeLinkClass}>
            {capitalize(path)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
