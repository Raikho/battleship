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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    grid-template-rows: repeat(2, min-content);\n    grid-template-areas:\n        \".   col   .\"\n        \"row board ships\";\n    justify-items: center;\n    align-items: center;\n}\n.row-labels {\n    grid-area: row;\n}\n.col-labels {\n    grid-area: col;\n    width: 40vw;\n    border: 1px dotted yellow;\n    color: lightgray;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: row;\n    gap: 2px;\n    justify-content: space-around;\n}\n.ships {\n    grid-area: ships;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.board {\n    grid-area: board;\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 40vw;\n    height: 40vw;\n\n    padding: 0px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n    gap: 2px;\n}\n.board>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n}\n.square.ship {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: var(--accent);\n    border: 3px dotted var(--indigo);\n}\n.square.hit {\n    color: red;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;;IAEf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;IACf,sBAAsB;;IAEtB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA,cAAc,uBAAuB,CAAC;AACtC;IACI,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,6CAA6C;IAC7C,0CAA0C;IAC1C;;yBAEqB;IACrB,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,6BAA6B;AACjC;AACA;IACI,gBAAgB;AACpB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,YAAY;;IAEZ,YAAY;;IAEZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,QAAQ;AACZ;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,+BAA+B;AACnC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,+BAA+B;IAC/B,gCAAgC;AACpC;AACA;IACI,UAAU;AACd;AACA;IACI,2BAA2B;AAC/B","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    grid-template-rows: repeat(2, min-content);\n    grid-template-areas:\n        \".   col   .\"\n        \"row board ships\";\n    justify-items: center;\n    align-items: center;\n}\n.row-labels {\n    grid-area: row;\n}\n.col-labels {\n    grid-area: col;\n    width: 40vw;\n    border: 1px dotted yellow;\n    color: lightgray;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: row;\n    gap: 2px;\n    justify-content: space-around;\n}\n.ships {\n    grid-area: ships;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.board {\n    grid-area: board;\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 40vw;\n    height: 40vw;\n\n    padding: 0px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n    gap: 2px;\n}\n.board>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n}\n.square.ship {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: var(--accent);\n    border: 3px dotted var(--indigo);\n}\n.square.hit {\n    color: red;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}"],"sourceRoot":""}]);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM = {};

DOM.createBoard = function(parent, game, player) {
    for (let y = 0; y < 11; y++) {
        for (let x = 0; x < 11; x++) {
            if (x == 0 && y == 0) {
                let node = createDiv(parent);
            }
            else if (x == 0) {
                let node = createDiv(parent);
                node.textContent = y;
            }
            else if (y == 0) {
                let node = createDiv(parent);
                node.textContent = x;
            }
            else if (x != 0 && y != 0) {
                let node = createDiv(parent);
                node.classList.add('square');
                node.dataset.x = x;
                node.dataset.y = y;
                node.dataset.name = player.name;

                node.onclick = () => function() {
                    game.squareClicked(x, y, player.name)
                }();
            }
        }
    }
}

DOM.updateBoard = function(parent, player) {
    clearChildClasses(parent);
    for (let ship of player.board.ships) {
        for (let segment of ship.segments) {
            let node = parent.querySelector(
                `[data-x="${segment.x}"][data-y="${segment.y}"]`);
            node.classList.add('ship');
        }
    }
    for (let hit of player.board.hits) {
        let node = parent.querySelector(
            `[data-x="${hit.x}"][data-y="${hit.y}"]`);
        node.classList.add('hit');
        node.textContent = 'x';
    }
}

DOM.hide = function(boardNode1, boardNode2) {
    boardNode1.classList.add('hidden');
    boardNode2.classList.add('hidden');
}
DOM.reveal = function(boardNode) {
    console.log('classlist before revealing: ', boardNode.classList)
    boardNode.classList.remove('hidden');
    console.log('classlist after revealing: ', boardNode.classList)
}

DOM.updateCurrentPlayer = function(player) {
    let currentNum = (player.name === 'p1') ? 1 : 2;
    let otherNum = (player.name === 'p2') ? 1 : 2

    let currentNode = document.querySelector(`.board.player${currentNum}`);
    let otherNode = document.querySelector(`.board.player${otherNum}`);

    currentNode.dataset.active = true;
    otherNode.dataset.active = false;
}

