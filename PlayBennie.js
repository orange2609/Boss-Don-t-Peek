
let pic
let checkX=false
let checkY=false
let isCheck=false
let PlayBennie=0;
function preload(){
  pic = loadImage('07bennie.gif'); //載入圖片
  pic2 = loadImage('07benniebtn big.png'); //載入圖片
}
function setup() {
  myCanvas = createCanvas(1600, 900); 
  centerCanvas(); //執行畫布置中function 
  
}

function draw() {

  storeItem('IsPlayBennie', PlayBennie);//儲存score數值

  image(pic,0,0);
  image(pic2,750,60);
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

  if(mouseX>=803&&mouseX<=910)
  {
    checkX=true;
  }
  else
  {
    checkX=false
  }
  if(mouseY>=103&&mouseY<=317)
  {
    checkY=true;
  }
  else
  {
    checkY=false
  }
  if(checkX&&checkY&&isCheck==false)
    {
      btn1 = createImg("07benniebtn big.png","");
      btn1.position(910,77.5);
      btn1.mousePressed(goPrev);
      isCheck=true
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
  PlayBennie=1;
  window.open('index8.html','_self');
}
