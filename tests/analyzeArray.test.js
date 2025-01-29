import { analyzeArray } from "../js/analyzeArray.js";

describe("given a valid number array [1, 2, 3, 4]", () => {
  it("return object with average property 2.5", () => {
    expect(analyzeArray([1, 2, 3, 4]).average).toBeCloseTo(2.5);
  });
  
  it("return object with min property 1", () => {
    expect(analyzeArray([1, 2, 3, 4]).min).toBe(1);
  });
  
  it("return object with max property 4", () => {
    expect(analyzeArray([1, 2, 3, 4]).max).toBe(4);
  });
  
  it("return object with length property 4", () => {
    expect(analyzeArray([1, 2, 3, 4]).length).toBe(4);
  });

  it('return object with all correct properties', () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({ average: 2.5, min: 1, max: 4, length: 4 });
  });
});

