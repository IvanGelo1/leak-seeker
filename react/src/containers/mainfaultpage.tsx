import '../css/faultpage.css';
import React, { useState, useEffect } from 'react';
import FaultListContainer from './faultlistcontainer';
import LeftSidebar from '../components/faultpage/leftsidebar';
import RightDataDisplay from '../components/faultpage/rightdatadisplay';
import { getFaultsByReg } from '../service/service-api';
import FaultLogEntry from '../components/faultpage/faultlogentry';
import { useDispatch, useSelector } from 'react-redux';
import {setFaults} from '../redux/allFaults';
import { RootState } from '../redux/store';

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

const MainFaultPageContainer: React.FC = () => {

  const dispatch = useDispatch()

  const searchedReg = useSelector((state: RootState) => state.registrationPage.value)
  const allFaults = useSelector((state: RootState) => state.allFaults.value)

  const [isLoading, setIsLoading] = useState(false);

  const [linkType, setLinkType] = useState('fault-display'); //Not passed as props

  const data: VehicleFaults = require('../dummy.json');

  // GRABS FAULTS FROM DATABASE
  useEffect(() => {
    dispatch(setFaults(data))
    // getFaultsByReg(searchedReg)
    //   .then((fault) => setAllFaults([fault]))
    //   .then(() => setIsLoading(false));
  }, [searchedReg]);

  switch (linkType) {
    case 'log':
      return (
      <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType}/>
        <FaultLogEntry setLinkType={setLinkType}/>
      </div>
      )
    case 'fault-display':
      return (
        <div className="columns-container glass">
          <LeftSidebar setLinkType={setLinkType} linkType={linkType}/>
          <div className="fault-list-box">
            <FaultListContainer
              isLoading={isLoading}
            />
            {allFaults.reg
              ? <RightDataDisplay/>
              : null
            }
          </div>
        </div>
      );
    case 'about':
      return (
        <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType}/>
          <p>ABOUT PAGE</p>

        </div>
      );
    case 'contact':
      return (
        <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType}/>
          <p>CONTACT</p>

        </div>
      );
      case 'report':
      return (
        <div className="columns-container glass">
        <LeftSidebar setLinkType={setLinkType} linkType={linkType}/>
          <p>REPORT</p>

        </div>
      );
    default: return <p>DEFAULT</p>
  }
};

export default MainFaultPageContainer;
