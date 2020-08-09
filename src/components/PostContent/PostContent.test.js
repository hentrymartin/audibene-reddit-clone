import React from 'react';
import PostContent from '.';
import { render, fireEvent } from '@testing-library/react';
import { postDetails } from '../../mocks/mock';

describe('Post Content Component', () => {
  const { comments } = postDetails;
  const onShowComments = jest.fn();

  it('Check for comments count', () => {
    const { getByText } = render(<PostContent postDetails={postDetails} onShowComments={onShowComments} />);
    expect(getByText(`${comments.length} comments`)).toBeInTheDocument();
  });

  it('Check if onShowComment is called', () => {
    const { getByTestId } = render(<PostContent postDetails={postDetails} onShowComments={onShowComments} />);
    const commentsCountWrapper = getByTestId('comments-count');

    fireEvent(commentsCountWrapper, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    expect(onShowComments).toBeCalled();
  });
});
