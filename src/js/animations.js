function animations() {
  const observedElements = new Set();

  const animations = document.querySelectorAll(".animate");

  if (animations.length > 0) {
    let lastScrollY = 0;

    /* Observer */
    const triggerAnim = (entries) => {
      entries.forEach((entry) => {
        const delay = entry.target.dataset.delay || 0;
        const speed = entry.target.dataset.speed+"s" || '1s';
        const once = entry.target.dataset.once ?? "false"; // false 

        if (entry.isIntersecting || entry.target.classList.contains('force-anim')) {
          setTimeout(() => {
            entry.target.style.animationDuration = speed;
            entry.target.classList.add('anim-on');
            if (once === "true") {
              observedElements.add(entry.target);
            }
          }, delay);
        } else {
          if (once !== 'true') {
            entry.target.classList.remove('anim-on');
          }
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    };

    const observer = new IntersectionObserver(triggerAnim, options);

    window.addEventListener('scroll', () => {
      lastScrollY = window.scrollY;
    });

    animations.forEach(element => {
      observer.observe(element);
    });

    // Trigger animations for elements with .force-anim class on page load
    document.querySelectorAll('.force-anim').forEach(element => {
      const delay = element.dataset.delay || 0;
      const speed = element.dataset.speed+"s" || '1s';
      setTimeout(() => {
        element.style.animationDuration = speed;
        element.classList.add('anim-on');
      }, delay);
    });
  }
}

export default animations;
