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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-rows: 1fr min-content max-content 1fr;\n    grid-template-areas: \".\" \"info\" \"boards\" \".\";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n#info {\n    grid-area: info;\n    align-self: end;\n    width: 50vw;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"buttons logs\";\n    gap: 20px;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n    cursor: inherit;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n    align-self: start;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-rows: 1fr min-content max-content 1fr;\n    grid-template-areas: \".\" \"info\" \"boards\" \".\";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n#info {\n    grid-area: info;\n    align-self: end;\n    width: 50vw;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"buttons logs\";\n    gap: 20px;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n    cursor: inherit;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n    align-self: start;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url('assets/rotate.svg');\n    mask-image: url('assets/rotate.svg');\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url('assets/delete.svg');\n    mask-image: url('assets/delete.svg');\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _assets_sonar_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sonar.mp3 */ "./src/assets/sonar.mp3");
/* harmony import */ var _assets_splash_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/splash.mp3 */ "./src/assets/splash.mp3");
/* harmony import */ var _assets_thump_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/thump.mp3 */ "./src/assets/thump.mp3");






const sonar = new Audio(_assets_sonar_mp3__WEBPACK_IMPORTED_MODULE_2__);
const splash = new Audio(_assets_splash_mp3__WEBPACK_IMPORTED_MODULE_3__);
const thump = new Audio(_assets_thump_mp3__WEBPACK_IMPORTED_MODULE_4__);
sonar.play(); 


// const boardNode1 = document.querySelector('.board.player1');
// const boardNode2 = document.querySelector('.board.player2');

class Game {
    constructor() {
        this.players = [new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p1', 0, 'player'), 
                        new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('p2', 1, 'player')];
        console.log('DEBUG: players ', this.players); // DEBUG
        this.delayed = false;
        this.turnPlayer = null;
        this.selectedModel = null;
        // TODO: consolidate pick/confirm
        // p1pick, p1confirm, p2pick, p2confirm, game, result, aipick?
        this.state = null; 
        
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setButtons(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setModels(this);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].setGameboard(this);
        this.updateState('start');

        this.setDelay(600);
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
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 2, please place your ships.')
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].hidePlayerBoard(this.players[0]);
                this.turnPlayer = this.players[1];
                if (this.isComputer()) {
                    console.log("auto generating computer's ships..."); // debug
                    this.selectAutoGen();
                }
                break;
            case 'p2confirm':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('Player 2, press confirm to finalize ship placement.')
                if (this.isComputer()) {
                    console.log("auto confirming computer's ships..."); // debug
                    this.selectConfirm();
                }
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
        if (this.delayed) return;
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
                        splash.play(); // TODO
                        this.switchPlayer();

                        if (this.turnPlayer.name === 'p2' && this.isComputer()) {
                            console.log("auto attacking on computer's turn");
                            this.update();
                            this.autoAttack();
                            return;
                        }
                        break;
                    case 'enemy ship hit':
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} has hit a ship!`);
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`${fullName}, continue attacking.`);
                        thump.play();
                        break;
                    case 'enemy ship sunk':
                        player.updateSunkModels();
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} has sunk a ship!`);
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`${fullName}, continue attacking.`);
                        thump.play();
                        break;
                    case 'all enemy ships sunk':
                        player.updateSunkModels();
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} has sunk all enemy ships! ${fullName} wins!`);
                        this.updateState('results');
                        thump.play(); // TODO
                        return;
                }
                this.update();
            }
        }
    }   
    
    async autoAttack() {
        let response = {status: 'failure', result: null};
        while (response.result !== 'empty square') {
            response = await this.attackAndWait();
            switch(response.result) {
                case 'empty square':
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computer missed!`);
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`Player 1, attack the enemy board.`);
                    this.switchPlayer();
                    this.update();
                    break;
                case 'enemy ship hit':
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computer has hit a ship!`);
                    this.update();
                    break;
                case 'enemy ship sunk':
                    this.players[0].updateSunkModels();
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computer has sunk a ship!`);
                    this.update();
                    break;
                case 'all enemy ships sunk':
                    this.players[0].updateSunkModels();
                    _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computerhas sunk all enemy ships! The computer wins!`);
                    this.updateState('results');
                    return;
            }
        }
    }

    async attackAndWait() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let response = {status: 'failure'};
                while (response.status === 'failure') {
                    let x = this.rand10();
                    let y = this.rand10();
                    response = this.players[0].board.receiveAttack(x, y);
                    console.log(`auto attacking at ${x},${y} response:`, response);
                }
                resolve(response);
            }, 1000);
        });
    }

    autoAttack_OLD() { // TODO: DELETE
        // filter hits to one with ships but unsunk
        // if none, then try random
        this.setDelay(700); // change
        let response = {status: 'failure'};

        while (response.status === 'failure') {
            let x = Math.ceil((Math.random() * 10));
            let y = Math.ceil((Math.random() * 10));
            response = this.players[0].board.receiveAttack(x, y);
            console.log(`auto attacking at ${x},${y} response:`, response);
        }
        switch(response.result) {
            case 'empty square':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computer missed!`);
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`Player 1, attack the enemy board.`);
                this.switchPlayer();
                this.update();
                break;
            case 'enemy ship hit':
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computer has hit a ship!`);
                this.update();
                // TODO: set timeout
                this.autoAttack();
                break;
            case 'enemy ship sunk':
                this.players[0].updateSunkModels();
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computer has sunk a ship!`);
                this.update();
                // TODO: set timeout
                this.autoAttack();
                break;
            case 'all enemy ships sunk':
                this.players[0].updateSunkModels();
                _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`The computerhas sunk all enemy ships! The computer wins!`);
                this.updateState('results');
                return;
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
            sonar.play(); // TODO:
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
    isComputer() {
        return (this.players[1].type === 'computer')
    }

    rand10() {
        return Math.ceil(Math.random()*10);
    }

    setDelay(ms) {
        this.delayed = true;
        thump.play(); // TODO: change
        document.body.style.cursor = 'progress';
        setTimeout(() => {
            this.delayed = false;
            document.body.style.cursor = 'default';
        }, ms);
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

module.exports = __webpack_require__.p + "delete.svg";

/***/ }),

/***/ "./src/assets/rotate.svg":
/*!*******************************!*\
  !*** ./src/assets/rotate.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rotate.svg";

/***/ }),

/***/ "./src/assets/sonar.mp3":
/*!******************************!*\
  !*** ./src/assets/sonar.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sonar.mp3";

/***/ }),

/***/ "./src/assets/splash.mp3":
/*!*******************************!*\
  !*** ./src/assets/splash.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "splash.mp3";

/***/ }),

