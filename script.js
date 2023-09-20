var mouseEvent = "empty";
var lastpostionofx, lastpositionofy;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color = "black";
widthOfLine = 1;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e){
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("width_of_line").value;

  mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e){
   mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e){
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e){
  currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
  currentPositionOfMouseY = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDown"){
    ctx.BeginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("lastpostion.x/y = ");
    console.log("lastpostion.x = " + lastpostionofx + "lastpostion.y = " + lastpositionofy);
    ctx.moveTo(lastpostionofx, lastpositionofy);

    console.log("currentPositionOfMouseX/Y = ")
    console.log("currentpostion.x = " + currentPositionOfMouseX + "currentpostion.y = " + currentPositionOfMouseY)
  }

  lastpostionofx = currentPositionOfMouseX;
  lastpositionofy = currentPositionOfMouseY;
}
