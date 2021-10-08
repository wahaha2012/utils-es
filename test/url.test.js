import utils from "../src/";
import url from "../src/url";
import { getQueryString, paramsToQueryString } from "../src/url";

describe("test url module", () => {
  test("test getQueryString()", () => {
    expect(getQueryString()).toBe("");
    expect(url.getQueryString(-1234567.89)).toBe("");
    expect(utils.url.getQueryString(-1234567.89)).toBe("");
  });

  test("test getQueryString('key', 'https://localhost/?key=value')", () => {
    expect(getQueryString("key", "https://localhost/?key=value")).toBe("value");
  });

  test("test getQueryString('key', '?key=value')", () => {
    expect(getQueryString("key", "?key=value")).toBe("value");
  });

  test("test paramsToQueryString()", () => {
    expect(paramsToQueryString()).toBe("");
    expect(url.paramsToQueryString([])).toBe("");
    expect(utils.url.paramsToQueryString({})).toBe("");
  });

  test("test paramsToQueryString({name: 'tom', age: 16, gender: undefined})", () => {
    expect(
      paramsToQueryString({ name: "tom", age: 16, gender: undefined })
    ).toBe("name=tom&age=16");
  });
});
