import caesarCipher from './caesarCipher.js';

test('Caesar Cipher 1', () => {
	expect(caesarCipher('attack at dawn')).toBe('fyyfhp fy ifbs');
});

test('Caesar Cipher 2', () => {
	expect(caesarCipher('Test')).toBe('yjxy');
});