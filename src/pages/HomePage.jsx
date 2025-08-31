
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import useTimeline from '../components/useTimeline';

// Placeholder data that replaces the fetch_data.php script
const cardData = [
  {
    page: 'web',
    icon_src: '/assets/icons/front-end.png',
    title: 'Web Development',
    description: 'Creating stunning and functional websites.'
  },
  {
    page: 'video-editing',
    icon_src: '/assets/icons/service-icons/video-editing-svgrepo-com.svg',
    title: 'Video Editing',
    description: 'Editing and producing high-quality videos.'
  }
  // Add more card data objects as needed
];

const HomePage = () => {
    const timelineRef = useTimeline({ threshold: 0.6 });

  // This useEffect hook will run once when the component mounts.
  // It's where you would place the logic for the typing effect.
  useEffect(() => {
    // You will need to find a React library for the typing effect,
    // such as 'react-type-animation' or 'typed.js', and implement it here.
    // For example:
    // const typed = new Typed('#typed', { strings: ['Developer', 'Freelancer', 'Designer'], typeSpeed: 100, loop: true });
    // return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div id="intro-overlay" className="intro-overlay">
        <div id="hero-sec" className="hero-sec">
          <div id="hero-overlay" className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-head">Discover my amazing workspace</h1>
              <div className="wrapper">
                <h6 className="effect-wrapper">
                  I am
                  <code>
                    <span id="typed"></span>
                    <span className="cursor">&nbsp;</span>
                  </code>
                </h6>
              </div>
              <a href="#" className="hero-btn">Explore</a>
              <span>
                <img className="hero-img" src="/assets/home-page/Untitled-1.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="stats">
          <h3 className="years">Years Experience</h3>
          <h3 className="projects">Projects Completed</h3>
        </div>
      </div>

      {/* Home Content */}
      <div className="page-content services pt-0">
        <section className="services-sec">
          <div className="service-content">
            {cardData.length > 0 ? (
              cardData.map((data, index) => (
                <Link className="service-card" to={`/services/${data.page}`} key={index}>
                  <div>
                    <div className="serv-icon">
                      <img className="serv-img" src={data.icon_src} alt="" />
                      <div className="big-circle"></div>
                    </div>
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                  </div>
                  <button>View more</button>
                </Link>
              ))
            ) : (
              <p>No Data Found</p>
            )}
          </div>
        </section>
      </div>

      {/* Timeline Section */}
      <div className="timeline-container" id="timeline-1" ref={timelineRef}>
        <div className="timeline-header">
          <h2 className="timeline-header__title">My journey so far</h2>
          <h3 className="timeline-header__subtitle">Career & Education</h3>
        </div>
        <div className="timeline">
          <div className="timeline-item 1" data-text="Frontend Developer at Evolvan">
            <div className="timeline__content">
              <img className="timeline__img" src="/assets/home-page/Snapchat-1136696124.jpg" alt="" />
              <h2 className="timeline__content-title">2023 - Present</h2>
              <p className="timeline__content-desc">Contributing to the development of dynamic, responsive web applications. My role involves working closely with backend developers, designers, and other team members to create seamless user experiences. I specialize in implementing intuitive UI/UX designs using modern frameworks such as React.js, ensuring code efficiency, and maintaining best practices in web development.</p>
            </div>
          </div>
          <div className="timeline-item 2" data-text="Bachelors in Computer & Application">
            <div className="timeline__content">
              <img className="timeline__img" src="/assets/home-page/172825936177.jpg" alt="" />
              <h2 className="timeline__content-title">2019-21</h2>
              <p className="timeline__content-desc">I completed my Bachelor of Computer Applications (BCA) from PCTE, where I gained foundational knowledge in software development, web technologies, and programming languages. My education has played a key role in shaping my problem-solving skills and technical expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;