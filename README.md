# utils-es
javascript util functions with ES syntax

## - formatter
```js
import { thousandsSeparatorFormat } from "utils-es/formatter";
// import formatter from "utils-es/formatter";
// import { formatter } from "utils-es";

const result = thousandsSeparatorFormat(-123456.78);
// const result = formatter.thousandsSeparatorFormat(-123456.78);
// result=> -123,456.78
```

## - url
```js
import { getQueryString } from "utils-es/url";
// import url from "utils-es/url";
// import { url } from "utils-es";

const result = getQueryString("key");
// const result = url.getQueryString("key");
// result=> query value for key
```