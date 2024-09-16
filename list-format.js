/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options) {
	let newArr = items.filter(Boolean);
	if (options?.sorted) {
		newArr = newArr.sort();
	}
	if (options?.unique) {
		newArr = Array.from(new Set(newArr));
	}
	if (newArr.length <= 2) {
		return newArr.join(" and ");
	}
	if (options?.length && options.length > 0 && options.length < newArr.length) {
		let shownItems = newArr.splice(0, options.length).join(", ");
		let restCount = newArr.length;

		return (
			shownItems + ` and ${restCount} ${restCount > 1 ? "others" : "other"}`
		);
	}
	return (
		newArr.slice(0, newArr.length - 1).join(", ") + " and " + newArr.at(-1)
	);
}
