import utils from "../src/";
import safe from "../src/safe";
import { xssFilter, htmlSafe } from "../src/safe";

describe("test safe module", () => {
  test("test xssFilter()", () => {
    expect(xssFilter()).toBe(undefined);
    expect(safe.xssFilter()).toBe(undefined);
    expect(utils.safe.xssFilter()).toBe(undefined);
  });

  test("test xssFilter('<script>alert(1)</script>')", () => {
    expect(xssFilter("<script>alert(1)</script>")).toBe(
      "&lt;script&gt;alert(1)&lt;/script&gt;"
    );
  });

  test("test xssFilter('<script type=\"text/javascript\">alert(1)</script>')", () => {
    expect(xssFilter('<script type="text/javascript">alert(1)</script>')).toBe(
      "&lt;script&gt;alert(1)&lt;/script&gt;"
    );
  });

  test("test htmlSafe()", () => {
    expect(htmlSafe()).toBe("undefined");
  });

  test("test htmlSafe('<script>alert(1)</script>')", () => {
    expect(htmlSafe("<script>alert(1)</script>")).toBe(
      "&lt;script&gt;alert(1)&lt;/script&gt;"
    );
  });

  test("test htmlSafe('<script>alert(1)</script><code>&\"'</code>')", () => {
    expect(htmlSafe("<script>alert(1)</script><code>&\"'</code>")).toBe(
      "&lt;script&gt;alert(1)&lt;/script&gt;&lt;code&gt;&amp;&quot;&#39;&lt;/code&gt;"
    );
  });
});
