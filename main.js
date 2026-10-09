function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  if (!slides.length) return;

  let currentSlide = 0;
  let timer = null;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.remove('opacity-0', 'pointer-events-none');
        slide.classList.add('opacity-100');
      } else {
        slide.classList.add('opacity-0', 'pointer-events-none');
        slide.classList.remove('opacity-100');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.remove('bg-gray-200');
        dot.classList.add('bg-[#FF1E43]');
      } else {
        dot.classList.add('bg-gray-200');
        dot.classList.remove('bg-[#FF1E43]');
      }
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4000);
  }

  function stopAutoPlay() {
    if (timer) clearInterval(timer);
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      showSlide(idx);
      startAutoPlay(); // click karne ke baad timer reset ho jayega
    });
  });

  // Pehla slide display confirm karo aur autoplay chalu karo
  showSlide(0);
  startAutoPlay();
}

// DOM load check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}