DOM.setButtons = function(game) {
    let twoPlayerNode = document.getElementById('twoPlayer');
    let computerNode = document.getElementById('computer');
    let autoGenNode = document.getElementById('autoGen');
    let confirmNode = document.getElementById('confirm');
    let resetNode = document.getElementById('reset');
    let peek = document.getElementById('peek');
    twoPlayerNode.onclick = () => function() {game.start('twoPlayer');}();
    computerNode.onclick = () => function() {game.start('computer');}();
    autoGenNode.onclick = game.autoGen.bind(game);
    confirmNode.onclick = game.confirm.bind(game);
    resetNode.onclick = () => function() {
        console.log('%crestart %cbutton pressed', 'color: skyblue', null);
        game.updateState('start');
    }();
    peek.onmousedown = () => function() {game.reveal(game.turnPlayer);}();
    peek.onmouseup = () => function() {game.hide();}();
}

DOM.updateButtons = function(state) {
    console.log('updating buttons...');
    switch(state) {
        case 'start':
            setButtonActive('twoPlayer', true);
            setButtonActive('computer', true);
            setButtonActive('peek', false);
            break;
        case 'p1pick':
            setButtonActive('twoPlayer', false);
            setButtonActive('computer', false);
            setButtonActive('autoGen', true);
            setButtonActive('reset', true);
            break;
        case 'p1Confirm':
            setButtonActive('autoGen', false);
            setButtonActive('confirm', true);
            break;
        case 'p2pick':
            setButtonActive('autoGen', true);
            setButtonActive('confirm', false);
            break;
        case 'p2Confirm':
            setButtonActive('autoGen', false);
            setButtonActive('confirm', true);
            break;
        case 'game':
            setButtonActive('confirm', false);
            setButtonActive('peek', true);
            break;
        case 'results':
            setButtonActive('peek', false);
            break;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

function createDiv(parent) {
    let node = document.createElement('div');
    parent.appendChild(node);
    return node;
}

function clearChildClasses(parent) {
    const children = [...parent.childNodes];
    for (let child of children) {
        child.classList.remove('ship');
        child.classList.remove('hit');
    }
}

function setButtonActive(id, isActive) {
    let node = document.getElementById(id);
    if (isActive)
        node.classList.add('active');
    else
        node.classList.remove('active');
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



const boardNode1 = document.querySelector('.board.player1');
const boardNode2 = document.querySelector('.board.player2');

class Game {
    constructor() {
        this.p1 = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p1');
        this.p2 = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p2');
        this.turnPlayer = this.p1;
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(boardNode1, this, this.p1);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(boardNode2, this, this.p2);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setButtons(this);

        // select game type
        // pick ships
            // player 1 picks => pass over
            // player 2 picks => start game
        // start game
            // player 1 turn (optional show board)
            // player 2 turn (optional show board)
        // results => restart
        this.state = 'start'; // 'start', 'p1pick', 'p2pick', 'game', 'results'
                              // 'p1Confirm', 'p2Confirm'
        this.update();
    }

    updateState(state) {
        if (this.state === state) return;
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');

        this.state = state;
        switch(state) {
            case 'start':
                this.p1.board.clear();
                this.p2.board.clear();
                this.hide();
                this.update();
                break;
            case 'p1pick':
                this.reveal(this.p1);
                this.turnPlayer = this.p1;
                break;
            case 'p1Confirm':
                break;
            case 'p2pick':
                this.hide();
                this.reveal(this.p2);
                this.turnPlayer = this.p2;
                break;
            case 'p2Confirm':
                break;
            case 'game':
                this.turnPlayer = this.p1;
                this.hide();
                this.update();
                break;
            case 'results':
                break;
        }
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateButtons(state);
    }

    start(type) {
        console.log(`%c${type}`+' %cbutton pressed', 'color: skyblue', null);
        if (this.state !== 'start')
            return;
        if (type === 'twoPlayer')
            this.updateState('p1pick');
    }

    confirm() {
        console.log('%cconfirm %cbutton pressed', 'color: skyblue', null);
        if (this.state === 'p1Confirm')
            this.updateState('p2pick');
        else if (this.state === 'p2Confirm')
            this.updateState('game');
    }

    hide() {
        console.log('hiding player ships');
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].hide(boardNode1, boardNode2);
    }
    reveal(player) {
        console.log(`revealing %c${player.name}'s ships`, 'color: skyblue');
        let boardNode = (player.name === this.p1.name) ? boardNode1 : boardNode2;
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].reveal(boardNode);
    }
    peek() {
        console.log(`Peeking at ${this.turnPlayer.name}'s ships`);
    }

    autoGen() {
        console.log('%cautoGen %cbutton pressed', 'color: skyblue', null);

        if (this.state === 'p1pick') {
            this.p1.board.genDefaultShips();
            this.updateState('p1Confirm');
        } else if (this.state === 'p2pick') {
            this.p2.board.genDefaultShips();
            this.updateState('p2Confirm');
        } else return;
        console.log('after gen: ', this.p1);
        this.update();
 }

    squareClicked(x, y, name) {
        console.log(`clicked x:%c${x}%c y:%c${y}%c | board: %c${name}%c | turn: ${this.turnPlayer.name}`,
            'color: lightcoral', null, 'color: lightcoral', null, 'color: lightcoral', null);
        if (this.state != 'game')
            return;

        if (this.turnPlayer.name === name)
            return console.log("Error: click other player's board");

        let response = this.getOtherPlayer(name).board.receiveAttack(x, y);
        console.log('response: ', response);
        
        if (response.status === 'failure')
            return;

        switch (response.result) {
            case 'empty square':
                break;
            case 'enemy ship hit':
                break;
            case 'enemy ship sunk':
                break;
            case 'all enemy ships sunk':
                this.updateState('results');
                break;
        }

        this.switchPlayer();
        this.update();
    };

    switchPlayer() {
        this.turnPlayer = (this.turnPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }
    getOtherPlayer(name) {
        return (this.turnPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }

    update() {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateBoard(boardNode1, this.p1);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateBoard(boardNode2, this.p2);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateCurrentPlayer(this.turnPlayer);
    }
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


class Gameboard {
    constructor() {
        this.ships = [];
        this.hits = [];
    }

    addShip(x, y, length = 1, shape = 'vertical') {
        if (isOutOfBounds(x, y))
            return {status: 'failure', message: 'ship out of bounds'};
        
        let ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, length, shape);

        for (let segment of ship.segments)
            if (isOutOfBounds(segment.x, segment.y))
                return {status: 'failure', message: 'ship extends out of bounds'};

        for (let segment1 of ship.segments)
            for (let ship2 of this.ships)
                for (let segment2 of ship2.segments)
                    if (segment1.x == segment2.x && segment1.y == segment2.y)
                        return {status: 'failure', message: 'ship intersects other ship'};

        this.ships.push(ship);
        return {status: 'success'};
    }

    receiveAttack(x, y) {
        for (let hit of this.hits)
            if (hit.x == x && hit.y == y)
                return {status: 'failure', message: 'square already hit'};

        this.hits.push({x, y});

        for (let ship of this.ships) {
            for (let segment of ship.segments) {
                if (segment.x == x && segment.y == y) {
                    segment.isHit = true;
                    if (!ship.isSunk())
                        return {status: 'success', result: 'enemy ship hit'};
                    else if (this.areShipsSunk())
                        return {status: 'success', result: 'all enemy ships sunk'};
                    else
                        return {status: 'success', result: 'enemy ship sunk'};
                }
            }
        }

        return {status: 'success', result: 'empty square'};
    }

    areShipsSunk() {
        for (let ship of this.ships)
            if (!ship.isSunk())
                return false;
        return true;
    }

    genDefaultShips() {
        this.addShip(1, 1, 2);
        this.addShip(3, 3, 2);
        this.addShip(5, 5, 2);
        this.addShip(7, 7, 2);
        this.addShip(9, 4, 2);
    }

    clear() {
        this.ships = [];
        this.hits = [];
    }
}

function isOutOfBounds(x, y) {
    return (x > 10 || x < 0 || y > 10 || y < 0);
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


class Player {
    constructor(name) {
        this.board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.name = name;

        this.onClickSquare = this.clickSquare1;
    }

    clickSquare1(x, y) {
        console.log('1: clicked first version of clickSquare: ', x, y);
        this.onClickSquare = this.clickSquare2;
    }
    clickSquare2() {
        console.log('2: clicked second version of clickSquare');
        this.onClickSquare = this.clickSquare1;
    }
}

function clickSquare1() {
    console.log('1: clicked first version of clickSquare')
}
function clickSquare2() {
    console.log('2: clicked second version of clickSquare')
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(x, y, length, shape = 'vertical') {
        this.segments = [];
        for (let i = 0; i < length; i++) {
            let dx = (shape === 'vertical') ? 0 : i;
            let dy = (shape === 'vertical') ? i : 0;
            this.segments.push(createSegment(x + dx, y + dy));
        }
    }
    get hits() {
        return this.segments.reduce((prev, curr) => 
            prev += (curr.isHit) ? 1 : 0, 0);
    }
    hit(x, y) {
        this.segments.forEach(segment => {
            if (x == segment.x && y == segment.y)
                segment.isHit = true;
        });
    }
    isSunk() {return (this.hits >= this.segments.length)}
}

function createSegment(x, y) {return {x, y, isHit: false}}


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
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.js */ "./src/game.js");







const game = new _game_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

// document.addEventListener('click', tryAttack);

// let currentPlayer = player1;
// let oppositePlayer = player2;

// function tryAttack(event) {
//     let node = event.target;
//     console.log('node target: ', node);
    
//     if (!node.classList.contains('square'))
//         return console.log('square not clicked, retrying...');

//     console.log(node.dataset.name, oppositePlayer.name);
//     if (node.dataset.name === oppositePlayer.name)
//         console.log('opposite player hit!!');

//     document.removeEventListener('click', tryAttack);
// }


// GAMEMODE STATES
// game-type-selection
// player 1 select pieces
// player 2 select pieces || computer
// gameplay
//      player 1 turn
//      player 2 turn
// stats (reset)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTjtBQUNOO0FBQ0U7O0FBRTdCLGlCQUFpQixnREFBSTs7QUFFckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iZzogZGFya3NsYXRlZ3JheTtcXG4gICAgLS1ib2FyZC1iZzogIzk0YTNiODtcXG4gICAgLS1mZzogIzFlMjkzYmFhO1xcblxcbiAgICAtLXNreUJsdWU6ICMzOGJkZjg7XFxuICAgIC0taW5kaWdvOiAjMDUwNTA3YWE7XFxuICAgIC0tYWNjZW50OiAjMEU3NDkwO1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCdXR0b25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNidXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcIi4gICBjb2wgICAuXFxcIlxcbiAgICAgICAgXFxcInJvdyBib2FyZCBzaGlwc1xcXCI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJvdy1sYWJlbHMge1xcbiAgICBncmlkLWFyZWE6IHJvdztcXG59XFxuLmNvbC1sYWJlbHMge1xcbiAgICBncmlkLWFyZWE6IGNvbDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCB5ZWxsb3c7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDJweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5zaGlwcyB7XFxuICAgIGdyaWQtYXJlYTogc2hpcHM7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYm9hcmQge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGhlaWdodDogNDB2dztcXG5cXG4gICAgcGFkZGluZzogMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG4uYm9hcmQ+KiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuLnNxdWFyZS5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogM3B4IGRvdHRlZCB2YXIoLS1pbmRpZ28pO1xcbn1cXG4uc3F1YXJlLmhpdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7O0lBRVQsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQSxjQUFjLHVCQUF1QixDQUFDO0FBQ3RDO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQzs7eUJBRXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxZQUFZOztJQUVaLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsUUFBUTtBQUNaO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCIuICAgY29sICAgLlxcXCJcXG4gICAgICAgIFxcXCJyb3cgYm9hcmQgc2hpcHNcXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yb3ctbGFiZWxzIHtcXG4gICAgZ3JpZC1hcmVhOiByb3c7XFxufVxcbi5jb2wtbGFiZWxzIHtcXG4gICAgZ3JpZC1hcmVhOiBjb2w7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93O1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAycHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uc2hpcHMge1xcbiAgICBncmlkLWFyZWE6IHNoaXBzO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxuXFxuICAgIHBhZGRpbmc6IDBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcbi5zcXVhcmUuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XFxufVxcbi5oaWRkZW4+LnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW5kaWdvKTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5bZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERPTSA9IHt9O1xuXG5ET00uY3JlYXRlQm9hcmQgPSBmdW5jdGlvbihwYXJlbnQsIGdhbWUsIHBsYXllcikge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTE7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDExOyB4KyspIHtcbiAgICAgICAgICAgIGlmICh4ID09IDAgJiYgeSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVEaXYocGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHggPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY3JlYXRlRGl2KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh5ID09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZURpdihwYXJlbnQpO1xuICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeCAhPSAwICYmIHkgIT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY3JlYXRlRGl2KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgICAgICAgICBub2RlLmRhdGFzZXQueCA9IHg7XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhc2V0LnkgPSB5O1xuICAgICAgICAgICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gcGxheWVyLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zcXVhcmVDbGlja2VkKHgsIHksIHBsYXllci5uYW1lKVxuICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUJvYXJkID0gZnVuY3Rpb24ocGFyZW50LCBwbGF5ZXIpIHtcbiAgICBjbGVhckNoaWxkQ2xhc3NlcyhwYXJlbnQpO1xuICAgIGZvciAobGV0IHNoaXAgb2YgcGxheWVyLmJvYXJkLnNoaXBzKSB7XG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEteD1cIiR7c2VnbWVudC54fVwiXVtkYXRhLXk9XCIke3NlZ21lbnQueX1cIl1gKTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGhpdCBvZiBwbGF5ZXIuYm9hcmQuaGl0cykge1xuICAgICAgICBsZXQgbm9kZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLXg9XCIke2hpdC54fVwiXVtkYXRhLXk9XCIke2hpdC55fVwiXWApO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIH1cbn1cblxuRE9NLmhpZGUgPSBmdW5jdGlvbihib2FyZE5vZGUxLCBib2FyZE5vZGUyKSB7XG4gICAgYm9hcmROb2RlMS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBib2FyZE5vZGUyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuRE9NLnJldmVhbCA9IGZ1bmN0aW9uKGJvYXJkTm9kZSkge1xuICAgIGNvbnNvbGUubG9nKCdjbGFzc2xpc3QgYmVmb3JlIHJldmVhbGluZzogJywgYm9hcmROb2RlLmNsYXNzTGlzdClcbiAgICBib2FyZE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc29sZS5sb2coJ2NsYXNzbGlzdCBhZnRlciByZXZlYWxpbmc6ICcsIGJvYXJkTm9kZS5jbGFzc0xpc3QpXG59XG5cbkRPTS51cGRhdGVDdXJyZW50UGxheWVyID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgbGV0IGN1cnJlbnROdW0gPSAocGxheWVyLm5hbWUgPT09ICdwMScpID8gMSA6IDI7XG4gICAgbGV0IG90aGVyTnVtID0gKHBsYXllci5uYW1lID09PSAncDInKSA/IDEgOiAyXG5cbiAgICBsZXQgY3VycmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQucGxheWVyJHtjdXJyZW50TnVtfWApO1xuICAgIGxldCBvdGhlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQucGxheWVyJHtvdGhlck51bX1gKTtcblxuICAgIGN1cnJlbnROb2RlLmRhdGFzZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICBvdGhlck5vZGUuZGF0YXNldC5hY3RpdmUgPSBmYWxzZTtcbn1cblxuRE9NLnNldEJ1dHRvbnMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgbGV0IHR3b1BsYXllck5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvUGxheWVyJyk7XG4gICAgbGV0IGNvbXB1dGVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpO1xuICAgIGxldCBhdXRvR2VuTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvR2VuJyk7XG4gICAgbGV0IGNvbmZpcm1Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0nKTtcbiAgICBsZXQgcmVzZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG4gICAgbGV0IHBlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVlaycpO1xuICAgIHR3b1BsYXllck5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc3RhcnQoJ3R3b1BsYXllcicpO30oKTtcbiAgICBjb21wdXRlck5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc3RhcnQoJ2NvbXB1dGVyJyk7fSgpO1xuICAgIGF1dG9HZW5Ob2RlLm9uY2xpY2sgPSBnYW1lLmF1dG9HZW4uYmluZChnYW1lKTtcbiAgICBjb25maXJtTm9kZS5vbmNsaWNrID0gZ2FtZS5jb25maXJtLmJpbmQoZ2FtZSk7XG4gICAgcmVzZXROb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyVjcmVzdGFydCAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG4gICAgICAgIGdhbWUudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG4gICAgfSgpO1xuICAgIHBlZWsub25tb3VzZWRvd24gPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnJldmVhbChnYW1lLnR1cm5QbGF5ZXIpO30oKTtcbiAgICBwZWVrLm9ubW91c2V1cCA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuaGlkZSgpO30oKTtcbn1cblxuRE9NLnVwZGF0ZUJ1dHRvbnMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBidXR0b25zLi4uJyk7XG4gICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgIHNldEJ1dHRvbkFjdGl2ZSgndHdvUGxheWVyJywgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRCdXR0b25BY3RpdmUoJ2NvbXB1dGVyJywgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRCdXR0b25BY3RpdmUoJ3BlZWsnLCBmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncDFwaWNrJzpcbiAgICAgICAgICAgIHNldEJ1dHRvbkFjdGl2ZSgndHdvUGxheWVyJywgZmFsc2UpO1xuICAgICAgICAgICAgc2V0QnV0dG9uQWN0aXZlKCdjb21wdXRlcicsIGZhbHNlKTtcbiAgICAgICAgICAgIHNldEJ1dHRvbkFjdGl2ZSgnYXV0b0dlbicsIHRydWUpO1xuICAgICAgICAgICAgc2V0QnV0dG9uQWN0aXZlKCdyZXNldCcsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3AxQ29uZmlybSc6XG4gICAgICAgICAgICBzZXRCdXR0b25BY3RpdmUoJ2F1dG9HZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICBzZXRCdXR0b25BY3RpdmUoJ2NvbmZpcm0nLCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwMnBpY2snOlxuICAgICAgICAgICAgc2V0QnV0dG9uQWN0aXZlKCdhdXRvR2VuJywgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRCdXR0b25BY3RpdmUoJ2NvbmZpcm0nLCBmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncDJDb25maXJtJzpcbiAgICAgICAgICAgIHNldEJ1dHRvbkFjdGl2ZSgnYXV0b0dlbicsIGZhbHNlKTtcbiAgICAgICAgICAgIHNldEJ1dHRvbkFjdGl2ZSgnY29uZmlybScsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dhbWUnOlxuICAgICAgICAgICAgc2V0QnV0dG9uQWN0aXZlKCdjb25maXJtJywgZmFsc2UpO1xuICAgICAgICAgICAgc2V0QnV0dG9uQWN0aXZlKCdwZWVrJywgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVzdWx0cyc6XG4gICAgICAgICAgICBzZXRCdXR0b25BY3RpdmUoJ3BlZWsnLCBmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTtcblxuZnVuY3Rpb24gY3JlYXRlRGl2KHBhcmVudCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkQ2xhc3NlcyhwYXJlbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFsuLi5wYXJlbnQuY2hpbGROb2Rlc107XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEJ1dHRvbkFjdGl2ZShpZCwgaXNBY3RpdmUpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoaXNBY3RpdmUpXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZWxzZVxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcydcbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnXG5cbmNvbnN0IGJvYXJkTm9kZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQucGxheWVyMScpO1xuY29uc3QgYm9hcmROb2RlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnAxID0gbmV3IFBsYXllcigncDEnKTtcbiAgICAgICAgdGhpcy5wMiA9IG5ldyBQbGF5ZXIoJ3AyJyk7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgIERPTS5jcmVhdGVCb2FyZChib2FyZE5vZGUxLCB0aGlzLCB0aGlzLnAxKTtcbiAgICAgICAgRE9NLmNyZWF0ZUJvYXJkKGJvYXJkTm9kZTIsIHRoaXMsIHRoaXMucDIpO1xuICAgICAgICBET00uc2V0QnV0dG9ucyh0aGlzKTtcblxuICAgICAgICAvLyBzZWxlY3QgZ2FtZSB0eXBlXG4gICAgICAgIC8vIHBpY2sgc2hpcHNcbiAgICAgICAgICAgIC8vIHBsYXllciAxIHBpY2tzID0+IHBhc3Mgb3ZlclxuICAgICAgICAgICAgLy8gcGxheWVyIDIgcGlja3MgPT4gc3RhcnQgZ2FtZVxuICAgICAgICAvLyBzdGFydCBnYW1lXG4gICAgICAgICAgICAvLyBwbGF5ZXIgMSB0dXJuIChvcHRpb25hbCBzaG93IGJvYXJkKVxuICAgICAgICAgICAgLy8gcGxheWVyIDIgdHVybiAob3B0aW9uYWwgc2hvdyBib2FyZClcbiAgICAgICAgLy8gcmVzdWx0cyA9PiByZXN0YXJ0XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnQnOyAvLyAnc3RhcnQnLCAncDFwaWNrJywgJ3AycGljaycsICdnYW1lJywgJ3Jlc3VsdHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAncDFDb25maXJtJywgJ3AyQ29uZmlybSdcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coYCVjbmV3IHN0YXRlOiAlYyR7c3RhdGV9YCwgJycsICdjb2xvcjogZ29sZGVucm9kOyBmb250LXdlaWdodDogYm9sZCcpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wMS5ib2FyZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucDIuYm9hcmQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFwaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVhbCh0aGlzLnAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFDb25maXJtJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AycGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWwodGhpcy5wMik7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AyQ29uZmlybSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnYW1lJzpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHRzJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBET00udXBkYXRlQnV0dG9ucyhzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhcnQodHlwZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJWMke3R5cGV9YCsnICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09ICdzdGFydCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlID09PSAndHdvUGxheWVyJylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxcGljaycpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCclY2NvbmZpcm0gJWNidXR0b24gcHJlc3NlZCcsICdjb2xvcjogc2t5Ymx1ZScsIG51bGwpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AxQ29uZmlybScpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMnBpY2snKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AyQ29uZmlybScpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdnYW1lJyk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hpZGluZyBwbGF5ZXIgc2hpcHMnKTtcbiAgICAgICAgRE9NLmhpZGUoYm9hcmROb2RlMSwgYm9hcmROb2RlMik7XG4gICAgfVxuICAgIHJldmVhbChwbGF5ZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHJldmVhbGluZyAlYyR7cGxheWVyLm5hbWV9J3Mgc2hpcHNgLCAnY29sb3I6IHNreWJsdWUnKTtcbiAgICAgICAgbGV0IGJvYXJkTm9kZSA9IChwbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IGJvYXJkTm9kZTEgOiBib2FyZE5vZGUyO1xuICAgICAgICBET00ucmV2ZWFsKGJvYXJkTm9kZSk7XG4gICAgfVxuICAgIHBlZWsoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQZWVraW5nIGF0ICR7dGhpcy50dXJuUGxheWVyLm5hbWV9J3Mgc2hpcHNgKTtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnJWNhdXRvR2VuICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpIHtcbiAgICAgICAgICAgIHRoaXMucDEuYm9hcmQuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMUNvbmZpcm0nKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAncDJwaWNrJykge1xuICAgICAgICAgICAgdGhpcy5wMi5ib2FyZC5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AyQ29uZmlybScpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgZ2VuOiAnLCB0aGlzLnAxKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiB9XG5cbiAgICBzcXVhcmVDbGlja2VkKHgsIHksIG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgeDolYyR7eH0lYyB5OiVjJHt5fSVjIHwgYm9hcmQ6ICVjJHtuYW1lfSVjIHwgdHVybjogJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9ICdnYW1lJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJFcnJvcjogY2xpY2sgb3RoZXIgcGxheWVyJ3MgYm9hcmRcIik7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy5nZXRPdGhlclBsYXllcihuYW1lKS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2U6ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdmYWlsdXJlJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3VsdCkge1xuICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgaGl0JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgc3Vuayc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwgZW5lbXkgc2hpcHMgc3Vuayc6XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgc3dpdGNoUGxheWVyKCkge1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyB0aGlzLnAyIDogdGhpcy5wMTtcbiAgICB9XG4gICAgZ2V0T3RoZXJQbGF5ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMiA6IHRoaXMucDE7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBET00udXBkYXRlQm9hcmQoYm9hcmROb2RlMSwgdGhpcy5wMSk7XG4gICAgICAgIERPTS51cGRhdGVCb2FyZChib2FyZE5vZGUyLCB0aGlzLnAyKTtcbiAgICAgICAgRE9NLnVwZGF0ZUN1cnJlbnRQbGF5ZXIodGhpcy50dXJuUGxheWVyKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRzID0gW107XG4gICAgfVxuXG4gICAgYWRkU2hpcCh4LCB5LCBsZW5ndGggPSAxLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoeCwgeSkpXG4gICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBvdXQgb2YgYm91bmRzJ307XG4gICAgICAgIFxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGlmIChpc091dE9mQm91bmRzKHNlZ21lbnQueCwgc2VnbWVudC55KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBleHRlbmRzIG91dCBvZiBib3VuZHMnfTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcDIgb2YgdGhpcy5zaGlwcylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50MiBvZiBzaGlwMi5zZWdtZW50cylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQxLnggPT0gc2VnbWVudDIueCAmJiBzZWdtZW50MS55ID09IHNlZ21lbnQyLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBpbnRlcnNlY3RzIG90aGVyIHNoaXAnfTtcblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2Vzcyd9O1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBmb3IgKGxldCBoaXQgb2YgdGhpcy5oaXRzKVxuICAgICAgICAgICAgaWYgKGhpdC54ID09IHggJiYgaGl0LnkgPT0geSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc3F1YXJlIGFscmVhZHkgaGl0J307XG5cbiAgICAgICAgdGhpcy5oaXRzLnB1c2goe3gsIHl9KTtcblxuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50LnggPT0geCAmJiBzZWdtZW50LnkgPT0geSkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnZW5lbXkgc2hpcCBoaXQnfTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hcmVTaGlwc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2FsbCBlbmVteSBzaGlwcyBzdW5rJ307XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VuZW15IHNoaXAgc3Vuayd9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VtcHR5IHNxdWFyZSd9O1xuICAgIH1cblxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdFNoaXBzKCkge1xuICAgICAgICB0aGlzLmFkZFNoaXAoMSwgMSwgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCgzLCAzLCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDUsIDUsIDIpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoNywgNywgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg5LCA0LCAyKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzT3V0T2ZCb3VuZHMoeCwgeSkge1xuICAgIHJldHVybiAoeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCk7XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgIHRoaXMub25DbGlja1NxdWFyZSA9IHRoaXMuY2xpY2tTcXVhcmUxO1xuICAgIH1cblxuICAgIGNsaWNrU3F1YXJlMSh4LCB5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxOiBjbGlja2VkIGZpcnN0IHZlcnNpb24gb2YgY2xpY2tTcXVhcmU6ICcsIHgsIHkpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tTcXVhcmUgPSB0aGlzLmNsaWNrU3F1YXJlMjtcbiAgICB9XG4gICAgY2xpY2tTcXVhcmUyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnMjogY2xpY2tlZCBzZWNvbmQgdmVyc2lvbiBvZiBjbGlja1NxdWFyZScpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tTcXVhcmUgPSB0aGlzLmNsaWNrU3F1YXJlMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsaWNrU3F1YXJlMSgpIHtcbiAgICBjb25zb2xlLmxvZygnMTogY2xpY2tlZCBmaXJzdCB2ZXJzaW9uIG9mIGNsaWNrU3F1YXJlJylcbn1cbmZ1bmN0aW9uIGNsaWNrU3F1YXJlMigpIHtcbiAgICBjb25zb2xlLmxvZygnMjogY2xpY2tlZCBzZWNvbmQgdmVyc2lvbiBvZiBjbGlja1NxdWFyZScpXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHggPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gMCA6IGk7XG4gICAgICAgICAgICBsZXQgZHkgPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gaSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goY3JlYXRlU2VnbWVudCh4ICsgZHgsIHkgKyBkeSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBoaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IFxuICAgICAgICAgICAgcHJldiArPSAoY3Vyci5pc0hpdCkgPyAxIDogMCwgMCk7XG4gICAgfVxuICAgIGhpdCh4LCB5KSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IHNlZ21lbnQueCAmJiB5ID09IHNlZ21lbnQueSlcbiAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtyZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLnNlZ21lbnRzLmxlbmd0aCl9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlZ21lbnQoeCwgeSkge3JldHVybiB7eCwgeSwgaXNIaXQ6IGZhbHNlfX1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRyeUF0dGFjayk7XG5cbi8vIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcbi8vIGxldCBvcHBvc2l0ZVBsYXllciA9IHBsYXllcjI7XG5cbi8vIGZ1bmN0aW9uIHRyeUF0dGFjayhldmVudCkge1xuLy8gICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0O1xuLy8gICAgIGNvbnNvbGUubG9nKCdub2RlIHRhcmdldDogJywgbm9kZSk7XG4gICAgXG4vLyAgICAgaWYgKCFub2RlLmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpXG4vLyAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnc3F1YXJlIG5vdCBjbGlja2VkLCByZXRyeWluZy4uLicpO1xuXG4vLyAgICAgY29uc29sZS5sb2cobm9kZS5kYXRhc2V0Lm5hbWUsIG9wcG9zaXRlUGxheWVyLm5hbWUpO1xuLy8gICAgIGlmIChub2RlLmRhdGFzZXQubmFtZSA9PT0gb3Bwb3NpdGVQbGF5ZXIubmFtZSlcbi8vICAgICAgICAgY29uc29sZS5sb2coJ29wcG9zaXRlIHBsYXllciBoaXQhIScpO1xuXG4vLyAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cnlBdHRhY2spO1xuLy8gfVxuXG5cbi8vIEdBTUVNT0RFIFNUQVRFU1xuLy8gZ2FtZS10eXBlLXNlbGVjdGlvblxuLy8gcGxheWVyIDEgc2VsZWN0IHBpZWNlc1xuLy8gcGxheWVyIDIgc2VsZWN0IHBpZWNlcyB8fCBjb21wdXRlclxuLy8gZ2FtZXBsYXlcbi8vICAgICAgcGxheWVyIDEgdHVyblxuLy8gICAgICBwbGF5ZXIgMiB0dXJuXG4vLyBzdGF0cyAocmVzZXQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9