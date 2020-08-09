import React from 'react';
import Dropdown from '.';
import { render, cleanup, fireEvent } from '@testing-library/react';

describe('Dropdown component', () => {
  const defaultOption = {
    label: 'Latest',
    value: 'latest',
  };
  
  const sortOptions = [ defaultOption, {
    label: 'Oldest',
    value: 'oldest',
  }];

  const onSelect = jest.fn();

  beforeEach(cleanup);

  it('Check for default value', () => {
    const { getByText } = render(<Dropdown options={sortOptions} defaultOption={defaultOption} onSelect={onSelect} />)
    expect(getByText(defaultOption.label)).toBeInTheDocument();
  });

  it('Check for onSelect function', () => {
      const { getAllByTestId, getByTestId } = render(<Dropdown options={sortOptions} defaultOption={defaultOption} onSelect={onSelect} />)
      const dropdownValue = getByTestId('dropdown-value');

      fireEvent(dropdownValue, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));

      const dropdownItems = getAllByTestId('dropdown-item');

      fireEvent(dropdownItems[0], new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));

      expect(onSelect).toBeCalled();
  });
});