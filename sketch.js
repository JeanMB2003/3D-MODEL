let randomText;

function setup() {
  createCanvas(400, 400);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  noLoop();
  
  let words = ["Criatividade", "Inovação", "Exploração", "Aleatoriedade", "Tecnologia", "Desafio"];
  let randomIndex = int(random(words.length));
  randomText = words[randomIndex];
}

function draw() {
  background(0);
  text(randomText, width / 2, height / 2);
}
