/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf');
    font-weight: 600;
    font-style: normal;
  }

.material-symbols-outlined {
font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  top: .200em;
  position: relative;
  pointer-events: none;
}

.hide {
    position: absolute;
    visibility: hidden;
}

.highlight {
    color: rgb(255, 255, 255);
    background-color: #183D3D;
    width: 210px; 
    padding-left: 1px;
}

* {
    font-family: 'Roboto';
    font-weight: lighter;
    list-style: none;
    color: aliceblue;
    padding: 0;
    margin: 0;
}

input, button, textarea, select, option {
    color: black;
}

.notVisible {
    visibility: hidden;
}

.visible {
    visibility: visible;
}

body{
    background-color: #183D3D;
}
.container {
    display: grid;
    grid-template-columns: 250px 4fr;
}

header {
    background-color: #040D12;
    border: 1px solid #93B1A6;
    border-radius: 10px;
    grid-column: 1 / 3;
    height: 60px;
    text-align: center;
    margin: 5px;
    font-size: 1.2em;
    box-shadow: 2px 2px #93B1A6;
}

header > h1 {
    margin-top: 10px;
    font-size: 30px;
}

/* Form */

.formContainer {
    
    margin-top: 75px;
    position: absolute;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    /* centers the absolute div */
    width: 317px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

form[action="todo-list-form"] {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[value="Create Task"] {
    width: 100%;
} 

input[id="title"] {
    margin-bottom: 5px;
    height: 20px;
}

textarea[id="description"],
input[id="title"],
select {
    width: 170px;
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 5px;
}

/* Sidebar */

.sidebar {
    background-color: #040D12;
    border: 1px solid #93B1A6;
    border-radius: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-top: 20px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-weight: bold;
    font-size: 1.2em;
    
    width: 191px;
    box-shadow: 2px 2px #93B1A6;

}

.addNewTask,
.addNewCategory {
    width: fit-content;
    margin-left: 20px
}

.addNewTask:hover,
.addNewCategory:hover {
    padding: 5px;
    border: 1px solid white;
    border-radius: 10px;
    width: fit-content;
    color: black;
    background-color: rgb(197, 198, 211);
    cursor: pointer;
}

.sidebar > ul > li {
    margin-bottom: 25px;
    padding-left: 20px;
}

.sidebar > ul > li:hover {
    cursor: pointer;
    background-color: #183D3D;
    width: 210px; 
    padding: 5px;
    box-sizing: unset;
}

.addNewTask > span,
.addNewCategory > span {
    background-color: blue;
    border-radius: 1000px;
    padding: 3px 8px 3px 8px;
}

.addNewCategory > span {
    background-color: purple;
}

.formCategory{
    position: absolute;
    margin-top: 86px;
    border: 1px solid white;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    width: 317px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

.formCategory > * {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 5px;
}

#addcategory{
    width: 160px;
    height: 20px;
    padding-left: 10px;
    border-radius: 20px;
}

.formCategory > * > button {
    align-self: center;
    padding: 2px;
    width: 25%;
    border-radius: 20px;
}

/* Todo Items */

.todoItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, 321px);
    margin: 5px;
    gap: 15px;
    
}

.item {
    background-color: #5C8374;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: fit-content;
    width: 300px;
    border: 1px solid #93B1A6;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    box-shadow: 3px 3px #93B1A6;

}

.topItemArea {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.topItemArea > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.2rem;
}

.topItemArea > div > h5 {
    font-size: 1.5em;
}

.checklistItemDisplay {
    width: 100%;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
}

.addNewChecklistItem {
    width: 100%;
    text-align: right;
}

.addNewChecklistItem > button {
    width: 70px;
    border-radius: 15px;
    padding: 3px;
}

.bottomItemArea > button {
    border-radius: 20px;
    width: 130px;
    height: 35px;
}

.checklistInput {
    border: 1px solid white;
    border-radius: 10px;
    padding: 3px;
}

.priority {
    background-color: #304b41;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Roboto';\r\n    src: url('./Roboto-Regular.ttf') format('ttf');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\n.material-symbols-outlined {\r\nfont-variation-settings:\r\n  'FILL' 0,\r\n  'wght' 400,\r\n  'GRAD' 0,\r\n  'opsz' 24;\r\n  top: .200em;\r\n  position: relative;\r\n  pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    position: absolute;\r\n    visibility: hidden;\r\n}\r\n\r\n.highlight {\r\n    color: rgb(255, 255, 255);\r\n    background-color: #183D3D;\r\n    width: 210px; \r\n    padding-left: 1px;\r\n}\r\n\r\n* {\r\n    font-family: 'Roboto';\r\n    font-weight: lighter;\r\n    list-style: none;\r\n    color: aliceblue;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\ninput, button, textarea, select, option {\r\n    color: black;\r\n}\r\n\r\n.notVisible {\r\n    visibility: hidden;\r\n}\r\n\r\n.visible {\r\n    visibility: visible;\r\n}\r\n\r\nbody{\r\n    background-color: #183D3D;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 250px 4fr;\r\n}\r\n\r\nheader {\r\n    background-color: #040D12;\r\n    border: 1px solid #93B1A6;\r\n    border-radius: 10px;\r\n    grid-column: 1 / 3;\r\n    height: 60px;\r\n    text-align: center;\r\n    margin: 5px;\r\n    font-size: 1.2em;\r\n    box-shadow: 2px 2px #93B1A6;\r\n}\r\n\r\nheader > h1 {\r\n    margin-top: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n/* Form */\r\n\r\n.formContainer {\r\n    \r\n    margin-top: 75px;\r\n    position: absolute;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    /* centers the absolute div */\r\n    width: 317px;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nform[action=\"todo-list-form\"] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\ninput[value=\"Create Task\"] {\r\n    width: 100%;\r\n} \r\n\r\ninput[id=\"title\"] {\r\n    margin-bottom: 5px;\r\n    height: 20px;\r\n}\r\n\r\ntextarea[id=\"description\"],\r\ninput[id=\"title\"],\r\nselect {\r\n    width: 170px;\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n/* Sidebar */\r\n\r\n.sidebar {\r\n    background-color: #040D12;\r\n    border: 1px solid #93B1A6;\r\n    border-radius: 10px;\r\n    padding-right: 10px;\r\n    padding-bottom: 0px;\r\n    padding-top: 20px;\r\n    margin: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n    \r\n    width: 191px;\r\n    box-shadow: 2px 2px #93B1A6;\r\n\r\n}\r\n\r\n.addNewTask,\r\n.addNewCategory {\r\n    width: fit-content;\r\n    margin-left: 20px\r\n}\r\n\r\n.addNewTask:hover,\r\n.addNewCategory:hover {\r\n    padding: 5px;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    width: fit-content;\r\n    color: black;\r\n    background-color: rgb(197, 198, 211);\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar > ul > li {\r\n    margin-bottom: 25px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.sidebar > ul > li:hover {\r\n    cursor: pointer;\r\n    background-color: #183D3D;\r\n    width: 210px; \r\n    padding: 5px;\r\n    box-sizing: unset;\r\n}\r\n\r\n.addNewTask > span,\r\n.addNewCategory > span {\r\n    background-color: blue;\r\n    border-radius: 1000px;\r\n    padding: 3px 8px 3px 8px;\r\n}\r\n\r\n.addNewCategory > span {\r\n    background-color: purple;\r\n}\r\n\r\n.formCategory{\r\n    position: absolute;\r\n    margin-top: 86px;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    padding: 10px;\r\n    width: 317px;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.formCategory > * {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: end;\r\n    gap: 5px;\r\n}\r\n\r\n#addcategory{\r\n    width: 160px;\r\n    height: 20px;\r\n    padding-left: 10px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.formCategory > * > button {\r\n    align-self: center;\r\n    padding: 2px;\r\n    width: 25%;\r\n    border-radius: 20px;\r\n}\r\n\r\n/* Todo Items */\r\n\r\n.todoItems {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 321px);\r\n    margin: 5px;\r\n    gap: 15px;\r\n    \r\n}\r\n\r\n.item {\r\n    background-color: #5C8374;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    height: fit-content;\r\n    width: 300px;\r\n    border: 1px solid #93B1A6;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    align-items: center;\r\n    box-shadow: 3px 3px #93B1A6;\r\n\r\n}\r\n\r\n.topItemArea {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.topItemArea > div {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.topItemArea > div > h5 {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.checklistItemDisplay {\r\n    width: 100%;\r\n    padding-left: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.addNewChecklistItem {\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.addNewChecklistItem > button {\r\n    width: 70px;\r\n    border-radius: 15px;\r\n    padding: 3px;\r\n}\r\n\r\n.bottomItemArea > button {\r\n    border-radius: 20px;\r\n    width: 130px;\r\n    height: 35px;\r\n}\r\n\r\n.checklistInput {\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n}\r\n\r\n.priority {\r\n    background-color: #304b41;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   cardInfo: () => (/* binding */ cardInfo),
/* harmony export */   checkTheBox: () => (/* binding */ checkTheBox),
/* harmony export */   deleteArrayItems: () => (/* binding */ deleteArrayItems)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");



let cardArray = [];
let cards = [];

class Card {
    constructor(title, date, category, description, identifier, priority){
        this.title = title;
        this.date = date;
        this.category = category;
        this.description = description;
        this.identifier = '' + identifier;
        this.priority = priority;
    }

    addChecklistItem(i){
        const cardID = document.getElementById(i);
        cardID.children.item(2).firstChild.addEventListener('click', ()=> {
            const newItemtext = prompt("Enter new checklist item");

            const newCheckboxLabel = document.createElement('label');
            newCheckboxLabel.htmlFor = newItemtext + "- domBox";
            newCheckboxLabel.textContent = ": " + newItemtext;

            const newCheckBox = document.createElement('input');
            newCheckBox.type = 'checkbox';
            newCheckBox.id = newItemtext + "- domBox";
            newCheckBox.addEventListener('change', checkTheBox(cardID, newItemtext, newCheckBox));

            newCheckBox.appendChild(newCheckboxLabel);

            const cardChecklistdiv = document.createElement("div");

            cardID.children.item(1).append(cardChecklistdiv);
            cardID.children.item(1).lastChild.appendChild(newCheckBox);
            cardID.children.item(1).lastChild.appendChild(newCheckboxLabel);
        
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.serializeChecklist)(cardID.id, newItemtext);
        });
    }

    completeTask(i) {
        const cardID = document.getElementById(i);
        
        cardID.children.item(3).firstChild.addEventListener('click', () => {
            console.log(i);
            console.log(cardID);
            
            for (let r = 0; r < _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List.length; r++){
                if (_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List[r].identifier === cardID.id){
                    console.log(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List[r].identifier);
                    console.log(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List[r]);
                    _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List.splice(r, 1);
                    _localStorage__WEBPACK_IMPORTED_MODULE_1__.storedLists.splice(r, 1);
                    deleteArrayItems(r);
                }
            }
            
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.serializeCard)(undefined);
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.serializeChecklist)(undefined, undefined);

            cardID.remove();
        });
        
    }

}

