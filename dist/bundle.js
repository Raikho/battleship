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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ================================================================= */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\n/* ================================================================= */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    grid-template-rows: repeat(3, min-content);\n    grid-template-areas:\n        \". . .\" \n        \". board .\"\n        \". . .\";\n    justify-items: center;\n    align-items: center;\n}\n.board {\n    grid-area: board;\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 45vw;\n    height: 45vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 2px;\n}\n.board>* {\n    background-color: var(--accent);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.ship {\n    background-color: var(--indigo);\n}\n.hit {\n    color: red;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;;IAEf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA,cAAc,uBAAuB,CAAC;AACtC,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,6CAA6C;IAC7C,0CAA0C;IAC1C;;;eAGW;IACX,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,YAAY;;IAEZ,YAAY;;IAEZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,QAAQ;AACZ;AACA;IACI,+BAA+B;IAC/B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,+BAA+B;AACnC;AACA;IACI,UAAU;AACd;AACA;IACI,2BAA2B;AAC/B","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ================================================================= */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\n/* ================================================================= */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: grid;\n    grid-template-columns: repeat(3, min-content);\n    grid-template-rows: repeat(3, min-content);\n    grid-template-areas:\n        \". . .\" \n        \". board .\"\n        \". . .\";\n    justify-items: center;\n    align-items: center;\n}\n.board {\n    grid-area: board;\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 45vw;\n    height: 45vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 2px;\n}\n.board>* {\n    background-color: var(--accent);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.ship {\n    background-color: var(--indigo);\n}\n.hit {\n    color: red;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}"],"sourceRoot":""}]);
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
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
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

