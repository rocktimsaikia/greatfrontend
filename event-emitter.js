// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

export default class EventEmitter {
	constructor() {
		this.events = {};
	}

	/**
	 * @param {string} eventName
	 * @param {Function} listener
	 * @returns {EventEmitter}
	 */
	on(eventName, listener) {
		let events = this.events[eventName] || [];
		events.push(listener);
		this.events[eventName] = events;
		return this;
	}

	/**
	 * @param {string} eventName
	 * @param {Function} listener
	 * @returns {EventEmitter}
	 */
	off(eventName, listener) {
		let events = this.events[eventName];
		if (events) {
			for (let i = 0; i < events.length; i++) {
				if (events[i].toString() == listener.toString()) {
					this.events[eventName].splice(i, 1);
				}
			}
		}
		return this;
	}

	/**
	 * @param {string} eventName
	 * @param  {...any} args
	 * @returns {boolean}
	 */
	emit(eventName, ...args) {
		if (
			!this.events.hasOwnProperty(eventName) ||
			this.events[eventName].length === 0
		)
			return false;
		for (const event of this.events[eventName]) {
			event(...args);
		}
		return true;
	}
}

const emitter = new EventEmitter();

let sum = 0;
function addTwoNumbers(a, b) {
	sum = a + b;
}
emitter.on("foo", addTwoNumbers);
emitter.off("foo", addTwoNumbers);
console.log(emitter.emit("foo", -3, 9));
