const widgetContainer = document.getElementById('widget-container');
    const slides = widgetContainer.getElementsByClassName('slide');
    let currentSlide = 0;

    function showSlide(slideIndex) {
      if (slideIndex >= 0 && slideIndex < slides.length) {
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }
        slides[slideIndex].style.display = 'flex';
        currentSlide = slideIndex;
      }
    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
        showNextSlide();
      } else if (event.key === 'ArrowLeft') {
        showPreviousSlide();
      }
    });

    showSlide(0);