if(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList !== null){
    for(let i = 0; i < _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList.length; i++){
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i] = new Card(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].title, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].date, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].category, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].description, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].identifier, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].priority);
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].addChecklistItem(parseInt(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].identifier));
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].completeTask(parseInt(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].identifier));

        cards.push(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i]); 
        cardArray.push(i);
    }
}

function cardInfo() {
    let cardTitle;
    let cardDescription;
    let cardCategory;
    let cardDate;
    let cardPriority;
    let identification;
    cardTitle = document.getElementById('title').value;
    cardDescription = document.getElementById('description').value;
    cardCategory = document.getElementById('category').value;
    cardDate = document.getElementById('due').value;
    cardPriority = priorityValue();
    identification = Math.floor((Math.random() * 1000) * (Math.random() * 100));
    console.log(identification);
    for(let i = cardArray.length; i < cardArray.length + 1; i++){
        cards[i] = new Card(cardTitle, cardDate, cardCategory, cardDescription, identification, cardPriority);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayCard)(i, identification, cardTitle, cardDate, cardCategory, cardDescription, cardPriority);
        cards[i].addChecklistItem(identification);
        cards[i].completeTask(identification);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.serializeCard)(cards[i]);
    }

    cardArray.push(cards[cards.length - 1]);
}

function priorityValue() {
    const priorityCheck = document.querySelector("input[type='checkbox']");
    if (priorityCheck.checked){
        return true;
    } else {
        return false;
    }
}

function deleteArrayItems(i) {
    cards.splice(i, 1);
    console.log(cards);
    cardArray.splice(i, 1);
}

function checkTheBox(id, listitem, newCheckBox) {
    return function() {
        console.log(newCheckBox.checked);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.serializeCheck)(id.id, listitem, newCheckBox.checked);
        /*
        if(newCheckBox.checked == false){
            newCheckBox.value = true;
            console.log(newCheckBox.value);
            serializeCheck(id.id, listitem, newCheckBox.checked);
        } else {
            console.log("lol");
            newCheckBox.value = false;
            serializeCheck(id.id, listitem, newCheckBox.);
        }
        */
    }
    
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayCard: () => (/* binding */ displayCard),
/* harmony export */   displayStoredChecklists: () => (/* binding */ displayStoredChecklists),
/* harmony export */   updateCategorySelect: () => (/* binding */ updateCategorySelect)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/cards.js");


let cardShell = [];

const cardContainer = document.querySelector('.todoItems');

function displayCard(point, identification, title, date, category, description, priority) {
    const titleinput = document.querySelector("input[type='text']");
    titleinput.value = ''; 
    const textarea = document.querySelector("#description");
    textarea.value = '';
    const dateInput = document.querySelector("input[type='date']");
    dateInput.value = '';

    for (let i = point; i < point + 1; i++){
        cardShell[i] = document.createElement("div");
        cardShell[i].classList.add('item'); 
        cardShell[i].id = '' + identification;

        if (priority === true) cardShell[i].classList.add('priority'); 

    //tophalf of card, 3 children
        const cardTop = document.createElement("div");
        cardTop.classList.add('topItemArea');
        
        const categoryLabel = document.createElement('h5');
        categoryLabel.textContent = category;
        ////////////////////////////////////////////////
        const titleDate = document.createElement('div');
    
        const titleLabel = document.createElement('h5');
        titleLabel.textContent = title;

        const dateLabel = document.createElement('h6');
        dateLabel.textContent = date;
    
        titleDate.append(titleLabel, dateLabel);
        ///////////////////////////////////////////////
        const descriptionlabel = document.createElement('p');
        descriptionlabel.textContent = description;
        
        cardTop.append(categoryLabel, titleDate, descriptionlabel);
    
    //card checklist area
        const cardChecklist = document.createElement("div");
        cardChecklist.classList.add('checklistItemDisplay');
    
    //card button for creating a new checklist item
        const cardAddChecklist = document.createElement("div");
        cardAddChecklist.classList.add('addNewChecklistItem');
    
        const checklistAddButton = document.createElement('button');
        checklistAddButton.textContent = "Add Item";
    
        cardAddChecklist.appendChild(checklistAddButton);
    
    //bottom area of card
        const cardBottom = document.createElement("div");
        cardBottom.classList.add('bottomItemArea');
    
        const cardComplete = document.createElement('button');
        cardComplete.textContent = "Complete";
        
        cardBottom.appendChild(cardComplete);
        ///////////////////////////////////////////////
    
        cardShell[i].append(cardTop, cardChecklist, cardAddChecklist, cardBottom);
        cardContainer.appendChild(cardShell[i]);
        
    }
}

