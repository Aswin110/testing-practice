function capitalize(string) {
	const capitalizedString = string.split(' ').map(word => word[0].toUpperCase() + word.slice(1));
	let cap = capitalizedString.join(' ');
	return cap;
}
export default capitalize;