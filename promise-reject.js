/**
 * @param {*} reason
 * @returns Promise
 */
export default function promiseReject(reason) {
	return new Promise((_resolve, reject) => {
		reject(reason);
	});
}
