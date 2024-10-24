import { Routes, Route } from 'react-router-dom';
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
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

function App() {
  return (
    <HelmetProvider>
      <Header />
      <SharedLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </SharedLayout>
    </HelmetProvider>
  );
}

export default App;