function displayStoredChecklists(i, listItem, check) {
    const cardID = document.getElementById(i);

    const newCheckboxLabel = document.createElement('label');
    newCheckboxLabel.htmlFor = listItem + "- domBox";
    newCheckboxLabel.textContent = ": " + listItem;

    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.id = listItem + "- domBox";
    newCheckBox.value = check;
    newCheckBox.checked = check;
    newCheckBox.addEventListener('change', (0,_cards__WEBPACK_IMPORTED_MODULE_0__.checkTheBox)(cardID, listItem, newCheckBox));


    newCheckBox.appendChild(newCheckboxLabel);

    const cardChecklistdiv = document.createElement("div");

    cardID.children.item(1).append(cardChecklistdiv);
    cardID.children.item(1).lastChild.appendChild(newCheckBox);
    cardID.children.item(1).lastChild.appendChild(newCheckboxLabel);
}

function updateCategorySelect() {
    const selectCategories = document.querySelector('#category');
    const removeCategories = document.querySelector('#removecategory');
    const newCategory = document.createElement('option');
    const newSidebarCategory = document.createElement('li');
    const ulCategories = document.querySelector(".addCategories");
    
    
    if (document.getElementById('addcategory').value === ''){
        //
    } else {
        newCategory.textContent = document.getElementById('addcategory').value;

        //added to sidebar
        newSidebarCategory.textContent = document.getElementById('addcategory').value;
        newSidebarCategory.addEventListener('click', categoryClick());
        ulCategories.appendChild(newSidebarCategory);

        //added to select
        selectCategories.appendChild(newCategory);
        removeCategories.appendChild(newCategory.cloneNode(true));

        //resetting input fields
        document.getElementById('addcategory').value = '';

        console.log(removeCategories.value);
    }

    if (removeCategories.value === ''){
        console.log(removeCategories.value);
        return
    } else {
        console.log(document.querySelector('#removecategory').value);
        const deleteItem = removeCategories.value;
//make it so that the sidebar elements also get removed
        for(let i = 0; i < document.querySelector('#removecategory').children.length; i++){
            console.log(removeCategories.children);
            if (deleteItem === document.querySelector('#removecategory').children[i].value){
                document.querySelector('#removecategory').children[i].remove();
            }
        }
        for(let i = 0; i < document.querySelector('.addCategories').children.length; i++){
            if (deleteItem === document.querySelector('.addCategories').children[i].textContent){
                document.querySelector(".addCategories").children[i].remove();
            }
        }
    }
}

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   card_List: () => (/* binding */ card_List),
/* harmony export */   card_deserializeList: () => (/* binding */ card_deserializeList),
/* harmony export */   serializeCard: () => (/* binding */ serializeCard),
/* harmony export */   serializeCheck: () => (/* binding */ serializeCheck),
/* harmony export */   serializeChecklist: () => (/* binding */ serializeChecklist),
/* harmony export */   storedLists: () => (/* binding */ storedLists)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


let card_List = [];
let storedLists = [];
function CheckListStore(id) {
    this.cardid = id,
    this.cardListArray = [],
    this.checked = []
}

const card_deserializeList = JSON.parse(localStorage.getItem("domCards"));
const storedlist_deserialize = JSON.parse(localStorage.getItem("checklist"));

deserializecards();
deserializeChecklist()

function serializeCard(card) {
    if(card === undefined){
        const card_serializedList = JSON.stringify(card_List);
        localStorage.setItem("domCards", card_serializedList);
    } else {
        card_List.push(card);
        const card_serializedList = JSON.stringify(card_List);
        
        localStorage.setItem("domCards", card_serializedList);
    }
    
}

function serializeChecklist(id, listItem){
    if (id === undefined){
        const StoredList_serialized = JSON.stringify(storedLists);
        localStorage.setItem("checklist", StoredList_serialized);
    } else {

        if(storedLists.some(e => e.cardid === id)){
            const index = storedLists.findIndex(e => e.cardid === id);
            storedLists[index].cardListArray.push(listItem);
        } else {
            const newStoredList = new CheckListStore(id);
            newStoredList.cardListArray.push(listItem);
            newStoredList.checked.push(false);
            storedLists.push(newStoredList);
            
        }
        
        const StoredList_serialized = JSON.stringify(storedLists);
        localStorage.setItem("checklist", StoredList_serialized);
    }
    
}

function serializeCheck(id, listItem, check){
   
    const cardindex = storedLists.findIndex(e => e.cardid === id);
    
    const listItemIndex = storedLists[cardindex].cardListArray.findIndex(e => e === listItem);
    
    
    storedLists[cardindex].checked[listItemIndex] = check;
    

    const StoredList_serialized = JSON.stringify(storedLists);
    localStorage.setItem("checklist", StoredList_serialized);
}

function deserializecards() {
    
    if(card_deserializeList !== null){
        for(let i = 0; i < card_deserializeList.length; i++){
            card_List.push(card_deserializeList[i]);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayCard)(i, parseInt(card_deserializeList[i].identifier), card_deserializeList[i].title, card_deserializeList[i].date, card_deserializeList[i].category, card_deserializeList[i].description, card_deserializeList[i].priority);
        }
    }

}

function deserializeChecklist() {
    if(storedlist_deserialize !== null){
        for(let i = 0; i < storedlist_deserialize.length; i++){
            storedLists.push(storedlist_deserialize[i]);
            for(let r = 0; r < storedlist_deserialize[i].cardListArray.length; r++){
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayStoredChecklists)(storedlist_deserialize[i].cardid, storedlist_deserialize[i].cardListArray[r], storedlist_deserialize[i].checked[r]);
            }
        }
    }
}



/***/ }),

/***/ "./src/sidebardom.js":
/*!***************************!*\
  !*** ./src/sidebardom.js ***!
  \***************************/
/***/ (() => {

//Sidebar functionality
const items = document.querySelectorAll(".item");
highlight(document.querySelector('#index'));


document.querySelector('#index').addEventListener("click", index());
function index() {
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
        });
    }
}

document.querySelector("#today").addEventListener("click", today());
function today() {
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
            const cardDay = new Date(item.children.item(0).children.item(1).children.item(1).textContent.replace(/-/g,"/"));
            
            const userDay = new Date();

            const fullCardDate = `${cardDay.getMonth()} ${cardDay.getDate()} ${cardDay.getFullYear()}`;
            const fullUserDate = `${userDay.getMonth()} ${userDay.getDate()} ${userDay.getFullYear()}`;

            if (fullCardDate !== fullUserDate){
                item.classList.add("hide");
            }
        });
    }
}

document.querySelector("#tomorrow").addEventListener("click", tomorrow());
function tomorrow() {
    return function(event) {
        highlight(event.target)
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.add("hide");
            const cardDay = new Date(item.children.item(0).children.item(1).children.item(1).textContent.replace(/-/g,"/"));
            
            const userDay = new Date();

            if ([0, 2, 4, 6, 7, 9, 11].includes(userDay.getMonth())){
                //checks 31 day months
                if(((userDay.getDate + 1) === 32) && (((((userDay.getMonth() + 1) === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())) || (((userDay.getMonth() + 1) === 12) && (userDay.getFullYear() + 1 === cardDay.getFullYear()))))){
                    //checks if it is the next month or year
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getMonth() === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())) {
                    item.classList.remove("hide");
                }
            } else if ([3, 5, 8, 10].includes(userDay.getMonth())) {
                //Checks 30 day months
                if (((userDay.getDate + 1) === 31) && ((userDay.getMonth() + 1) === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getMonth() === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                }
            } else if ((userDay.getMonth === 1) && ((userDay.getFullYear % 4) !== 0)){
                //not leap year
                if (((userDay.getDate + 1) === 29) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } 
            } else if ((userDay.getMonth === 1) && ((userDay.getFullYear % 4) === 0)){
                //leap year
                if (((userDay.getDate + 1) === 30) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } 
            } else {
                return
            }
        });
    }
}

