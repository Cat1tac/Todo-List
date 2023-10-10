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
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.newChecklistDisplay)(i)
    }

    completeTask(i) {
        const cardID = document.getElementById(i);
        console.log(cardID);
        console.log(cardID.children);
        cardID.children.item(3).firstChild.addEventListener('click', () => {
            console.log(i);
            console.log(cardID);
            
            for (let r = 0; r < _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List.length; r++){
                if (_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List[r].identifier === cardID.id){
                    console.log(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List[r].identifier);
                    console.log(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List[r]);
                    _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_List.splice(r, 1);
                    deleteArrayItems(r);
                }
            }
            
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.serializeCard)(undefined);

            cardID.remove();
        });
        
    }

}

if(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList !== null){
    for(let i = 0; i < _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList.length; i++){
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i] = new Card(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].title, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].date, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].category, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].description, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].identifier, _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].priority);
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].addChecklistItem(parseInt(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].identifier));
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].completeTask(parseInt(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i].identifier));

        console.log(_localStorage__WEBPACK_IMPORTED_MODULE_1__.card_deserializeList[i]);
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

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardShell: () => (/* binding */ cardShell),
/* harmony export */   displayCard: () => (/* binding */ displayCard),
/* harmony export */   newChecklistDisplay: () => (/* binding */ newChecklistDisplay),
/* harmony export */   updateCategorySelect: () => (/* binding */ updateCategorySelect)
/* harmony export */ });
//import { serializeChecklist } from "./localStorage";

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
        const cardChecklistdiv = document.createElement("div");
        cardChecklist.append(cardChecklistdiv);
    
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

