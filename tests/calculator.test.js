import { calculator } from '../js/calculator.js';

it('adds 0.1 and 0.2 to equal 0.3', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

it('subtracts 0.2 from 0.3 to equal 0.1', () => {
    expect(calculator.subtract(0.2, 0.3)).toBeCloseTo(0.1);
});

it('multiplies 2 and 2.5 to equal 5', () => {
    expect(calculator.multiply(2, 2.5)).toBeCloseTo(5);
});

it('divides 2.5 from 5 to equal 2', () => {
    expect(calculator.divide(2.5, 5)).toBeCloseTo(2);
});
