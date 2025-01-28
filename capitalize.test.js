import { capitalize } from './capitalize.js'

test('capitalizes cat to Cat', () => {
    expect(capitalize('cat')).toMatch('Cat');
});

test("capitalizes c to C", () => {
  expect(capitalize("c")).toMatch("C");
});

test("capitalizes At to At", () => {
  expect(capitalize("At")).toMatch("At");
});