import CategoriesItem from '../CategoriesItem/CategoriesItem';
import css from './CategoriesList.module.css';

const CategoriesList = ({ camper }) => {
  const categories = [
    {
      condition: camper.transmission === 'automatic',
      text: 'Automatic',
      id: 'transmission',
    },
    { condition: camper.engine === 'petrol', text: 'Petrol', id: 'engine' },
    { condition: camper.kitchen, text: 'Kitchen', id: 'kitchen' },
    { condition: camper.AC, text: 'AC', id: 'ac' },
    { condition: camper.TV, text: 'TV', id: 'tv' },
    { condition: camper.bathroom, text: 'Bathroom', id: 'bathroom' },
    { condition: camper.radio, text: 'Radio', id: 'radio' },
  ];

  return (
    <div className={css.wrapper}>
      {categories
        .filter(category => category.condition)
        .map(category => (
          <CategoriesItem
            key={`${camper.id}-${category.id}`}
            text={category.text}
          />
        ))}
    </div>
  );
};

export default CategoriesList;
