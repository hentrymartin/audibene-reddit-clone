export const Actions = {
  SET_POST_DETAILS: 'SET_POST_DETAILS',
  TOGGLE_SHOW_COMMENTS: 'TOGGLE_SHOW_COMMENTS',
  SET_LOADING: 'SET_LOADING',
  SET_COMMENTS_COUNT: 'SET_COMMENTS_COUNT',
};

export const reducer = (state, action) => {
  switch(action.type) {
    case Actions.SET_POST_DETAILS:
      return {
        ...state,
        postDetails: action.postDetails,
        isLoading: false,
      };
    case Actions.TOGGLE_SHOW_COMMENTS:
      return {
        ...state,
        showComments: action.showComments,
      };
    case Actions.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case Actions.SET_COMMENTS_COUNT:
      return {
        ...state,
        commentsCount: action.commentsCount,
      };
    default:
      return state;
  }
};
