var b = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i++){
    b[i] = new balon();
  }
}

function draw() {
  background(220);
    for (var i = 0; i < 100; i++){
  
  b[i].mostrar();
  b[i].mover();
      if(b[i].salirx()){
       b[i].rebotarx();
      }
      if(b[i].saliry()){
       b[i].rebotary();
      }
    }
}
