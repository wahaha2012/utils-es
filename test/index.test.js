import utils from "../src/";
import { url } from "../src";

describe("test index module", () => {
  test("import utils from module default entry", () => {
    expect(typeof utils).toBe("object");
  });

  test("import named export from utils", () => {
    expect(typeof url).toBe("object");
    expect(typeof url.getQueryString).toBe("function");
  });
});
