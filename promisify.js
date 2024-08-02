/**
 * @callback func
 * @returns Function
 */
export default function promisify(func) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			func.call(this, ...args, (err, result) => {
				return err ? reject(err) : resolve(result);
			});
		});
	};
}

// Tests
function asyncIdentity(x, cb) {
	setTimeout(() => {
		cb(null, x);
	}, 10);
}

const promisified = promisify(asyncIdentity);
const res = await promisified(23);
console.log(res);
