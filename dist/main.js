/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

.priority {
    background-color: #304b41;
}

.highlight {
    color: rgb(255, 255, 255);
    background-color: #183D3D;
    width: 210px; 
    padding: 5px;
    box-sizing: unset;
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
    margin-top: 80px;
    border: 1px solid white;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
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
    gap: 10px;
    
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

.priorityChecked {
    background-color: black;
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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Roboto';\r\n    src: url('./Roboto-Regular.ttf') format('ttf');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\n.material-symbols-outlined {\r\nfont-variation-settings:\r\n  'FILL' 0,\r\n  'wght' 400,\r\n  'GRAD' 0,\r\n  'opsz' 24;\r\n  top: .200em;\r\n  position: relative;\r\n  pointer-events: none;\r\n}\r\n\r\n.hide {\r\n    position: absolute;\r\n    visibility: hidden;\r\n}\r\n\r\n.priority {\r\n    background-color: #304b41;\r\n}\r\n\r\n.highlight {\r\n    color: rgb(255, 255, 255);\r\n    background-color: #183D3D;\r\n    width: 210px; \r\n    padding: 5px;\r\n    box-sizing: unset;\r\n}\r\n\r\n* {\r\n    font-family: 'Roboto';\r\n    font-weight: lighter;\r\n    list-style: none;\r\n    color: aliceblue;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\ninput, button, textarea, select, option {\r\n    color: black;\r\n}\r\n\r\n.notVisible {\r\n    visibility: hidden;\r\n}\r\n\r\n.visible {\r\n    visibility: visible;\r\n}\r\n\r\nbody{\r\n    background-color: #183D3D;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 250px 4fr;\r\n}\r\n\r\nheader {\r\n    background-color: #040D12;\r\n    border: 1px solid #93B1A6;\r\n    border-radius: 10px;\r\n    grid-column: 1 / 3;\r\n    height: 60px;\r\n    text-align: center;\r\n    margin: 5px;\r\n    font-size: 1.2em;\r\n    box-shadow: 2px 2px #93B1A6;\r\n}\r\n\r\nheader > h1 {\r\n    margin-top: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n/* Form */\r\n\r\n.formContainer {\r\n    \r\n    margin-top: 75px;\r\n    position: absolute;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    /* centers the absolute div */\r\n    width: 317px;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nform[action=\"todo-list-form\"] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\ninput[value=\"Create Task\"] {\r\n    width: 100%;\r\n} \r\n\r\ninput[id=\"title\"] {\r\n    margin-bottom: 5px;\r\n    height: 20px;\r\n}\r\n\r\ntextarea[id=\"description\"],\r\ninput[id=\"title\"],\r\nselect {\r\n    width: 170px;\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n/* Sidebar */\r\n\r\n.sidebar {\r\n    background-color: #040D12;\r\n    border: 1px solid #93B1A6;\r\n    border-radius: 10px;\r\n    padding-right: 10px;\r\n    padding-bottom: 0px;\r\n    padding-top: 20px;\r\n    margin: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n    \r\n    width: 191px;\r\n    box-shadow: 2px 2px #93B1A6;\r\n\r\n}\r\n\r\n.addNewTask,\r\n.addNewCategory {\r\n    width: fit-content;\r\n    margin-left: 20px\r\n}\r\n\r\n.addNewTask:hover,\r\n.addNewCategory:hover {\r\n    padding: 5px;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    width: fit-content;\r\n    color: black;\r\n    background-color: rgb(197, 198, 211);\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar > ul > li {\r\n    margin-bottom: 25px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.sidebar > ul > li:hover {\r\n    cursor: pointer;\r\n    background-color: #183D3D;\r\n    width: 210px; \r\n    padding: 5px;\r\n    box-sizing: unset;\r\n}\r\n\r\n.addNewTask > span,\r\n.addNewCategory > span {\r\n    background-color: blue;\r\n    border-radius: 1000px;\r\n    padding: 3px 8px 3px 8px;\r\n}\r\n\r\n.addNewCategory > span {\r\n    background-color: purple;\r\n}\r\n\r\n.formCategory{\r\n    position: absolute;\r\n    margin-top: 80px;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    padding: 10px;\r\n}\r\n\r\n.formCategory > * {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: end;\r\n    gap: 5px;\r\n}\r\n\r\n#addcategory{\r\n    width: 160px;\r\n    height: 20px;\r\n    padding-left: 10px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.formCategory > * > button {\r\n    align-self: center;\r\n    padding: 2px;\r\n    width: 25%;\r\n    border-radius: 20px;\r\n}\r\n\r\n/* Todo Items */\r\n\r\n.todoItems {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 321px);\r\n    margin: 5px;\r\n    gap: 10px;\r\n    \r\n}\r\n\r\n.item {\r\n    background-color: #5C8374;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    height: fit-content;\r\n    width: 300px;\r\n    border: 1px solid #93B1A6;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    align-items: center;\r\n    box-shadow: 3px 3px #93B1A6;\r\n\r\n}\r\n\r\n.priorityChecked {\r\n    background-color: black;\r\n}\r\n\r\n.topItemArea {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.topItemArea > div {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.topItemArea > div > h5 {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.checklistItemDisplay {\r\n    width: 100%;\r\n    padding-left: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.addNewChecklistItem {\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.addNewChecklistItem > button {\r\n    width: 70px;\r\n    border-radius: 15px;\r\n    padding: 3px;\r\n}\r\n\r\n.bottomItemArea > button {\r\n    border-radius: 20px;\r\n    width: 130px;\r\n    height: 35px;\r\n}\r\n\r\n.checklistInput {\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    padding: 3px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardInfo: () => (/* binding */ cardInfo),
/* harmony export */   deleteArrayItems: () => (/* binding */ deleteArrayItems)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


let cardArray = [];
let cards = [];

class Card {
    constructor(title, date, category, description, indentifier){
        this.title = title;
        this.date = date;
        this.category = category;
        this.description = description;
        this.indentifier = '' + indentifier;
    }

    addChecklistItem(i){
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.newChecklistDisplay)(i)
    }

    completeTask(i) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.doneButtonScript)(i);
    }

}

