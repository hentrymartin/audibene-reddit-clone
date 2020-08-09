import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  commentsListWrapper: {
    marginLeft: 0,
    display: ({showComments}) => showComments ? 'block' : 'none',
    position: 'relative',
  },
  resetButton: {
    position: 'absolute',
    right: '0px',
    bottom: '-45px',
  },
});
