
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Note: The `onclick` functions for opening/closing the nav and the service dropdown
// will need to be implemented in your main layout component.

const SideNav = ({ openNav, closeNav, isNavOpen }) => {
  return (
    <div className="side-navbar nav-shadow" style={{ order: 3 }}>
      <div className="btOn">
        <div id="navBtn" className="openBtn" onClick={openNav}>&#9776;</div>
      </div>
      <div className="active-page">
        <p></p>
      </div>
      <div id="mySidenav" className="sidenav" style={{ width: isNavOpen ? '250px' : '0px' }}>
        <div className="sidebar-content">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          
          {/* Use Link for client-side routing */}
          <Link to="/">Home</Link>

          <div className="service wrapper">
            <a className="service-drop" href="javascript:void(0)">Services</a>
            <i className="fa-solid fa-caret-right"></i>
          </div>

          <Link to="/services/web" className="serv-item">Web</Link>
          <Link to="/services/video-editing" className="serv-item">Video-Editing</Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
