function solution(image) {
	let out = [];

	outWidth = image[0].length - 2;
	outHeight = image.length - 2;

	console.log(outWidth, outHeight);

	let pixelX = 0;
	let pixelY = 0;

	while (pixelY < outHeight) {
		let outX = [];

		let currentX = pixelX;
		let currentY = pixelY;

		while (currentX < outWidth) {
			currentY = pixelY;
			let a = image[currentY].slice(currentX, currentX + 3);
			console.log(a);
			currentY++;
			let b = image[currentY].slice(currentX, currentX + 3);
			console.log(b);
			currentY++;
			let c = image[currentY].slice(currentX, currentX + 3);
			console.log(c);
			let line = a.concat(b).concat(c);
			let total = line.reduce((p, c) => p + c) / 9;
			outX.push(Math.floor(total));
			currentX++;
		}

		out.push(outX);
		pixelY++;
	}

	console.log(out);
	return out;
}

solution([
	[7, 4, 0, 1],
	[5, 6, 2, 2],
	[6, 10, 7, 8],
	[1, 4, 2, 0],
]);
