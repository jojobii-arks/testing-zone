function solution(cell1, cell2) {
	if (cell1.charCodeAt(0) % 2 !== cell2.charCodeAt(0) % 2) {
		return Number(cell1[1]) % 2 !== Number(cell2[1]) % 2;
	} else {
	}
	return Number(cell1[1]) % 2 === Number(cell2[1]) % 2;
}

let a = solution('A1', 'B2');
console.log(a);
