import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchBar from './searchbar';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux'
import store from '../../redux/store.ts'
import { useDispatch } from 'react-redux'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => {}),
}));

beforeEach(() => {
  jest.clearAllMocks();
})

test('Should render SearchBar', () => {
  render(<SearchBar />);

  expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter a registration number..."))
  expect(screen.getByTestId("Submit-button"));
});

test('Should change input value and call the function on submit', () => {

  const dispatch = jest.fn()
  useDispatch.mockReturnValue(dispatch)
  render(<SearchBar />);

  const input = screen.getByPlaceholderText("Enter a registration number...");
  userEvent.type(input, '');

  userEvent.type(input, 'Hello, test');
  expect(input).toHaveValue('Hello, test')

  const button = screen.getByTestId("Submit-button")
  userEvent.click(button);

  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith({"payload": "Hello, test", "type": "registrationPage/changeRegistration"});
})