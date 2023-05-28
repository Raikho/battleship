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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/rotate.svg */ "./src/assets/rotate.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/delete.svg */ "./src/assets/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-columns: 1fr 30% 30% 1fr;\n    grid-template-rows: 1fr 20% max-content 1fr;\n    grid-template-areas: \n        \".      .       .       .\"\n        \".      buttons logs    .\"\n        \"boards boards  boards  boards\"\n        \".      .       .       . \";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-columns: 1fr 30% 30% 1fr;\n    grid-template-rows: 1fr 20% max-content 1fr;\n    grid-template-areas: \n        \".      .       .       .\"\n        \".      buttons logs    .\"\n        \"boards boards  boards  boards\"\n        \".      .       .       . \";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url('assets/rotate.svg');\n    mask-image: url('assets/rotate.svg');\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url('assets/delete.svg');\n    mask-image: url('assets/delete.svg');\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n"],"sourceRoot":""}]);
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

DOM.setModels = function(game) {
    for (let boardNode of queryArray(['modelboard'])) {
        for (let y = 0; y < 5; y++)
            for (let x = 0; x < 5; x++)
                createDiv(boardNode, ['modelsquare'], 
                    {x: x, y: y, player: boardNode.dataset.player, index: boardNode.dataset.index});

        boardNode.onclick = () => function() {
            game.clickModel(boardNode.dataset.player, boardNode.dataset.index);
        }();

        let containerNode = boardNode.parentNode;
        containerNode.dataset.player = boardNode.dataset.player;

        let rotateNode = createDiv(containerNode, ['icon', 'rotate'], null);
        let deleteNode = createDiv(containerNode, ['icon', 'delete'], null);
        rotateNode.onclick = () => function() {
            game.clickRotateModel(boardNode.dataset.player, boardNode.dataset.index);
        }();
        deleteNode.onclick = () => function() {
            game.clickDeleteModel(boardNode.dataset.player, boardNode.dataset.index);
        }();

    }
}

DOM.updateModels = function(game) {
    for (let player of game.players) {
        for (let model of player.models) {
            let boardNode = queryElement(['modelboard'], {player: player.name, index: model.index});
            setClasslist(boardNode, model.bools);

            for (let segment of model.ship.segments) {
                let node = queryElement(
                    ['modelsquare'],
                    {
                        x: segment.x + model.offsetX,
                        y: segment.y + model.offsetY, 
                        player: player.name, index: model.index}
                    );
                setClasslist(node, {...segment.bools, ship: true});
            }
        }
    }
}

DOM.updateActivePlayer = function(game) {
    let turnPlayerName = (game.turnPlayer) ? game.turnPlayer.name : 'n/a';
    for (let boardNode of queryArray(['modelboard-container'])) {
        let isActive = (game.turnPlayer && turnPlayerName === boardNode.dataset.player) ? true : false;
        setClasslist(boardNode, {active: isActive});
    }
    for (let boardNode of queryArray(['gameboard'])) {
        let isActive = (game.turnPlayer && turnPlayerName === boardNode.dataset.player) ? true : false;
        setClasslist(boardNode, {active: isActive});
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
        if (!player.board.ships)
            continue;
        for (let ship of player.board.ships) {
            if (!ship)
                continue;
            for (let segment of ship.segments) {
                let node = queryElement(['square'],
                    {x: segment.x, y: segment.y, player: player.name});
                setClasslist(node, {...segment.bools, ship: true});
            }
        }
    }
    for (let player of game.players) {
        for (let hit of player.board.hits) {
            let node = queryElement(['square'],
                {x: hit.x,y: hit.y,player: player.name});
            node.classList.add('hit');
            node.textContent = 'x'; // TODO: change
        }
    }
}
DOM.removeModel = function(playerName, model) {
    for (let segment of model.ship.segments) {
        let node = queryElement(['modelsquare'], {
            x: segment.x + model.offsetX,y: segment.y + model.offsetY, 
            player: playerName, index: model.index
        });
        node.classList.remove('ship');
    }
}
DOM.removeShip = function(playerName, ship) {
    for (let segment of ship.segments) {
        let node = queryElement(['square'],
            {x: segment.x, y: segment.y, player: playerName});
        node.classList.remove('ship');
    }
}
DOM.removeHits = function() {
    for (let node of queryArray(['square', 'hit']))
        node.textContent = ''; // TODO: remove when replacing icon
}

DOM.post = function(msg) {
    document.getElementById('logs').textContent = msg;
}
DOM.postNext = function(msg) {
    let node = document.getElementById('logs');
    node.textContent += ' ' + msg;
}

// ========================== HIDING ==================================
// ====================================================================
DOM.hidePlayerBoard = function(player) {
    queryElement(['gameboard'], {player: player.name}).classList.add('hidden');
}
DOM.revealPlayerBoard = function(player) {
    queryElement(['gameboard'], {player: player.name}).classList.remove('hidden');
}

// ========================== BUTTONS =================================
// ====================================================================
DOM.setButtons = function(game) {
    let twoPlayerNode = document.getElementById('twoPlayer');
    let computerNode = document.getElementById('computer');
    let autoGenNode = document.getElementById('autoGen');
    let confirmNode = document.getElementById('confirm');
    let resetNode = document.getElementById('reset');
    let peek = document.getElementById('peek');

    twoPlayerNode.onclick = () => function() {game.selectGameType('player');}();
    computerNode.onclick = () => function() {game.selectGameType('computer');}();
    confirmNode.onclick = () => function() {game.selectConfirm();}();
    autoGenNode.onclick = () => function() {game.selectAutoGen();}();
    resetNode.onclick = () => function() {game.selectReset();}();

    peek.onmousedown = () => function() {game.reveal();}();
    peek.onmouseup = () => function() {game.hide();}();
    peek.addEventListener('touchstart', () => game.reveal());
    peek.addEventListener('touchend', () => game.hide());
}

DOM.updateButtons = function(state) {
    for (let button of buttons)
        setButtonActive(button.id, button[state]);
}

class Button {
    constructor(id, start, p1pick, p1confirm, p2pick, p2confirm, game, results) {
        this.id = id;
        this.start = start;
        this.p1pick = p1pick;
        this.p1confirm = p1confirm;
        this.p2pick = p2pick;
        this.p2confirm = p2confirm;
        this.game = game;
        this.results = results
    }
}
const buttons = [
    new Button('twoPlayer', 1, 0, 0, 0, 0, 0, 0),
    new Button('computer' , 1, 0, 0, 0, 0, 0, 0),
    new Button('autoGen'  , 0, 1, 1, 1, 1, 0, 0),
    new Button('confirm'  , 0, 0, 1, 0, 1, 0, 0),
    new Button('reset'    , 0, 1, 1, 1, 1, 1, 1),
    new Button('peek'     , 0, 0, 0, 0, 0, 1, 0)
];
function setButtonActive(id, isActive) {
    let node = document.getElementById(id);
    if (isActive) node.classList.add('active');
    else node.classList.remove('active');
}

