let canvas = document.getElementsByTagName('canvas')[0];
let ctx = canvas.getContext("2d");

ctx.lineWidth = 15;
for(let i = 0; i<3; i++){
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, 150);
    ctx.lineTo(80, 80);
    ctx.lineTo(150, 150);
    ctx.lineTo(150, 10);
    ctx.stroke();
    ctx.translate(170,0);
}