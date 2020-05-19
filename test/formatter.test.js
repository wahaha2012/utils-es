import utils from "../src/";
import formatter from "../src/formatter";
import { thousandsSeparatorFormat } from "../src/formatter";

describe("test formatter module", () => {
  test("test thousandsSeparatorFormat(-1234567.89)", () => {
    expect(thousandsSeparatorFormat(-1234567.89)).toBe("-1,234,567.89");
    expect(formatter.thousandsSeparatorFormat(-1234567.89)).toBe(
      "-1,234,567.89"
    );
    expect(utils.formatter.thousandsSeparatorFormat(-1234567.89)).toBe(
      "-1,234,567.89"
    );
  });

  test("test thousandsSeparatorFormat(1234567.89)", () => {
    expect(thousandsSeparatorFormat(1234567.89)).toBe("1,234,567.89");
  });

  test("test thousandsSeparatorFormat('1234567.89')", () => {
    expect(thousandsSeparatorFormat("1234567.89")).toBe("1,234,567.89");
  });

  test("test thousandsSeparatorFormat(1234567)", () => {
    expect(thousandsSeparatorFormat(1234567)).toBe("1,234,567");
  });

  test("test thousandsSeparatorFormat(-123456)", () => {
    Number.prototype.toLocaleString = null;
    expect(thousandsSeparatorFormat(-123456)).toBe("-123,456");
  });

  test("test thousandsSeparatorFormat()", () => {
    expect(thousandsSeparatorFormat()).toBe("NaN");
  });
});
