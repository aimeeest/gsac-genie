import React from 'react';
import announcement1 from '../assets/announcement1.svg';
import announcement3 from '../assets/announcement3.svg';
import { Link } from 'react-router-dom';

const Announcements = () => {
  return (
    <div className="announcements-container">
      <h2 className='announcement-page'>What's New?</h2>
      <div className="announcement">
        <h2>GSAC Advisory</h2>
        <p>NEW INTEREST RATE for the GSAC Special Savings Programs  (Education Savings & Retirement Savings) effective AUGUST 1, 2023. Interest earned shall now be credited to the regular savings account of the depositor. Open your Special Savings Account and start earning more today!</p>
        <img src={announcement1} alt="savings rates" />
      </div>
      <div className="announcement">
        <h2>Introducing the Lab Coop</h2>
        <p>GSAC Laboratory Cooperative is a cooperative for those who are
        a GSAC Aflatoun member. Lab Coop conducts social and financial literacy trainings, workshops, seminars, and activities.</p>
        <Link to="https://www.facebook.com/GSACAFLATOUN">Learn more about Lab Coop 🡥</Link>
      </div>
      <div className="announcement">
        <h2>GSAC Advisory</h2>
        <p>Good news member-owners! The maximum loanable amount for the GSAC Agri-Production Loan (Palay) has now been increased from Php25,000.00 per hectare to PHP40,000.00 PER HECTARE effective July 20, 2023.</p>
        <img src={announcement3} alt="new loan rate" />
      </div>
    </div>
  );
};

export default Announcements;
