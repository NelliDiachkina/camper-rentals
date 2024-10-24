import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCampers } from '../../redux/campers/operations';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import FilterForm from '../../components/FilterForm/FilterForm';
import PageContainer from '../../components/PageContainer/PageContainer';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <Container>
        <PageContainer>
          <FilterForm />
          <CampersList />
        </PageContainer>
      </Container>
    </>
  );
};

export default CatalogPage;
