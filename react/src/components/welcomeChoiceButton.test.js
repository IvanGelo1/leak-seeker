import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import WelcomeChoiceButton from './welcomechoicebutton';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const setReg = jest.fn();
beforeEach(() => {
  jest.clearAllMocks();
})

describe('should render', () => {
  test('should render the components container element', () => {
    render(<WelcomeChoiceButton/>)
    expect(screen.getByTestId('welcomeChoiceBtnMain')).toBeInTheDocument()
  });
  test('searchfaults button should render', () => {
    render(<WelcomeChoiceButton searchType={"Search Faults"}/>)
    expect(screen.getByRole("link",{name: 'Search Faults'})).toBeInTheDocument()
  });

  test('register faults button should render', () => {
    render(<WelcomeChoiceButton searchType={"Register Fault"}/>)
    expect(screen.getByRole("link",{name: 'Register Fault'})).toBeInTheDocument()
  });
})

describe('button', () => {
  test('search faults button is clicked', () => {
    render(<WelcomeChoiceButton setSearchedReg={setReg}  searchType={"Search Faults"}/>)
    userEvent.click(screen.queryByTestId('searchbtn'))
    const input = screen.getByPlaceholderText('Enter a registration number...');
    userEvent.type(input, 'test')
    expect(input).toHaveValue('TEST')
    expect(screen.getByText('Your reg:'))
    expect(screen.getByTestId('paragraph')).toHaveTextContent('TEST')
    const submitBtn = (screen.getByText('Submit'))
    userEvent.click(submitBtn);
    expect(setReg).toHaveBeenCalledTimes(1);
    expect(setReg).toHaveBeenCalledWith('TEST');
  })

  test('register faults button is clicked', () => {
    render(<WelcomeChoiceButton setIntroPage={setReg} searchType={"Register Fault"}/>)
    userEvent.click(screen.getByTestId('searchbtn'))
    const registrationInput = screen.getByPlaceholderText('Enter your registration number...')
    const brandInput = screen.getByPlaceholderText('Enter your vehicles manufacturer...')
    expect(registrationInput).toBeInTheDocument();
    expect(brandInput).toBeInTheDocument();
    userEvent.type(registrationInput, 'test')
    userEvent.type(brandInput, 'test')
    expect(registrationInput).toHaveValue('TEST');
    expect(brandInput).toHaveValue('TEST');
    expect(screen.getByLabelText('Registration:')).toBeInTheDocument();
    expect(screen.getByLabelText('Make/ Brand:')).toBeInTheDocument();
    const registerSubmitBtn = (screen.getByTestId('registerBtn'));
    userEvent.click(registerSubmitBtn)
    expect(setReg).toHaveBeenCalledTimes(1)
    expect(setReg).toHaveBeenCalledWith(false);
  })
})
