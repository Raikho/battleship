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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.model-container {\n    padding: 5px;\n}\n.modelboard {\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;;IAEf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA,cAAc,uBAAuB,CAAC;AACtC;IACI,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,YAAY;IACZ,YAAY;IACZ,iCAAiC;IACjC,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA,sEAAsE;AACtE;IACI,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;;IAEb;8BAC0B;AAC9B;AACA;;IAEI,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA,oBAAoB,gCAAgC;AACpD;IACI,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,cAAc;IACd,oBAAoB;AACxB;AACA,qBAAqB,uBAAuB,CAAC;AAC7C,sBAAsB,uBAAuB,CAAC;AAC9C,sEAAsE;AACtE;IACI,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,YAAY;AAChB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,qCAAqC;IACrC,kCAAkC;AACtC;AACA,sBAAsB,6BAA6B,CAAC;AACpD,oBAAoB,wBAAwB,CAAC;AAC7C,kBAAkB,wBAAwB,CAAC;AAC3C,2BAA2B,8BAA8B,CAAC;AAC1D;IACI,+BAA+B;IAC/B,uBAAuB;AAC3B;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,YAAY;;IAEZ,YAAY;;IAEZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,+BAA+B;IAC/B,iCAAiC;AACrC;AACA;IACI,mBAAmB;AACvB;AACA;;IAEI,+BAA+B;AACnC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,UAAU;AACd;AACA;IACI,YAAY;AAChB;AACA;IACI,2BAA2B;AAC/B;AACA,sEAAsE;AACtE,sBAAsB,kBAAkB,CAAC;AACzC,oBAAoB,mBAAmB,CAAC;;AAExC;6BAC6B,2BAA2B,CAAC;AACzD;6BAC6B,4BAA4B,CAAC;AAC1D;6BAC6B,8BAA8B,CAAC;AAC5D;6BAC6B,+BAA+B,CAAC;AAC7D,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.model-container {\n    padding: 5px;\n}\n.modelboard {\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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

    autoGenNode.onclick = () => function() {game.selectAutoGen();}();
}

DOM.setModels = function(game) {
    for (let boardNode of queryArray(['modelboard'])) {
        for (let y = 0; y < 5; y++)
            for (let x = 0; x < 5; x++)
                createDiv(boardNode, ['modelsquare'], 
                    {x: x, y: y, player: boardNode.dataset.player, index: boardNode.dataset.index});

        boardNode.onclick = () => function() {
            game.clickModel(boardNode.dataset.player, boardNode.dataset.index);
        }();
    }
}

DOM.updateModels = function(game) {
    for (let player of game.players) {
        for (let model of player.models) {
            let boardNode = queryElement(['modelboard'], {player: player.name, index: model.index});
            setClasslist(boardNode, model.bools);

            for (let segment of model.ship.segments) {
                let node = queryElement(['modelsquare'],
                    {x: segment.x, y: segment.y, player: player.name, index: model.index});
                setClasslist(node, {ship: true});
            }
        }
    }
}

DOM.setGameboard = function(game) {
    for (let boardNode of queryArray(['gameboard'])) {
        for (let y = 0; y < 11; y++) {
            for (let x = 0; x < 11; x++) {
                if (x == 0 && y == 0) createDiv(boardNode);
                else if (x == 0) createTextDiv(boardNode, y)
                else if (y == 0) createTextDiv(boardNode, x);
                else {
                    let node = createDiv(boardNode, ['square', 'test'],
                        {x: x, y: y, player: boardNode.dataset.player});
                    node.onclick = () => function() {
                        game.clickSquare(x, y, boardNode.dataset.player);
                    }();
                }
            }
        }
    }
}

DOM.updateGameboard = function(game) {
    for (let player of game.players) {
        for (let ship of player.board.ships) {
            for (let segment of ship.segments) {
                let node = queryElement(['square'],
                    {x: segment.x, y: segment.y, player: player.name});
                setClasslist(node, {...segment.bools, ship: true});
            }
        }
    }
}

// ========================== BUTTONS =================================
// ====================================================================
class Button {
    constructor(id, start, p1pick, p1confirm, p2pick, p2confirm, game, results) {
        this.id = id;
        this.start = start;
        this.p1pick = p1pick;
        this.p1confirm = p1confirm;
        this.p2pick = p2pick;
        this.p2confirm = p2confirm;
        this.game = this.game;
        this.results = this.results
    }
}
const buttons = [
    new Button('twoPlayer', 1, 0, 0, 0, 0, 0, 0),
    new Button('computer' , 1, 0, 0, 0, 0, 0, 0),
    new Button('autoGen'  , 0, 1, 0, 1, 0, 0, 0),
    new Button('confirm'  , 0, 0, 1, 0, 1, 0, 0),
    new Button('reset'    , 0, 0, 1, 1, 1, 1, 1),
    new Button('peek'     , 0, 0, 0, 0, 0, 1, 0)
];
function setButtonActive(id, isActive) {
    let node = document.getElementById(id);
    if (isActive) node.classList.add('active');
    else node.classList.remove('active');
}

DOM.updateButtons = function(state) {
    console.log(buttons);
    for (let button of buttons)
        setButtonActive(button.id, button[state]);
}

// ============================ MISC ==================================
// ====================================================================
function createDiv(parent, classArray, dataArray) {
    let node = document.createElement('div');
    parent.append(node);

    if (classArray)
        for (let cls of classArray)
            node.classList.add(cls);

    for (let key in dataArray)
        node.dataset[key] = dataArray[key];

    return node;
}
function createTextDiv(parent, text) {
    let node = document.createElement('div');
    parent.append(node);
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

function queryChildElement(parentClass, classArray, dataObject) {
    let string = ``;
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
        console.log(this.players); // DEBUG
        this.turnPlayer = null;
        this.selectedModel = null;
        // p1pick, p1confirm, p2pick, p2confirm, game, result, aipick?
        this.state = 'start'; 
        
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setButtons(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModels(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setGameboard(this);
        this.update();
    }

    updateState(state) {
        if (this.state === state) return;
        this.state = state;
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');

        switch(state) {
            case 'start':
                // clear board
                // reset models
                // reset ship select
                // hide boards?
                // update ??
                break;
            case 'p1pick':
                this.turnPlayer = this.players[0];
                break;
        }
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateButtons(state);
    }

    // ============================ INPUT =============================
    // ================================================================
    selectGameType(type) {
        if (this.state !== 'start') return;

        this.players[1].type = type;

        this.updateState('p1pick');
    }

    selectAutoGen() {
        if (this.state !== 'p1pick' && this.state !== 'p2pick') return;

        this.autoGen();

        let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
        this.updateState(nextState);
        this.update();
    }

    selectConfirmShips() {
        if (this.state !== 'p1confirm' && this.state !== 'p2confirm') return;

        // TODO: confirm

        // TODO update state, update
    }

    clickModel(playerName, index) {
        console.log(`model clicked at ${playerName}, ${index}`);

        // Check state
        this.selectModel(playerName, index)

        this.update();
    }
    clickSquare(x, y, playerName) {
        console.log(`square clicked at ${playerName}, x:${x}, y:${y}`);
        let result = {status: 'failure'};

        if (this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm'))
            if (!this.selectedModel.placed) // TODO: allow replace ships
                if (playerName === this.selectedModel.name && playerName === this.turnPlayer.name) {
                    result = this.placeModel(x, y, this.getPlayer(playerName));
                }

        if (result.status === 'success')
            this.update();
    }   
    
    // =========================== ACTIONS ============================
    // ================================================================
    selectModel(playerName, index) {
        for (let player of this.players)
            for (let model of player.models)
                model.selected = false;

        let model = this.getPlayer(playerName).models[index];
        model.selected = true;
        this.selectedModel = model;
    }

    placeModel(x, y, player) {
        let result = player.board.addShip(x, y, this.selectedModel.ship.length);
        console.log('placing model...', result); // DEBUG

        if (result.status === 'success') {
            this.selectedModel.placed = true;
            if (player.board.ships.length >= 5) {
                let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
                this.updateState(nextState);
            }
        }
        return result;
    }

    autoGen() {
        this.turnPlayer.board.genDefaultShips();
        // TODO: update default ships, randomize
        return;
    }
    // ============================ OUTPUT ============================
    // ================================================================
    update() {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateModels(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateGameboard(this);
        console.log('test');
    }

    // ============================= MISC =============================
    // ================================================================
    getPlayer(playerName) {
        for (let player of this.players)
            if (player.name === playerName)
                return player;
    }

    isState(stateArgs) {
        for (let state of arguments)
            if (this.state === state)
                return true;
        return false;
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
        // this.genDefaultShips();
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
        this.models[0] = new Model(this.name, 2, 0);
        this.models[1] = new Model(this.name, 3, 1);
        this.models[2] = new Model(this.name, 3, 2);
        this.models[3] = new Model(this.name, 4, 3);
        this.models[4] = new Model(this.name, 5, 4);
        // this.models[0].selected = true;
        // this.models[1].placed = true;
        // this.models[2].sunk = true;
    }
}

class Model {
    constructor(playerName, length, index) {
        this.name = playerName;
        this.ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, length, 'vertical');
        this.index = index;
        this.selected = false;
        this.placed = false;
        this.sunk = false;
    }
    get bools() {
        return {selected: this.selected, placed: this.placed, sunk: this.sunk};
    }
    // TODO  auto recenter
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
        this.length = length;
        for (let i = 0; i < length; i++) {
            let dx = (shape === 'vertical') ? 0 : i;
            let dy = (shape === 'vertical') ? i : 0;
            this.segments.push(new Segment(x + dx, y + dy));
        }
        adjustCorners(this.segments);
    }
    get hits() {
        return this.segments.reduce((prev, curr) => 
            prev += (curr.isHit) ? 1 : 0, 0);
    }
    hit(x, y) {
        this.segments.forEach(segment => {
            if (x == segment.x && y == segment.y) {
                segment.isHit = true;
                if (this.isSunk()) // TODO: test
                    this.segments.forEach(segment => segment.sunk = true);
            }
        });
    }
    isSunk() {return (this.hits >= this.segments.length)}
}

class Segment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hit = false;
        this.sunk = false; // TODO: auto update
        this.cornerTL = false;
        this.cornerTR = false;
        this.cornerBL = false;
        this.cornerBR = false;
    }
    get bools() {
        return {
            hit: this.hit, 
            cornerTL: this.cornerTL,
            cornerTR: this.cornerTR,
            cornerBL: this.cornerBL,
            cornerBR: this.cornerBR,
        }
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
                segment1.cornerTL = true;
                segment1.cornerBL = true;
            }
            else if (x2 == x1+1 && y2 == y1) { // to the right of it
                segment1.cornerTR = true;
                segment1.cornerBR = true;
            }
            else if (x2 == x1 && y2 == y1-1) { // to the top of it
                segment1.cornerTL = true;
                segment1.cornerTR = true;
            }
            else if (x2 == x1 && y2 == y1+1) { // to the bottom of it
                segment1.cornerBL = true;
                segment1.cornerBR = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1E7QUFDVTtBQUNOO0FBQ047QUFDRTs7QUFFN0IsaUJBQWlCLGdEQUFJOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1hY2NlbnQ6ICMwRTc0OTA7XFxuICAgIC0tZGFya0FtYmVyOiAjNDUxYTAzO1xcbiAgICAtLWRhcmtWaW9sZXQ6ICMyZTEwNjU7XFxuICAgIC0tZGFya1JlZDogIzQ1MGEwYTtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkICNmZmY2O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgTGFiZWxzID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uc2hpcC1sYWJlbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcbi5zaGlwLWxhYmVsOmhvdmVyLFxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjg7XFxufVxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG59XFxuLnNoaXAtbGFiZWw6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5idXR0b24ucm90YXRlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgLyogdG9wOiAwcHg7ICovXFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbn1cXG5idXR0b24ucm90YXRlOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uLnJvdGF0ZTphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5tb2RlbGJvYXJkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4ubW9kZWxib2FyZC5zZWxlY3RlZCB7Ym9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnBsYWNlZCB7Ym9yZGVyOiAycHggc29saWQgeWVsbG93O31cXG4ubW9kZWxib2FyZC5zdW5rIHtib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuLm1vZGVsc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjY7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbn1cXG4uZ2FtZWJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oaWRkZW4+LnNxdWFyZS5zaGlwIHtib3JkZXItcmFkaXVzOiAwcHg7fVxcbi5oaWRkZW4+LnN1bmsuc2hpcCB7Ym9yZGVyLXJhZGl1czogMjBweDt9XFxuXFxuLnNxdWFyZS5zaGlwLmNvcm5lclRMLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJUTCB7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyVFIsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRSIHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQkwsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lckJMIHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJCUixcXG4uaGlkZGVuPi5zdW5rLnNoaXAuY29ybmVyQlIge2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFC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bEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1hY2NlbnQ6ICMwRTc0OTA7XFxuICAgIC0tZGFya0FtYmVyOiAjNDUxYTAzO1xcbiAgICAtLWRhcmtWaW9sZXQ6ICMyZTEwNjU7XFxuICAgIC0tZGFya1JlZDogIzQ1MGEwYTtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkICNmZmY2O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgTGFiZWxzID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uc2hpcC1sYWJlbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcbi5zaGlwLWxhYmVsOmhvdmVyLFxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjg7XFxufVxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG59XFxuLnNoaXAtbGFiZWw6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5idXR0b24ucm90YXRlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgLyogdG9wOiAwcHg7ICovXFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbn1cXG5idXR0b24ucm90YXRlOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uLnJvdGF0ZTphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5tb2RlbGJvYXJkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4ubW9kZWxib2FyZC5zZWxlY3RlZCB7Ym9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnBsYWNlZCB7Ym9yZGVyOiAycHggc29saWQgeWVsbG93O31cXG4ubW9kZWxib2FyZC5zdW5rIHtib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuLm1vZGVsc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjY7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbn1cXG4uZ2FtZWJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oaWRkZW4+LnNxdWFyZS5zaGlwIHtib3JkZXItcmFkaXVzOiAwcHg7fVxcbi5oaWRkZW4+LnN1bmsuc2hpcCB7Ym9yZGVyLXJhZGl1czogMjBweDt9XFxuXFxuLnNxdWFyZS5zaGlwLmNvcm5lclRMLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJUTCB7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyVFIsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRSIHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQkwsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lckJMIHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJCUixcXG4uaGlkZGVuPi5zdW5rLnNoaXAuY29ybmVyQlIge2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSB7fTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcblxuRE9NLnNldEJ1dHRvbnMgPSBmdW5jdGlvbihnYW1lKSB7IC8vIFRPRE8gcmVmYWN0b3JcbiAgICBsZXQgdHdvUGxheWVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d29QbGF5ZXInKTtcbiAgICBsZXQgY29tcHV0ZXJOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJyk7XG4gICAgbGV0IGF1dG9HZW5Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9HZW4nKTtcbiAgICBsZXQgY29uZmlybU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybScpO1xuICAgIGxldCByZXNldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQnKTtcbiAgICBsZXQgcGVlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZWVrJyk7XG5cbiAgICB0d29QbGF5ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdwbGF5ZXInKTt9KCk7XG4gICAgY29tcHV0ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdjb21wdXRlcicpO30oKTtcblxuICAgIGF1dG9HZW5Ob2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEF1dG9HZW4oKTt9KCk7XG59XG5cbkRPTS5zZXRNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydtb2RlbGJvYXJkJ10pKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNTsgeSsrKVxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspXG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGJvYXJkTm9kZSwgWydtb2RlbHNxdWFyZSddLCBcbiAgICAgICAgICAgICAgICAgICAge3g6IHgsIHk6IHksIHBsYXllcjogYm9hcmROb2RlLmRhdGFzZXQucGxheWVyLCBpbmRleDogYm9hcmROb2RlLmRhdGFzZXQuaW5kZXh9KTtcblxuICAgICAgICBib2FyZE5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja01vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG4gICAgfVxufVxuXG5ET00udXBkYXRlTW9kZWxzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IHBsYXllciBvZiBnYW1lLnBsYXllcnMpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscykge1xuICAgICAgICAgICAgbGV0IGJvYXJkTm9kZSA9IHF1ZXJ5RWxlbWVudChbJ21vZGVsYm9hcmQnXSwge3BsYXllcjogcGxheWVyLm5hbWUsIGluZGV4OiBtb2RlbC5pbmRleH0pO1xuICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KGJvYXJkTm9kZSwgbW9kZWwuYm9vbHMpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIG1vZGVsLnNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ21vZGVsc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHt4OiBzZWdtZW50LngsIHk6IHNlZ21lbnQueSwgcGxheWVyOiBwbGF5ZXIubmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4fSk7XG4gICAgICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KG5vZGUsIHtzaGlwOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS5zZXRHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydnYW1lYm9hcmQnXSkpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDExOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSAwICYmIHkgPT0gMCkgY3JlYXRlRGl2KGJvYXJkTm9kZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA9PSAwKSBjcmVhdGVUZXh0RGl2KGJvYXJkTm9kZSwgeSlcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5ID09IDApIGNyZWF0ZVRleHREaXYoYm9hcmROb2RlLCB4KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVEaXYoYm9hcmROb2RlLCBbJ3NxdWFyZScsICd0ZXN0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogeCwgeTogeSwgcGxheWVyOiBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXJ9KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmNsaWNrU3F1YXJlKHgsIHksIGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS51cGRhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgICAgICAgICAge3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55LCBwbGF5ZXI6IHBsYXllci5uYW1lfSk7XG4gICAgICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KG5vZGUsIHsuLi5zZWdtZW50LmJvb2xzLCBzaGlwOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEJVVFRPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2xhc3MgQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgc3RhcnQsIHAxcGljaywgcDFjb25maXJtLCBwMnBpY2ssIHAyY29uZmlybSwgZ2FtZSwgcmVzdWx0cykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5wMXBpY2sgPSBwMXBpY2s7XG4gICAgICAgIHRoaXMucDFjb25maXJtID0gcDFjb25maXJtO1xuICAgICAgICB0aGlzLnAycGljayA9IHAycGljaztcbiAgICAgICAgdGhpcy5wMmNvbmZpcm0gPSBwMmNvbmZpcm07XG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gdGhpcy5yZXN1bHRzXG4gICAgfVxufVxuY29uc3QgYnV0dG9ucyA9IFtcbiAgICBuZXcgQnV0dG9uKCd0d29QbGF5ZXInLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb21wdXRlcicgLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdhdXRvR2VuJyAgLCAwLCAxLCAwLCAxLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb25maXJtJyAgLCAwLCAwLCAxLCAwLCAxLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdyZXNldCcgICAgLCAwLCAwLCAxLCAxLCAxLCAxLCAxKSxcbiAgICBuZXcgQnV0dG9uKCdwZWVrJyAgICAgLCAwLCAwLCAwLCAwLCAwLCAxLCAwKVxuXTtcbmZ1bmN0aW9uIHNldEJ1dHRvbkFjdGl2ZShpZCwgaXNBY3RpdmUpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoaXNBY3RpdmUpIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZWxzZSBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5ET00udXBkYXRlQnV0dG9ucyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgY29uc29sZS5sb2coYnV0dG9ucyk7XG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpXG4gICAgICAgIHNldEJ1dHRvbkFjdGl2ZShidXR0b24uaWQsIGJ1dHRvbltzdGF0ZV0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIGNyZWF0ZURpdihwYXJlbnQsIGNsYXNzQXJyYXksIGRhdGFBcnJheSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChub2RlKTtcblxuICAgIGlmIChjbGFzc0FycmF5KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFBcnJheSlcbiAgICAgICAgbm9kZS5kYXRhc2V0W2tleV0gPSBkYXRhQXJyYXlba2V5XTtcblxuICAgIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dERpdihwYXJlbnQsIHRleHQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQobm9kZSk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QXJyYXkoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZyldO1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnQoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gcXVlcnlDaGlsZEVsZW1lbnQocGFyZW50Q2xhc3MsIGNsYXNzQXJyYXksIGRhdGFPYmplY3QpIHtcbiAgICBsZXQgc3RyaW5nID0gYGA7XG4gICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzQXJyYXkpXG4gICAgICAgIHN0cmluZyArPSAnLicgKyBjbHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFPYmplY3QpXG4gICAgICAgIHN0cmluZyArPSBgW2RhdGEtJHtrZXl9PVwiJHtkYXRhT2JqZWN0W2tleV19XCJdYFxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzbGlzdChub2RlLCBib29sT2JqZWN0KSB7XG4gICAgZm9yIChsZXQga2V5IGluIGJvb2xPYmplY3QpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYm9vbE9iamVjdFtrZXldO1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoa2V5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGtleSk7XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnXG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJ1xuXG4vLyBjb25zdCBib2FyZE5vZGUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYXllcjEnKTtcbi8vIGNvbnN0IGJvYXJkTm9kZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQucGxheWVyMicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW25ldyBQbGF5ZXIoJ3AxJywgMCwgJ3BsYXllcicpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIoJ3AyJywgMSwgJ3BsYXllcicpXTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJzKTsgLy8gREVCVUdcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gbnVsbDtcbiAgICAgICAgLy8gcDFwaWNrLCBwMWNvbmZpcm0sIHAycGljaywgcDJjb25maXJtLCBnYW1lLCByZXN1bHQsIGFpcGljaz9cbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydCc7IFxuICAgICAgICBcbiAgICAgICAgRE9NLnNldEJ1dHRvbnModGhpcyk7XG4gICAgICAgIERPTS5zZXRNb2RlbHModGhpcyk7XG4gICAgICAgIERPTS5zZXRHYW1lYm9hcmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHN0YXRlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coYCVjbmV3IHN0YXRlOiAlYyR7c3RhdGV9YCwgJycsICdjb2xvcjogZ29sZGVucm9kOyBmb250LXdlaWdodDogYm9sZCcpO1xuXG4gICAgICAgIHN3aXRjaChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGJvYXJkXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgbW9kZWxzXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgc2hpcCBzZWxlY3RcbiAgICAgICAgICAgICAgICAvLyBoaWRlIGJvYXJkcz9cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgPz9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxcGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIERPTS51cGRhdGVCdXR0b25zKHN0YXRlKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNlbGVjdEdhbWVUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09ICdzdGFydCcpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBsYXllcnNbMV0udHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFwaWNrJyk7XG4gICAgfVxuXG4gICAgc2VsZWN0QXV0b0dlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09ICdwMXBpY2snICYmIHRoaXMuc3RhdGUgIT09ICdwMnBpY2snKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5hdXRvR2VuKCk7XG5cbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFwaWNrJykgPyAncDFjb25maXJtJyA6ICdwMmNvbmZpcm0nO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0Q29uZmlybVNoaXBzKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3AxY29uZmlybScgJiYgdGhpcy5zdGF0ZSAhPT0gJ3AyY29uZmlybScpIHJldHVybjtcblxuICAgICAgICAvLyBUT0RPOiBjb25maXJtXG5cbiAgICAgICAgLy8gVE9ETyB1cGRhdGUgc3RhdGUsIHVwZGF0ZVxuICAgIH1cblxuICAgIGNsaWNrTW9kZWwocGxheWVyTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG1vZGVsIGNsaWNrZWQgYXQgJHtwbGF5ZXJOYW1lfSwgJHtpbmRleH1gKTtcblxuICAgICAgICAvLyBDaGVjayBzdGF0ZVxuICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGNsaWNrU3F1YXJlKHgsIHksIHBsYXllck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNxdWFyZSBjbGlja2VkIGF0ICR7cGxheWVyTmFtZX0sIHg6JHt4fSwgeToke3l9YCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7c3RhdHVzOiAnZmFpbHVyZSd9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMnBpY2snLCAncDFjb25maXJtJywgJ3AyY29uZmlybScpKVxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkTW9kZWwucGxhY2VkKSAvLyBUT0RPOiBhbGxvdyByZXBsYWNlIHNoaXBzXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IHRoaXMuc2VsZWN0ZWRNb2RlbC5uYW1lICYmIHBsYXllck5hbWUgPT09IHRoaXMudHVyblBsYXllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucGxhY2VNb2RlbCh4LCB5LCB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0gICBcbiAgICBcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpXG4gICAgICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKVxuICAgICAgICAgICAgICAgIG1vZGVsLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSkubW9kZWxzW2luZGV4XTtcbiAgICAgICAgbW9kZWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBwbGFjZU1vZGVsKHgsIHksIHBsYXllcikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgdGhpcy5zZWxlY3RlZE1vZGVsLnNoaXAubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgbW9kZWwuLi4nLCByZXN1bHQpOyAvLyBERUJVR1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlbC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHBsYXllci5ib2FyZC5zaGlwcy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpID8gJ3AxY29uZmlybScgOiAncDJjb25maXJtJztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSBkZWZhdWx0IHNoaXBzLCByYW5kb21pemVcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE9VVFBVVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzKTtcbiAgICAgICAgRE9NLnVwZGF0ZUdhbWVib2FyZCh0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGdldFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpXG4gICAgICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09IHBsYXllck5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG5cbiAgICBpc1N0YXRlKHN0YXRlQXJncykge1xuICAgICAgICBmb3IgKGxldCBzdGF0ZSBvZiBhcmd1bWVudHMpXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIEdhbWVfb2xkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wMSA9IG5ldyBQbGF5ZXIoJ3AxJyk7XG4gICAgICAgIHRoaXMucDIgPSBuZXcgUGxheWVyKCdwMicpO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwID0gbnVsbDsgLy8gcmVtb3ZlXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kZWwgPSBudWxsO1xuICAgICAgICBET00uY3JlYXRlQm9hcmQoYm9hcmROb2RlMSwgdGhpcywgdGhpcy5wMSk7XG4gICAgICAgIERPTS5jcmVhdGVCb2FyZChib2FyZE5vZGUyLCB0aGlzLCB0aGlzLnAyKTtcbiAgICAgICAgRE9NLmNyZWF0ZU1vZGVscyh0aGlzLCB0aGlzLnAxKTsgLy8gVE9ET1xuICAgICAgICBET00uY3JlYXRlTW9kZWxzKHRoaXMsIHRoaXMucDIpOyAvLyBUT0RPXG4gICAgICAgIERPTS5zZXRTaGlwU2VsZWN0KHRoaXMpO1xuICAgICAgICBET00uc2V0QnV0dG9ucyh0aGlzKTtcblxuICAgICAgICAvLyAnc3RhcnQnLCAncDFwaWNrJywgJ3AxQ29uZmlybScsICdwMnBpY2snLCAncDJDb25maXJtJywgJ2dhbWUnLCAncmVzdWxzdCc7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnQnO1xuICAgICAgICBET00ucG9zdCgnU2VsZWN0IGdhbWUgbW9kZScpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhgJWNuZXcgc3RhdGU6ICVjJHtzdGF0ZX1gLCAnJywgJ2NvbG9yOiBnb2xkZW5yb2Q7IGZvbnQtd2VpZ2h0OiBib2xkJyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnAxLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wMi5ib2FyZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIERPTS5yZXNldFNoaXBTZWxlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFwaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVhbCh0aGlzLnAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgc2VsZWN0IHlvdXIgc2hpcHMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxQ29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBjb25maXJtIHlvdXIgc2hpcCBwbGFjZW1lbnQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AycGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWwodGhpcy5wMik7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMjtcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDIsIHNlbGVjdCB5b3VyIHNoaXBzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMkNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMiwgY29uZmlybSB5b3VyIHNoaXAgcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnYW1lJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnU3RhcnQgdGhlIGdhbWUhIFBsYXllciAxLCBhdHRhY2sgYSBzcXVhcmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHRzJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBET00udXBkYXRlQnV0dG9ucyhzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhcnQodHlwZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJWMke3R5cGV9YCsnICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09ICdzdGFydCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlID09PSAndHdvUGxheWVyJylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxcGljaycpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCclY2NvbmZpcm0gJWNidXR0b24gcHJlc3NlZCcsICdjb2xvcjogc2t5Ymx1ZScsIG51bGwpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AxQ29uZmlybScpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMnBpY2snKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AyQ29uZmlybScpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdnYW1lJyk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hpZGluZyBwbGF5ZXIgc2hpcHMnKTtcbiAgICAgICAgRE9NLmhpZGUoYm9hcmROb2RlMSwgYm9hcmROb2RlMik7XG4gICAgfVxuICAgIHJldmVhbChwbGF5ZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHJldmVhbGluZyAlYyR7cGxheWVyLm5hbWV9J3Mgc2hpcHNgLCAnY29sb3I6IHNreWJsdWUnKTtcbiAgICAgICAgbGV0IGJvYXJkTm9kZSA9IChwbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IGJvYXJkTm9kZTEgOiBib2FyZE5vZGUyO1xuICAgICAgICBET00ucmV2ZWFsKGJvYXJkTm9kZSk7XG4gICAgfVxuICAgIHBlZWsoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQZWVraW5nIGF0ICR7dGhpcy50dXJuUGxheWVyLm5hbWV9J3Mgc2hpcHNgKTtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnJWNhdXRvR2VuICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpIHtcbiAgICAgICAgICAgIHRoaXMucDEuYm9hcmQuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMUNvbmZpcm0nKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAncDJwaWNrJykge1xuICAgICAgICAgICAgdGhpcy5wMi5ib2FyZC5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AyQ29uZmlybScpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgZ2VuOiAnLCB0aGlzLnAxKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiB9XG5cbiAgICBzcXVhcmVDbGlja2VkKHgsIHksIG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgeDolYyR7eH0lYyB5OiVjJHt5fSVjIHwgYm9hcmQ6ICVjJHtuYW1lfSVjIHwgdHVybjogJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IGAke25hbWV9cGlja2ApIHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IHRoaXMuYWN0aXZlTW9kZWwubW9kZWw7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ290IHRoaXMgZmFyJyk7IC8vIERFQlVHXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZU1vZGVsICYmICFtb2RlbC5wbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwOiAnLCBtb2RlbCk7IC8vIERFQlVHXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuYWRkU2hpcCh4LCB5LCBtb2RlbC5zaGlwLnNlZ21lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRTaGlwLmNhbGxiYWNrKCk7IC8vIFRPRE9cbiAgICAgICAgICAgICAgICBtb2RlbC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzLmxlbmd0aCA+PSA1KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGAke25hbWV9Q29uZmlybWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBgJHtuYW1lfXBpY2tgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hpcCAmJiAhdGhpcy5jdXJyZW50U2hpcC51c2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcDogJywgdGhpcy5jdXJyZW50U2hpcCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50dXJuUGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgdGhpcy5jdXJyZW50U2hpcC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdmYWlsdXJlJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcC5jYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzLmxlbmd0aCA+PSA1KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGAke25hbWV9Q29uZmlybWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9ICdnYW1lJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJFcnJvcjogY2xpY2sgb3RoZXIgcGxheWVyJ3MgYm9hcmRcIik7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy5nZXRPdGhlclBsYXllcihuYW1lKS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2U6ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdmYWlsdXJlJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3VsdCkge1xuICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgaGl0JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgc3Vuayc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwgZW5lbXkgc2hpcHMgc3Vuayc6XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgbGV0IG5hbWVTdHJpbmcgPSAodGhpcy50dXJuUGxheWVyID09PSB0aGlzLnAxKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICBET00ucG9zdChgJHtuYW1lU3RyaW5nfSwgYXR0YWNrIGEgc3F1YXJlYCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcbiAgICBzaGlwTGFiZWxDbGlja2VkKHBsYXllck5hbWUsIGluZGV4LCB0eXBlLCB1c2VkLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBzaGlwIGluZGV4OiVjJHtpbmRleH0lYyB0eXBlOiVjJHt0eXBlfSVjIHwgcGxheWVyOiAlYyR7cGxheWVyTmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJyk7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwID0ge2xlbmd0aDogTnVtYmVyKHR5cGUpLCB1c2VkOiB1c2VkLCBjYWxsYmFjazogY2FsbGJhY2t9O1xuICAgIH1cblxuICAgIHNoaXBNb2RlbENsaWNrZWQocGxheWVyLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBtb2RlbCBpbmRleDolYyR7aW5kZXh9JWN8IHBsYXllcjogJWMke3BsYXllci5uYW1lfWAsXG4gICAgICAgICAgICAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU1vZGVsID0ge21vZGVsOiBwbGF5ZXIuYm9hcmQubW9kZWxzW2luZGV4XSwgcGxheWVyOiBwbGF5ZXJ9O1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlIG1vZGVsOiAnLCB0aGlzLmFjdGl2ZU1vZGVsKTtcblxuXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFNoaXAgPSB7bGVuZ3RoOiBOdW1iZXIodHlwZSksIHVzZWQ6IHVzZWQsIGNhbGxiYWNrOiBjYWxsYmFja307XG4gICAgfVxuXG5cbiAgICBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9ICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IHRoaXMucDIgOiB0aGlzLnAxO1xuICAgIH1cbiAgICBnZXRQbGF5ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMSA6IHRoaXMucDI7XG4gICAgfVxuICAgIGdldE90aGVyUGxheWVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IHRoaXMucDIgOiB0aGlzLnAxO1xuICAgIH1cbiBcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIERPTS51cGRhdGVCb2FyZChib2FyZE5vZGUxLCB0aGlzLnAxKTtcbiAgICAgICAgRE9NLnVwZGF0ZUJvYXJkKGJvYXJkTm9kZTIsIHRoaXMucDIpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMsIHRoaXMucDEpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMsIHRoaXMucDIpO1xuICAgICAgICBET00udXBkYXRlQ3VycmVudFBsYXllcih0aGlzLnR1cm5QbGF5ZXIpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5nZW5EZWZhdWx0TW9kZWxzKCk7XG4gICAgICAgIC8vIHRoaXMuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgfVxuXG4gICAgYWRkU2hpcCh4LCB5LCBsZW5ndGggPSAxLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoeCwgeSkpXG4gICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBvdXQgb2YgYm91bmRzJ307XG4gICAgICAgIFxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGlmIChpc091dE9mQm91bmRzKHNlZ21lbnQueCwgc2VnbWVudC55KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBleHRlbmRzIG91dCBvZiBib3VuZHMnfTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcDIgb2YgdGhpcy5zaGlwcylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50MiBvZiBzaGlwMi5zZWdtZW50cylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQxLnggPT0gc2VnbWVudDIueCAmJiBzZWdtZW50MS55ID09IHNlZ21lbnQyLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBpbnRlcnNlY3RzIG90aGVyIHNoaXAnfTtcblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2Vzcyd9O1xuICAgIH1cblxuICAgIGFkZE1vZGVsKHgsIHksIGxlbmd0aCA9IDEsIHNoYXBlID0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIHRoaXMubW9kZWxzLnB1c2goe3NoaXA6IHNoaXAsIGluZGV4OiBudWxsLCBwbGFjZWQ6IGZhbHNlLCBzdW5rOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBmb3IgKGxldCBoaXQgb2YgdGhpcy5oaXRzKVxuICAgICAgICAgICAgaWYgKGhpdC54ID09IHggJiYgaGl0LnkgPT0geSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc3F1YXJlIGFscmVhZHkgaGl0J307XG5cbiAgICAgICAgdGhpcy5oaXRzLnB1c2goe3gsIHl9KTtcblxuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50LnggPT0geCAmJiBzZWdtZW50LnkgPT0geSkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnZW5lbXkgc2hpcCBoaXQnfTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hcmVTaGlwc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2FsbCBlbmVteSBzaGlwcyBzdW5rJ307XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VuZW15IHNoaXAgc3Vuayd9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VtcHR5IHNxdWFyZSd9O1xuICAgIH1cblxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdFNoaXBzKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYWRkU2hpcCgxLCAxLCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDMsIDMsIDIpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoNSwgNSwgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg3LCA3LCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDksIDQsIDIpO1xuICAgIH1cblxuICAgIGdlbkRlZmF1bHRNb2RlbHMoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMik7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNCk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMubW9kZWxzW2ldLmluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzT3V0T2ZCb3VuZHMoeCwgeSkge1xuICAgIHJldHVybiAoeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCk7XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCB0eXBlKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBBcnJheSg1KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU1vZGVscygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTW9kZWxzKCkge1xuICAgICAgICB0aGlzLm1vZGVsc1swXSA9IG5ldyBNb2RlbCh0aGlzLm5hbWUsIDIsIDApO1xuICAgICAgICB0aGlzLm1vZGVsc1sxXSA9IG5ldyBNb2RlbCh0aGlzLm5hbWUsIDMsIDEpO1xuICAgICAgICB0aGlzLm1vZGVsc1syXSA9IG5ldyBNb2RlbCh0aGlzLm5hbWUsIDMsIDIpO1xuICAgICAgICB0aGlzLm1vZGVsc1szXSA9IG5ldyBNb2RlbCh0aGlzLm5hbWUsIDQsIDMpO1xuICAgICAgICB0aGlzLm1vZGVsc1s0XSA9IG5ldyBNb2RlbCh0aGlzLm5hbWUsIDUsIDQpO1xuICAgICAgICAvLyB0aGlzLm1vZGVsc1swXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMubW9kZWxzWzFdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMubW9kZWxzWzJdLnN1bmsgPSB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllck5hbWUsIGxlbmd0aCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFNoaXAoMCwgMCwgbGVuZ3RoLCAndmVydGljYWwnKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7c2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsIHBsYWNlZDogdGhpcy5wbGFjZWQsIHN1bms6IHRoaXMuc3Vua307XG4gICAgfVxuICAgIC8vIFRPRE8gIGF1dG8gcmVjZW50ZXJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBsZW5ndGgsIHNoYXBlID0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHggPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gMCA6IGk7XG4gICAgICAgICAgICBsZXQgZHkgPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gaSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2gobmV3IFNlZ21lbnQoeCArIGR4LCB5ICsgZHkpKTtcbiAgICAgICAgfVxuICAgICAgICBhZGp1c3RDb3JuZXJzKHRoaXMuc2VnbWVudHMpO1xuICAgIH1cbiAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBcbiAgICAgICAgICAgIHByZXYgKz0gKGN1cnIuaXNIaXQpID8gMSA6IDAsIDApO1xuICAgIH1cbiAgICBoaXQoeCwgeSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBzZWdtZW50LnggJiYgeSA9PSBzZWdtZW50LnkpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N1bmsoKSkgLy8gVE9ETzogdGVzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiBzZWdtZW50LnN1bmsgPSB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtyZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLnNlZ21lbnRzLmxlbmd0aCl9XG59XG5cbmNsYXNzIFNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7IC8vIFRPRE86IGF1dG8gdXBkYXRlXG4gICAgICAgIHRoaXMuY29ybmVyVEwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JuZXJUUiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcm5lckJMID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ybmVyQlIgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGJvb2xzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGl0OiB0aGlzLmhpdCwgXG4gICAgICAgICAgICBjb3JuZXJUTDogdGhpcy5jb3JuZXJUTCxcbiAgICAgICAgICAgIGNvcm5lclRSOiB0aGlzLmNvcm5lclRSLFxuICAgICAgICAgICAgY29ybmVyQkw6IHRoaXMuY29ybmVyQkwsXG4gICAgICAgICAgICBjb3JuZXJCUjogdGhpcy5jb3JuZXJCUixcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29ybmVycyhzZWdtZW50cykge1xuICAgIGZvciAobGV0IHNlZ21lbnQxIG9mIHNlZ21lbnRzKSB7XG4gICAgICAgIGxldCB4MSA9IHNlZ21lbnQxLng7XG4gICAgICAgIGxldCB5MSA9IHNlZ21lbnQxLnk7XG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNlZ21lbnRzKSB7XG4gICAgICAgICAgICBsZXQgeDIgPSBzZWdtZW50Mi54O1xuICAgICAgICAgICAgbGV0IHkyID0gc2VnbWVudDIueTtcbiAgICAgICAgICAgIGlmICh4MiA9PSB4MS0xICYmIHkyID09IHkxKSB7IC8vIHRvIHRoZSBsZWZ0IG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVEwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJMID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHgyID09IHgxKzEgJiYgeTIgPT0geTEpIHsgLy8gdG8gdGhlIHJpZ2h0IG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVFIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJSID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHgyID09IHgxICYmIHkyID09IHkxLTEpIHsgLy8gdG8gdGhlIHRvcCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSAmJiB5MiA9PSB5MSsxKSB7IC8vIHRvIHRoZSBib3R0b20gb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQlIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lLmpzJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHJ5QXR0YWNrKTtcblxuLy8gbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xuLy8gbGV0IG9wcG9zaXRlUGxheWVyID0gcGxheWVyMjtcblxuLy8gZnVuY3Rpb24gdHJ5QXR0YWNrKGV2ZW50KSB7XG4vLyAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQ7XG4vLyAgICAgY29uc29sZS5sb2coJ25vZGUgdGFyZ2V0OiAnLCBub2RlKTtcbiAgICBcbi8vICAgICBpZiAoIW5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmUnKSlcbi8vICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdzcXVhcmUgbm90IGNsaWNrZWQsIHJldHJ5aW5nLi4uJyk7XG5cbi8vICAgICBjb25zb2xlLmxvZyhub2RlLmRhdGFzZXQubmFtZSwgb3Bwb3NpdGVQbGF5ZXIubmFtZSk7XG4vLyAgICAgaWYgKG5vZGUuZGF0YXNldC5uYW1lID09PSBvcHBvc2l0ZVBsYXllci5uYW1lKVxuLy8gICAgICAgICBjb25zb2xlLmxvZygnb3Bwb3NpdGUgcGxheWVyIGhpdCEhJyk7XG5cbi8vICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRyeUF0dGFjayk7XG4vLyB9XG5cblxuLy8gR0FNRU1PREUgU1RBVEVTXG4vLyBnYW1lLXR5cGUtc2VsZWN0aW9uXG4vLyBwbGF5ZXIgMSBzZWxlY3QgcGllY2VzXG4vLyBwbGF5ZXIgMiBzZWxlY3QgcGllY2VzIHx8IGNvbXB1dGVyXG4vLyBnYW1lcGxheVxuLy8gICAgICBwbGF5ZXIgMSB0dXJuXG4vLyAgICAgIHBsYXllciAyIHR1cm5cbi8vIHN0YXRzIChyZXNldCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=