document.querySelector('#someday').addEventListener("click", someday());
function someday() {
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
            const cardDay = item.children.item(0).children.item(1).children.item(1).textContent;
            if (cardDay === '') {
                item.classList.add("hide");
            }
        });
    }
}

document.querySelector('#noDate').addEventListener("click", nodate());
function nodate() {
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
            const cardDay = item.children.item(0).children.item(1).children.item(1).textContent;
            if (cardDay !== '') {
                item.classList.add("hide");
            }
        });
    }
}

//Category functtionality

function categoryClick(){
    return function(event) {
        highlight(event.target)
        items = document.querySelectorAll(".item");
        const clickedCategory = event.target.textContent;
        items.forEach( item => {
            item.classList.remove("hide");
            
            const cardCategory = item.children.item(0).children.item(0).textContent;
             
            if(clickedCategory !== cardCategory){
                item.classList.add("hide");
            }
        });
    }
}

function highlight(pressed) {
    const timeCats = document.querySelector(".sortTime").children;
    for(let i = 0; i < timeCats.length; i++){
        timeCats[i].classList.remove("highlight");
    }
    
    pressed.classList.add("highlight");
}

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _sidebardom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebardom */ "./src/sidebardom.js");
/* harmony import */ var _sidebardom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sidebardom__WEBPACK_IMPORTED_MODULE_3__);






taskform();
formCategory();


function taskform() {
    const form = document.querySelector("div.formContainer");

    const newTask = document.querySelector(".addNewTask");
    newTask.addEventListener('click', ()=> {
        form.classList.toggle("notVisible");
    });

    const formSubmit = document.querySelector('input[type="submit"]');
    formSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        (0,_cards__WEBPACK_IMPORTED_MODULE_1__.cardInfo)();
        form.classList.add('notVisible');
    });
}

//window.onclick = closeForms;

function closeForms() {
    //currently does not work
    const form = document.querySelector("div.formContainer");
    const categoryForm = document.querySelector(".formCategory");
    if(!form.classList.contains("notVisible") || !categoryForm.classList.contains('notVisible')){
        categoryForm.classList.toggle('notVisible');
        form.classList.toggle("notVisible");
    }
}

function formCategory() {
    const newCategory = document.querySelector(".addNewCategory");
    const categoryForm = document.querySelector(".formCategory");
    newCategory.addEventListener("click", () => {
        categoryForm.classList.toggle('notVisible');
    });


    const applybutton = document.querySelector(".formCategory > * > button");
    applybutton.addEventListener('click', function(event) {
        event.preventDefault();
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateCategorySelect)();
        categoryForm.classList.add('notVisible');
    });
}



