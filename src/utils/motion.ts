// Animation variants for Framer Motion
export const fadeIn = (direction: string, delay: number) => {
    return {
      hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.8,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
    return {
      hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: 'easeOut',
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren: number, delayChildren: number) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren,
          delayChildren,
        },
      },
    };
  };