import React from 'react';
import { Outlet } from "react-router";
import { Link } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/dashboard" className='home-button'>HOME</Link>
        <Link to="https://www.facebook.com/OfficialPageGSAC1964/">GSAC Official Page</Link>
        <Link to="https://www.gsac.coop/">GSAC Website</Link>
      </div>
      <Outlet/>
    
      {/* footer */}
      <div className="footer">
        All Rights Reserved © aimeeest spaghettiest
      </div>
    </div>
  );
};

export default DefaultLayout;
