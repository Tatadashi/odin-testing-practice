import { caesarCipher } from "../js/caesarCipher.js";

it('shifts xyz by 3 to get abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

it("shifts HeLLo by 3 to get KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it("shifts Hello, World! by 3 to get Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});