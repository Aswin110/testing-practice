function analyzeArray(array) {
	let object = {};
	let sum = 0;
	sum = array.reduce((prev , curr) => { return prev+curr;});
	let min = array.reduce((prev , curr) => { return Math.min(prev, curr);});
	let max = array.reduce((prev , curr) => { return Math.max(prev, curr);});
	let length = array.length;
	let average = sum/length;

	object.average = average;
	object.min = min;
	object.max = max;
	object.length = length;

	console.log(object);
	return object;
}

analyzeArray([1,8,3,4,2,6]);

export default analyzeArray;