/*
Things t0 work on:
- Highlight the sidebar button that is clicked
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sV0FBVyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsYUFBYSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQVE7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQW9CO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYXJkcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJkb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHRmJyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcclxuZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XHJcbiAgJ0ZJTEwnIDAsXHJcbiAgJ3dnaHQnIDQwMCxcclxuICAnR1JBRCcgMCxcclxuICAnb3BzeicgMjQ7XHJcbiAgdG9wOiAuMjAwZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODNEM0Q7XHJcbiAgICB3aWR0aDogMjEwcHg7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3QsIG9wdGlvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ub3RWaXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODNEM0Q7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA0ZnI7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwRDEyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzQjFBNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICM5M0IxQTY7XHJcbn1cclxuXHJcbmhlYWRlciA+IGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi8qIEZvcm0gKi9cclxuXHJcbi5mb3JtQ29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAvKiBjZW50ZXJzIHRoZSBhYnNvbHV0ZSBkaXYgKi9cclxuICAgIHdpZHRoOiAzMTdweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5mb3JtW2FjdGlvbj1cInRvZG8tbGlzdC1mb3JtXCJdIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFt2YWx1ZT1cIkNyZWF0ZSBUYXNrXCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IFxyXG5cclxuaW5wdXRbaWQ9XCJ0aXRsZVwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhW2lkPVwiZGVzY3JpcHRpb25cIl0sXHJcbmlucHV0W2lkPVwidGl0bGVcIl0sXHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi8qIFNpZGViYXIgKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDBEMTI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTNCMUE2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTkxcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICM5M0IxQTY7XHJcblxyXG59XHJcblxyXG4uYWRkTmV3VGFzayxcclxuLmFkZE5ld0NhdGVnb3J5IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XHJcbn1cclxuXHJcbi5hZGROZXdUYXNrOmhvdmVyLFxyXG4uYWRkTmV3Q2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk4LCAyMTEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZWJhciA+IHVsID4gbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNpZGViYXIgPiB1bCA+IGxpOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODNEM0Q7XHJcbiAgICB3aWR0aDogMjEwcHg7IFxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNpemluZzogdW5zZXQ7XHJcbn1cclxuXHJcbi5hZGROZXdUYXNrID4gc3BhbixcclxuLmFkZE5ld0NhdGVnb3J5ID4gc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDhweCAzcHggOHB4O1xyXG59XHJcblxyXG4uYWRkTmV3Q2F0ZWdvcnkgPiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxufVxyXG5cclxuLmZvcm1DYXRlZ29yeXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDg2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDMxN3B4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtQ2F0ZWdvcnkgPiAqIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4jYWRkY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybUNhdGVnb3J5ID4gKiA+IGJ1dHRvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLyogVG9kbyBJdGVtcyAqL1xyXG5cclxuLnRvZG9JdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMjFweCk7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGdhcDogMTVweDtcclxuICAgIFxyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM4Mzc0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzQjFBNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggIzkzQjFBNjtcclxuXHJcbn1cclxuXHJcbi50b3BJdGVtQXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4udG9wSXRlbUFyZWEgPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi50b3BJdGVtQXJlYSA+IGRpdiA+IGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5jaGVja2xpc3RJdGVtRGlzcGxheSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYWRkTmV3Q2hlY2tsaXN0SXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWRkTmV3Q2hlY2tsaXN0SXRlbSA+IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5ib3R0b21JdGVtQXJlYSA+IGJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uY2hlY2tsaXN0SW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4ucHJpb3JpdHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGI0MTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiwwREFBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRjtBQUNBOzs7O1dBSVc7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBLFNBQVM7O0FBRVQ7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixZQUFZO0lBQ1osMkJBQTJCOztBQUUvQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxTQUFTOztBQUViOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG5mb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXHJcXG4gICdGSUxMJyAwLFxcclxcbiAgJ3dnaHQnIDQwMCxcXHJcXG4gICdHUkFEJyAwLFxcclxcbiAgJ29wc3onIDI0O1xcclxcbiAgdG9wOiAuMjAwZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODNEM0Q7XFxyXFxuICAgIHdpZHRoOiAyMTBweDsgXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0LCBvcHRpb24ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ub3RWaXNpYmxlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODNEM0Q7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDRmcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MEQxMjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzQjFBNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggIzkzQjFBNjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm0gKi9cXHJcXG5cXHJcXG4uZm9ybUNvbnRhaW5lciB7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIC8qIGNlbnRlcnMgdGhlIGFic29sdXRlIGRpdiAqL1xcclxcbiAgICB3aWR0aDogMzE3cHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtW2FjdGlvbj1cXFwidG9kby1saXN0LWZvcm1cXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdmFsdWU9XFxcIkNyZWF0ZSBUYXNrXFxcIl0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59IFxcclxcblxcclxcbmlucHV0W2lkPVxcXCJ0aXRsZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhW2lkPVxcXCJkZXNjcmlwdGlvblxcXCJdLFxcclxcbmlucHV0W2lkPVxcXCJ0aXRsZVxcXCJdLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lkZWJhciAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MEQxMjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzQjFBNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBcXHJcXG4gICAgd2lkdGg6IDE5MXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICM5M0IxQTY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hZGROZXdUYXNrLFxcclxcbi5hZGROZXdDYXRlZ29yeSB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld1Rhc2s6aG92ZXIsXFxyXFxuLmFkZE5ld0NhdGVnb3J5OmhvdmVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5OCwgMjExKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IHVsID4gbGkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gdWwgPiBsaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4M0QzRDtcXHJcXG4gICAgd2lkdGg6IDIxMHB4OyBcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld1Rhc2sgPiBzcGFuLFxcclxcbi5hZGROZXdDYXRlZ29yeSA+IHNwYW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld0NhdGVnb3J5ID4gc3BhbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1DYXRlZ29yeXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4NnB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMzE3cHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNhdGVnb3J5ID4gKiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkY2F0ZWdvcnl7XFxyXFxuICAgIHdpZHRoOiAxNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ2F0ZWdvcnkgPiAqID4gYnV0dG9uIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFRvZG8gSXRlbXMgKi9cXHJcXG5cXHJcXG4udG9kb0l0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMjFweCk7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QzgzNzQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTNCMUE2O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4ICM5M0IxQTY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50b3BJdGVtQXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEl0ZW1BcmVhID4gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEl0ZW1BcmVhID4gZGl2ID4gaDUge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0SXRlbURpc3BsYXkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3Q2hlY2tsaXN0SXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld0NoZWNrbGlzdEl0ZW0gPiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tSXRlbUFyZWEgPiBidXR0b24ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdElucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGI0MTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkaXNwbGF5Q2FyZCB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemVDYXJkLCBjYXJkX2Rlc2VyaWFsaXplTGlzdCwgY2FyZF9MaXN0LCBzZXJpYWxpemVDaGVja2xpc3QsIHN0b3JlZExpc3RzLCBzZXJpYWxpemVDaGVjayB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxubGV0IGNhcmRBcnJheSA9IFtdO1xyXG5sZXQgY2FyZHMgPSBbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGlkZW50aWZpZXIsIHByaW9yaXR5KXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9ICcnICsgaWRlbnRpZmllcjtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hlY2tsaXN0SXRlbShpKXtcclxuICAgICAgICBjb25zdCBjYXJkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuICAgICAgICBjYXJkSUQuY2hpbGRyZW4uaXRlbSgyKS5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW10ZXh0ID0gcHJvbXB0KFwiRW50ZXIgbmV3IGNoZWNrbGlzdCBpdGVtXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3Q2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIG5ld0NoZWNrYm94TGFiZWwuaHRtbEZvciA9IG5ld0l0ZW10ZXh0ICsgXCItIGRvbUJveFwiO1xyXG4gICAgICAgICAgICBuZXdDaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gXCI6IFwiICsgbmV3SXRlbXRleHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIG5ld0NoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgICAgICBuZXdDaGVja0JveC5pZCA9IG5ld0l0ZW10ZXh0ICsgXCItIGRvbUJveFwiO1xyXG4gICAgICAgICAgICBuZXdDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja1RoZUJveChjYXJkSUQsIG5ld0l0ZW10ZXh0LCBuZXdDaGVja0JveCkpO1xyXG5cclxuICAgICAgICAgICAgbmV3Q2hlY2tCb3guYXBwZW5kQ2hpbGQobmV3Q2hlY2tib3hMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQ2hlY2tsaXN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmRJRC5jaGlsZHJlbi5pdGVtKDEpLmFwcGVuZChjYXJkQ2hlY2tsaXN0ZGl2KTtcclxuICAgICAgICAgICAgY2FyZElELmNoaWxkcmVuLml0ZW0oMSkubGFzdENoaWxkLmFwcGVuZENoaWxkKG5ld0NoZWNrQm94KTtcclxuICAgICAgICAgICAgY2FyZElELmNoaWxkcmVuLml0ZW0oMSkubGFzdENoaWxkLmFwcGVuZENoaWxkKG5ld0NoZWNrYm94TGFiZWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBzZXJpYWxpemVDaGVja2xpc3QoY2FyZElELmlkLCBuZXdJdGVtdGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGxldGVUYXNrKGkpIHtcclxuICAgICAgICBjb25zdCBjYXJkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkSUQuY2hpbGRyZW4uaXRlbSgzKS5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZElEKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgY2FyZF9MaXN0Lmxlbmd0aDsgcisrKXtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJkX0xpc3Rbcl0uaWRlbnRpZmllciA9PT0gY2FyZElELmlkKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkX0xpc3Rbcl0uaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZF9MaXN0W3JdKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkX0xpc3Quc3BsaWNlKHIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZExpc3RzLnNwbGljZShyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVBcnJheUl0ZW1zKHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXJpYWxpemVDYXJkKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6ZUNoZWNrbGlzdCh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICBjYXJkSUQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5pZihjYXJkX2Rlc2VyaWFsaXplTGlzdCAhPT0gbnVsbCl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZF9kZXNlcmlhbGl6ZUxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldID0gbmV3IENhcmQoY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0udGl0bGUsIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmRhdGUsIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmNhdGVnb3J5LCBjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS5kZXNjcmlwdGlvbiwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0uaWRlbnRpZmllciwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0ucHJpb3JpdHkpO1xyXG4gICAgICAgIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmFkZENoZWNrbGlzdEl0ZW0ocGFyc2VJbnQoY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0uaWRlbnRpZmllcikpO1xyXG4gICAgICAgIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmNvbXBsZXRlVGFzayhwYXJzZUludChjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS5pZGVudGlmaWVyKSk7XHJcblxyXG4gICAgICAgIGNhcmRzLnB1c2goY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0pOyBcclxuICAgICAgICBjYXJkQXJyYXkucHVzaChpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcmRJbmZvKCkge1xyXG4gICAgbGV0IGNhcmRUaXRsZTtcclxuICAgIGxldCBjYXJkRGVzY3JpcHRpb247XHJcbiAgICBsZXQgY2FyZENhdGVnb3J5O1xyXG4gICAgbGV0IGNhcmREYXRlO1xyXG4gICAgbGV0IGNhcmRQcmlvcml0eTtcclxuICAgIGxldCBpZGVudGlmaWNhdGlvbjtcclxuICAgIGNhcmRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gICAgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICBjYXJkQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZTtcclxuICAgIGNhcmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZScpLnZhbHVlO1xyXG4gICAgY2FyZFByaW9yaXR5ID0gcHJpb3JpdHlWYWx1ZSgpO1xyXG4gICAgaWRlbnRpZmljYXRpb24gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKiAoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xyXG4gICAgY29uc29sZS5sb2coaWRlbnRpZmljYXRpb24pO1xyXG4gICAgZm9yKGxldCBpID0gY2FyZEFycmF5Lmxlbmd0aDsgaSA8IGNhcmRBcnJheS5sZW5ndGggKyAxOyBpKyspe1xyXG4gICAgICAgIGNhcmRzW2ldID0gbmV3IENhcmQoY2FyZFRpdGxlLCBjYXJkRGF0ZSwgY2FyZENhdGVnb3J5LCBjYXJkRGVzY3JpcHRpb24sIGlkZW50aWZpY2F0aW9uLCBjYXJkUHJpb3JpdHkpO1xyXG4gICAgICAgIGRpc3BsYXlDYXJkKGksIGlkZW50aWZpY2F0aW9uLCBjYXJkVGl0bGUsIGNhcmREYXRlLCBjYXJkQ2F0ZWdvcnksIGNhcmREZXNjcmlwdGlvbiwgY2FyZFByaW9yaXR5KTtcclxuICAgICAgICBjYXJkc1tpXS5hZGRDaGVja2xpc3RJdGVtKGlkZW50aWZpY2F0aW9uKTtcclxuICAgICAgICBjYXJkc1tpXS5jb21wbGV0ZVRhc2soaWRlbnRpZmljYXRpb24pO1xyXG4gICAgICAgIHNlcmlhbGl6ZUNhcmQoY2FyZHNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRBcnJheS5wdXNoKGNhcmRzW2NhcmRzLmxlbmd0aCAtIDFdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpb3JpdHlWYWx1ZSgpIHtcclxuICAgIGNvbnN0IHByaW9yaXR5Q2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcclxuICAgIGlmIChwcmlvcml0eUNoZWNrLmNoZWNrZWQpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBcnJheUl0ZW1zKGkpIHtcclxuICAgIGNhcmRzLnNwbGljZShpLCAxKTtcclxuICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuICAgIGNhcmRBcnJheS5zcGxpY2UoaSwgMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1RoZUJveChpZCwgbGlzdGl0ZW0sIG5ld0NoZWNrQm94KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q2hlY2tCb3guY2hlY2tlZCk7XHJcbiAgICAgICAgc2VyaWFsaXplQ2hlY2soaWQuaWQsIGxpc3RpdGVtLCBuZXdDaGVja0JveC5jaGVja2VkKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmKG5ld0NoZWNrQm94LmNoZWNrZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBuZXdDaGVja0JveC52YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0NoZWNrQm94LnZhbHVlKTtcclxuICAgICAgICAgICAgc2VyaWFsaXplQ2hlY2soaWQuaWQsIGxpc3RpdGVtLCBuZXdDaGVja0JveC5jaGVja2VkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvbFwiKTtcclxuICAgICAgICAgICAgbmV3Q2hlY2tCb3gudmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2VyaWFsaXplQ2hlY2soaWQuaWQsIGxpc3RpdGVtLCBuZXdDaGVja0JveC4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBjaGVja1RoZUJveCB9IGZyb20gXCIuL2NhcmRzXCI7XHJcblxyXG5sZXQgY2FyZFNoZWxsID0gW107XHJcblxyXG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9JdGVtcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDYXJkKHBvaW50LCBpZGVudGlmaWNhdGlvbiwgdGl0bGUsIGRhdGUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IHRpdGxlaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xyXG4gICAgdGl0bGVpbnB1dC52YWx1ZSA9ICcnOyBcclxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuICAgIHRleHRhcmVhLnZhbHVlID0gJyc7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nZGF0ZSddXCIpO1xyXG4gICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHBvaW50OyBpIDwgcG9pbnQgKyAxOyBpKyspe1xyXG4gICAgICAgIGNhcmRTaGVsbFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZFNoZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTsgXHJcbiAgICAgICAgY2FyZFNoZWxsW2ldLmlkID0gJycgKyBpZGVudGlmaWNhdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB0cnVlKSBjYXJkU2hlbGxbaV0uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTsgXHJcblxyXG4gICAgLy90b3BoYWxmIG9mIGNhcmQsIDMgY2hpbGRyZW5cclxuICAgICAgICBjb25zdCBjYXJkVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkVG9wLmNsYXNzTGlzdC5hZGQoJ3RvcEl0ZW1BcmVhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xyXG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IGRhdGU7XHJcbiAgICBcclxuICAgICAgICB0aXRsZURhdGUuYXBwZW5kKHRpdGxlTGFiZWwsIGRhdGVMYWJlbCk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9ubGFiZWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkVG9wLmFwcGVuZChjYXRlZ29yeUxhYmVsLCB0aXRsZURhdGUsIGRlc2NyaXB0aW9ubGFiZWwpO1xyXG4gICAgXHJcbiAgICAvL2NhcmQgY2hlY2tsaXN0IGFyZWFcclxuICAgICAgICBjb25zdCBjYXJkQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkQ2hlY2tsaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdEl0ZW1EaXNwbGF5Jyk7XHJcbiAgICBcclxuICAgIC8vY2FyZCBidXR0b24gZm9yIGNyZWF0aW5nIGEgbmV3IGNoZWNrbGlzdCBpdGVtXHJcbiAgICAgICAgY29uc3QgY2FyZEFkZENoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZEFkZENoZWNrbGlzdC5jbGFzc0xpc3QuYWRkKCdhZGROZXdDaGVja2xpc3RJdGVtJyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjaGVja2xpc3RBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjaGVja2xpc3RBZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XHJcbiAgICBcclxuICAgICAgICBjYXJkQWRkQ2hlY2tsaXN0LmFwcGVuZENoaWxkKGNoZWNrbGlzdEFkZEJ1dHRvbik7XHJcbiAgICBcclxuICAgIC8vYm90dG9tIGFyZWEgb2YgY2FyZFxyXG4gICAgICAgIGNvbnN0IGNhcmRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmRCb3R0b20uY2xhc3NMaXN0LmFkZCgnYm90dG9tSXRlbUFyZWEnKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNhcmRDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNhcmRDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVcIjtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkQm90dG9tLmFwcGVuZENoaWxkKGNhcmRDb21wbGV0ZSk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIFxyXG4gICAgICAgIGNhcmRTaGVsbFtpXS5hcHBlbmQoY2FyZFRvcCwgY2FyZENoZWNrbGlzdCwgY2FyZEFkZENoZWNrbGlzdCwgY2FyZEJvdHRvbSk7XHJcbiAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkU2hlbGxbaV0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVN0b3JlZENoZWNrbGlzdHMoaSwgbGlzdEl0ZW0sIGNoZWNrKSB7XHJcbiAgICBjb25zdCBjYXJkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuXHJcbiAgICBjb25zdCBuZXdDaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5ld0NoZWNrYm94TGFiZWwuaHRtbEZvciA9IGxpc3RJdGVtICsgXCItIGRvbUJveFwiO1xyXG4gICAgbmV3Q2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IFwiOiBcIiArIGxpc3RJdGVtO1xyXG5cclxuICAgIGNvbnN0IG5ld0NoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5ld0NoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgbmV3Q2hlY2tCb3guaWQgPSBsaXN0SXRlbSArIFwiLSBkb21Cb3hcIjtcclxuICAgIG5ld0NoZWNrQm94LnZhbHVlID0gY2hlY2s7XHJcbiAgICBuZXdDaGVja0JveC5jaGVja2VkID0gY2hlY2s7XHJcbiAgICBuZXdDaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja1RoZUJveChjYXJkSUQsIGxpc3RJdGVtLCBuZXdDaGVja0JveCkpO1xyXG5cclxuXHJcbiAgICBuZXdDaGVja0JveC5hcHBlbmRDaGlsZChuZXdDaGVja2JveExhYmVsKTtcclxuXHJcbiAgICBjb25zdCBjYXJkQ2hlY2tsaXN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjYXJkSUQuY2hpbGRyZW4uaXRlbSgxKS5hcHBlbmQoY2FyZENoZWNrbGlzdGRpdik7XHJcbiAgICBjYXJkSUQuY2hpbGRyZW4uaXRlbSgxKS5sYXN0Q2hpbGQuYXBwZW5kQ2hpbGQobmV3Q2hlY2tCb3gpO1xyXG4gICAgY2FyZElELmNoaWxkcmVuLml0ZW0oMSkubGFzdENoaWxkLmFwcGVuZENoaWxkKG5ld0NoZWNrYm94TGFiZWwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnlTZWxlY3QoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5Jyk7XHJcbiAgICBjb25zdCByZW1vdmVDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZWNhdGVnb3J5Jyk7XHJcbiAgICBjb25zdCBuZXdDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgY29uc3QgbmV3U2lkZWJhckNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHVsQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQ2F0ZWdvcmllc1wiKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGNhdGVnb3J5JykudmFsdWUgPT09ICcnKXtcclxuICAgICAgICAvL1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdDYXRlZ29yeS50ZXh0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRjYXRlZ29yeScpLnZhbHVlO1xyXG5cclxuICAgICAgICAvL2FkZGVkIHRvIHNpZGViYXJcclxuICAgICAgICBuZXdTaWRlYmFyQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkY2F0ZWdvcnknKS52YWx1ZTtcclxuICAgICAgICBuZXdTaWRlYmFyQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXRlZ29yeUNsaWNrKCkpO1xyXG4gICAgICAgIHVsQ2F0ZWdvcmllcy5hcHBlbmRDaGlsZChuZXdTaWRlYmFyQ2F0ZWdvcnkpO1xyXG5cclxuICAgICAgICAvL2FkZGVkIHRvIHNlbGVjdFxyXG4gICAgICAgIHNlbGVjdENhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3Q2F0ZWdvcnkpO1xyXG4gICAgICAgIHJlbW92ZUNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3Q2F0ZWdvcnkuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgICAgLy9yZXNldHRpbmcgaW5wdXQgZmllbGRzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGNhdGVnb3J5JykudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlQ2F0ZWdvcmllcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlbW92ZUNhdGVnb3JpZXMudmFsdWUgPT09ICcnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZW1vdmVDYXRlZ29yaWVzLnZhbHVlKTtcclxuICAgICAgICByZXR1cm5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZWNhdGVnb3J5JykudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSByZW1vdmVDYXRlZ29yaWVzLnZhbHVlO1xyXG4vL21ha2UgaXQgc28gdGhhdCB0aGUgc2lkZWJhciBlbGVtZW50cyBhbHNvIGdldCByZW1vdmVkXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVjYXRlZ29yeScpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlQ2F0ZWdvcmllcy5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVJdGVtID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlY2F0ZWdvcnknKS5jaGlsZHJlbltpXS52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlY2F0ZWdvcnknKS5jaGlsZHJlbltpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZENhdGVnb3JpZXMnKS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVJdGVtID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQ2F0ZWdvcmllcycpLmNoaWxkcmVuW2ldLnRleHRDb250ZW50KXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQ2F0ZWdvcmllc1wiKS5jaGlsZHJlbltpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGRpc3BsYXlDYXJkLCBkaXNwbGF5U3RvcmVkQ2hlY2tsaXN0cyB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuZXhwb3J0IGxldCBjYXJkX0xpc3QgPSBbXTtcclxuZXhwb3J0IGxldCBzdG9yZWRMaXN0cyA9IFtdO1xyXG5mdW5jdGlvbiBDaGVja0xpc3RTdG9yZShpZCkge1xyXG4gICAgdGhpcy5jYXJkaWQgPSBpZCxcclxuICAgIHRoaXMuY2FyZExpc3RBcnJheSA9IFtdLFxyXG4gICAgdGhpcy5jaGVja2VkID0gW11cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRfZGVzZXJpYWxpemVMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRvbUNhcmRzXCIpKTtcclxuY29uc3Qgc3RvcmVkbGlzdF9kZXNlcmlhbGl6ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGVja2xpc3RcIikpO1xyXG5cclxuZGVzZXJpYWxpemVjYXJkcygpO1xyXG5kZXNlcmlhbGl6ZUNoZWNrbGlzdCgpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplQ2FyZChjYXJkKSB7XHJcbiAgICBpZihjYXJkID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGNvbnN0IGNhcmRfc2VyaWFsaXplZExpc3QgPSBKU09OLnN0cmluZ2lmeShjYXJkX0xpc3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZG9tQ2FyZHNcIiwgY2FyZF9zZXJpYWxpemVkTGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhcmRfTGlzdC5wdXNoKGNhcmQpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRfc2VyaWFsaXplZExpc3QgPSBKU09OLnN0cmluZ2lmeShjYXJkX0xpc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZG9tQ2FyZHNcIiwgY2FyZF9zZXJpYWxpemVkTGlzdCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUNoZWNrbGlzdChpZCwgbGlzdEl0ZW0pe1xyXG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGNvbnN0IFN0b3JlZExpc3Rfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHN0b3JlZExpc3RzKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrbGlzdFwiLCBTdG9yZWRMaXN0X3NlcmlhbGl6ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoc3RvcmVkTGlzdHMuc29tZShlID0+IGUuY2FyZGlkID09PSBpZCkpe1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0b3JlZExpc3RzLmZpbmRJbmRleChlID0+IGUuY2FyZGlkID09PSBpZCk7XHJcbiAgICAgICAgICAgIHN0b3JlZExpc3RzW2luZGV4XS5jYXJkTGlzdEFycmF5LnB1c2gobGlzdEl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0b3JlZExpc3QgPSBuZXcgQ2hlY2tMaXN0U3RvcmUoaWQpO1xyXG4gICAgICAgICAgICBuZXdTdG9yZWRMaXN0LmNhcmRMaXN0QXJyYXkucHVzaChsaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIG5ld1N0b3JlZExpc3QuY2hlY2tlZC5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgICAgc3RvcmVkTGlzdHMucHVzaChuZXdTdG9yZWRMaXN0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IFN0b3JlZExpc3Rfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHN0b3JlZExpc3RzKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrbGlzdFwiLCBTdG9yZWRMaXN0X3NlcmlhbGl6ZWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVDaGVjayhpZCwgbGlzdEl0ZW0sIGNoZWNrKXtcclxuICAgXHJcbiAgICBjb25zdCBjYXJkaW5kZXggPSBzdG9yZWRMaXN0cy5maW5kSW5kZXgoZSA9PiBlLmNhcmRpZCA9PT0gaWQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsaXN0SXRlbUluZGV4ID0gc3RvcmVkTGlzdHNbY2FyZGluZGV4XS5jYXJkTGlzdEFycmF5LmZpbmRJbmRleChlID0+IGUgPT09IGxpc3RJdGVtKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBzdG9yZWRMaXN0c1tjYXJkaW5kZXhdLmNoZWNrZWRbbGlzdEl0ZW1JbmRleF0gPSBjaGVjaztcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IFN0b3JlZExpc3Rfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHN0b3JlZExpc3RzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tsaXN0XCIsIFN0b3JlZExpc3Rfc2VyaWFsaXplZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplY2FyZHMoKSB7XHJcbiAgICBcclxuICAgIGlmKGNhcmRfZGVzZXJpYWxpemVMaXN0ICE9PSBudWxsKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZF9kZXNlcmlhbGl6ZUxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYXJkX0xpc3QucHVzaChjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDYXJkKGksIHBhcnNlSW50KGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmlkZW50aWZpZXIpLCBjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS50aXRsZSwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0uZGF0ZSwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0uY2F0ZWdvcnksIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmRlc2NyaXB0aW9uLCBjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS5wcmlvcml0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGVzZXJpYWxpemVDaGVja2xpc3QoKSB7XHJcbiAgICBpZihzdG9yZWRsaXN0X2Rlc2VyaWFsaXplICE9PSBudWxsKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RvcmVkbGlzdF9kZXNlcmlhbGl6ZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0b3JlZExpc3RzLnB1c2goc3RvcmVkbGlzdF9kZXNlcmlhbGl6ZVtpXSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgciA9IDA7IHIgPCBzdG9yZWRsaXN0X2Rlc2VyaWFsaXplW2ldLmNhcmRMaXN0QXJyYXkubGVuZ3RoOyByKyspe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVN0b3JlZENoZWNrbGlzdHMoc3RvcmVkbGlzdF9kZXNlcmlhbGl6ZVtpXS5jYXJkaWQsIHN0b3JlZGxpc3RfZGVzZXJpYWxpemVbaV0uY2FyZExpc3RBcnJheVtyXSwgc3RvcmVkbGlzdF9kZXNlcmlhbGl6ZVtpXS5jaGVja2VkW3JdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLy9TaWRlYmFyIGZ1bmN0aW9uYWxpdHlcclxuY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbmhpZ2hsaWdodChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5kZXgnKSk7XHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZGV4JykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluZGV4KCkpO1xyXG5mdW5jdGlvbiBpbmRleCgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RheSgpKTtcclxuZnVuY3Rpb24gdG9kYXkoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZERheSA9IG5ldyBEYXRlKGl0ZW0uY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDEpLmNoaWxkcmVuLml0ZW0oMSkudGV4dENvbnRlbnQucmVwbGFjZSgvLS9nLFwiL1wiKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxDYXJkRGF0ZSA9IGAke2NhcmREYXkuZ2V0TW9udGgoKX0gJHtjYXJkRGF5LmdldERhdGUoKX0gJHtjYXJkRGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgICAgY29uc3QgZnVsbFVzZXJEYXRlID0gYCR7dXNlckRheS5nZXRNb250aCgpfSAke3VzZXJEYXkuZ2V0RGF0ZSgpfSAke3VzZXJEYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZ1bGxDYXJkRGF0ZSAhPT0gZnVsbFVzZXJEYXRlKXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b21vcnJvd1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9tb3Jyb3coKSk7XHJcbmZ1bmN0aW9uIHRvbW9ycm93KCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0KGV2ZW50LnRhcmdldClcclxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZERheSA9IG5ldyBEYXRlKGl0ZW0uY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDEpLmNoaWxkcmVuLml0ZW0oMSkudGV4dENvbnRlbnQucmVwbGFjZSgvLS9nLFwiL1wiKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChbMCwgMiwgNCwgNiwgNywgOSwgMTFdLmluY2x1ZGVzKHVzZXJEYXkuZ2V0TW9udGgoKSkpe1xyXG4gICAgICAgICAgICAgICAgLy9jaGVja3MgMzEgZGF5IG1vbnRoc1xyXG4gICAgICAgICAgICAgICAgaWYoKCh1c2VyRGF5LmdldERhdGUgKyAxKSA9PT0gMzIpICYmICgoKCgodXNlckRheS5nZXRNb250aCgpICsgMSkgPT09IGNhcmREYXkuZ2V0TW9udGgoKSkgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSkgfHwgKCgodXNlckRheS5nZXRNb250aCgpICsgMSkgPT09IDEyKSAmJiAodXNlckRheS5nZXRGdWxsWWVhcigpICsgMSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSkpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVja3MgaWYgaXQgaXMgdGhlIG5leHQgbW9udGggb3IgeWVhclxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgodXNlckRheS5nZXREYXRlKCkgKyAxKSA9PT0gY2FyZERheS5nZXREYXRlKCkpICYmICh1c2VyRGF5LmdldE1vbnRoKCkgPT09IGNhcmREYXkuZ2V0TW9udGgoKSkgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoWzMsIDUsIDgsIDEwXS5pbmNsdWRlcyh1c2VyRGF5LmdldE1vbnRoKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAvL0NoZWNrcyAzMCBkYXkgbW9udGhzXHJcbiAgICAgICAgICAgICAgICBpZiAoKCh1c2VyRGF5LmdldERhdGUgKyAxKSA9PT0gMzEpICYmICgodXNlckRheS5nZXRNb250aCgpICsgMSkgPT09IGNhcmREYXkuZ2V0TW9udGgoKSkgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKCh1c2VyRGF5LmdldERhdGUoKSArIDEpID09PSBjYXJkRGF5LmdldERhdGUoKSkgJiYgKHVzZXJEYXkuZ2V0TW9udGgoKSA9PT0gY2FyZERheS5nZXRNb250aCgpKSAmJiAodXNlckRheS5nZXRGdWxsWWVhcigpID09PSBjYXJkRGF5LmdldEZ1bGxZZWFyKCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh1c2VyRGF5LmdldE1vbnRoID09PSAxKSAmJiAoKHVzZXJEYXkuZ2V0RnVsbFllYXIgJSA0KSAhPT0gMCkpe1xyXG4gICAgICAgICAgICAgICAgLy9ub3QgbGVhcCB5ZWFyXHJcbiAgICAgICAgICAgICAgICBpZiAoKCh1c2VyRGF5LmdldERhdGUgKyAxKSA9PT0gMjkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgodXNlckRheS5nZXREYXRlKCkgKyAxKSA9PT0gY2FyZERheS5nZXREYXRlKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh1c2VyRGF5LmdldE1vbnRoID09PSAxKSAmJiAoKHVzZXJEYXkuZ2V0RnVsbFllYXIgJSA0KSA9PT0gMCkpe1xyXG4gICAgICAgICAgICAgICAgLy9sZWFwIHllYXJcclxuICAgICAgICAgICAgICAgIGlmICgoKHVzZXJEYXkuZ2V0RGF0ZSArIDEpID09PSAzMCkgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKCh1c2VyRGF5LmdldERhdGUoKSArIDEpID09PSBjYXJkRGF5LmdldERhdGUoKSkgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29tZWRheScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb21lZGF5KCkpO1xyXG5mdW5jdGlvbiBzb21lZGF5KCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmREYXkgPSBpdGVtLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgxKS5jaGlsZHJlbi5pdGVtKDEpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAoY2FyZERheSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vRGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBub2RhdGUoKSk7XHJcbmZ1bmN0aW9uIG5vZGF0ZSgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRGF5ID0gaXRlbS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMSkuY2hpbGRyZW4uaXRlbSgxKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKGNhcmREYXkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2F0ZWdvcnkgZnVuY3R0aW9uYWxpdHlcclxuXHJcbmZ1bmN0aW9uIGNhdGVnb3J5Q2xpY2soKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodChldmVudC50YXJnZXQpXHJcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY2FyZENhdGVnb3J5ID0gaXRlbS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCkudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY2xpY2tlZENhdGVnb3J5ICE9PSBjYXJkQ2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHQocHJlc3NlZCkge1xyXG4gICAgY29uc3QgdGltZUNhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRUaW1lXCIpLmNoaWxkcmVuO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbWVDYXRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aW1lQ2F0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcmVzc2VkLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2NhcmRJbmZvfSBmcm9tIFwiLi9jYXJkc1wiO1xyXG5pbXBvcnQge3VwZGF0ZUNhdGVnb3J5U2VsZWN0fSBmcm9tICcuL2RvbSdcclxuaW1wb3J0ICcuL3NpZGViYXJkb20nO1xyXG5cclxuXHJcbnRhc2tmb3JtKCk7XHJcbmZvcm1DYXRlZ29yeSgpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRhc2tmb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZm9ybUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGROZXdUYXNrXCIpO1xyXG4gICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcIm5vdFZpc2libGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xyXG4gICAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjYXJkSW5mbygpO1xyXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbm90VmlzaWJsZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vd2luZG93Lm9uY2xpY2sgPSBjbG9zZUZvcm1zO1xyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtcygpIHtcclxuICAgIC8vY3VycmVudGx5IGRvZXMgbm90IHdvcmtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm1Db250YWluZXJcIik7XHJcbiAgICBjb25zdCBjYXRlZ29yeUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1DYXRlZ29yeVwiKTtcclxuICAgIGlmKCFmb3JtLmNsYXNzTGlzdC5jb250YWlucyhcIm5vdFZpc2libGVcIikgfHwgIWNhdGVnb3J5Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ25vdFZpc2libGUnKSl7XHJcbiAgICAgICAgY2F0ZWdvcnlGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ25vdFZpc2libGUnKTtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJub3RWaXNpYmxlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtQ2F0ZWdvcnkoKSB7XHJcbiAgICBjb25zdCBuZXdDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTmV3Q2F0ZWdvcnlcIik7XHJcbiAgICBjb25zdCBjYXRlZ29yeUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1DYXRlZ29yeVwiKTtcclxuICAgIG5ld0NhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2F0ZWdvcnlGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ25vdFZpc2libGUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBhcHBseWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUNhdGVnb3J5ID4gKiA+IGJ1dHRvblwiKTtcclxuICAgIGFwcGx5YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U2VsZWN0KCk7XHJcbiAgICAgICAgY2F0ZWdvcnlGb3JtLmNsYXNzTGlzdC5hZGQoJ25vdFZpc2libGUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qXHJcblRoaW5ncyB0MCB3b3JrIG9uOlxyXG4tIEhpZ2hsaWdodCB0aGUgc2lkZWJhciBidXR0b24gdGhhdCBpcyBjbGlja2VkXHJcbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9