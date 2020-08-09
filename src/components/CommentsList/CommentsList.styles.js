import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  commentsListWrapper: {
    marginLeft: 0,
    display: ({showComments}) => showComments ? 'block' : 'none',
    position: 'relative',
  },
  dropdownWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '10px 0',
  },
  resetButton: {
    position: 'absolute',
    right: '0px',
    bottom: '-45px',
  },
});
