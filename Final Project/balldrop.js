
var y = 200;
var dy = 1;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    console.log();
    c.beginpath();
    c.arc(200,y,30,0, Math.PI*2,false);
    c.strokeStyle='blue'
    c.stroke();
if (y > innerHeight){

 dy= -dy;
}


    y +=dy;



}
animate();
