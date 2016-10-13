function setup() {
	createCanvas(1000, 1000);
	background(224, 224, 209)
}

function draw() {
	background(224, 224, 209)
	textSize(24);
	text("x:" + mouseX, 10, 30);
	text("y:" + mouseY, 10, 60);

	// legs
	fill(255, 204, 102);
	rect(351, 634, 40, 300, 40);
	rect(428, 617, 35, 300, 40);
	rect(520, 620, 35, 300, 40);
	rect(565, 660, 40, 300, 40);

	fill(0, 0, 0);
	ellipse(368,914,55,55);
	ellipse(445,903,55,55);
	ellipse(539,905,55,55);
	ellipse(584,943,55,55);
	fill(255, 255, 255);
	ellipse(368,914,15,15);
	ellipse(445,903,15,15);
	ellipse(539,905,15,15);
	ellipse(584,943,15,15);

	// body
	fill(255, 204, 102);
	beginShape();
	vertex(350,350);
	vertex(600,600);
	vertex(600,650);
	vertex(350,600);
	vertex(250,250);
	endShape(CLOSE);

	// head
	quad(170, 204, 255, 206, 209, 294, 190, 290);
	fill(102, 102, 102);
	ellipse(257,264,25,25);
	ellipse(248,248,25,25);
	fill(255,0,0);
	ellipse(257,264,10,10);
	ellipse(248,248,10,10);

	fill(102, 102, 102)
	rect(170,160,10,45);
	rect(246,160,10,45);
	fill(255, 0, 0);
	ellipse(250,154,10,10);
	ellipse(173,154,10,10);

	ellipse(189,227,15,15);
	ellipse(218,229,15,15);
	fill(102, 102, 102);
	arc(387, 618, 80, 80, 6.2, PI+0.5, CHORD);
	arc(565, 655, 80, 80, 6.2, PI+0.5, CHORD);

	// tail
	fill(102, 102, 102);
	rect(591,550,10,45);
	rect(591,526,10,45);
	rect(591,500,10,45);
	
}