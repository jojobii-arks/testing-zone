function solution(inputString) {
	const ipArray = inputString.split('.');
	let validIp = true;
	console.log(ipArray);

	if (ipArray[0] === '0' && Number(ipArray[0]) === NaN) return false;

	if (ipArray.length !== 4) {
		return false;
	}
	ipArray.forEach((element) => {
		console.log(element);
		if (
			(element[0] === '0' && element.length > 1) ||
			!element ||
			Number(element) > 255 ||
			isNaN(Number(element))
		) {
			validIp = false;
			return;
		}
	});
	return validIp;
}

let test = solution('0.254.255.0');

console.log(test);
