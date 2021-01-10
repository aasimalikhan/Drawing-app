const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clrscr = document.getElementById("clear");
const sizeemt = document.getElementById("size");
const coloremt = document.getElementById("color");
const pen= document.getElementById("pen");
const erase= document.getElementById("eraser");

var mode="pen";

const ctx = canvas.getContext("2d");
// var data = canvas.toDataURL('image/png');
// window.open(data);
let size = 20;
let opacity = '1';
let x = undefined;
let y =undefined;

let isPressed = false;
let color='black';
canvas.addEventListener('mousedown', () => {
  isPressed = true;
  x=e.offsetX;
  y=e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;
  x = undefined;
  y=undefined;
});
canvas.addEventListener('mousemove',(e) => {
  if(isPressed){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    if(mode=="pen")
    {
      pen.style = 'background-color: #f2d9ff;'
      erase.style = 'background-color: white'
      ctx.fillStyle
      ctx.globalCompositeOperation="source-over";
      drawLine(x,y,x2,y2);
      drawCircle(x2,y2);
    }
    else{
      erase.style = 'background-color: #f2d9ff'
      pen.style = 'background-color: white'
      ctx.globalCompositeOperation="destination-out";
      drawLine(x,y,x2,y2);
      drawCircle(x2,y2);

    }
    
    
    x = x2;
    y = y2;

  }
});



function drawCircle(x, y){

  ctx.beginPath();
  
  
    ctx.arc(x,y,size/2,0,Math.PI * 2);
    ctx.fillStyle = color;

    ctx.fill();
 
}

function drawLine(x1,y1,x2,y2)
{
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  
  ctx.stroke();

}
pen.addEventListener('click', ()=> {
  mode="pen";
});
eraser.addEventListener('click', ()=> {
  mode="eraser";
});

increaseBtn.addEventListener('click', () => {
  size = size + 5;
  if(size>=50)
  {
    size = 50;
  }
  updateSizeonScreen();
});

decreaseBtn.addEventListener('click', () => {
  size= size - 5;
  if(size<5)
  {
    size = 5;
  }
  updateSizeonScreen();
});

clrscr.addEventListener('click', () =>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

coloremt.addEventListener('change', (e) =>{
  color = e.target.value;
})


function updateSizeonScreen() {
  sizeemt.innerText = size;
}



// drawCircle(100, 50);

// function draw(){
//   ctx.clearRect(0,0,canvas.client.width,canvas.height);


//   drawCircle(x,y);
//   requestAnimationFrame(draw);

// }

// draw();