import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';
import SharedLayout from '../SharedLayout/SharedLayout';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReview />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Toaster />
    </HelmetProvider>
  );
}

export default App;
