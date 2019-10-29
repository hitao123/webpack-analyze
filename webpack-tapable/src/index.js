const { SyncHook, SyncBailHook, SyncWaterfallHook, SyncLoopHook, AsyncParallelHook } = require('tapable');


class SyncHook_MY {
    constructor(){
        this.hooks = [];
    }

    // 订阅
    tap(name, fn){
        this.hooks.push(fn);
    }

    // 发布
    call(){
        let result;
        do {
            result = this.hook(...arguments);
        } while (result)
    }
}


// let queue = new SyncHook_MY();
let queue = new SyncLoopHook(['name']);

// // 订阅
// queue.tap('1', function (name) { // tap 的第一个参数是用来标识订阅的函数的
//     console.log(name, 1);
//     return 'hello';
// });

// queue.tap('2', function (name) {
//     console.log(name, 2);
//     return 'world';
// });

// queue.tap('3', function (name) {
//     console.log(name, 3);
// });


// let count = 3;

// queue.tap('1', function (name) {
//     console.log('count: ', count--);
//     if (count > 0) {
//         return true;
//     }
//     return;
// });


// // 发布
// queue.call('webpack', 'webpack-cli'); // 发布的时候触发订阅的函数 同时传入参数



// let queue1 = new AsyncParallelHook(['name']);
// console.time('cost');
// queue1.tap('1', function (name) {
//     console.log(name, 1);
// });
// queue1.tap('2', function (name) {
//     console.log(name, 2);
// });
// queue1.tap('3', function (name) {
//     console.log(name, 3);
// });
// queue1.callAsync('webpack', err => {
//     console.timeEnd('cost');
// });


// let queue2 = new AsyncParallelHook(['name']);

// console.time('cost1');

// queue2.tapAsync('1', function (name, cb) {
//     setTimeout(() => {
//         console.log(name, 1);
//         cb();
//     }, 1000);
// });

// queue2.tapAsync('2', function (name, cb) {
//     setTimeout(() => {
//         console.log(name, 2);
//         cb();
//     }, 2000);
// });

// queue2.tapAsync('3', function (name, cb) {
//     setTimeout(() => {
//         console.log(name, 3);
//         cb();
//     }, 3000);
// });

// queue2.callAsync('webpack', () => {
//     console.log('over');
//     console.timeEnd('cost1');
// });



// let queue3 = new AsyncParallelHook(['name']);
// console.time('cost3');
// queue3.tapPromise('1', function (name, cb) {
//    return new Promise(function (resolve, reject) {
//        setTimeout(() => {
//            console.log(name, 1);
//            resolve();
//        }, 1000);
//    });
// });

// queue3.tapPromise('1', function (name, cb) {
//    return new Promise(function (resolve, reject) {
//        setTimeout(() => {
//            console.log(name, 2);
//            resolve();
//        }, 2000);
//    });
// });

// queue3.tapPromise('1', function (name, cb) {
//    return new Promise(function (resolve, reject) {
//        setTimeout(() => {
//            console.log(name, 3);
//            resolve();
//        }, 3000);
//    });
// });

// queue3.promise('webpack')
//    .then(() => {
//        console.log('over');
//        console.timeEnd('cost3');
//    }, () => {
//        console.log('error');
//        console.timeEnd('cost3');
//    });


