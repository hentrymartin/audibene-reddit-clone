import React, { useEffect, useReducer } from 'react';
import { useStyles } from './PostDetails.styles';
import { getScore, getCommentsCount } from '../../utils';
import CommentsList from '../../components/CommentsList';
import PostContent from '../../components/PostContent';
import { Constants } from '../../constants';
import { reducer, Actions } from './reducer';
import Spinner from '../../components/Spinner';
import { getItem } from '../../utils/localStorage';

const initialState = {
  showComments: true,
  postDetails: {},
  isLoading: true,
  commentsCount: 0,
};

/**
 * PostDetails page is associated with /post-details route.
 * It gets the postDetails object from the server and show it in the UI.
 */
const PostDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { postDetails, showComments, isLoading, commentsCount } = state;
  const {
    id,
    comments,
    title,
    score,
    subreddit_name_prefixed: subRedditName
  } = postDetails || {};
  const styles = useStyles();

  const getPostDetails = () => {

    dispatch({
      type: Actions.SET_LOADING,
      isLoading: true,
    });

    fetch(`${Constants.SERVER_URL}/post-details`)
    .then(res => res.json())
    .then(postDetails => {
      dispatch({
        type: Actions.SET_POST_DETAILS,
        postDetails,
      });
    });
  };

  const onCommentListUpdated = (organizedComments) => {
    const deletedComments = getItem(id) || [];
    const commentsCount = getCommentsCount(organizedComments, deletedComments);
    dispatch({
      type: Actions.SET_COMMENTS_COUNT,
      commentsCount,
    });
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  const onShowComments = () => {
    dispatch({
      type: Actions.TOGGLE_SHOW_COMMENTS,
      showComments: !showComments,
    });
  };

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className={styles.postDetailsWrapper} data-testid="post-detail-page">
      <div className={styles.redditName}>{subRedditName}</div>
      <div className={styles.header}>
        <span className={styles.score}>{getScore(score)}</span>
        <span>
          <h4 className={styles.title}>{title}</h4>
        </span>
      </div>
      
      <PostContent
        postDetails={postDetails}
        onShowComments={onShowComments}
        commentsCount={commentsCount}
      />
      
      <CommentsList
        postId={id}
        comments={comments}
        showComments={showComments}
        onCommentListUpdated={onCommentListUpdated}
      />
    </div>
  )
};

export default PostDetails;
