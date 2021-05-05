import '../css/welcomepage.css';
import WelcomeChoiceButton from '../components/welcomechoicebutton';

import logo from '../images/logo.png'

interface Props {
  setIntroPage: (bool: boolean) => void,
  setSearchedReg: (text: string) => void
}

const WelcomeContainer: React.FC<Props> = ({ setIntroPage, setSearchedReg }) => {
  return (
    <div className="welcome-container glass" data-testid="WelcomeContainer">
      <h1>Welcome to Leak Seeker</h1>
      <h3>Please choose an option:</h3>
      <div className="button-container">
        <WelcomeChoiceButton
          searchType="Search Faults"
          setIntroPage={setIntroPage}
          setSearchedReg={setSearchedReg}
        />
        <div>
        <img className='welcome-logo' src={logo} alt='brand logo'></img>
        </div>
        <WelcomeChoiceButton
          searchType="Register Fault"
          setIntroPage={setIntroPage}
          setSearchedReg={setSearchedReg}
        />
      </div>
    </div>
  );
};

export default WelcomeContainer;
