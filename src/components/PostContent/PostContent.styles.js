import { createUseStyles } from 'react-jss';
import { MediaQuery } from '../../constants/styles';

export const useStyles = createUseStyles(theme => ({
  postDetailsText: {
    whiteSpace: 'pre-wrap',
    borderRadius: 12,
    backgroundColor: theme.postBackgroundColor,
    padding: '20px 40px',
    color: theme.postTextColor,
    fontSize: 14,
    lineHeight: '20px',
  },
  commentsCount: {
    marginTop: 20,
    color: theme.commentsCountColor,
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.5s color',
    '&:hover': {
      color: theme.commentsCountHoverColor,
    }
  },
  commentIcon: {
    marginRight: 15,
  },
  [MediaQuery.mobile]: {
    postDetailsText: {
      padding: '20px',
    },
  },
}));
