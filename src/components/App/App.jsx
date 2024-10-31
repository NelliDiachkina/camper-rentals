import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import SharedLayout from '../SharedLayout/SharedLayout';
import { HelmetProvider } from 'react-helmet-async';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() =>
  import('../../pages/CamperDetailsPage/CamperDetailsPage')
);
const CamperFeatures = lazy(() => import('../Features/Features.jsx'));
const CamperReview = lazy(() => import('../Reviews/Reviews.jsx'));

function App() {
  return (
    <HelmetProvider>
      <Header />
      <SharedLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReview />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </SharedLayout>
    </HelmetProvider>
  );
}

export default App;
