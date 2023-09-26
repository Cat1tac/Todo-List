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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    list-style: none;
    color: aliceblue;
    padding: 0;
    margin: 0;
}

.notVisible {
    visibility: hidden;
}

.visible {
    visibility: visible;
}

body{
    background-color: rgb(0, 0, 39);
}
.container {
    display: grid;
    grid-template-columns: 250px 4fr;
}

header {
    border: 1px solid white;
    border-radius: 10px;
    grid-column: 1 / 3;
    height: 60px;
    text-align: center;
    margin: 5px;
    font-size: 1.2em;
}

header > h3 {
    margin-top: 15px;
}

/* Form */

.formContainer {
    margin-top: 75px;
    position: absolute;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
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
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    padding-left: 20px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-weight: bold;
    font-size: 1.2em;
    height: 100%;
    width: 191px;

}

.addNewTask,
.addNewCategory {
    width: fit-content
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
    color: rgb(179, 179, 179);
    width: fit-content;
}

.sidebar > ul > li:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
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
    position:absolute;
    margin-top: 80px;
}

.formCategory,
#addcategory{
    width: 100px;
    height: 20px;
    
}



/* Todo Items */

.todoItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, 321px);
    margin: 5px;
    gap: 10px;
    
}

.item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: fit-content;
    width: 300px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    align-items: center;

}

.priorityChecked {
    background-color: black;
}

.topItemArea {
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
}

.addNewChecklistItem {
    width: 100%;
    text-align: right;
}

.addNewChecklistItem > button {
    width: 70px;
}

