
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
      <div id="testimonial">
        <TestimonialSlider/>
      </div>

      {/* Services Section */}
      <div id="portfolios">
        <PortfolioShowcase />
      </div>
      
      {/* Contact Information Section */}
      
      <div id="contactInformation">
        <ContactInformation />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;