# utils-es
<!-- [![NPM version](https://badge.fury.io/js/utils-es.svg)](http://badge.fury.io/js/utils-es) -->
[![NPM version](https://img.shields.io/npm/v/utils-es.svg)](https://www.npmjs.com/package/utils-es)
[![Downloads/month](https://img.shields.io/npm/dm/utils-es.svg)](http://www.npmtrends.com/utils-es)
[![Build Status](https://travis-ci.org/wahaha2012/utils-es.svg?branch=master)](https://travis-ci.org/wahaha2012/utils-es)
[![Coverage Status](https://codecov.io/gh/wahaha2012/utils-es/branch/master/graph/badge.svg)](https://codecov.io/gh/wahaha2012/utils-es)
[![Minzipped Size](https://flat.badgen.net/bundlephobia/minzip/utils-es)](https://github.com/gh/wahaha2012/utils-es)

javascript util functions with ES syntax

Table of Contents
=================
  * [Usage](#usage)
  * [- formatter](#--formatter)
    * [thousandsSeparatorFormat(n)](#thousandsseparatorformatn)
  * [- url](#--url)
    * [getQueryString(queryKey, searchString)](#getquerystringquerykey-searchstring)
    * [paramsToQueryString(params)](#paramstoquerystringparams)
  * [- string](#--string)
    * [changePosition(souce, startPosition, length, targetPosition)](#changepositionsouce-startposition-length-targetposition)
  * [- dom](#--dom)
  * [- event](#--event)
  * [- queue](#--queue)
  * [- safe](#--safe)
  * [- transform](#--transform)
  * [- lang](#--lang)
  * [For Commonjs module](#for-commonjs-module)
  
## Usage
```bash
npm install utils-es
# or
yarn add utils-es
```

## - formatter
> ### thousandsSeparatorFormat(n)
* @description Thousands Separator Formatter
* @param {Number | String} n
* @return { String }
```js
import { thousandsSeparatorFormat } from "utils-es/formatter";
// import formatter from "utils-es/formatter";
// import { formatter } from "utils-es";

const result = thousandsSeparatorFormat(-123456.78);
// const result = formatter.thousandsSeparatorFormat(-123456.78);
// result=> -123,456.78
```

## - url
> ### getQueryString(queryKey, searchString)
* @method getQueryString
* @param queryString {String}
* @param searchString {String}
* @return {String}
```js
import { getQueryString } from "utils-es/url";
// import url from "utils-es/url";
// import { url } from "utils-es";

const result = getQueryString("key");
// const result = url.getQueryString("key");
// result=> query value for key

const result = getQueryString("key", "https://localhost/?key=value");
// result => "value"
```

> ### paramsToQueryString(params)
* transform params object to query string
* @param {Object} params
* @return { String } query string
```js
paramsToQueryString({
  name: 'tom',
  age: 16
}); // return name=tom&age=16
```

## - string
> ### changePosition(souce, startPosition, length, targetPosition)
* @description move a part from string to another position
* @param {String | Number} source source content
* @param {Integer} startPosition move start position
* @param {Integer} length move length
* @param {Integer} targetPosition target position to put
```js
import { changePosition } from "utils-es/string";
// import string from "utils-es/string";
// import { string } from "utils-es";

const result = changePosition("abcdefg", 0, 2, 7); // return "cdefgab"
// const result = string.changePosition("abcdefg", 0, 2, 7);
// result=> string position changed
```

## - dom
> createElement(tagName, attrs)
* create dom element
* @param {String} tagName dom tag name
* @param {Object} attrs dom attributes
* @return { DomElement} dom element
```js
import { createElement } from "utils-es/dom";
const link = createElement("a", {
  class: "link",
  href: "https://www.google.com",
  target: "_blank",
  innerText: "Google"
}); // return HTMLElement
```

> removeElement(element)
* remove element
 * @param {DomElement} element
```js
import { removeElement } from "utils-es/dom";
removeElement(link);
```

> addClass(element, className)
* add new class name
* @param {DomElement} element
* @param {String | Array} className
* @returns {DomElement} element
```js
import { addClass } from "utils-es/dom";
addClass(link, "hover");
addClass(link, "hover active");
addClass(link, ["hover", "active"]);
```

> removeClass(element, className)
* remove class name from element
 * @param {DomElement} element
 * @param {String | Array} className
 * @returns {DomElement} element
```js
import { removeClass } from "utils-es/dom";
removeClass(link, "hover");
removeClass(link, "hover active");
removeClass(link, ["hover", "active"]);
```

## - event

## - queue
> debounce(func, wait, immediate)
* @param {Function} func
* @param {Integer} wait debounce wait time in milliseconds
* @param {Boolean} immediate
* @returns {Function} new Function
```js
import { debounce } from "utils-es/queue";
const newFunc = debounce(oldFunc);
```

## - safe
> xssFilter(source)
* xss filter
 * @param {String} source source content
 * @returns {String} html safe content
```js
import { xssFilter } from "utils-es/safe";
const safeInnerHTML = xssFilter(originalHTMLString));
// replace all script tag to &lt;script&gt;
```

## - transform
> data2Set(source)
* data2Set transform data to Set Object
* @param {Any} data
* @return {Set | Any} Set object or source data
```js
import { data2Set } from "utils-es/transform";
data2Set(); // return Set(0)
data2Set(1); // return Set(1) {1}
data2Set("foo"); // return Set(1) {"foo"}
data2Set([1,2,3]); // return Set(3) {1,2,3}
```

## - lang
> isType(source, type)
* check varible type
* @param {Any} source
* @param {String} type
* @return {String | Boolean}
```js
import { isType } from "utils-es/lang";
isType(1); // return "Number"
isType(1, "Number"); // return true
```

## For Commonjs module
Use modules in utils-es/dist

files in dist folder are umd modules
```js
const utils = require("utils-es/dist");
const formatter = require("utils-es/dist/formatter");
const { getQueryString } = require("utils-es/dist/url");
```