import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ThemeProvider } from 'react-jss';

import Routes from './routes';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Theme } from './constants/theme';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  )
};

export default App;
