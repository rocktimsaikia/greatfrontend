Array.prototype.myReduce = function (callbackFn, initialValue) {
	if (!this.length && initialValue === undefined) {
		throw TypeError("Empty array provided");
	}
	let temp = initialValue !== undefined ? initialValue : this[0];
	let iInit = initialValue !== undefined ? 0 : 1;
	for (let i = iInit; i < this.length; i++) {
		if (!this[i]) continue;
		temp = callbackFn(temp, this[i], i, this);
	}
	return temp;
};

// Tests
let result = [1, 2, 3].myReduce((prev, curr) => prev + curr); // 6
console.log(result);

const sumOfSquares = (prev, curr, index, array) => prev + curr * array[index];
let result2 = [-1, -3, 4].reduce(sumOfSquares, 0); // 26
console.log(result2);

const result3 = [1, , , , 4].myReduce((a, b) => a + b);
console.log(result3);
