customElements.get('n-tab') || customElements.define('n-tab',
  class Tab extends HTMLElement {
    constructor () {
      super();
      this.tabId = '';

      this.tabLinks = this.querySelectorAll('.tab__link');
      this.tabContents = this.querySelectorAll('.tab__content');

      if (this.tabLinks.length > 0) {
        this.tabLinks.forEach(trigger => {
          trigger.addEventListener('click', () => {
            this.tabContents.forEach(tab => {
              tab.classList.remove('active');
            });

            this.tabLinks.forEach(link => {
              link.classList.remove('active');
            })

            this.tabId = trigger.dataset.trigger;

            let tabContent = this.querySelector(`.tab__content[data-target=${this.tabId}]`);
            tabContent.classList.add('active');
            trigger.classList.add('active');
          });
        });
      }
    };
  }
)