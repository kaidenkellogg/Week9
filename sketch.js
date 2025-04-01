function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    // Title
    textSize(16);
    textAlign(CENTER);
    text("Self-Portrait", width / 2, 30);
    
    // Head (Ellipse)
    ellipse(200, 200, 150, 180);
    
    // Eyes (Circles)
    ellipse(170, 180, 30, 20);
    ellipse(230, 180, 30, 20);
    
    // Pupils (Circles)
    ellipse(170, 180, 10, 10);
    ellipse(230, 180, 10, 10);
    
    // Nose (Triangle)
    triangle(195, 190, 205, 190, 200, 210);
    
    // Mouth (Line)
    line(180, 240, 220, 240);
    
    // Ears (Rectangles)
    rect(125, 190, 20, 40);
    rect(255, 190, 20, 40);
    
    // Signature
    textSize(12);
    textAlign(RIGHT);
    text("Kaiden Kellogg", width - 10, height - 10);
  }