document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  function setSlide(index) {
    currentSlide = index;
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('opacity-0', 'pointer-events-none');
        slide.classList.add('opacity-100');
        dots[i].classList.remove('bg-gray-200');
        dots[i].classList.add('bg-[#FF1E43]');
      } else {
        slide.classList.add('opacity-0', 'pointer-events-none');
        slide.classList.remove('opacity-100');
        dots[i].classList.add('bg-gray-200');
        dots[i].classList.remove('bg-[#FF1E43]');
      }
    });
  }

  // Dot Click Event Listeners
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      setSlide(targetIndex);
    });
  });

  // Auto rotate every 4.5 seconds
  setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    setSlide(next);
  }, 4500);
});