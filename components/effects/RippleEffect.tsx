import { useEffect } from 'react';

const RippleEffect = () => {
  useEffect(() => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    document.body.appendChild(ripple);

    // Trigger animation
    setTimeout(() => {
      ripple.classList.add('animate');
    }, 100);

    // Clean up
    return () => {
      document.body.removeChild(ripple);
    };
  }, []);

  return null;
};

export default RippleEffect; 