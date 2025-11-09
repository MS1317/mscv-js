
import React, { useState, useEffect } from 'react';
import { Timeline } from '../components/timeline';
import { Hero } from '../components/hero';
import PortfolioShowcase from '../components/PortfolioShowcase';

const HomePage = () => {

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <div id="educationCareer">
        <Timeline />
      </div>

      {/* Services Section */}
      <PortfolioShowcase />
    </>
  );
};

export default HomePage;