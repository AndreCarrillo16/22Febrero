class balon {
  constructor(){
   	this.x1 = 20;
  	this.y1 = 20;
    this.posx = random(0, 400);
    this.posy = random(0, 400);
    this.velx = 2;
    this.vely = 3;
    
  }
  
  mostrar(){
  ellipse(this.posx, this.posy, this.x1, this.y1); 
    fill(150);
  }
  
  mover(){
   	this.posx = this.velx + this.posx;
  	this.posy = this.vely + this.posy;
    
  }
  
  salirx(){
   	var res;
    if(this.posx < 0 || this.posx > width){
     	res = true 
    }
    else{
    	res = false
    }
    return res;
    
  }
  
  saliry(){
    var res;
    if(this.posy < 0 || this.posy > height){
     	res = true 
    }
    else{
    	res = false
    }
    return res;
	}
  
  rebotarx() {
   	this.velx = this.velx * -1; 
  }

    rebotary() {
   	this.vely = this.vely * -1; 
  }
}
