import React from "react";

const Copyright = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className="copyright-parent">
            <div id="copyright">
                <p className="powered m-0"> &copy; {currentYear} Created & Powered by <a href="https://techituber.com/"><span>Techi</span>Tuber</a></p>   
            </div>
        </div>
    );
};

export default Copyright;
