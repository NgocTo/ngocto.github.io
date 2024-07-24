setTimeout(()=> {
  typeWriter("Hello World ", "#intro-text", 0);
}, 500)

// Set progress value (0 to 1)
function setProgress(value) {
  let progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(progressBar => {
    if (progressBar.checkVisibility())
      progressBar.style.setProperty('--progress', progressBar.getAttribute('data-efficiency'));
  });
}

// Example: Set progress to 75%

setProgress(0.75);

function typeWriter(text, container, i) {
  if (i < text.length) {
    document.querySelector(container).innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, container, i);
    }, 200);
  }
}
