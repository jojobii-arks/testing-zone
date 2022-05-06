function solution(inputArray) {
	const goal = Math.max(...inputArray);

	let jumpLength = 1;
	let unsolved = true;
	let jumper = 0;
	while (unsolved) {
		console.log(jumper);
		jumper += jumpLength;
		if (inputArray.includes(jumper)) {
			jumper = 0;
			jumpLength++;
		} else if (jumper > goal) {
			unsolved = false;
		}
	}
	return jumpLength;
}

const tests = [5, 3, 6, 7, 9];

console.log(solution(tests));
