import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { useDispatch } from "react-redux";


import FaultLogEntry from './faultlogentry';
import { createStore } from 'redux';
import { change } from '../../redux/introPage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => {}),
}));

// jest.mock('../../redux/introPage', () => {
//   return {
//     change: jest.fn()
//   }
// })

// const withStore = (child, state) => {
//   const store = createStore({reducer: {}, {initialState: state}})

//   return <Provider store={store}>{child}</Provider>
// }

const setLink = jest.fn();
beforeEach(() => {
  render(<FaultLogEntry setLinkType={setLink} />)
  // render(withStore(<FaultLogEntry setLinkType={setLink} />, {name: }));
  jest.clearAllMocks();
})

// expect(change).toHaveBeenCalledWith

test('Should render elements', () => {
  expect(screen.getByTestId('FaultLogEntry')).toBeInTheDocument();
  expect(screen.getByText('Reg:')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your registration number...')).toBeInTheDocument();
  expect(screen.getByText('Make:')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter the vehicle manufacturer...')).toBeInTheDocument();
  expect(screen.getByText('Model:')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter the model of your vehicle...')).toBeInTheDocument();
  expect(screen.getByText('Year:')).toBeInTheDocument();
  expect(screen.getAllByRole('spinbutton')).toHaveLength(2);
  expect(screen.getByText('Fault summary:')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('What is the fault?')).toBeInTheDocument();
  expect(screen.getByText('Area of fault:')).toBeInTheDocument();
  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(screen.getByText('Cost to repair: £')).toBeInTheDocument();
  expect(screen.getByText('Fault description:')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Please enter a short description of the fault...')).toBeInTheDocument();
  expect(screen.getByText('Upload images of fault:')).toBeInTheDocument();
  expect(screen.getByTestId('fileInput')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Submit' })).toHaveValue('Submit');
  expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
});

test('Registration form takes user data', () => {
  const input = screen.getByPlaceholderText("Enter your registration number...");

  userEvent.type(input, 'Registration');
  expect(input).toHaveValue('Registration');

});

test('Make form takes user data', () => {
  const input = screen.getByPlaceholderText("Enter the vehicle manufacturer...");

  userEvent.type(input, 'Make');
  expect(input).toHaveValue('Make');

});

test('Model form takes user data', () => {
  const input = screen.getByPlaceholderText("Enter the model of your vehicle...");

  userEvent.type(input, 'Model');
  expect(input).toHaveValue('Model');

});

test('Year form takes user data', () => {
  const input = screen.getByTestId("yearInput");

  userEvent.type(input, '1950');
  expect(input).toHaveValue(1950);

});

test('Fault summary form takes user data', () => {
  const input = screen.getByPlaceholderText("What is the fault?");

  userEvent.type(input, 'Fault summary');
  expect(input).toHaveValue('Fault summary');

});

test('Cost to repair form takes user data', () => {
  const input = screen.getByTestId("repairCost");

  userEvent.type(input, '500');
  expect(input).toHaveValue(500);

});

test('Cost to repair form takes user data', () => {
  const input = screen.getByRole('combobox');

  userEvent.selectOptions(input, ['bodywork']);
  expect(screen.getByRole('option', { name: 'Interior'}).selected).toBe(false);
  expect(screen.getByRole('option', { name: 'Bodywork'}).selected).toBe(true);
  expect(screen.getByRole('option', { name: 'Engine'}).selected).toBe(false);
  expect(screen.getByRole('option', { name: 'Drivetrain'}).selected).toBe(false);
});

test('Fault description textarea takes user data', () => {
  const input = screen.getByPlaceholderText('Please enter a short description of the fault...');

  userEvent.type(input, 'TextArea input place');
  expect(input).toHaveValue('TextArea input place');
});

test('upload file', () => {
  const file = new File(['hello'], 'hello.png', {type: 'image/png'})
  const input = screen.getByLabelText('Upload images of fault:');
  userEvent.upload(input, file)

  expect(input.files[0]).toStrictEqual(file)
  expect(input.files.item(0)).toStrictEqual(file)
  expect(input.files).toHaveLength(1)
});

test('Submit button has expected behaviour', async () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);

  const inputReg = screen.getByPlaceholderText("Enter your registration number...");
  const inputMake = screen.getByPlaceholderText("Enter the vehicle manufacturer...");
  const inputModel = screen.getByPlaceholderText("Enter the model of your vehicle...");
  const submit = screen.getByRole('button', { name: 'Submit' });

  userEvent.type(inputReg, 'Registration');
  userEvent.type(inputMake, 'Make');
  userEvent.type(inputModel, 'Model');

  userEvent.click(submit);

  await waitFor(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({"payload": "Registration", "type": "registrationPage/changeRegistration"})
  });

  expect(screen.getByText('Thank you for submitting a new fault record.')).toBeInTheDocument();
  expect(screen.getByText('Please click the button below to view the record')).toBeInTheDocument();

  const viewRecordBtn = screen.getByRole('button', { name: 'View Record'});
  expect(viewRecordBtn).toBeInTheDocument();

  userEvent.click(viewRecordBtn);

  expect(setLink).toHaveBeenCalledTimes(1);
  expect(setLink).toHaveBeenCalledWith('fault-display');
})