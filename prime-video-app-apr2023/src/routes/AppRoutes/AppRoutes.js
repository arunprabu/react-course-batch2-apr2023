import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';

const ShopPage = React.lazy(() => import('../../pages/ShopPage/ShopPage'));
const GalleryPage = React.lazy(() =>
  import('../../pages/GalleryPage/GalleryPage')
);
const UnitTestingDemo = React.lazy(() =>
  import('../../pages/UnitTestingDemo/UnitTestingDemo')
);
const ContactUsPage = React.lazy(() =>
  import('../../pages/ContactUsPage/ContactUsPage')
);

const HocDemoPage = React.lazy(() =>
  import('../../pages/HocDemoPage/HocDemoPage')
);

const HooksDemoPage = React.lazy(() =>
  import('../../pages/HooksDemoPage/HooksDemoPage')
);

const AppRoutes = () => {
  return (
    // Let's config the routing here
    <Suspense fallback={<div className="spinner-border text-success"></div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hoc-demo" element={<HocDemoPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/hooks-demo" element={<HooksDemoPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/unit-testing-demo" element={<UnitTestingDemo />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
