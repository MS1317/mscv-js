import React, { useEffect, useState } from "react";

const Loader = () => {
    const [showloader, setShowLoader] = useState(true);

    useEffect(() => {
        if (!showloader) {
            return;
        }

        // If the site is under construction, we don't want to hide the loader.
        if (isUnderConstruction) {
            return;
        }

        const hidePreloader = () => {
            const preloadElement = document.querySelector('.preload');
            const sliceLeft = document.querySelector('.slice-left');
            const sliceRight = document.querySelector('.slice-right');

            if (preloadElement && sliceLeft && sliceRight) {
                sliceLeft.classList.add('slice-exit-left');
                sliceRight.classList.add('slice-exit-right');

                const onAnimationEnd = () => {
                    if (preloadElement.parentElement) {
                        preloadElement.parentElement.removeChild(preloadElement);
                    }
                    sliceLeft.removeEventListener('animationend', onAnimationEnd);
                };
                sliceLeft.addEventListener('animationend', onAnimationEnd);
            }
        };

        const timer =setTimeout(()=>{
            hidePreloader();
        }, 2000);
        return () => clearTimeout(timer);

    }, []);

    if (!showloader) {
        return null;
    }

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
                            {isUnderConstruction && (
                                <p className="powered under-construction-text">
                                    Hang on, we are making some changes
                                    <br />
                                    <span>
                                        <a href="mailto:create@techituber.com">
                                            Urgent?
                                        </a>
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
