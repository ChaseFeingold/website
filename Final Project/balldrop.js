c.beginpath();
c.arc(200,200,30,0, Math.PI*2,false);
c.strokeStyle='blue'
c.stroke();


function animate() {
    requestAnimationFrame(animate);
    console.log();

}
animate();
