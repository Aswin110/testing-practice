/* eslint-disable no-undef */
import caesarCipher from '../code/caesarCipher.js';

test('Caesar Cipher 1', () => {
	expect(caesarCipher('attack at dawn')).toBe('fyyfhp fy ifbs');
});

test('Caesar Cipher 2', () => {
	expect(caesarCipher('Test')).toBe('yjxy');
});

test('Caesar Cipher 3', () => {
	expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('fghijklmnopqrstuvwxyzabcde');
});