function cardInfo() {
    let cardTitle;
    let cardDescription;
    let cardCategory;
    let cardDate;
    let cardPriority;
    cardTitle = document.getElementById('title').value;
    cardDescription = document.getElementById('description').value;
    cardCategory = document.getElementById('category').value;
    cardDate = document.getElementById('due').value;
    cardPriority = priorityValue();
    for(let i = cardArray.length; i < cardArray.length + 1; i++){
        cards[i] = new Card(cardTitle, cardDate, cardCategory, cardDescription, i);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayCard)(i, cardTitle, cardDate, cardCategory, cardDescription, cardPriority);
        cards[i].addChecklistItem(i);
        cards[i].completeTask(i);
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
    let cardindentifier = [];

    for(let r = 0; r < cards.length; r++){
        cardindentifier.push(cards[r].indentifier);
    }

    cardArray.splice(i, 1);
    cards.splice(i, 1);

    console.log(cards);
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayCard: () => (/* binding */ displayCard),
/* harmony export */   doneButtonScript: () => (/* binding */ doneButtonScript),
/* harmony export */   newChecklistDisplay: () => (/* binding */ newChecklistDisplay),
/* harmony export */   updateCategorySelect: () => (/* binding */ updateCategorySelect)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/cards.js");


let cardShell = [];

const cardContainer = document.querySelector('.todoItems');

function displayCard(point, title, date, category, description, priority) {
    const titleinput = document.querySelector("input[type='text']");
    titleinput.value = ''; 
    const textarea = document.querySelector("#description");
    textarea.value = '';
    const dateInput = document.querySelector("input[type='date']");
    dateInput.value = '';

    for (let i = point; i < point + 1; i++){
        cardShell[i] = document.createElement("div");
        cardShell[i].classList.add('item'); 
        cardShell[i].id = '' + i;

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
        cardComplete.textContent = "Complete" + point;
        
        cardBottom.appendChild(cardComplete);
        ///////////////////////////////////////////////
    
        cardShell[i].append(cardTop, cardChecklist, cardAddChecklist, cardBottom);
        cardContainer.appendChild(cardShell[i]);
    }
}

function newChecklistDisplay(i) {
    cardShell[i].children.item(2).firstChild.addEventListener('click', ()=> {
        const newItemtext = prompt("Enter new checklist item");

        const newCheckboxLabel = document.createElement('label');
        newCheckboxLabel.htmlFor = newItemtext + "- domBox";
        newCheckboxLabel.textContent = newItemtext + ": ";

        const newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.id = newItemtext + "- domBox";

        newCheckboxLabel.appendChild(newCheckBox);
        

        cardShell[i].children.item(1).appendChild(newCheckboxLabel);
        //const addCheck = document.createElement("input[type = 'text']");
    });
}

function doneButtonScript(i) {
    cardShell[i].children.item(3).firstChild.addEventListener('click', () => {
        (0,_cards__WEBPACK_IMPORTED_MODULE_0__.deleteArrayItems)(i);
        const cardID = document.getElementById(i);
        cardID.remove();
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

//Sidebar functionality
let items = document.querySelectorAll(".item");

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
    
    console.log(pressed);
    pressed.classList.add("highlight");
}

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



//import displayCard from "./dom";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFdBQVcsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0I7QUFDckcsb0NBQW9DLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBUTtBQUNoQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHRmJyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcclxuZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XHJcbiAgJ0ZJTEwnIDAsXHJcbiAgJ3dnaHQnIDQwMCxcclxuICAnR1JBRCcgMCxcclxuICAnb3BzeicgMjQ7XHJcbiAgdG9wOiAuMjAwZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0YjQxO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xyXG4gICAgd2lkdGg6IDIxMHB4OyBcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaXppbmc6IHVuc2V0O1xyXG59XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0LCBvcHRpb24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubm90VmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi52aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggNGZyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MEQxMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5M0IxQTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjOTNCMUE2O1xyXG59XHJcblxyXG5oZWFkZXIgPiBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4vKiBGb3JtICovXHJcblxyXG4uZm9ybUNvbnRhaW5lciB7XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgLyogY2VudGVycyB0aGUgYWJzb2x1dGUgZGl2ICovXHJcbiAgICB3aWR0aDogMzE3cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuZm9ybVthY3Rpb249XCJ0b2RvLWxpc3QtZm9ybVwiXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuaW5wdXRbdmFsdWU9XCJDcmVhdGUgVGFza1wiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSBcclxuXHJcbmlucHV0W2lkPVwidGl0bGVcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdLFxyXG5pbnB1dFtpZD1cInRpdGxlXCJdLFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vKiBTaWRlYmFyICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwRDEyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzQjFBNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDE5MXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjOTNCMUE2O1xyXG5cclxufVxyXG5cclxuLmFkZE5ld1Rhc2ssXHJcbi5hZGROZXdDYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweFxyXG59XHJcblxyXG4uYWRkTmV3VGFzazpob3ZlcixcclxuLmFkZE5ld0NhdGVnb3J5OmhvdmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5OCwgMjExKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXIgPiB1bCA+IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyID4gdWwgPiBsaTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xyXG4gICAgd2lkdGg6IDIxMHB4OyBcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaXppbmc6IHVuc2V0O1xyXG59XHJcblxyXG4uYWRkTmV3VGFzayA+IHNwYW4sXHJcbi5hZGROZXdDYXRlZ29yeSA+IHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcclxuICAgIHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcclxufVxyXG5cclxuLmFkZE5ld0NhdGVnb3J5ID4gc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi5mb3JtQ2F0ZWdvcnl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZvcm1DYXRlZ29yeSA+ICoge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbiNhZGRjYXRlZ29yeXtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtQ2F0ZWdvcnkgPiAqID4gYnV0dG9uIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4vKiBUb2RvIEl0ZW1zICovXHJcblxyXG4udG9kb0l0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDMyMXB4KTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QzgzNzQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTNCMUE2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAjOTNCMUE2O1xyXG5cclxufVxyXG5cclxuLnByaW9yaXR5Q2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRvcEl0ZW1BcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi50b3BJdGVtQXJlYSA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnRvcEl0ZW1BcmVhID4gZGl2ID4gaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmNoZWNrbGlzdEl0ZW1EaXNwbGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hZGROZXdDaGVja2xpc3RJdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hZGROZXdDaGVja2xpc3RJdGVtID4gYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmJvdHRvbUl0ZW1BcmVhID4gYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5jaGVja2xpc3RJbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiwwREFBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRjtBQUNBOzs7O1dBSVc7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFv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QUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG5mb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXHJcXG4gICdGSUxMJyAwLFxcclxcbiAgJ3dnaHQnIDQwMCxcXHJcXG4gICdHUkFEJyAwLFxcclxcbiAgJ29wc3onIDI0O1xcclxcbiAgdG9wOiAuMjAwZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGI0MTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODNEM0Q7XFxyXFxuICAgIHdpZHRoOiAyMTBweDsgXFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm94LXNpemluZzogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3QsIG9wdGlvbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm5vdFZpc2libGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi52aXNpYmxlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4M0QzRDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggNGZyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwRDEyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTNCMUE2O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjOTNCMUE2O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybSAqL1xcclxcblxcclxcbi5mb3JtQ29udGFpbmVyIHtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgLyogY2VudGVycyB0aGUgYWJzb2x1dGUgZGl2ICovXFxyXFxuICAgIHdpZHRoOiAzMTdweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvcm1bYWN0aW9uPVxcXCJ0b2RvLWxpc3QtZm9ybVxcXCJdIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt2YWx1ZT1cXFwiQ3JlYXRlIFRhc2tcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn0gXFxyXFxuXFxyXFxuaW5wdXRbaWQ9XFxcInRpdGxlXFxcIl0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWFbaWQ9XFxcImRlc2NyaXB0aW9uXFxcIl0sXFxyXFxuaW5wdXRbaWQ9XFxcInRpdGxlXFxcIl0sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWRlYmFyICovXFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwRDEyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTNCMUE2O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDogMTkxcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggIzkzQjFBNjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld1Rhc2ssXFxyXFxuLmFkZE5ld0NhdGVnb3J5IHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweFxcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3VGFzazpob3ZlcixcXHJcXG4uYWRkTmV3Q2F0ZWdvcnk6aG92ZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk4LCAyMTEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gdWwgPiBsaSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgPiB1bCA+IGxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzRDNEO1xcclxcbiAgICB3aWR0aDogMjEwcHg7IFxcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJveC1zaXppbmc6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3VGFzayA+IHNwYW4sXFxyXFxuLmFkZE5ld0NhdGVnb3J5ID4gc3BhbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXHJcXG4gICAgcGFkZGluZzogM3B4IDhweCAzcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3Q2F0ZWdvcnkgPiBzcGFuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNhdGVnb3J5e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ2F0ZWdvcnkgPiAqIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRjYXRlZ29yeXtcXHJcXG4gICAgd2lkdGg6IDE2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1DYXRlZ29yeSA+ICogPiBidXR0b24ge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9kbyBJdGVtcyAqL1xcclxcblxcclxcbi50b2RvSXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDMyMXB4KTtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDODM3NDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5M0IxQTY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggIzkzQjFBNjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5Q2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wSXRlbUFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b3BJdGVtQXJlYSA+IGRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi50b3BJdGVtQXJlYSA+IGRpdiA+IGg1IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdEl0ZW1EaXNwbGF5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld0NoZWNrbGlzdEl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5hZGROZXdDaGVja2xpc3RJdGVtID4gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbUl0ZW1BcmVhID4gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3RJbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheUNhcmQsIG5ld0NoZWNrbGlzdERpc3BsYXksIGRvbmVCdXR0b25TY3JpcHQgfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcbmxldCBjYXJkQXJyYXkgPSBbXTtcclxubGV0IGNhcmRzID0gW107XHJcblxyXG5jbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGluZGVudGlmaWVyKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuaW5kZW50aWZpZXIgPSAnJyArIGluZGVudGlmaWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoZWNrbGlzdEl0ZW0oaSl7XHJcbiAgICAgICAgbmV3Q2hlY2tsaXN0RGlzcGxheShpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlVGFzayhpKSB7XHJcbiAgICAgICAgZG9uZUJ1dHRvblNjcmlwdChpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXJkSW5mbygpIHtcclxuICAgIGxldCBjYXJkVGl0bGU7XHJcbiAgICBsZXQgY2FyZERlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGNhcmRDYXRlZ29yeTtcclxuICAgIGxldCBjYXJkRGF0ZTtcclxuICAgIGxldCBjYXJkUHJpb3JpdHk7XHJcbiAgICBjYXJkVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgIGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgY2FyZENhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWU7XHJcbiAgICBjYXJkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKS52YWx1ZTtcclxuICAgIGNhcmRQcmlvcml0eSA9IHByaW9yaXR5VmFsdWUoKTtcclxuICAgIGZvcihsZXQgaSA9IGNhcmRBcnJheS5sZW5ndGg7IGkgPCBjYXJkQXJyYXkubGVuZ3RoICsgMTsgaSsrKXtcclxuICAgICAgICBjYXJkc1tpXSA9IG5ldyBDYXJkKGNhcmRUaXRsZSwgY2FyZERhdGUsIGNhcmRDYXRlZ29yeSwgY2FyZERlc2NyaXB0aW9uLCBpKTtcclxuICAgICAgICBkaXNwbGF5Q2FyZChpLCBjYXJkVGl0bGUsIGNhcmREYXRlLCBjYXJkQ2F0ZWdvcnksIGNhcmREZXNjcmlwdGlvbiwgY2FyZFByaW9yaXR5KTtcclxuICAgICAgICBjYXJkc1tpXS5hZGRDaGVja2xpc3RJdGVtKGkpO1xyXG4gICAgICAgIGNhcmRzW2ldLmNvbXBsZXRlVGFzayhpKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkQXJyYXkucHVzaChjYXJkc1tjYXJkcy5sZW5ndGggLSAxXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW9yaXR5VmFsdWUoKSB7XHJcbiAgICBjb25zdCBwcmlvcml0eUNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XHJcbiAgICBpZiAocHJpb3JpdHlDaGVjay5jaGVja2VkKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQXJyYXlJdGVtcyhpKSB7XHJcbiAgICBsZXQgY2FyZGluZGVudGlmaWVyID0gW107XHJcblxyXG4gICAgZm9yKGxldCByID0gMDsgciA8IGNhcmRzLmxlbmd0aDsgcisrKXtcclxuICAgICAgICBjYXJkaW5kZW50aWZpZXIucHVzaChjYXJkc1tyXS5pbmRlbnRpZmllcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZEFycmF5LnNwbGljZShpLCAxKTtcclxuICAgIGNhcmRzLnNwbGljZShpLCAxKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjYXJkcyk7XHJcbn0iLCJpbXBvcnQge2RlbGV0ZUFycmF5SXRlbXN9IGZyb20gXCIuL2NhcmRzXCI7XHJcblxyXG5sZXQgY2FyZFNoZWxsID0gW107XHJcblxyXG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9JdGVtcycpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDYXJkKHBvaW50LCB0aXRsZSwgZGF0ZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgdGl0bGVpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIik7XHJcbiAgICB0aXRsZWlucHV0LnZhbHVlID0gJyc7IFxyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgdGV4dGFyZWEudmFsdWUgPSAnJztcclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdkYXRlJ11cIik7XHJcbiAgICBkYXRlSW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gcG9pbnQ7IGkgPCBwb2ludCArIDE7IGkrKyl7XHJcbiAgICAgICAgY2FyZFNoZWxsW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkU2hlbGxbaV0uY2xhc3NMaXN0LmFkZCgnaXRlbScpOyBcclxuICAgICAgICBjYXJkU2hlbGxbaV0uaWQgPSAnJyArIGk7XHJcblxyXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdHJ1ZSkgY2FyZFNoZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7IFxyXG5cclxuICAgIC8vdG9waGFsZiBvZiBjYXJkLCAzIGNoaWxkcmVuXHJcbiAgICAgICAgY29uc3QgY2FyZFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZFRvcC5jbGFzc0xpc3QuYWRkKCd0b3BJdGVtQXJlYScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgICAgIGNhdGVnb3J5TGFiZWwudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBjb25zdCB0aXRsZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcclxuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBkYXRlO1xyXG4gICAgXHJcbiAgICAgICAgdGl0bGVEYXRlLmFwcGVuZCh0aXRsZUxhYmVsLCBkYXRlTGFiZWwpO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbmxhYmVsLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FyZFRvcC5hcHBlbmQoY2F0ZWdvcnlMYWJlbCwgdGl0bGVEYXRlLCBkZXNjcmlwdGlvbmxhYmVsKTtcclxuICAgIFxyXG4gICAgLy9jYXJkIGNoZWNrbGlzdCBhcmVhXHJcbiAgICAgICAgY29uc3QgY2FyZENoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZENoZWNrbGlzdC5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3RJdGVtRGlzcGxheScpO1xyXG4gICAgXHJcbiAgICAvL2NhcmQgYnV0dG9uIGZvciBjcmVhdGluZyBhIG5ldyBjaGVja2xpc3QgaXRlbVxyXG4gICAgICAgIGNvbnN0IGNhcmRBZGRDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmRBZGRDaGVja2xpc3QuY2xhc3NMaXN0LmFkZCgnYWRkTmV3Q2hlY2tsaXN0SXRlbScpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0QWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2hlY2tsaXN0QWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgSXRlbVwiO1xyXG4gICAgXHJcbiAgICAgICAgY2FyZEFkZENoZWNrbGlzdC5hcHBlbmRDaGlsZChjaGVja2xpc3RBZGRCdXR0b24pO1xyXG4gICAgXHJcbiAgICAvL2JvdHRvbSBhcmVhIG9mIGNhcmRcclxuICAgICAgICBjb25zdCBjYXJkQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUl0ZW1BcmVhJyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjYXJkQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjYXJkQ29tcGxldGUudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlXCIgKyBwb2ludDtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkQm90dG9tLmFwcGVuZENoaWxkKGNhcmRDb21wbGV0ZSk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIFxyXG4gICAgICAgIGNhcmRTaGVsbFtpXS5hcHBlbmQoY2FyZFRvcCwgY2FyZENoZWNrbGlzdCwgY2FyZEFkZENoZWNrbGlzdCwgY2FyZEJvdHRvbSk7XHJcbiAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkU2hlbGxbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3Q2hlY2tsaXN0RGlzcGxheShpKSB7XHJcbiAgICBjYXJkU2hlbGxbaV0uY2hpbGRyZW4uaXRlbSgyKS5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbXRleHQgPSBwcm9tcHQoXCJFbnRlciBuZXcgY2hlY2tsaXN0IGl0ZW1cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0NoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIG5ld0NoZWNrYm94TGFiZWwuaHRtbEZvciA9IG5ld0l0ZW10ZXh0ICsgXCItIGRvbUJveFwiO1xyXG4gICAgICAgIG5ld0NoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBuZXdJdGVtdGV4dCArIFwiOiBcIjtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5ld0NoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgIG5ld0NoZWNrQm94LmlkID0gbmV3SXRlbXRleHQgKyBcIi0gZG9tQm94XCI7XHJcblxyXG4gICAgICAgIG5ld0NoZWNrYm94TGFiZWwuYXBwZW5kQ2hpbGQobmV3Q2hlY2tCb3gpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjYXJkU2hlbGxbaV0uY2hpbGRyZW4uaXRlbSgxKS5hcHBlbmRDaGlsZChuZXdDaGVja2JveExhYmVsKTtcclxuICAgICAgICAvL2NvbnN0IGFkZENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0W3R5cGUgPSAndGV4dCddXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb25lQnV0dG9uU2NyaXB0KGkpIHtcclxuICAgIGNhcmRTaGVsbFtpXS5jaGlsZHJlbi5pdGVtKDMpLmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlQXJyYXlJdGVtcyhpKTtcclxuICAgICAgICBjb25zdCBjYXJkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuICAgICAgICBjYXJkSUQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5U2VsZWN0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0Q2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeScpO1xyXG4gICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVjYXRlZ29yeScpO1xyXG4gICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIGNvbnN0IG5ld1NpZGViYXJDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCB1bENhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZENhdGVnb3JpZXNcIik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRjYXRlZ29yeScpLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgLy9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3Q2F0ZWdvcnkudGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkY2F0ZWdvcnknKS52YWx1ZTtcclxuXHJcbiAgICAgICAgLy9hZGRlZCB0byBzaWRlYmFyXHJcbiAgICAgICAgbmV3U2lkZWJhckNhdGVnb3J5LnRleHRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGNhdGVnb3J5JykudmFsdWU7XHJcbiAgICAgICAgbmV3U2lkZWJhckNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2F0ZWdvcnlDbGljaygpKTtcclxuICAgICAgICB1bENhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3U2lkZWJhckNhdGVnb3J5KTtcclxuXHJcbiAgICAgICAgLy9hZGRlZCB0byBzZWxlY3RcclxuICAgICAgICBzZWxlY3RDYXRlZ29yaWVzLmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5KTtcclxuICAgICAgICByZW1vdmVDYXRlZ29yaWVzLmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5LmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgICAgIC8vcmVzZXR0aW5nIGlucHV0IGZpZWxkc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRjYXRlZ29yeScpLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZUNhdGVnb3JpZXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZW1vdmVDYXRlZ29yaWVzLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlQ2F0ZWdvcmllcy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVjYXRlZ29yeScpLnZhbHVlKTtcclxuICAgICAgICBjb25zdCBkZWxldGVJdGVtID0gcmVtb3ZlQ2F0ZWdvcmllcy52YWx1ZTtcclxuLy9tYWtlIGl0IHNvIHRoYXQgdGhlIHNpZGViYXIgZWxlbWVudHMgYWxzbyBnZXQgcmVtb3ZlZFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlY2F0ZWdvcnknKS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZUNhdGVnb3JpZXMuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRlSXRlbSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZWNhdGVnb3J5JykuY2hpbGRyZW5baV0udmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZWNhdGVnb3J5JykuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRDYXRlZ29yaWVzJykuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRlSXRlbSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZENhdGVnb3JpZXMnKS5jaGlsZHJlbltpXS50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZENhdGVnb3JpZXNcIikuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vU2lkZWJhciBmdW5jdGlvbmFsaXR5XHJcbmxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmRleCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmRleCgpKTtcclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kYXkoKSk7XHJcbmZ1bmN0aW9uIHRvZGF5KCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmREYXkgPSBuZXcgRGF0ZShpdGVtLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgxKS5jaGlsZHJlbi5pdGVtKDEpLnRleHRDb250ZW50LnJlcGxhY2UoLy0vZyxcIi9cIikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlckRheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmdWxsQ2FyZERhdGUgPSBgJHtjYXJkRGF5LmdldE1vbnRoKCl9ICR7Y2FyZERheS5nZXREYXRlKCl9ICR7Y2FyZERheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxVc2VyRGF0ZSA9IGAke3VzZXJEYXkuZ2V0TW9udGgoKX0gJHt1c2VyRGF5LmdldERhdGUoKX0gJHt1c2VyRGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChmdWxsQ2FyZERhdGUgIT09IGZ1bGxVc2VyRGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9tb3Jyb3dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvbW9ycm93KCkpO1xyXG5mdW5jdGlvbiB0b21vcnJvdygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodChldmVudC50YXJnZXQpXHJcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIik7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmREYXkgPSBuZXcgRGF0ZShpdGVtLmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgxKS5jaGlsZHJlbi5pdGVtKDEpLnRleHRDb250ZW50LnJlcGxhY2UoLy0vZyxcIi9cIikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlckRheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoWzAsIDIsIDQsIDYsIDcsIDksIDExXS5pbmNsdWRlcyh1c2VyRGF5LmdldE1vbnRoKCkpKXtcclxuICAgICAgICAgICAgICAgIC8vY2hlY2tzIDMxIGRheSBtb250aHNcclxuICAgICAgICAgICAgICAgIGlmKCgodXNlckRheS5nZXREYXRlICsgMSkgPT09IDMyKSAmJiAoKCgoKHVzZXJEYXkuZ2V0TW9udGgoKSArIDEpID09PSBjYXJkRGF5LmdldE1vbnRoKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpIHx8ICgoKHVzZXJEYXkuZ2V0TW9udGgoKSArIDEpID09PSAxMikgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSArIDEgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2tzIGlmIGl0IGlzIHRoZSBuZXh0IG1vbnRoIG9yIHllYXJcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoKHVzZXJEYXkuZ2V0RGF0ZSgpICsgMSkgPT09IGNhcmREYXkuZ2V0RGF0ZSgpKSAmJiAodXNlckRheS5nZXRNb250aCgpID09PSBjYXJkRGF5LmdldE1vbnRoKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFszLCA1LCA4LCAxMF0uaW5jbHVkZXModXNlckRheS5nZXRNb250aCgpKSkge1xyXG4gICAgICAgICAgICAgICAgLy9DaGVja3MgMzAgZGF5IG1vbnRoc1xyXG4gICAgICAgICAgICAgICAgaWYgKCgodXNlckRheS5nZXREYXRlICsgMSkgPT09IDMxKSAmJiAoKHVzZXJEYXkuZ2V0TW9udGgoKSArIDEpID09PSBjYXJkRGF5LmdldE1vbnRoKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgodXNlckRheS5nZXREYXRlKCkgKyAxKSA9PT0gY2FyZERheS5nZXREYXRlKCkpICYmICh1c2VyRGF5LmdldE1vbnRoKCkgPT09IGNhcmREYXkuZ2V0TW9udGgoKSkgJiYgKHVzZXJEYXkuZ2V0RnVsbFllYXIoKSA9PT0gY2FyZERheS5nZXRGdWxsWWVhcigpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgodXNlckRheS5nZXRNb250aCA9PT0gMSkgJiYgKCh1c2VyRGF5LmdldEZ1bGxZZWFyICUgNCkgIT09IDApKXtcclxuICAgICAgICAgICAgICAgIC8vbm90IGxlYXAgeWVhclxyXG4gICAgICAgICAgICAgICAgaWYgKCgodXNlckRheS5nZXREYXRlICsgMSkgPT09IDI5KSAmJiAodXNlckRheS5nZXRGdWxsWWVhcigpID09PSBjYXJkRGF5LmdldEZ1bGxZZWFyKCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoKHVzZXJEYXkuZ2V0RGF0ZSgpICsgMSkgPT09IGNhcmREYXkuZ2V0RGF0ZSgpKSAmJiAodXNlckRheS5nZXRGdWxsWWVhcigpID09PSBjYXJkRGF5LmdldEZ1bGxZZWFyKCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgodXNlckRheS5nZXRNb250aCA9PT0gMSkgJiYgKCh1c2VyRGF5LmdldEZ1bGxZZWFyICUgNCkgPT09IDApKXtcclxuICAgICAgICAgICAgICAgIC8vbGVhcCB5ZWFyXHJcbiAgICAgICAgICAgICAgICBpZiAoKCh1c2VyRGF5LmdldERhdGUgKyAxKSA9PT0gMzApICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgodXNlckRheS5nZXREYXRlKCkgKyAxKSA9PT0gY2FyZERheS5nZXREYXRlKCkpICYmICh1c2VyRGF5LmdldEZ1bGxZZWFyKCkgPT09IGNhcmREYXkuZ2V0RnVsbFllYXIoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvbWVkYXknKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc29tZWRheSgpKTtcclxuZnVuY3Rpb24gc29tZWRheSgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkRGF5ID0gaXRlbS5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMSkuY2hpbGRyZW4uaXRlbSgxKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKGNhcmREYXkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub0RhdGUnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbm9kYXRlKCkpO1xyXG5mdW5jdGlvbiBub2RhdGUoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZERheSA9IGl0ZW0uY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDEpLmNoaWxkcmVuLml0ZW0oMSkudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChjYXJkRGF5ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0NhdGVnb3J5IGZ1bmN0dGlvbmFsaXR5XHJcblxyXG5mdW5jdGlvbiBjYXRlZ29yeUNsaWNrKCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHQoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRDYXRlZ29yeSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDYXRlZ29yeSA9IGl0ZW0uY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGNsaWNrZWRDYXRlZ29yeSAhPT0gY2FyZENhdGVnb3J5KXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0KHByZXNzZWQpIHtcclxuICAgIGNvbnN0IHRpbWVDYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0VGltZVwiKS5jaGlsZHJlbjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aW1lQ2F0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGltZUNhdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocHJlc3NlZCk7XHJcbiAgICBwcmVzc2VkLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2NhcmRJbmZvfSBmcm9tIFwiLi9jYXJkc1wiO1xyXG5pbXBvcnQge3VwZGF0ZUNhdGVnb3J5U2VsZWN0fSBmcm9tICcuL2RvbSdcclxuLy9pbXBvcnQgZGlzcGxheUNhcmQgZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5cclxudGFza2Zvcm0oKTtcclxuZm9ybUNhdGVnb3J5KCk7XHJcblxyXG5cclxuZnVuY3Rpb24gdGFza2Zvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtQ29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZE5ld1Rhc2tcIik7XHJcbiAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwibm90VmlzaWJsZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XHJcbiAgICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNhcmRJbmZvKCk7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdub3RWaXNpYmxlJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy93aW5kb3cub25jbGljayA9IGNsb3NlRm9ybXM7XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1zKCkge1xyXG4gICAgLy9jdXJyZW50bHkgZG9lcyBub3Qgd29ya1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZm9ybUNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUNhdGVnb3J5XCIpO1xyXG4gICAgaWYoIWZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90VmlzaWJsZVwiKSB8fCAhY2F0ZWdvcnlGb3JtLmNsYXNzTGlzdC5jb250YWlucygnbm90VmlzaWJsZScpKXtcclxuICAgICAgICBjYXRlZ29yeUZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnbm90VmlzaWJsZScpO1xyXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcIm5vdFZpc2libGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1DYXRlZ29yeSgpIHtcclxuICAgIGNvbnN0IG5ld0NhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGROZXdDYXRlZ29yeVwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybUNhdGVnb3J5XCIpO1xyXG4gICAgbmV3Q2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjYXRlZ29yeUZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnbm90VmlzaWJsZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGFwcGx5YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ2F0ZWdvcnkgPiAqID4gYnV0dG9uXCIpO1xyXG4gICAgYXBwbHlidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlQ2F0ZWdvcnlTZWxlY3QoKTtcclxuICAgICAgICBjYXRlZ29yeUZvcm0uY2xhc3NMaXN0LmFkZCgnbm90VmlzaWJsZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLypcclxuVGhpbmdzIHQwIHdvcmsgb246XHJcbi0gSGlnaGxpZ2h0IHRoZSBzaWRlYmFyIGJ1dHRvbiB0aGF0IGlzIGNsaWNrZWRcclxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=