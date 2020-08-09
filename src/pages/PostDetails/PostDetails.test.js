import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, wait, act } from '@testing-library/react';

import PostDetails from '.';
import { renderWithRouter } from '../../utils/testing';
import { Constants } from '../../constants';
import { postDetails } from '../../mocks/mock';

const server = setupServer(
  rest.get(`${Constants.SERVER_URL}/post-details`, (req, res, ctx) => {
    return res(ctx.json(postDetails));
  }),
);

// List and close the mock server on start and end of the test case execution
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Post Details component', () => {
  it('Check if comments list is shown', async () => {
    const { getByTestId } = renderWithRouter(<PostDetails />);
    await wait(() => expect(getByTestId('comments-count')).toBeInTheDocument());
    const commentsListWrapper = getByTestId('comments-list-wrapper');
    expect(commentsListWrapper).toBeVisible();
  });

  it('Check if comments list is hidden, after the counts wrapper is clicked', async () => {
    const { getByTestId } = renderWithRouter(<PostDetails />);
    await wait(() => expect(getByTestId('comments-count')).toBeInTheDocument());
    const commentsCount = getByTestId('comments-count');

    await fireEvent(commentsCount, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    act(() => {
      const commentsListWrapper = getByTestId('comments-list-wrapper');
      expect(commentsListWrapper).not.toBeVisible();
    });
  });
});
