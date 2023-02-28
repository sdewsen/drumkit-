window.addEventListener("keydown", DrumKit);
window.addEventListener("keyup", (event) => {
  const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
  div.classList.remove("playing");
});

function DrumKit(event) {
  const keyCodesValidos = [65, 83, 68, 70, 71, 72, 74, 75, 76];
  //console.log(event);
  if (!keyCodesValidos.includes(event.keyCode)) {
    return;
  }
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.play();
  const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
  div.classList.add("playing");
}