.bottomItemArea > button {
    border-radius: 20px;
    width: 130px;
    height: 35px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,SAAS;;AAET;IACI,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;;;IAGI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,YAAY;;AAEZ;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;;AAEhB;;AAEA;;IAEI;AACJ;;AAEA;;IAEI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;;IAEI,sBAAsB;IACtB,qBAAqB;IACrB,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;IACZ,YAAY;;AAEhB;;;;AAIA,eAAe;;AAEf;IACI,aAAa;IACb,+CAA+C;IAC/C,WAAW;IACX,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB","sourcesContent":["* {\r\n    list-style: none;\r\n    color: aliceblue;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.notVisible {\r\n    visibility: hidden;\r\n}\r\n\r\n.visible {\r\n    visibility: visible;\r\n}\r\n\r\nbody{\r\n    background-color: rgb(0, 0, 39);\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 250px 4fr;\r\n}\r\n\r\nheader {\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    grid-column: 1 / 3;\r\n    height: 60px;\r\n    text-align: center;\r\n    margin: 5px;\r\n    font-size: 1.2em;\r\n}\r\n\r\nheader > h3 {\r\n    margin-top: 15px;\r\n}\r\n\r\n/* Form */\r\n\r\n.formContainer {\r\n    margin-top: 75px;\r\n    position: absolute;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    /* centers the absolute div */\r\n    width: 317px;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nform[action=\"todo-list-form\"] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\ninput[id=\"title\"] {\r\n    margin-bottom: 5px;\r\n    height: 20px;\r\n}\r\n\r\ntextarea[id=\"description\"],\r\ninput[id=\"title\"],\r\nselect {\r\n    width: 170px;\r\n    border-radius: 10px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n/* Sidebar */\r\n\r\n.sidebar {\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    padding-left: 20px;\r\n    margin: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n    height: 100%;\r\n    width: 191px;\r\n\r\n}\r\n\r\n.addNewTask,\r\n.addNewCategory {\r\n    width: fit-content\r\n}\r\n\r\n.addNewTask:hover,\r\n.addNewCategory:hover {\r\n    padding: 5px;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    width: fit-content;\r\n    color: black;\r\n    background-color: rgb(197, 198, 211);\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar > ul > li {\r\n    margin-bottom: 25px;\r\n    color: rgb(179, 179, 179);\r\n    width: fit-content;\r\n}\r\n\r\n.sidebar > ul > li:hover {\r\n    cursor: pointer;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.addNewTask > span,\r\n.addNewCategory > span {\r\n    background-color: blue;\r\n    border-radius: 1000px;\r\n    padding: 3px 8px 3px 8px;\r\n}\r\n\r\n.addNewCategory > span {\r\n    background-color: purple;\r\n}\r\n\r\n.formCategory{\r\n    position:absolute;\r\n    margin-top: 80px;\r\n}\r\n\r\n.formCategory,\r\n#addcategory{\r\n    width: 100px;\r\n    height: 20px;\r\n    \r\n}\r\n\r\n\r\n\r\n/* Todo Items */\r\n\r\n.todoItems {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, 321px);\r\n    margin: 5px;\r\n    gap: 10px;\r\n    \r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    height: fit-content;\r\n    width: 300px;\r\n    border: 1px solid white;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.priorityChecked {\r\n    background-color: black;\r\n}\r\n\r\n.topItemArea {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.topItemArea > div {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.topItemArea > div > h5 {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.checklistItemDisplay {\r\n    width: 100%;\r\n    padding-left: 50px;\r\n}\r\n\r\n.addNewChecklistItem {\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.addNewChecklistItem > button {\r\n    width: 70px;\r\n}\r\n\r\n.bottomItemArea > button {\r\n    border-radius: 20px;\r\n    width: 130px;\r\n    height: 35px;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   cardInfo: () => (/* binding */ cardInfo)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


let cardArray = [];
let cards = [];

class Card {
    constructor(title, date, category, description){
        this.title = title;
        this.date = date;
        this.category = category;
        this.description = description;
    }

    /*addChecklistItem(){

    }

    completeTask() {

    }
    */
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
        cards[i] = new Card(cardTitle, cardDate, cardCategory, cardDescription);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayCard)(i, cardTitle, cardDate, cardCategory, cardDescription);
    }

    cardArray.push(cards[cards.length - 1]);
}

function priorityValue() {
    const priorityCheck = document.querySelector("input[type='checkbox']");
    if (priorityCheck.checked){
        //going to change card color
    }
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
/* harmony export */   updateCategorySelect: () => (/* binding */ updateCategorySelect)
/* harmony export */ });

let cardShell = [];
const cardContainer = document.querySelector('.todoItems');

function displayCard(point, title, date, category, description) {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');



    for (let i = point; i < point + 1; i++){
        cardShell[i] = document.createElement("div");
        cardShell[i].classList.add('item'); 

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
    
        //will add the check lists in a different function
        //will need to make an array


    
    //card button for creating a nwe checklist item
        const cardAddChecklist = document.createElement("div");
        cardAddChecklist.classList.add('addNewChecklistItem');
    
        const checklistAddButton = document.createElement('button');
        checklistAddButton.textContent = "Add Item";
    
        cardAddChecklist.appendChild(checklistAddButton);
    
    //bottom area of card
        const cardBottom = document.createElement("div");
        cardBottom.classList.add('bottomItemArea');
    
        const cardComplete = document.createElement('button');
        cardComplete.textContent = "Done";
        //will need to make an array
        
        cardBottom.appendChild(cardComplete);
        ///////////////////////////////////////////////
    
        cardShell[i].append(cardTop, cardChecklist, cardAddChecklist, cardBottom);
        console.log(cardShell[i]);
        cardContainer.appendChild(cardShell[i]);
    }
    
    //return {cardChecklist}
}

function newChecklistDisplay(cardChecklist) {

}

function updateCategorySelect() {
    const selectCategories = document.querySelector('#category');
    const newCategory = document.createElement('option');
    newCategory.value = document.getElementById('addcategory').value;
    selectCategories.appendChild(newCategory);
}


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



const form = document.querySelector("div.formContainer");

const newTask = document.querySelector(".addNewTask");
newTask.addEventListener('click', ()=> {
    if (form.classList.contains("notVisible")){
        form.classList.remove('notVisible');
        form.classList.add('visiblie');
    } else {
        form.classList.remove('visible');
        form.classList.add('notVisible');
    }
});

const newCategory = document.querySelector(".addNewCategory");
const categoryForm = document.querySelector(".formCategory")
newCategory.addEventListener("click", () => {
    if (categoryForm.classList.contains("notVisible")){
        categoryForm.classList.remove('notVisible');
        categoryForm.classList.add('visiblie');
    } else {
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateCategorySelect)();
        categoryForm.classList.remove('visible');
        categoryForm.classList.add('notVisible');
    }

});

