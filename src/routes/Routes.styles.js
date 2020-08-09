import { createUseStyles } from "react-jss";
import { MediaQuery } from "../constants/styles";

export const useStyles = createUseStyles({
  routeWrapper: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: '130px 0',
  },
  [MediaQuery.mobile]: {
    routeWrapper: {
      padding: '0',
    },
  },
})