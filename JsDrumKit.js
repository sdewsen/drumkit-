window.addEventListener("keydown", DrumKit);

function DrumKit(event) {
  const teclasValidas = ["65", "83", "68", "F", "G", "H", "J", "K", "L"];
  //console.log(event);
  teclasValidas.includes(event.keyCode);
}
