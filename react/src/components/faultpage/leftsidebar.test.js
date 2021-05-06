import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { useDispatch } from "react-redux";

import LeftSidebar from './leftsidebar';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => {}),
}));

const setLink = jest.fn();
// const setIntro = jest.fn();

beforeEach(() => {
  // render(<LeftSidebar setLinkType={setLink} />);
  jest.clearAllMocks();
})

test('Should render elements', () => {
  render(<LeftSidebar setLinkType={setLink} />);

  expect(screen.getByTestId("LeftSideBar")).toBeInTheDocument();
  expect(screen.getByRole("link", {name: 'Home'})).toHaveTextContent('Home');
  expect(screen.getByRole("link", {name: 'Log a fault'})).toHaveTextContent('Log a fault');
  expect(screen.getByRole("link", {name: 'About'})).toHaveTextContent('About');
  expect(screen.getByRole("link", {name: 'Contact Us'})).toHaveTextContent('Contact Us');
  expect(screen.getByRole("link", {name: 'Report a problem'})).toHaveTextContent('Report a problem');
})

test('Button Home working', () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
  render(<LeftSidebar setLinkType={setLink} />);

  const button = screen.getByRole("link", {name: 'Home'});

  userEvent.click(button);

  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith({"payload": undefined, "type": "introPage/change"});
})

test('Button Log a fault working', () => {
  render(<LeftSidebar setLinkType={setLink} />);

  const button = screen.getByRole("link", {name: 'Log a fault'});

  userEvent.click(button);

  expect(setLink).toHaveBeenCalledTimes(1);
  expect(setLink).toHaveBeenCalledWith('log');
})

test('Button About working', () => {
  render(<LeftSidebar setLinkType={setLink} />);

  const button = screen.getByRole("link", {name: 'About'});

  userEvent.click(button);

  expect(setLink).toHaveBeenCalledTimes(1);
  expect(setLink).toHaveBeenCalledWith('about');
})

test('Button Contact Us working', () => {
  render(<LeftSidebar setLinkType={setLink} />);

  const button = screen.getByRole("link", {name: 'Contact Us'});

  userEvent.click(button);

  expect(setLink).toHaveBeenCalledTimes(1);
  expect(setLink).toHaveBeenCalledWith('contact');
})

test('Button Report a problem working', () => {
  render(<LeftSidebar setLinkType={setLink} />);

  const button = screen.getByRole("link", {name: 'Report a problem'});

  userEvent.click(button);

  expect(setLink).toHaveBeenCalledTimes(1);
  expect(setLink).toHaveBeenCalledWith('report');
})