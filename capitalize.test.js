import { capitalize } from "./capitalize.js";

it("capitalizes cat to Cat", () => {
  expect(capitalize("cat")).toBe("Cat");
});

it("capitalizes c to C", () => {
  expect(capitalize("c")).toBe("C");
});

it("capitalizes At to At", () => {
  expect(capitalize("At")).toBe("At");
});

it("capitalizes fAt to FAt", () => {
  expect(capitalize("fAt")).toBe("FAt");
});