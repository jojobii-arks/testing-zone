function solution(deposit, rate, threshold) {
	let x = deposit;
	let years = 0;

	while (x < threshold) {
		x += (x * rate) / 100;
		years++;
	}

	return years;
}

const a = solution(100, 20, 170);
console.log(a);
