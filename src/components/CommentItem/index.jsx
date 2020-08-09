import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { Comment } from '../CommentsList/CommentList.props';
import { useStyles } from './CommentItem.styles';
import { getScore, onProcessComments } from '../../utils';
import DeleteIcon from '../../images/delete.svg';
import DeleteHoverIcon from '../../images/delete-blue.svg';
import Icon from '../Icon';
import { getItem, setItem } from '../../utils/localStorage';
import { useResponsive } from '../../utils/useResponsive';

const CommentItem = ({comment, postId, onRefreshComments}) => {
  const { id } = comment;
  const { depth } = comment;
  const viewport = useResponsive();
  const styles = useStyles({
    depth,
    viewport,
  });

  const now = dayjs();
  const createdTime = dayjs(comment.created_utc * 1000);

  const onDeleteComment = () => {
    const deletedComments = getItem(postId) || [];
    deletedComments.push(id);
    setItem(postId, deletedComments);
    onRefreshComments();
  };

  const deletedComments = getItem(postId) || [];

  return (
    <div className={styles.commentItemWrapper} data-testid="comment-item">
      <div className={styles.title}>
        <span className={styles.authorName}>{comment.author}</span>
        <span data-testid="score-label">{getScore(comment.ups)}</span>
        <span> - {createdTime.from(now)}</span>
      </div>
      <div className={styles.commentBody}>
        {comment.body}
      </div>
      <Icon
        className={styles.deleteIcon}
        defaultSrc={DeleteIcon}
        hoverSrc={DeleteHoverIcon}
        alt="delete-icon"
        onClick={onDeleteComment}
        data-testid={`delete-icon-${id}`}
      />
      {
        comment.children && onProcessComments(comment.children, deletedComments).map((innerComment) => (
          <CommentItem
            key={innerComment.id}
            comment={innerComment}
            postId={postId}
            onRefreshComments={onRefreshComments}
          />
        ))
      }
    </div>
  );
};

CommentItem.propTypes = {
  comment: Comment,
  postId: PropTypes.string,
  onRefreshComments: PropTypes.func,
};

CommentItem.defaultProps = {
  comment: {},
  postId: '',
  onRefreshComments: () => {},
};

export default CommentItem;
