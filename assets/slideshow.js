customElements.get('slide-show') || customElements.define('slide-show',
  class Slideshow extends HTMLElement {
    constructor () {
      super();
      this.slideIndex = 0;

      this.slides = this.querySelectorAll('.slide');
      this.captionText = this.querySelector('#caption');
      this.thumbnails = this.querySelectorAll('.slide__thumbnail');

      this.thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          this.showSlide(parseInt(thumbnail.dataset.index));
        });
      });

      this.slideBtns = this.querySelectorAll('.slide__control');
      this.slideBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.moveSlide(parseInt(btn.dataset.move));
        });
      });

      
      this.showSlide(this.slideIndex);
    };

    moveSlide (n) {
      this.showSlide(this.slideIndex += n);
    }

    showSlide (n) {
      if (n >= this.slides.length) {
        this.slideIndex = 0;
      }
      else if (n < 0) {
        this.slideIndex = this.slides.length - 1;
      }
      else {
        this.slideIndex = n;
      }

      this.slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      this.thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
      });

      this.slides[this.slideIndex].classList.add('active');
      this.thumbnails[this.slideIndex].classList.add('active');

      this.captionText.innerHTML = this.slides[this.slideIndex].querySelector('img').alt;
    }
  }
)