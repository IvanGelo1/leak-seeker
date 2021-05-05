import '../css/faultpage.css';
import React, { useState, useEffect } from 'react';
import FaultListContainer from './faultlistcontainer';
import LeftSidebar from '../components/faultpage/leftsidebar';
import RightDataDisplay from '../components/faultpage/rightdatadisplay';
import { getFaultsByReg } from '../service/service-api';
import FaultLogEntry from '../components/faultpage/faultlogentry';

interface Props {
  setSearchedReg: (text: string) => void,
  searchedReg: string,
  setIntroPage: (bool: boolean) => void
}

interface VehicleFaults {
  reg: string,
  make: string,
  model: string,
  faults: Fault[]
}

interface Fault {
  summary: string,
  description: string,
  priceToFix: number,
  rating: number,
  area: string,
  year: number,
  faultLogged: string
}


const MainFaultPageContainer: React.FC<Props> = ({ searchedReg, setSearchedReg, setIntroPage }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allFaultsObject, setAllFaults] = useState<VehicleFaults[]>([]);

  const [linkType, setLinkType] = useState<string>('fault-display');

  const data: VehicleFaults = require('../dummy.json');

  // GRABS FAULTS FROM DATABASE
  useEffect(() => {
    setAllFaults([data])
    // getFaultsByReg(searchedReg)
    //   .then((fault) => setAllFaults([fault]))
    //   .then(() => setIsLoading(false));
  }, [searchedReg]);

  switch (linkType) {
    case 'log':
      return (
      <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage}/>
        <FaultLogEntry setLinkType={setLinkType} setSearchedReg={setSearchedReg}/>
      </div>
      )
    case 'fault-display':
      return (
        <div className="columns-container glass">
          <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage}/>
          <div className="fault-list-box">
            <FaultListContainer
              isLoading={isLoading}
              allFaultsObject={allFaultsObject}
              setSearchedReg={setSearchedReg}
            />
            {allFaultsObject.length > 0 &&
            <RightDataDisplay allFaultsObject={allFaultsObject}/>
            }
          </div>
        </div>
      );
    case 'about':
      return (
        <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage}/>
          <p>ABOUT PAGE</p>

        </div>
      );
    case 'contact':
      return (
        <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage}/>
          <p>CONTACT</p>

        </div>
      );
      case 'report':
      return (
        <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType} setIntroPage={setIntroPage}/>
          <p>REPORT</p>

        </div>
      );
    default: return <p>DEFAULT</p>
  }
};

export default MainFaultPageContainer;
