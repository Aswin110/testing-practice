function caesarCipher(string) {
	let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let k = 5;
	const array = string.toLowerCase().split('').map((char) => {
		return char === ' ' ? ' ' : alphabets[(alphabets.indexOf(char) + k) % 26 ];
	});
	
	return array.join('');
}
caesarCipher('test test');
export default caesarCipher;