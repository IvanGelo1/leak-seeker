import { Doughnut } from 'react-chartjs-2';
import '../../css/faultpage.css';
import {
  priceAverager,
  yearAverager,
  areaAverager,
} from '../../service/service-api';
import React, { useState } from 'react';

interface Props {
  allFaultsObject: VehicleFaults[]
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

const RightDataDisplay: React.FC<Props> = ({ allFaultsObject }) => {
  const faultsByPrice = allFaultsObject[0].faults.map((el) => el.priceToFix);//Return array with pricestoFix of each
  const faultsByArea = allFaultsObject[0].faults.map((el) => el.area);// Return array with area of each
  const faultsByYear = allFaultsObject[0].faults.map((el) => el.year); // Returns array with year of each

  const prices: number[] = priceAverager(faultsByPrice);
  const areas: number[] = areaAverager(faultsByArea);
  const years: number[] = yearAverager(faultsByYear);

  const priceStats = ['£10-100', '£100-£500', '£500-1000', '£1000 +'];
  const areaStats = ['Interior', 'Bodywork', 'Engine', 'Drivetrain'];
  const yearStats = ["Pre-1990's", '1990-2000', '2000-2010', '2010 >'];

  const [dataType, setDataType] = useState<(string[] | string | number[])[]>([areaStats, 'Problem area', areas]);

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
      {allFaultsObject.length > 0 && (
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
