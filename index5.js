let BackPic
let StartPic

let totalPlay
let PlayJacky=0
let PlayHeart=0
let PlayMonica=0
let PlayNotice=0



function preload(){
  BackPic = loadImage('04.jpg'); //載入圖片
  PlayJacky=0;
  PlayHeart=0;
  PlayMonica=0;
  PlayNotice;
}

function setup() 
{
   myCanvas = createCanvas(1600, 900); 
  centerCanvas(); //執行畫布置中function 
  PlayJacky = getItem('IsPlayJacky');//載入score數值
  PlayHeart = getItem('IsPlayHeart');//載入score數值
  PlayMonica = getItem('IsPlayMonica');//載入score數值
  PlaySabrina = getItem('IsPlaySabrina');//載入score數值
}
  function draw() 
{
  storeItem('PlayJacky', PlayJacky);//儲存score數值
  storeItem('PlayHeart', PlayHeart);//儲存score數值
  storeItem('PlayMonica', PlayMonica);//儲存score數值
  storeItem('PlaySabrina', PlaySabrina);//儲存score數值
  
  image(BackPic,0,0);

  btn1 = createImg("06boss big.png","");
  btn1.position(centerX+388,centerY+145.5);
  btn1.size(300,200) //調整按鈕大小

  btn2 = createImg("06Sabrina big.png","");
  btn2.position(centerX+700,centerY+145.5);
  btn2.mousePressed(goSabrina);
  btn2.size(300,200) //調整按鈕大小

  btn2 = createImg("05heart big.png","");
  btn2.position(centerX+396,centerY+369.5);
  btn2.mousePressed(goHeart);
  btn2.size(300,200) //調整按鈕大小

  btn3 = createImg("05Monica big.png","");
  btn3.position(centerX+704,centerY+367.5);
  btn3.mousePressed(goMonica);
  btn3.size(300,200) //調整按鈕大小

  btn3 = createImg("05Jacky big.png","");
  btn3.position(centerX+1010,centerY+367.5);
  btn3.mousePressed(goJacky);
  btn3.size(300,200) //調整按鈕大小

  btn2 = createImg("06Bennie big.png","");
  btn2.position(centerX+1010,centerY+145.5);
  btn2.mousePressed(goBennie);
  btn2.size(300,200) //調整按鈕大小

  

  totalPlay=PlayHeart+PlayJacky+PlayMonica+PlaySabrina;
  
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
  window.open('index5.html','_self');
}
function goJacky()
{
  window.open('PlayJacky.html','_self');
}
function goHeart()
{
  window.open('PlayHeart.html','_self');
}
function goMonica()
{
  window.open('PlayMonica.html','_self');
}
function goSabrina()
{
  window.open('PlaySabrina.html','_self');
}
function goBennie()
{
  window.open('PlayBennie.html','_self');
}