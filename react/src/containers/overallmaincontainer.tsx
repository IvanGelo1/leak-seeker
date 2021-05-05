import '../css/overallcontainerpage.css';
import WelcomeContainer from './welcomecontainer';
import MainFaultPageContainer from './mainfaultpage';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const OverallMainContainer: React.FC = () => {
  const  intro  = useSelector((state: RootState) => state.introPage.value);

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
