class Cannon{
     constructor(x,y,w,h,angle){
     this.x = x
     this.y = y
     this.w = w
     this.h = h
     this.angle = angle
     }
     display(){

      if(keyIsDown(LEFT_ARROW)&& this.angle>-1.45 ){
         //this.angle =this.angle-0.02
         this.angle -= 0.02
      }
      if(keyIsDown(RIGHT_ARROW)&&this.angle <0.35 ){
         this.angle += 0.02 
      }
      console.log(this.angle)

        fill('#676e6a')
       push()
    translate(this.x,this.y)
    rotate(this.angle);
        rect(-10,-20,this.w,this.h);

        pop()
        arc(this.x-30,this.y+90,120,200,PI,TWO_PI);//2*PI = TWO_PI
        noFill();
     }
   }