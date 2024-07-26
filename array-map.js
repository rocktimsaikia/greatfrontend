Array.prototype.myMap = function (callbackFn, thisArg) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		if (!this[i]) {
			newArr.push(this[i]);
			continue;
		}
		newArr.push(callbackFn.apply(thisArg, [this[i], i, this]));
	}
	return newArr;
};

console.log([1, , , , 5].myMap((i) => i * 2));
