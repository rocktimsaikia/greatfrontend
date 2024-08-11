export default function difference(array, values) {
	return array.filter((i) => !values.includes(i));
}

console.log(difference([1, 2, 3], [2, 3]));
console.log(difference([1, 2, 3, 4], [2, 3, 1]));
console.log(difference([1, , 3], [1]));
console.log(difference([1, 2, 3], [2, 3, 4]));
