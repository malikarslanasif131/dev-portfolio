import React from "react";

import AdSidebar from "./AdSidebar";

const AdLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#8AAAE5" }}>
        <div className="row">
          <div className="m-0 p-0" style={{ width: "320px" }}>
            <AdSidebar />
          </div>
          <div className="col-9 mr-auto">
            {/* <div className='bg-dark text-light'>
                          <span className=''>
                              Arslan
                          </span>
                      </div> */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdLayout;
