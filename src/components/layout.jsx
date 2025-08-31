
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is the placeholder for page content
import SideNav from './sideNav';
import SideProfile from './sideProfile';

// Import your main CSS file
// import '../App.css'; 

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(true);

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  const openSideProfile = () => setIsProfileOpen(true);
  const closeSideProfile = () => setIsProfileOpen(false);

  useEffect(() => {
    const setDynamicHeight = () => {
      const mainElement = document.getElementById('main');
      if (mainElement) {
        const viewportHeight = window.innerHeight;
        if (window.innerWidth >= 769) {
          const adjustedHeight = viewportHeight - 20;
          mainElement.style.height = `${adjustedHeight}px`;
        } else {
          mainElement.style.height = `${viewportHeight}px`;
        }
      }
    };

    // Set initial height
    setDynamicHeight();

    // Add event listener for window resize
    window.addEventListener("resize", setDynamicHeight);

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 969) {
        setIsProfileOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

     useEffect(() => {
     const handleResize = () => {
       // When the screen is wider than 969px, close the side nav
       if (window.innerWidth >= 969) {
         setIsNavOpen(false); // Directly update the state
       }
     };

     // Call the handler once on mount to set the initial state correctly
     handleResize();

     // Add the event listener for window resize
     window.addEventListener('resize', handleResize);

     // Return a cleanup function to remove the event listener
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []); // The empty dependency array [] ensures this effect runs only once on mount and unmount

  // Conditionally build the className string
  const mainClasses = [
    isNavOpen ? 'side-nav-open' : '',
    isProfileOpen ? 'side-profile-open' : ''
  ].join(' ').trim();

  return (
    <section id="main" className={mainClasses}>
      {/* Side Profile toggle button - You might want to make this its own component */}
      <div className="side-navbar mw-100 d-flex justify-content-center align-items-start" style={{ order: 1 }}>
        <span id="sideProfileBtn" className="side-profile-btn d-flex align-items-center" onClick={openSideProfile}></span>
      </div>

      <SideNav openNav={openNav} closeNav={closeNav} isNavOpen={isNavOpen} />
      
      <SideProfile closeSideProfile={closeSideProfile} isProfileOpen={isProfileOpen} />

      {/* Main Content Area */}
      <div id="main-content" className="content" style={{ overflowY: 'scroll', order: 2 }}>
        <div id="backdrop-filtr" className="backdrop-filter">
          <div id="content" className="mainContent" style={{ left: '0px' }}>
            <div id="page-changer" className="c-backdrop">
              {/* This Outlet is where React Router will render your pages */}
              <Outlet />
            </div>
          </div>
        </div>

        {/* You will also migrate contact-form.php and copyright.php into components 
            and place them here if they should appear on every page */}
        {/* <ContactFormComponent /> */}
        {/* <CopyrightComponent /> */}
      </div>
    </section>
  );
};

export default Layout;
