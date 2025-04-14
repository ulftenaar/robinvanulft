
function setup (){
    noCursor();
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('sketch3d');  // Attach canvas to the div
    canvas.style('position', 'fixed');  // Ensure canvas is fixed
    canvas.style('top', '0');  // Align the canvas to the top of the page
    canvas.style('left', '0');  // Align the canvas to the left of the page
    canvas.style('z-index', '-1');  // Put the canvas behind the content

}

function draw() {
ellipse(30, 30, 30);

}
