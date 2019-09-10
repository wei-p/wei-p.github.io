// HW0 for Data Viz 19 Fall

function setup() {
	createCanvas(400, 400); // make an HTML canvas element width x height pixels
}

function draw() {
	background(150);

	let cx = width / 2;
	let cy = height / 2;
	let r = min(width, height) / 2 * 0.8;

	// minute tick
	stroke(255);
	strokeWeight(8);
	beginShape(POINTS);
	for (let a = 0; a < 360; a += 30) {
		let angle = radians(a);
		let x = cx + cos(angle) * r;
		var y = cy + sin(angle) * r;
		vertex(x, y);
	}
	endShape();

	// draw
	let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
	let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
	let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

	stroke('#eaacb6');
	strokeWeight(8);
	point(cx + cos(s) * r, cy + sin(s) * r);

	stroke('#b0e4a6');
	strokeWeight(12);
	point(cx + cos(m) * r, cy + sin(m) * r);

	stroke('#f3b246');
	strokeWeight(16);
	point(cx + cos(h) * r, cy + sin(h) * r);
}
