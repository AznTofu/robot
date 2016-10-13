function setup() {
	createCanvas(1000, 1000);
	background(179, 236, 255);
}

function draw() {
	background(179, 236, 255);
	textSize(24);
	text("x:" + mouseX, 10, 30);
	text("y:" + mouseY, 10, 60);
  	// head
	fill(153, 102, 51);
  	rect(400, 265, 100, 100, 20);
  	// torso
  	rect(375, 350, 150, 300, 30, 30, 60, 60);
  	fill(102, 51, 0);
  	rect(378, 502, 150, 60, 60);

  	// legs
  	fill(153, 102, 51);
  	rect(375, 600, 70, 200, 20);
  	rect(455, 600, 70, 200, 20);
  	rect(375, 725, 70, 200, 20);
  	rect(455, 725, 70, 200, 20);
  	
  	fill(102, 51, 0);
  	ellipse(490, 750, 65, 65);
  	ellipse(410, 750, 65, 65);
	  	
  	// feet
  	fill(153, 102, 51);
  	rect(350, 870, 100, 70, 60);
  	rect(450, 870, 100, 70, 60);
  		
  	// arms
  	fill(102, 51, 0);
  	ellipse(360, 379, 65, 65);
  	ellipse(540, 379, 65, 65);

  	fill(153, 102, 51);
  	rect(330, 400, 50, 200, 20);
  	rect(520, 400, 50, 200, 20);
  	// face
  	fill(255, 204, 0);
  	ellipse(425, 295, 25, 25);
  	ellipse(474, 295, 25, 25);
  	ellipse(449, 211, 15, 15);
  	fill(102, 51, 0);
  	rect(446, 215, 5, 50, 30);
}