import useTimeline from '../components/useTimeline';


export const Timeline = () => {
    const timelineRef = useTimeline({ threshold: 0.6 });

    return (<div className="timeline-container" id="timeline-1" ref={timelineRef}>
        <div className="timeline-header">
            <h2 className="timeline-header__title">My journey so far</h2>
            <h3 className="timeline-header__subtitle">Career & Education</h3>
        </div>
        <div className="timeline">
            <div className="timeline-item 1" data-text="Freelance Frontend Developer">
                <div className="timeline__content">
                    <img className="timeline__img" src="/assets/home-page/Untitled.jpeg" alt="" />
                    <h2 className="timeline__content-title">2025 - Present</h2>
                    <p className="timeline__content-desc">
                        Providing end-to-end frontend development services for clients across various industries. I specialize in building responsive, high-performance user interfaces with React.js, translating design requirements into polished digital experiences, and delivering scalable, maintainable code. My work spans landing pages, dashboards, and full-scale web applications, with a focus on usability, performance optimization, and modern development best practices.
                    </p>
                </div>
            </div>

            <div className="timeline-item 2" data-text="Frontend Developer at Evolvan">
                <div className="timeline__content">
                    <img className="timeline__img" src="/assets/home-page/Snapchat-1136696124.jpg" alt="" />
                    <h2 className="timeline__content-title">2023 - Present</h2>
                    <p className="timeline__content-desc">Contributing to the development of dynamic, responsive web applications. My role involves working closely with backend developers, designers, and other team members to create seamless user experiences. I specialize in implementing intuitive UI/UX designs using modern frameworks such as React.js, ensuring code efficiency, and maintaining best practices in web development.</p>
                </div>
            </div>
            <div className="timeline-item 3" data-text="Bachelors in Computer & Application">
                <div className="timeline__content">
                    <img className="timeline__img" src="/assets/home-page/172825936177.jpg" alt="" />
                    <h2 className="timeline__content-title">2019-21</h2>
                    <p className="timeline__content-desc">I completed my Bachelor of Computer Applications (BCA) from PCTE, where I gained foundational knowledge in software development, web technologies, and programming languages. My education has played a key role in shaping my problem-solving skills and technical expertise.</p>
                </div>
            </div>

        </div>
    </div>);
}