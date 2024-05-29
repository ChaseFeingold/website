
var y = 200;
var yx = 1;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    console.log();
    c.beginpath();
    c.arc(200,y,30,0, Math.PI*2,false);
    c.strokeStyle='blue'
    c.stroke();
    y +=1;



}
animate();
