// Typewriter effect
setTimeout(()=> {
  typeWriter("Hello World ", "#intro-text", 0);
}, 500)

// Skill progress/efficiency
setProgress();

function setProgress() {
  let progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(progressBar => {
    if (progressBar.checkVisibility())
      progressBar.style.setProperty('--progress', progressBar.getAttribute('data-efficiency'));
  });
}

function typeWriter(text, container, i) {
  if (i < text.length) {
    document.querySelector(container).innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, container, i);
    }, 200);
  }
}
