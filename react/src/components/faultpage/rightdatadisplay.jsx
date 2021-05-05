import { Doughnut } from 'react-chartjs-2';
import '../../css/faultpage.css';
import {
  priceAverager,
  yearAverager,
  areaAverager,
} from '../../service/service-api';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const RightDataDisplay = () => {
  const allFaults = useSelector(state => state.allFaults.value)
  const faultsByPrice = allFaults[0].faults.map((el) => el.priceToFix);//Return array with pricestoFix of each
  const faultsByArea = allFaults[0].faults.map((el) => el.area);// Return array with area of each
  const faultsByYear = allFaults[0].faults.map((el) => el.year); // Returns array with year of each

  const prices = priceAverager(faultsByPrice);
  const areas = areaAverager(faultsByArea);
  const years = yearAverager(faultsByYear);

  const priceStats = ['£10-100', '£100-£500', '£500-1000', '£1000 +'];
  const areaStats = ['Interior', 'Bodywork', 'Engine', 'Drivetrain'];
  const yearStats = ["Pre-1990's", '1990-2000', '2000-2010', '2010 >'];

  const [dataType, setDataType] = useState([areaStats, 'Problem area', areas]);


  const data = {
    labels: dataType[0],

    datasets: [
      {
        label: dataType[1],
        data: dataType[2],
        backgroundColor: ['rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',

        'rgba(255, 99, 132, 0.5)'],
        borderColor: ['rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',

        'rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="data-container col glass" data-testid="rightDataDisplayContainer">
      {allFaults.length > 0 && (
        <div>
          <h2>{dataType[1]} data</h2>
          <Doughnut  data={data} width={400} height={400} />
          <div className="stats">
            <a
              onClick={() => setDataType([areaStats, 'Problem area', areas])}
              href="#"
              className="data-choice-btn"
            >
              <div className="icn">
                <i className="fas fa-car-crash fa-lg"></i>
              </div>
              Problem areas
            </a>

            <a
              onClick={() =>
                setDataType([priceStats, 'Average Repair Price', prices])
              }
              href="#"
              className="data-choice-btn"
            >
              <div className="icn">
                <i className="fas fa-dollar-sign fa-lg"></i>
              </div>
              Average repair price
            </a>

            <a
              onClick={() =>
                setDataType([yearStats, 'Faults Sorted By Year', years])
              }
              href="#"
              className="data-choice-btn"
            >
              <div className="icn">
                <i className="far fa-calendar-alt fa-lg"></i>
              </div>
              Number of faults by year
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDataDisplay;
