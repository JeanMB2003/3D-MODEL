function preload() {
  objeto = loadModel('tinker.obj');
  img = loadImage('Captura de Tela (1).png')
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  model(objeto);
  orbitControl();
  image(img, 100,100)
}
