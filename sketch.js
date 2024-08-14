function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw() {
  background(255);
  
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map(mouseX + mouseY, 0, width + height, 0, 255);
  
  stroke(r, g, b);
  
  for (let i = 0; i < width; i += 20) {
    line(i, 0, i, height);  // Linhas verticais
    line(0, i, width, i);   // Linhas horizontais
  }
}
