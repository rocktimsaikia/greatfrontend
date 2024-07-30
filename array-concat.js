Array.prototype.myConcat = function (...items) {
	let newArr = [...this];
	for (let i = 0; i < items.length; i++) {
		if (Array.isArray(items[i])) {
			newArr.push(...items[i]);
		} else {
			newArr.push(items[i]);
		}
	}
	return newArr;
};

console.log([1, 2, 3].myConcat(1, 2, [4, 5, 6]));
console.log([1, 2, 3].myConcat([4, 5, 6]));
console.log([1, 2, 3].myConcat([, , 6]));
