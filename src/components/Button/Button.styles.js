import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(theme => ({
  buttonWrapper: {
    backgroundColor: 'white',
    padding: '5px 20px',
    border: '2px solid black',
    outline: 'transparent',
    cursor: 'pointer',
    transition: 'backgroundColor 0.5s, color 0.5s, border 0.5s',
    '&:hover': {
      backgroundColor: theme.buttonHoverColor,
      color: 'white',
      border: `2px solid ${theme.buttonHoverBorderColor}`,
    },
  },
}));