import gsap from 'gsap';

/**
 * Animates the model rotation and DOM elements using GSAP timeline.
 * 
 * @param {gsap.core.Timeline} timeline - The GSAP timeline instance.
 * @param {React.RefObject} rotationRef - Ref to the 3D object whose rotation will be animated.
 * @param {number} rotationState - The target Y-axis rotation (in radians).
 * @param {HTMLElement} firstTarget - The first DOM element to animate.
 * @param {HTMLElement} secondTarget - The second DOM element to animate.
 * @param {Object} animationProps - GSAP animation properties to apply to both DOM targets.
 */
export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  if (!rotationRef?.current) {
    console.warn('rotationRef is undefined or not attached.');
    return;
  }

  // Animate 3D model rotation
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  // Animate the first and second DOM targets in sync
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<' // Start at the same time as the previous animation
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );
};
