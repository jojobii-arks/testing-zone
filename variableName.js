function solution(name) {
	name = name.toUpperCase();
	const first = name[0].charCodeAt(0);
	if ((first >= 48 && first <= 57)) {
		return false;
	}
	const last = name[name.length - 1].charCodeAt

	for (let i = 0; i < name.length; i++) {
		const characterCode = name[i].charCodeAt(0);
		if (!(characterCode >= 65 && characterCode <= 90) &&
		(!(characterCode >= 48 && characterCode <= 57)) &&
		!(characterCode === 95)) {
			return false;
		}
	}
	return true;
}


// const a = solution("var_1__Int");
// console.log(a);
// const b = solution(" variable");
// console.log(b)
const c = solution("variable0");
console.log(c)
