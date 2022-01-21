
let pic
let checkX=false
let checkY=false
let isCheck=false
let PlayMonica=0;
function preload(){
  pic = loadImage('07monica.gif'); //載入圖片
  pic2 = loadImage('07monicabtn big.png'); //載入圖片
}
function setup() {
  myCanvas = createCanvas(1600, 900); 
  centerCanvas(); //執行畫布置中function 
  
}

function draw() {

  storeItem('IsPlayMonica', PlayMonica);//儲存score數值

  image(pic,0,0);
  image(pic2,1000,80);
  noStroke();
  
  
  for(let x=centerX-300; x<width; x+=15)
  { 
    for(let y=centerY-200;y<height; y+=15)
    {
      let d = dist(mouseX,mouseY,x,y);
      let w = map(d,0,100,0,50);
      let t = map(d,0,100,0,10);
      fill(0,0,0,6);
      rect(x,y,w,w);
    }
  }
  text('Score : '+mouseX,centerX,centerY);
  text('Score : '+mouseY,centerX,centerY+20);
  text('Score : '+checkX,centerX,centerY+40);
  text('Score : '+checkY,centerX,centerY+60);
  if(mouseX>=1086&&mouseX<=1265)
  {
    checkX=true;
  }
  else
  {
    checkX=false
  }
  if(mouseY>=139&&mouseY<=422)
  {
    checkY=true;
  }
  else
  {
    checkY=false
  }
  if(checkX&&checkY&&isCheck==false)
    {
      btn1 = createImg("07monicabtn big.png","");
      btn1.position(1160,96);
      btn1.mousePressed(goPrev);
      isCheck=true
      PlayMonica=1;
    }
}

let myCanvas; //宣告畫布變數
//畫布置中function設置
function centerCanvas()  {
  centerX = windowWidth/2 - width/2;   
  centerY = windowHeight/2 - height/2; 
  myCanvas.position(centerX,centerY); 
}
function goPrev(){
  window.open('index4.html','_self');
}
