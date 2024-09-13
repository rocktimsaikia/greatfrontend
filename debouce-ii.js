export default function debouce(func, wait) {
	let timeoutId = null;
	let context = null;
	let argsToInoke = null;

	function clearTimer() {
		clearTimeout(timeoutId);
		timeoutId = null;
	}

	function invokeFunc() {
		if (!timeoutId) return;
		clearTimer();
		func.apply(context, argsToInoke);
	}

	function main(...args) {
		clearTimer();
		context = this;
		argsToInoke = args;

		timeoutId = setTimeout(() => {
			invokeFunc();
		}, wait);
	}

	main.cancel = clearTimer;
	main.flush = invokeFunc;
	return main;
}