/***/ "./src/assets/thump.mp3":
/*!******************************!*\
  !*** ./src/assets/thump.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "thump.mp3";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1E7O0FBRTdCLGlCQUFpQixnREFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3JvdGF0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWluZGlnby1saWdodGVyOiAjMDUwNTA3ODg7XFxuICAgIC0tYWNjZW50OiAjMEU3NDkwO1xcbiAgICAtLWRhcmtBbWJlcjogIzQ1MWEwMztcXG4gICAgLS1kYXJrVmlvbGV0OiAjMmUxMDY1O1xcbiAgICAtLWRhcmtSZWQ6ICM0NTBhMGE7XFxuXFxuICAgIC0tYWN0aXZlLWJvYXJkLWJnOiBkYXJrc2VhZ3JlZW47XFxuXFxuICAgIC0tcm90YXRlOiAjMWUxYjRiO1xcbiAgICAtLXJvdGF0ZS1saWdodGVyOiAjMTBiOTgxOyAvKiBFbWVyYWxkIDUwMCAqL1xcbiAgICAtLWRlbGV0ZTogIzFlMWI0YjtcXG4gICAgLS1kZWxldGUtbGlnaHRlcjogI2I5MWMxYzsgLyogUmVkIDcwMCAqL1xcblxcbiAgICAtLWJvcmRlci1nbG93OiAjMjJkM2VlOyAvKiBDeWFuIDQwMCovXFxufVxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IG1pbigxOHB4LCAydncpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudCBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuXFxcIiBcXFwiaW5mb1xcXCIgXFxcImJvYXJkc1xcXCIgXFxcIi5cXFwiO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuI2luZm8ge1xcbiAgICBncmlkLWFyZWE6IGluZm87XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJidXR0b25zIGxvZ3NcXFwiO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC1zaXplOiAgMS41dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgY3Vyc29yOiBpbmhlcml0O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IExvZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNsb2dzIHtcXG4gICAgZ3JpZC1hcmVhOiBsb2dzO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYm9hcmRzIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZHM7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbkBtZWRpYShtaW4tYXNwZWN0LXJhdGlvOiAxKSB7XFxuICAgIC5ib2FyZC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIDFmciBtaW4tY29udGVudDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtb2RlbHMxIGJvYXJkMSBib2FyZDIgbW9kZWxzMlxcXCI7XFxuICAgIFxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMXZ3O1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWF4LWFzcGVjdC1yYXRpbzogMSkge1xcbiAgICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciAgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgICAgICBcXFwibW9kZWxzMSBib2FyZDEgYm9hcmQxXFxcIiBcXG4gICAgICAgICAgICBcXFwiYm9hcmQyIGJvYXJkMiBtb2RlbHMyXFxcIjtcXG4gICAgICAgIGdhcDogMXZ3O1xcbiAgICB9XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09IE1vZGVsIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ubW9kZWxib2FyZC1jb250YWluZXJbZGF0YS1wbGF5ZXI9XFxcInAxXFxcIl0ge2dyaWQtYXJlYTogbW9kZWxzMX1cXG4ubW9kZWxib2FyZC1jb250YWluZXJbZGF0YS1wbGF5ZXI9XFxcInAyXFxcIl0ge2dyaWQtYXJlYTogbW9kZWxzMn1cXG4ubW9kZWxib2FyZC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDAwO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3cpO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gYm9hcmRcXFwiIFxcXCIuIGJvYXJkXFxcIjtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG4ubW9kZWwtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJib2FyZCAuXFxcIiBcXFwiYm9hcmQgLlxcXCI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgSWNvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IG1pbigyMHB4LCAydncpO1xcbiAgICB3aWR0aDogbWluKDIwcHgsIDJ2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZWQ7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuXFxuIFxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaWNvbi5yb3RhdGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdGF0ZSk7XFxufVxcbi5pY29uLmRlbGV0ZSB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlKTtcXG59XFxuW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdPi5pY29uLmRlbGV0ZSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt9XFxuLmljb24ucm90YXRlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUtbGlnaHRlcik7fVxcbi5pY29uLmRlbGV0ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWxpZ2h0ZXIpO31cXG4uaWNvbjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjVmNWY1YmI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5tb2RlbGJvYXJkLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggI2Y1ZjVmNTtcXG59XFxuLm1vZGVsYm9hcmQuc3VuayB7Ym9yZGVyLWNvbG9yOiAjZmY0NTAwYmI7fVxcbi5tb2RlbHNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY2O1xcbn1cXG4ubW9kZWxzcXVhcmUuc2hpcCB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvLWxpZ2h0ZXIpO31cXG4ubW9kZWxib2FyZC5wbGFjZWQ+Lm1vZGVsc3F1YXJlLnNoaXAge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMX1cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMn1cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmdhbWVib2FyZC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLmdhbWVib2FyZD4qIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1iZyk7XFxufVxcbi5zaGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRMKSB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRSKSB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQkwpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCTCkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQlIpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCUikge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7O0lBRWxCLCtCQUErQjs7SUFFL0IsaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFFLGdCQUFnQjtJQUMzQyxpQkFBaUI7SUFDakIseUJBQXlCLEVBQUUsWUFBWTs7SUFFdkMsc0JBQXNCLEVBQUUsWUFBWTtBQUN4QztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTOztJQUVULDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0NBQWtD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WUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0Esc0VBQXNFOztBQUV0RTs7SUFFSSw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkM7QUFDQTs7SUFFSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1pbmRpZ28tbGlnaHRlcjogIzA1MDUwNzg4O1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG4gICAgLS1kYXJrQW1iZXI6ICM0NTFhMDM7XFxuICAgIC0tZGFya1Zpb2xldDogIzJlMTA2NTtcXG4gICAgLS1kYXJrUmVkOiAjNDUwYTBhO1xcblxcbiAgICAtLWFjdGl2ZS1ib2FyZC1iZzogZGFya3NlYWdyZWVuO1xcblxcbiAgICAtLXJvdGF0ZTogIzFlMWI0YjtcXG4gICAgLS1yb3RhdGUtbGlnaHRlcjogIzEwYjk4MTsgLyogRW1lcmFsZCA1MDAgKi9cXG4gICAgLS1kZWxldGU6ICMxZTFiNGI7XFxuICAgIC0tZGVsZXRlLWxpZ2h0ZXI6ICNiOTFjMWM7IC8qIFJlZCA3MDAgKi9cXG5cXG4gICAgLS1ib3JkZXItZ2xvdzogIzIyZDNlZTsgLyogQ3lhbiA0MDAqL1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBtaW4oMThweCwgMnZ3KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLlxcXCIgXFxcImluZm9cXFwiIFxcXCJib2FyZHNcXFwiIFxcXCIuXFxcIjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiNpbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiBpbmZvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYnV0dG9ucyBsb2dzXFxcIjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGN1cnNvcjogaW5oZXJpdDtcXG59XFxuYnV0dG9uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSguNSk7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGdyaWQtYXJlYTogbG9ncztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmRzO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEobWluLWFzcGVjdC1yYXRpbzogMSkge1xcbiAgICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibW9kZWxzMSBib2FyZDEgYm9hcmQyIG1vZGVsczJcXFwiO1xcbiAgICBcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC1hc3BlY3QtcmF0aW86IDEpIHtcXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAgICAgXFxcIm1vZGVsczEgYm9hcmQxIGJvYXJkMVxcXCIgXFxuICAgICAgICAgICAgXFxcImJvYXJkMiBib2FyZDIgbW9kZWxzMlxcXCI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczF9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczJ9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuIGJvYXJkXFxcIiBcXFwiLiBib2FyZFxcXCI7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYm9hcmQgLlxcXCIgXFxcImJvYXJkIC5cXFwiO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVsIEljb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjBweCwgMnZ3KTtcXG4gICAgd2lkdGg6IG1pbigyMHB4LCAydncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmVkO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcblxcbiBcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmljb24ucm90YXRlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9yb3RhdGUuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3JvdGF0ZS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm90YXRlKTtcXG59XFxuLmljb24uZGVsZXRlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9kZWxldGUuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2RlbGV0ZS5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlKTtcXG59XFxuW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdPi5pY29uLmRlbGV0ZSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt9XFxuLmljb24ucm90YXRlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUtbGlnaHRlcik7fVxcbi5pY29uLmRlbGV0ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWxpZ2h0ZXIpO31cXG4uaWNvbjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjVmNWY1YmI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5tb2RlbGJvYXJkLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggI2Y1ZjVmNTtcXG59XFxuLm1vZGVsYm9hcmQuc3VuayB7Ym9yZGVyLWNvbG9yOiAjZmY0NTAwYmI7fVxcbi5tb2RlbHNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY2O1xcbn1cXG4ubW9kZWxzcXVhcmUuc2hpcCB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvLWxpZ2h0ZXIpO31cXG4ubW9kZWxib2FyZC5wbGFjZWQ+Lm1vZGVsc3F1YXJlLnNoaXAge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMX1cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMn1cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmdhbWVib2FyZC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLmdhbWVib2FyZD4qIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1iZyk7XFxufVxcbi5zaGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRMKSB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRSKSB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQkwpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCTCkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQlIpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCUikge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSB7fTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcblxuRE9NLnNldE1vZGVscyA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ21vZGVsYm9hcmQnXSkpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCA1OyB5KyspXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKylcbiAgICAgICAgICAgICAgICBjcmVhdGVEaXYoYm9hcmROb2RlLCBbJ21vZGVsc3F1YXJlJ10sIFxuICAgICAgICAgICAgICAgICAgICB7eDogeCwgeTogeSwgcGxheWVyOiBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIsIGluZGV4OiBib2FyZE5vZGUuZGF0YXNldC5pbmRleH0pO1xuXG4gICAgICAgIGJvYXJkTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW1lLmNsaWNrTW9kZWwoYm9hcmROb2RlLmRhdGFzZXQucGxheWVyLCBib2FyZE5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0oKTtcblxuICAgICAgICBsZXQgY29udGFpbmVyTm9kZSA9IGJvYXJkTm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb250YWluZXJOb2RlLmRhdGFzZXQucGxheWVyID0gYm9hcmROb2RlLmRhdGFzZXQucGxheWVyO1xuXG4gICAgICAgIGxldCByb3RhdGVOb2RlID0gY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnaWNvbicsICdyb3RhdGUnXSwgbnVsbCk7XG4gICAgICAgIGxldCBkZWxldGVOb2RlID0gY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnaWNvbicsICdkZWxldGUnXSwgbnVsbCk7XG4gICAgICAgIHJvdGF0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja1JvdGF0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG4gICAgICAgIGRlbGV0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja0RlbGV0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG5cbiAgICB9XG59XG5cbkRPTS51cGRhdGVNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmROb2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxib2FyZCddLCB7cGxheWVyOiBwbGF5ZXIubmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4fSk7XG4gICAgICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCBtb2RlbC5ib29scyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2YgbW9kZWwuc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBbJ21vZGVsc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlZ21lbnQueCArIG1vZGVsLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWdtZW50LnkgKyBtb2RlbC5vZmZzZXRZLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjogcGxheWVyLm5hbWUsIGluZGV4OiBtb2RlbC5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRDbGFzc2xpc3Qobm9kZSwgey4uLnNlZ21lbnQuYm9vbHMsIHNoaXA6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBsZXQgdHVyblBsYXllck5hbWUgPSAoZ2FtZS50dXJuUGxheWVyKSA/IGdhbWUudHVyblBsYXllci5uYW1lIDogJ24vYSc7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydtb2RlbGJvYXJkLWNvbnRhaW5lciddKSkge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSAoZ2FtZS50dXJuUGxheWVyICYmIHR1cm5QbGF5ZXJOYW1lID09PSBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCB7YWN0aXZlOiBpc0FjdGl2ZX0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ2dhbWVib2FyZCddKSkge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSAoZ2FtZS50dXJuUGxheWVyICYmIHR1cm5QbGF5ZXJOYW1lID09PSBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCB7YWN0aXZlOiBpc0FjdGl2ZX0pO1xuICAgIH1cbn1cblxuRE9NLnNldEdhbWVib2FyZCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ2dhbWVib2FyZCddKSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDExOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTE7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmICh4ID09IDAgJiYgeSA9PSAwKSBjcmVhdGVEaXYoYm9hcmROb2RlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID09IDApIGNyZWF0ZVRleHREaXYoYm9hcmROb2RlLCB5KVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHkgPT0gMCkgY3JlYXRlVGV4dERpdihib2FyZE5vZGUsIHgpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZURpdihib2FyZE5vZGUsIFsnc3F1YXJlJywgJ3Rlc3QnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5LCBwbGF5ZXI6IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcn0pO1xuICAgICAgICAgICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuY2xpY2tTcXVhcmUoeCwgeSwgYm9hcmROb2RlLmRhdGFzZXQucGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUdhbWVib2FyZCA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgZ2FtZS5wbGF5ZXJzKSB7XG4gICAgICAgIGlmICghcGxheWVyLmJvYXJkLnNoaXBzKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgcGxheWVyLmJvYXJkLnNoaXBzKSB7XG4gICAgICAgICAgICBpZiAoIXNoaXApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ3NxdWFyZSddLFxuICAgICAgICAgICAgICAgICAgICB7eDogc2VnbWVudC54LCB5OiBzZWdtZW50LnksIHBsYXllcjogcGxheWVyLm5hbWV9KTtcbiAgICAgICAgICAgICAgICBzZXRDbGFzc2xpc3Qobm9kZSwgey4uLnNlZ21lbnQuYm9vbHMsIHNoaXA6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgZ2FtZS5wbGF5ZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGhpdCBvZiBwbGF5ZXIuYm9hcmQuaGl0cykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgICAgICB7eDogaGl0LngseTogaGl0LnkscGxheWVyOiBwbGF5ZXIubmFtZX0pO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSAneCc7IC8vIFRPRE86IGNoYW5nZVxuICAgICAgICB9XG4gICAgfVxufVxuRE9NLnJlbW92ZU1vZGVsID0gZnVuY3Rpb24ocGxheWVyTmFtZSwgbW9kZWwpIHtcbiAgICBmb3IgKGxldCBzZWdtZW50IG9mIG1vZGVsLnNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydtb2RlbHNxdWFyZSddLCB7XG4gICAgICAgICAgICB4OiBzZWdtZW50LnggKyBtb2RlbC5vZmZzZXRYLHk6IHNlZ21lbnQueSArIG1vZGVsLm9mZnNldFksIFxuICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXJOYW1lLCBpbmRleDogbW9kZWwuaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIH1cbn1cbkRPTS5yZW1vdmVTaGlwID0gZnVuY3Rpb24ocGxheWVyTmFtZSwgc2hpcCkge1xuICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cykge1xuICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ3NxdWFyZSddLFxuICAgICAgICAgICAge3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55LCBwbGF5ZXI6IHBsYXllck5hbWV9KTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfVxufVxuRE9NLnJlbW92ZUhpdHMgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKGxldCBub2RlIG9mIHF1ZXJ5QXJyYXkoWydzcXVhcmUnLCAnaGl0J10pKVxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gJyc7IC8vIFRPRE86IHJlbW92ZSB3aGVuIHJlcGxhY2luZyBpY29uXG59XG5cbkRPTS5wb3N0ID0gZnVuY3Rpb24obXNnKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKS50ZXh0Q29udGVudCA9IG1zZztcbn1cbkRPTS5wb3N0TmV4dCA9IGZ1bmN0aW9uKG1zZykge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKTtcbiAgICBub2RlLnRleHRDb250ZW50ICs9ICcgJyArIG1zZztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gSElESU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ET00uaGlkZVBsYXllckJvYXJkID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgcXVlcnlFbGVtZW50KFsnZ2FtZWJvYXJkJ10sIHtwbGF5ZXI6IHBsYXllci5uYW1lfSkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5ET00ucmV2ZWFsUGxheWVyQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpIHtcbiAgICBxdWVyeUVsZW1lbnQoWydnYW1lYm9hcmQnXSwge3BsYXllcjogcGxheWVyLm5hbWV9KS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gQlVUVE9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ET00uc2V0QnV0dG9ucyA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBsZXQgdHdvUGxheWVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d29QbGF5ZXInKTtcbiAgICBsZXQgY29tcHV0ZXJOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJyk7XG4gICAgbGV0IGF1dG9HZW5Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9HZW4nKTtcbiAgICBsZXQgY29uZmlybU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybScpO1xuICAgIGxldCByZXNldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQnKTtcbiAgICBsZXQgcGVlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZWVrJyk7XG5cbiAgICB0d29QbGF5ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdwbGF5ZXInKTt9KCk7XG4gICAgY29tcHV0ZXJOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEdhbWVUeXBlKCdjb21wdXRlcicpO30oKTtcbiAgICBjb25maXJtTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RDb25maXJtKCk7fSgpO1xuICAgIGF1dG9HZW5Ob2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEF1dG9HZW4oKTt9KCk7XG4gICAgcmVzZXROb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdFJlc2V0KCk7fSgpO1xuXG4gICAgcGVlay5vbm1vdXNlZG93biA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUucmV2ZWFsKCk7fSgpO1xuICAgIHBlZWsub25tb3VzZXVwID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5oaWRlKCk7fSgpO1xuICAgIHBlZWsuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IGdhbWUucmV2ZWFsKCkpO1xuICAgIHBlZWsuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiBnYW1lLmhpZGUoKSk7XG59XG5cbkRPTS51cGRhdGVCdXR0b25zID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBmb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucylcbiAgICAgICAgc2V0QnV0dG9uQWN0aXZlKGJ1dHRvbi5pZCwgYnV0dG9uW3N0YXRlXSk7XG59XG5cbmNsYXNzIEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoaWQsIHN0YXJ0LCBwMXBpY2ssIHAxY29uZmlybSwgcDJwaWNrLCBwMmNvbmZpcm0sIGdhbWUsIHJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMucDFwaWNrID0gcDFwaWNrO1xuICAgICAgICB0aGlzLnAxY29uZmlybSA9IHAxY29uZmlybTtcbiAgICAgICAgdGhpcy5wMnBpY2sgPSBwMnBpY2s7XG4gICAgICAgIHRoaXMucDJjb25maXJtID0gcDJjb25maXJtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzXG4gICAgfVxufVxuY29uc3QgYnV0dG9ucyA9IFtcbiAgICBuZXcgQnV0dG9uKCd0d29QbGF5ZXInLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb21wdXRlcicgLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdhdXRvR2VuJyAgLCAwLCAxLCAxLCAxLCAxLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb25maXJtJyAgLCAwLCAwLCAxLCAwLCAxLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdyZXNldCcgICAgLCAwLCAxLCAxLCAxLCAxLCAxLCAxKSxcbiAgICBuZXcgQnV0dG9uKCdwZWVrJyAgICAgLCAwLCAwLCAwLCAwLCAwLCAxLCAwKVxuXTtcbmZ1bmN0aW9uIHNldEJ1dHRvbkFjdGl2ZShpZCwgaXNBY3RpdmUpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoaXNBY3RpdmUpIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZWxzZSBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIGNyZWF0ZURpdihwYXJlbnQsIGNsYXNzQXJyYXksIGRhdGFBcnJheSwgdGV4dCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChub2RlKTtcblxuICAgIGlmIChjbGFzc0FycmF5KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFBcnJheSlcbiAgICAgICAgbm9kZS5kYXRhc2V0W2tleV0gPSBkYXRhQXJyYXlba2V5XTtcblxuICAgIGlmICh0ZXh0KVxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dERpdihwYXJlbnQsIHRleHQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQobm9kZSk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QXJyYXkoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZyldO1xufVxuXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnQoY2xhc3NBcnJheSwgZGF0YU9iamVjdCkge1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgc3RyaW5nICs9ICcuJyArIGNscztcbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iamVjdClcbiAgICAgICAgc3RyaW5nICs9IGBbZGF0YS0ke2tleX09XCIke2RhdGFPYmplY3Rba2V5XX1cIl1gXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NsaXN0KG5vZGUsIGJvb2xPYmplY3QpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYm9vbE9iamVjdCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBib29sT2JqZWN0W2tleV07XG4gICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChrZXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoa2V5KTtcbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcydcbmltcG9ydCBET00gZnJvbSAnLi9kb20uanMnXG5cbmltcG9ydCBzb25hclJlc291cmNlIGZyb20gJy4vYXNzZXRzL3NvbmFyLm1wMyc7XG5pbXBvcnQgc3BsYXNoUmVzb3VyY2UgZnJvbSAnLi9hc3NldHMvc3BsYXNoLm1wMyc7XG5pbXBvcnQgdGh1bXBSZXNvdXJjZSBmcm9tICcuL2Fzc2V0cy90aHVtcC5tcDMnO1xuY29uc3Qgc29uYXIgPSBuZXcgQXVkaW8oc29uYXJSZXNvdXJjZSk7XG5jb25zdCBzcGxhc2ggPSBuZXcgQXVkaW8oc3BsYXNoUmVzb3VyY2UpO1xuY29uc3QgdGh1bXAgPSBuZXcgQXVkaW8odGh1bXBSZXNvdXJjZSk7XG5zb25hci5wbGF5KCk7IFxuXG5cbi8vIGNvbnN0IGJvYXJkTm9kZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQucGxheWVyMScpO1xuLy8gY29uc3QgYm9hcmROb2RlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbbmV3IFBsYXllcigncDEnLCAwLCAncGxheWVyJyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBsYXllcigncDInLCAxLCAncGxheWVyJyldO1xuICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6IHBsYXllcnMgJywgdGhpcy5wbGF5ZXJzKTsgLy8gREVCVUdcbiAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlbCA9IG51bGw7XG4gICAgICAgIC8vIFRPRE86IGNvbnNvbGlkYXRlIHBpY2svY29uZmlybVxuICAgICAgICAvLyBwMXBpY2ssIHAxY29uZmlybSwgcDJwaWNrLCBwMmNvbmZpcm0sIGdhbWUsIHJlc3VsdCwgYWlwaWNrP1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDsgXG4gICAgICAgIFxuICAgICAgICBET00uc2V0QnV0dG9ucyh0aGlzKTtcbiAgICAgICAgRE9NLnNldE1vZGVscyh0aGlzKTtcbiAgICAgICAgRE9NLnNldEdhbWVib2FyZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnc3RhcnQnKTtcblxuICAgICAgICB0aGlzLnNldERlbGF5KDYwMCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHN0YXRlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coYCVjbmV3IHN0YXRlOiAlYyR7c3RhdGV9YCwgJycsICdjb2xvcjogZ29sZGVucm9kOyBmb250LXdlaWdodDogYm9sZCcpO1xuXG4gICAgICAgIHN3aXRjaChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdXZWxjb21lIHRvIEJhdHRsZXNoaXAhIFBsZWFzZSBzZWxlY3QgZ2FtZSB0eXBlLicpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMXBpY2snOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgcGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMuJylcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMWNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgcHJlc3MgY29uZmlybSB0byBmaW5hbGl6ZSBzaGlwIHBsYWNlbWVudC4nKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJwaWNrJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDIsIHBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzLicpXG4gICAgICAgICAgICAgICAgRE9NLmhpZGVQbGF5ZXJCb2FyZCh0aGlzLnBsYXllcnNbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1sxXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbXB1dGVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRvIGdlbmVyYXRpbmcgY29tcHV0ZXIncyBzaGlwcy4uLlwiKTsgLy8gZGVidWdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBdXRvR2VuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJjb25maXJtJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDIsIHByZXNzIGNvbmZpcm0gdG8gZmluYWxpemUgc2hpcCBwbGFjZW1lbnQuJylcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbXB1dGVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRvIGNvbmZpcm1pbmcgY29tcHV0ZXIncyBzaGlwcy4uLlwiKTsgLy8gZGVidWdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDb25maXJtKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2FtZSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBhdHRhY2sgdGhlIGVuZW15IGJvYXJkLicpXG4gICAgICAgICAgICAgICAgRE9NLmhpZGVQbGF5ZXJCb2FyZCh0aGlzLnBsYXllcnNbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdHMnOlxuICAgICAgICAgICAgICAgIERPTS5yZXZlYWxQbGF5ZXJCb2FyZCh0aGlzLnBsYXllcnNbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJTlBVVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBzZWxlY3RHYW1lVHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3N0YXJ0JykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBsYXllcnNbMV0udHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxcGljaycpO1xuICAgIH1cblxuICAgIHNlbGVjdEF1dG9HZW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDFjb25maXJtJywgJ3AycGljaycsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuYXV0b0dlbigpO1xuXG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpID8gJ3AxY29uZmlybScgOiAncDJjb25maXJtJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIHNlbGVjdENvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgXG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHRoaXMudHVyblBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwodGhpcy50dXJuUGxheWVyLm5hbWUsIG1vZGVsKTtcbiAgICAgICAgdGhpcy5oaWRlTW9kZWxPcmllbnRhdGlvbih0aGlzLnR1cm5QbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFjb25maXJtJykgPyAncDJwaWNrJyA6ICdnYW1lJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICBzZWxlY3RSZXNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgnc3RhcnQnKSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzZXR0aW5nLi4uJyk7XG5cbiAgICAgICAgRE9NLnJlbW92ZUhpdHMoKTtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgRE9NLnJldmVhbFBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcylcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkgRE9NLnJlbW92ZVNoaXAocGxheWVyLm5hbWUsIHNoaXApO1xuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwocGxheWVyLm5hbWUsIG1vZGVsKTtcblxuICAgICAgICAgICAgcGxheWVyLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICBwbGF5ZXIuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgY2xpY2tNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbW9kZWwgY2xpY2tlZCBhdCAke3BsYXllck5hbWV9LCAke2luZGV4fWApO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AxY29uZmlybScsICdwMnBpY2snLCAncDJjb25maXJtJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGNsaWNrU3F1YXJlKHgsIHksIHBsYXllck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNxdWFyZSBjbGlja2VkIGF0ICR7cGxheWVyTmFtZX0sIHg6JHt4fSwgeToke3l9YCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHtzdGF0dXM6ICdmYWlsdXJlJ307XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZWwgJiYgIXRoaXMuc2VsZWN0ZWRNb2RlbC5wbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gdGhpcy5zZWxlY3RlZE1vZGVsLm5hbWUgJiYgcGxheWVyTmFtZSA9PT0gdGhpcy50dXJuUGxheWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnBsYWNlTW9kZWwoeCwgeSwgdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzRnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdwMXBpY2snKSA/ICdwMWNvbmZpcm0nIDogJ3AyY29uZmlybSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXRlKCdnYW1lJykgJiYgdGhpcy50dXJuUGxheWVyLm5hbWUgIT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lLCByZXNwb25zZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIGxldCBmdWxsTmFtZSA9ICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gJ3AxJykgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJGdWxsTmFtZSA9IChwbGF5ZXJOYW1lID09PSAncDEnKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICAgICAgICAgIHN3aXRjaChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBtaXNzZWQhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7b3RoZXJGdWxsTmFtZX0sIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxhc2gucGxheSgpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09ICdwMicgJiYgdGhpcy5pc0NvbXB1dGVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dG8gYXR0YWNraW5nIG9uIGNvbXB1dGVyJ3MgdHVyblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0F0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIGhpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIGhpdCBhIHNoaXAhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7ZnVsbE5hbWV9LCBjb250aW51ZSBhdHRhY2tpbmcuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVTdW5rTW9kZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIHN1bmsgYSBzaGlwIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3ROZXh0KGAke2Z1bGxOYW1lfSwgY29udGludWUgYXR0YWNraW5nLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FsbCBlbmVteSBzaGlwcyBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVTdW5rTW9kZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIHN1bmsgYWxsIGVuZW15IHNoaXBzISAke2Z1bGxOYW1lfSB3aW5zIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bXAucGxheSgpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgXG4gICAgXG4gICAgYXN5bmMgYXV0b0F0dGFjaygpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge3N0YXR1czogJ2ZhaWx1cmUnLCByZXN1bHQ6IG51bGx9O1xuICAgICAgICB3aGlsZSAocmVzcG9uc2UucmVzdWx0ICE9PSAnZW1wdHkgc3F1YXJlJykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF0dGFja0FuZFdhaXQoKTtcbiAgICAgICAgICAgIHN3aXRjaChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSBzcXVhcmUnOlxuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIG1pc3NlZCFgKTtcbiAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3ROZXh0KGBQbGF5ZXIgMSwgYXR0YWNrIHRoZSBlbmVteSBib2FyZC5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBoaXQnOlxuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBoaXQgYSBzaGlwIWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIHN1bmsnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0udXBkYXRlU3Vua01vZGVscygpO1xuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBzdW5rIGEgc2hpcCFgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0udXBkYXRlU3Vua01vZGVscygpO1xuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyaGFzIHN1bmsgYWxsIGVuZW15IHNoaXBzISBUaGUgY29tcHV0ZXIgd2lucyFgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBhdHRhY2tBbmRXYWl0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0ge3N0YXR1czogJ2ZhaWx1cmUnfTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLnJhbmQxMCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMucmFuZDEwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5wbGF5ZXJzWzBdLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhdXRvIGF0dGFja2luZyBhdCAke3h9LCR7eX0gcmVzcG9uc2U6YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhdXRvQXR0YWNrX09MRCgpIHsgLy8gVE9ETzogREVMRVRFXG4gICAgICAgIC8vIGZpbHRlciBoaXRzIHRvIG9uZSB3aXRoIHNoaXBzIGJ1dCB1bnN1bmtcbiAgICAgICAgLy8gaWYgbm9uZSwgdGhlbiB0cnkgcmFuZG9tXG4gICAgICAgIHRoaXMuc2V0RGVsYXkoNzAwKTsgLy8gY2hhbmdlXG4gICAgICAgIGxldCByZXNwb25zZSA9IHtzdGF0dXM6ICdmYWlsdXJlJ307XG5cbiAgICAgICAgd2hpbGUgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguY2VpbCgoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguY2VpbCgoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMucGxheWVyc1swXS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGF1dG8gYXR0YWNraW5nIGF0ICR7eH0sJHt5fSByZXNwb25zZTpgLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKHJlc3BvbnNlLnJlc3VsdCkge1xuICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIG1pc3NlZCFgKTtcbiAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYFBsYXllciAxLCBhdHRhY2sgdGhlIGVuZW15IGJvYXJkLmApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgaGl0JzpcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBoaXQgYSBzaGlwIWApO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc2V0IHRpbWVvdXRcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9BdHRhY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgc3Vuayc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBzdW5rIGEgc2hpcCFgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHNldCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwgZW5lbXkgc2hpcHMgc3Vuayc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyaGFzIHN1bmsgYWxsIGVuZW15IHNoaXBzISBUaGUgY29tcHV0ZXIgd2lucyFgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdyZXN1bHRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tSb3RhdGVNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMudHVyblBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBwbGF5ZXIubW9kZWxzW2luZGV4XTsgLy8gZGVidWdcbiAgICAgICAgICAgIERPTS5yZW1vdmVNb2RlbChwbGF5ZXJOYW1lLCBwbGF5ZXIubW9kZWxzW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZU1vZGVsKHBsYXllciwgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgdGhpcy5jbGlja0RlbGV0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGlja0RlbGV0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIGRlbGV0ZSBtb2RlbCwgIHBsYXllcjogJHtwbGF5ZXJOYW1lfSwgaW5kZXg6ICR7aW5kZXh9YCk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDJwaWNrJywgJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocGxheWVyLm1vZGVsc1tpbmRleF0ucGxhY2VkICYmIHRoaXMudHVyblBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBET00ucmVtb3ZlU2hpcChwbGF5ZXJOYW1lLCBwbGF5ZXIuYm9hcmQuc2hpcHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kZWwocGxheWVyLCBpbmRleCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhdGUoJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGAke3BsYXllci5uYW1lfXBpY2tgKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV2ZWFsKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnZ2FtZScpKSByZXR1cm47XG4gICAgICAgIERPTS5yZXZlYWxQbGF5ZXJCb2FyZCh0aGlzLnR1cm5QbGF5ZXIpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnZ2FtZScpKSByZXR1cm47XG4gICAgICAgIERPTS5oaWRlUGxheWVyQm9hcmQodGhpcy50dXJuUGxheWVyKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBzZWxlY3RNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKVxuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgICAgICBtb2RlbC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpLm1vZGVsc1tpbmRleF07XG4gICAgICAgIG1vZGVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gbW9kZWw7XG4gICAgfVxuICAgIGRlbGV0ZU1vZGVsKHBsYXllciwgaW5kZXgpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnNoaXBzW2luZGV4XSA9IG51bGw7XG4gICAgICAgIHBsYXllci5tb2RlbHNbaW5kZXhdLnBsYWNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByb3RhdGVNb2RlbChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIHBsYXllci5tb2RlbHNbaW5kZXhdLnJvdGF0ZSgpO1xuICAgIH1cbiAgICBoaWRlTW9kZWxPcmllbnRhdGlvbihwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgIGlmIChtb2RlbC5zaGlwLnNoYXBlID09PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgbW9kZWwucm90YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcGxhY2VNb2RlbCh4LCB5LCBwbGF5ZXIsIG1hbnVhbE1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IChtYW51YWxNb2RlbCB8fCB0aGlzLnNlbGVjdGVkTW9kZWwpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgbW9kZWwuc2hpcC5sZW5ndGgsIG1vZGVsLnNoaXAuc2hhcGUsIG1vZGVsLmluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgbW9kZWwuLi4nLCByZXN1bHQpOyAvLyBERUJVR1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIG1vZGVsLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICBzb25hci5wbGF5KCk7IC8vIFRPRE86XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgYXV0byBnZW5lcmF0aW5nIHNoaXBzIGZvciAke3RoaXMudHVyblBsYXllci5uYW1lfWApXG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnR1cm5QbGF5ZXI7XG5cbiAgICAgICAgdGhpcy5jbGVhcihwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIuZ2VuZXJhdGVNb2RlbHModHJ1ZSk7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGFjZU1vZGVsKHgsIHksIHBsYXllciwgbW9kZWwpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBjbGVhcihwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscykge1xuICAgICAgICAgICAgRE9NLnJlbW92ZU1vZGVsKHBsYXllci5uYW1lLCBtb2RlbCk7XG4gICAgICAgICAgICBpZiAobW9kZWwucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgRE9NLnJlbW92ZVNoaXAocGxheWVyLm5hbWUsIHBsYXllci5ib2FyZC5zaGlwc1ttb2RlbC5pbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kZWwocGxheWVyLCBtb2RlbC5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBPVVRQVVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIERPTS51cGRhdGVCdXR0b25zKHRoaXMuc3RhdGUpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMpO1xuICAgICAgICBET00udXBkYXRlR2FtZWJvYXJkKHRoaXMpO1xuICAgICAgICBET00udXBkYXRlQWN0aXZlUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZ2V0UGxheWVyKHBsYXllck5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycylcbiAgICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cbiAgICBnZXRPdGhlclBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgbGV0IG90aGVySW5kZXggPSAocGxheWVyLm5hbWUgPT09IHRoaXMucGxheWVyc1swXS5uYW1lKSA/IDEgOiAwO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW290aGVySW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgICAgIGxldCBvdGhlckluZGV4ID0gKHRoaXMudHVyblBsYXllci5pbmRleCA9PT0gMCkgPyAxIDogMDtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzW290aGVySW5kZXhdO1xuICAgIH1cblxuICAgIGlzU3RhdGUoc3RhdGVBcmdzKSB7XG4gICAgICAgIGZvciAobGV0IHN0YXRlIG9mIGFyZ3VtZW50cylcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc0NvbXB1dGVyKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucGxheWVyc1sxXS50eXBlID09PSAnY29tcHV0ZXInKVxuICAgIH1cblxuICAgIHJhbmQxMCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICB9XG5cbiAgICBzZXREZWxheShtcykge1xuICAgICAgICB0aGlzLmRlbGF5ZWQgPSB0cnVlO1xuICAgICAgICB0aHVtcC5wbGF5KCk7IC8vIFRPRE86IGNoYW5nZVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwcm9ncmVzcyc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgfSwgbXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoNSkpO1xuICAgICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmdlbkRlZmF1bHRNb2RlbHMoKTtcbiAgICAgICAgLy8gdGhpcy5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICB9XG5cbiAgICBhZGRTaGlwKHgsIHksIGxlbmd0aCA9IDEsIHNoYXBlID0gJ3ZlcnRpY2FsJywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoeCwgeSkpXG4gICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBvdXQgb2YgYm91bmRzJ307XG4gICAgICAgIFxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGlmIChpc091dE9mQm91bmRzKHNlZ21lbnQueCwgc2VnbWVudC55KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBleHRlbmRzIG91dCBvZiBib3VuZHMnfTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcDIgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgICAgIGlmICghc2hpcDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNoaXAyLnNlZ21lbnRzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudDEueCA9PSBzZWdtZW50Mi54ICYmIHNlZ21lbnQxLnkgPT0gc2VnbWVudDIueSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIGludGVyc2VjdHMgb3RoZXIgc2hpcCd9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdID0gc2hpcDtcbiAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJ307XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBzRnVsbCgpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgYWRkTW9kZWwoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoeCwgeSwgbGVuZ3RoLCBzaGFwZSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbHMucHVzaCh7c2hpcDogc2hpcCwgaW5kZXg6IG51bGwsIHBsYWNlZDogZmFsc2UsIHN1bms6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGhpdCBvZiB0aGlzLmhpdHMpXG4gICAgICAgICAgICBpZiAoaGl0LnggPT0geCAmJiBoaXQueSA9PSB5KVxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzcXVhcmUgYWxyZWFkeSBoaXQnfTtcblxuICAgICAgICB0aGlzLmhpdHMucHVzaCh7eCwgeX0pO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VtcHR5IHNxdWFyZSd9O1xuXG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQueCA9PSB4ICYmIHNlZ21lbnQueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9ICdlbmVteSBzaGlwIGhpdCc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYXJlU2hpcHNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgPSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgPSAnZW5lbXkgc2hpcCBzdW5rJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdFNoaXBzKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYWRkU2hpcCgxLCAxLCAyLCAndmVydGljYWwnLCAwKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDMsIDMsIDIsICd2ZXJ0aWNhbCcsIDEpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoNSwgNSwgMiwgJ3ZlcnRpY2FsJywgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg3LCA3LCAyLCAndmVydGljYWwnLCAzKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDksIDQsIDIsICd2ZXJ0aWNhbCcsIDQpO1xuICAgIH1cblxuICAgIGdlbkRlZmF1bHRNb2RlbHMoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMik7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNCk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMubW9kZWxzW2ldLmluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzT3V0T2ZCb3VuZHMoeCwgeSkge1xuICAgIHJldHVybiAoeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCk7XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCB0eXBlKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBBcnJheSg1KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU1vZGVscygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTW9kZWxzKHJhbmRvbVNoYXBlcyA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA1OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgc2hhcGUgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgaWYgKHJhbmRvbVNoYXBlcylcbiAgICAgICAgICAgICAgICBzaGFwZSA9IChNYXRoLnJhbmRvbSgpICogMiA+PSAxKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB0aGlzLm1vZGVsc1tpbmRleF0gPSBuZXcgTW9kZWwodGhpcy5uYW1lLCBsZW5ndGhzW2luZGV4XSwgaW5kZXgsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0TW9kZWxzKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlTW9kZWxzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3Vua01vZGVscygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXAgPSB0aGlzLmJvYXJkLnNoaXBzW2ldO1xuICAgICAgICAgICAgdGhpcy5tb2RlbHNbaV0uc3VuayA9IHNoaXAuaXNTdW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lLCBsZW5ndGgsIGluZGV4LCBzaGFwZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBwbGF5ZXJOYW1lO1xuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgU2hpcCgwLCAwLCBsZW5ndGgsIHNoYXBlKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLnJlY2VudGVyKCk7XG4gICAgfVxuICAgIGdldCBib29scygpIHtcbiAgICAgICAgcmV0dXJuIHtzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCwgcGxhY2VkOiB0aGlzLnBsYWNlZCwgc3VuazogdGhpcy5zdW5rfTtcbiAgICB9XG4gICAgcm90YXRlKCkge1xuICAgICAgICBsZXQgbmV3U2hhcGUgPSAodGhpcy5zaGlwLnNoYXBlID09PSAndmVydGljYWwnKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBTaGlwKHRoaXMuc2hpcC54LCB0aGlzLnNoaXAueSwgdGhpcy5zaGlwLmxlbmd0aCwgbmV3U2hhcGUpO1xuICAgICAgICB0aGlzLnJlY2VudGVyKCk7XG4gICAgfVxuICAgIHJlY2VudGVyKCkge1xuICAgICAgICBsZXQgbGVmdG92ZXJXaWR0aCA9IDUgLSB0aGlzLnNoaXAud2lkdGg7XG4gICAgICAgIGxldCBsZWZ0b3ZlckhlaWdodCA9IDUgLSB0aGlzLnNoaXAuaGVpZ2h0O1xuICAgICAgICB0aGlzLm9mZnNldFggPSBNYXRoLmZsb29yKGxlZnRvdmVyV2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5mbG9vcihsZWZ0b3ZlckhlaWdodCAvIDIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBsZW5ndGgsIHNoYXBlID0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkeCA9IChzaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyAwIDogaTtcbiAgICAgICAgICAgIGxldCBkeSA9IChzaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyBpIDogMDtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChuZXcgU2VnbWVudCh4ICsgZHgsIHkgKyBkeSkpO1xuICAgICAgICB9XG4gICAgICAgIGFkanVzdENvcm5lcnModGhpcy5zZWdtZW50cyk7XG4gICAgfVxuICAgIGdldCBoaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IFxuICAgICAgICAgICAgcHJldiArPSAoY3Vyci5pc0hpdCkgPyAxIDogMCwgMCk7XG4gICAgfVxuICAgIGhpdCh4LCB5KSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IHNlZ21lbnQueCAmJiB5ID09IHNlZ21lbnQueSkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3VuaygpKSAvLyBUT0RPOiB0ZXN0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHNlZ21lbnQuc3VuayA9IHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNTdW5rKCkge3JldHVybiAodGhpcy5oaXRzID49IHRoaXMuc2VnbWVudHMubGVuZ3RoKX1cbiAgICAvLyBzdGF0aWMgY29weUZyb20oc2hpcCwgeCwgeSkge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFNoaXAoeCwgeSwgc2hpcC5sZW5ndGgsIHNoaXAuc2hhcGUpO1xuICAgIC8vIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQueCk7XG4gICAgICAgIGxldCBtaW4gPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA8IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgbGV0IG1heCA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyID4gcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICByZXR1cm4gbWF4IC0gbWluICsgMTtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuc2VnbWVudHMubWFwKHNlZ21lbnQgPT4gc2VnbWVudC55KTtcbiAgICAgICAgbGV0IG1pbiA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyIDwgcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICBsZXQgbWF4ID0gYXJyLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7cmV0dXJuIChjdXIgPiBwcmV2KSA/IGN1ciA6IHByZXY7fSwgMCk7XG4gICAgICAgIHJldHVybiBtYXggLSBtaW4gKyAxO1xuICAgIH1cbn1cblxuY2xhc3MgU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTsgLy8gVE9ETzogYXV0byB1cGRhdGVcbiAgICAgICAgdGhpcy5jb3JuZXJUTCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcm5lclRSID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ybmVyQkwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JuZXJCUiA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaXQ6IHRoaXMuaGl0LFxuICAgICAgICAgICAgc3VuazogdGhpcy5zdW5rLFxuICAgICAgICAgICAgY29ybmVyVEw6IHRoaXMuY29ybmVyVEwsXG4gICAgICAgICAgICBjb3JuZXJUUjogdGhpcy5jb3JuZXJUUixcbiAgICAgICAgICAgIGNvcm5lckJMOiB0aGlzLmNvcm5lckJMLFxuICAgICAgICAgICAgY29ybmVyQlI6IHRoaXMuY29ybmVyQlIsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkanVzdENvcm5lcnMoc2VnbWVudHMpIHtcbiAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzZWdtZW50cykge1xuICAgICAgICBsZXQgeDEgPSBzZWdtZW50MS54O1xuICAgICAgICBsZXQgeTEgPSBzZWdtZW50MS55O1xuICAgICAgICBmb3IgKGxldCBzZWdtZW50MiBvZiBzZWdtZW50cykge1xuICAgICAgICAgICAgbGV0IHgyID0gc2VnbWVudDIueDtcbiAgICAgICAgICAgIGxldCB5MiA9IHNlZ21lbnQyLnk7XG4gICAgICAgICAgICBpZiAoeDIgPT0geDEtMSAmJiB5MiA9PSB5MSkgeyAvLyB0byB0aGUgbGVmdCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCTCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSsxICYmIHkyID09IHkxKSB7IC8vIHRvIHRoZSByaWdodCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRSID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSAmJiB5MiA9PSB5MS0xKSB7IC8vIHRvIHRoZSB0b3Agb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVFIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDEgJiYgeTIgPT0geTErMSkgeyAvLyB0byB0aGUgYm90dG9tIG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQkwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJSID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==