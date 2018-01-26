// new p5()
// function setup() {
//   alert("Vue1.vue: setup p5");
//   // createCanvas(640, 360);
//   let canvas = createCanvas(1000, 1000);
//   canvas.parent('p5canvas');
//   background(color(25));
//   draw();
// };
// function draw() {
//     background(0,0,255);
//     fill(255,0,0);
//     ellipse(50,50,100,100); //renders centered :')
// };

var y = 100;
// The statements in the setup() function
// execute once when the program begins
function setup() {
//  createCanvas(720, 400);  // Size must be the first statement
  var cnv = createCanvas(50, 50);
  cnv.parent('p5canvas');
  stroke(255);     // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {
  background(0);   // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
