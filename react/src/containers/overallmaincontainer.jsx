import '../css/overallcontainerpage.css';
import WelcomeContainer from '../containers/welcomecontainer';
import MainFaultPageContainer from '../containers/mainfaultpage';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const OverallMainContainer = () => {
  const  intro  = useSelector(state => state.introPage.value);

  return (
    <div className="mainpage">
      {intro ? (
        <WelcomeContainer/>
      ) : (
        <MainFaultPageContainer/>
      )}
    </div>
  );
};

export default OverallMainContainer;
