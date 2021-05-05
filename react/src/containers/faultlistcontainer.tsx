import SearchBar from '../components/faultpage/searchbar';
import FaultItem from '../components/faultpage/faultitem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Props {
  isLoading: boolean
}

// MAPS EACH FAULT TO A FAULT ITEM COMPONENT
const FaultListContainer: React.FC<Props> = ({ isLoading}) => {

  const allFaults = useSelector((state: RootState) => state.allFaults.value)

  const faultsArray = allFaults.map((faultArray) =>
    faultArray.faults.map((fault, index) => (
      <FaultItem
        key={index}
        summary={fault.summary}
        description={fault.description}
        year={fault.year}
        area={fault.area}
        priceToFix={fault.priceToFix}
        faultLogged={fault.faultLogged}
        rating={fault.rating}
        imageIndex={index}
      />
    ))
  );

  // RENDERS ALL FAULTS IN FAULT LIST
  return (
    <div className="middle-col col">
      <div className="search-and-make-model ">
        <SearchBar/>
        {!isLoading && allFaults[0] && (
          <div className="make-model-div ">
            <p>Current search:</p>
            <div className='m-m'>
            <span>Make: <h3>{allFaults[0].make}</h3></span>
            <span>Model: <h3>{allFaults[0].model}</h3></span>
            </div>
          </div>
        )}
      </div>
      <div className="all-faults-container-div">{faultsArray}</div>
    </div>
  );
};

export default FaultListContainer;
