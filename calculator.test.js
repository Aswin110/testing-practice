/* eslint-disable no-undef */
import { add, sub, mul, div } from './calculator.js';

test('addition ', () => {
	expect(add(1,2)).toEqual(3);
});

test('subtraction ', () => {
	expect(sub(2,1)).toEqual(1);
});

test('multiplication ', () => {
	expect(mul(1,2)).toEqual(2);
});

test('division ', () => {
	expect(div(1,2)).toBeCloseTo(0.5);
});
