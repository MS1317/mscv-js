import React from 'react';

const SideProfile = ({ closeSideProfile }) => {
  return (
    <div id="side-profile-parent" className={`side-profile-parent`} style={{ order: 1 }}>
      <div id="mySideProfile" className="side-profile nav-shadow">
        <div id="profile-cont" className="profile-cont">
          <a href="javascript:void(0)" className="closebtn" onClick={closeSideProfile}>&times;</a>
          <div id="sideDetails1" className="side-details p-3">
            <img className="me" src="/assets/home-page/IMG_20240105_222611_375.jpg" alt="img" />
            <div className="name-title">
              <strong>
                <h6>Manpreet Singh</h6>
              </strong>
            </div>
            <div className="designation">
              <ul className="p-1 designation-list m-0">
                <li>Frontend Developer,</li>
                <li>React JS,</li>
                <li>Wordpress,</li>
                <li>Video Editor,</li><br />
                <li>
                  <a className="channel-link" href="http://www.youtube.com/@TechiTuber">
                    <strong>
                      <span style={{ color: 'white', WebkitTextStroke: '0.5px black' }}>Techi</span>
                      <span style={{ color: 'white', WebkitTextStroke: '0.5px black', backgroundColor: '#f22b0c', borderRadius: '5px', padding: '1px' }}>Tuber</span>
                    </strong>
                    CEO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sidebar-scrollable-menu">
          <div id="sideDetails2" className="side-details-2 pt-3 px-3">
            <table>
              <tbody>
                <tr>
                  <td className="details-head">Residence:</td>
                  <td className="details-data">India</td>
                </tr>
                <tr>
                  <td className="details-head">City:</td>
                  <td className="details-data">Ludhiana</td>
                </tr>
                <tr>
                  <td className="details-head">Age:</td>
                  <td className="details-data">23</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr />

          {/* Note: The circle-progress element is a custom element. 
              You will need to find a React equivalent library for this, 
              like 'react-circular-progressbar'. I will comment it out for now. */}
          {/* <div className="progrss-div d-flex justify-content-evenly">
            <div className="lang-prog">
              <circle-progress className="circle" value="100" max="100" text-format='percent'></circle-progress>
              <h6 className="text-center">Punjabi</h6>
            </div>
            <div className="lang-prog">
              <circle-progress className="circle" value="60" max="100" text-format='percent'></circle-progress>
              <h6 className="text-center">Hindi</h6>
            </div>
            <div className="lang-prog">
              <circle-progress className="circle" value="80" max="100" text-format='percent'></circle-progress>
              <h6 className="text-center">English</h6>
            </div>
          </div> */}

          <hr />

          <div className="content">
            <div className="profile-skills">
              <div>
                <ul className="skills skills3 p-0 m-0">
                  <li className="sk-css"><span>CSS</span></li>
                  <li className="sk-htm"><span>HTML</span></li>
                  <li className="sk-jav"><span>REACT JS & JS</span></li>
                  <li className="sk-sql"><span>WORDPRESS</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="social-links">
          {/* These should be wrapped in <a> tags pointing to your profiles */}
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
