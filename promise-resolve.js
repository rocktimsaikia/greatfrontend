// Promise.resolve() special-cases native Promise instances.
// If value belongs to Promise or a subclass, and value.constructor === Promise,
// then value is directly returned by Promise.resolve(), without creating a new Promise instance.
// Otherwise, Promise.resolve() is essentially a shorthand for new Promise((resolve) => resolve(value)).
// - MDN

export default function promiseResolve(value) {
	if (value.constructor === Promise) return value;
	return new Promise((resolve, _reject) => resolve(value));
}