// ============================ MISC ==================================
// ====================================================================
function createDiv(parent, classArray, dataArray, text) {
    let node = document.createElement('div');
    parent.append(node);

    if (classArray)
        for (let cls of classArray)
            node.classList.add(cls);

    for (let key in dataArray)
        node.dataset[key] = dataArray[key];

    if (text)
        node.textContent = text;

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
        console.log('DEBUG: players ', this.players); // DEBUG
        this.turnPlayer = null;
        this.selectedModel = null;
        // TODO: consolidate pick/confirm
        // p1pick, p1confirm, p2pick, p2confirm, game, result, aipick?
        this.state = null; 
        
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setButtons(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModels(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setGameboard(this);
        this.updateState('start');

    }

    updateState(state) {
        if (this.state === state) return;
        this.state = state;
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');

        switch(state) {
            case 'start':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Welcome to Battleship! Please select game type.');
                this.turnPlayer = null;
                break;
            case 'p1pick':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 1, please place your ships.')
                this.turnPlayer = this.players[0];
                break;
            case 'p1confirm':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 1, press confirm to finalize ship placement.')
                break;
            case 'p2pick':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 1, please place your ships.')
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].hidePlayerBoard(this.players[0]); // todo implement
                this.turnPlayer = this.players[1];
                break;
            case 'p2confirm':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 1, press confirm to finalize ship placement.')
                break;
            case 'game':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 1, attack the enemy board.')
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].hidePlayerBoard(this.players[1]);
                this.turnPlayer = this.players[0];
                break;
            case 'results':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].revealPlayerBoard(this.players[0]);
                break;
        }
        this.update();
    }

    // ============================ INPUT =============================
    // ================================================================
    selectGameType(type) {
        if (!this.isState('start')) return;

        this.players[1].type = type;
        this.updateState('p1pick');
    }

    selectAutoGen() {
        if (!this.isState('p1pick', 'p1confirm', 'p2pick', 'p2confirm')) return;

        this.autoGen();

        let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
        this.updateState(nextState);
    }

    selectConfirm() {
        if (!this.isState('p1confirm', 'p2confirm')) return;
     
        for (let model of this.turnPlayer.models)
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeModel(this.turnPlayer.name, model);
        this.hideModelOrientation(this.turnPlayer);
        
        let nextState = (this.state === 'p1confirm') ? 'p2pick' : 'game';
        this.updateState(nextState);
    }
    
    selectReset() {
        if (this.isState('start')) return;
        console.log('resetting...');

        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeHits();
        for (let player of this.players) {
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].revealPlayerBoard(player);
            for (let ship of player.board.ships)
                if (ship) _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeShip(player.name, ship);
            for (let model of player.models)
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeModel(player.name, model);

            player.board.clear();
            player.generateModels();
        }

        this.updateState('start');
    }

    clickModel(playerName, index) {
        console.log(`model clicked at ${playerName}, ${index}`);
        if (!this.isState('p1pick', 'p1confirm', 'p2pick', 'p2confirm')) return;

        this.selectModel(playerName, index)

        this.update();
    }
    clickSquare(x, y, playerName) {
        console.log(`square clicked at ${playerName}, x:${x}, y:${y}`);
        let response = {status: 'failure'};

        if (this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm')) {
            if (this.selectedModel && !this.selectedModel.placed) {
                if (playerName === this.selectedModel.name && playerName === this.turnPlayer.name) {
                    response = this.placeModel(x, y, this.getPlayer(playerName));
                }
            }

            if (response.status === 'success') {
                this.update();
                if (this.turnPlayer.board.shipsFull) {
                    let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
                    this.updateState(nextState);
                }
            }
        }
        else if (this.isState('game') && this.turnPlayer.name !== playerName) {
            let player = this.getPlayer(playerName);
            response = player.board.receiveAttack(x, y);
            console.log(playerName, response);

            if (response.status === 'success') {
                let fullName = (this.turnPlayer.name === 'p1') ? 'Player 1' : 'Player 2';
                let otherFullName = (playerName === 'p1') ? 'Player 1' : 'Player 2';
                switch(response.result) {
                    case 'empty square':
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} missed!`);
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`${otherFullName}, attack the enemy board.`);
                        this.switchPlayer();
                        break;
                    case 'enemy ship hit':
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} has hit a ship!`);
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`${fullName}, continue attacking.`);
                        break;
                    case 'enemy ship sunk':
                        player.updateSunkModels();
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} has sunk a ship!`);
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`${fullName}, continue attacking.`);
                        break;
                    case 'all enemy ships sunk':
                        player.updateSunkModels();
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} has sunk all enemy ships! ${fullName} wins!`);
                        this.updateState('results');
                        return;
                }
                this.update();
            }
        }
    }   
    
    clickRotateModel(playerName, index) {
        if (!this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm')) return;
        let player = this.getPlayer(playerName);

        if(this.turnPlayer.name === playerName) {
            let model = player.models[index]; // debug
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeModel(playerName, player.models[index]);
            this.rotateModel(player, index);
            this.update();

            this.clickDeleteModel(playerName, index);
        }
    }
    clickDeleteModel(playerName, index) {
        console.log(`clicked delete model,  player: ${playerName}, index: ${index}`);
        if (!this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm')) return;
        let player = this.getPlayer(playerName);
        
        if (player.models[index].placed && this.turnPlayer.name === playerName) {
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeShip(playerName, player.board.ships[index]);
            this.deleteModel(player, index);
            
            if (this.isState('p1confirm', 'p2confirm'))
                this.updateState(`${player.name}pick`);
            this.update();
        }
    }
    reveal() {
        if (!this.isState('game')) return;
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].revealPlayerBoard(this.turnPlayer);
    }
    hide() {
        if (!this.isState('game')) return;
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].hidePlayerBoard(this.turnPlayer);
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
    deleteModel(player, index) {
        player.board.ships[index] = null;
        player.models[index].placed = false;
    }
    rotateModel(player, index) {
        player.models[index].rotate();
    }
    hideModelOrientation(player) {
        for (let model of player.models)
            if (model.ship.shape === 'horizontal')
                model.rotate();
        this.update();
    }


    placeModel(x, y, player, manualModel) {
        let model = (manualModel || this.selectedModel);
        let result = player.board.addShip(x, y, model.ship.length, model.ship.shape, model.index);
        console.log('placing model...', result); // DEBUG

        if (result.status === 'success') {
            model.placed = true;
        }
        return result;
    }

    autoGen() {
        console.log(`auto generating ships for ${this.turnPlayer.name}`)
        let player = this.turnPlayer;

        this.clear(player);
        player.generateModels(true);
        for (let model of player.models) {
            while (true) {
                let x = Math.floor(Math.random() * 10) + 1;
                let y = Math.floor(Math.random() * 10) + 1;
                let result = this.placeModel(x, y, player, model);
                if (result.status === 'success') break;
            }
        }

        this.update();
    }

    clear(player) {
        for (let model of player.models) {
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeModel(player.name, model);
            if (model.placed) {
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeShip(player.name, player.board.ships[model.index]);
                this.deleteModel(player, model.index);
            }
        }
    }
    // ============================ OUTPUT ============================
    // ================================================================
    update() {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateButtons(this.state);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateModels(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateGameboard(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateActivePlayer(this);
    }

    // ============================= MISC =============================
    // ================================================================
    getPlayer(playerName) {
        for (let player of this.players)
            if (player.name === playerName)
                return player;
    }
    getOtherPlayer(playerName) {
        let player = this.getPlayer(playerName);
        let otherIndex = (player.name === this.players[0].name) ? 1 : 0;
        return this.players[otherIndex];
    }
    switchPlayer() {
        let otherIndex = (this.turnPlayer.index === 0) ? 1 : 0;
        this.turnPlayer = this.players[otherIndex];
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
        this.ships = Array.apply(null, Array(5));
        this.models = [];
        this.genDefaultModels();
        // this.genDefaultShips();
    }

    addShip(x, y, length = 1, shape = 'vertical', index) {
        if (isOutOfBounds(x, y))
            return {status: 'failure', message: 'ship out of bounds'};
        
        let ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, length, shape);

        for (let segment of ship.segments)
            if (isOutOfBounds(segment.x, segment.y))
                return {status: 'failure', message: 'ship extends out of bounds'};

        for (let segment1 of ship.segments)
            for (let ship2 of this.ships) {
                if (!ship2)
                    continue;
                for (let segment2 of ship2.segments)
                    if (segment1.x == segment2.x && segment1.y == segment2.y)
                        return {status: 'failure', message: 'ship intersects other ship'};
            }

        this.ships[index] = ship;
        return {status: 'success'};
    }

    get shipsFull() {
        for (let ship of this.ships)
            if (!ship)
                return false;
        return true;
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
        let response = {status: 'success', result: 'empty square'};

        for (let ship of this.ships) {
            for (let segment of ship.segments) {
                if (segment.x == x && segment.y == y) {
                    segment.isHit = true;

                    if (!ship.isSunk())
                        response.result = 'enemy ship hit';
                    else if (this.areShipsSunk())
                        response.result = 'all enemy ships sunk';
                    else
                        response.result = 'enemy ship sunk';
                }
            }
            if (ship.isSunk())
                for (let segment of ship.segments)
                    segment.sunk = true;
        }
        return response;
    }

    areShipsSunk() {
        for (let ship of this.ships)
            if (!ship.isSunk())
                return false;
        return true;
    }

    genDefaultShips() {
        this.ships = [];
        this.addShip(1, 1, 2, 'vertical', 0);
        this.addShip(3, 3, 2, 'vertical', 1);
        this.addShip(5, 5, 2, 'vertical', 2);
        this.addShip(7, 7, 2, 'vertical', 3);
        this.addShip(9, 4, 2, 'vertical', 4);
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

    generateModels(randomShapes = false) {
        // let lengths = [1, 2, 1, 1, 1];
        let lengths = [2, 3, 3, 4, 5]
        for (let index = 0; index < 5; index++) {
            let shape = 'vertical';
            if (randomShapes)
                shape = (Math.random() * 2 >= 1) ? 'vertical' : 'horizontal';
            this.models[index] = new Model(this.name, lengths[index], index, shape);
        }
    }

    resetModels() {
        this.generateModels();
    }

    updateSunkModels() {
        for (let i = 0; i < this.models.length; i++) {
            let ship = this.board.ships[i];
            this.models[i].sunk = ship.isSunk();
        }
    }
}

class Model {
    constructor(playerName, length, index, shape) {
        this.name = playerName;
        this.ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, length, shape);
        this.index = index;
        this.selected = false;
        this.placed = false;
        this.sunk = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.recenter();
    }
    get bools() {
        return {selected: this.selected, placed: this.placed, sunk: this.sunk};
    }
    rotate() {
        let newShape = (this.ship.shape === 'vertical') ? 'horizontal' : 'vertical';
        this.ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.ship.x, this.ship.y, this.ship.length, newShape);
        this.recenter();
    }
    recenter() {
        let leftoverWidth = 5 - this.ship.width;
        let leftoverHeight = 5 - this.ship.height;
        this.offsetX = Math.floor(leftoverWidth / 2);
        this.offsetY = Math.floor(leftoverHeight / 2);
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
        this.x = x;
        this.y = y;
        this.shape = shape;
        this.length = length;
        this.segments = [];
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
    // static copyFrom(ship, x, y) {
    //     return new Ship(x, y, ship.length, ship.shape);
    // }
    get width() {
        let arr = this.segments.map(segment => segment.x);
        let min = arr.reduce((prev, cur) => {return (cur < prev) ? cur : prev;}, 0);
        let max = arr.reduce((prev, cur) => {return (cur > prev) ? cur : prev;}, 0);
        return max - min + 1;
    }
    get height() {
        let arr = this.segments.map(segment => segment.y);
        let min = arr.reduce((prev, cur) => {return (cur < prev) ? cur : prev;}, 0);
        let max = arr.reduce((prev, cur) => {return (cur > prev) ? cur : prev;}, 0);
        return max - min + 1;
    }
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
            sunk: this.sunk,
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


/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "883a245452e8cd70f340.svg";

/***/ }),

