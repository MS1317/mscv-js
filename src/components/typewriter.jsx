import { TypeAnimation } from "react-type-animation";

const TypewriterIntro = () => {
    return (
        <div className="wrapper">
            <h6 className="effect-wrapper">
                I am{" "}
                <code className="typed-code">
                    &lt;
                    <TypeAnimation
                        sequence={[
                            "FrontendDeveloper", 2500,
                            "TechCreator", 2500,
                        ]}
                        wrapper="span"
                        speed={70}
                        repeat={Infinity}
                        cursor={true}
                    />
                    /&gt;
                </code>
            </h6>
        </div>
    );
};

export default TypewriterIntro;
