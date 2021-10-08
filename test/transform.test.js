import utils from "../src/";
import transform from "../src/transform";
import { data2Set } from "../src/transform";

describe("test transform module", () => {
  test("test data2Set()", () => {
    expect(data2Set(1)).toContain(1);
    expect(transform.data2Set(1)).toContain(1);
    expect(utils.transform.data2Set(1)).toContain(1);
  });

  test("test data2Set(new Set([2,3]))", () => {
    expect(data2Set(new Set([2, 3]))).toContain(3);
  });

  test("test data2Set([2,3])", () => {
    expect(data2Set([2, 3])).toContain(3);
  });
});
