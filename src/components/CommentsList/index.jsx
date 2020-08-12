import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { organizeComments, onProcessComments } from '../../utils';
import CommentItem from '../CommentItem';
import { Comment } from './CommentList.props';
import { useStyles } from './CommentsList.styles';
import { getItem, setItem } from '../../utils/localStorage';
import Button from '../Button';
import { reducer, Actions } from './CommenList.reducer';
import Dropdown from '../Dropdown';

const defaultOption = {
  label: 'Latest',
  value: 'latest',
};

const sortOptions = [ defaultOption, {
  label: 'Oldest',
  value: 'oldest',
}];

const initialState = {
  deletedComments: [],
  processedComments: [],
  selectedSortBy: defaultOption,
};
/**
 * This lists the comments in ascending order(with respect to created timestamp)
 * @param {*} param0 
 */
const CommentsList = ({ comments, showComments, postId, onCommentListUpdated }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { processedComments, deletedComments, selectedSortBy } = state;
  const styles = useStyles({
    showComments,
  });

  const intializeCommentsList = () => {
    const organisedComments = organizeComments(comments.concat([]));
    dispatch({
      type: Actions.UPDATE_PROCESSED_COMMENTS,
      processedComments: organisedComments,
    });

    onCommentListUpdated(organisedComments);
  };

  const setDeletedComments = () => {
    const deletedComments = getItem(postId) || [];
    dispatch({
      type: Actions.UPDATE_DELETED_COMMENTS,
      deletedComments,
    });
  };

  useEffect(intializeCommentsList, [comments]);
  useEffect(setDeletedComments, [postId]);

  const onRefreshComments = () => {
    intializeCommentsList(comments);
    setDeletedComments();
  };

  const onResetComments = () => {
    setItem(postId, null);
    dispatch({
      type: Actions.UPDATE_DELETED_COMMENTS,
      deletedComments: [],
    });

    onCommentListUpdated(processedComments);
  };

  const onSelectSortMenu = (selectedSortBy) => {
    dispatch({
      type: Actions.SORT_BY_CHANGED,
      selectedSortBy,
    });
  };

  const filteredComments = onProcessComments(processedComments, deletedComments, selectedSortBy);

  return (
    <div className={styles.commentsListWrapper} data-testid="comments-list-wrapper">
      <div className={styles.dropdownWrapper}>
        <Dropdown
          label="Sort By"
          options={sortOptions}
          defaultOption={defaultOption}
          onSelect={onSelectSortMenu}
        />
      </div>
      {
        filteredComments.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            postId={postId}
            onRefreshComments={onRefreshComments}
            selectedSortBy={selectedSortBy}
          />
        ))
      }

      {
        filteredComments.length === 0 && (
          <div className={styles.emptyText}>Comments list is empty</div>
        )
      }

      {
        deletedComments.length > 0 && (
          <Button
            className={styles.resetButton}
            label="Reset Comments"
            onClick={onResetComments}
            data-testid="reset-button"
          />
        )
      }
    </div>
  );
};

CommentsList.defaultProps = {
  comments: [],
  showComments: true,
  postId: '',
  onCommentListUpdated: () => {},
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(Comment),
  showComments: PropTypes.bool,
  postId: PropTypes.string,
  onCommentListUpdated: PropTypes.func,
};

export default CommentsList;
