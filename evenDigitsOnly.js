function solution(n) {
	const compare = n.toString().split('');
	const compared = compare.find(e => e % 2 !== 0);
	return compared ? false : true;
}

const testA = solution(248622);
console.log(testA);
const testB = solution(2462487);
console.log(testB);
const testC = solution(3468428);
console.log(testC);
