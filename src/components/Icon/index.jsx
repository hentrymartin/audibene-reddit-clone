import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Icon = ({alt, defaultSrc, hoverSrc, ...rest}) => {

  const [src, setSrc] = useState(defaultSrc);

  const onMouseHover = (isMouseIn) => {
    if (!hoverSrc) return;

    if (isMouseIn) {
      setSrc(hoverSrc);
    } else {
      setSrc(defaultSrc);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      onMouseEnter={() => onMouseHover(true)}
      onMouseLeave={() => onMouseHover(false)}
      {...rest}
    />
  );
};

Icon.propTypes = {
  defaultSrc: PropTypes.string,
  hoverSrc: PropTypes.string,
  alt: PropTypes.string,
};

Icon.defaultProps = {
  defaultSrc: '',
  hoverSrc: '',
  alt: '',
};

export default Icon;
