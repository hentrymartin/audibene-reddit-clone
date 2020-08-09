import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(theme => ({
  dropdownWrapper: {
    position: 'relative',
  },
  dropdownTitle: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelWrapper: {
    fontSize: 13,
    fontWeight: 500,
  },
  list: {
    position: 'absolute',
    top: 45,
    background: 'white',
    zIndex: 10,
    right: 0,
    minWidth: 120,
    boxShadow: theme.postWrapperBoxShadow,
    borderRadius: 4,
    '&:last-child': {
      borderBottom: '1px solid transparent',
    }
  },
  label: {
    padding: 10,
    transition: 'background-color 0.5s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.dropdownListItemColor,
    },
  },
  dropdownIcon: {
    width: 15,
    marginRight: 10,
  },
}));
