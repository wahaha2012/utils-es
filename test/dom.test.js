import utils from "../src/";
import dom from "../src/dom";
import {
  createElement,
  addClass,
  removeClass,
  removeElement,
} from "../src/dom";
import { isType } from "../src/lang";

describe("test dom module", () => {
  test("test createElement('div')", () => {
    expect(isType(createElement("div"))).toBe("HTMLDivElement");
    expect(isType(dom.createElement("div"))).toBe("HTMLDivElement");
    expect(isType(utils.dom.createElement("div"))).toBe("HTMLDivElement");
  });

  test("test createElement()", () => {
    expect(createElement()).toBe(undefined);
  });

  test("test createElement('div', {class: 'test', innerText: 'hello'})", () => {
    const div = createElement("div", { class: "test", innerText: "hello" });
    expect(isType(div)).toBe("HTMLDivElement");
    expect(div.getAttribute("class")).toBe("test");
    expect(div.innerText).toBe("hello");
  });

  test("test removeElement()", () => {
    const div = createElement("div", { class: "test", innerText: "hello" });
    const parent = createElement("div");
    parent.appendChild(div);

    expect(parent.querySelector("div.test")).not.toBeNull();
    removeElement(div);
    expect(parent.querySelector("div.test")).toBeNull();
  });

  test("test addClass()", () => {
    const div = createElement("div");
    expect(isType(addClass(div))).toBe("HTMLDivElement");

    addClass(div, "test");
    expect(div.getAttribute("class")).toBe("test");

    addClass(div, ["test2"]);
    expect(div.getAttribute("class")).toBe("test test2");
    addClass(div, "test3 test2   test4");
    expect(div.getAttribute("class")).toBe("test test2 test3 test4");
  });

  test("test removeClass()", () => {
    const div = createElement("div");
    expect(isType(removeClass(div))).toBe("HTMLDivElement");

    addClass(div, "test test2 test3 test4");
    expect(div.getAttribute("class")).toBe("test test2 test3 test4");

    removeClass(div, "test");
    expect(div.getAttribute("class")).toBe("test2 test3 test4");
    removeClass(div, ["test2"]);
    expect(div.getAttribute("class")).toBe("test3 test4");
    removeClass(div, "test3 test4");
    expect(div.getAttribute("class")).toBe("");
  });
});
