setTimeout(()=> {
  typeWriter("Hello World ", "#intro-text", 0);
}, 500)


function typeWriter(text, container, i) {
  if (i < text.length) {
    document.querySelector(container).innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(text, container, i);
    }, 200);
  }
}
