export default function compact(array) {
	return array.filter(Boolean);
}

console.log(compact([0, 1, false, 2, "", 3, null]));
