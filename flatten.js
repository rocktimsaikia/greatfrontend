/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
	let newArr = [];
	for (let i of value) {
		if (!Array.isArray(i)) {
			newArr.push(i);
		} else {
			newArr = newArr.concat(flatten(i));
		}
	}
	return newArr;
}

console.log(flatten([1, 2, 3]));
console.log(flatten([1, [2, 3]]));
