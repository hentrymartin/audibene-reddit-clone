import { createUseStyles } from 'react-jss';
import { MediaQuery } from '../../constants/styles';

export const useStyles = createUseStyles(theme => ({
  postDetailsWrapper: {
    padding: '30px 80px 60px 80px',
    backgroundColor: theme.postDetailsBackgroundColor,
    boxShadow: theme.postWrapperBoxShadow,
    borderRadius: 5,
  },
  redditName: {
    color: theme.redditNameColor,
    fontSize: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '15px 0',
  },
  title: {
    fontSize: 20,
    letterSpacing: 2,
    margin: '0 20px',
  },
  score: {
    color: theme.scoreColor,
    fontSize: 16,
  },
  [MediaQuery.mobile]: {
    postDetailsWrapper: {
      padding: '30px 10px 60px 10px',
      boxShadow: 'none',
      borderRadius: 0,
    },
    title: {
      fontSize: 14,
    },
    score: {
      fontSize: 14,
    }
  },
}));