/***/ "./src/assets/rotate.svg":
/*!*******************************!*\
  !*** ./src/assets/rotate.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f81b4cb9876afdd12d2c.svg";

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
/******/ 			"bundle": 0
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
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");



const game = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9yb3RhdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1pbmRpZ28tbGlnaHRlcjogIzA1MDUwNzg4O1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG4gICAgLS1kYXJrQW1iZXI6ICM0NTFhMDM7XFxuICAgIC0tZGFya1Zpb2xldDogIzJlMTA2NTtcXG4gICAgLS1kYXJrUmVkOiAjNDUwYTBhO1xcblxcbiAgICAtLWFjdGl2ZS1ib2FyZC1iZzogZGFya3NlYWdyZWVuO1xcblxcbiAgICAtLXJvdGF0ZTogIzFlMWI0YjtcXG4gICAgLS1yb3RhdGUtbGlnaHRlcjogIzEwYjk4MTsgLyogRW1lcmFsZCA1MDAgKi9cXG4gICAgLS1kZWxldGU6ICMxZTFiNGI7XFxuICAgIC0tZGVsZXRlLWxpZ2h0ZXI6ICNiOTFjMWM7IC8qIFJlZCA3MDAgKi9cXG5cXG4gICAgLS1ib3JkZXItZ2xvdzogIzIyZDNlZTsgLyogQ3lhbiA0MDAqL1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBtaW4oMThweCwgMnZ3KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAlIDMwJSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwJSBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcIi4gICAgICAuICAgICAgIC4gICAgICAgLlxcXCJcXG4gICAgICAgIFxcXCIuICAgICAgYnV0dG9ucyBsb2dzICAgIC5cXFwiXFxuICAgICAgICBcXFwiYm9hcmRzIGJvYXJkcyAgYm9hcmRzICBib2FyZHNcXFwiXFxuICAgICAgICBcXFwiLiAgICAgIC4gICAgICAgLiAgICAgICAuIFxcXCI7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTG9ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2xvZ3Mge1xcbiAgICBncmlkLWFyZWE6IGxvZ3M7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEobWluLWFzcGVjdC1yYXRpbzogMSkge1xcbiAgICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibW9kZWxzMSBib2FyZDEgYm9hcmQyIG1vZGVsczJcXFwiO1xcbiAgICBcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC1hc3BlY3QtcmF0aW86IDEpIHtcXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAgICAgXFxcIm1vZGVsczEgYm9hcmQxIGJvYXJkMVxcXCIgXFxuICAgICAgICAgICAgXFxcImJvYXJkMiBib2FyZDIgbW9kZWxzMlxcXCI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczF9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczJ9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuIGJvYXJkXFxcIiBcXFwiLiBib2FyZFxcXCI7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYm9hcmQgLlxcXCIgXFxcImJvYXJkIC5cXFwiO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVsIEljb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjBweCwgMnZ3KTtcXG4gICAgd2lkdGg6IG1pbigyMHB4LCAydncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmVkO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcblxcbiBcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmljb24ucm90YXRlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUpO1xcbn1cXG4uaWNvbi5kZWxldGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlbGV0ZSk7XFxufVxcbltkYXRhLXBsYXllcj1cXFwicDFcXFwiXT4uaWNvbi5kZWxldGUge3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7fVxcbi5pY29uLnJvdGF0ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm90YXRlLWxpZ2h0ZXIpO31cXG4uaWNvbi5kZWxldGU6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWRlbGV0ZS1saWdodGVyKTt9XFxuLmljb246YWN0aXZlIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVsIEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNWJiO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogNXZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4ubW9kZWxib2FyZC5zZWxlY3RlZCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmNWY1ZjU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNmNWY1ZjU7XFxufVxcbi5tb2RlbGJvYXJkLnN1bmsge2JvcmRlci1jb2xvcjogI2ZmNDUwMGJiO31cXG4ubW9kZWxzcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmNjtcXG59XFxuLm1vZGVsc3F1YXJlLnNoaXAge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnby1saWdodGVyKTt9XFxuLm1vZGVsYm9hcmQucGxhY2VkPi5tb2RlbHNxdWFyZS5zaGlwIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmdhbWVib2FyZFtkYXRhLXBsYXllcj1cXFwicDFcXFwiXSB7Z3JpZC1hcmVhOiBib2FyZDF9XFxuLmdhbWVib2FyZFtkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7Z3JpZC1hcmVhOiBib2FyZDJ9XFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxufVxcbi5nYW1lYm9hcmQuYWN0aXZlIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYm9yZGVyLWdsb3cpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxufVxcbi5nYW1lYm9hcmQ+KiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9hcmQtYmcpO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLnNoaXAsXFxuLnNxdWFyZS5zaGlwLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XFxufVxcbi5oaWRkZW4+LnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEU3NDkwOTk7XFxufVxcbi5zcXVhcmUuaGl0IHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLnNxdWFyZS5zaGlwLmhpdC5zdW5rIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5bZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgQ29ybmVycyA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyVEwpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJUTCkge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyVFIpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJUUikge1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG59XFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lckJMKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyQkwpIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG59XFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lckJSKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyQlIpIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1l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SUFDckMsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0Esa0JBQWtCLHVCQUF1QixDQUFDO0FBQzFDO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjtBQUNBLG1CQUFtQix1Q0FBdUMsQ0FBQztBQUMzRCxzQ0FBc0MsK0JBQStCLENBQUM7QUFDdEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSw4QkFBOEIsaUJBQWlCO0FBQy9DLDhCQUE4QixpQkFBaUI7QUFDL0M7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0Esc0VBQXNFOztBQUV0RTs7SUFFSSw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkM7QUFDQTs7SUFFSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1pbmRpZ28tbGlnaHRlcjogIzA1MDUwNzg4O1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG4gICAgLS1kYXJrQW1iZXI6ICM0NTFhMDM7XFxuICAgIC0tZGFya1Zpb2xldDogIzJlMTA2NTtcXG4gICAgLS1kYXJrUmVkOiAjNDUwYTBhO1xcblxcbiAgICAtLWFjdGl2ZS1ib2FyZC1iZzogZGFya3NlYWdyZWVuO1xcblxcbiAgICAtLXJvdGF0ZTogIzFlMWI0YjtcXG4gICAgLS1yb3RhdGUtbGlnaHRlcjogIzEwYjk4MTsgLyogRW1lcmFsZCA1MDAgKi9cXG4gICAgLS1kZWxldGU6ICMxZTFiNGI7XFxuICAgIC0tZGVsZXRlLWxpZ2h0ZXI6ICNiOTFjMWM7IC8qIFJlZCA3MDAgKi9cXG5cXG4gICAgLS1ib3JkZXItZ2xvdzogIzIyZDNlZTsgLyogQ3lhbiA0MDAqL1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBtaW4oMThweCwgMnZ3KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAlIDMwJSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwJSBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcIi4gICAgICAuICAgICAgIC4gICAgICAgLlxcXCJcXG4gICAgICAgIFxcXCIuICAgICAgYnV0dG9ucyBsb2dzICAgIC5cXFwiXFxuICAgICAgICBcXFwiYm9hcmRzIGJvYXJkcyAgYm9hcmRzICBib2FyZHNcXFwiXFxuICAgICAgICBcXFwiLiAgICAgIC4gICAgICAgLiAgICAgICAuIFxcXCI7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTG9ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2xvZ3Mge1xcbiAgICBncmlkLWFyZWE6IGxvZ3M7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkcztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEobWluLWFzcGVjdC1yYXRpbzogMSkge1xcbiAgICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibW9kZWxzMSBib2FyZDEgYm9hcmQyIG1vZGVsczJcXFwiO1xcbiAgICBcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC1hc3BlY3QtcmF0aW86IDEpIHtcXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAgICAgXFxcIm1vZGVsczEgYm9hcmQxIGJvYXJkMVxcXCIgXFxuICAgICAgICAgICAgXFxcImJvYXJkMiBib2FyZDIgbW9kZWxzMlxcXCI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczF9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczJ9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuIGJvYXJkXFxcIiBcXFwiLiBib2FyZFxcXCI7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYm9hcmQgLlxcXCIgXFxcImJvYXJkIC5cXFwiO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVsIEljb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjBweCwgMnZ3KTtcXG4gICAgd2lkdGg6IG1pbigyMHB4LCAydncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmVkO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcblxcbiBcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmljb24ucm90YXRlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9yb3RhdGUuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3JvdGF0ZS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm90YXRlKTtcXG59XFxuLmljb24uZGVsZXRlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9kZWxldGUuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2RlbGV0ZS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlKTtcXG59XFxuW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdPi5pY29uLmRlbGV0ZSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt9XFxuLmljb24ucm90YXRlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUtbGlnaHRlcik7fVxcbi5pY29uLmRlbGV0ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWxpZ2h0ZXIpO31cXG4uaWNvbjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjVmNWY1YmI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5tb2RlbGJvYXJkLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggI2Y1ZjVmNTtcXG59XFxuLm1vZGVsYm9hcmQuc3VuayB7Ym9yZGVyLWNvbG9yOiAjZmY0NTAwYmI7fVxcbi5tb2RlbHNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY2O1xcbn1cXG4ubW9kZWxzcXVhcmUuc2hpcCB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvLWxpZ2h0ZXIpO31cXG4ubW9kZWxib2FyZC5wbGFjZWQ+Lm1vZGVsc3F1YXJlLnNoaXAge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMX1cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMn1cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmdhbWVib2FyZC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLmdhbWVib2FyZD4qIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1iZyk7XFxufVxcbi5zaGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRMKSB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRSKSB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQkwpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCTCkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQlIpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCUikge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSB7fTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcblxuRE9NLnNldE1vZGVscyA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ21vZGVsYm9hcmQnXSkpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCA1OyB5KyspXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKylcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoYm9hcmROb2RlLCBbJ21vZGVsc3F1YXJlJ10sIFxuICAgICAgICAgICAgICAgICAgICB7eDogeCwgeTogeSwgcGxheWVyOiBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIsIGluZGV4OiBib2FyZE5vZGUuZGF0YXNldC5pbmRleH0pO1xuXG4gICAgICAgIGJvYXJkTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW1lLmNsaWNrTW9kZWwoYm9hcmROb2RlLmRhdGFzZXQucGxheWVyLCBib2FyZE5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0oKTtcblxuICAgICAgICBsZXQgY29udGFpbmVyTm9kZSA9IGJvYXJkTm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb250YWluZXJOb2RlLmRhdGFzZXQucGxheWVyID0gYm9hcmROb2RlLmRhdGFzZXQucGxheWVyO1xuXG4gICAgICAgIGxldCByb3RhdGVOb2RlID0gY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnaWNvbicsICdyb3RhdGUnXSwgbnVsbCk7XG4gICAgICAgIGxldCBkZWxldGVOb2RlID0gY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnaWNvbicsICdkZWxldGUnXSwgbnVsbCk7XG4gICAgICAgIHJvdGF0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja1JvdGF0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG4gICAgICAgIGRlbGV0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja0RlbGV0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG5cbiAgICB9XG59XG5cbkRPTS51cGRhdGVNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmROb2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxib2FyZCddLCB7cGxheWVyOiBwbGF5ZXIubmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4fSk7XG4gICAgICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCBtb2RlbC5ib29scyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2YgbW9kZWwuc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBbJ21vZGVsc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlZ21lbnQueCArIG1vZGVsLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWdtZW50LnkgKyBtb2RlbC5vZmZzZXRZLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjogcGxheWVyLm5hbWUsIGluZGV4OiBtb2RlbC5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRDbGFzc2xpc3Qobm9kZSwgey4uLnNlZ21lbnQuYm9vbHMsIHNoaXA6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBsZXQgdHVyblBsYXllck5hbWUgPSAoZ2FtZS50dXJuUGxheWVyKSA/IGdhbWUudHVyblBsYXllci5uYW1lIDogJ24vYSc7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydtb2RlbGJvYXJkLWNvbnRhaW5lciddKSkge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSAoZ2FtZS50dXJuUGxheWVyICYmIHR1cm5QbGF5ZXJOYW1lID09PSBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCB7YWN0aXZlOiBpc0FjdGl2ZX0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ2dhbWVib2FyZCddKSkge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSAoZ2FtZS50dXJuUGxheWVyICYmIHR1cm5QbGF5ZXJOYW1lID09PSBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCB7YWN0aXZlOiBpc0FjdGl2ZX0pO1xuICAgIH1cbn1cblxuRE9NLnNldEdhbWVib2FyZCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ2dhbWVib2FyZCddKSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDExOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTE7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh4ID09IDAgJiYgeSA9PSAwKSBjcmVhdGVEaXYoYm9hcmROb2RlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID09IDApIGNyZWF0ZVRleHREaXYoYm9hcmROb2RlLCB5KVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHkgPT0gMCkgY3JlYXRlVGV4dERpdihib2FyZE5vZGUsIHgpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZURpdihib2FyZE5vZGUsIFsnc3F1YXJlJywgJ3Rlc3QnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5LCBwbGF5ZXI6IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcn0pO1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuY2xpY2tTcXVhcmUoeCwgeSwgYm9hcmROb2RlLmRhdGFzZXQucGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUdhbWVib2FyZCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgZ2FtZS5wbGF5ZXJzKSB7XG4gICAgICAgIGlmICghcGxheWVyLmJvYXJkLnNoaXBzKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgcGxheWVyLmJvYXJkLnNoaXBzKSB7XG4gICAgICAgICAgICBpZiAoIXNoaXApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ3NxdWFyZSddLFxuICAgICAgICAgICAgICAgICAgICB7eDogc2VnbWVudC54LCB5OiBzZWdtZW50LnksIHBsYXllcjogcGxheWVyLm5hbWV9KTtcbiAgICAgICAgICAgICAgICBzZXRDbGFzc2xpc3Qobm9kZSwgey4uLnNlZ21lbnQuYm9vbHMsIHNoaXA6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgZ2FtZS5wbGF5ZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGhpdCBvZiBwbGF5ZXIuYm9hcmQuaGl0cykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgICAgICB7eDogaGl0LngseTogaGl0LnkscGxheWVyOiBwbGF5ZXIubmFtZX0pO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSAneCc7IC8vIFRPRE86IGNoYW5nZVxuICAgICAgICB9XG4gICAgfVxufVxuRE9NLnJlbW92ZU1vZGVsID0gZnVuY3Rpb24ocGxheWVyTmFtZSwgbW9kZWwpIHtcbiAgICBmb3IgKGxldCBzZWdtZW50IG9mIG1vZGVsLnNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydtb2RlbHNxdWFyZSddLCB7XG4gICAgICAgICAgICB4OiBzZWdtZW50LnggKyBtb2RlbC5vZmZzZXRYLHk6IHNlZ21lbnQueSArIG1vZGVsLm9mZnNldFksIFxuICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXJOYW1lLCBpbmRleDogbW9kZWwuaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIH1cbn1cbkRPTS5yZW1vdmVTaGlwID0gZnVuY3Rpb24ocGxheWVyTmFtZSwgc2hpcCkge1xuICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cykge1xuICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ3NxdWFyZSddLFxuICAgICAgICAgICAge3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55LCBwbGF5ZXI6IHBsYXllck5hbWV9KTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfVxufVxuRE9NLnJlbW92ZUhpdHMgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKGxldCBub2RlIG9mIHF1ZXJ5QXJyYXkoWydzcXVhcmUnLCAnaGl0J10pKVxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gJyc7IC8vIFRPRE86IHJlbW92ZSB3aGVuIHJlcGxhY2luZyBpY29uXG59XG5cbkRPTS5wb3N0ID0gZnVuY3Rpb24obXNnKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKS50ZXh0Q29udGVudCA9IG1zZztcbn1cbkRPTS5wb3N0TmV4dCA9IGZ1bmN0aW9uKG1zZykge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKTtcbiAgICBub2RlLnRleHRDb250ZW50ICs9ICcgJyArIG1zZztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gSElESU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ET00uaGlkZVBsYXllckJvYXJkID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgcXVlcnlFbGVtZW50KFsnZ2FtZWJvYXJkJ10sIHtwbGF5ZXI6IHBsYXllci5uYW1lfSkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5ET00ucmV2ZWFsUGxheWVyQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpIHtcbiAgICBxdWVyeUVsZW1lbnQoWydnYW1lYm9hcmQnXSwge3BsYXllcjogcGxheWVyLm5hbWV9KS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gQlVUVE9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ET00uc2V0QnV0dG9ucyA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBsZXQgdHdvUGxheWVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d29QbGF5ZXInKTtcbiAgICBsZXQgY29tcHV0ZXJOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJyk7XG4gICAgbGV0IGF1dG9HZW5Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9HZW4nKTtcbiAgICBsZXQgY29uZmlybU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybScpO1xuICAgIGxldCByZXNldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQnKTtcbiAgICBsZXQgcGVlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZWVrJyk7XG5cbiAgICB0d29QbGF5ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdwbGF5ZXInKTt9KCk7XG4gICAgY29tcHV0ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdjb21wdXRlcicpO30oKTtcbiAgICBjb25maXJtTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RDb25maXJtKCk7fSgpO1xuICAgIGF1dG9HZW5Ob2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEF1dG9HZW4oKTt9KCk7XG4gICAgcmVzZXROb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdFJlc2V0KCk7fSgpO1xuXG4gICAgcGVlay5vbm1vdXNlZG93biA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUucmV2ZWFsKCk7fSgpO1xuICAgIHBlZWsub25tb3VzZXVwID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5oaWRlKCk7fSgpO1xuICAgIHBlZWsuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IGdhbWUucmV2ZWFsKCkpO1xuICAgIHBlZWsuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiBnYW1lLmhpZGUoKSk7XG59XG5cbkRPTS51cGRhdGVCdXR0b25zID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBmb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucylcbiAgICAgICAgc2V0QnV0dG9uQWN0aXZlKGJ1dHRvbi5pZCwgYnV0dG9uW3N0YXRlXSk7XG59XG5cbmNsYXNzIEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoaWQsIHN0YXJ0LCBwMXBpY2ssIHAxY29uZmlybSwgcDJwaWNrLCBwMmNvbmZpcm0sIGdhbWUsIHJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMucDFwaWNrID0gcDFwaWNrO1xuICAgICAgICB0aGlzLnAxY29uZmlybSA9IHAxY29uZmlybTtcbiAgICAgICAgdGhpcy5wMnBpY2sgPSBwMnBpY2s7XG4gICAgICAgIHRoaXMucDJjb25maXJtID0gcDJjb25maXJtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzXG4gICAgfVxufVxuY29uc3QgYnV0dG9ucyA9IFtcbiAgICBuZXcgQnV0dG9uKCd0d29QbGF5ZXInLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb21wdXRlcicgLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdhdXRvR2VuJyAgLCAwLCAxLCAxLCAxLCAxLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb25maXJtJyAgLCAwLCAwLCAxLCAwLCAxLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdyZXNldCcgICAgLCAwLCAxLCAxLCAxLCAxLCAxLCAxKSxcbiAgICBuZXcgQnV0dG9uKCdwZWVrJyAgICAgLCAwLCAwLCAwLCAwLCAwLCAxLCAwKVxuXTtcbmZ1bmN0aW9uIHNldEJ1dHRvbkFjdGl2ZShpZCwgaXNBY3RpdmUpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoaXNBY3RpdmUpIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZWxzZSBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIGNyZWF0ZURpdihwYXJlbnQsIGNsYXNzQXJyYXksIGRhdGFBcnJheSwgdGV4dCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChub2RlKTtcblxuICAgIGlmIChjbGFzc0FycmF5KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFBcnJheSlcbiAgICAgICAgbm9kZS5kYXRhc2V0W2tleV0gPSBkYXRhQXJyYXlba2V5XTtcblxuICAgIGlmICh0ZXh0KVxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dERpdihwYXJlbnQsIHRleHQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQobm9kZSk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QXJyYXkoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZyldO1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnQoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NsaXN0KG5vZGUsIGJvb2xPYmplY3QpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYm9vbE9iamVjdCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBib29sT2JqZWN0W2tleV07XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChrZXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoa2V5KTtcbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcydcbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnXG5cbi8vIGNvbnN0IGJvYXJkTm9kZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQucGxheWVyMScpO1xuLy8gY29uc3QgYm9hcmROb2RlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbbmV3IFBsYXllcigncDEnLCAwLCAncGxheWVyJyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllcigncDInLCAxLCAncGxheWVyJyldO1xuICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6IHBsYXllcnMgJywgdGhpcy5wbGF5ZXJzKTsgLy8gREVCVUdcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gbnVsbDtcbiAgICAgICAgLy8gVE9ETzogY29uc29saWRhdGUgcGljay9jb25maXJtXG4gICAgICAgIC8vIHAxcGljaywgcDFjb25maXJtLCBwMnBpY2ssIHAyY29uZmlybSwgZ2FtZSwgcmVzdWx0LCBhaXBpY2s/XG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsOyBcbiAgICAgICAgXG4gICAgICAgIERPTS5zZXRCdXR0b25zKHRoaXMpO1xuICAgICAgICBET00uc2V0TW9kZWxzKHRoaXMpO1xuICAgICAgICBET00uc2V0R2FtZWJvYXJkKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdzdGFydCcpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHN0YXRlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coYCVjbmV3IHN0YXRlOiAlYyR7c3RhdGV9YCwgJycsICdjb2xvcjogZ29sZGVucm9kOyBmb250LXdlaWdodDogYm9sZCcpO1xuXG4gICAgICAgIHN3aXRjaChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdXZWxjb21lIHRvIEJhdHRsZXNoaXAhIFBsZWFzZSBzZWxlY3QgZ2FtZSB0eXBlLicpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMXBpY2snOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgcGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMuJylcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMWNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgcHJlc3MgY29uZmlybSB0byBmaW5hbGl6ZSBzaGlwIHBsYWNlbWVudC4nKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJwaWNrJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIHBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzLicpXG4gICAgICAgICAgICAgICAgRE9NLmhpZGVQbGF5ZXJCb2FyZCh0aGlzLnBsYXllcnNbMF0pOyAvLyB0b2RvIGltcGxlbWVudFxuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1sxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AyY29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBwcmVzcyBjb25maXJtIHRvIGZpbmFsaXplIHNoaXAgcGxhY2VtZW50LicpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnYW1lJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQuJylcbiAgICAgICAgICAgICAgICBET00uaGlkZVBsYXllckJvYXJkKHRoaXMucGxheWVyc1sxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVzdWx0cyc6XG4gICAgICAgICAgICAgICAgRE9NLnJldmVhbFBsYXllckJvYXJkKHRoaXMucGxheWVyc1swXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNlbGVjdEdhbWVUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3N0YXJ0JykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBsYXllcnNbMV0udHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxcGljaycpO1xuICAgIH1cblxuICAgIHNlbGVjdEF1dG9HZW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDFjb25maXJtJywgJ3AycGljaycsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuYXV0b0dlbigpO1xuXG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpID8gJ3AxY29uZmlybScgOiAncDJjb25maXJtJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIHNlbGVjdENvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgXG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHRoaXMudHVyblBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwodGhpcy50dXJuUGxheWVyLm5hbWUsIG1vZGVsKTtcbiAgICAgICAgdGhpcy5oaWRlTW9kZWxPcmllbnRhdGlvbih0aGlzLnR1cm5QbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFjb25maXJtJykgPyAncDJwaWNrJyA6ICdnYW1lJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICBzZWxlY3RSZXNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgnc3RhcnQnKSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzZXR0aW5nLi4uJyk7XG5cbiAgICAgICAgRE9NLnJlbW92ZUhpdHMoKTtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgRE9NLnJldmVhbFBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcylcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkgRE9NLnJlbW92ZVNoaXAocGxheWVyLm5hbWUsIHNoaXApO1xuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwocGxheWVyLm5hbWUsIG1vZGVsKTtcblxuICAgICAgICAgICAgcGxheWVyLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICBwbGF5ZXIuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgY2xpY2tNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbW9kZWwgY2xpY2tlZCBhdCAke3BsYXllck5hbWV9LCAke2luZGV4fWApO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AxY29uZmlybScsICdwMnBpY2snLCAncDJjb25maXJtJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGNsaWNrU3F1YXJlKHgsIHksIHBsYXllck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNxdWFyZSBjbGlja2VkIGF0ICR7cGxheWVyTmFtZX0sIHg6JHt4fSwgeToke3l9YCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHtzdGF0dXM6ICdmYWlsdXJlJ307XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZWwgJiYgIXRoaXMuc2VsZWN0ZWRNb2RlbC5wbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gdGhpcy5zZWxlY3RlZE1vZGVsLm5hbWUgJiYgcGxheWVyTmFtZSA9PT0gdGhpcy50dXJuUGxheWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnBsYWNlTW9kZWwoeCwgeSwgdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzRnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdwMXBpY2snKSA/ICdwMWNvbmZpcm0nIDogJ3AyY29uZmlybSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXRlKCdnYW1lJykgJiYgdGhpcy50dXJuUGxheWVyLm5hbWUgIT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lLCByZXNwb25zZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIGxldCBmdWxsTmFtZSA9ICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gJ3AxJykgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJGdWxsTmFtZSA9IChwbGF5ZXJOYW1lID09PSAncDEnKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICAgICAgICAgIHN3aXRjaChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBtaXNzZWQhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7b3RoZXJGdWxsTmFtZX0sIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgaGl0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBoYXMgaGl0IGEgc2hpcCFgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0TmV4dChgJHtmdWxsTmFtZX0sIGNvbnRpbnVlIGF0dGFja2luZy5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIHN1bmsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBoYXMgc3VuayBhIHNoaXAhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7ZnVsbE5hbWV9LCBjb250aW51ZSBhdHRhY2tpbmcuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBoYXMgc3VuayBhbGwgZW5lbXkgc2hpcHMhICR7ZnVsbE5hbWV9IHdpbnMhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdyZXN1bHRzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgXG4gICAgXG4gICAgY2xpY2tSb3RhdGVNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMudHVyblBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBwbGF5ZXIubW9kZWxzW2luZGV4XTsgLy8gZGVidWdcbiAgICAgICAgICAgIERPTS5yZW1vdmVNb2RlbChwbGF5ZXJOYW1lLCBwbGF5ZXIubW9kZWxzW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZU1vZGVsKHBsYXllciwgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgdGhpcy5jbGlja0RlbGV0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGlja0RlbGV0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIGRlbGV0ZSBtb2RlbCwgIHBsYXllcjogJHtwbGF5ZXJOYW1lfSwgaW5kZXg6ICR7aW5kZXh9YCk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDJwaWNrJywgJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocGxheWVyLm1vZGVsc1tpbmRleF0ucGxhY2VkICYmIHRoaXMudHVyblBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBET00ucmVtb3ZlU2hpcChwbGF5ZXJOYW1lLCBwbGF5ZXIuYm9hcmQuc2hpcHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kZWwocGxheWVyLCBpbmRleCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhdGUoJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGAke3BsYXllci5uYW1lfXBpY2tgKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV2ZWFsKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnZ2FtZScpKSByZXR1cm47XG4gICAgICAgIERPTS5yZXZlYWxQbGF5ZXJCb2FyZCh0aGlzLnR1cm5QbGF5ZXIpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnZ2FtZScpKSByZXR1cm47XG4gICAgICAgIERPTS5oaWRlUGxheWVyQm9hcmQodGhpcy50dXJuUGxheWVyKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBzZWxlY3RNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKVxuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgICAgICBtb2RlbC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpLm1vZGVsc1tpbmRleF07XG4gICAgICAgIG1vZGVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gbW9kZWw7XG4gICAgfVxuICAgIGRlbGV0ZU1vZGVsKHBsYXllciwgaW5kZXgpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnNoaXBzW2luZGV4XSA9IG51bGw7XG4gICAgICAgIHBsYXllci5tb2RlbHNbaW5kZXhdLnBsYWNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByb3RhdGVNb2RlbChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIHBsYXllci5tb2RlbHNbaW5kZXhdLnJvdGF0ZSgpO1xuICAgIH1cbiAgICBoaWRlTW9kZWxPcmllbnRhdGlvbihwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgIGlmIChtb2RlbC5zaGlwLnNoYXBlID09PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgbW9kZWwucm90YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG5cbiAgICBwbGFjZU1vZGVsKHgsIHksIHBsYXllciwgbWFudWFsTW9kZWwpIHtcbiAgICAgICAgbGV0IG1vZGVsID0gKG1hbnVhbE1vZGVsIHx8IHRoaXMuc2VsZWN0ZWRNb2RlbCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQuYWRkU2hpcCh4LCB5LCBtb2RlbC5zaGlwLmxlbmd0aCwgbW9kZWwuc2hpcC5zaGFwZSwgbW9kZWwuaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZygncGxhY2luZyBtb2RlbC4uLicsIHJlc3VsdCk7IC8vIERFQlVHXG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgbW9kZWwucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGF1dG9HZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBhdXRvIGdlbmVyYXRpbmcgc2hpcHMgZm9yICR7dGhpcy50dXJuUGxheWVyLm5hbWV9YClcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMudHVyblBsYXllcjtcblxuICAgICAgICB0aGlzLmNsZWFyKHBsYXllcik7XG4gICAgICAgIHBsYXllci5nZW5lcmF0ZU1vZGVscyh0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscykge1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYWNlTW9kZWwoeCwgeSwgcGxheWVyLCBtb2RlbCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKHBsYXllcikge1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwocGxheWVyLm5hbWUsIG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtb2RlbC5wbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBET00ucmVtb3ZlU2hpcChwbGF5ZXIubmFtZSwgcGxheWVyLmJvYXJkLnNoaXBzW21vZGVsLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVNb2RlbChwbGF5ZXIsIG1vZGVsLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE9VVFBVVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgRE9NLnVwZGF0ZUJ1dHRvbnModGhpcy5zdGF0ZSk7XG4gICAgICAgIERPTS51cGRhdGVNb2RlbHModGhpcyk7XG4gICAgICAgIERPTS51cGRhdGVHYW1lYm9hcmQodGhpcyk7XG4gICAgICAgIERPTS51cGRhdGVBY3RpdmVQbGF5ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBnZXRQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKVxuICAgICAgICAgICAgaWYgKHBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuICAgIGdldE90aGVyUGxheWVyKHBsYXllck5hbWUpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpO1xuICAgICAgICBsZXQgb3RoZXJJbmRleCA9IChwbGF5ZXIubmFtZSA9PT0gdGhpcy5wbGF5ZXJzWzBdLm5hbWUpID8gMSA6IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNbb3RoZXJJbmRleF07XG4gICAgfVxuICAgIHN3aXRjaFBsYXllcigpIHtcbiAgICAgICAgbGV0IG90aGVySW5kZXggPSAodGhpcy50dXJuUGxheWVyLmluZGV4ID09PSAwKSA/IDEgOiAwO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnBsYXllcnNbb3RoZXJJbmRleF07XG4gICAgfVxuXG4gICAgaXNTdGF0ZShzdGF0ZUFyZ3MpIHtcbiAgICAgICAgZm9yIChsZXQgc3RhdGUgb2YgYXJndW1lbnRzKVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHN0YXRlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBHYW1lX29sZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucDEgPSBuZXcgUGxheWVyKCdwMScpO1xuICAgICAgICB0aGlzLnAyID0gbmV3IFBsYXllcigncDInKTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IG51bGw7IC8vIHJlbW92ZVxuICAgICAgICB0aGlzLmFjdGl2ZU1vZGVsID0gbnVsbDtcbiAgICAgICAgRE9NLmNyZWF0ZUJvYXJkKGJvYXJkTm9kZTEsIHRoaXMsIHRoaXMucDEpO1xuICAgICAgICBET00uY3JlYXRlQm9hcmQoYm9hcmROb2RlMiwgdGhpcywgdGhpcy5wMik7XG4gICAgICAgIERPTS5jcmVhdGVNb2RlbHModGhpcywgdGhpcy5wMSk7IC8vIFRPRE9cbiAgICAgICAgRE9NLmNyZWF0ZU1vZGVscyh0aGlzLCB0aGlzLnAyKTsgLy8gVE9ET1xuICAgICAgICBET00uc2V0U2hpcFNlbGVjdCh0aGlzKTtcbiAgICAgICAgRE9NLnNldEJ1dHRvbnModGhpcyk7XG5cbiAgICAgICAgLy8gJ3N0YXJ0JywgJ3AxcGljaycsICdwMUNvbmZpcm0nLCAncDJwaWNrJywgJ3AyQ29uZmlybScsICdnYW1lJywgJ3Jlc3Vsc3QnO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0JztcbiAgICAgICAgRE9NLnBvc3QoJ1NlbGVjdCBnYW1lIG1vZGUnKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coYCVjbmV3IHN0YXRlOiAlYyR7c3RhdGV9YCwgJycsICdjb2xvcjogZ29sZGVucm9kOyBmb250LXdlaWdodDogYm9sZCcpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wMS5ib2FyZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucDIuYm9hcmQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBET00ucmVzZXRTaGlwU2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxcGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWwodGhpcy5wMSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIHNlbGVjdCB5b3VyIHNoaXBzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMUNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgY29uZmlybSB5b3VyIHNoaXAgcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMnBpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsKHRoaXMucDIpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDI7XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAyLCBzZWxlY3QgeW91ciBzaGlwcycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJDb25maXJtJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDIsIGNvbmZpcm0geW91ciBzaGlwIHBsYWNlbWVudCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2FtZSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1N0YXJ0IHRoZSBnYW1lISBQbGF5ZXIgMSwgYXR0YWNrIGEgc3F1YXJlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVzdWx0cyc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgRE9NLnVwZGF0ZUJ1dHRvbnMoc3RhdGUpO1xuICAgIH1cblxuICAgIHN0YXJ0KHR5cGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHt0eXBlfWArJyAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAnc3RhcnQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3R3b1BsYXllcicpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMXBpY2snKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnJWNjb25maXJtICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwMUNvbmZpcm0nKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDJwaWNrJyk7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdwMkNvbmZpcm0nKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnZ2FtZScpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaWRpbmcgcGxheWVyIHNoaXBzJyk7XG4gICAgICAgIERPTS5oaWRlKGJvYXJkTm9kZTEsIGJvYXJkTm9kZTIpO1xuICAgIH1cbiAgICByZXZlYWwocGxheWVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZXZlYWxpbmcgJWMke3BsYXllci5uYW1lfSdzIHNoaXBzYCwgJ2NvbG9yOiBza3libHVlJyk7XG4gICAgICAgIGxldCBib2FyZE5vZGUgPSAocGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyBib2FyZE5vZGUxIDogYm9hcmROb2RlMjtcbiAgICAgICAgRE9NLnJldmVhbChib2FyZE5vZGUpO1xuICAgIH1cbiAgICBwZWVrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgUGVla2luZyBhdCAke3RoaXMudHVyblBsYXllci5uYW1lfSdzIHNoaXBzYCk7XG4gICAgfVxuXG4gICAgYXV0b0dlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyVjYXV0b0dlbiAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwMXBpY2snKSB7XG4gICAgICAgICAgICB0aGlzLnAxLmJvYXJkLmdlbkRlZmF1bHRTaGlwcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFDb25maXJtJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AycGljaycpIHtcbiAgICAgICAgICAgIHRoaXMucDIuYm9hcmQuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMkNvbmZpcm0nKTtcbiAgICAgICAgfSBlbHNlIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGdlbjogJywgdGhpcy5wMSk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gfVxuXG4gICAgc3F1YXJlQ2xpY2tlZCh4LCB5LCBuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIHg6JWMke3h9JWMgeTolYyR7eX0lYyB8IGJvYXJkOiAlYyR7bmFtZX0lYyB8IHR1cm46ICR7dGhpcy50dXJuUGxheWVyLm5hbWV9YCxcbiAgICAgICAgICAgICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBgJHtuYW1lfXBpY2tgKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmFjdGl2ZU1vZGVsLm1vZGVsO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCB0aGlzIGZhcicpOyAvLyBERUJVR1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVNb2RlbCAmJiAhbW9kZWwucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcDogJywgbW9kZWwpOyAvLyBERUJVR1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50dXJuUGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgbW9kZWwuc2hpcC5zZWdtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdmYWlsdXJlJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50U2hpcC5jYWxsYmFjaygpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgbW9kZWwucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGVsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHVyblBsYXllci5ib2FyZC5zaGlwcy5sZW5ndGggPj0gNSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShgJHtuYW1lfUNvbmZpcm1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gYCR7bmFtZX1waWNrYCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoaXAgJiYgIXRoaXMuY3VycmVudFNoaXAudXNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGFjaW5nIHNoaXA6ICcsIHRoaXMuY3VycmVudFNoaXApO1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHVyblBsYXllci5ib2FyZC5hZGRTaGlwKHgsIHksIHRoaXMuY3VycmVudFNoaXAubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXAuY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHVyblBsYXllci5ib2FyZC5zaGlwcy5sZW5ndGggPj0gNSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShgJHtuYW1lfUNvbmZpcm1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPSAnZ2FtZScpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMudHVyblBsYXllci5uYW1lID09PSBuYW1lKVxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiRXJyb3I6IGNsaWNrIG90aGVyIHBsYXllcidzIGJvYXJkXCIpO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMuZ2V0T3RoZXJQbGF5ZXIobmFtZSkuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlOiAnLCByZXNwb25zZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgc3dpdGNoIChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5IHNxdWFyZSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIGhpdCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIHN1bmsnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnOlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3Jlc3VsdHMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gICAgICAgIGxldCBuYW1lU3RyaW5nID0gKHRoaXMudHVyblBsYXllciA9PT0gdGhpcy5wMSkgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgRE9NLnBvc3QoYCR7bmFtZVN0cmluZ30sIGF0dGFjayBhIHNxdWFyZWApO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgc2hpcExhYmVsQ2xpY2tlZChwbGF5ZXJOYW1lLCBpbmRleCwgdHlwZSwgdXNlZCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgc2hpcCBpbmRleDolYyR7aW5kZXh9JWMgdHlwZTolYyR7dHlwZX0lYyB8IHBsYXllcjogJWMke3BsYXllck5hbWV9YCxcbiAgICAgICAgICAgICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcpO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IHtsZW5ndGg6IE51bWJlcih0eXBlKSwgdXNlZDogdXNlZCwgY2FsbGJhY2s6IGNhbGxiYWNrfTtcbiAgICB9XG5cbiAgICBzaGlwTW9kZWxDbGlja2VkKHBsYXllciwgaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgbW9kZWwgaW5kZXg6JWMke2luZGV4fSVjfCBwbGF5ZXI6ICVjJHtwbGF5ZXIubmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVNb2RlbCA9IHttb2RlbDogcGxheWVyLmJvYXJkLm1vZGVsc1tpbmRleF0sIHBsYXllcjogcGxheWVyfTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZSBtb2RlbDogJywgdGhpcy5hY3RpdmVNb2RlbCk7XG5cblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTaGlwID0ge2xlbmd0aDogTnVtYmVyKHR5cGUpLCB1c2VkOiB1c2VkLCBjYWxsYmFjazogY2FsbGJhY2t9O1xuICAgIH1cblxuXG4gICAgc3dpdGNoUGxheWVyKCkge1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyB0aGlzLnAyIDogdGhpcy5wMTtcbiAgICB9XG4gICAgZ2V0UGxheWVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IHRoaXMucDEgOiB0aGlzLnAyO1xuICAgIH1cbiAgICBnZXRPdGhlclBsYXllcihuYW1lKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyB0aGlzLnAyIDogdGhpcy5wMTtcbiAgICB9XG4gXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBET00udXBkYXRlQm9hcmQoYm9hcmROb2RlMSwgdGhpcy5wMSk7XG4gICAgICAgIERPTS51cGRhdGVCb2FyZChib2FyZE5vZGUyLCB0aGlzLnAyKTtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzLCB0aGlzLnAxKTtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzLCB0aGlzLnAyKTtcbiAgICAgICAgRE9NLnVwZGF0ZUN1cnJlbnRQbGF5ZXIodGhpcy50dXJuUGxheWVyKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoNSkpO1xuICAgICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmdlbkRlZmF1bHRNb2RlbHMoKTtcbiAgICAgICAgLy8gdGhpcy5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICB9XG5cbiAgICBhZGRTaGlwKHgsIHksIGxlbmd0aCA9IDEsIHNoYXBlID0gJ3ZlcnRpY2FsJywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoeCwgeSkpXG4gICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBvdXQgb2YgYm91bmRzJ307XG4gICAgICAgIFxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGlmIChpc091dE9mQm91bmRzKHNlZ21lbnQueCwgc2VnbWVudC55KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBleHRlbmRzIG91dCBvZiBib3VuZHMnfTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcDIgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgICAgIGlmICghc2hpcDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNoaXAyLnNlZ21lbnRzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudDEueCA9PSBzZWdtZW50Mi54ICYmIHNlZ21lbnQxLnkgPT0gc2VnbWVudDIueSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIGludGVyc2VjdHMgb3RoZXIgc2hpcCd9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdID0gc2hpcDtcbiAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJ307XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBzRnVsbCgpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgYWRkTW9kZWwoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoeCwgeSwgbGVuZ3RoLCBzaGFwZSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbHMucHVzaCh7c2hpcDogc2hpcCwgaW5kZXg6IG51bGwsIHBsYWNlZDogZmFsc2UsIHN1bms6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGhpdCBvZiB0aGlzLmhpdHMpXG4gICAgICAgICAgICBpZiAoaGl0LnggPT0geCAmJiBoaXQueSA9PSB5KVxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzcXVhcmUgYWxyZWFkeSBoaXQnfTtcblxuICAgICAgICB0aGlzLmhpdHMucHVzaCh7eCwgeX0pO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VtcHR5IHNxdWFyZSd9O1xuXG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQueCA9PSB4ICYmIHNlZ21lbnQueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9ICdlbmVteSBzaGlwIGhpdCc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYXJlU2hpcHNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgPSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgPSAnZW5lbXkgc2hpcCBzdW5rJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdFNoaXBzKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYWRkU2hpcCgxLCAxLCAyLCAndmVydGljYWwnLCAwKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDMsIDMsIDIsICd2ZXJ0aWNhbCcsIDEpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoNSwgNSwgMiwgJ3ZlcnRpY2FsJywgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg3LCA3LCAyLCAndmVydGljYWwnLCAzKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDksIDQsIDIsICd2ZXJ0aWNhbCcsIDQpO1xuICAgIH1cblxuICAgIGdlbkRlZmF1bHRNb2RlbHMoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMik7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNCk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMubW9kZWxzW2ldLmluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzT3V0T2ZCb3VuZHMoeCwgeSkge1xuICAgIHJldHVybiAoeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCk7XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCB0eXBlKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBBcnJheSg1KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU1vZGVscygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTW9kZWxzKHJhbmRvbVNoYXBlcyA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGxldCBsZW5ndGhzID0gWzEsIDIsIDEsIDEsIDFdO1xuICAgICAgICBsZXQgbGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNTsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHNoYXBlID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGlmIChyYW5kb21TaGFwZXMpXG4gICAgICAgICAgICAgICAgc2hhcGUgPSAoTWF0aC5yYW5kb20oKSAqIDIgPj0gMSkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgdGhpcy5tb2RlbHNbaW5kZXhdID0gbmV3IE1vZGVsKHRoaXMubmFtZSwgbGVuZ3Roc1tpbmRleF0sIGluZGV4LCBzaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldE1vZGVscygpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU1vZGVscygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bmtNb2RlbHMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5ib2FyZC5zaGlwc1tpXTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxzW2ldLnN1bmsgPSBzaGlwLmlzU3VuaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocGxheWVyTmFtZSwgbGVuZ3RoLCBpbmRleCwgc2hhcGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFNoaXAoMCwgMCwgbGVuZ3RoLCBzaGFwZSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5yZWNlbnRlcigpO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7c2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsIHBsYWNlZDogdGhpcy5wbGFjZWQsIHN1bms6IHRoaXMuc3Vua307XG4gICAgfVxuICAgIHJvdGF0ZSgpIHtcbiAgICAgICAgbGV0IG5ld1NoYXBlID0gKHRoaXMuc2hpcC5zaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgU2hpcCh0aGlzLnNoaXAueCwgdGhpcy5zaGlwLnksIHRoaXMuc2hpcC5sZW5ndGgsIG5ld1NoYXBlKTtcbiAgICAgICAgdGhpcy5yZWNlbnRlcigpO1xuICAgIH1cbiAgICByZWNlbnRlcigpIHtcbiAgICAgICAgbGV0IGxlZnRvdmVyV2lkdGggPSA1IC0gdGhpcy5zaGlwLndpZHRoO1xuICAgICAgICBsZXQgbGVmdG92ZXJIZWlnaHQgPSA1IC0gdGhpcy5zaGlwLmhlaWdodDtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5mbG9vcihsZWZ0b3ZlcldpZHRoIC8gMik7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGguZmxvb3IobGVmdG92ZXJIZWlnaHQgLyAyKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHggPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gMCA6IGk7XG4gICAgICAgICAgICBsZXQgZHkgPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gaSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2gobmV3IFNlZ21lbnQoeCArIGR4LCB5ICsgZHkpKTtcbiAgICAgICAgfVxuICAgICAgICBhZGp1c3RDb3JuZXJzKHRoaXMuc2VnbWVudHMpO1xuICAgIH1cbiAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBcbiAgICAgICAgICAgIHByZXYgKz0gKGN1cnIuaXNIaXQpID8gMSA6IDAsIDApO1xuICAgIH1cbiAgICBoaXQoeCwgeSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBzZWdtZW50LnggJiYgeSA9PSBzZWdtZW50LnkpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N1bmsoKSkgLy8gVE9ETzogdGVzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiBzZWdtZW50LnN1bmsgPSB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtyZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLnNlZ21lbnRzLmxlbmd0aCl9XG4gICAgLy8gc3RhdGljIGNvcHlGcm9tKHNoaXAsIHgsIHkpIHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBTaGlwKHgsIHksIHNoaXAubGVuZ3RoLCBzaGlwLnNoYXBlKTtcbiAgICAvLyB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5zZWdtZW50cy5tYXAoc2VnbWVudCA9PiBzZWdtZW50LngpO1xuICAgICAgICBsZXQgbWluID0gYXJyLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7cmV0dXJuIChjdXIgPCBwcmV2KSA/IGN1ciA6IHByZXY7fSwgMCk7XG4gICAgICAgIGxldCBtYXggPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA+IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgcmV0dXJuIG1heCAtIG1pbiArIDE7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQueSk7XG4gICAgICAgIGxldCBtaW4gPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA8IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgbGV0IG1heCA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyID4gcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICByZXR1cm4gbWF4IC0gbWluICsgMTtcbiAgICB9XG59XG5cbmNsYXNzIFNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7IC8vIFRPRE86IGF1dG8gdXBkYXRlXG4gICAgICAgIHRoaXMuY29ybmVyVEwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JuZXJUUiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcm5lckJMID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ybmVyQlIgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGJvb2xzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGl0OiB0aGlzLmhpdCxcbiAgICAgICAgICAgIHN1bms6IHRoaXMuc3VuayxcbiAgICAgICAgICAgIGNvcm5lclRMOiB0aGlzLmNvcm5lclRMLFxuICAgICAgICAgICAgY29ybmVyVFI6IHRoaXMuY29ybmVyVFIsXG4gICAgICAgICAgICBjb3JuZXJCTDogdGhpcy5jb3JuZXJCTCxcbiAgICAgICAgICAgIGNvcm5lckJSOiB0aGlzLmNvcm5lckJSLFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGp1c3RDb3JuZXJzKHNlZ21lbnRzKSB7XG4gICAgZm9yIChsZXQgc2VnbWVudDEgb2Ygc2VnbWVudHMpIHtcbiAgICAgICAgbGV0IHgxID0gc2VnbWVudDEueDtcbiAgICAgICAgbGV0IHkxID0gc2VnbWVudDEueTtcbiAgICAgICAgZm9yIChsZXQgc2VnbWVudDIgb2Ygc2VnbWVudHMpIHtcbiAgICAgICAgICAgIGxldCB4MiA9IHNlZ21lbnQyLng7XG4gICAgICAgICAgICBsZXQgeTIgPSBzZWdtZW50Mi55O1xuICAgICAgICAgICAgaWYgKHgyID09IHgxLTEgJiYgeTIgPT0geTEpIHsgLy8gdG8gdGhlIGxlZnQgb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQkwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDErMSAmJiB5MiA9PSB5MSkgeyAvLyB0byB0aGUgcmlnaHQgb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUUiA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQlIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDEgJiYgeTIgPT0geTEtMSkgeyAvLyB0byB0aGUgdG9wIG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVEwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRSID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHgyID09IHgxICYmIHkyID09IHkxKzEpIHsgLy8gdG8gdGhlIGJvdHRvbSBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=