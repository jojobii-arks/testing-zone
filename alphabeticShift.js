function solution(inputString) {
	const array = inputString.split('');
	const newArray = array
		.map(e => e.charCodeAt(0))
		.map(e => {
			e++;
			if (e > 122) e = 97;
			return String.fromCharCode(e);
		});
	return newArray.join('');
}

const a = solution('crazy');
console.log(a);
const b = solution('fuzzy');
console.log(b);
