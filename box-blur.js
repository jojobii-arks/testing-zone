function solution(image) {
	let out = [];

	outWidth = image[0].length;
	outHeight = image.length;

	console.log(outWidth, outHeight);

	out.fill([], 0, outHeight);

	console.log(out);
}

solution([
	[36, 0, 18, 9],
	[27, 54, 9, 0],
	[81, 63, 72, 45],
]);
