var x=15;
var y=550;
var ball;
var angle;
var t=0;
var g=9.8/100;
var u,an;
var xpos=0,ypos=0;
var invelx,invely;
var time_of_flight;
var range;
var max_height;


function setup(){
    createCanvas(1350,645);
    background(180);
    
    //taking user inputs
    u=prompt('Enter Velocity');
    angle=prompt('Enter Angle');
    
    //calculating vertical and horizontal components of initial velocity
    an=(Math.PI/180)*angle;
    invelx=(u*cos(an))/10;
    invely=(-u*sin(an))/10;
    
    time_of_flight=(2*u*sin(an))/9.8;
    range=u*cos(an)*time_of_flight;
    max_height=(u*u*sin(an)*sin(an))/(2*9.8);
    
    fill(200,4,5);
    text('TIME OF FLIGHT',100,90);
    text(time_of_flight,250,90);
    text('seconds',390,90)
    
    text('HORIZONTAL RANGE',100,110);
    text(range,250,110);
    text('meters',390,110);
    
    text('MAX_HEIGHT',100,130);
    text(max_height,250,130);
    text('meters',390,130);
    
    
}


function draw(){
    
    stroke(0);
    line(0,550,width,550);
    
    fill(0);
    textSize(30);
    text('Graphics Mini Project-->Projectile Simulation',50,50);
    
    

    //updating projectile position
    xpos=x+invelx*t;
    ypos=y+invely*t + 0.5*g*t*t;
    
    fill(255,50,100);
    ellipse(xpos,ypos,10,10);
        
    t=t+1;
    
    
}