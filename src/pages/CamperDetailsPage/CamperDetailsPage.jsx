import { Helmet } from 'react-helmet-async';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperById,
  selectIsLoading,
} from '../../redux/campers/selectors';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCamperById } from '../../redux/campers/operations';
import CamperDetailsItem from '../../components/CamperDetailsItem/CamperDetailsItem';
import Loader from '../../components/Loader/Loader';
import Menu from '../../components/Menu/Menu';
const paths = ['features', 'reviews'];

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
        {camper && (
          <>
            <CamperDetailsItem />
            <Menu paths={paths} />
            <Outlet />
          </>
        )}
      </Container>
    </>
  );
};

export default CamperDetailsPage;
