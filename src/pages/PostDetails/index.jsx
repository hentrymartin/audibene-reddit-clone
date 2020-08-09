import React, { useEffect, useReducer } from 'react';
import { useStyles } from './PostDetails.styles';
import { getScore } from '../../utils';
import CommentsList from '../../components/CommentsList';
import PostContent from '../../components/PostContent';
import { Constants } from '../../constants';
import { reducer, Actions } from './reducer';
import Spinner from '../../components/Spinner';

const initialState = {
  showComments: true,
  postDetails: {},
  isLoading: true,
};

const PostDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { postDetails, showComments, isLoading } = state;
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
      
      <PostContent postDetails={postDetails} onShowComments={onShowComments} />
      
      <CommentsList
        postId={id}
        comments={comments}
        showComments={showComments}
      />
    </div>
  )
};

export default PostDetails;
