import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCampers } from '../../redux/campers/operations';
import CampersList from '../../components/CampersList/CampersList';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <CampersList />
    </>
  );
};

export default CatalogPage;
