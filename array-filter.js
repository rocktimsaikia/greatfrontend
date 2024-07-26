Array.prototype.myFilter = function (func, thisArg) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		if (func.apply(thisArg, [this[i], i, this])) {
			newArr.push(this[i]);
		}
	}
	return newArr;
};

console.log([1, 2, 3, 4].myFilter((i) => i % 2 == 0));
console.log([1, 2, 3, 4].myFilter((i) => i < 3));
console.log([1, , , 4].myFilter((i) => i));

const isEvenIndex = (_, idx) => idx % 2 == 0;
console.log([1, 2, 3, 4, 5].myFilter(isEvenIndex));

const isThisProductEven = function (this, element) {
  return (element * this) % 2 === 0;
};
console.log([1, 2, 3, 4].myFilter(isThisProductEven, 10))
