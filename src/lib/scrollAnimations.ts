// Scroll animation utility functions
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .stagger-animate'
  );

  animatedElements.forEach((el) => observer.observe(el));

  return () => {
    animatedElements.forEach((el) => observer.unobserve(el));
  };
};

// Utility function to add scroll animations to elements
export const addScrollAnimation = (element: HTMLElement, animationType: string = 'scroll-animate') => {
  element.classList.add(animationType);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  observer.observe(element);
  
  return () => observer.unobserve(element);
};

// Staggered animation for lists
export const initStaggeredAnimations = () => {
  const staggerElements = document.querySelectorAll('.stagger-animate');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  staggerElements.forEach((el) => observer.observe(el));
  
  return () => {
    staggerElements.forEach((el) => observer.unobserve(el));
  };
};
