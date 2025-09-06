import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './sideNav';
import SideProfile from './sideProfile';
import Copyright from './copyright';

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

    setDynamicHeight();
    window.addEventListener("resize", setDynamicHeight);
    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, []);

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
      if (window.innerWidth >= 969) {
        setIsNavOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mainClasses = [
    isNavOpen ? 'side-nav-open' : '',
    isProfileOpen ? 'side-profile-open' : ''
  ].join(' ').trim();

  return (
    <section id="main" className={mainClasses}>
      <div className="side-navbar mw-100 d-flex justify-content-center align-items-start" style={{ order: 1 }}>
        <span id="sideProfileBtn" className="side-profile-btn d-flex align-items-center" onClick={openSideProfile}></span>
      </div>

      <SideNav openNav={openNav} closeNav={closeNav} isNavOpen={isNavOpen} />
      
      <SideProfile closeSideProfile={closeSideProfile} isProfileOpen={isProfileOpen} />

      <div id="main-content" className="content" style={{ overflowY: 'scroll', order: 2 }}>
        <div id="backdrop-filtr" className="backdrop-filter">
          <div id="content" className="mainContent" style={{ left: '0px' }}>
            <div id="page-changer" className="c-backdrop">
              <Outlet />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </section>
  );
};

export default Layout;
