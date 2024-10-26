import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCampers } from '../../redux/campers/operations';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import PageContainer from '../../components/PageContainer/PageContainer';
import Filters from '../../components/Filters/Filters';
import { selectLimit } from '../../redux/campers/selectors';
import { resetPage } from '../../redux/campers/slice';
import {
  selectFilters,
  selectForm,
  selectLocation,
} from '../../redux/filters/selectors';
import { getFilters } from '../../helpers/filters';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const location = useSelector(selectLocation);
  const equipment = useSelector(selectFilters);
  const form = useSelector(selectForm);

  useEffect(() => {
    dispatch(resetPage());
    const filters = getFilters({
      page: 1,
      limit,
      location,
      equipment,
      form,
    });
    dispatch(getAllCampers(filters));
  }, [dispatch, limit, location, equipment, form]);

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <Container>
        <PageContainer>
          <Filters />
          <CampersList />
        </PageContainer>
      </Container>
    </>
  );
};

export default CatalogPage;
