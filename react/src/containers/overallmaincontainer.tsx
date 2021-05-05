import React from 'react';
import '../css/overallcontainerpage.css';
import WelcomeContainer from './welcomecontainer';
import MainFaultPageContainer from './mainfaultpage';
import { useState } from 'react';

const OverallMainContainer: React.FC = () => {
  const [introPage, setIntroPage] = useState<boolean>(true);
  const [searchedReg, setSearchedReg] = useState<string>('');

  return (
    <div className="mainpage">
      {introPage ? (
        <WelcomeContainer
          setIntroPage={setIntroPage}
          setSearchedReg={setSearchedReg}
        />
      ) : (
        <MainFaultPageContainer searchedReg={searchedReg} setSearchedReg={setSearchedReg} setIntroPage={setIntroPage}/>
      )}
    </div>
  );
};

export default OverallMainContainer;
