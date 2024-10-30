import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperById,
  selectIsLoading,
} from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCamperById } from '../../redux/campers/operations';
import CamperDetailsItem from '../../components/CamperDetailsItem/CamperDetailsItem';
import { NoResults } from '../../components/NoResults/NoResults';
import Loader from '../../components/Loader/Loader';

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperById);
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <Container>
        {isLoading && <Loader />}
        {camper ? <CamperDetailsItem camper={camper} /> : <NoResults />}
      </Container>
    </>
  );
};

export default CamperDetailsPage;
