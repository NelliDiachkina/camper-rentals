import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return <main className={css.main}>{children}</main>;
};

export default SharedLayout;
