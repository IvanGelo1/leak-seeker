import { useDispatch, useSelector } from 'react-redux';
import '../../css/faultpage.css';
import { change } from '../../redux/introPage';


const LeftSidebar = ({ setLinkType, linkType,}) => {
  console.log(change);
  const intro = useSelector(state => state.introPage.value);
  const dispatch = useDispatch()

  return (
    <div className="left-col col glass" data-testid="LeftSideBar">
      <div className='left-btn-div'>
        <a
          data-cy="sideBarHome"
          className="welcome-choice-btn glass"
          href="#"
          onClick={() => dispatch(change())}
        >
          Home
        </a>
      </div>

      <div className='left-btn-div'>
        <a
          className="welcome-choice-btn glass"
          href="#"
          onClick={() => {
            if (linkType === 'log') {
              setLinkType('fault-display');
            } else {
              setLinkType('log');
            }
          }}
        >
          Log a fault
        </a>
      </div>
      <div className='left-btn-div'>
        <a
          className="welcome-choice-btn glass"
          href="#"
          onClick={() => {
            if (linkType === 'about') {
              setLinkType('fault-display');
            } else {
              setLinkType('about');
            }
          }}
        >
          About
        </a>
      </div>
      <div className='left-btn-div'>
        <a
          className="welcome-choice-btn glass"
          href="#"
          onClick={() => {
            if (linkType === 'contact') {
              setLinkType('fault-display');
            } else {
              setLinkType('contact');
            }
          }}
        >
          Contact Us
        </a>
      </div>
      <div className='left-btn-div'>
        <a
          className="welcome-choice-btn glass"
          href="#"
          onClick={() => {
            if (linkType === 'report') {
              setLinkType('fault-display');
            } else {
              setLinkType('report');
            }
          }}
        >
          Report a problem
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
