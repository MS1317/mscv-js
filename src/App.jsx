import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './components/loader';
import Layout from './components/layout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage'; // Import ServicePage


// MainApp is now the actual application with all the routing.
const MainApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Layout component wraps all our pages and contains the nav/profile */}
        <Route path="/" element={<Layout />}>
          {/* The index route renders HomePage by default inside the Layout */}
          <Route index element={<HomePage />} />

          {/* Add future pages here */}
          <Route path="services/:serviceName" element={<ServicePage />} />
          {/* e.g., <Route path="about" to={<AboutPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  if (isUnderConstruction) {

    return <Loader />;
  }

  return (
    <>
      <Loader />
      <MainApp />
    </>
  );
};

export default App;