function newChecklistDisplay(i) {
    console.log(i);
    const cardID = document.getElementById(i);
    cardID.children.item(2).firstChild.addEventListener('click', ()=> {
        const newItemtext = prompt("Enter new checklist item");

        const newCheckboxLabel = document.createElement('label');
        newCheckboxLabel.htmlFor = newItemtext + "- domBox";
        newCheckboxLabel.textContent = ": " + newItemtext;

        const newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.id = newItemtext + "- domBox";

        newCheckBox.appendChild(newCheckboxLabel);
        

        cardID.children.item(1).firstChild.appendChild(newCheckBox);
        cardID.children.item(1).firstChild.appendChild(newCheckboxLabel);
        
        serializeChecklist(cardID.id, newItemtext);
    });
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
/* harmony export */   serializeChecklist: () => (/* binding */ serializeChecklist)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


let card_List = [];
let listItemArray = [];
const card_deserializeList = JSON.parse(localStorage.getItem("domCards"));


deserialize();

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
//whe a new check is created, the program should find the cardid it was created on then append it to the list of cardItems
function serializeChecklist(id, listItem){
    const checkListStore = {
        cardid: id,
        cardListItem: function () {
            listItemArray.push(listItem);
            return listItemArray;
        }
    }
    console.log(checkListStore);
    
}

function deserialize() {
    
    if(card_deserializeList !== null){
        for(let i = 0; i < card_deserializeList.length; i++){
            card_List.push(card_deserializeList[i]);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayCard)(i, parseInt(card_deserializeList[i].identifier), card_deserializeList[i].title, card_deserializeList[i].date, card_deserializeList[i].category, card_deserializeList[i].description, card_deserializeList[i].priority);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sV0FBVyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsYUFBYSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FB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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1k7QUFDUztBQUNwQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFRO0FBQ2hCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFvQjtBQUM1QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3R0ZicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbmZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxyXG4gICdGSUxMJyAwLFxyXG4gICd3Z2h0JyA0MDAsXHJcbiAgJ0dSQUQnIDAsXHJcbiAgJ29wc3onIDI0O1xyXG4gIHRvcDogLjIwMGVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xyXG4gICAgd2lkdGg6IDIxMHB4OyBcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG59XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0LCBvcHRpb24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubm90VmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi52aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggNGZyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MEQxMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5M0IxQTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjOTNCMUE2O1xyXG59XHJcblxyXG5oZWFkZXIgPiBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4vKiBGb3JtICovXHJcblxyXG4uZm9ybUNvbnRhaW5lciB7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgLyogY2VudGVycyB0aGUgYWJzb2x1dGUgZGl2ICovXHJcbiAgICB3aWR0aDogMzE3cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuZm9ybVthY3Rpb249XCJ0b2RvLWxpc3QtZm9ybVwiXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuaW5wdXRbdmFsdWU9XCJDcmVhdGUgVGFza1wiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSBcclxuXHJcbmlucHV0W2lkPVwidGl0bGVcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdLFxyXG5pbnB1dFtpZD1cInRpdGxlXCJdLFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vKiBTaWRlYmFyICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwRDEyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzQjFBNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDE5MXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjOTNCMUE2O1xyXG5cclxufVxyXG5cclxuLmFkZE5ld1Rhc2ssXHJcbi5hZGROZXdDYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweFxyXG59XHJcblxyXG4uYWRkTmV3VGFzazpob3ZlcixcclxuLmFkZE5ld0NhdGVnb3J5OmhvdmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5OCwgMjExKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXIgPiB1bCA+IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyID4gdWwgPiBsaTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xyXG4gICAgd2lkdGg6IDIxMHB4OyBcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaXppbmc6IHVuc2V0O1xyXG59XHJcblxyXG4uYWRkTmV3VGFzayA+IHNwYW4sXHJcbi5hZGROZXdDYXRlZ29yeSA+IHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcclxuICAgIHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcclxufVxyXG5cclxuLmFkZE5ld0NhdGVnb3J5ID4gc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi5mb3JtQ2F0ZWdvcnl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4NnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAzMTdweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybUNhdGVnb3J5ID4gKiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuI2FkZGNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmZvcm1DYXRlZ29yeSA+ICogPiBidXR0b24ge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFRvZG8gSXRlbXMgKi9cclxuXHJcbi50b2RvSXRlbXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzIxcHgpO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDODM3NDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5M0IxQTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4ICM5M0IxQTY7XHJcblxyXG59XHJcblxyXG4udG9wSXRlbUFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLnRvcEl0ZW1BcmVhID4gZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4udG9wSXRlbUFyZWEgPiBkaXYgPiBoNSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uY2hlY2tsaXN0SXRlbURpc3BsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFkZE5ld0NoZWNrbGlzdEl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFkZE5ld0NoZWNrbGlzdEl0ZW0gPiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4uYm90dG9tSXRlbUFyZWEgPiBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmNoZWNrbGlzdElucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLnByaW9yaXR5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDRiNDE7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMERBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUY7QUFDQTs7OztXQUlXO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVB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LGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxyXFxuICAnRklMTCcgMCxcXHJcXG4gICd3Z2h0JyA0MDAsXFxyXFxuICAnR1JBRCcgMCxcXHJcXG4gICdvcHN6JyAyNDtcXHJcXG4gIHRvcDogLjIwMGVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xcclxcbiAgICB3aWR0aDogMjEwcHg7IFxcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCwgb3B0aW9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90VmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA0ZnI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDBEMTI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5M0IxQTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICM5M0IxQTY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IGgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtICovXFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXIge1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luLXRvcDogNzVweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICAvKiBjZW50ZXJzIHRoZSBhYnNvbHV0ZSBkaXYgKi9cXHJcXG4gICAgd2lkdGg6IDMxN3B4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybVthY3Rpb249XFxcInRvZG8tbGlzdC1mb3JtXFxcIl0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3ZhbHVlPVxcXCJDcmVhdGUgVGFza1xcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufSBcXHJcXG5cXHJcXG5pbnB1dFtpZD1cXFwidGl0bGVcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYVtpZD1cXFwiZGVzY3JpcHRpb25cXFwiXSxcXHJcXG5pbnB1dFtpZD1cXFwidGl0bGVcXFwiXSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgICB3aWR0aDogMTcwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZGViYXIgKi9cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDBEMTI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5M0IxQTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOiAxOTFweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjOTNCMUE2O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3VGFzayxcXHJcXG4uYWRkTmV3Q2F0ZWdvcnkge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XFxyXFxufVxcclxcblxcclxcbi5hZGROZXdUYXNrOmhvdmVyLFxcclxcbi5hZGROZXdDYXRlZ29yeTpob3ZlciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxOTgsIDIxMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiB1bCA+IGxpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IHVsID4gbGk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODNEM0Q7XFxyXFxuICAgIHdpZHRoOiAyMTBweDsgXFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm94LXNpemluZzogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5hZGROZXdUYXNrID4gc3BhbixcXHJcXG4uYWRkTmV3Q2F0ZWdvcnkgPiBzcGFuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHggOHB4IDNweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGROZXdDYXRlZ29yeSA+IHNwYW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ2F0ZWdvcnl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogODZweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDMxN3B4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1DYXRlZ29yeSA+ICoge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZGNhdGVnb3J5e1xcclxcbiAgICB3aWR0aDogMTYwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNhdGVnb3J5ID4gKiA+IGJ1dHRvbiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUb2RvIEl0ZW1zICovXFxyXFxuXFxyXFxuLnRvZG9JdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzIxcHgpO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM4Mzc0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzQjFBNjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAjOTNCMUE2O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udG9wSXRlbUFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b3BJdGVtQXJlYSA+IGRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50b3BJdGVtQXJlYSA+IGRpdiA+IGg1IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdEl0ZW1EaXNwbGF5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld0NoZWNrbGlzdEl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5hZGROZXdDaGVja2xpc3RJdGVtID4gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbUl0ZW1BcmVhID4gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3RJbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDRiNDE7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheUNhcmQsIG5ld0NoZWNrbGlzdERpc3BsYXkgfSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplQ2FyZCwgY2FyZF9kZXNlcmlhbGl6ZUxpc3QsIGNhcmRfTGlzdCB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxubGV0IGNhcmRBcnJheSA9IFtdO1xyXG5sZXQgY2FyZHMgPSBbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGlkZW50aWZpZXIsIHByaW9yaXR5KXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9ICcnICsgaWRlbnRpZmllcjtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hlY2tsaXN0SXRlbShpKXtcclxuICAgICAgICBuZXdDaGVja2xpc3REaXNwbGF5KGkpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcGxldGVUYXNrKGkpIHtcclxuICAgICAgICBjb25zdCBjYXJkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJkSUQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRJRC5jaGlsZHJlbik7XHJcbiAgICAgICAgY2FyZElELmNoaWxkcmVuLml0ZW0oMykuZmlyc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRJRCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IGNhcmRfTGlzdC5sZW5ndGg7IHIrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZF9MaXN0W3JdLmlkZW50aWZpZXIgPT09IGNhcmRJRC5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZF9MaXN0W3JdLmlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRfTGlzdFtyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZF9MaXN0LnNwbGljZShyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVBcnJheUl0ZW1zKHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXJpYWxpemVDYXJkKHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICBjYXJkSUQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5pZihjYXJkX2Rlc2VyaWFsaXplTGlzdCAhPT0gbnVsbCl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZF9kZXNlcmlhbGl6ZUxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldID0gbmV3IENhcmQoY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0udGl0bGUsIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmRhdGUsIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmNhdGVnb3J5LCBjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS5kZXNjcmlwdGlvbiwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0uaWRlbnRpZmllciwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0ucHJpb3JpdHkpO1xyXG4gICAgICAgIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmFkZENoZWNrbGlzdEl0ZW0ocGFyc2VJbnQoY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0uaWRlbnRpZmllcikpO1xyXG4gICAgICAgIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmNvbXBsZXRlVGFzayhwYXJzZUludChjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS5pZGVudGlmaWVyKSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldKTtcclxuICAgICAgICBjYXJkcy5wdXNoKGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldKTsgXHJcbiAgICAgICAgY2FyZEFycmF5LnB1c2goaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXJkSW5mbygpIHtcclxuICAgIGxldCBjYXJkVGl0bGU7XHJcbiAgICBsZXQgY2FyZERlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGNhcmRDYXRlZ29yeTtcclxuICAgIGxldCBjYXJkRGF0ZTtcclxuICAgIGxldCBjYXJkUHJpb3JpdHk7XHJcbiAgICBsZXQgaWRlbnRpZmljYXRpb247XHJcbiAgICBjYXJkVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgIGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgY2FyZENhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWU7XHJcbiAgICBjYXJkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKS52YWx1ZTtcclxuICAgIGNhcmRQcmlvcml0eSA9IHByaW9yaXR5VmFsdWUoKTtcclxuICAgIGlkZW50aWZpY2F0aW9uID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDApICogKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcclxuICAgIGNvbnNvbGUubG9nKGlkZW50aWZpY2F0aW9uKTtcclxuICAgIGZvcihsZXQgaSA9IGNhcmRBcnJheS5sZW5ndGg7IGkgPCBjYXJkQXJyYXkubGVuZ3RoICsgMTsgaSsrKXtcclxuICAgICAgICBjYXJkc1tpXSA9IG5ldyBDYXJkKGNhcmRUaXRsZSwgY2FyZERhdGUsIGNhcmRDYXRlZ29yeSwgY2FyZERlc2NyaXB0aW9uLCBpZGVudGlmaWNhdGlvbiwgY2FyZFByaW9yaXR5KTtcclxuICAgICAgICBkaXNwbGF5Q2FyZChpLCBpZGVudGlmaWNhdGlvbiwgY2FyZFRpdGxlLCBjYXJkRGF0ZSwgY2FyZENhdGVnb3J5LCBjYXJkRGVzY3JpcHRpb24sIGNhcmRQcmlvcml0eSk7XHJcbiAgICAgICAgY2FyZHNbaV0uYWRkQ2hlY2tsaXN0SXRlbShpZGVudGlmaWNhdGlvbik7XHJcbiAgICAgICAgY2FyZHNbaV0uY29tcGxldGVUYXNrKGlkZW50aWZpY2F0aW9uKTtcclxuICAgICAgICBzZXJpYWxpemVDYXJkKGNhcmRzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkQXJyYXkucHVzaChjYXJkc1tjYXJkcy5sZW5ndGggLSAxXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW9yaXR5VmFsdWUoKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XHJcbiAgICBpZiAocHJpb3JpdHlDaGVjay5jaGVja2VkKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQXJyYXlJdGVtcyhpKSB7XHJcbiAgICBjYXJkcy5zcGxpY2UoaSwgMSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJkcyk7XHJcbiAgICBjYXJkQXJyYXkuc3BsaWNlKGksIDEpO1xyXG59IiwiLy9pbXBvcnQgeyBzZXJpYWxpemVDaGVja2xpc3QgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBsZXQgY2FyZFNoZWxsID0gW107XHJcblxyXG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9JdGVtcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDYXJkKHBvaW50LCBpZGVudGlmaWNhdGlvbiwgdGl0bGUsIGRhdGUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IHRpdGxlaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xyXG4gICAgdGl0bGVpbnB1dC52YWx1ZSA9ICcnOyBcclxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuICAgIHRleHRhcmVhLnZhbHVlID0gJyc7XHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nZGF0ZSddXCIpO1xyXG4gICAgZGF0ZUlucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHBvaW50OyBpIDwgcG9pbnQgKyAxOyBpKyspe1xyXG4gICAgICAgIGNhcmRTaGVsbFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZFNoZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTsgXHJcbiAgICAgICAgY2FyZFNoZWxsW2ldLmlkID0gJycgKyBpZGVudGlmaWNhdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB0cnVlKSBjYXJkU2hlbGxbaV0uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTsgXHJcblxyXG4gICAgLy90b3BoYWxmIG9mIGNhcmQsIDMgY2hpbGRyZW5cclxuICAgICAgICBjb25zdCBjYXJkVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkVG9wLmNsYXNzTGlzdC5hZGQoJ3RvcEl0ZW1BcmVhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xyXG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IGRhdGU7XHJcbiAgICBcclxuICAgICAgICB0aXRsZURhdGUuYXBwZW5kKHRpdGxlTGFiZWwsIGRhdGVMYWJlbCk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9ubGFiZWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkVG9wLmFwcGVuZChjYXRlZ29yeUxhYmVsLCB0aXRsZURhdGUsIGRlc2NyaXB0aW9ubGFiZWwpO1xyXG4gICAgXHJcbiAgICAvL2NhcmQgY2hlY2tsaXN0IGFyZWFcclxuICAgICAgICBjb25zdCBjYXJkQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkQ2hlY2tsaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdEl0ZW1EaXNwbGF5Jyk7XHJcbiAgICAgICAgY29uc3QgY2FyZENoZWNrbGlzdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZENoZWNrbGlzdC5hcHBlbmQoY2FyZENoZWNrbGlzdGRpdik7XHJcbiAgICBcclxuICAgIC8vY2FyZCBidXR0b24gZm9yIGNyZWF0aW5nIGEgbmV3IGNoZWNrbGlzdCBpdGVtXHJcbiAgICAgICAgY29uc3QgY2FyZEFkZENoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZEFkZENoZWNrbGlzdC5jbGFzc0xpc3QuYWRkKCdhZGROZXdDaGVja2xpc3RJdGVtJyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjaGVja2xpc3RBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjaGVja2xpc3RBZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XHJcbiAgICBcclxuICAgICAgICBjYXJkQWRkQ2hlY2tsaXN0LmFwcGVuZENoaWxkKGNoZWNrbGlzdEFkZEJ1dHRvbik7XHJcbiAgICBcclxuICAgIC8vYm90dG9tIGFyZWEgb2YgY2FyZFxyXG4gICAgICAgIGNvbnN0IGNhcmRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmRCb3R0b20uY2xhc3NMaXN0LmFkZCgnYm90dG9tSXRlbUFyZWEnKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNhcmRDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNhcmRDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVcIjtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkQm90dG9tLmFwcGVuZENoaWxkKGNhcmRDb21wbGV0ZSk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIFxyXG4gICAgICAgIGNhcmRTaGVsbFtpXS5hcHBlbmQoY2FyZFRvcCwgY2FyZENoZWNrbGlzdCwgY2FyZEFkZENoZWNrbGlzdCwgY2FyZEJvdHRvbSk7XHJcbiAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkU2hlbGxbaV0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3Q2hlY2tsaXN0RGlzcGxheShpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhpKTtcclxuICAgIGNvbnN0IGNhcmRJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xyXG4gICAgY2FyZElELmNoaWxkcmVuLml0ZW0oMikuZmlyc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW10ZXh0ID0gcHJvbXB0KFwiRW50ZXIgbmV3IGNoZWNrbGlzdCBpdGVtXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdDaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBuZXdDaGVja2JveExhYmVsLmh0bWxGb3IgPSBuZXdJdGVtdGV4dCArIFwiLSBkb21Cb3hcIjtcclxuICAgICAgICBuZXdDaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gXCI6IFwiICsgbmV3SXRlbXRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0NoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuZXdDaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICBuZXdDaGVja0JveC5pZCA9IG5ld0l0ZW10ZXh0ICsgXCItIGRvbUJveFwiO1xyXG5cclxuICAgICAgICBuZXdDaGVja0JveC5hcHBlbmRDaGlsZChuZXdDaGVja2JveExhYmVsKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY2FyZElELmNoaWxkcmVuLml0ZW0oMSkuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChuZXdDaGVja0JveCk7XHJcbiAgICAgICAgY2FyZElELmNoaWxkcmVuLml0ZW0oMSkuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChuZXdDaGVja2JveExhYmVsKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXJpYWxpemVDaGVja2xpc3QoY2FyZElELmlkLCBuZXdJdGVtdGV4dCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5U2VsZWN0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0Q2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeScpO1xyXG4gICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVjYXRlZ29yeScpO1xyXG4gICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIGNvbnN0IG5ld1NpZGViYXJDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCB1bENhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZENhdGVnb3JpZXNcIik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRjYXRlZ29yeScpLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgLy9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3Q2F0ZWdvcnkudGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkY2F0ZWdvcnknKS52YWx1ZTtcclxuXHJcbiAgICAgICAgLy9hZGRlZCB0byBzaWRlYmFyXHJcbiAgICAgICAgbmV3U2lkZWJhckNhdGVnb3J5LnRleHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGNhdGVnb3J5JykudmFsdWU7XHJcbiAgICAgICAgbmV3U2lkZWJhckNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2F0ZWdvcnlDbGljaygpKTtcclxuICAgICAgICB1bENhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3U2lkZWJhckNhdGVnb3J5KTtcclxuXHJcbiAgICAgICAgLy9hZGRlZCB0byBzZWxlY3RcclxuICAgICAgICBzZWxlY3RDYXRlZ29yaWVzLmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5KTtcclxuICAgICAgICByZW1vdmVDYXRlZ29yaWVzLmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICAgIC8vcmVzZXR0aW5nIGlucHV0IGZpZWxkc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRjYXRlZ29yeScpLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZUNhdGVnb3JpZXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZW1vdmVDYXRlZ29yaWVzLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlQ2F0ZWdvcmllcy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVjYXRlZ29yeScpLnZhbHVlKTtcclxuICAgICAgICBjb25zdCBkZWxldGVJdGVtID0gcmVtb3ZlQ2F0ZWdvcmllcy52YWx1ZTtcclxuLy9tYWtlIGl0IHNvIHRoYXQgdGhlIHNpZGViYXIgZWxlbWVudHMgYWxzbyBnZXQgcmVtb3ZlZFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlY2F0ZWdvcnknKS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZUNhdGVnb3JpZXMuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRlSXRlbSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZWNhdGVnb3J5JykuY2hpbGRyZW5baV0udmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZWNhdGVnb3J5JykuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRDYXRlZ29yaWVzJykuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRlSXRlbSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZENhdGVnb3JpZXMnKS5jaGlsZHJlbltpXS50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZENhdGVnb3JpZXNcIikuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBkaXNwbGF5Q2FyZCB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuZXhwb3J0IGxldCBjYXJkX0xpc3QgPSBbXTtcclxubGV0IGxpc3RJdGVtQXJyYXkgPSBbXTtcclxuZXhwb3J0IGNvbnN0IGNhcmRfZGVzZXJpYWxpemVMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRvbUNhcmRzXCIpKTtcclxuXHJcblxyXG5kZXNlcmlhbGl6ZSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUNhcmQoY2FyZCkge1xyXG4gICAgaWYoY2FyZCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBjb25zdCBjYXJkX3NlcmlhbGl6ZWRMaXN0ID0gSlNPTi5zdHJpbmdpZnkoY2FyZF9MaXN0KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRvbUNhcmRzXCIsIGNhcmRfc2VyaWFsaXplZExpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjYXJkX0xpc3QucHVzaChjYXJkKTtcclxuICAgICAgICBjb25zdCBjYXJkX3NlcmlhbGl6ZWRMaXN0ID0gSlNPTi5zdHJpbmdpZnkoY2FyZF9MaXN0KTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRvbUNhcmRzXCIsIGNhcmRfc2VyaWFsaXplZExpc3QpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLy93aGUgYSBuZXcgY2hlY2sgaXMgY3JlYXRlZCwgdGhlIHByb2dyYW0gc2hvdWxkIGZpbmQgdGhlIGNhcmRpZCBpdCB3YXMgY3JlYXRlZCBvbiB0aGVuIGFwcGVuZCBpdCB0byB0aGUgbGlzdCBvZiBjYXJkSXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUNoZWNrbGlzdChpZCwgbGlzdEl0ZW0pe1xyXG4gICAgY29uc3QgY2hlY2tMaXN0U3RvcmUgPSB7XHJcbiAgICAgICAgY2FyZGlkOiBpZCxcclxuICAgICAgICBjYXJkTGlzdEl0ZW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGlzdEl0ZW1BcnJheS5wdXNoKGxpc3RJdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3RJdGVtQXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coY2hlY2tMaXN0U3RvcmUpO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplKCkge1xyXG4gICAgXHJcbiAgICBpZihjYXJkX2Rlc2VyaWFsaXplTGlzdCAhPT0gbnVsbCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNhcmRfZGVzZXJpYWxpemVMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY2FyZF9MaXN0LnB1c2goY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0pO1xyXG4gICAgICAgICAgICBkaXNwbGF5Q2FyZChpLCBwYXJzZUludChjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS5pZGVudGlmaWVyKSwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0udGl0bGUsIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmRhdGUsIGNhcmRfZGVzZXJpYWxpemVMaXN0W2ldLmNhdGVnb3J5LCBjYXJkX2Rlc2VyaWFsaXplTGlzdFtpXS5kZXNjcmlwdGlvbiwgY2FyZF9kZXNlcmlhbGl6ZUxpc3RbaV0ucHJpb3JpdHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsIi8vU2lkZWJhciBmdW5jdGlvbmFsaXR5XHJcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG5oaWdobGlnaHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZGV4JykpO1xyXG5cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmRleCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmRleCgpKTtcclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kYXkoKSk7XHJcbmZ1bmN0aW9uIHRvZGF5KCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmREYXkgPSBuZXcgRGF0ZShpdGVtLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgxKS5jaGlsZHJlbi5pdGVtKDEpLnRleHRDb250ZW50LnJlcGxhY2UoLy0vZyxcIi9cIikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlckRheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmdWxsQ2FyZERhdGUgPSBgJHtjYXJkRGF5LmdldE1vbnRoKCl9ICR7Y2FyZERheS5nZXREYXRlKCl9ICR7Y2FyZERheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxVc2VyRGF0ZSA9IGAke3VzZXJEYXkuZ2V0TW9udGgoKX0gJHt1c2VyRGF5LmdldERhdGUoKX0gJHt1c2VyRGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChmdWxsQ2FyZERhdGUgIT09IGZ1bGxVc2VyRGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9tb3Jyb3dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvbW9ycm93KCkpO1xyXG5mdW5jdGlvbiB0b21vcnJvdygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodChldmVudC50YXJnZXQpXHJcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmREYXkgPSBuZXcgRGF0ZShpdGVtLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgxKS5jaGlsZHJlbi5pdGVtKDEpLnRleHRDb250ZW50LnJlcGxhY2UoLy0vZyxcIi9cIikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlckRheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoWzAsIDIsIDQsIDYsIDcsIDksIDExXS5pbmNsdWRlcyh1c2VyRGF5LmdldE1vbnRoKCkpKXtcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tzIDMxIGRheSBtb250aHNcclxuICAgICAgICAgICAgICAgIGlmKCgodXNlckRheS5nZXREYXRlICsgMSkgPT09IDMyKSAmJiAoKCgoKHVzZXJEYXkuZ2V0TW9udGgoKSArIDEpID09PSBjYXJkRGF5LmdldE1vbnRoKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpIHx8ICgoKHVzZXJEYXkuZ2V0TW9udGgoKSArIDEpID09PSAxMikgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSArIDEgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2tzIGlmIGl0IGlzIHRoZSBuZXh0IG1vbnRoIG9yIHllYXJcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoKHVzZXJEYXkuZ2V0RGF0ZSgpICsgMSkgPT09IGNhcmREYXkuZ2V0RGF0ZSgpKSAmJiAodXNlckRheS5nZXRNb250aCgpID09PSBjYXJkRGF5LmdldE1vbnRoKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFszLCA1LCA4LCAxMF0uaW5jbHVkZXModXNlckRheS5nZXRNb250aCgpKSkge1xyXG4gICAgICAgICAgICAgICAgLy9DaGVja3MgMzAgZGF5IG1vbnRoc1xyXG4gICAgICAgICAgICAgICAgaWYgKCgodXNlckRheS5nZXREYXRlICsgMSkgPT09IDMxKSAmJiAoKHVzZXJEYXkuZ2V0TW9udGgoKSArIDEpID09PSBjYXJkRGF5LmdldE1vbnRoKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgodXNlckRheS5nZXREYXRlKCkgKyAxKSA9PT0gY2FyZERheS5nZXREYXRlKCkpICYmICh1c2VyRGF5LmdldE1vbnRoKCkgPT09IGNhcmREYXkuZ2V0TW9udGgoKSkgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgodXNlckRheS5nZXRNb250aCA9PT0gMSkgJiYgKCh1c2VyRGF5LmdldEZ1bGxZZWFyICUgNCkgIT09IDApKXtcclxuICAgICAgICAgICAgICAgIC8vbm90IGxlYXAgeWVhclxyXG4gICAgICAgICAgICAgICAgaWYgKCgodXNlckRheS5nZXREYXRlICsgMSkgPT09IDI5KSAmJiAodXNlckRheS5nZXRGdWxsWWVhcigpID09PSBjYXJkRGF5LmdldEZ1bGxZZWFyKCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoKHVzZXJEYXkuZ2V0RGF0ZSgpICsgMSkgPT09IGNhcmREYXkuZ2V0RGF0ZSgpKSAmJiAodXNlckRheS5nZXRGdWxsWWVhcigpID09PSBjYXJkRGF5LmdldEZ1bGxZZWFyKCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgodXNlckRheS5nZXRNb250aCA9PT0gMSkgJiYgKCh1c2VyRGF5LmdldEZ1bGxZZWFyICUgNCkgPT09IDApKXtcclxuICAgICAgICAgICAgICAgIC8vbGVhcCB5ZWFyXHJcbiAgICAgICAgICAgICAgICBpZiAoKCh1c2VyRGF5LmdldERhdGUgKyAxKSA9PT0gMzApICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgodXNlckRheS5nZXREYXRlKCkgKyAxKSA9PT0gY2FyZERheS5nZXREYXRlKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvbWVkYXknKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc29tZWRheSgpKTtcclxuZnVuY3Rpb24gc29tZWRheSgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRGF5ID0gaXRlbS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMSkuY2hpbGRyZW4uaXRlbSgxKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKGNhcmREYXkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub0RhdGUnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbm9kYXRlKCkpO1xyXG5mdW5jdGlvbiBub2RhdGUoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZERheSA9IGl0ZW0uY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDEpLmNoaWxkcmVuLml0ZW0oMSkudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChjYXJkRGF5ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0NhdGVnb3J5IGZ1bmN0dGlvbmFsaXR5XHJcblxyXG5mdW5jdGlvbiBjYXRlZ29yeUNsaWNrKCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHQoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDYXRlZ29yeSA9IGl0ZW0uY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNsaWNrZWRDYXRlZ29yeSAhPT0gY2FyZENhdGVnb3J5KXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0KHByZXNzZWQpIHtcclxuICAgIGNvbnN0IHRpbWVDYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0VGltZVwiKS5jaGlsZHJlbjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aW1lQ2F0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGltZUNhdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJlc3NlZC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHtjYXJkSW5mb30gZnJvbSBcIi4vY2FyZHNcIjtcclxuaW1wb3J0IHt1cGRhdGVDYXRlZ29yeVNlbGVjdH0gZnJvbSAnLi9kb20nXHJcbmltcG9ydCAnLi9zaWRlYmFyZG9tJztcclxuXHJcblxyXG50YXNrZm9ybSgpO1xyXG5mb3JtQ2F0ZWdvcnkoKTtcclxuXHJcblxyXG5mdW5jdGlvbiB0YXNrZm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm1Db250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkTmV3VGFza1wiKTtcclxuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJub3RWaXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcclxuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2FyZEluZm8oKTtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ25vdFZpc2libGUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL3dpbmRvdy5vbmNsaWNrID0gY2xvc2VGb3JtcztcclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybXMoKSB7XHJcbiAgICAvL2N1cnJlbnRseSBkb2VzIG5vdCB3b3JrXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtQ29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ2F0ZWdvcnlcIik7XHJcbiAgICBpZighZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RWaXNpYmxlXCIpIHx8ICFjYXRlZ29yeUZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdub3RWaXNpYmxlJykpe1xyXG4gICAgICAgIGNhdGVnb3J5Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub3RWaXNpYmxlJyk7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwibm90VmlzaWJsZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybUNhdGVnb3J5KCkge1xyXG4gICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZE5ld0NhdGVnb3J5XCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ2F0ZWdvcnlcIik7XHJcbiAgICBuZXdDYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNhdGVnb3J5Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdub3RWaXNpYmxlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgYXBwbHlidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1DYXRlZ29yeSA+ICogPiBidXR0b25cIik7XHJcbiAgICBhcHBseWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB1cGRhdGVDYXRlZ29yeVNlbGVjdCgpO1xyXG4gICAgICAgIGNhdGVnb3J5Rm9ybS5jbGFzc0xpc3QuYWRkKCdub3RWaXNpYmxlJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKlxyXG5UaGluZ3MgdDAgd29yayBvbjpcclxuLSBIaWdobGlnaHQgdGhlIHNpZGViYXIgYnV0dG9uIHRoYXQgaXMgY2xpY2tlZFxyXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==