document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    let index = 0;
    let isAnimating = false;
  
    function scrollToSection(index) {
      const targetPosition = sections[index].offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start = null;
  
      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      if (!isAnimating) {
        requestAnimationFrame(animation);
        isAnimating = true;
        setTimeout(function () {
          isAnimating = false;
        }, duration);
      }
    }
  
    document.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        index = Math.min(index + 1, sections.length - 1);
      } else {
        index = Math.max(index - 1, 0);
      }
      scrollToSection(index);
    });
  });