import { useEffect, useState, useRef } from 'react';

export const useInView = (options = { threshold: 0.2, triggerOnce: true }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) {
            observer.disconnect();
          }
        } else {
          if (!options.triggerOnce) {
            setInView(false);
          }
        }
      },
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView];
};
