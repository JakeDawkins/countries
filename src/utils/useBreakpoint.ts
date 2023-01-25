import { useEffect, useState } from 'react';

const breakpoints = {
  0: 'xs',
  640: 'sm',
  768: 'md',
  1024: 'lg',
  1280: 'xl',
};

const useBreakpoint = (): string => {
  const [breakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const handleResize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    if (windowSize?.width && windowSize?.height) {
      if (windowSize.width > 0 && windowSize.width < 640) {
        setBreakPoint(breakpoints[0]);
      }
      if (windowSize.width > 640 && windowSize.width < 768) {
        setBreakPoint(breakpoints[640]);
      }
      if (windowSize.width > 768 && windowSize.width < 1024) {
        setBreakPoint(breakpoints[768]);
      }
      if (windowSize.width > 1024 && windowSize.width < 1280) {
        setBreakPoint(breakpoints[1024]);
      }
      if (windowSize.width >= 1280) {
        setBreakPoint(breakpoints[1280]);
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
