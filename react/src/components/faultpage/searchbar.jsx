import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeRegistration } from '../../redux/registration';

const SearchBar = () => {

  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch()
  const inputHandler = (event) => setInputText(event.target.value);


 const onSearchSubmit = async (event) => {
  event.preventDefault();

  if (!inputText) {
    alert('Please enter a valid registration number');
    return;
  } else {
    dispatch(changeRegistration(inputText))


  }
};

  return (
    <div className='search-bar-cont' data-testid="SearchBar">
      <form className="search-input-box-form" onSubmit={(event) => onSearchSubmit(event)}>
        <label>
          <input
            className='fault-search-input'
            type="text"
            value={inputText}
            placeholder="Enter a registration number..."
            onChange={(event) => inputHandler(event)}
          />
          <input className='sub-btn' type="submit" data-testid="Submit-button" value="Search"/>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
