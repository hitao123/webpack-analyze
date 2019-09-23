# es6 代码需要经过 babel 装换成 es5 代码

```js
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.add = add;
    exports.default = multiply;
    function add(num1, num2) {
        return num1 + num2;
    }

    function multiply(a, b) {
        return a * b;
    }
```

```js

(0, foo.bar)()  <====> foo.bar()

(0, _index.add)(num1, num2) <======> _index.add(num1, num2)


```

[Babel 是怎么实现 ES6 模块的转换的](https://juejin.im/entry/5af3a3f6518825670d731cea)
