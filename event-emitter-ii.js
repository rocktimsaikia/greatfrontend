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
	 * @returns {{off: Function}}
	 */
	on(eventName, listener) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(listener);
		return {
			off: () => {
				let index = this.events[eventName].indexOf(listener);
				this.events[eventName].splice(index, 1);
			},
		};
	}

	/**
	 * @param {string} eventName
	 * @param {...any} args
	 * @returns boolean
	 */
	emit(eventName, ...args) {
		if (
			!this.events.hasOwnProperty(eventName) ||
			this.events[eventName].length === 0
		)
			return false;

		for (let event of this.events[eventName]) {
			event(...args);
		}
		return true;
	}
}
