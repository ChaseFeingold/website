
  const canvas = document.getElementById(balldrop)
  const ctx = canvas.getContext('2d')


var y = 200;
var dy = 1;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    console.log();
    c.beginpath();
    c.arc(200,y,30,0, Math.PI*2,false);
    c.strokeStyle='blue'
    c.stroke();
    c.fill;
    if (y + radius > innerHeight || x- radius<0){
        dy= -dy
    }
    y +=dy;
}
  requestAnimationFrame(update);
  update();