DOM.updateBoard = function(parent, player) {
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
    twoPlayerNode.onclick = () => function() {game.start('twoPlayer');}();
    computerNode.onclick = () => function() {game.start('computer');}();
    autoGenNode.onclick = game.autoGen.bind(game);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

function createDiv(parent) {
    let node = document.createElement('div');
    parent.appendChild(node);
    return node;
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
        this.state = ''; // 'start', 'p1pick', 'p2pick', 'game', 'results'
        this.updateState('start');

        this.update();

    }

    updateState(state) {
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');
        this.state = state;
        switch(state) {
            case 'start':
                break;
            case 'p1pick':
                this.turnPlayer = this.p1;
                break;
            case 'p2pick':
                this.turnPlayer = this.p2;
                break;
            case 'game':
                this.turnPlayer = this.p1;
                break;
            case 'results':
                break;
        }
    }

    start(type) {
        console.log(`%c${type}`+' %cbutton pressed', 'color: skyblue', null);
        if (this.state !== 'start')
            return;
        if (type === 'twoPlayer')
            this.updateState('p1pick');
    }

    autoGen() {
        console.log('%cautoGen %cbutton pressed', 'color: skyblue', null);

        if (this.state === 'p1pick') {
            this.p1.board.genDefaultShips();
            this.updateState('p2pick');
        } else if (this.state === 'p2pick') {
            this.p2.board.genDefaultShips();
            this.updateState('game');
        } else return;
        this.update();
 }

    squareClicked(x, y, name) {
        console.log(`clicked x:%c${x}%c y:%c${y}%c | board: %c${name}%c | turn: ${this.turnPlayer.name}`,
            'color: lightcoral', null, 'color: lightcoral', null, 'color: lightcoral', null);
        // TODO: check state
        if (this.state != 'game')
            return;

        if (this.turnPlayer.name === name)
            return console.log("Error: click other player's board");

        let response = this.getOtherPlayer(name).board.receiveAttack(x, y);
        console.log('response: ', response);
        if (response.status === 'failure')
            return;

        // TODO: possibly change state

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
}

function isOutOfBounds(x, y) {
    return (x >= 10 || x < 0 || y >= 10 || y < 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGNBQWM7QUFDZDs7QUFFQSw4QkFBOEIsUUFBUTs7Ozs7OztVQ3RCdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1E7QUFDVTtBQUNOO0FBQ047QUFDRTs7QUFFN0IsaUJBQWlCLGdEQUFJOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1hY2NlbnQ6ICMwRTc0OTA7XFxufVxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCIuIC4gLlxcXCIgXFxuICAgICAgICBcXFwiLiBib2FyZCAuXFxcIlxcbiAgICAgICAgXFxcIi4gLiAuXFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYm9hcmQge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgd2lkdGg6IDQ1dnc7XFxuICAgIGhlaWdodDogNDV2dztcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG4uYm9hcmQ+KiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XFxufVxcbi5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5bZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTOztJQUVULDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQSxjQUFjLHVCQUF1QixDQUFDO0FBQ3RDLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUM7OztlQUdXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7O0lBRVosWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxRQUFRO0FBQ1o7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcIi4gLiAuXFxcIiBcXG4gICAgICAgIFxcXCIuIGJvYXJkIC5cXFwiXFxuICAgICAgICBcXFwiLiAuIC5cXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2FyZCB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICB3aWR0aDogNDV2dztcXG4gICAgaGVpZ2h0OiA0NXZ3O1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAycHg7XFxufVxcbi5ib2FyZD4qIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRE9NID0ge307XG5cbkRPTS5jcmVhdGVCb2FyZCA9IGZ1bmN0aW9uKHBhcmVudCwgZ2FtZSwgcGxheWVyKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVEaXYocGFyZW50KTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICAgICAgICBub2RlLmRhdGFzZXQueCA9IHg7XG4gICAgICAgICAgICBub2RlLmRhdGFzZXQueSA9IHk7XG4gICAgICAgICAgICBub2RlLmRhdGFzZXQubmFtZSA9IHBsYXllci5uYW1lO1xuXG4gICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnNxdWFyZUNsaWNrZWQoeCwgeSwgcGxheWVyLm5hbWUpXG4gICAgICAgICAgICB9KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS51cGRhdGVCb2FyZCA9IGZ1bmN0aW9uKHBhcmVudCwgcGxheWVyKSB7XG4gICAgZm9yIChsZXQgc2hpcCBvZiBwbGF5ZXIuYm9hcmQuc2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS14PVwiJHtzZWdtZW50Lnh9XCJdW2RhdGEteT1cIiR7c2VnbWVudC55fVwiXWApO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaGl0IG9mIHBsYXllci5ib2FyZC5oaXRzKSB7XG4gICAgICAgIGxldCBub2RlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEteD1cIiR7aGl0Lnh9XCJdW2RhdGEteT1cIiR7aGl0Lnl9XCJdYCk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSAneCc7XG4gICAgfVxufVxuXG5ET00udXBkYXRlQ3VycmVudFBsYXllciA9IGZ1bmN0aW9uKHBsYXllcikge1xuICAgIGxldCBjdXJyZW50TnVtID0gKHBsYXllci5uYW1lID09PSAncDEnKSA/IDEgOiAyO1xuICAgIGxldCBvdGhlck51bSA9IChwbGF5ZXIubmFtZSA9PT0gJ3AyJykgPyAxIDogMlxuXG4gICAgbGV0IGN1cnJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLnBsYXllciR7Y3VycmVudE51bX1gKTtcbiAgICBsZXQgb3RoZXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLnBsYXllciR7b3RoZXJOdW19YCk7XG5cbiAgICBjdXJyZW50Tm9kZS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgb3RoZXJOb2RlLmRhdGFzZXQuYWN0aXZlID0gZmFsc2U7XG59XG5cbkRPTS5zZXRCdXR0b25zID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGxldCB0d29QbGF5ZXJOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R3b1BsYXllcicpO1xuICAgIGxldCBjb21wdXRlck5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKTtcbiAgICBsZXQgYXV0b0dlbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b0dlbicpO1xuICAgIHR3b1BsYXllck5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc3RhcnQoJ3R3b1BsYXllcicpO30oKTtcbiAgICBjb21wdXRlck5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc3RhcnQoJ2NvbXB1dGVyJyk7fSgpO1xuICAgIGF1dG9HZW5Ob2RlLm9uY2xpY2sgPSBnYW1lLmF1dG9HZW4uYmluZChnYW1lKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXYocGFyZW50KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJ1xuaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcydcblxuY29uc3QgYm9hcmROb2RlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIxJyk7XG5jb25zdCBib2FyZE5vZGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYXllcjInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucDEgPSBuZXcgUGxheWVyKCdwMScpO1xuICAgICAgICB0aGlzLnAyID0gbmV3IFBsYXllcigncDInKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgRE9NLmNyZWF0ZUJvYXJkKGJvYXJkTm9kZTEsIHRoaXMsIHRoaXMucDEpO1xuICAgICAgICBET00uY3JlYXRlQm9hcmQoYm9hcmROb2RlMiwgdGhpcywgdGhpcy5wMik7XG4gICAgICAgIERPTS5zZXRCdXR0b25zKHRoaXMpO1xuXG4gICAgICAgIC8vIHNlbGVjdCBnYW1lIHR5cGVcbiAgICAgICAgLy8gcGljayBzaGlwc1xuICAgICAgICAgICAgLy8gcGxheWVyIDEgcGlja3MgPT4gcGFzcyBvdmVyXG4gICAgICAgICAgICAvLyBwbGF5ZXIgMiBwaWNrcyA9PiBzdGFydCBnYW1lXG4gICAgICAgIC8vIHN0YXJ0IGdhbWVcbiAgICAgICAgICAgIC8vIHBsYXllciAxIHR1cm4gKG9wdGlvbmFsIHNob3cgYm9hcmQpXG4gICAgICAgICAgICAvLyBwbGF5ZXIgMiB0dXJuIChvcHRpb25hbCBzaG93IGJvYXJkKVxuICAgICAgICAvLyByZXN1bHRzID0+IHJlc3RhcnRcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICcnOyAvLyAnc3RhcnQnLCAncDFwaWNrJywgJ3AycGljaycsICdnYW1lJywgJ3Jlc3VsdHMnXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY25ldyBzdGF0ZTogJWMke3N0YXRlfWAsICcnLCAnY29sb3I6IGdvbGRlbnJvZDsgZm9udC13ZWlnaHQ6IGJvbGQnKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxcGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AycGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dhbWUnOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHRzJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KHR5cGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHt0eXBlfWArJyAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAnc3RhcnQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3R3b1BsYXllcicpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMXBpY2snKTtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnJWNhdXRvR2VuICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpIHtcbiAgICAgICAgICAgIHRoaXMucDEuYm9hcmQuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMnBpY2snKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAncDJwaWNrJykge1xuICAgICAgICAgICAgdGhpcy5wMi5ib2FyZC5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ2dhbWUnKTtcbiAgICAgICAgfSBlbHNlIHJldHVybjtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiB9XG5cbiAgICBzcXVhcmVDbGlja2VkKHgsIHksIG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgeDolYyR7eH0lYyB5OiVjJHt5fSVjIHwgYm9hcmQ6ICVjJHtuYW1lfSVjIHwgdHVybjogJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCk7XG4gICAgICAgIC8vIFRPRE86IGNoZWNrIHN0YXRlXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9ICdnYW1lJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJFcnJvcjogY2xpY2sgb3RoZXIgcGxheWVyJ3MgYm9hcmRcIik7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy5nZXRPdGhlclBsYXllcihuYW1lKS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2U6ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIFRPRE86IHBvc3NpYmx5IGNoYW5nZSBzdGF0ZVxuXG4gICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuICAgIHN3aXRjaFBsYXllcigpIHtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMiA6IHRoaXMucDE7XG4gICAgfVxuICAgIGdldE90aGVyUGxheWVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IHRoaXMucDIgOiB0aGlzLnAxO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgRE9NLnVwZGF0ZUJvYXJkKGJvYXJkTm9kZTEsIHRoaXMucDEpO1xuICAgICAgICBET00udXBkYXRlQm9hcmQoYm9hcmROb2RlMiwgdGhpcy5wMik7XG4gICAgICAgIERPTS51cGRhdGVDdXJyZW50UGxheWVyKHRoaXMudHVyblBsYXllcik7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFNoaXAoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIGlmIChpc091dE9mQm91bmRzKHgsIHkpKVxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgb3V0IG9mIGJvdW5kcyd9O1xuICAgICAgICBcbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCh4LCB5LCBsZW5ndGgsIHNoYXBlKTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICBpZiAoaXNPdXRPZkJvdW5kcyhzZWdtZW50LngsIHNlZ21lbnQueSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgZXh0ZW5kcyBvdXQgb2YgYm91bmRzJ307XG5cbiAgICAgICAgZm9yIChsZXQgc2VnbWVudDEgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAyIG9mIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudDIgb2Ygc2hpcDIuc2VnbWVudHMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50MS54ID09IHNlZ21lbnQyLnggJiYgc2VnbWVudDEueSA9PSBzZWdtZW50Mi55KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgaW50ZXJzZWN0cyBvdGhlciBzaGlwJ307XG5cbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnfTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgZm9yIChsZXQgaGl0IG9mIHRoaXMuaGl0cylcbiAgICAgICAgICAgIGlmIChoaXQueCA9PSB4ICYmIGhpdC55ID09IHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NxdWFyZSBhbHJlYWR5IGhpdCd9O1xuXG4gICAgICAgIHRoaXMuaGl0cy5wdXNoKHt4LCB5fSk7XG5cbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudC54ID09IHggJiYgc2VnbWVudC55ID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VuZW15IHNoaXAgaGl0J307XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYXJlU2hpcHNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdhbGwgZW5lbXkgc2hpcHMgc3Vuayd9O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdlbmVteSBzaGlwIHN1bmsnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdlbXB0eSBzcXVhcmUnfTtcbiAgICB9XG5cbiAgICBhcmVTaGlwc1N1bmsoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcylcbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdlbkRlZmF1bHRTaGlwcygpIHtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDEsIDEsIDIpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoMywgMywgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg1LCA1LCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDcsIDcsIDIpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoOSwgNCwgMik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc091dE9mQm91bmRzKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPj0gMTAgfHwgeCA8IDAgfHwgeSA+PSAxMCB8fCB5IDwgMCk7XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgIHRoaXMub25DbGlja1NxdWFyZSA9IHRoaXMuY2xpY2tTcXVhcmUxO1xuICAgIH1cblxuICAgIGNsaWNrU3F1YXJlMSh4LCB5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxOiBjbGlja2VkIGZpcnN0IHZlcnNpb24gb2YgY2xpY2tTcXVhcmU6ICcsIHgsIHkpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tTcXVhcmUgPSB0aGlzLmNsaWNrU3F1YXJlMjtcbiAgICB9XG4gICAgY2xpY2tTcXVhcmUyKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnMjogY2xpY2tlZCBzZWNvbmQgdmVyc2lvbiBvZiBjbGlja1NxdWFyZScpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tTcXVhcmUgPSB0aGlzLmNsaWNrU3F1YXJlMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsaWNrU3F1YXJlMSgpIHtcbiAgICBjb25zb2xlLmxvZygnMTogY2xpY2tlZCBmaXJzdCB2ZXJzaW9uIG9mIGNsaWNrU3F1YXJlJylcbn1cbmZ1bmN0aW9uIGNsaWNrU3F1YXJlMigpIHtcbiAgICBjb25zb2xlLmxvZygnMjogY2xpY2tlZCBzZWNvbmQgdmVyc2lvbiBvZiBjbGlja1NxdWFyZScpXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHggPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gMCA6IGk7XG4gICAgICAgICAgICBsZXQgZHkgPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gaSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goY3JlYXRlU2VnbWVudCh4ICsgZHgsIHkgKyBkeSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBoaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IFxuICAgICAgICAgICAgcHJldiArPSAoY3Vyci5pc0hpdCkgPyAxIDogMCwgMCk7XG4gICAgfVxuICAgIGhpdCh4LCB5KSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IHNlZ21lbnQueCAmJiB5ID09IHNlZ21lbnQueSlcbiAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtyZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLnNlZ21lbnRzLmxlbmd0aCl9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlZ21lbnQoeCwgeSkge3JldHVybiB7eCwgeSwgaXNIaXQ6IGZhbHNlfX1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRyeUF0dGFjayk7XG5cbi8vIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcbi8vIGxldCBvcHBvc2l0ZVBsYXllciA9IHBsYXllcjI7XG5cbi8vIGZ1bmN0aW9uIHRyeUF0dGFjayhldmVudCkge1xuLy8gICAgIGxldCBub2RlID0gZXZlbnQudGFyZ2V0O1xuLy8gICAgIGNvbnNvbGUubG9nKCdub2RlIHRhcmdldDogJywgbm9kZSk7XG4gICAgXG4vLyAgICAgaWYgKCFub2RlLmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpXG4vLyAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnc3F1YXJlIG5vdCBjbGlja2VkLCByZXRyeWluZy4uLicpO1xuXG4vLyAgICAgY29uc29sZS5sb2cobm9kZS5kYXRhc2V0Lm5hbWUsIG9wcG9zaXRlUGxheWVyLm5hbWUpO1xuLy8gICAgIGlmIChub2RlLmRhdGFzZXQubmFtZSA9PT0gb3Bwb3NpdGVQbGF5ZXIubmFtZSlcbi8vICAgICAgICAgY29uc29sZS5sb2coJ29wcG9zaXRlIHBsYXllciBoaXQhIScpO1xuXG4vLyAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cnlBdHRhY2spO1xuLy8gfVxuXG5cbi8vIEdBTUVNT0RFIFNUQVRFU1xuLy8gZ2FtZS10eXBlLXNlbGVjdGlvblxuLy8gcGxheWVyIDEgc2VsZWN0IHBpZWNlc1xuLy8gcGxheWVyIDIgc2VsZWN0IHBpZWNlcyB8fCBjb21wdXRlclxuLy8gZ2FtZXBsYXlcbi8vICAgICAgcGxheWVyIDEgdHVyblxuLy8gICAgICBwbGF5ZXIgMiB0dXJuXG4vLyBzdGF0cyAocmVzZXQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9