import React, { useState } from 'react';

interface Props {
  setSearchedReg: (text: string) => void
}

const SearchBar: React.FC<Props> = ({setSearchedReg}) => {

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (event: { target: HTMLInputElement }): void => setInputText(event.target.value);


 const onSearchSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
  event.preventDefault();

  if (!inputText) {
    alert('Please enter a valid registration number');
    return;
  } else {
    setSearchedReg(inputText)


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
