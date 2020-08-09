import React from 'react';
import Loader from 'react-loader-spinner'
import { Theme } from '../../constants/theme';

const Spinner = () => {
  return (
    <Loader
	     type="BallTriangle"
	     color={Theme.spinnerColor}
	     height={50}
	     width={50}
       timeout={3000}
       data-testid="spinner"
	  />
  );
};

export default Spinner;
