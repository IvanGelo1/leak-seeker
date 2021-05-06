import '../../css/faultpage.css';
import React, { useState } from 'react';
import { saveFaultToDatabase } from '../../service/service-api';
import {changeRegistration} from '../../redux/registration';
import { useDispatch } from 'react-redux';

interface Props {
  setLinkType: (text: string) => void
}

const FaultLogEntry: React.FC<Props> = ({ setLinkType}) => {
  const dispatch = useDispatch()
  const [formCompleted, setFormCompleted] = useState(false);
  const [newFaultObject, setNewFaultObject] = useState({
    reg: '',
    make: '',
    model: '',
    summary: '',
    description: '',
    year: '',
    area: '',
    priceToFix: '',
    faultLogged: Date.now(),
    rating: 0,
  });

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>): void =>
    setNewFaultObject({
      ...newFaultObject,
      [event.target.name]: event.target.value,
    });

  const onSearchSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!newFaultObject.reg || !newFaultObject.make || !newFaultObject.model) {
      alert('Please fill in the form above');
      return;
    } else {
      const faultsArray = [
        {
          summary: newFaultObject.summary,
          description: newFaultObject.description,
          priceToFix: newFaultObject.priceToFix,
          rating: newFaultObject.rating,
          area: newFaultObject.area,
          year: newFaultObject.year,
          faultLogged: newFaultObject.faultLogged,
        },
      ];
      const completeObject = {
        reg: newFaultObject.reg,
        make: newFaultObject.make,
        model: newFaultObject.model,
        summary: '',
        description: '',
        year: '',
        area: '',
        priceToFix: '',
        rating: 0,
        faultLogged: '',
        faults: faultsArray,
      };
      console.log('SEARCH -> NEXT STEP', completeObject);
      await saveFaultToDatabase(completeObject);
      setFormCompleted(true);
      dispatch(changeRegistration(completeObject.reg))
      setNewFaultObject({
        reg: '',
        make: '',
        model: '',
        summary: '',
        description: '',
        year: '',
        area: '',
        priceToFix: '',
        faultLogged: Date.now(),
        rating: 0,
      });
    }
  };

  const backToFaults = () => {
    setLinkType('fault-display');
  };

  return (
    <div className="log-fault-container" data-testid='FaultLogEntry'>
      {!formCompleted ? (
        <form className="log-forms-container glass" onSubmit={onSearchSubmit}>
          <label className='log-label'>
            Reg:
          </label>
            <input
              className='fault-search-input'
              type="text"
              name="reg"
              value={newFaultObject.reg}
              placeholder="Enter your registration number..."
              onChange={(event) => inputHandler(event)}
            />
          <label className='log-label'>
            Make:
          </label>
            <input
              className='fault-search-input'
              type="text"
              name="make"
              value={newFaultObject.make}
              placeholder="Enter the vehicle manufacturer..."
              onChange={(event) => inputHandler(event)}
            />
          <label className='log-label'>
            Model:
          </label>
            <input
              className='fault-search-input'
              type="text"
              name="model"
              value={newFaultObject.model}
              placeholder="Enter the model of your vehicle..."
              onChange={(event) => inputHandler(event)}
            />

          <label className='log-label'>
            Year:
          </label>
            <input
            className='fault-search-input'
              type="number"
              name="year"
              value={newFaultObject.year}
              onChange={(event) => inputHandler(event)}
              min="1950"
              step="1"
              max="2021"
              data-testid="yearInput"
            ></input>

          <label className='log-label'>
            Fault summary:
          </label>
            <input
              className='fault-search-input'
              type="text"
              name="summary"
              value={newFaultObject.summary}
              placeholder="What is the fault?"
              onChange={(event) => inputHandler(event)}
            />

          <label className='log-label'>
            Area of fault:
          </label>
            <select
              className='fault-search-input'
              name="area"
              value={newFaultObject.area}
              onChange={(event) => inputHandler(event)}
            >
              <option value="interior">Interior</option>
              <option value="bodywork">Bodywork</option>
              <option value="engine">Engine</option>
              <option value="drivetrain">Drivetrain</option>
            </select>

          <label className='log-label'>
            Cost to repair: £
          </label>
            <input
            className='fault-search-input'
              type="number"
              name="priceToFix"
              value={newFaultObject.priceToFix}
              onChange={(event) => inputHandler(event)}
              min="0"
              step="50"
              max="5000"
              data-testid="repairCost"
            ></input>

          <label className='log-label'>
            Fault description:
          </label>
            <textarea
            className='fault-search-input'
              name="description"
              placeholder="Please enter a short description of the fault..."
              rows={4}
              cols={50}
              value={newFaultObject.description}
              onChange={(event) => inputHandler(event)}
            />

          <label className='log-label'>Upload images of fault:
          <input className='file' type="file" id="myFile" name="filename" data-testid="fileInput"></input>
          </label>
          <input className='sub-btn logbtn' type="submit" value="Submit" />
          <input className='sub-btn logbtn' type="reset" />
        </form>
      ) : (
        <div className='fault-logged-cont glass'>
          <p>Thank you for submitting a new fault record.</p>
          <p>Please click the button below to view the record</p>
          <button className='sub-btn done-btn' onClick={() => {
            backToFaults()
            setFormCompleted(false)
          }}>View Record</button>
        </div>
      )}
    </div>
  );
};

export default FaultLogEntry;
