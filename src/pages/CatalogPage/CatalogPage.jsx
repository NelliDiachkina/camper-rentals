import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCampers } from '../../redux/campers/operations';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import PageContainer from '../../components/PageContainer/PageContainer';
import Filters from '../../components/Filters/Filters';
import { selectIsLoading, selectLimit } from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCampers({ page: 1, limit }));
  }, [dispatch, limit]);

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <Container>
        <PageContainer>
          <Filters />
          {isLoading ? <Loader /> : <CampersList />}
        </PageContainer>
      </Container>
    </>
  );
};

export default CatalogPage;
