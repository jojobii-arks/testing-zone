function solution(n, firstNumber) {
	let x = firstNumber + n / 2;

	if (x >= n) x -= n;

	return x;
}

const a = solution(10, 2);
console.log(a);
