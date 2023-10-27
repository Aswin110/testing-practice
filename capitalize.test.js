import capitalize from './capitalize.js';

test('capitalize ', () => {
	expect(capitalize('test')).toBe('Test');
});

test('capitalize ', () => {
	expect(capitalize('hello world')).toBe('Hello World');
});
