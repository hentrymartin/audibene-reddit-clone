import React from 'react';
import { cleanup, fireEvent, within } from '@testing-library/react';

import CommentItem from '.';
import { renderWithRouter } from '../../utils/testing';

describe('Comment Item Component', () => {

  afterEach(cleanup);

  const onRefreshComments = jest.fn();
  const commentItemProps = {
    postId: '124',
    comment: {
      created_utc:1570683149,
      id: '134344',
      depth: 0,
      body: 'Sample comment to test',
      author: 'Hentry Martin',
      ups: 2000,
    },
    onRefreshComments,
  };

  it ('Check it comment item displayed correctly', () => {
    const { getByText } = renderWithRouter(<CommentItem {...commentItemProps} />);
    expect(getByText('Sample comment to test')).toBeInTheDocument();
  });

  it('Check if render icon is clicked', () => {
    const { queryByTestId } = renderWithRouter(<CommentItem {...commentItemProps} />);

    const deleteIcon = queryByTestId(`delete-icon-${commentItemProps.comment.id}`);
    fireEvent(deleteIcon, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    expect(onRefreshComments).toBeCalled();
  });

  it('Check if the scores are rendered correctly', () => {
    const { queryByTestId } = renderWithRouter(<CommentItem {...commentItemProps} />);

    const { getByText } = within(queryByTestId('score-label'));

    expect(getByText('2k')).toBeInTheDocument();
  });
})