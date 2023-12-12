import React from 'react';
import { Link } from "react-router-dom";
import genie from './assets/genie.png'


const Dashboard = () => {
  return (
    <div>
      <img src={genie} alt="genie" className='genie' />
      <h2>Hi, I'm a GSAC Genie!</h2>
      <p>A GSAC Member helper.</p>
      <div className="nav">
      <div className="container1">
        <Link to="/announcements">What's new?</Link>
      </div>
      <div className="container2">
        <Link to="/loancalculator">Loan Calculator</Link>
      </div>
      <div className="container3">
        <Link to="/contact">Reach Us</Link>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
