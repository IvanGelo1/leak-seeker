import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import RightDataDisplay from './rightdatadisplay';
import ResizeObserver from './ResizeObserver';

import { createStore } from 'redux';
import store from '../../redux/store.ts'
import { change } from '../../redux/introPage';
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux';

jest.mock('../../redux/introPage', () => {
  return {
    change: jest.fn()
  }
})

const withStore = ({ child }) => {
  // const store = createStore({reducer: {}, {initialState: state}})

  return <Provider store={store}>{child}</Provider>
}

// const allFaultsObject= [{faults:['test1','test2','test3']}]
beforeEach(() => {
  // render(withStore(<RightDataDisplay />));
  render(<Provider store={store}><RightDataDisplay /></Provider>)
  // render(<RightDataDisplay  allFaultsObject={allFaultsObject} />)
})

// expect(change).toHaveBeenCalledWith

describe('component should render',() => {
  test('mainContainer', () => {
    // const allFaultsObject= [{faults:['test1','test2','test3']}]

    // render(<Provider store={store}><RightDataDisplay /></Provider>)

    expect(screen.getByTestId('rightDataDisplayContainer')).toBeInTheDocument();
  })

  test('problem areas', () => {
    expect(screen.getByText('Problem areas')).toBeInTheDocument();
  })

  test('Average repair price', () => {
    expect(screen.getByText('Average repair price')).toBeInTheDocument();
  })

  test('Number of faults by year', () => {
    expect(screen.getByText('Number of faults by year')).toBeInTheDocument();
  })
})

describe('data should change', () => {

  beforeEach(() => {
  jest.clearAllMocks();
  })

  test('Problem area data should show', () => {
    const problemAreasBtn = (screen.getByText('Problem areas'))
    userEvent.click(problemAreasBtn)
    expect(screen.getByText('Problem area data')).toBeInTheDocument();
  })

  test('Average Repair Price Data should show', () => {
    const averageRepairPriceBtn = (screen.getByText('Average repair price'))
    userEvent.click(averageRepairPriceBtn)
    expect(screen.getByText('Average Repair Price data')).toBeInTheDocument();
  })

  test('Number of faults by year should show', () => {
    const numOfFaultsBtn = (screen.getByTestId('Numberoffaultsbyyear'))
    userEvent.click(numOfFaultsBtn)
    expect(screen.getByText('Faults Sorted By Year data')).toBeInTheDocument();
  })

})
