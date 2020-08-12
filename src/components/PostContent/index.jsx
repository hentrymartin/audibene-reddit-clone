import React from 'react';
import PropTypes from 'prop-types';

import CommentIcon from '../../images/comment.svg';

import { PostContentTypes } from './PostContent.props';
import { useStyles } from './PostContent.styles';
import Icon from '../Icon';

/**
 * PostContent component is used to populate the content(post text and comments count) of the post
 * @param {*} param0 
 */
const PostContent = ({postDetails, onShowComments, commentsCount}) => {
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
        {`${commentsCount} comments`} 
      </div>
    </div>
  );
};

PostContent.propTypes = {
  postDetails: PostContentTypes,
  onShowComments: PropTypes.func,
  commentsCount: PropTypes.number,
};

PostContent.defaultProps = {
  postDetails: {},
  onShowComments: () => {},
  commentsCount: 0,
};

export default PostContent;
