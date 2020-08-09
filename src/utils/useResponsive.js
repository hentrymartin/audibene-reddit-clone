import { useState, useEffect } from "react";
import { debounce } from "./debounce";

export const getViewport = () => {
  if (window.innerWidth < 768) {
		return 'MOBILE';
	}
	if (window.innerWidth < 1024) {
		return 'TABLET';
	}
	return 'DESKTOP';
};

/**
 * Custom hook to get the current viewport on window resize.
 */
export const useResponsive = () => {
  const [viewport, setViewport] = useState(getViewport());

  const onResize = debounce(() => {
    setViewport(getViewport());
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return viewport;
};
