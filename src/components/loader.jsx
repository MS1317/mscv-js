import React,{useRef,useEffect} from "react";

const Loader = () => {

    return (
        <div className="preload">
            <div className="preloader">
                <div className="preloader-container">
                    <div className="slice-container slice-left">
                        <div className="device">
                            <div className="device__a">
                                <span className="poppins-semibold">MS</span>
                                <div className="device__a-1"></div>
                                <div className="device__a-2"></div>
                            </div>
                            <div className="device__b"></div>
                            <div className="device__c"></div>
                            <div className="device__d"></div>
                            <div className="device__e"></div>
                            <div className="device__f"></div>
                            <div className="device__g"></div>
                        </div>
                    </div>

                    <div className="slice-container slice-right">
                        <div>
                            <p className="powered">Powered by <a href="https://techituber.com/"><span>Techi</span>Tuber</a></p>
                            {isUnderConstruction?
                            <p className={`powered ${isUnderConstruction?"under-construction-text":" "}`}>Hang on, we are making some changes
                                <br />
                            <span>
                                <a href="mailto:create@techituber.com">
                                    Urgent?
                                </a>
                            </span>
                            </p>
                            :""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
