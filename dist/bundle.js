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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.model-container {\n    padding: 5px;\n}\n.modelboard {\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard>.square {border: 1px solid #fff6;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n\n/* ============================= Board ============================= */\n/* ================================================================= */\n.board {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.board>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;;IAEf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA,cAAc,uBAAuB,CAAC;AACtC;IACI,mBAAmB;AACvB;AACA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,YAAY;IACZ,YAAY;IACZ,iCAAiC;IACjC,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA,sEAAsE;AACtE;IACI,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;;IAEb;8BAC0B;AAC9B;AACA;;IAEI,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA,oBAAoB,gCAAgC;AACpD;IACI,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,cAAc;IACd,oBAAoB;AACxB;AACA,qBAAqB,uBAAuB,CAAC;AAC7C,sBAAsB,uBAAuB,CAAC;AAC9C,sEAAsE;AACtE;IACI,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,YAAY;AAChB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,qCAAqC;IACrC,kCAAkC;AACtC;AACA,sBAAsB,6BAA6B,CAAC;AACpD,oBAAoB,wBAAwB,CAAC;AAC7C,kBAAkB,wBAAwB,CAAC;AAC3C,qBAAqB,uBAAuB,CAAC;AAC7C,2BAA2B,8BAA8B,CAAC;;AAE1D,sEAAsE;AACtE,sEAAsE;AACtE;IACI,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,YAAY;;IAEZ,YAAY;;IAEZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,+BAA+B;IAC/B,iCAAiC;AACrC;AACA;IACI,mBAAmB;AACvB;AACA;;IAEI,+BAA+B;AACnC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,UAAU;AACd;AACA;IACI,YAAY;AAChB;AACA;IACI,2BAA2B;AAC/B;AACA,sEAAsE;AACtE,sBAAsB,kBAAkB,CAAC;AACzC,oBAAoB,mBAAmB,CAAC;;AAExC;6BAC6B,2BAA2B,CAAC;AACzD;6BAC6B,4BAA4B,CAAC;AAC1D;6BAC6B,8BAA8B,CAAC;AAC5D;6BAC6B,+BAA+B,CAAC;AAC7D,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.model-container {\n    padding: 5px;\n}\n.modelboard {\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard>.square {border: 1px solid #fff6;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n\n/* ============================= Board ============================= */\n/* ================================================================= */\n.board {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.board>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
                createDiv(boardNode, ['square'], {x: x, y: y}); // TODO is x,y needed?

        boardNode.onclick = () => function() {
            game.selectModel(boardNode.dataset.player, boardNode.dataset.index);
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
        let playerName = boardNode.dataset.player; // TODO move
        for (let y = 0; y < 11; y++) {
            for (let x = 0; x < 11; x++) {
                if (x == 0 && y == 0)
                    createDiv(boardNode);
                else if (x == 0)
                    createTextDiv(boardNode, y)
                else if (y == 0)
                    createTextDiv(boardNode, x);
                else {
                    let node = createDiv(boardNode, ['square']);
                }
            }
        }
    }
}

// ============================ MISC ==================================
// ====================================================================
function createDiv(parent, classArray, dataObject) {
    let node = document.createElement('div');
    parent.append(node);
    if (classArray)
        for (let cls of classArray)
            node.classList.add(cls);
    for (let key in dataObject) {
        let value = dataObject[key];
        node.dataset[key] = value;
    }
}

function createTextDiv(parent, text) {
    let node = document.createElement('div');
    parent.append(node);
    node.textContent = text;
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
        this.models[2].sunk = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsMEJBQTBCLDBCQUEwQixzQkFBc0IsMkJBQTJCLDBCQUEwQix3QkFBd0IsMkJBQTJCLDRCQUE0Qix5QkFBeUIsR0FBRyxRQUFRLG9CQUFvQixtQkFBbUIsZ0JBQWdCLG9DQUFvQyx1QkFBdUIseUNBQXlDLHNCQUFzQixzQkFBc0IsNkJBQTZCLG9DQUFvQywwQkFBMEIsR0FBRyw4SkFBOEosb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxVQUFVLHNDQUFzQyx1QkFBdUIsd0JBQXdCLHdCQUF3QixHQUFHLGdCQUFnQix5QkFBeUIsdUJBQXVCLDBCQUEwQixHQUFHLDZKQUE2SixvQkFBb0IsMEJBQTBCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsNEJBQTRCLDBCQUEwQixnQkFBZ0IsR0FBRyxtQkFBbUIsbUJBQW1CLG1CQUFtQix3Q0FBd0MsK0JBQStCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLDZCQUE2QixvQ0FBb0MsR0FBRyx3RkFBd0YsOEJBQThCLHlCQUF5Qix5QkFBeUIsb0JBQW9CLHlCQUF5QiwrQkFBK0IsS0FBSyw2REFBNkQsOEJBQThCLEdBQUcsbUNBQW1DLG1CQUFtQiw4QkFBOEIsR0FBRyxzQkFBc0IsaUNBQWlDLGlCQUFpQixpQkFBaUIseUJBQXlCLGVBQWUsaUJBQWlCLG1CQUFtQiwyQkFBMkIsS0FBSyx1QkFBdUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsa0dBQWtHLHdDQUF3QyxtQkFBbUIsbUJBQW1CLHlCQUF5QixzQkFBc0IsNkJBQTZCLG9DQUFvQyxHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxlQUFlLG1DQUFtQyx5QkFBeUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsNENBQTRDLHlDQUF5QyxHQUFHLHdCQUF3QiwrQkFBK0Isc0JBQXNCLDBCQUEwQixvQkFBb0IsMEJBQTBCLHVCQUF1Qix5QkFBeUIsNkJBQTZCLGdDQUFnQyw4SkFBOEoseUJBQXlCLHdDQUF3QyxrQkFBa0IsbUJBQW1CLHFCQUFxQixzQkFBc0IsNkNBQTZDLDBDQUEwQyxHQUFHLFlBQVksOEJBQThCLDBCQUEwQixvQkFBb0IsR0FBRyxXQUFXLHNDQUFzQyx3Q0FBd0MsR0FBRyxTQUFTLDBCQUEwQixHQUFHLDRCQUE0QixzQ0FBc0MsR0FBRyxpQkFBaUIsa0NBQWtDLEdBQUcsZUFBZSxpQkFBaUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsMEJBQTBCLGtDQUFrQyxHQUFHLGlHQUFpRyxvQkFBb0Isc0JBQXNCLHFCQUFxQix5REFBeUQsNkJBQTZCLHVEQUF1RCw4QkFBOEIsdURBQXVELGdDQUFnQyx1REFBdUQsaUNBQWlDLDJKQUEySix3Q0FBd0MseUJBQXlCLHlCQUF5QixzQkFBc0Isd0JBQXdCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sc0JBQXNCLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxZQUFZLEtBQUssT0FBTyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sbUJBQW1CLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSx3QkFBd0IseUJBQXlCLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDBCQUEwQixhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLHlCQUF5QiwwQkFBMEIsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUIsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGlDQUFpQywwQkFBMEIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsMEJBQTBCLHdCQUF3QiwyQkFBMkIsNEJBQTRCLHlCQUF5QixHQUFHLFFBQVEsb0JBQW9CLG1CQUFtQixnQkFBZ0Isb0NBQW9DLHVCQUF1Qix5Q0FBeUMsc0JBQXNCLHNCQUFzQiw2QkFBNkIsb0NBQW9DLDBCQUEwQixHQUFHLDhKQUE4SixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLFVBQVUsc0NBQXNDLHVCQUF1Qix3QkFBd0Isd0JBQXdCLEdBQUcsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLEdBQUcsNkpBQTZKLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsb0JBQW9CLG9CQUFvQiw0QkFBNEIsMEJBQTBCLGdCQUFnQixHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLHdDQUF3QywrQkFBK0IseUJBQXlCLHdCQUF3QixzQkFBc0IsNkJBQTZCLG9DQUFvQyxHQUFHLHdGQUF3Riw4QkFBOEIseUJBQXlCLHlCQUF5QixvQkFBb0IseUJBQXlCLCtCQUErQixLQUFLLDZEQUE2RCw4QkFBOEIsR0FBRyxtQ0FBbUMsbUJBQW1CLDhCQUE4QixHQUFHLHNCQUFzQixpQ0FBaUMsaUJBQWlCLGlCQUFpQix5QkFBeUIsZUFBZSxpQkFBaUIsbUJBQW1CLDJCQUEyQixLQUFLLHVCQUF1Qix5QkFBeUIsd0JBQXdCLHlCQUF5QixrR0FBa0csd0NBQXdDLG1CQUFtQixtQkFBbUIseUJBQXlCLHNCQUFzQiw2QkFBNkIsb0NBQW9DLEdBQUcsb0JBQW9CLG1CQUFtQixHQUFHLGVBQWUsbUNBQW1DLHlCQUF5QixrQkFBa0IsbUJBQW1CLHNCQUFzQiw0Q0FBNEMseUNBQXlDLEdBQUcsd0JBQXdCLCtCQUErQixzQkFBc0IsMEJBQTBCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsZ0NBQWdDLDhKQUE4Six5QkFBeUIsd0NBQXdDLGtCQUFrQixtQkFBbUIscUJBQXFCLHNCQUFzQiw2Q0FBNkMsMENBQTBDLEdBQUcsWUFBWSw4QkFBOEIsMEJBQTBCLG9CQUFvQixHQUFHLFdBQVcsc0NBQXNDLHdDQUF3QyxHQUFHLFNBQVMsMEJBQTBCLEdBQUcsNEJBQTRCLHNDQUFzQyxHQUFHLGlCQUFpQixrQ0FBa0MsR0FBRyxlQUFlLGlCQUFpQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRywwQkFBMEIsa0NBQWtDLEdBQUcsaUdBQWlHLG9CQUFvQixzQkFBc0IscUJBQXFCLHlEQUF5RCw2QkFBNkIsdURBQXVELDhCQUE4Qix1REFBdUQsZ0NBQWdDLHVEQUF1RCxpQ0FBaUMsMkpBQTJKLHdDQUF3Qyx5QkFBeUIseUJBQXlCLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUI7QUFDcjdXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7QUFFbkIsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsK0JBQStCO0FBQzdFLDZDQUE2QyxpQ0FBaUM7QUFDOUU7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDRCQUE0QixPQUFPO0FBQ25DLGtEQUFrRCxXQUFXLEdBQUc7O0FBRWhFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCx3Q0FBd0M7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxJQUFJLGdCQUFnQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxJQUFJLGdCQUFnQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R2dDO0FBQ047O0FBRTFCO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLDRCQUE0QixrREFBTTtBQUNsQyw0QkFBNEIsa0RBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWM7QUFDdEIsUUFBUSx5REFBYTtBQUNyQixRQUFRLDREQUFnQjs7QUFFeEIsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLDBCQUEwQjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsT0FBTyxJQUFJLE1BQU07QUFDekQ7QUFDQTs7QUFFTztBQUNQO0FBQ0Esc0JBQXNCLGtEQUFNO0FBQzVCLHNCQUFzQixrREFBTTtBQUM1QjtBQUNBLGlDQUFpQztBQUNqQztBQUNBLFFBQVEsMkRBQWU7QUFDdkIsUUFBUSwyREFBZTtBQUN2QixRQUFRLDREQUFnQixpQkFBaUI7QUFDekMsUUFBUSw0REFBZ0IsaUJBQWlCO0FBQ3pDLFFBQVEsNkRBQWlCO0FBQ3pCLFFBQVEsMERBQWM7O0FBRXRCO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLDBCQUEwQjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBUTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFpQjtBQUN6Qjs7QUFFQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0EsUUFBUSxzREFBVTtBQUNsQjtBQUNBO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsS0FBSyxhQUFhLHFCQUFxQjtBQUN2Rzs7QUFFQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQVEsSUFBSSxXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNLFlBQVksS0FBSyxpQkFBaUIsV0FBVztBQUMvRjtBQUNBOztBQUVBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBLDZDQUE2QyxNQUFNLGdCQUFnQixZQUFZO0FBQy9FOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBOzs7QUFHQSwrQkFBK0I7QUFDL0I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFlO0FBQ3ZCLFFBQVEsMkRBQWU7QUFDdkIsUUFBUSw0REFBZ0I7QUFDeEIsUUFBUSw0REFBZ0I7QUFDeEIsUUFBUSxtRUFBdUI7QUFDL0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUTZCOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx1QkFBdUIsZ0RBQUk7O0FBRTNCO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLHVCQUF1QixnREFBSTs7QUFFM0IsMEJBQTBCLG9EQUFvRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCLHdCQUF3QixLQUFLOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEd1QztBQUNWOztBQUVkO0FBQ2Y7QUFDQSx5QkFBeUIscURBQVM7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUTtBQUNVO0FBQ047QUFDTjtBQUNFOztBQUU3QixpQkFBaUIsZ0RBQUk7O0FBRXJCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG4gICAgLS1kYXJrQW1iZXI6ICM0NTFhMDM7XFxuICAgIC0tZGFya1Zpb2xldDogIzJlMTA2NTtcXG4gICAgLS1kYXJrUmVkOiAjNDUwYTBhO1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCdXR0b25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNidXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2ZmZjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBMYWJlbHMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5zaGlwLWxhYmVsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XFxuLnNoaXAtbGFiZWw6aG92ZXIsXFxuLnNoaXAtbGFiZWxbZGF0YS11c2VkPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmODtcXG59XFxuLnNoaXAtbGFiZWxbZGF0YS11c2VkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY2O1xcbn1cXG4uc2hpcC1sYWJlbDphY3RpdmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcbmJ1dHRvbi5yb3RhdGUge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICAvKiB0b3A6IDBweDsgKi9cXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxufVxcbmJ1dHRvbi5yb3RhdGU6aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b24ucm90YXRlOmFjdGl2ZSB7ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLm1vZGVsYm9hcmQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5tb2RlbGJvYXJkLnNlbGVjdGVkIHtib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzt9XFxuLm1vZGVsYm9hcmQucGxhY2VkIHtib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnN1bmsge2JvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTt9XFxuLm1vZGVsYm9hcmQ+LnNxdWFyZSB7Ym9yZGVyOiAxcHggc29saWQgI2ZmZjY7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5ib2FyZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oaWRkZW4+LnNxdWFyZS5zaGlwIHtib3JkZXItcmFkaXVzOiAwcHg7fVxcbi5oaWRkZW4+LnN1bmsuc2hpcCB7Ym9yZGVyLXJhZGl1czogMjBweDt9XFxuXFxuLnNxdWFyZS5zaGlwLmNvcm5lclRMLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJUTCB7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyVFIsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRSIHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQkwsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lckJMIHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJCUixcXG4uaGlkZGVuPi5zdW5rLnNoaXAuY29ybmVyQlIge2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUzs7SUFFVCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0EsY0FBYyx1QkFBdUIsQ0FBQztBQUN0QztJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7QUFDQSxzRUFBc0U7QUFDdEU7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhOztJQUViOzhCQUMwQjtBQUM5QjtBQUNBOztJQUVJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsY0FBYztJQUNkLG9CQUFvQjtBQUN4QjtBQUNBLHFCQUFxQix1QkFBdUIsQ0FBQztBQUM3QyxzQkFBc0IsdUJBQXVCLENBQUM7QUFDOUMsc0VBQXNFO0FBQ3RFO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztBQUN0QztBQUNBLHNCQUFzQiw2QkFBNkIsQ0FBQztBQUNwRCxvQkFBb0Isd0JBQXdCLENBQUM7QUFDN0Msa0JBQWtCLHdCQUF3QixDQUFDO0FBQzNDLHFCQUFxQix1QkFBdUIsQ0FBQztBQUM3QywyQkFBMkIsOEJBQThCLENBQUM7O0FBRTFELHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxZQUFZOztJQUVaLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0Esc0VBQXNFO0FBQ3RFLHNCQUFzQixrQkFBa0IsQ0FBQztBQUN6QyxvQkFBb0IsbUJBQW1CLENBQUM7O0FBRXhDOzZCQUM2QiwyQkFBMkIsQ0FBQztBQUN6RDs2QkFDNkIsNEJBQTRCLENBQUM7QUFDMUQ7NkJBQzZCLDhCQUE4QixDQUFDO0FBQzVEOzZCQUM2QiwrQkFBK0IsQ0FBQztBQUM3RCxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG4gICAgLS1kYXJrQW1iZXI6ICM0NTFhMDM7XFxuICAgIC0tZGFya1Zpb2xldDogIzJlMTA2NTtcXG4gICAgLS1kYXJrUmVkOiAjNDUwYTBhO1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCdXR0b25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNidXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uc2hpcC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2ZmZjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBMYWJlbHMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5zaGlwLWxhYmVsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XFxuLnNoaXAtbGFiZWw6aG92ZXIsXFxuLnNoaXAtbGFiZWxbZGF0YS11c2VkPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmODtcXG59XFxuLnNoaXAtbGFiZWxbZGF0YS11c2VkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY2O1xcbn1cXG4uc2hpcC1sYWJlbDphY3RpdmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcbmJ1dHRvbi5yb3RhdGUge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICAvKiB0b3A6IDBweDsgKi9cXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxufVxcbmJ1dHRvbi5yb3RhdGU6aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b24ucm90YXRlOmFjdGl2ZSB7ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWxzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLm1vZGVsYm9hcmQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5tb2RlbGJvYXJkLnNlbGVjdGVkIHtib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzt9XFxuLm1vZGVsYm9hcmQucGxhY2VkIHtib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnN1bmsge2JvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTt9XFxuLm1vZGVsYm9hcmQ+LnNxdWFyZSB7Ym9yZGVyOiAxcHggc29saWQgI2ZmZjY7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5ib2FyZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oaWRkZW4+LnNxdWFyZS5zaGlwIHtib3JkZXItcmFkaXVzOiAwcHg7fVxcbi5oaWRkZW4+LnN1bmsuc2hpcCB7Ym9yZGVyLXJhZGl1czogMjBweDt9XFxuXFxuLnNxdWFyZS5zaGlwLmNvcm5lclRMLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJUTCB7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyVFIsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRSIHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQkwsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lckJMIHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJCUixcXG4uaGlkZGVuPi5zdW5rLnNoaXAuY29ybmVyQlIge2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSB7fTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcblxuRE9NLnNldEJ1dHRvbnMgPSBmdW5jdGlvbihnYW1lKSB7IC8vIFRPRE8gcmVmYWN0b3JcbiAgICBsZXQgdHdvUGxheWVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d29QbGF5ZXInKTtcbiAgICBsZXQgY29tcHV0ZXJOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJyk7XG4gICAgbGV0IGF1dG9HZW5Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9HZW4nKTtcbiAgICBsZXQgY29uZmlybU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybScpO1xuICAgIGxldCByZXNldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQnKTtcbiAgICBsZXQgcGVlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZWVrJyk7XG5cbiAgICB0d29QbGF5ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdwbGF5ZXInKTt9KCk7XG4gICAgY29tcHV0ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdjb21wdXRlcicpO30oKTsgICAgXG59XG5cbkRPTS5zZXRNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydtb2RlbGJvYXJkJ10pKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNTsgeSsrKVxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspXG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGJvYXJkTm9kZSwgWydzcXVhcmUnXSwge3g6IHgsIHk6IHl9KTsgLy8gVE9ETyBpcyB4LHkgbmVlZGVkP1xuXG4gICAgICAgIGJvYXJkTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW1lLnNlbGVjdE1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG4gICAgfVxufVxuXG5ET00udXBkYXRlTW9kZWxzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBtb2RlbHMnKVxuICAgIGZvciAobGV0IHBsYXllciBvZiBnYW1lLnBsYXllcnMpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydtb2RlbGJvYXJkJ10sIHtwbGF5ZXI6IHBsYXllci5uYW1lLCBpbmRleDogbW9kZWwuaW5kZXh9KTtcbiAgICAgICAgICAgIHNldENsYXNzbGlzdChub2RlLCBtb2RlbC5ib29scyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS5zZXRCb2FyZCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ2dhbWVib2FyZCddKSkge1xuICAgICAgICBsZXQgcGxheWVyTmFtZSA9IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcjsgLy8gVE9ETyBtb3ZlXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTE7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPT0gMCAmJiB5ID09IDApXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpdihib2FyZE5vZGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGV4dERpdihib2FyZE5vZGUsIHkpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUZXh0RGl2KGJvYXJkTm9kZSwgeCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY3JlYXRlRGl2KGJvYXJkTm9kZSwgWydzcXVhcmUnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIGNyZWF0ZURpdihwYXJlbnQsIGNsYXNzQXJyYXksIGRhdGFPYmplY3QpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQobm9kZSk7XG4gICAgaWYgKGNsYXNzQXJyYXkpXG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFPYmplY3QpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YU9iamVjdFtrZXldO1xuICAgICAgICBub2RlLmRhdGFzZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dERpdihwYXJlbnQsIHRleHQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQobm9kZSk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QXJyYXkoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZyldO1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnQoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NsaXN0KG5vZGUsIGJvb2xPYmplY3QpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYm9vbE9iamVjdCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBib29sT2JqZWN0W2tleV07XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChrZXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoa2V5KTtcbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcydcbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnXG5cbi8vIGNvbnN0IGJvYXJkTm9kZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQucGxheWVyMScpO1xuLy8gY29uc3QgYm9hcmROb2RlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbbmV3IFBsYXllcigncDEnLCAwLCAncGxheWVyJyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllcigncDInLCAxLCAncGxheWVyJyldO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZWwgPSBudWxsO1xuICAgICAgICAvLyBwMXBpY2ssIHAxY29uZmlybSwgcDJwaWNrLCBwMmNvbmZpcm0sIGdhbWUsIHJlc3VsdCwgYWlwaWNrP1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0JzsgXG4gICAgICAgIFxuICAgICAgICBET00uc2V0QnV0dG9ucyh0aGlzKTtcbiAgICAgICAgRE9NLnNldE1vZGVscyh0aGlzKTtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcnMpOyAvLyBERUJVR1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY25ldyBzdGF0ZTogJWMke3N0YXRlfWAsICcnLCAnY29sb3I6IGdvbGRlbnJvZDsgZm9udC13ZWlnaHQ6IGJvbGQnKTtcblxuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBib2FyZFxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHNoaXAgc2VsZWN0XG4gICAgICAgICAgICAgICAgLy8gaGlkZSBib2FyZHM/XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlID8/XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMXBpY2snOlxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RHYW1lVHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAnc3RhcnQnKSByZXR1cm47XG4gICAgICAgIHRoaXMucGxheWVyc1sxXS50eXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMXBpY2snKTtcbiAgICB9XG5cbiAgICBzZWxlY3RNb2RlbChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBtb2RlbCBjbGlja2VkIGF0ICR7cGxheWVyfSwgJHtpbmRleH1gKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lX29sZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucDEgPSBuZXcgUGxheWVyKCdwMScpO1xuICAgICAgICB0aGlzLnAyID0gbmV3IFBsYXllcigncDInKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IG51bGw7IC8vIHJlbW92ZVxuICAgICAgICB0aGlzLmFjdGl2ZU1vZGVsID0gbnVsbDtcbiAgICAgICAgRE9NLmNyZWF0ZUJvYXJkKGJvYXJkTm9kZTEsIHRoaXMsIHRoaXMucDEpO1xuICAgICAgICBET00uY3JlYXRlQm9hcmQoYm9hcmROb2RlMiwgdGhpcywgdGhpcy5wMik7XG4gICAgICAgIERPTS5jcmVhdGVNb2RlbHModGhpcywgdGhpcy5wMSk7IC8vIFRPRE9cbiAgICAgICAgRE9NLmNyZWF0ZU1vZGVscyh0aGlzLCB0aGlzLnAyKTsgLy8gVE9ET1xuICAgICAgICBET00uc2V0U2hpcFNlbGVjdCh0aGlzKTtcbiAgICAgICAgRE9NLnNldEJ1dHRvbnModGhpcyk7XG5cbiAgICAgICAgLy8gJ3N0YXJ0JywgJ3AxcGljaycsICdwMUNvbmZpcm0nLCAncDJwaWNrJywgJ3AyQ29uZmlybScsICdnYW1lJywgJ3Jlc3Vsc3QnO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0JztcbiAgICAgICAgRE9NLnBvc3QoJ1NlbGVjdCBnYW1lIG1vZGUnKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coYCVjbmV3IHN0YXRlOiAlYyR7c3RhdGV9YCwgJycsICdjb2xvcjogZ29sZGVucm9kOyBmb250LXdlaWdodDogYm9sZCcpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wMS5ib2FyZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucDIuYm9hcmQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBET00ucmVzZXRTaGlwU2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxcGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWwodGhpcy5wMSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIHNlbGVjdCB5b3VyIHNoaXBzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMUNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgY29uZmlybSB5b3VyIHNoaXAgcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMnBpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsKHRoaXMucDIpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDI7XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAyLCBzZWxlY3QgeW91ciBzaGlwcycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJDb25maXJtJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDIsIGNvbmZpcm0geW91ciBzaGlwIHBsYWNlbWVudCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2FtZSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1N0YXJ0IHRoZSBnYW1lISBQbGF5ZXIgMSwgYXR0YWNrIGEgc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVzdWx0cyc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgRE9NLnVwZGF0ZUJ1dHRvbnMoc3RhdGUpO1xuICAgIH1cblxuICAgIHN0YXJ0KHR5cGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHt0eXBlfWArJyAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAnc3RhcnQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3R3b1BsYXllcicpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMXBpY2snKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnJWNjb25maXJtICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwMUNvbmZpcm0nKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDJwaWNrJyk7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdwMkNvbmZpcm0nKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnZ2FtZScpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaWRpbmcgcGxheWVyIHNoaXBzJyk7XG4gICAgICAgIERPTS5oaWRlKGJvYXJkTm9kZTEsIGJvYXJkTm9kZTIpO1xuICAgIH1cbiAgICByZXZlYWwocGxheWVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZXZlYWxpbmcgJWMke3BsYXllci5uYW1lfSdzIHNoaXBzYCwgJ2NvbG9yOiBza3libHVlJyk7XG4gICAgICAgIGxldCBib2FyZE5vZGUgPSAocGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyBib2FyZE5vZGUxIDogYm9hcmROb2RlMjtcbiAgICAgICAgRE9NLnJldmVhbChib2FyZE5vZGUpO1xuICAgIH1cbiAgICBwZWVrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgUGVla2luZyBhdCAke3RoaXMudHVyblBsYXllci5uYW1lfSdzIHNoaXBzYCk7XG4gICAgfVxuXG4gICAgYXV0b0dlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyVjYXV0b0dlbiAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwMXBpY2snKSB7XG4gICAgICAgICAgICB0aGlzLnAxLmJvYXJkLmdlbkRlZmF1bHRTaGlwcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFDb25maXJtJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AycGljaycpIHtcbiAgICAgICAgICAgIHRoaXMucDIuYm9hcmQuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMkNvbmZpcm0nKTtcbiAgICAgICAgfSBlbHNlIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGdlbjogJywgdGhpcy5wMSk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gfVxuXG4gICAgc3F1YXJlQ2xpY2tlZCh4LCB5LCBuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIHg6JWMke3h9JWMgeTolYyR7eX0lYyB8IGJvYXJkOiAlYyR7bmFtZX0lYyB8IHR1cm46ICR7dGhpcy50dXJuUGxheWVyLm5hbWV9YCxcbiAgICAgICAgICAgICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBgJHtuYW1lfXBpY2tgKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmFjdGl2ZU1vZGVsLm1vZGVsO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCB0aGlzIGZhcicpOyAvLyBERUJVR1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2RlbCAmJiAhbW9kZWwucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcDogJywgbW9kZWwpOyAvLyBERUJVR1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50dXJuUGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgbW9kZWwuc2hpcC5zZWdtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdmYWlsdXJlJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50U2hpcC5jYWxsYmFjaygpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgbW9kZWwucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHVyblBsYXllci5ib2FyZC5zaGlwcy5sZW5ndGggPj0gNSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShgJHtuYW1lfUNvbmZpcm1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gYCR7bmFtZX1waWNrYCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoaXAgJiYgIXRoaXMuY3VycmVudFNoaXAudXNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGFjaW5nIHNoaXA6ICcsIHRoaXMuY3VycmVudFNoaXApO1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHVyblBsYXllci5ib2FyZC5hZGRTaGlwKHgsIHksIHRoaXMuY3VycmVudFNoaXAubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXAuY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHVyblBsYXllci5ib2FyZC5zaGlwcy5sZW5ndGggPj0gNSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShgJHtuYW1lfUNvbmZpcm1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPSAnZ2FtZScpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMudHVyblBsYXllci5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiRXJyb3I6IGNsaWNrIG90aGVyIHBsYXllcidzIGJvYXJkXCIpO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMuZ2V0T3RoZXJQbGF5ZXIobmFtZSkuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlOiAnLCByZXNwb25zZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgc3dpdGNoIChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5IHNxdWFyZSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIGhpdCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIHN1bmsnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnOlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3Jlc3VsdHMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gICAgICAgIGxldCBuYW1lU3RyaW5nID0gKHRoaXMudHVyblBsYXllciA9PT0gdGhpcy5wMSkgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgRE9NLnBvc3QoYCR7bmFtZVN0cmluZ30sIGF0dGFjayBhIHNxdWFyZWApO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgc2hpcExhYmVsQ2xpY2tlZChwbGF5ZXJOYW1lLCBpbmRleCwgdHlwZSwgdXNlZCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgc2hpcCBpbmRleDolYyR7aW5kZXh9JWMgdHlwZTolYyR7dHlwZX0lYyB8IHBsYXllcjogJWMke3BsYXllck5hbWV9YCxcbiAgICAgICAgICAgICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcpO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IHtsZW5ndGg6IE51bWJlcih0eXBlKSwgdXNlZDogdXNlZCwgY2FsbGJhY2s6IGNhbGxiYWNrfTtcbiAgICB9XG5cbiAgICBzaGlwTW9kZWxDbGlja2VkKHBsYXllciwgaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgbW9kZWwgaW5kZXg6JWMke2luZGV4fSVjfCBwbGF5ZXI6ICVjJHtwbGF5ZXIubmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVNb2RlbCA9IHttb2RlbDogcGxheWVyLmJvYXJkLm1vZGVsc1tpbmRleF0sIHBsYXllcjogcGxheWVyfTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZSBtb2RlbDogJywgdGhpcy5hY3RpdmVNb2RlbCk7XG5cblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTaGlwID0ge2xlbmd0aDogTnVtYmVyKHR5cGUpLCB1c2VkOiB1c2VkLCBjYWxsYmFjazogY2FsbGJhY2t9O1xuICAgIH1cblxuXG4gICAgc3dpdGNoUGxheWVyKCkge1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyB0aGlzLnAyIDogdGhpcy5wMTtcbiAgICB9XG4gICAgZ2V0UGxheWVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IHRoaXMucDEgOiB0aGlzLnAyO1xuICAgIH1cbiAgICBnZXRPdGhlclBsYXllcihuYW1lKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyB0aGlzLnAyIDogdGhpcy5wMTtcbiAgICB9XG4gXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBET00udXBkYXRlQm9hcmQoYm9hcmROb2RlMSwgdGhpcy5wMSk7XG4gICAgICAgIERPTS51cGRhdGVCb2FyZChib2FyZE5vZGUyLCB0aGlzLnAyKTtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzLCB0aGlzLnAxKTtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzLCB0aGlzLnAyKTtcbiAgICAgICAgRE9NLnVwZGF0ZUN1cnJlbnRQbGF5ZXIodGhpcy50dXJuUGxheWVyKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuZ2VuRGVmYXVsdE1vZGVscygpO1xuICAgIH1cblxuICAgIGFkZFNoaXAoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIGlmIChpc091dE9mQm91bmRzKHgsIHkpKVxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgb3V0IG9mIGJvdW5kcyd9O1xuICAgICAgICBcbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCh4LCB5LCBsZW5ndGgsIHNoYXBlKTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICBpZiAoaXNPdXRPZkJvdW5kcyhzZWdtZW50LngsIHNlZ21lbnQueSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgZXh0ZW5kcyBvdXQgb2YgYm91bmRzJ307XG5cbiAgICAgICAgZm9yIChsZXQgc2VnbWVudDEgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAyIG9mIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudDIgb2Ygc2hpcDIuc2VnbWVudHMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50MS54ID09IHNlZ21lbnQyLnggJiYgc2VnbWVudDEueSA9PSBzZWdtZW50Mi55KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgaW50ZXJzZWN0cyBvdGhlciBzaGlwJ307XG5cbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnfTtcbiAgICB9XG5cbiAgICBhZGRNb2RlbCh4LCB5LCBsZW5ndGggPSAxLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCh4LCB5LCBsZW5ndGgsIHNoYXBlKTtcblxuICAgICAgICB0aGlzLm1vZGVscy5wdXNoKHtzaGlwOiBzaGlwLCBpbmRleDogbnVsbCwgcGxhY2VkOiBmYWxzZSwgc3VuazogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgZm9yIChsZXQgaGl0IG9mIHRoaXMuaGl0cylcbiAgICAgICAgICAgIGlmIChoaXQueCA9PSB4ICYmIGhpdC55ID09IHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NxdWFyZSBhbHJlYWR5IGhpdCd9O1xuXG4gICAgICAgIHRoaXMuaGl0cy5wdXNoKHt4LCB5fSk7XG5cbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudC54ID09IHggJiYgc2VnbWVudC55ID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VuZW15IHNoaXAgaGl0J307XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYXJlU2hpcHNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdhbGwgZW5lbXkgc2hpcHMgc3Vuayd9O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdlbmVteSBzaGlwIHN1bmsnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdlbXB0eSBzcXVhcmUnfTtcbiAgICB9XG5cbiAgICBhcmVTaGlwc1N1bmsoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcylcbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdlbkRlZmF1bHRTaGlwcygpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZFNoaXAoMSwgMSwgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCgzLCAzLCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDUsIDUsIDIpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoNywgNywgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg5LCA0LCAyKTtcbiAgICB9XG5cbiAgICBnZW5EZWZhdWx0TW9kZWxzKCkge1xuICAgICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmFkZE1vZGVsKDIsIDEsIDIpO1xuICAgICAgICB0aGlzLmFkZE1vZGVsKDIsIDEsIDMpO1xuICAgICAgICB0aGlzLmFkZE1vZGVsKDIsIDEsIDMpO1xuICAgICAgICB0aGlzLmFkZE1vZGVsKDIsIDAsIDQpO1xuICAgICAgICB0aGlzLmFkZE1vZGVsKDIsIDAsIDUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlbHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLm1vZGVsc1tpXS5pbmRleCA9IGk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5oaXRzID0gW107XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc091dE9mQm91bmRzKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPiAxMCB8fCB4IDwgMCB8fCB5ID4gMTAgfHwgeSA8IDApO1xufSIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgdHlwZSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdGhpcy5tb2RlbHMgPSBuZXcgQXJyYXkoNSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU1vZGVscygpIHtcbiAgICAgICAgdGhpcy5tb2RlbHNbMF0gPSBuZXcgTW9kZWwoMiwgMCk7XG4gICAgICAgIHRoaXMubW9kZWxzWzFdID0gbmV3IE1vZGVsKDIsIDEpO1xuICAgICAgICB0aGlzLm1vZGVsc1syXSA9IG5ldyBNb2RlbCgyLCAyKTtcbiAgICAgICAgdGhpcy5tb2RlbHNbM10gPSBuZXcgTW9kZWwoMiwgMyk7XG4gICAgICAgIHRoaXMubW9kZWxzWzRdID0gbmV3IE1vZGVsKDIsIDQpO1xuICAgICAgICB0aGlzLm1vZGVsc1swXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kZWxzWzFdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kZWxzWzJdLnN1bmsgPSB0cnVlO1xuICAgIH1cbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFNoaXAoMCwgMCwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7c2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsIHBsYWNlZDogdGhpcy5wbGFjZWQsIHN1bms6IHRoaXMuc3Vua307XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlbmd0aCwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGR4ID0gKHNoYXBlID09PSAndmVydGljYWwnKSA/IDAgOiBpO1xuICAgICAgICAgICAgbGV0IGR5ID0gKHNoYXBlID09PSAndmVydGljYWwnKSA/IGkgOiAwO1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKGNyZWF0ZVNlZ21lbnQoeCArIGR4LCB5ICsgZHkpKTtcbiAgICAgICAgfVxuICAgICAgICBhZGp1c3RDb3JuZXJzKHRoaXMuc2VnbWVudHMpO1xuICAgIH1cbiAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBcbiAgICAgICAgICAgIHByZXYgKz0gKGN1cnIuaXNIaXQpID8gMSA6IDAsIDApO1xuICAgIH1cbiAgICBoaXQoeCwgeSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBzZWdtZW50LnggJiYgeSA9PSBzZWdtZW50LnkpXG4gICAgICAgICAgICAgICAgc2VnbWVudC5pc0hpdCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1N1bmsoKSB7cmV0dXJuICh0aGlzLmhpdHMgPj0gdGhpcy5zZWdtZW50cy5sZW5ndGgpfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWdtZW50KHgsIHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBpc0hpdDogZmFsc2UsIFxuICAgICAgICBjb3JuZXI6IHtUTDogZmFsc2UsIFRSOiBmYWxzZSwgQkw6IGZhbHNlLCBCUjogZmFsc2UsfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29ybmVycyhzZWdtZW50cykge1xuICAgIGZvciAobGV0IHNlZ21lbnQxIG9mIHNlZ21lbnRzKSB7XG4gICAgICAgIGxldCB4MSA9IHNlZ21lbnQxLng7XG4gICAgICAgIGxldCB5MSA9IHNlZ21lbnQxLnk7XG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNlZ21lbnRzKSB7XG4gICAgICAgICAgICBsZXQgeDIgPSBzZWdtZW50Mi54O1xuICAgICAgICAgICAgbGV0IHkyID0gc2VnbWVudDIueTtcbiAgICAgICAgICAgIGlmICh4MiA9PSB4MS0xICYmIHkyID09IHkxKSB7IC8vIHRvIHRoZSBsZWZ0IG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyLlRMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXIuQkwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDErMSAmJiB5MiA9PSB5MSkgeyAvLyB0byB0aGUgcmlnaHQgb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXIuVFIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lci5CUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSAmJiB5MiA9PSB5MS0xKSB7IC8vIHRvIHRoZSB0b3Agb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXIuVEwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lci5UUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSAmJiB5MiA9PSB5MSsxKSB7IC8vIHRvIHRoZSBib3R0b20gb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXIuQkwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lci5CUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cnlBdHRhY2spO1xuXG4vLyBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjE7XG4vLyBsZXQgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXIyO1xuXG4vLyBmdW5jdGlvbiB0cnlBdHRhY2soZXZlbnQpIHtcbi8vICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldDtcbi8vICAgICBjb25zb2xlLmxvZygnbm9kZSB0YXJnZXQ6ICcsIG5vZGUpO1xuICAgIFxuLy8gICAgIGlmICghbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZScpKVxuLy8gICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ3NxdWFyZSBub3QgY2xpY2tlZCwgcmV0cnlpbmcuLi4nKTtcblxuLy8gICAgIGNvbnNvbGUubG9nKG5vZGUuZGF0YXNldC5uYW1lLCBvcHBvc2l0ZVBsYXllci5uYW1lKTtcbi8vICAgICBpZiAobm9kZS5kYXRhc2V0Lm5hbWUgPT09IG9wcG9zaXRlUGxheWVyLm5hbWUpXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdvcHBvc2l0ZSBwbGF5ZXIgaGl0ISEnKTtcblxuLy8gICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHJ5QXR0YWNrKTtcbi8vIH1cblxuXG4vLyBHQU1FTU9ERSBTVEFURVNcbi8vIGdhbWUtdHlwZS1zZWxlY3Rpb25cbi8vIHBsYXllciAxIHNlbGVjdCBwaWVjZXNcbi8vIHBsYXllciAyIHNlbGVjdCBwaWVjZXMgfHwgY29tcHV0ZXJcbi8vIGdhbWVwbGF5XG4vLyAgICAgIHBsYXllciAxIHR1cm5cbi8vICAgICAgcGxheWVyIDIgdHVyblxuLy8gc3RhdHMgKHJlc2V0KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==