function sum(value) {
	return function (value2) {
		if (value2 === undefined) {
			return value;
		}
		return sum(value + value2);
	};
}

console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3));
