/* eslint-disable no-undef */
import reverseString from './reverseString.js';

test('reverse string ', () => {
	expect(reverseString('test')).toBe('tset');
});

test('reverse string ', () => {
	expect(reverseString('test test')).toBe('tset tset');
});
