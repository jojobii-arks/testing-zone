function solution(matrix) {
	const lengthX = matrix[0].length;
	const lengthY = matrix.length;

	let positionX = 0;
	let positionY = 0;

	let out = [];

	while (positionY < lengthY) {
		positionX = 0;
		let outX = [];
		while (positionX < lengthX) {
			let number = 0;

			let surrounding = [-1, 0, 1];

			surrounding.forEach((x) => {
				surrounding.forEach((y) => {
					if (x === 0 && y === 0) {
						return;
					}
					let checkX = positionX + x;
					let checkY = positionY + y;

					if (
						matrix[checkY] !== undefined &&
						matrix[checkY][checkX] !== undefined
					) {
						if (matrix[checkY][checkX]) {
							number++;
						}
					}
				});
			});
			outX.push(number);

			positionX++;
		}

		out.push(outX);
		positionY++;
	}

	return out;
}

// const x = solution([
// 	[true, false, false],
// 	[false, true, false],
// 	[false, false, false],
// ]);

// console.log(x);

const y = solution([
	[true, false, false, true],
	[false, false, true, false],
	[true, true, false, true],
]);

console.log(y);
