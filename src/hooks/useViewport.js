import { useState, useEffect } from 'react';
import BREAKPOINTS from '../constants/breakpoints';

const useViewport = (breakpoint = BREAKPOINTS.md) => {
  const value = breakpoint.replace('px', '');

  const [isSmall, setIsSmall] = useState(window.innerWidth < +value);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < +value) {
        return setIsSmall(true);
      }

      if (window.innerWidth > +value) {
        return setIsSmall(false);
      }

      return;
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [value]);
  return { isSmall };
};

export default useViewport;
