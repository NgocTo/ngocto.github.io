// Typewriter effect
let introText = document.querySelector("#intro-text");
if (introText != undefined) {
  setTimeout(()=> {
    typeWriter("Hello World ", introText, 0);
  }, 500)
}

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
    container.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, container, i);
    }, 200);
  }
}
