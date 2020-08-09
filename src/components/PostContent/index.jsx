import React from 'react';
import PropTypes from 'prop-types';

import CommentIcon from '../../images/comment.svg';

import { PostContentTypes } from './PostContent.props';
import { useStyles } from './PostContent.styles';
import Icon from '../Icon';

const PostContent = ({postDetails, onShowComments}) => {
  const styles = useStyles();
  return (
    <div className={styles.postDetailsText}>
      {postDetails.selftext}
      <div className={styles.commentsCount} onClick={onShowComments} data-testid="comments-count">
        <Icon
          className={styles.commentIcon}
          alt="comment-icon"
          defaultSrc={CommentIcon}
        />
        {`${postDetails.comments && postDetails.comments.length} comments`} 
      </div>
    </div>
  );
};

PostContent.propTypes = {
  postDetails: PostContentTypes,
  onShowComments: PropTypes.func,
};

PostContent.defaultProps = {
  postDetails: {},
  onShowComments: () => {},
};

export default PostContent;
