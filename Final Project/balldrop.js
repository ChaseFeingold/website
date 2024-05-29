
var x = 200;
function animate() {
    requestAnimationFrame(animate);
    console.log();
    c.beginpath();
    c.arc(200,200,30,0, Math.PI*2,false);
    c.strokeStyle='blue'
    c.stroke();
    
}
animate();
