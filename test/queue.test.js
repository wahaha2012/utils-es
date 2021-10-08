import utils from "../src/";
import queue from "../src/queue";
import { debounce } from "../src/queue";

describe("test queue module", () => {
  test("test debounce()", () => {
    expect(typeof debounce()).toBe("function");
    expect(typeof queue.debounce()).toBe("function");
    expect(typeof utils.queue.debounce()).toBe("function");
  });

  test("test debounce(() => {return 1}, 200)", (done) => {
    const cb = debounce(() => {
      expect(Date.now() - startTime).toBeGreaterThan(200);
      done();
    }, 200);
    const startTime = Date.now();
    cb();
  });

  test("test debounce(() => {return 1}, 0, true)", (done) => {
    const cb = debounce(
      () => {
        expect(Date.now() - startTime).toBeLessThan(50);
        done();
      },
      0,
      true
    );
    const startTime = Date.now();
    cb();
  });
});
