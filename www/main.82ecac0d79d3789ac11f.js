/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/animation-text.js":
/*!*************************************!*\
  !*** ./assets/js/animation-text.js ***!
  \*************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://tashteam.co/./assets/js/animation-text.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-text */ \"./assets/js/animation-text.js\");\n/* harmony import */ var _animation_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animation_text__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ratio = .1;\nvar options = {\n  root: null,\n  rootMargin: '0px',\n  threshold: ratio\n};\nvar handleIntersect = function handleIntersect(entries, observer) {\n  entries.forEach(function (entry) {\n    if (entry.intersectionRatio > ratio) {\n      entry.target.classList.add('reveal-visible');\n      // observer.unobserve(entry.target)\n    } else {\n      entry.target.classList.remove('reveal-visible');\n    }\n  });\n};\nvar observer = new IntersectionObserver(handleIntersect, options);\nobserver.observe(document.querySelectorAll('.reveal').forEach(function (r) {\n  observer.observe(r);\n}));\nvar tl = gsap.timeline({\n  defaults: {\n    ease: 'power1.out'\n  }\n});\ntl.to('.text', {\n  y: '0%',\n  duration: 1,\n  stagger: 0.25\n});\n\n//# sourceURL=webpack://tashteam.co/./assets/js/main.js?");

/***/ }),

/***/ "./assets/css/main.scss":
/*!******************************!*\
  !*** ./assets/css/main.scss ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\"}\\\".\\n   ╷\\n19 │ }\\n   │  ^\\n   ╵\\n  assets/css/reveal.scss 19:2  @import\\n  assets/css/main.scss 3:9     root stylesheet\\n    at tryRunOrWebpackError (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/HookWebpackError.js:88:9)\\n    at __webpack_require_module__ (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5067:12)\\n    at __webpack_require__ (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5024:18)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5095:20\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3485:9)\\n    at done (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/Hook.js:18:14)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5002:43\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3463:5)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4967:16\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3463:5)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4935:15\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3485:9)\\n    at done (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3527:9)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4882:8\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:3361:32\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/HookWebpackError.js:68:3\\n    at Hook.eval [as callAsync] (eval at create (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Cache.js:107:20)\\n    at ItemCacheFacade.store (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/CacheFacade.js:141:15)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:3361:11\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Cache.js:93:5\\n    at Hook.eval [as callAsync] (eval at create (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at Cache.get (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Cache.js:75:18)\\n    at ItemCacheFacade.get (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/CacheFacade.js:115:15)\\n    at Compilation._codeGenerationModule (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:3331:9)\\n    at codeGen (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4870:11)\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3463:5)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4900:14\\n    at processQueue (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\\n-- inner error --\\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\"}\\\".\\n   ╷\\n19 │ }\\n   │  ^\\n   ╵\\n  assets/css/reveal.scss 19:2  @import\\n  assets/css/main.scss 3:9     root stylesheet\\n    at Object.<anonymous> (/Users/paulonavarro/sites/tashteam.co/node_modules/css-loader/dist/cjs.js!/Users/paulonavarro/sites/tashteam.co/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/Users/paulonavarro/sites/tashteam.co/node_modules/sass-loader/dist/cjs.js!/Users/paulonavarro/sites/tashteam.co/assets/css/main.scss:1:7)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\\n    at Hook.eval [as call] (eval at create (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/Hook.js:14:14)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5069:39\\n    at tryRunOrWebpackError (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/HookWebpackError.js:83:7)\\n    at __webpack_require_module__ (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5067:12)\\n    at __webpack_require__ (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5024:18)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5095:20\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3485:9)\\n    at done (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/Hook.js:18:14)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:5002:43\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3463:5)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4967:16\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3463:5)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4935:15\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3485:9)\\n    at done (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3527:9)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4882:8\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:3361:32\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/HookWebpackError.js:68:3\\n    at Hook.eval [as callAsync] (eval at create (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Cache.js:107:20)\\n    at ItemCacheFacade.store (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/CacheFacade.js:141:15)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:3361:11\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Cache.js:93:5\\n    at Hook.eval [as callAsync] (eval at create (/Users/paulonavarro/sites/tashteam.co/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at Cache.get (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Cache.js:75:18)\\n    at ItemCacheFacade.get (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/CacheFacade.js:115:15)\\n    at Compilation._codeGenerationModule (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:3331:9)\\n    at codeGen (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4870:11)\\n    at symbolIterator (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/Users/paulonavarro/sites/tashteam.co/node_modules/neo-async/async.js:3463:5)\\n    at /Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/Compilation.js:4900:14\\n    at processQueue (/Users/paulonavarro/sites/tashteam.co/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\\n\\nGenerated code for /Users/paulonavarro/sites/tashteam.co/node_modules/css-loader/dist/cjs.js!/Users/paulonavarro/sites/tashteam.co/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/Users/paulonavarro/sites/tashteam.co/node_modules/sass-loader/dist/cjs.js!/Users/paulonavarro/sites/tashteam.co/assets/css/main.scss\\n1 | throw new Error(\\\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\\\nexpected \\\\\\\"}\\\\\\\".\\\\n   ╷\\\\n19 │ }\\\\n   │  ^\\\\n   ╵\\\\n  assets/css/reveal.scss 19:2  @import\\\\n  assets/css/main.scss 3:9     root stylesheet\\\");\");\n\n//# sourceURL=webpack://tashteam.co/./assets/css/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/js/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/css/main.scss");
/******/ 	
/******/ })()
;