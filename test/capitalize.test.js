/* eslint-disable no-undef */
import capitalize from '../code/capitalize.js';

// eslint-disable-next-line no-undef
test('capitalize ', () => {
	expect(capitalize('test')).toBe('Test');
});

test('capitalize ', () => {
	expect(capitalize('hello world')).toBe('Hello World');
});
