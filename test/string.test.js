import utils from "../src/";
import string from "../src/string";
import { changePosition } from "../src/string";

describe("test string module", () => {
  test("test changePosition()", () => {
    expect(changePosition()).toBe(undefined);
    expect(string.changePosition()).toBe(undefined);
    expect(utils.string.changePosition()).toBe(undefined);
  });

  test("test changePosition(null)", () => {
    expect(changePosition(null)).toBe(null);
  });

  test("test changePosition('goodBaby', 0, 4, 8) should return Babygood", () => {
    expect(changePosition("goodBaby", 0, 4, 8)).toBe("Babygood");
  });
});
