function solution(a) {
	let distance = [];
	a.forEach(e => {
		let total = 0;
		a.forEach(x => {
			total += Math.abs(e - x);
		});
		distance.push(total);
	});
	let index = distance.indexOf(Math.min(...distance));
	return a[index];
}

const a = solution([2, 4, 7]);
console.log(a);
