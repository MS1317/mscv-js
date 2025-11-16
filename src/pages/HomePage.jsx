
import React, { useState, useEffect } from 'react';
import { Timeline } from '../components/timeline';
import { Hero } from '../components/hero';
import PortfolioShowcase from '../components/PortfolioShowcase';
import Contact from '../components/contact';
import TestimonialSlider from '../components/testimonial';
import ContactInformation from '../components/contactInfo';

const HomePage = () => {

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <div id="educationCareer">
        <Timeline />
      </div>

      {/* Testimonial Section */}
      <TestimonialSlider/>

      {/* Services Section */}
      <PortfolioShowcase />
      
      {/* Contact Information Section */}
      <ContactInformation />
      
      {/* Contact Section */}
        <Contact />
    </>
  );
};

export default HomePage;