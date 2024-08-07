export default function chunk(array, size = 1) {
	const result = [];

	// Loop over the array and increment the index
	// by the given size on end of each iteration.
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}

	return result;
}

console.log(chunk(["a", "b", "c", "d"])); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
onsole.log(chunk([1, 2, 3, 4], 3)); // => [[1, 2, 3], [4]]
