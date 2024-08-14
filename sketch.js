function preload() {
  img = loadImage('Captura de Tela (1).png')
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('blue');
  image(img, 100,100)
}
