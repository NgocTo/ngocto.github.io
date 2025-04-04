// Typewriter effect
let introText = document.querySelector("#intro-text");
if (introText != undefined) {
  setTimeout(()=> {
    typeWriter("Hello World ", introText, 0);
  }, 500)
}

// Skill progress/efficiency
setProgress();


// Show/hide project description
const tabTriggers = document.querySelectorAll('.tab__link');
if (tabTriggers.length > 0) {
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const container = this.parentNode.parentNode;
      const tabContents = container.querySelectorAll('.tab__content');
      tabContents.forEach(tab => {
        tab.classList.remove('active');
      });

      tabTriggers.forEach(trigger => {
        trigger.classList.remove('active');
      })

      let target = trigger.dataset.trigger;
      let tabContent = container.querySelector(`.tab__content[data-target=${target}]`);
        tabContent.classList.add('active');
        trigger.classList.add('active');
    });
  });
}

// Scroll animation
let progressBar = document.querySelector('.timeline__progress');
let progressPoint = document.querySelector('.timeline__point');
if (progressBar != undefined) {
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progressHeight = (scrollTop / docHeight) * 100;

    // Update the progress
    progressBar.style.height = `${progressHeight}%`;
    progressPoint.style.top = `${progressHeight}%`;
  });
}

function setProgress() {
  let progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(progressBar => {
    if (progressBar.checkVisibility())
      progressBar.style.setProperty('--progress', progressBar.getAttribute('data-efficiency'));
  });
}

function typeWriter(text, container, i) {
  if (i < text.length) {
    container.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, container, i);
    }, 200);
  }
}
