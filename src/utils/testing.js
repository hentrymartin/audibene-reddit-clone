import TestingLibrary, { render } from '@testing-library/react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { MemoryRouter } from 'react-router-dom';

/**
 * This function renders component with memory router
 * @param {*} component
 */
export const renderWithRouter = component => {
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  return render(component, {
    wrapper: MemoryRouter,
  });
};

export default TestingLibrary;
