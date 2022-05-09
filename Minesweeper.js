function solution(matrix) {
	const lengthX = matrix[0].length;
	const lengthY = matrix.length;

	const currentCoords = [0, 0];

	let positionX = 0;
	let positionY = 0;

	let out = [];

	while (positionY < lengthY) {
		positionX = 0;
		let outX = [];
		while (positionX < lengthX) {
			outX.push(positionX + '/' + positionY);

			positionX++;
		}

		out.push(outX);
		positionY++;
	}

	return out;
}

const x = solution([
	[true, false, false],
	[false, true, false],
	[false, false, false],
]);

console.log(x);
