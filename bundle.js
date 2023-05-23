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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.model-container {\n    padding: 5px;\n}\n.modelboard {\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard>.square {border: 1px solid #fff6;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;;IAEf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA,cAAc,uBAAuB,CAAC;AACtC;IACI,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,YAAY;IACZ,YAAY;IACZ,iCAAiC;IACjC,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA,sEAAsE;AACtE;IACI,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;;IAEb;8BAC0B;AAC9B;AACA;;IAEI,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA,oBAAoB,gCAAgC;AACpD;IACI,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,cAAc;IACd,oBAAoB;AACxB;AACA,qBAAqB,uBAAuB,CAAC;AAC7C,sBAAsB,uBAAuB,CAAC;AAC9C,sEAAsE;AACtE;IACI,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,YAAY;AAChB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,qCAAqC;IACrC,kCAAkC;AACtC;AACA,sBAAsB,6BAA6B,CAAC;AACpD,oBAAoB,wBAAwB,CAAC;AAC7C,kBAAkB,wBAAwB,CAAC;AAC3C,qBAAqB,uBAAuB,CAAC;AAC7C,2BAA2B,8BAA8B,CAAC;;AAE1D,sEAAsE;AACtE,sEAAsE;AACtE;IACI,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,YAAY;;IAEZ,YAAY;;IAEZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,+BAA+B;IAC/B,iCAAiC;AACrC;AACA;IACI,mBAAmB;AACvB;AACA;;IAEI,+BAA+B;AACnC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,UAAU;AACd;AACA;IACI,YAAY;AAChB;AACA;IACI,2BAA2B;AAC/B;AACA,sEAAsE;AACtE,sBAAsB,kBAAkB,CAAC;AACzC,oBAAoB,mBAAmB,CAAC;;AAExC;6BAC6B,2BAA2B,CAAC;AACzD;6BAC6B,4BAA4B,CAAC;AAC1D;6BAC6B,8BAA8B,CAAC;AAC5D;6BAC6B,+BAA+B,CAAC;AAC7D,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.model-container {\n    padding: 5px;\n}\n.modelboard {\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard>.square {border: 1px solid #fff6;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

DOM.setButtons = function(game) { // TODO refactor
    let twoPlayerNode = document.getElementById('twoPlayer');
    let computerNode = document.getElementById('computer');
    let autoGenNode = document.getElementById('autoGen');
    let confirmNode = document.getElementById('confirm');
    let resetNode = document.getElementById('reset');
    let peek = document.getElementById('peek');

    twoPlayerNode.onclick = () => function() {game.selectGameType('player');}();
    computerNode.onclick = () => function() {game.selectGameType('computer');}();    
}

DOM.setModels = function(game) {
    for (let boardNode of queryArray(['modelboard'])) {
        for (let y = 0; y < 5; y++)
            for (let x = 0; x < 5; x++)
                createDiv(boardNode, ['square']);

        boardNode.onclick = () => function() {
            game.clickModel(boardNode.dataset.player, boardNode.dataset.index);
        }();
    }
}

DOM.updateModels = function(game) {
    console.log('updating models')
    for (let player of game.players) {
        for (let model of player.models) {
            let node = queryElement(['modelboard'], {player: player.name, index: model.index});
            setClasslist(node, model.bools);
        }
    }
}

DOM.setBoard = function(game) {
    for (let boardNode of queryArray(['gameboard'])) {
        for (let y = 0; y < 11; y++) {
            for (let x = 0; x < 11; x++) {
                if (x == 0 && y == 0) createDiv(boardNode);
                else if (x == 0) createDiv(boardNode, null, y)
                else if (y == 0) createDiv(boardNode, null, x);
                else {
                    let node = createDiv(boardNode, ['square']);
                    node.onclick = () => function() {
                        game.clickSquare(x, y, boardNode.dataset.player);
                    }();
                }
            }
        }
    }
}

// ============================ MISC ==================================
// ====================================================================
function createDiv(parent, classArray, text) {
    let node = document.createElement('div');
    parent.append(node);
    if (classArray)
        for (let cls of classArray)
            node.classList.add(cls);
    if (text)
        node.textContent = text;
    return node;
}

function queryArray(classArray, dataObject) {
    let string = '';
    for (let cls of classArray)
        string += '.' + cls;
    for (let key in dataObject)
        string += `[data-${key}="${dataObject[key]}"]`
    return [...document.querySelectorAll(string)];
}

function queryElement(classArray, dataObject) {
    let string = '';
    for (let cls of classArray)
        string += '.' + cls;
    for (let key in dataObject)
        string += `[data-${key}="${dataObject[key]}"]`
    return document.querySelector(string);
}

function setClasslist(node, boolObject) {
    for (let key in boolObject) {
        let value = boolObject[key];
        if (value)
            node.classList.add(key);
        else
            node.classList.remove(key);
    }
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game_old": () => (/* binding */ Game_old),
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



// const boardNode1 = document.querySelector('.board.player1');
// const boardNode2 = document.querySelector('.board.player2');

class Game {
    constructor() {
        this.players = [new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p1', 0, 'player'), 
                        new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p2', 1, 'player')];
        this.turnPlayer = null;
        this.selectedModel = null;
        // p1pick, p1confirm, p2pick, p2confirm, game, result, aipick?
        this.state = 'start'; 
        
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setButtons(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModels(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateModels(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setBoard(this);

        console.log(this.players); // DEBUG
    }

    updateState(state) {
        if (this.state === state) return;
        this.state = state;
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');

        switch(state) {
            case 'start':
                // clear board
                // reset ship select
                // hide boards?
                // update ??
                break;
            case 'p1pick':

                break;
        }
    }

    selectGameType(type) {
        if (this.state !== 'start') return;
        this.players[1].type = type;

        this.updateState('p1pick');
    }

    selectModel(player, index) {
        console.log(`model clicked at ${player}, ${index}`);
    }
}

class Game_old {
    constructor() {
        this.p1 = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p1');
        this.p2 = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p2');
        this.turnPlayer = this.p1;
        this.currentShip = null; // remove
        this.activeModel = null;
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(boardNode1, this, this.p1);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(boardNode2, this, this.p2);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].createModels(this, this.p1); // TODO
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].createModels(this, this.p2); // TODO
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setShipSelect(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setButtons(this);

        // 'start', 'p1pick', 'p1Confirm', 'p2pick', 'p2Confirm', 'game', 'resulst';
        this.state = 'start';
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Select game mode');
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
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetShipSelect();
                this.hide();
                this.update();
                break;
            case 'p1pick':
                this.reveal(this.p1);
                this.turnPlayer = this.p1;
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 1, select your ships');
                break;
            case 'p1Confirm':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 1, confirm your ship placement');
                break;
            case 'p2pick':
                this.hide();
                this.reveal(this.p2);
                this.turnPlayer = this.p2;
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 2, select your ships');
                break;
            case 'p2Confirm':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 2, confirm your ship placement');
                break;
            case 'game':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Start the game! Player 1, attack a square');
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

        if (this.state === `${name}pick`) {
            let model = this.activeModel.model;
            console.log('got this far'); // DEBUG

            if (this.activeModel && !model.placed) {
                console.log('placing ship: ', model); // DEBUG

                let response = this.turnPlayer.board.addShip(x, y, model.ship.segments.length);
                if (response.status === 'failure')
                    return;

                // this.currentShip.callback(); // TODO
                model.placed = true;
                this.activeModel = null;
                this.update();

                if (this.turnPlayer.board.ships.length >= 5)
                    this.updateState(`${name}Confirm`);
                return;
            }
        }

        if (this.state === `${name}pick`) {
            if (this.currentShip && !this.currentShip.used) {
                console.log('placing ship: ', this.currentShip);
                let response = this.turnPlayer.board.addShip(x, y, this.currentShip.length);
                if (response.status === 'failure')
                    return;

                this.currentShip.callback();
                this.currentShip = null;
                this.update();

                if (this.turnPlayer.board.ships.length >= 5)
                    this.updateState(`${name}Confirm`);
                return;
            }
        }

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
        let nameString = (this.turnPlayer === this.p1) ? 'Player 1' : 'Player 2';
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${nameString}, attack a square`);
        this.update();
    };
    shipLabelClicked(playerName, index, type, used, callback) {
        console.log(`clicked ship index:%c${index}%c type:%c${type}%c | player: %c${playerName}`,
            'color: lightcoral', null, 'color: lightcoral', null, 'color: lightcoral');
        let player = this.getPlayer(playerName);

        this.currentShip = {length: Number(type), used: used, callback: callback};
    }

    shipModelClicked(player, index) {
        console.log(`clicked model index:%c${index}%c| player: %c${player.name}`,
            'color: lightcoral', null, 'color: lightcoral');

        this.activeModel = {model: player.board.models[index], player: player};
        this.update();
        console.log('active model: ', this.activeModel);


        // this.currentShip = {length: Number(type), used: used, callback: callback};
    }


    switchPlayer() {
        this.turnPlayer = (this.turnPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }
    getPlayer(name) {
        return (this.turnPlayer.name === this.p1.name) ? this.p1 : this.p2;
    }
    getOtherPlayer(name) {
        return (this.turnPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }
 
    update() {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateBoard(boardNode1, this.p1);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateBoard(boardNode2, this.p2);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateModels(this, this.p1);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateModels(this, this.p2);
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
        this.hits = [];
        this.ships = [];
        this.models = [];
        this.genDefaultModels();
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

    addModel(x, y, length = 1, shape = 'vertical') {
        let ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, length, shape);

        this.models.push({ship: ship, index: null, placed: false, sunk: false});
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
        this.ships = [];
        this.addShip(1, 1, 2);
        this.addShip(3, 3, 2);
        this.addShip(5, 5, 2);
        this.addShip(7, 7, 2);
        this.addShip(9, 4, 2);
    }

    genDefaultModels() {
        this.models = [];
        this.addModel(2, 1, 2);
        this.addModel(2, 1, 3);
        this.addModel(2, 1, 3);
        this.addModel(2, 0, 4);
        this.addModel(2, 0, 5);

        for (let i = 0; i < this.models.length; i++)
            this.models[i].index = i;
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
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");



class Player {
    constructor(name, index, type) {
        this.board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.name = name;
        this.index = index;
        this.type = type;

        this.models = new Array(5);
        this.generateModels();
    }

    generateModels() {
        this.models[0] = new Model(2, 0);
        this.models[1] = new Model(2, 1);
        this.models[2] = new Model(2, 2);
        this.models[3] = new Model(2, 3);
        this.models[4] = new Model(2, 4);
        this.models[0].selected = true;
        this.models[1].placed = true;
        // this.models[2].sunk = true;
    }
}

class Model {
    constructor(length, index) {
        this.ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, length);
        this.index = index;
        this.selected = false;
        this.placed = false;
        this.sunk = false;
    }
    get bools() {
        return {selected: this.selected, placed: this.placed, sunk: this.sunk};
    }
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
        adjustCorners(this.segments);
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

function createSegment(x, y) {
    return {
        x,
        y,
        isHit: false, 
        corner: {TL: false, TR: false, BL: false, BR: false,}
    }
}

function adjustCorners(segments) {
    for (let segment1 of segments) {
        let x1 = segment1.x;
        let y1 = segment1.y;
        for (let segment2 of segments) {
            let x2 = segment2.x;
            let y2 = segment2.y;
            if (x2 == x1-1 && y2 == y1) { // to the left of it
                segment1.corner.TL = true;
                segment1.corner.BL = true;
            }
            else if (x2 == x1+1 && y2 == y1) { // to the right of it
                segment1.corner.TR = true;
                segment1.corner.BR = true;
            }
            else if (x2 == x1 && y2 == y1-1) { // to the top of it
                segment1.corner.TL = true;
                segment1.corner.TR = true;
            }
            else if (x2 == x1 && y2 == y1+1) { // to the bottom of it
                segment1.corner.BL = true;
                segment1.corner.BR = true;
            }
        }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsMEJBQTBCLDBCQUEwQixzQkFBc0IsMkJBQTJCLDBCQUEwQix3QkFBd0IsMkJBQTJCLDRCQUE0Qix5QkFBeUIsR0FBRyxRQUFRLG9CQUFvQixtQkFBbUIsZ0JBQWdCLG9DQUFvQyx1QkFBdUIseUNBQXlDLHNCQUFzQixzQkFBc0IsNkJBQTZCLG9DQUFvQywwQkFBMEIsR0FBRyw4SkFBOEosb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxVQUFVLHNDQUFzQyx1QkFBdUIsd0JBQXdCLHdCQUF3QixHQUFHLGdCQUFnQix5QkFBeUIsdUJBQXVCLDBCQUEwQixHQUFHLDZKQUE2SixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsNEJBQTRCLDBCQUEwQixnQkFBZ0IsR0FBRyxtQkFBbUIsbUJBQW1CLG1CQUFtQix3Q0FBd0MsK0JBQStCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLDZCQUE2QixvQ0FBb0MsR0FBRyx3RkFBd0YsOEJBQThCLHlCQUF5Qix5QkFBeUIsb0JBQW9CLHlCQUF5QiwrQkFBK0IsS0FBSyw2REFBNkQsOEJBQThCLEdBQUcsbUNBQW1DLG1CQUFtQiw4QkFBOEIsR0FBRyxzQkFBc0IsaUNBQWlDLGlCQUFpQixpQkFBaUIseUJBQXlCLGVBQWUsaUJBQWlCLG1CQUFtQiwyQkFBMkIsS0FBSyx1QkFBdUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsa0dBQWtHLHdDQUF3QyxtQkFBbUIsbUJBQW1CLHlCQUF5QixzQkFBc0IsNkJBQTZCLG9DQUFvQyxHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxlQUFlLG1DQUFtQyx5QkFBeUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsNENBQTRDLHlDQUF5QyxHQUFHLHdCQUF3QiwrQkFBK0Isc0JBQXNCLDBCQUEwQixvQkFBb0IsMEJBQTBCLHVCQUF1Qix5QkFBeUIsNkJBQTZCLGdDQUFnQyxrS0FBa0sseUJBQXlCLHdDQUF3QyxrQkFBa0IsbUJBQW1CLHFCQUFxQixzQkFBc0IsNkNBQTZDLDBDQUEwQyxHQUFHLGdCQUFnQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixHQUFHLFdBQVcsc0NBQXNDLHdDQUF3QyxHQUFHLFNBQVMsMEJBQTBCLEdBQUcsNEJBQTRCLHNDQUFzQyxHQUFHLGlCQUFpQixrQ0FBa0MsR0FBRyxlQUFlLGlCQUFpQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRywwQkFBMEIsa0NBQWtDLEdBQUcsaUdBQWlHLG9CQUFvQixzQkFBc0IscUJBQXFCLHlEQUF5RCw2QkFBNkIsdURBQXVELDhCQUE4Qix1REFBdUQsZ0NBQWdDLHVEQUF1RCxpQ0FBaUMsMkpBQTJKLHdDQUF3Qyx5QkFBeUIseUJBQXlCLHNCQUFzQix3QkFBd0IsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxzQkFBc0IsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFlBQVksS0FBSyxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLHdCQUF3Qix5QkFBeUIsYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSx3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsMEJBQTBCLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVkseUJBQXlCLDBCQUEwQixNQUFNLG1CQUFtQixNQUFNLG1CQUFtQixNQUFNLG1CQUFtQixNQUFNLG1CQUFtQixhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksaUNBQWlDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLDJCQUEyQiwwQkFBMEIsd0JBQXdCLDJCQUEyQiw0QkFBNEIseUJBQXlCLEdBQUcsUUFBUSxvQkFBb0IsbUJBQW1CLGdCQUFnQixvQ0FBb0MsdUJBQXVCLHlDQUF5QyxzQkFBc0Isc0JBQXNCLDZCQUE2QixvQ0FBb0MsMEJBQTBCLEdBQUcsOEpBQThKLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsVUFBVSxzQ0FBc0MsdUJBQXVCLHdCQUF3Qix3QkFBd0IsR0FBRyxnQkFBZ0IseUJBQXlCLHVCQUF1QiwwQkFBMEIsR0FBRyw2SkFBNkosb0JBQW9CLDBCQUEwQixnQkFBZ0IsR0FBRyxvQkFBb0Isb0JBQW9CLDRCQUE0QiwwQkFBMEIsZ0JBQWdCLEdBQUcsbUJBQW1CLG1CQUFtQixtQkFBbUIsd0NBQXdDLCtCQUErQix5QkFBeUIsd0JBQXdCLHNCQUFzQiw2QkFBNkIsb0NBQW9DLEdBQUcsd0ZBQXdGLDhCQUE4Qix5QkFBeUIseUJBQXlCLG9CQUFvQix5QkFBeUIsK0JBQStCLEtBQUssNkRBQTZELDhCQUE4QixHQUFHLG1DQUFtQyxtQkFBbUIsOEJBQThCLEdBQUcsc0JBQXNCLGlDQUFpQyxpQkFBaUIsaUJBQWlCLHlCQUF5QixlQUFlLGlCQUFpQixtQkFBbUIsMkJBQTJCLEtBQUssdUJBQXVCLHlCQUF5Qix3QkFBd0IseUJBQXlCLGtHQUFrRyx3Q0FBd0MsbUJBQW1CLG1CQUFtQix5QkFBeUIsc0JBQXNCLDZCQUE2QixvQ0FBb0MsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsZUFBZSxtQ0FBbUMseUJBQXlCLGtCQUFrQixtQkFBbUIsc0JBQXNCLDRDQUE0Qyx5Q0FBeUMsR0FBRyx3QkFBd0IsK0JBQStCLHNCQUFzQiwwQkFBMEIsb0JBQW9CLDBCQUEwQix1QkFBdUIseUJBQXlCLDZCQUE2QixnQ0FBZ0Msa0tBQWtLLHlCQUF5Qix3Q0FBd0Msa0JBQWtCLG1CQUFtQixxQkFBcUIsc0JBQXNCLDZDQUE2QywwQ0FBMEMsR0FBRyxnQkFBZ0IsOEJBQThCLDBCQUEwQixvQkFBb0IsR0FBRyxXQUFXLHNDQUFzQyx3Q0FBd0MsR0FBRyxTQUFTLDBCQUEwQixHQUFHLDRCQUE0QixzQ0FBc0MsR0FBRyxpQkFBaUIsa0NBQWtDLEdBQUcsZUFBZSxpQkFBaUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsMEJBQTBCLGtDQUFrQyxHQUFHLGlHQUFpRyxvQkFBb0Isc0JBQXNCLHFCQUFxQix5REFBeUQsNkJBQTZCLHVEQUF1RCw4QkFBOEIsdURBQXVELGdDQUFnQyx1REFBdUQsaUNBQWlDLDJKQUEySix3Q0FBd0MseUJBQXlCLHlCQUF5QixzQkFBc0Isd0JBQXdCLEdBQUcsbUJBQW1CO0FBQ3I4VztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSxpRUFBZSxHQUFHLEVBQUM7O0FBRW5CLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLCtCQUErQjtBQUM3RSw2Q0FBNkMsaUNBQWlDO0FBQzlFOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQiw0QkFBNEIsT0FBTztBQUNuQzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsd0NBQXdDO0FBQzdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUksSUFBSSxnQkFBZ0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUksSUFBSSxnQkFBZ0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZnQztBQUNOOztBQUUxQjtBQUNBOztBQUVlO0FBQ2Y7QUFDQSw0QkFBNEIsa0RBQU07QUFDbEMsNEJBQTRCLGtEQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFjO0FBQ3RCLFFBQVEseURBQWE7QUFDckIsUUFBUSw0REFBZ0I7QUFDeEIsUUFBUSx3REFBWTs7QUFFcEIsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLDBCQUEwQjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsT0FBTyxJQUFJLE1BQU07QUFDekQ7QUFDQTs7QUFFTztBQUNQO0FBQ0Esc0JBQXNCLGtEQUFNO0FBQzVCLHNCQUFzQixrREFBTTtBQUM1QjtBQUNBLGlDQUFpQztBQUNqQztBQUNBLFFBQVEsMkRBQWU7QUFDdkIsUUFBUSwyREFBZTtBQUN2QixRQUFRLDREQUFnQixpQkFBaUI7QUFDekMsUUFBUSw0REFBZ0IsaUJBQWlCO0FBQ3pDLFFBQVEsNkRBQWlCO0FBQ3pCLFFBQVEsMERBQWM7O0FBRXRCO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLDBCQUEwQjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBUTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFpQjtBQUN6Qjs7QUFFQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0EsUUFBUSxzREFBVTtBQUNsQjtBQUNBO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsS0FBSyxhQUFhLHFCQUFxQjtBQUN2Rzs7QUFFQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQVEsSUFBSSxXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNLFlBQVksS0FBSyxpQkFBaUIsV0FBVztBQUMvRjtBQUNBOztBQUVBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBLDZDQUE2QyxNQUFNLGdCQUFnQixZQUFZO0FBQy9FOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBOzs7QUFHQSwrQkFBK0I7QUFDL0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFlO0FBQ3ZCLFFBQVEsMkRBQWU7QUFDdkIsUUFBUSw0REFBZ0I7QUFDeEIsUUFBUSw0REFBZ0I7QUFDeEIsUUFBUSxtRUFBdUI7QUFDL0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UTZCOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx1QkFBdUIsZ0RBQUk7O0FBRTNCO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLHVCQUF1QixnREFBSTs7QUFFM0IsMEJBQTBCLG9EQUFvRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCLHdCQUF3QixLQUFLOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEd1QztBQUNWOztBQUVkO0FBQ2Y7QUFDQSx5QkFBeUIscURBQVM7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUTtBQUNVO0FBQ047QUFDTjtBQUNFOztBQUU3QixpQkFBaUIsZ0RBQUk7O0FBRXJCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG4gICAgLS1kYXJrQW1iZXI6ICM0NTFhMDM7XFxuICAgIC0tZGFya1Zpb2xldDogIzJlMTA2NTtcXG4gICAgLS1kYXJrUmVkOiAjNDUwYTBhO1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCdXR0b25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNidXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2ZmZjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBMYWJlbHMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5zaGlwLWxhYmVsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XFxuLnNoaXAtbGFiZWw6aG92ZXIsXFxuLnNoaXAtbGFiZWxbZGF0YS11c2VkPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmODtcXG59XFxuLnNoaXAtbGFiZWxbZGF0YS11c2VkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY2O1xcbn1cXG4uc2hpcC1sYWJlbDphY3RpdmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcbmJ1dHRvbi5yb3RhdGUge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICAvKiB0b3A6IDBweDsgKi9cXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxufVxcbmJ1dHRvbi5yb3RhdGU6aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b24ucm90YXRlOmFjdGl2ZSB7ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLm1vZGVsYm9hcmQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5tb2RlbGJvYXJkLnNlbGVjdGVkIHtib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzt9XFxuLm1vZGVsYm9hcmQucGxhY2VkIHtib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnN1bmsge2JvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTt9XFxuLm1vZGVsYm9hcmQ+LnNxdWFyZSB7Ym9yZGVyOiAxcHggc29saWQgI2ZmZjY7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5nYW1lYm9hcmQge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGhlaWdodDogMzV2dztcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxufVxcbi5nYW1lYm9hcmQ+KiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9hcmQtYmcpO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5zaGlwLFxcbi5zcXVhcmUuc2hpcC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbn1cXG4uaGlkZGVuPi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFNzQ5MDk5O1xcbn1cXG4uc3F1YXJlLmhpdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5zcXVhcmUuc2hpcC5oaXQuc3VuayB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkZW5yb2Q7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGlwIENvcm5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpZGRlbj4uc3F1YXJlLnNoaXAge2JvcmRlci1yYWRpdXM6IDBweDt9XFxuLmhpZGRlbj4uc3Vuay5zaGlwIHtib3JkZXItcmFkaXVzOiAyMHB4O31cXG5cXG4uc3F1YXJlLnNoaXAuY29ybmVyVEwsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRMIHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJUUixcXG4uaGlkZGVuPi5zdW5rLnNoaXAuY29ybmVyVFIge2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJCTCxcXG4uaGlkZGVuPi5zdW5rLnNoaXAuY29ybmVyQkwge2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDt9XFxuLnNxdWFyZS5zaGlwLmNvcm5lckJSLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJCUiB7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IExvZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNsb2dzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTOztJQUVULDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQSxjQUFjLHVCQUF1QixDQUFDO0FBQ3RDO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBLHNFQUFzRTtBQUN0RTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7O0lBRWI7OEJBQzBCO0FBQzlCO0FBQ0E7O0lBRUksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCO0FBQ0EscUJBQXFCLHVCQUF1QixDQUFDO0FBQzdDLHNCQUFzQix1QkFBdUIsQ0FBQztBQUM5QyxzRUFBc0U7QUFDdEU7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0FBQ3RDO0FBQ0Esc0JBQXNCLDZCQUE2QixDQUFDO0FBQ3BELG9CQUFvQix3QkFBd0IsQ0FBQztBQUM3QyxrQkFBa0Isd0JBQXdCLENBQUM7QUFDM0MscUJBQXFCLHVCQUF1QixDQUFDO0FBQzdDLDJCQUEyQiw4QkFBOEIsQ0FBQzs7QUFFMUQsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7O0lBRVosWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQSxzRUFBc0U7QUFDdEUsc0JBQXNCLGtCQUFrQixDQUFDO0FBQ3pDLG9CQUFvQixtQkFBbUIsQ0FBQzs7QUFFeEM7NkJBQzZCLDJCQUEyQixDQUFDO0FBQ3pEOzZCQUM2Qiw0QkFBNEIsQ0FBQztBQUMxRDs2QkFDNkIsOEJBQThCLENBQUM7QUFDNUQ7NkJBQzZCLCtCQUErQixDQUFDO0FBQzdELHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iZzogZGFya3NsYXRlZ3JheTtcXG4gICAgLS1ib2FyZC1iZzogIzk0YTNiODtcXG4gICAgLS1mZzogIzFlMjkzYmFhO1xcblxcbiAgICAtLXNreUJsdWU6ICMzOGJkZjg7XFxuICAgIC0taW5kaWdvOiAjMDUwNTA3YWE7XFxuICAgIC0tYWNjZW50OiAjMEU3NDkwO1xcbiAgICAtLWRhcmtBbWJlcjogIzQ1MWEwMztcXG4gICAgLS1kYXJrVmlvbGV0OiAjMmUxMDY1O1xcbiAgICAtLWRhcmtSZWQ6ICM0NTBhMGE7XFxufVxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGZpbHRlcjogb3BhY2l0eSguNSk7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjZmZmNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGlwIExhYmVscyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnNoaXAtbGFiZWwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbn1cXG4uc2hpcC1sYWJlbDpob3ZlcixcXG4uc2hpcC1sYWJlbFtkYXRhLXVzZWQ9XFxcInRydWVcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY4O1xcbn1cXG4uc2hpcC1sYWJlbFtkYXRhLXVzZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjY7XFxufVxcbi5zaGlwLWxhYmVsOmFjdGl2ZSB7YmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDEuMSl9XFxuYnV0dG9uLnJvdGF0ZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIC8qIHRvcDogMHB4OyAqL1xcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXG59XFxuYnV0dG9uLnJvdGF0ZTpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbi5yb3RhdGU6YWN0aXZlIHtmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ubW9kZWxib2FyZC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4ubW9kZWxib2FyZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuLm1vZGVsYm9hcmQuc2VsZWN0ZWQge2JvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93O31cXG4ubW9kZWxib2FyZC5wbGFjZWQge2JvcmRlcjogMnB4IHNvbGlkIHllbGxvdzt9XFxuLm1vZGVsYm9hcmQuc3VuayB7Ym9yZGVyOiAycHggc29saWQgb3JhbmdlO31cXG4ubW9kZWxib2FyZD4uc3F1YXJlIHtib3JkZXI6IDFweCBzb2xpZCAjZmZmNjt9XFxuLm1vZGVsYm9hcmQ6aG92ZXI+LnNxdWFyZSB7YmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDIpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmdhbWVib2FyZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmdhbWVib2FyZD4qIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1iZyk7XFxufVxcbi5zaGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLnNoaXAsXFxuLnNxdWFyZS5zaGlwLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XFxufVxcbi5oaWRkZW4+LnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEU3NDkwOTk7XFxufVxcbi5zcXVhcmUuaGl0IHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLnNxdWFyZS5zaGlwLmhpdC5zdW5rIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5bZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgQ29ybmVycyA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGlkZGVuPi5zcXVhcmUuc2hpcCB7Ym9yZGVyLXJhZGl1czogMHB4O31cXG4uaGlkZGVuPi5zdW5rLnNoaXAge2JvcmRlci1yYWRpdXM6IDIwcHg7fVxcblxcbi5zcXVhcmUuc2hpcC5jb3JuZXJUTCxcXG4uaGlkZGVuPi5zdW5rLnNoaXAuY29ybmVyVEwge2JvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDt9XFxuLnNxdWFyZS5zaGlwLmNvcm5lclRSLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJUUiB7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDt9XFxuLnNxdWFyZS5zaGlwLmNvcm5lckJMLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJCTCB7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQlIsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lckJSIHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTG9ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2xvZ3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRE9NID0ge307XG5leHBvcnQgZGVmYXVsdCBET007XG5cbkRPTS5zZXRCdXR0b25zID0gZnVuY3Rpb24oZ2FtZSkgeyAvLyBUT0RPIHJlZmFjdG9yXG4gICAgbGV0IHR3b1BsYXllck5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvUGxheWVyJyk7XG4gICAgbGV0IGNvbXB1dGVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpO1xuICAgIGxldCBhdXRvR2VuTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvR2VuJyk7XG4gICAgbGV0IGNvbmZpcm1Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0nKTtcbiAgICBsZXQgcmVzZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG4gICAgbGV0IHBlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVlaycpO1xuXG4gICAgdHdvUGxheWVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgncGxheWVyJyk7fSgpO1xuICAgIGNvbXB1dGVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgnY29tcHV0ZXInKTt9KCk7ICAgIFxufVxuXG5ET00uc2V0TW9kZWxzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnbW9kZWxib2FyZCddKSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDU7IHkrKylcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKVxuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihib2FyZE5vZGUsIFsnc3F1YXJlJ10pO1xuXG4gICAgICAgIGJvYXJkTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW1lLmNsaWNrTW9kZWwoYm9hcmROb2RlLmRhdGFzZXQucGxheWVyLCBib2FyZE5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0oKTtcbiAgICB9XG59XG5cbkRPTS51cGRhdGVNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIG1vZGVscycpXG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ21vZGVsYm9hcmQnXSwge3BsYXllcjogcGxheWVyLm5hbWUsIGluZGV4OiBtb2RlbC5pbmRleH0pO1xuICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KG5vZGUsIG1vZGVsLmJvb2xzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnNldEJvYXJkID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnZ2FtZWJvYXJkJ10pKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTE7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPT0gMCAmJiB5ID09IDApIGNyZWF0ZURpdihib2FyZE5vZGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPT0gMCkgY3JlYXRlRGl2KGJvYXJkTm9kZSwgbnVsbCwgeSlcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5ID09IDApIGNyZWF0ZURpdihib2FyZE5vZGUsIG51bGwsIHgpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZURpdihib2FyZE5vZGUsIFsnc3F1YXJlJ10pO1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuY2xpY2tTcXVhcmUoeCwgeSwgYm9hcmROb2RlLmRhdGFzZXQucGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBjcmVhdGVEaXYocGFyZW50LCBjbGFzc0FycmF5LCB0ZXh0KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kKG5vZGUpO1xuICAgIGlmIChjbGFzc0FycmF5KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIGlmICh0ZXh0KVxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcXVlcnlBcnJheShjbGFzc0FycmF5LCBkYXRhT2JqZWN0KSB7XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICBzdHJpbmcgKz0gJy4nICsgY2xzO1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhT2JqZWN0KVxuICAgICAgICBzdHJpbmcgKz0gYFtkYXRhLSR7a2V5fT1cIiR7ZGF0YU9iamVjdFtrZXldfVwiXWBcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5nKV07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudChjbGFzc0FycmF5LCBkYXRhT2JqZWN0KSB7XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICBzdHJpbmcgKz0gJy4nICsgY2xzO1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhT2JqZWN0KVxuICAgICAgICBzdHJpbmcgKz0gYFtkYXRhLSR7a2V5fT1cIiR7ZGF0YU9iamVjdFtrZXldfVwiXWBcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzc2xpc3Qobm9kZSwgYm9vbE9iamVjdCkge1xuICAgIGZvciAobGV0IGtleSBpbiBib29sT2JqZWN0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGJvb2xPYmplY3Rba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShrZXkpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJ1xuaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcydcblxuLy8gY29uc3QgYm9hcmROb2RlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIxJyk7XG4vLyBjb25zdCBib2FyZE5vZGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYXllcjInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtuZXcgUGxheWVyKCdwMScsIDAsICdwbGF5ZXInKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyKCdwMicsIDEsICdwbGF5ZXInKV07XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlbCA9IG51bGw7XG4gICAgICAgIC8vIHAxcGljaywgcDFjb25maXJtLCBwMnBpY2ssIHAyY29uZmlybSwgZ2FtZSwgcmVzdWx0LCBhaXBpY2s/XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnQnOyBcbiAgICAgICAgXG4gICAgICAgIERPTS5zZXRCdXR0b25zKHRoaXMpO1xuICAgICAgICBET00uc2V0TW9kZWxzKHRoaXMpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMpO1xuICAgICAgICBET00uc2V0Qm9hcmQodGhpcyk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJzKTsgLy8gREVCVUdcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhgJWNuZXcgc3RhdGU6ICVjJHtzdGF0ZX1gLCAnJywgJ2NvbG9yOiBnb2xkZW5yb2Q7IGZvbnQtd2VpZ2h0OiBib2xkJyk7XG5cbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgYm9hcmRcbiAgICAgICAgICAgICAgICAvLyByZXNldCBzaGlwIHNlbGVjdFxuICAgICAgICAgICAgICAgIC8vIGhpZGUgYm9hcmRzP1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSA/P1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFwaWNrJzpcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0R2FtZVR5cGUodHlwZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3N0YXJ0JykgcmV0dXJuO1xuICAgICAgICB0aGlzLnBsYXllcnNbMV0udHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFwaWNrJyk7XG4gICAgfVxuXG4gICAgc2VsZWN0TW9kZWwocGxheWVyLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbW9kZWwgY2xpY2tlZCBhdCAke3BsYXllcn0sICR7aW5kZXh9YCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZV9vbGQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnAxID0gbmV3IFBsYXllcigncDEnKTtcbiAgICAgICAgdGhpcy5wMiA9IG5ldyBQbGF5ZXIoJ3AyJyk7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSBudWxsOyAvLyByZW1vdmVcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RlbCA9IG51bGw7XG4gICAgICAgIERPTS5jcmVhdGVCb2FyZChib2FyZE5vZGUxLCB0aGlzLCB0aGlzLnAxKTtcbiAgICAgICAgRE9NLmNyZWF0ZUJvYXJkKGJvYXJkTm9kZTIsIHRoaXMsIHRoaXMucDIpO1xuICAgICAgICBET00uY3JlYXRlTW9kZWxzKHRoaXMsIHRoaXMucDEpOyAvLyBUT0RPXG4gICAgICAgIERPTS5jcmVhdGVNb2RlbHModGhpcywgdGhpcy5wMik7IC8vIFRPRE9cbiAgICAgICAgRE9NLnNldFNoaXBTZWxlY3QodGhpcyk7XG4gICAgICAgIERPTS5zZXRCdXR0b25zKHRoaXMpO1xuXG4gICAgICAgIC8vICdzdGFydCcsICdwMXBpY2snLCAncDFDb25maXJtJywgJ3AycGljaycsICdwMkNvbmZpcm0nLCAnZ2FtZScsICdyZXN1bHN0JztcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydCc7XG4gICAgICAgIERPTS5wb3N0KCdTZWxlY3QgZ2FtZSBtb2RlJyk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHN0YXRlKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY25ldyBzdGF0ZTogJWMke3N0YXRlfWAsICcnLCAnY29sb3I6IGdvbGRlbnJvZDsgZm9udC13ZWlnaHQ6IGJvbGQnKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHN3aXRjaChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIHRoaXMucDEuYm9hcmQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnAyLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgRE9NLnJlc2V0U2hpcFNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMXBpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsKHRoaXMucDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBzZWxlY3QgeW91ciBzaGlwcycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFDb25maXJtJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIGNvbmZpcm0geW91ciBzaGlwIHBsYWNlbWVudCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJwaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVhbCh0aGlzLnAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAyO1xuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMiwgc2VsZWN0IHlvdXIgc2hpcHMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AyQ29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAyLCBjb25maXJtIHlvdXIgc2hpcCBwbGFjZW1lbnQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dhbWUnOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdTdGFydCB0aGUgZ2FtZSEgUGxheWVyIDEsIGF0dGFjayBhIHNxdWFyZScpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdHMnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIERPTS51cGRhdGVCdXR0b25zKHN0YXRlKTtcbiAgICB9XG5cbiAgICBzdGFydCh0eXBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7dHlwZX1gKycgJWNidXR0b24gcHJlc3NlZCcsICdjb2xvcjogc2t5Ymx1ZScsIG51bGwpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3N0YXJ0JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGUgPT09ICd0d29QbGF5ZXInKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFwaWNrJyk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyVjY29uZmlybSAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncDFDb25maXJtJylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AycGljaycpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAncDJDb25maXJtJylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ2dhbWUnKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGlkaW5nIHBsYXllciBzaGlwcycpO1xuICAgICAgICBET00uaGlkZShib2FyZE5vZGUxLCBib2FyZE5vZGUyKTtcbiAgICB9XG4gICAgcmV2ZWFsKHBsYXllcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmV2ZWFsaW5nICVjJHtwbGF5ZXIubmFtZX0ncyBzaGlwc2AsICdjb2xvcjogc2t5Ymx1ZScpO1xuICAgICAgICBsZXQgYm9hcmROb2RlID0gKHBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gYm9hcmROb2RlMSA6IGJvYXJkTm9kZTI7XG4gICAgICAgIERPTS5yZXZlYWwoYm9hcmROb2RlKTtcbiAgICB9XG4gICAgcGVlaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBlZWtpbmcgYXQgJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX0ncyBzaGlwc2ApO1xuICAgIH1cblxuICAgIGF1dG9HZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCclY2F1dG9HZW4gJWNidXR0b24gcHJlc3NlZCcsICdjb2xvcjogc2t5Ymx1ZScsIG51bGwpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncDFwaWNrJykge1xuICAgICAgICAgICAgdGhpcy5wMS5ib2FyZC5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxQ29uZmlybScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdwMnBpY2snKSB7XG4gICAgICAgICAgICB0aGlzLnAyLmJvYXJkLmdlbkRlZmF1bHRTaGlwcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDJDb25maXJtJyk7XG4gICAgICAgIH0gZWxzZSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBnZW46ICcsIHRoaXMucDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuIH1cblxuICAgIHNxdWFyZUNsaWNrZWQoeCwgeSwgbmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCB4OiVjJHt4fSVjIHk6JWMke3l9JWMgfCBib2FyZDogJWMke25hbWV9JWMgfCB0dXJuOiAke3RoaXMudHVyblBsYXllci5uYW1lfWAsXG4gICAgICAgICAgICAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gYCR7bmFtZX1waWNrYCkge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5hY3RpdmVNb2RlbC5tb2RlbDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb3QgdGhpcyBmYXInKTsgLy8gREVCVUdcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlTW9kZWwgJiYgIW1vZGVsLnBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGFjaW5nIHNoaXA6ICcsIG1vZGVsKTsgLy8gREVCVUdcblxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHVyblBsYXllci5ib2FyZC5hZGRTaGlwKHgsIHksIG1vZGVsLnNoaXAuc2VnbWVudHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFNoaXAuY2FsbGJhY2soKTsgLy8gVE9ET1xuICAgICAgICAgICAgICAgIG1vZGVsLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuc2hpcHMubGVuZ3RoID49IDUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoYCR7bmFtZX1Db25maXJtYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IGAke25hbWV9cGlja2ApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwICYmICF0aGlzLmN1cnJlbnRTaGlwLnVzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwOiAnLCB0aGlzLmN1cnJlbnRTaGlwKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuYWRkU2hpcCh4LCB5LCB0aGlzLmN1cnJlbnRTaGlwLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuc2hpcHMubGVuZ3RoID49IDUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoYCR7bmFtZX1Db25maXJtYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gJ2dhbWUnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkVycm9yOiBjbGljayBvdGhlciBwbGF5ZXIncyBib2FyZFwiKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLmdldE90aGVyUGxheWVyKG5hbWUpLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZTogJywgcmVzcG9uc2UpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2UucmVzdWx0KSB7XG4gICAgICAgICAgICBjYXNlICdlbXB0eSBzcXVhcmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBoaXQnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBzdW5rJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FsbCBlbmVteSBzaGlwcyBzdW5rJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdyZXN1bHRzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuICAgICAgICBsZXQgbmFtZVN0cmluZyA9ICh0aGlzLnR1cm5QbGF5ZXIgPT09IHRoaXMucDEpID8gJ1BsYXllciAxJyA6ICdQbGF5ZXIgMic7XG4gICAgICAgIERPTS5wb3N0KGAke25hbWVTdHJpbmd9LCBhdHRhY2sgYSBzcXVhcmVgKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIHNoaXBMYWJlbENsaWNrZWQocGxheWVyTmFtZSwgaW5kZXgsIHR5cGUsIHVzZWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIHNoaXAgaW5kZXg6JWMke2luZGV4fSVjIHR5cGU6JWMke3R5cGV9JWMgfCBwbGF5ZXI6ICVjJHtwbGF5ZXJOYW1lfWAsXG4gICAgICAgICAgICAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnKTtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSB7bGVuZ3RoOiBOdW1iZXIodHlwZSksIHVzZWQ6IHVzZWQsIGNhbGxiYWNrOiBjYWxsYmFja307XG4gICAgfVxuXG4gICAgc2hpcE1vZGVsQ2xpY2tlZChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIG1vZGVsIGluZGV4OiVjJHtpbmRleH0lY3wgcGxheWVyOiAlYyR7cGxheWVyLm5hbWV9YCxcbiAgICAgICAgICAgICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kZWwgPSB7bW9kZWw6IHBsYXllci5ib2FyZC5tb2RlbHNbaW5kZXhdLCBwbGF5ZXI6IHBsYXllcn07XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgbW9kZWw6ICcsIHRoaXMuYWN0aXZlTW9kZWwpO1xuXG5cbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U2hpcCA9IHtsZW5ndGg6IE51bWJlcih0eXBlKSwgdXNlZDogdXNlZCwgY2FsbGJhY2s6IGNhbGxiYWNrfTtcbiAgICB9XG5cblxuICAgIHN3aXRjaFBsYXllcigpIHtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMiA6IHRoaXMucDE7XG4gICAgfVxuICAgIGdldFBsYXllcihuYW1lKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyB0aGlzLnAxIDogdGhpcy5wMjtcbiAgICB9XG4gICAgZ2V0T3RoZXJQbGF5ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMiA6IHRoaXMucDE7XG4gICAgfVxuIFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgRE9NLnVwZGF0ZUJvYXJkKGJvYXJkTm9kZTEsIHRoaXMucDEpO1xuICAgICAgICBET00udXBkYXRlQm9hcmQoYm9hcmROb2RlMiwgdGhpcy5wMik7XG4gICAgICAgIERPTS51cGRhdGVNb2RlbHModGhpcywgdGhpcy5wMSk7XG4gICAgICAgIERPTS51cGRhdGVNb2RlbHModGhpcywgdGhpcy5wMik7XG4gICAgICAgIERPTS51cGRhdGVDdXJyZW50UGxheWVyKHRoaXMudHVyblBsYXllcik7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmdlbkRlZmF1bHRNb2RlbHMoKTtcbiAgICB9XG5cbiAgICBhZGRTaGlwKHgsIHksIGxlbmd0aCA9IDEsIHNoYXBlID0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBpZiAoaXNPdXRPZkJvdW5kcyh4LCB5KSlcbiAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIG91dCBvZiBib3VuZHMnfTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoeCwgeSwgbGVuZ3RoLCBzaGFwZSk7XG5cbiAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoc2VnbWVudC54LCBzZWdtZW50LnkpKVxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIGV4dGVuZHMgb3V0IG9mIGJvdW5kcyd9O1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQxIG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwMiBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNoaXAyLnNlZ21lbnRzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudDEueCA9PSBzZWdtZW50Mi54ICYmIHNlZ21lbnQxLnkgPT0gc2VnbWVudDIueSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIGludGVyc2VjdHMgb3RoZXIgc2hpcCd9O1xuXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJ307XG4gICAgfVxuXG4gICAgYWRkTW9kZWwoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoeCwgeSwgbGVuZ3RoLCBzaGFwZSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbHMucHVzaCh7c2hpcDogc2hpcCwgaW5kZXg6IG51bGwsIHBsYWNlZDogZmFsc2UsIHN1bms6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGhpdCBvZiB0aGlzLmhpdHMpXG4gICAgICAgICAgICBpZiAoaGl0LnggPT0geCAmJiBoaXQueSA9PSB5KVxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzcXVhcmUgYWxyZWFkeSBoaXQnfTtcblxuICAgICAgICB0aGlzLmhpdHMucHVzaCh7eCwgeX0pO1xuXG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQueCA9PSB4ICYmIHNlZ21lbnQueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdlbmVteSBzaGlwIGhpdCd9O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFyZVNoaXBzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnYWxsIGVuZW15IHNoaXBzIHN1bmsnfTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnZW5lbXkgc2hpcCBzdW5rJ307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnZW1wdHkgc3F1YXJlJ307XG4gICAgfVxuXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZW5EZWZhdWx0U2hpcHMoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDEsIDEsIDIpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoMywgMywgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg1LCA1LCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDcsIDcsIDIpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoOSwgNCwgMik7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdE1vZGVscygpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAyKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA0KTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA1KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWxzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5tb2RlbHNbaV0uaW5kZXggPSBpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNPdXRPZkJvdW5kcyh4LCB5KSB7XG4gICAgcmV0dXJuICh4ID4gMTAgfHwgeCA8IDAgfHwgeSA+IDEwIHx8IHkgPCAwKTtcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHRoaXMubW9kZWxzID0gbmV3IEFycmF5KDUpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTW9kZWxzKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVNb2RlbHMoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzWzBdID0gbmV3IE1vZGVsKDIsIDApO1xuICAgICAgICB0aGlzLm1vZGVsc1sxXSA9IG5ldyBNb2RlbCgyLCAxKTtcbiAgICAgICAgdGhpcy5tb2RlbHNbMl0gPSBuZXcgTW9kZWwoMiwgMik7XG4gICAgICAgIHRoaXMubW9kZWxzWzNdID0gbmV3IE1vZGVsKDIsIDMpO1xuICAgICAgICB0aGlzLm1vZGVsc1s0XSA9IG5ldyBNb2RlbCgyLCA0KTtcbiAgICAgICAgdGhpcy5tb2RlbHNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vZGVsc1sxXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLm1vZGVsc1syXS5zdW5rID0gdHJ1ZTtcbiAgICB9XG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBTaGlwKDAsIDAsIGxlbmd0aCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGJvb2xzKCkge1xuICAgICAgICByZXR1cm4ge3NlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLCBwbGFjZWQ6IHRoaXMucGxhY2VkLCBzdW5rOiB0aGlzLnN1bmt9O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBsZW5ndGgsIHNoYXBlID0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkeCA9IChzaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyAwIDogaTtcbiAgICAgICAgICAgIGxldCBkeSA9IChzaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyBpIDogMDtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChjcmVhdGVTZWdtZW50KHggKyBkeCwgeSArIGR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgYWRqdXN0Q29ybmVycyh0aGlzLnNlZ21lbnRzKTtcbiAgICB9XG4gICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gXG4gICAgICAgICAgICBwcmV2ICs9IChjdXJyLmlzSGl0KSA/IDEgOiAwLCAwKTtcbiAgICB9XG4gICAgaGl0KHgsIHkpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHggPT0gc2VnbWVudC54ICYmIHkgPT0gc2VnbWVudC55KVxuICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNTdW5rKCkge3JldHVybiAodGhpcy5oaXRzID49IHRoaXMuc2VnbWVudHMubGVuZ3RoKX1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VnbWVudCh4LCB5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgaXNIaXQ6IGZhbHNlLCBcbiAgICAgICAgY29ybmVyOiB7VEw6IGZhbHNlLCBUUjogZmFsc2UsIEJMOiBmYWxzZSwgQlI6IGZhbHNlLH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkanVzdENvcm5lcnMoc2VnbWVudHMpIHtcbiAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzZWdtZW50cykge1xuICAgICAgICBsZXQgeDEgPSBzZWdtZW50MS54O1xuICAgICAgICBsZXQgeTEgPSBzZWdtZW50MS55O1xuICAgICAgICBmb3IgKGxldCBzZWdtZW50MiBvZiBzZWdtZW50cykge1xuICAgICAgICAgICAgbGV0IHgyID0gc2VnbWVudDIueDtcbiAgICAgICAgICAgIGxldCB5MiA9IHNlZ21lbnQyLnk7XG4gICAgICAgICAgICBpZiAoeDIgPT0geDEtMSAmJiB5MiA9PSB5MSkgeyAvLyB0byB0aGUgbGVmdCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lci5UTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyLkJMID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHgyID09IHgxKzEgJiYgeTIgPT0geTEpIHsgLy8gdG8gdGhlIHJpZ2h0IG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyLlRSID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXIuQlIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDEgJiYgeTIgPT0geTEtMSkgeyAvLyB0byB0aGUgdG9wIG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyLlRMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXIuVFIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDEgJiYgeTIgPT0geTErMSkgeyAvLyB0byB0aGUgYm90dG9tIG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyLkJMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXIuQlIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lLmpzJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHJ5QXR0YWNrKTtcblxuLy8gbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xuLy8gbGV0IG9wcG9zaXRlUGxheWVyID0gcGxheWVyMjtcblxuLy8gZnVuY3Rpb24gdHJ5QXR0YWNrKGV2ZW50KSB7XG4vLyAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQ7XG4vLyAgICAgY29uc29sZS5sb2coJ25vZGUgdGFyZ2V0OiAnLCBub2RlKTtcbiAgICBcbi8vICAgICBpZiAoIW5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmUnKSlcbi8vICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdzcXVhcmUgbm90IGNsaWNrZWQsIHJldHJ5aW5nLi4uJyk7XG5cbi8vICAgICBjb25zb2xlLmxvZyhub2RlLmRhdGFzZXQubmFtZSwgb3Bwb3NpdGVQbGF5ZXIubmFtZSk7XG4vLyAgICAgaWYgKG5vZGUuZGF0YXNldC5uYW1lID09PSBvcHBvc2l0ZVBsYXllci5uYW1lKVxuLy8gICAgICAgICBjb25zb2xlLmxvZygnb3Bwb3NpdGUgcGxheWVyIGhpdCEhJyk7XG5cbi8vICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRyeUF0dGFjayk7XG4vLyB9XG5cblxuLy8gR0FNRU1PREUgU1RBVEVTXG4vLyBnYW1lLXR5cGUtc2VsZWN0aW9uXG4vLyBwbGF5ZXIgMSBzZWxlY3QgcGllY2VzXG4vLyBwbGF5ZXIgMiBzZWxlY3QgcGllY2VzIHx8IGNvbXB1dGVyXG4vLyBnYW1lcGxheVxuLy8gICAgICBwbGF5ZXIgMSB0dXJuXG4vLyAgICAgIHBsYXllciAyIHR1cm5cbi8vIHN0YXRzIChyZXNldCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=