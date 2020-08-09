export const Actions = {
  UPDATE_DELETED_COMMENTS: 'UPDATE_DELETED_COMMENTS',
  UPDATE_PROCESSED_COMMENTS: 'UPDATE_PROCESSED_COMMENTS',
};

export const reducer = (state, action) => {
  switch(action.type) {
    case Actions.UPDATE_DELETED_COMMENTS:
      return {
        ...state,
        deletedComments: action.deletedComments,
      };
    case Actions.UPDATE_PROCESSED_COMMENTS:
      return {
        ...state,
        processedComments: action.processedComments,
      };
    default:
      return state;
  }
};
