import { HashLink } from 'react-router-hash-link';

const SideNav = ({ openNav, closeNav, isNavOpen }) => {
  return (
    
    <div className="side-navbar nav-shadow" style={{ order: 3 }}>
      <div className="btOn">
        <div id="navBtn" className="openBtn" onClick={openNav}>&#9776;</div>
      </div>
      <div className="active-page">
        <p></p>
      </div>
      <div id="mySidenav" className="sidenav" style={{ right: isNavOpen ? '0px' : '-255px' }}>
        <div className="sidebar-content">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          
          <HashLink smooth to="#intro">
            Intro
            </HashLink>
          <HashLink smooth to="#educationCareer">
            My Journey
          </HashLink>
          <HashLink smooth to="#testimonial">  
            Testimonials
          </HashLink>
          <HashLink smooth to="#portfolios">
            Portfolio
          </HashLink>
          <HashLink smooth to="#contactInformation">
            Contact
          </HashLink>    
        </div>
      </div>
    </div>
  );
};

export default SideNav;
