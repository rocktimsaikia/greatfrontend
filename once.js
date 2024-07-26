function once(fn) {
	let runCount = 0;
	let result;
	return function (...args) {
		if (runCount === 1) {
			return result;
		}
		result = fn(...args);
		runCount++;
		return result;
	};
}

let i = 1;

// Test
function incrementBy(value) {
	i += value;
	return i;
}

const incrementByOnce = once(incrementBy);
console.log(incrementByOnce(2));
console.log(incrementByOnce(3));
i = 4;
console.log(incrementByOnce(2));
