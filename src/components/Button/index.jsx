import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './Button.styles';

const Button = ({ label, onClick, className, ...rest }) => {

  const styles = useStyles();

  return (
    <button className={`${styles.buttonWrapper} ${className}`} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: '',
  onClick: () => {},
  className: '',
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
