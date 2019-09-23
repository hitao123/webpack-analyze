# 对于 web 项目

webpack1 如何通过 require.ensure 做到按需加载的

## vendor.js (入口)

```js
    // ===> vendor.js
    (function(modules) { // webpackBootstrap
        // install a JSONP callback for chunk loading
        var parentJsonpFunction = window["webpackJsonp"];
        window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
            // add "moreModules" to the modules object,
            // then flag all "chunkIds" as loaded and fire callback
            var moduleId, chunkId, i = 0, callbacks = [];
            for(;i < chunkIds.length; i++) {
                chunkId = chunkIds[i];
                if(installedChunks[chunkId])
                    callbacks.push.apply(callbacks, installedChunks[chunkId]);
                installedChunks[chunkId] = 0;
            }
            for(moduleId in moreModules) {
                modules[moduleId] = moreModules[moduleId];
            }
            if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
            while(callbacks.length)
                callbacks.shift().call(null, __webpack_require__);
            if(moreModules[0]) {
                installedModules[0] = 0;
                return __webpack_require__(0);
            }
        };


        // The module cache
        var installedModules = {};

        // object to store loaded and loading chunks
        // "0" means "already loaded"
        // Array means "loading", array contains callbacks
        var installedChunks = {
            4:0
        };

        // This file contains only the entry chunk.
        // The chunk loading function for additional chunks
        __webpack_require__.e = function requireEnsure(chunkId, callback) {
            // "0" is the signal for "already loaded"
            if(installedChunks[chunkId] === 0)
                return callback.call(null, __webpack_require__);

            // an array means "currently loading".
            if(installedChunks[chunkId] !== undefined) {
                installedChunks[chunkId].push(callback);
            } else {
                // start chunk loading
                installedChunks[chunkId] = [callback];
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.charset = 'utf-8';
                script.async = true;

                script.src = __webpack_require__.p + "" + ({"0":"index","1":"home","2":"list","3":"page"}[chunkId]||chunkId) + ".chunk." + {"0":"eddcafec","1":"43afc83a","2":"fc368006","3":"faf513c1"}[chunkId] + ".js";
                head.appendChild(script);
            }
        };

        // The require function
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

        return __webpack_require__(0);
    })([
        function(module, exports, __webpack_require__) {
            ...
        },
        ...
    ])

```

## index.js

```js
    webpackJsonp([0],{


        0: function() {
            //
        },

        ...

        189: function() {
            var Home = function Home(location, callback) {
                __webpack_require__.e/* nsure */(1, function (require) {
                    callback(null, __webpack_require__(266).default);
                });
            };

            var List = function List(location, callback) {
                __webpack_require__.e/* nsure */(2, function (require) {
                    callback(null, __webpack_require__(267).default);
                });
            };

            var Page = function Page(location, callback) {
                __webpack_require__.e/* nsure */(3, function (require) {
                    callback(null, __webpack_require__(268).default);
                });
            };
        }
    });
```

## react-router

```js
    // react-router  ====>

    import { mapAsync } from './AsyncUtils'
    import { canUseMembrane } from './deprecateObjectProperties'
    import warning from './routerWarning'

    function getComponentsForRoute(nextState, route, callback) {
    if (route.component || route.components) {
        callback(null, route.component || route.components)
        return
    }

    const getComponent = route.getComponent || route.getComponents
    if (!getComponent) {
        callback()
        return
    }

    const { location } = nextState
    let nextStateWithLocation

    if (__DEV__ && canUseMembrane) {
        nextStateWithLocation = { ...nextState }

        // I don't use deprecateObjectProperties here because I want to keep the
        // same code path between development and production, in that we just
        // assign extra properties to the copy of the state object in both cases.
        for (const prop in location) {
        if (!Object.prototype.hasOwnProperty.call(location, prop)) {
            continue
        }

        Object.defineProperty(nextStateWithLocation, prop, {
            get() {
            warning(false, 'Accessing location properties from the first argument to `getComponent` and `getComponents` is deprecated. That argument is now the router state (`nextState`) rather than the location. To access the location, use `nextState.location`.')
            return location[prop]
            }
        })
        }
    } else {
        nextStateWithLocation = { ...nextState, ...location }
    }

    getComponent.call(route, nextStateWithLocation, callback)
    }

    /**
     * Asynchronously fetches all components needed for the given router
     * state and calls callback(error, components) when finished.
     *
     * Note: This operation may finish synchronously if no routes have an
     * asynchronous getComponents method.
     */
    function getComponents(nextState, callback) {
        mapAsync(nextState.routes, function (route, index, callback) {
            getComponentsForRoute(nextState, route, callback)
        }, callback)
    }

    export default getComponents

```
