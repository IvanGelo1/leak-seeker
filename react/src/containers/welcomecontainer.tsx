import '../css/welcomepage.css';
import React from 'react';
import WelcomeChoiceButton from '../components/welcomechoicebutton';

import logo from '../images/logo.png'

const WelcomeContainer: React.FC = () => {
  return (
    <div className="welcome-container glass" data-testid="WelcomeContainer">
      <h1>Welcome to Leak Seeker</h1>
      <h3>Please choose an option:</h3>
      <div className="button-container">
        <WelcomeChoiceButton
          searchType="Search Faults"
        />
        <div>
        <img className='welcome-logo' src={logo} alt='brand logo'></img>
        </div>
        <WelcomeChoiceButton
          searchType="Register Fault"
        />
      </div>
    </div>
  );
};

export default WelcomeContainer;
