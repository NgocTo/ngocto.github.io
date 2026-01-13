// Typewriter effect
let introText = document.querySelector("#intro-text");
if (introText != undefined) {
  setTimeout(()=> {
    typeWriter("Hello World ", introText, 0);
  }, 500)
}

// Skill progress/efficiency
setProgress();


// Show/hide category
const categoryTriggers = document.querySelectorAll('.list-circle__item')
const categories = document.querySelectorAll('.project__container');

function showCategory(target) {
  categories.forEach((category) => {
    if (category.dataset.target === target) {
      category.classList.remove('hide');
    } else {
      category.classList.add('hide');
    }
  });
}

categoryTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    let target = trigger.dataset.trigger;
    showCategory(target);
  })
});

// Handle URL hash to show category on page load and hash change
function handleHashChange() {
  let hash = window.location.hash.substring(1);
  if (hash) {
    showCategory(hash);
  }
}

// Show category on page load if hash exists
handleHashChange();

// Listen for hash changes (back/forward buttons, link clicks)
window.addEventListener('hashchange', handleHashChange);


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
