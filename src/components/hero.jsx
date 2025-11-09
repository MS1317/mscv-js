import TypewriterIntro from "./typewriter"

export const Hero = () => {
    return (
        <div id="intro-overlay" className="intro-overlay">
            <div id="hero-sec" className="hero-sec">
                <div id="hero-overlay" className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-head">Discover my amazing workspace</h1>
                        <TypewriterIntro />
                        <a href="#" className="hero-btn">Explore</a>
                        <span>
                            <img className="hero-img" src="/assets/home-page/Untitled-1.png" alt="" />
                        </span>
                    </div>
                </div>
            </div>
            {/* <div className="stats">
                <h3 className="years">Years Experience</h3>
                <h3 className="projects">Projects Completed</h3>
            </div> */}
        </div>
    )
}