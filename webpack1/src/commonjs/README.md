# webpack 打包 commonjs

## 整体结构

```js
    (function(modules) { // webpackBootstrap
        var installedModules = {};

        function __webpack_require__(moduleId) {

            // Check if module is in cache
            if(installedModules[moduleId])
                return installedModules[moduleId].exports;

            // Create a new module (and put it into the cache)
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };

            // Execute the module function
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            // Flag the module as loaded
            module.loaded = true;

            // Return the exports of the module
            return module.exports;
        }

        // expose the modules object (__webpack_modules__)
        __webpack_require__.m = modules;

        // expose the module cache
        __webpack_require__.c = installedModules;

        // __webpack_public_path__
        __webpack_require__.p = "";

        // Load entry module and return exports
        return __webpack_require__(0);

    })([
    function(module, exports, __webpack_require__) {

        var add = __webpack_require__(1);

        function calculator(num1, num2) {
            var result = add(num1, num2);
            console.log(result)
            return result;
        }

        calculator(3, 5)
    },
    function(module, exports) {

        module.exports = function(num1, num2) {
            return num1 + num2;
        }
    }
    ]);
```
