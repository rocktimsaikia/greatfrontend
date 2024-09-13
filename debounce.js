export default function debounce(func, wait) {
	let timeout;
	return function (...args) {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}

// Tests
let i = 0;

function add() {
	i += 1;
	console.log(i);
}

const debouncedIncrement = debounce(add, 2000);

debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();

setTimeout(() => console.log(i), 1000);
