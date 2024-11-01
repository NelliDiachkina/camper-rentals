import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import CategoriesList from '../CategoriesList/CategoriesList';
import css from './Features.module.css';
import VehicleDetailsList from '../VehicleDetailsList/VehicleDetailsList';
import BookingForm from '../BookingForm/BookingForm';

const Features = () => {
  const camper = useSelector(selectCamperById);

  return (
    <div className={css.featuresContainer}>
      <div className={css.contentWrapper}>
        <div className={css.categoriesListWrapper}>
          <CategoriesList camper={camper} />
        </div>
        <div className={css.categoriesListWrapper}>
          <h3 className={css.title}>Vehicle type</h3>
          <VehicleDetailsList camper={camper} />
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default Features;