const formSubmit = document.querySelector('input[type="submit"]');

formSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    (0,_cards__WEBPACK_IMPORTED_MODULE_1__.cardInfo)();
    form.classList.remove('visible');
    form.classList.add('notVisible');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFdBQVcsU0FBUyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFB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Ozs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEsMERBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFRO0FBQ1o7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubm90VmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi52aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMzkpO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggNGZyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG5oZWFkZXIgPiBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4vKiBGb3JtICovXHJcblxyXG4uZm9ybUNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIGNlbnRlcnMgdGhlIGFic29sdXRlIGRpdiAqL1xyXG4gICAgd2lkdGg6IDMxN3B4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmZvcm1bYWN0aW9uPVwidG9kby1saXN0LWZvcm1cIl0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W2lkPVwidGl0bGVcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYVtpZD1cImRlc2NyaXB0aW9uXCJdLFxyXG5pbnB1dFtpZD1cInRpdGxlXCJdLFxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vKiBTaWRlYmFyICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxOTFweDtcclxuXHJcbn1cclxuXHJcbi5hZGROZXdUYXNrLFxyXG4uYWRkTmV3Q2F0ZWdvcnkge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50XHJcbn1cclxuXHJcbi5hZGROZXdUYXNrOmhvdmVyLFxyXG4uYWRkTmV3Q2F0ZWdvcnk6aG92ZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTk4LCAyMTEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZWJhciA+IHVsID4gbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyID4gdWwgPiBsaTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uYWRkTmV3VGFzayA+IHNwYW4sXHJcbi5hZGROZXdDYXRlZ29yeSA+IHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcclxuICAgIHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcclxufVxyXG5cclxuLmFkZE5ld0NhdGVnb3J5ID4gc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi5mb3JtQ2F0ZWdvcnl7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5mb3JtQ2F0ZWdvcnksXHJcbiNhZGRjYXRlZ29yeXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi8qIFRvZG8gSXRlbXMgKi9cclxuXHJcbi50b2RvSXRlbXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMzIxcHgpO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ucHJpb3JpdHlDaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udG9wSXRlbUFyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi50b3BJdGVtQXJlYSA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnRvcEl0ZW1BcmVhID4gZGl2ID4gaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmNoZWNrbGlzdEl0ZW1EaXNwbGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYWRkTmV3Q2hlY2tsaXN0SXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWRkTmV3Q2hlY2tsaXN0SXRlbSA+IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLmJvdHRvbUl0ZW1BcmVhID4gYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTs7QUFFaEI7Ozs7QUFJQSxlQUFlOztBQUVmO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90VmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMzkpO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA0ZnI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gaDMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtICovXFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAvKiBjZW50ZXJzIHRoZSBhYnNvbHV0ZSBkaXYgKi9cXHJcXG4gICAgd2lkdGg6IDMxN3B4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybVthY3Rpb249XFxcInRvZG8tbGlzdC1mb3JtXFxcIl0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W2lkPVxcXCJ0aXRsZVxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhW2lkPVxcXCJkZXNjcmlwdGlvblxcXCJdLFxcclxcbmlucHV0W2lkPVxcXCJ0aXRsZVxcXCJdLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lkZWJhciAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDE5MXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3VGFzayxcXHJcXG4uYWRkTmV3Q2F0ZWdvcnkge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnRcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld1Rhc2s6aG92ZXIsXFxyXFxuLmFkZE5ld0NhdGVnb3J5OmhvdmVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE5OCwgMjExKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciA+IHVsID4gbGkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyID4gdWwgPiBsaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld1Rhc2sgPiBzcGFuLFxcclxcbi5hZGROZXdDYXRlZ29yeSA+IHNwYW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld0NhdGVnb3J5ID4gc3BhbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1DYXRlZ29yeXtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQ2F0ZWdvcnksXFxyXFxuI2FkZGNhdGVnb3J5e1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFRvZG8gSXRlbXMgKi9cXHJcXG5cXHJcXG4udG9kb0l0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMjFweCk7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5Q2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wSXRlbUFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEl0ZW1BcmVhID4gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEl0ZW1BcmVhID4gZGl2ID4gaDUge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0SXRlbURpc3BsYXkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3Q2hlY2tsaXN0SXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld0NoZWNrbGlzdEl0ZW0gPiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbUl0ZW1BcmVhID4gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkaXNwbGF5Q2FyZCB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxubGV0IGNhcmRBcnJheSA9IFtdO1xyXG5sZXQgY2FyZHMgPSBbXTtcclxuXHJcbmNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKmFkZENoZWNrbGlzdEl0ZW0oKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcGxldGVUYXNrKCkge1xyXG5cclxuICAgIH1cclxuICAgICovXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXJkSW5mbygpIHtcclxuICAgIGxldCBjYXJkVGl0bGU7XHJcbiAgICBsZXQgY2FyZERlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGNhcmRDYXRlZ29yeTtcclxuICAgIGxldCBjYXJkRGF0ZTtcclxuICAgIGxldCBjYXJkUHJpb3JpdHk7XHJcbiAgICBjYXJkVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgIGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgY2FyZENhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWU7XHJcbiAgICBjYXJkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKS52YWx1ZTtcclxuICAgIGNhcmRQcmlvcml0eSA9IHByaW9yaXR5VmFsdWUoKTtcclxuICAgIGZvcihsZXQgaSA9IGNhcmRBcnJheS5sZW5ndGg7IGkgPCBjYXJkQXJyYXkubGVuZ3RoICsgMTsgaSsrKXtcclxuICAgICAgICBjYXJkc1tpXSA9IG5ldyBDYXJkKGNhcmRUaXRsZSwgY2FyZERhdGUsIGNhcmRDYXRlZ29yeSwgY2FyZERlc2NyaXB0aW9uKTtcclxuICAgICAgICBkaXNwbGF5Q2FyZChpLCBjYXJkVGl0bGUsIGNhcmREYXRlLCBjYXJkQ2F0ZWdvcnksIGNhcmREZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZEFycmF5LnB1c2goY2FyZHNbY2FyZHMubGVuZ3RoIC0gMV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmlvcml0eVZhbHVlKCkge1xyXG4gICAgY29uc3QgcHJpb3JpdHlDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xyXG4gICAgaWYgKHByaW9yaXR5Q2hlY2suY2hlY2tlZCl7XHJcbiAgICAgICAgLy9nb2luZyB0byBjaGFuZ2UgY2FyZCBjb2xvclxyXG4gICAgfVxyXG59IiwiXHJcbmxldCBjYXJkU2hlbGwgPSBbXTtcclxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvSXRlbXMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q2FyZChwb2ludCwgdGl0bGUsIGRhdGUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgYWxsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIGFsbElucHV0cy5mb3JFYWNoKHNpbmdsZUlucHV0ID0+IHNpbmdsZUlucHV0LnZhbHVlID0gJycpO1xyXG5cclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHBvaW50OyBpIDwgcG9pbnQgKyAxOyBpKyspe1xyXG4gICAgICAgIGNhcmRTaGVsbFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZFNoZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTsgXHJcblxyXG4gICAgLy90b3BoYWxmIG9mIGNhcmQsIDMgY2hpbGRyZW5cclxuICAgICAgICBjb25zdCBjYXJkVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkVG9wLmNsYXNzTGlzdC5hZGQoJ3RvcEl0ZW1BcmVhJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnlMYWJlbC50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xyXG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IGRhdGU7XHJcbiAgICBcclxuICAgICAgICB0aXRsZURhdGUuYXBwZW5kKHRpdGxlTGFiZWwsIGRhdGVMYWJlbCk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9ubGFiZWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkVG9wLmFwcGVuZChjYXRlZ29yeUxhYmVsLCB0aXRsZURhdGUsIGRlc2NyaXB0aW9ubGFiZWwpO1xyXG4gICAgXHJcbiAgICAvL2NhcmQgY2hlY2tsaXN0IGFyZWFcclxuICAgICAgICBjb25zdCBjYXJkQ2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkQ2hlY2tsaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdEl0ZW1EaXNwbGF5Jyk7XHJcbiAgICBcclxuICAgICAgICAvL3dpbGwgYWRkIHRoZSBjaGVjayBsaXN0cyBpbiBhIGRpZmZlcmVudCBmdW5jdGlvblxyXG4gICAgICAgIC8vd2lsbCBuZWVkIHRvIG1ha2UgYW4gYXJyYXlcclxuXHJcblxyXG4gICAgXHJcbiAgICAvL2NhcmQgYnV0dG9uIGZvciBjcmVhdGluZyBhIG53ZSBjaGVja2xpc3QgaXRlbVxyXG4gICAgICAgIGNvbnN0IGNhcmRBZGRDaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmRBZGRDaGVja2xpc3QuY2xhc3NMaXN0LmFkZCgnYWRkTmV3Q2hlY2tsaXN0SXRlbScpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0QWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2hlY2tsaXN0QWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgSXRlbVwiO1xyXG4gICAgXHJcbiAgICAgICAgY2FyZEFkZENoZWNrbGlzdC5hcHBlbmRDaGlsZChjaGVja2xpc3RBZGRCdXR0b24pO1xyXG4gICAgXHJcbiAgICAvL2JvdHRvbSBhcmVhIG9mIGNhcmRcclxuICAgICAgICBjb25zdCBjYXJkQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUl0ZW1BcmVhJyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBjYXJkQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjYXJkQ29tcGxldGUudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcclxuICAgICAgICAvL3dpbGwgbmVlZCB0byBtYWtlIGFuIGFycmF5XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FyZEJvdHRvbS5hcHBlbmRDaGlsZChjYXJkQ29tcGxldGUpO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBcclxuICAgICAgICBjYXJkU2hlbGxbaV0uYXBwZW5kKGNhcmRUb3AsIGNhcmRDaGVja2xpc3QsIGNhcmRBZGRDaGVja2xpc3QsIGNhcmRCb3R0b20pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRTaGVsbFtpXSk7XHJcbiAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkU2hlbGxbaV0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3JldHVybiB7Y2FyZENoZWNrbGlzdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmV3Q2hlY2tsaXN0RGlzcGxheShjYXJkQ2hlY2tsaXN0KSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnlTZWxlY3QoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5Jyk7XHJcbiAgICBjb25zdCBuZXdDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgbmV3Q2F0ZWdvcnkudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkY2F0ZWdvcnknKS52YWx1ZTtcclxuICAgIHNlbGVjdENhdGVnb3JpZXMuYXBwZW5kQ2hpbGQobmV3Q2F0ZWdvcnkpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2NhcmRJbmZvfSBmcm9tIFwiLi9jYXJkc1wiO1xyXG5pbXBvcnQge3VwZGF0ZUNhdGVnb3J5U2VsZWN0fSBmcm9tICcuL2RvbSdcclxuLy9pbXBvcnQgZGlzcGxheUNhcmQgZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm1Db250YWluZXJcIik7XHJcblxyXG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGROZXdUYXNrXCIpO1xyXG5uZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RWaXNpYmxlXCIpKXtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ25vdFZpc2libGUnKTtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGllJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnbm90VmlzaWJsZScpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG5ld0NhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGROZXdDYXRlZ29yeVwiKTtcclxuY29uc3QgY2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtQ2F0ZWdvcnlcIilcclxubmV3Q2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yeUZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90VmlzaWJsZVwiKSl7XHJcbiAgICAgICAgY2F0ZWdvcnlGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ25vdFZpc2libGUnKTtcclxuICAgICAgICBjYXRlZ29yeUZvcm0uY2xhc3NMaXN0LmFkZCgndmlzaWJsaWUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXBkYXRlQ2F0ZWdvcnlTZWxlY3QoKTtcclxuICAgICAgICBjYXRlZ29yeUZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgICAgIGNhdGVnb3J5Rm9ybS5jbGFzc0xpc3QuYWRkKCdub3RWaXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XHJcblxyXG5mb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjYXJkSW5mbygpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ25vdFZpc2libGUnKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9