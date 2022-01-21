let BackPic
let StartPic
function preload(){
  BackPic = loadImage('00.jpg'); //載入圖片

}

function setup() 
{
   myCanvas = createCanvas(1600, 900); 
  centerCanvas(); //執行畫布置中function 
  
}
  function draw() 
{
  image(BackPic,0,0);
  btnNext = createImg("08.gif","");
  btnNext.position(centerX,centerY);
  btnNext.size(1600,900)
  btnNext = createImg("02next.png","");
  btnNext.position(1450,775);
  btnNext.mousePressed(goNext);
}

let myCanvas; //宣告畫布變數
//畫布置中function設置
function centerCanvas()  {
  centerX = windowWidth/2 - width/2;   
  centerY = windowHeight/2 - height/2; 
  myCanvas.position(centerX,centerY); 
}

function windowResized() {
  centerCanvas();
}
  function goNext()
{
  window.open('index9.html','_self');
}