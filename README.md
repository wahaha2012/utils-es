# utils-es
[![NPM version](https://badge.fury.io/js/utils-es.svg)](http://badge.fury.io/js/utils-es)
[![Downloads/month](https://img.shields.io/npm/dm/utils-es.svg)](http://www.npmtrends.com/utils-es)
[![Build Status](https://travis-ci.org/wahaha2012/utils-es.svg)](https://travis-ci.org/wahaha2012/utils-es)
[![Coverage Status](https://codecov.io/gh/wahaha2012/utils-es/branch/master/graph/badge.svg)](https://codecov.io/gh/wahaha2012/utils-es)

javascript util functions with ES syntax

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

## For Commonjs module
Use modules in utils-es/dist

files in dist folder are umd modules
```js
const utils = require("utils-es/dist");
const formatter = require("utils-es/dist/formatter");
const { getQueryString } = require("utils-es/dist/url");
```