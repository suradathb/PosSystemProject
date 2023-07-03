import React from "react";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import HeaderLeft from "./HeaderLeft";


const HtmlPos  = ({ children }) => {
    return (
      <>
        <div className="container-scroller">
          <HeaderTop />
          <div className="container-fluid page-body-wrapper">
            <HeaderLeft />
            <div className="main-panel">
              <div class="content-wrapper">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  
}

export default HtmlPos;
