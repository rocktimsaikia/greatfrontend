/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
	let isTimeout = false;
	return function (...args) {
		if (isTimeout) return;
		func.call(this, ...args);
		isTimeout = true;
		setTimeout(() => {
			isTimeout = false;
		}, wait);
	};
}
