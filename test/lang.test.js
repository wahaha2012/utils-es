import utils from "../src/";
import lang from "../src/lang";
import { isType } from "../src/lang";

describe("test language module", () => {
  test("test isType()", () => {
    expect(isType()).toBe("Undefined");
    expect(lang.isType()).toBe("Undefined");
    expect(utils.lang.isType()).toBe("Undefined");
  });

  test("test isType(var)", () => {
    expect(isType("a")).toBe("String");
    expect(isType(0)).toBe("Number");
    expect(isType(false)).toBe("Boolean");
    expect(isType([])).toBe("Array");
    expect(isType({})).toBe("Object");
  });

  test("test isType(1, 'number')", () => {
    expect(isType(1, "number")).toBeTruthy();
    expect(isType(1, "Number")).toBeTruthy();
  });
});
