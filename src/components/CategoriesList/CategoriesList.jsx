import CategoriesItem from '../CategoriesItem/CategoriesItem';
import css from './CategoriesList.module.css';
import { getCategories } from './categories';

const CategoriesList = ({ camper }) => {
  const categories = getCategories(camper);

  return (
    <ul className={css.categoriesList}>
      {categories
        .filter(category => category.condition)
        .map(category => (
          <li
            key={`${camper.id}-${category.id}`}
            className={css.categoriesListItem}
          >
            <CategoriesItem text={category.text} icon={category.icon} />
          </li>
        ))}
    </ul>
  );
};

export default CategoriesList;
