export const Actions = {
  UPDATE_DELETED_COMMENTS: 'UPDATE_DELETED_COMMENTS',
  UPDATE_PROCESSED_COMMENTS: 'UPDATE_PROCESSED_COMMENTS',
  SORT_BY_CHANGED: 'SORT_BY_CHANGED',
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
    case Actions.SORT_BY_CHANGED:
      return {
        ...state,
        selectedSortBy: action.selectedSortBy,
      };
    default:
      return state;
  }
};
