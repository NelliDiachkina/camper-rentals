import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCampers } from '../../redux/campers/operations';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <Container>
        <CampersList />
      </Container>
    </>
  );
};

export default CatalogPage;
