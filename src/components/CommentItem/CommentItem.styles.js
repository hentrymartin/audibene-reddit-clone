import { createUseStyles } from "react-jss";
import { CommentStepsPadding } from "../../constants/styles";

export const useStyles = createUseStyles(theme => ({
  commentItemWrapper: {
    borderLeft: ({depth}) => depth > 0 ? `1px solid ${theme.commentBorderLeftColor}` : 'none',
    padding: '10px 0 10px 10px',
    paddingLeft: ({viewport}) => CommentStepsPadding[viewport],
    margin: '10px 0',
    fontSize: 14,
    position: 'relative',
  },
  commentBody: {
    whiteSpace: 'pre-wrap',
  },
  title: {
    fontSize: 12,
    marginBottom: 15,
  },
  deleteIcon: {
    position: 'absolute',
    top: '25px',
    right: 0,
    cursor: 'pointer',
  },
  authorName: {
    color: theme.commentAuthorNameColor,
    marginRight: 15,
    fontSize: 14,
  },
}));
