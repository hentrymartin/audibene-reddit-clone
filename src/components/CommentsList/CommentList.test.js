import React from 'react';
import { cleanup, fireEvent, act } from '@testing-library/react';

import CommentList from '.';
import { renderWithRouter } from '../../utils/testing';
import { postDetails } from '../../mocks/mock';

describe('Comment List Component', () => {

  afterEach(cleanup);

  it('Check for the number of comment items', () => {
    const { comments, id: postId } = postDetails;
    const { getAllByTestId } = renderWithRouter(<CommentList comments={comments} showComments={true} postId={postId} />);

    const commentItems = getAllByTestId('comment-item');

    expect(commentItems.length).toBe(comments.length);
  });

  it('Check for the comment items count after deleting a comment', async () => {
    const { comments, id: postId } = postDetails;
    const { queryAllByTestId, getByTestId } = await renderWithRouter(<CommentList comments={comments} showComments={true} postId={postId} />);
    const firstComment = comments[0];

    const deleteIcon = getByTestId(`delete-icon-${firstComment.id}`);

    fireEvent(deleteIcon, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    const commentItems = queryAllByTestId('comment-item');

    expect(commentItems.length).toBe(comments.length - 1);

    // This is to reset the deleted comments
    act(() => {
      const resetButton = getByTestId('reset-button');

      fireEvent(resetButton, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    });
  });

  it('Check for the comment items count after deleting a comment', async () => {
    const { comments, id: postId } = postDetails;
    const { queryAllByTestId, getByTestId } = renderWithRouter(<CommentList comments={comments} showComments={true} postId={postId} />);

    const firstComment = comments[0];

    const deleteIcon = getByTestId(`delete-icon-${firstComment.id}`);

    await fireEvent(deleteIcon, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    act(() => {
      const resetButton = getByTestId('reset-button');

      fireEvent(resetButton, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));

      const commentItems = queryAllByTestId('comment-item');

      expect(commentItems.length).toBe(comments.length - 1);
    });
  });
});