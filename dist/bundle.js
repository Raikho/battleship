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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/hit.png */ "./src/assets/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n    --border-glow-enemy: #f87171; /* Red 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-rows: 1fr min-content max-content 1fr;\n    grid-template-areas: \".\" \"info\" \"boards\" \".\";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n#info {\n    grid-area: info;\n    align-self: end;\n    width: 50vw;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"buttons logs\";\n    gap: 20px;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n    cursor: inherit;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n    align-self: start;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.modelboard-container.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    /* background-color: #0E749099; */\n    background-color: var(--accent);\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n.square.hit:before {\n    position: absolute;\n    content: '';\n    pointer-events: none;\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-color: red;\n}\n\n/* =========================== Ship Corners ======================== */\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n    --border-glow-enemy: #f87171; /* Red 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-rows: 1fr min-content max-content 1fr;\n    grid-template-areas: \".\" \"info\" \"boards\" \".\";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n#info {\n    grid-area: info;\n    align-self: end;\n    width: 50vw;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"buttons logs\";\n    gap: 20px;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n    cursor: inherit;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n    align-self: start;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.modelboard-container.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url('assets/rotate.svg');\n    mask-image: url('assets/rotate.svg');\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url('assets/delete.svg');\n    mask-image: url('assets/delete.svg');\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    /* background-color: #0E749099; */\n    background-color: var(--accent);\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n.square.hit:before {\n    position: absolute;\n    content: '';\n    pointer-events: none;\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/hit.png');\n    mask-image: url('assets/hit.png');\n    background-color: red;\n}\n\n/* =========================== Ship Corners ======================== */\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n"],"sourceRoot":""}]);
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
            // node.textContent = 'x'; // TODO: change
        }
    }
}

DOM.updateEnemyColor = function() {
    let gameboardNode = queryElement(['gameboard'], {player: 'p2'})
    let modelboardNode = queryElement(['modelboard-container'], {player: 'p2'})
    gameboardNode.classList.add('computer');
    modelboardNode.classList.add('computer');
    console.log('setting enemy node color class');
}
DOM.resetEnemyColor = function() {
    let gameboardNode = queryElement(['gameboard'], {player: 'p2'})
    let modelboardNode = queryElement(['modelboard-container'], {player: 'p2'})
    gameboardNode.classList.remove('computer');
    modelboardNode.classList.remove('computer');
    console.log('unsetting enemy node color class');
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
    new Button('autoGen'  , 0, 1, 0, 1, 0, 0, 0),
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
// sonar.play(); 


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
        if (type === 'computer')
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateEnemyColor();

        this.updateState('p1pick');
    }

    selectAutoGen() {
        if (!this.isState('p1pick', 'p2pick')) return;

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

            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetEnemyColor();
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
            response = await this.attackAndWait(1000);
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
                    break;
            }
        }
    }

    async attackAndWait(milliseconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let response = {status: 'failure'};
                while (response.status === 'failure') {
                    response = this.players[0].board.receiveSmartAttack();
                    console.log(`auto attacking, response:`, response);
                }
                resolve(response);
            }, milliseconds);
        });
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
        // let seg0 = ship.segments[0]; // debug
        // let seg1 = ship.segments[1]; // debug
        // seg0.hit = true; // DEBUG
        // seg1.hit = true; // DEBUG
        // seg0.sunk = ship.isSunk(); // DEBUG
        // seg1.sunk = ship.isSunk(); // DEBUG
        // this.hits.push({x: seg0.x, y: seg0.y}); // debug
        // this.hits.push({x: seg1.x, y: seg1.y}); // debug
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
                    segment.hit = true;

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

    receiveSmartAttack() {
        let hitSegments = [];
        for (let ship of this.ships)
            for (let segment of ship.segments)
                if (segment.hit && !ship.isSunk())
                    hitSegments.push(segment);

        if (hitSegments.length == 0) {
            let x = Math.ceil(Math.random()*10);
            let y = Math.ceil(Math.random()*10);
            console.log('First auto attack w/ random x,y');
            return this.receiveAttack(x, y);
        }

        let adjacentHits = [];
        for (let segment of hitSegments) {
            adjacentHits.push({x: segment.x + 1, y: segment.y});
            adjacentHits.push({x: segment.x - 1, y: segment.y});
            adjacentHits.push({x: segment.x, y: segment.y + 1});
            adjacentHits.push({x: segment.x, y: segment.y - 1});
        }

        let boundFiltered = adjacentHits.filter(hit => !isOutOfBounds(hit.x, hit.y))
        let hitFiltered = boundFiltered.filter(hit => {
            for (let prevHit of this.hits) {
                if (hit.x == prevHit.x && hit.y == prevHit.y)
                    return false;
            }
            return true;
        });

        return this.receiveAttack(hitFiltered[0].x, hitFiltered[0].y);
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
    return (x > 10 || x <= 0 || y > 10 || y <= 0);
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
        let lengths = [2, 3, 3, 4, 5];
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
            }
        });
        if (this.isSunk())
        this.segments.forEach(segment => segment.sunk = true);
    }
    isSunk() {
        for (let segment of this.segments)
            if (!segment.hit)
                return false;
        return true;
    }
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

/***/ "./src/assets/hit.png":
/*!****************************!*\
  !*** ./src/assets/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hit.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNROztBQUU3QixpQkFBaUIsZ0RBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9yb3RhdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJhc3NldHMvaGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1pbmRpZ28tbGlnaHRlcjogIzA1MDUwNzg4O1xcbiAgICAtLWFjY2VudDogIzBFNzQ5MDtcXG4gICAgLS1kYXJrQW1iZXI6ICM0NTFhMDM7XFxuICAgIC0tZGFya1Zpb2xldDogIzJlMTA2NTtcXG4gICAgLS1kYXJrUmVkOiAjNDUwYTBhO1xcblxcbiAgICAtLWFjdGl2ZS1ib2FyZC1iZzogZGFya3NlYWdyZWVuO1xcblxcbiAgICAtLXJvdGF0ZTogIzFlMWI0YjtcXG4gICAgLS1yb3RhdGUtbGlnaHRlcjogIzEwYjk4MTsgLyogRW1lcmFsZCA1MDAgKi9cXG4gICAgLS1kZWxldGU6ICMxZTFiNGI7XFxuICAgIC0tZGVsZXRlLWxpZ2h0ZXI6ICNiOTFjMWM7IC8qIFJlZCA3MDAgKi9cXG5cXG4gICAgLS1ib3JkZXItZ2xvdzogIzIyZDNlZTsgLyogQ3lhbiA0MDAqL1xcbiAgICAtLWJvcmRlci1nbG93LWVuZW15OiAjZjg3MTcxOyAvKiBSZWQgNDAwKi9cXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbWluKDE4cHgsIDJ2dyk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50IG1heC1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi5cXFwiIFxcXCJpbmZvXFxcIiBcXFwiYm9hcmRzXFxcIiBcXFwiLlxcXCI7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4jaW5mbyB7XFxuICAgIGdyaWQtYXJlYTogaW5mbztcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImJ1dHRvbnMgbG9nc1xcXCI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCdXR0b25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNidXR0b25zIHtcXG4gICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXNpemU6ICAxLjV2dztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBjdXJzb3I6IGluaGVyaXQ7XFxufVxcbmJ1dHRvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTG9ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2xvZ3Mge1xcbiAgICBncmlkLWFyZWE6IGxvZ3M7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkcztcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuQG1lZGlhKG1pbi1hc3BlY3QtcmF0aW86IDEpIHtcXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgMWZyIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm1vZGVsczEgYm9hcmQxIGJvYXJkMiBtb2RlbHMyXFxcIjtcXG4gICAgXFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxdnc7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtYXNwZWN0LXJhdGlvOiAxKSB7XFxuICAgIC5ib2FyZC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyICBtaW4tY29udGVudDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgICAgIFxcXCJtb2RlbHMxIGJvYXJkMSBib2FyZDFcXFwiIFxcbiAgICAgICAgICAgIFxcXCJib2FyZDIgYm9hcmQyIG1vZGVsczJcXFwiO1xcbiAgICAgICAgZ2FwOiAxdnc7XFxuICAgIH1cXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDFcXFwiXSB7Z3JpZC1hcmVhOiBtb2RlbHMxfVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7Z3JpZC1hcmVhOiBtb2RlbHMyfVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ubW9kZWxib2FyZC1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYm9yZGVyLWdsb3cpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUuY29tcHV0ZXIge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdy1lbmVteSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93LWVuZW15KTtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuIGJvYXJkXFxcIiBcXFwiLiBib2FyZFxcXCI7XFxuICAgIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYm9hcmQgLlxcXCIgXFxcImJvYXJkIC5cXFwiO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVsIEljb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjBweCwgMnZ3KTtcXG4gICAgd2lkdGg6IG1pbigyMHB4LCAydncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmVkO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcblxcbiBcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmljb24ucm90YXRlIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUpO1xcbn1cXG4uaWNvbi5kZWxldGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlbGV0ZSk7XFxufVxcbltkYXRhLXBsYXllcj1cXFwicDFcXFwiXT4uaWNvbi5kZWxldGUge3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7fVxcbi5pY29uLnJvdGF0ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm90YXRlLWxpZ2h0ZXIpO31cXG4uaWNvbi5kZWxldGU6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWRlbGV0ZS1saWdodGVyKTt9XFxuLmljb246YWN0aXZlIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVsIEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNWJiO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogNXZ3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4ubW9kZWxib2FyZC5zZWxlY3RlZCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmNWY1ZjU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNmNWY1ZjU7XFxufVxcbi5tb2RlbGJvYXJkLnN1bmsge2JvcmRlci1jb2xvcjogI2ZmNDUwMGJiO31cXG4ubW9kZWxzcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmNjtcXG59XFxuLm1vZGVsc3F1YXJlLnNoaXAge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnby1saWdodGVyKTt9XFxuLm1vZGVsYm9hcmQucGxhY2VkPi5tb2RlbHNxdWFyZS5zaGlwIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmdhbWVib2FyZFtkYXRhLXBsYXllcj1cXFwicDFcXFwiXSB7Z3JpZC1hcmVhOiBib2FyZDF9XFxuLmdhbWVib2FyZFtkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7Z3JpZC1hcmVhOiBib2FyZDJ9XFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxufVxcbi5nYW1lYm9hcmQuYWN0aXZlIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYm9yZGVyLWdsb3cpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxufVxcbi5nYW1lYm9hcmQuYWN0aXZlLmNvbXB1dGVyIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYm9yZGVyLWdsb3ctZW5lbXkpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1ib3JkZXItZ2xvdy1lbmVteSk7XFxufVxcbi5nYW1lYm9hcmQ+KiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9hcmQtYmcpO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLnNoaXAsXFxuLnNxdWFyZS5zaGlwLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XFxufVxcbi5oaWRkZW4+LnNoaXAge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMEU3NDkwOTk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcbi5zcXVhcmUuaGl0IHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLnNxdWFyZS5zaGlwLmhpdC5zdW5rIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5bZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZDtcXG59XFxuLnNxdWFyZS5oaXQ6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGhlaWdodDogbWluKDIwcHgsIDJ2dyk7XFxuICAgIHdpZHRoOiBtaW4oMjBweCwgMnZ3KTtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGlwIENvcm5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lclRMKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyVEwpIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG59XFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lclRSKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyVFIpIHtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJCTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lckJMKSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJCUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lckJSKSB7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjs7SUFFbEIsK0JBQStCOztJQUUvQixpQkFBaUI7SUFDakIseUJBQXlCLEVBQUUsZ0JBQWdCO0lBQzNDLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBRSxZQUFZOztJQUV2QyxzQkFBc0IsRUFBRSxZQUFZO0lBQ3BDLDRCQUE0QixFQUFFLFdBQVc7QUFDN0M7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUzs7SUFFVCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyx5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixtREFBbUQ7SUFDbkQsNENBQTRDOztJQUU1QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXOztJQUVYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLFNBQVM7QUFDYjtBQUNBLHNFQUFzRTtBQUN0RSxz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Q2pEO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7O0lBRXJCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsMkRBQXlDO0lBQ3pDLG1EQUFpQztJQUNqQyxxQkFBcUI7QUFDekI7O0FBRUEsc0VBQXNFO0FBQ3RFOztJQUVJLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLDZCQUE2QjtBQUNqQztBQUNBOztJQUVJLCtCQUErQjtBQUNuQztBQUNBOztJQUVJLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWluZGlnby1saWdodGVyOiAjMDUwNTA3ODg7XFxuICAgIC0tYWNjZW50OiAjMEU3NDkwO1xcbiAgICAtLWRhcmtBbWJlcjogIzQ1MWEwMztcXG4gICAgLS1kYXJrVmlvbGV0OiAjMmUxMDY1O1xcbiAgICAtLWRhcmtSZWQ6ICM0NTBhMGE7XFxuXFxuICAgIC0tYWN0aXZlLWJvYXJkLWJnOiBkYXJrc2VhZ3JlZW47XFxuXFxuICAgIC0tcm90YXRlOiAjMWUxYjRiO1xcbiAgICAtLXJvdGF0ZS1saWdodGVyOiAjMTBiOTgxOyAvKiBFbWVyYWxkIDUwMCAqL1xcbiAgICAtLWRlbGV0ZTogIzFlMWI0YjtcXG4gICAgLS1kZWxldGUtbGlnaHRlcjogI2I5MWMxYzsgLyogUmVkIDcwMCAqL1xcblxcbiAgICAtLWJvcmRlci1nbG93OiAjMjJkM2VlOyAvKiBDeWFuIDQwMCovXFxuICAgIC0tYm9yZGVyLWdsb3ctZW5lbXk6ICNmODcxNzE7IC8qIFJlZCA0MDAqL1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBtaW4oMThweCwgMnZ3KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLlxcXCIgXFxcImluZm9cXFwiIFxcXCJib2FyZHNcXFwiIFxcXCIuXFxcIjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiNpbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiBpbmZvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYnV0dG9ucyBsb2dzXFxcIjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGN1cnNvcjogaW5oZXJpdDtcXG59XFxuYnV0dG9uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSguNSk7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGdyaWQtYXJlYTogbG9ncztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmRzO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEobWluLWFzcGVjdC1yYXRpbzogMSkge1xcbiAgICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibW9kZWxzMSBib2FyZDEgYm9hcmQyIG1vZGVsczJcXFwiO1xcbiAgICBcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC1hc3BlY3QtcmF0aW86IDEpIHtcXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAgICAgXFxcIm1vZGVsczEgYm9hcmQxIGJvYXJkMVxcXCIgXFxuICAgICAgICAgICAgXFxcImJvYXJkMiBib2FyZDIgbW9kZWxzMlxcXCI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczF9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczJ9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyLmFjdGl2ZS5jb21wdXRlciB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93LWVuZW15KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3ctZW5lbXkpO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gYm9hcmRcXFwiIFxcXCIuIGJvYXJkXFxcIjtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG4ubW9kZWwtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJib2FyZCAuXFxcIiBcXFwiYm9hcmQgLlxcXCI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgSWNvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IG1pbigyMHB4LCAydncpO1xcbiAgICB3aWR0aDogbWluKDIwcHgsIDJ2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZWQ7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuXFxuIFxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaWNvbi5yb3RhdGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3JvdGF0ZS5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvcm90YXRlLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUpO1xcbn1cXG4uaWNvbi5kZWxldGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2RlbGV0ZS5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvZGVsZXRlLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUpO1xcbn1cXG5bZGF0YS1wbGF5ZXI9XFxcInAxXFxcIl0+Lmljb24uZGVsZXRlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO31cXG4uaWNvbi5yb3RhdGU6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdGF0ZS1saWdodGVyKTt9XFxuLmljb24uZGVsZXRlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtbGlnaHRlcik7fVxcbi5pY29uOmFjdGl2ZSB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSl9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBCb2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ubW9kZWxib2FyZCB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmNWY1ZjViYjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBoZWlnaHQ6IDV2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuLm1vZGVsYm9hcmQuc2VsZWN0ZWQge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjVmNWY1O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjZjVmNWY1O1xcbn1cXG4ubW9kZWxib2FyZC5zdW5rIHtib3JkZXItY29sb3I6ICNmZjQ1MDBiYjt9XFxuLm1vZGVsc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjY7XFxufVxcbi5tb2RlbHNxdWFyZS5zaGlwIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28tbGlnaHRlcik7fVxcbi5tb2RlbGJvYXJkLnBsYWNlZD4ubW9kZWxzcXVhcmUuc2hpcCB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5nYW1lYm9hcmRbZGF0YS1wbGF5ZXI9XFxcInAxXFxcIl0ge2dyaWQtYXJlYTogYm9hcmQxfVxcbi5nYW1lYm9hcmRbZGF0YS1wbGF5ZXI9XFxcInAyXFxcIl0ge2dyaWQtYXJlYTogYm9hcmQyfVxcbi5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbn1cXG4uZ2FtZWJvYXJkLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3cpO1xcbn1cXG4uZ2FtZWJvYXJkLmFjdGl2ZS5jb21wdXRlciB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93LWVuZW15KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3ctZW5lbXkpO1xcbn1cXG4uZ2FtZWJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcbi5zaGlwLFxcbi5zcXVhcmUuc2hpcC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbn1cXG4uaGlkZGVuPi5zaGlwIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzBFNzQ5MDk5OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG4uc3F1YXJlLmhpdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5zcXVhcmUuc2hpcC5oaXQuc3VuayB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkZW5yb2Q7XFxufVxcbi5zcXVhcmUuaGl0OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBoZWlnaHQ6IG1pbigyMHB4LCAydncpO1xcbiAgICB3aWR0aDogbWluKDIwcHgsIDJ2dyk7XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvaGl0LnBuZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9oaXQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgQ29ybmVycyA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyVEwpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJUTCkge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyVFIpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJUUikge1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG59XFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lckJMKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyQkwpIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXG59XFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lckJSKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyQlIpIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRE9NID0ge307XG5leHBvcnQgZGVmYXVsdCBET007XG5cbkRPTS5zZXRNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydtb2RlbGJvYXJkJ10pKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNTsgeSsrKVxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspXG4gICAgICAgICAgICAgICAgY3JlYXRlRGl2KGJvYXJkTm9kZSwgWydtb2RlbHNxdWFyZSddLCBcbiAgICAgICAgICAgICAgICAgICAge3g6IHgsIHk6IHksIHBsYXllcjogYm9hcmROb2RlLmRhdGFzZXQucGxheWVyLCBpbmRleDogYm9hcmROb2RlLmRhdGFzZXQuaW5kZXh9KTtcblxuICAgICAgICBib2FyZE5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja01vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lck5vZGUgPSBib2FyZE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29udGFpbmVyTm9kZS5kYXRhc2V0LnBsYXllciA9IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcjtcblxuICAgICAgICBsZXQgcm90YXRlTm9kZSA9IGNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nLCAncm90YXRlJ10sIG51bGwpO1xuICAgICAgICBsZXQgZGVsZXRlTm9kZSA9IGNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nLCAnZGVsZXRlJ10sIG51bGwpO1xuICAgICAgICByb3RhdGVOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdhbWUuY2xpY2tSb3RhdGVNb2RlbChib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIsIGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSgpO1xuICAgICAgICBkZWxldGVOb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdhbWUuY2xpY2tEZWxldGVNb2RlbChib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIsIGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSgpO1xuXG4gICAgfVxufVxuXG5ET00udXBkYXRlTW9kZWxzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IHBsYXllciBvZiBnYW1lLnBsYXllcnMpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscykge1xuICAgICAgICAgICAgbGV0IGJvYXJkTm9kZSA9IHF1ZXJ5RWxlbWVudChbJ21vZGVsYm9hcmQnXSwge3BsYXllcjogcGxheWVyLm5hbWUsIGluZGV4OiBtb2RlbC5pbmRleH0pO1xuICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KGJvYXJkTm9kZSwgbW9kZWwuYm9vbHMpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIG1vZGVsLnNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgWydtb2RlbHNxdWFyZSddLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWdtZW50LnggKyBtb2RlbC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VnbWVudC55ICsgbW9kZWwub2Zmc2V0WSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXI6IHBsYXllci5uYW1lLCBpbmRleDogbW9kZWwuaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KG5vZGUsIHsuLi5zZWdtZW50LmJvb2xzLCBzaGlwOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS51cGRhdGVBY3RpdmVQbGF5ZXIgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgbGV0IHR1cm5QbGF5ZXJOYW1lID0gKGdhbWUudHVyblBsYXllcikgPyBnYW1lLnR1cm5QbGF5ZXIubmFtZSA6ICduL2EnO1xuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnbW9kZWxib2FyZC1jb250YWluZXInXSkpIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gKGdhbWUudHVyblBsYXllciAmJiB0dXJuUGxheWVyTmFtZSA9PT0gYm9hcmROb2RlLmRhdGFzZXQucGxheWVyKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgc2V0Q2xhc3NsaXN0KGJvYXJkTm9kZSwge2FjdGl2ZTogaXNBY3RpdmV9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydnYW1lYm9hcmQnXSkpIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gKGdhbWUudHVyblBsYXllciAmJiB0dXJuUGxheWVyTmFtZSA9PT0gYm9hcmROb2RlLmRhdGFzZXQucGxheWVyKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgc2V0Q2xhc3NsaXN0KGJvYXJkTm9kZSwge2FjdGl2ZTogaXNBY3RpdmV9KTtcbiAgICB9XG59XG5cbkRPTS5zZXRHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydnYW1lYm9hcmQnXSkpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDExOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSAwICYmIHkgPT0gMCkgY3JlYXRlRGl2KGJvYXJkTm9kZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA9PSAwKSBjcmVhdGVUZXh0RGl2KGJvYXJkTm9kZSwgeSlcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5ID09IDApIGNyZWF0ZVRleHREaXYoYm9hcmROb2RlLCB4KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVEaXYoYm9hcmROb2RlLCBbJ3NxdWFyZScsICd0ZXN0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogeCwgeTogeSwgcGxheWVyOiBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXJ9KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmNsaWNrU3F1YXJlKHgsIHksIGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS51cGRhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBpZiAoIXBsYXllci5ib2FyZC5zaGlwcylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcykge1xuICAgICAgICAgICAgaWYgKCFzaGlwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgICAgICAgICAge3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55LCBwbGF5ZXI6IHBsYXllci5uYW1lfSk7XG4gICAgICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KG5vZGUsIHsuLi5zZWdtZW50LmJvb2xzLCBzaGlwOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBoaXQgb2YgcGxheWVyLmJvYXJkLmhpdHMpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFsnc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAge3g6IGhpdC54LHk6IGhpdC55LHBsYXllcjogcGxheWVyLm5hbWV9KTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAvLyBub2RlLnRleHRDb250ZW50ID0gJ3gnOyAvLyBUT0RPOiBjaGFuZ2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUVuZW15Q29sb3IgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgZ2FtZWJvYXJkTm9kZSA9IHF1ZXJ5RWxlbWVudChbJ2dhbWVib2FyZCddLCB7cGxheWVyOiAncDInfSlcbiAgICBsZXQgbW9kZWxib2FyZE5vZGUgPSBxdWVyeUVsZW1lbnQoWydtb2RlbGJvYXJkLWNvbnRhaW5lciddLCB7cGxheWVyOiAncDInfSlcbiAgICBnYW1lYm9hcmROb2RlLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyJyk7XG4gICAgbW9kZWxib2FyZE5vZGUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXInKTtcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyBlbmVteSBub2RlIGNvbG9yIGNsYXNzJyk7XG59XG5ET00ucmVzZXRFbmVteUNvbG9yID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGdhbWVib2FyZE5vZGUgPSBxdWVyeUVsZW1lbnQoWydnYW1lYm9hcmQnXSwge3BsYXllcjogJ3AyJ30pXG4gICAgbGV0IG1vZGVsYm9hcmROb2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxib2FyZC1jb250YWluZXInXSwge3BsYXllcjogJ3AyJ30pXG4gICAgZ2FtZWJvYXJkTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlcicpO1xuICAgIG1vZGVsYm9hcmROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXB1dGVyJyk7XG4gICAgY29uc29sZS5sb2coJ3Vuc2V0dGluZyBlbmVteSBub2RlIGNvbG9yIGNsYXNzJyk7XG59XG5cbkRPTS5yZW1vdmVNb2RlbCA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIG1vZGVsKSB7XG4gICAgZm9yIChsZXQgc2VnbWVudCBvZiBtb2RlbC5zaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxzcXVhcmUnXSwge1xuICAgICAgICAgICAgeDogc2VnbWVudC54ICsgbW9kZWwub2Zmc2V0WCx5OiBzZWdtZW50LnkgKyBtb2RlbC5vZmZzZXRZLCBcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyTmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICB9XG59XG5ET00ucmVtb3ZlU2hpcCA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIHNoaXApIHtcbiAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgIHt4OiBzZWdtZW50LngsIHk6IHNlZ21lbnQueSwgcGxheWVyOiBwbGF5ZXJOYW1lfSk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIH1cbn1cbkRPTS5yZW1vdmVIaXRzID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgbm9kZSBvZiBxdWVyeUFycmF5KFsnc3F1YXJlJywgJ2hpdCddKSlcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9ICcnOyAvLyBUT0RPOiByZW1vdmUgd2hlbiByZXBsYWNpbmcgaWNvblxufVxuXG5ET00ucG9zdCA9IGZ1bmN0aW9uKG1zZykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dzJykudGV4dENvbnRlbnQgPSBtc2c7XG59XG5ET00ucG9zdE5leHQgPSBmdW5jdGlvbihtc2cpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dzJyk7XG4gICAgbm9kZS50ZXh0Q29udGVudCArPSAnICcgKyBtc2c7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEhJRElORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRE9NLmhpZGVQbGF5ZXJCb2FyZCA9IGZ1bmN0aW9uKHBsYXllcikge1xuICAgIHF1ZXJ5RWxlbWVudChbJ2dhbWVib2FyZCddLCB7cGxheWVyOiBwbGF5ZXIubmFtZX0pLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuRE9NLnJldmVhbFBsYXllckJvYXJkID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgcXVlcnlFbGVtZW50KFsnZ2FtZWJvYXJkJ10sIHtwbGF5ZXI6IHBsYXllci5uYW1lfSkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEJVVFRPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRE9NLnNldEJ1dHRvbnMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgbGV0IHR3b1BsYXllck5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvUGxheWVyJyk7XG4gICAgbGV0IGNvbXB1dGVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpO1xuICAgIGxldCBhdXRvR2VuTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvR2VuJyk7XG4gICAgbGV0IGNvbmZpcm1Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0nKTtcbiAgICBsZXQgcmVzZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG4gICAgbGV0IHBlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVlaycpO1xuXG4gICAgdHdvUGxheWVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgncGxheWVyJyk7fSgpO1xuICAgIGNvbXB1dGVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgnY29tcHV0ZXInKTt9KCk7XG4gICAgY29uZmlybU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc2VsZWN0Q29uZmlybSgpO30oKTtcbiAgICBhdXRvR2VuTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RBdXRvR2VuKCk7fSgpO1xuICAgIHJlc2V0Tm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RSZXNldCgpO30oKTtcblxuICAgIHBlZWsub25tb3VzZWRvd24gPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnJldmVhbCgpO30oKTtcbiAgICBwZWVrLm9ubW91c2V1cCA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuaGlkZSgpO30oKTtcbiAgICBwZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiBnYW1lLnJldmVhbCgpKTtcbiAgICBwZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4gZ2FtZS5oaWRlKCkpO1xufVxuXG5ET00udXBkYXRlQnV0dG9ucyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpXG4gICAgICAgIHNldEJ1dHRvbkFjdGl2ZShidXR0b24uaWQsIGJ1dHRvbltzdGF0ZV0pO1xufVxuXG5jbGFzcyBCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBzdGFydCwgcDFwaWNrLCBwMWNvbmZpcm0sIHAycGljaywgcDJjb25maXJtLCBnYW1lLCByZXN1bHRzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLnAxcGljayA9IHAxcGljaztcbiAgICAgICAgdGhpcy5wMWNvbmZpcm0gPSBwMWNvbmZpcm07XG4gICAgICAgIHRoaXMucDJwaWNrID0gcDJwaWNrO1xuICAgICAgICB0aGlzLnAyY29uZmlybSA9IHAyY29uZmlybTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0c1xuICAgIH1cbn1cbmNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgbmV3IEJ1dHRvbigndHdvUGxheWVyJywgMSwgMCwgMCwgMCwgMCwgMCwgMCksXG4gICAgbmV3IEJ1dHRvbignY29tcHV0ZXInICwgMSwgMCwgMCwgMCwgMCwgMCwgMCksXG4gICAgbmV3IEJ1dHRvbignYXV0b0dlbicgICwgMCwgMSwgMCwgMSwgMCwgMCwgMCksXG4gICAgbmV3IEJ1dHRvbignY29uZmlybScgICwgMCwgMCwgMSwgMCwgMSwgMCwgMCksXG4gICAgbmV3IEJ1dHRvbigncmVzZXQnICAgICwgMCwgMSwgMSwgMSwgMSwgMSwgMSksXG4gICAgbmV3IEJ1dHRvbigncGVlaycgICAgICwgMCwgMCwgMCwgMCwgMCwgMSwgMClcbl07XG5mdW5jdGlvbiBzZXRCdXR0b25BY3RpdmUoaWQsIGlzQWN0aXZlKSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGlzQWN0aXZlKSBub2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGVsc2Ugbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBjcmVhdGVEaXYocGFyZW50LCBjbGFzc0FycmF5LCBkYXRhQXJyYXksIHRleHQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQobm9kZSk7XG5cbiAgICBpZiAoY2xhc3NBcnJheSlcbiAgICAgICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzQXJyYXkpXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcblxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhQXJyYXkpXG4gICAgICAgIG5vZGUuZGF0YXNldFtrZXldID0gZGF0YUFycmF5W2tleV07XG5cbiAgICBpZiAodGV4dClcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gbm9kZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHREaXYocGFyZW50LCB0ZXh0KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kKG5vZGUpO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBxdWVyeUFycmF5KGNsYXNzQXJyYXksIGRhdGFPYmplY3QpIHtcbiAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzQXJyYXkpXG4gICAgICAgIHN0cmluZyArPSAnLicgKyBjbHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFPYmplY3QpXG4gICAgICAgIHN0cmluZyArPSBgW2RhdGEtJHtrZXl9PVwiJHtkYXRhT2JqZWN0W2tleV19XCJdYFxuICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHJpbmcpXTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50KGNsYXNzQXJyYXksIGRhdGFPYmplY3QpIHtcbiAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzQXJyYXkpXG4gICAgICAgIHN0cmluZyArPSAnLicgKyBjbHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFPYmplY3QpXG4gICAgICAgIHN0cmluZyArPSBgW2RhdGEtJHtrZXl9PVwiJHtkYXRhT2JqZWN0W2tleV19XCJdYFxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzbGlzdChub2RlLCBib29sT2JqZWN0KSB7XG4gICAgZm9yIChsZXQga2V5IGluIGJvb2xPYmplY3QpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYm9vbE9iamVjdFtrZXldO1xuICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoa2V5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGtleSk7XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnXG5pbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJ1xuXG5pbXBvcnQgc29uYXJSZXNvdXJjZSBmcm9tICcuL2Fzc2V0cy9zb25hci5tcDMnO1xuaW1wb3J0IHNwbGFzaFJlc291cmNlIGZyb20gJy4vYXNzZXRzL3NwbGFzaC5tcDMnO1xuaW1wb3J0IHRodW1wUmVzb3VyY2UgZnJvbSAnLi9hc3NldHMvdGh1bXAubXAzJztcbmNvbnN0IHNvbmFyID0gbmV3IEF1ZGlvKHNvbmFyUmVzb3VyY2UpO1xuY29uc3Qgc3BsYXNoID0gbmV3IEF1ZGlvKHNwbGFzaFJlc291cmNlKTtcbmNvbnN0IHRodW1wID0gbmV3IEF1ZGlvKHRodW1wUmVzb3VyY2UpO1xuLy8gc29uYXIucGxheSgpOyBcblxuXG4vLyBjb25zdCBib2FyZE5vZGUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYXllcjEnKTtcbi8vIGNvbnN0IGJvYXJkTm9kZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQucGxheWVyMicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW25ldyBQbGF5ZXIoJ3AxJywgMCwgJ3BsYXllcicpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIoJ3AyJywgMSwgJ3BsYXllcicpXTtcbiAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHOiBwbGF5ZXJzICcsIHRoaXMucGxheWVycyk7IC8vIERFQlVHXG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZWwgPSBudWxsO1xuICAgICAgICAvLyBUT0RPOiBjb25zb2xpZGF0ZSBwaWNrL2NvbmZpcm1cbiAgICAgICAgLy8gcDFwaWNrLCBwMWNvbmZpcm0sIHAycGljaywgcDJjb25maXJtLCBnYW1lLCByZXN1bHQsIGFpcGljaz9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7IFxuICAgICAgICBcbiAgICAgICAgRE9NLnNldEJ1dHRvbnModGhpcyk7XG4gICAgICAgIERPTS5zZXRNb2RlbHModGhpcyk7XG4gICAgICAgIERPTS5zZXRHYW1lYm9hcmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG5cbiAgICAgICAgdGhpcy5zZXREZWxheSg2MDApO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY25ldyBzdGF0ZTogJWMke3N0YXRlfWAsICcnLCAnY29sb3I6IGdvbGRlbnJvZDsgZm9udC13ZWlnaHQ6IGJvbGQnKTtcblxuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnV2VsY29tZSB0byBCYXR0bGVzaGlwISBQbGVhc2Ugc2VsZWN0IGdhbWUgdHlwZS4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFwaWNrJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIHBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzLicpXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFjb25maXJtJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIHByZXNzIGNvbmZpcm0gdG8gZmluYWxpemUgc2hpcCBwbGFjZW1lbnQuJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AycGljayc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAyLCBwbGVhc2UgcGxhY2UgeW91ciBzaGlwcy4nKVxuICAgICAgICAgICAgICAgIERPTS5oaWRlUGxheWVyQm9hcmQodGhpcy5wbGF5ZXJzWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnBsYXllcnNbMV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wdXRlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXV0byBnZW5lcmF0aW5nIGNvbXB1dGVyJ3Mgc2hpcHMuLi5cIik7IC8vIGRlYnVnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QXV0b0dlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AyY29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAyLCBwcmVzcyBjb25maXJtIHRvIGZpbmFsaXplIHNoaXAgcGxhY2VtZW50LicpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wdXRlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXV0byBjb25maXJtaW5nIGNvbXB1dGVyJ3Mgc2hpcHMuLi5cIik7IC8vIGRlYnVnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Q29uZmlybSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dhbWUnOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgYXR0YWNrIHRoZSBlbmVteSBib2FyZC4nKVxuICAgICAgICAgICAgICAgIERPTS5oaWRlUGxheWVyQm9hcmQodGhpcy5wbGF5ZXJzWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHRzJzpcbiAgICAgICAgICAgICAgICBET00ucmV2ZWFsUGxheWVyQm9hcmQodGhpcy5wbGF5ZXJzWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSU5QVVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc2VsZWN0R2FtZVR5cGUodHlwZSkge1xuICAgICAgICBpZiAodGhpcy5kZWxheWVkKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdzdGFydCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnR5cGUgPSB0eXBlO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXB1dGVyJylcbiAgICAgICAgICAgIERPTS51cGRhdGVFbmVteUNvbG9yKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFwaWNrJyk7XG4gICAgfVxuXG4gICAgc2VsZWN0QXV0b0dlbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMnBpY2snKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuYXV0b0dlbigpO1xuXG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpID8gJ3AxY29uZmlybScgOiAncDJjb25maXJtJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIHNlbGVjdENvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgXG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHRoaXMudHVyblBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwodGhpcy50dXJuUGxheWVyLm5hbWUsIG1vZGVsKTtcbiAgICAgICAgdGhpcy5oaWRlTW9kZWxPcmllbnRhdGlvbih0aGlzLnR1cm5QbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFjb25maXJtJykgPyAncDJwaWNrJyA6ICdnYW1lJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICBzZWxlY3RSZXNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgnc3RhcnQnKSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzZXR0aW5nLi4uJyk7XG5cbiAgICAgICAgRE9NLnJlbW92ZUhpdHMoKTtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgRE9NLnJldmVhbFBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcylcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkgRE9NLnJlbW92ZVNoaXAocGxheWVyLm5hbWUsIHNoaXApO1xuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwocGxheWVyLm5hbWUsIG1vZGVsKTtcblxuICAgICAgICAgICAgRE9NLnJlc2V0RW5lbXlDb2xvcigpO1xuICAgICAgICAgICAgcGxheWVyLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICBwbGF5ZXIuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgY2xpY2tNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbW9kZWwgY2xpY2tlZCBhdCAke3BsYXllck5hbWV9LCAke2luZGV4fWApO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AxY29uZmlybScsICdwMnBpY2snLCAncDJjb25maXJtJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGNsaWNrU3F1YXJlKHgsIHksIHBsYXllck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNxdWFyZSBjbGlja2VkIGF0ICR7cGxheWVyTmFtZX0sIHg6JHt4fSwgeToke3l9YCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHtzdGF0dXM6ICdmYWlsdXJlJ307XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZWwgJiYgIXRoaXMuc2VsZWN0ZWRNb2RlbC5wbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gdGhpcy5zZWxlY3RlZE1vZGVsLm5hbWUgJiYgcGxheWVyTmFtZSA9PT0gdGhpcy50dXJuUGxheWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnBsYWNlTW9kZWwoeCwgeSwgdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzRnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdwMXBpY2snKSA/ICdwMWNvbmZpcm0nIDogJ3AyY29uZmlybSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXRlKCdnYW1lJykgJiYgdGhpcy50dXJuUGxheWVyLm5hbWUgIT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lLCByZXNwb25zZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIGxldCBmdWxsTmFtZSA9ICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gJ3AxJykgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJGdWxsTmFtZSA9IChwbGF5ZXJOYW1lID09PSAncDEnKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICAgICAgICAgIHN3aXRjaChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBtaXNzZWQhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7b3RoZXJGdWxsTmFtZX0sIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxhc2gucGxheSgpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09ICdwMicgJiYgdGhpcy5pc0NvbXB1dGVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dG8gYXR0YWNraW5nIG9uIGNvbXB1dGVyJ3MgdHVyblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0F0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIGhpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIGhpdCBhIHNoaXAhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7ZnVsbE5hbWV9LCBjb250aW51ZSBhdHRhY2tpbmcuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVTdW5rTW9kZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIHN1bmsgYSBzaGlwIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3ROZXh0KGAke2Z1bGxOYW1lfSwgY29udGludWUgYXR0YWNraW5nLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FsbCBlbmVteSBzaGlwcyBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVTdW5rTW9kZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIHN1bmsgYWxsIGVuZW15IHNoaXBzISAke2Z1bGxOYW1lfSB3aW5zIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bXAucGxheSgpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgXG4gICAgXG4gICAgYXN5bmMgYXV0b0F0dGFjaygpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge3N0YXR1czogJ2ZhaWx1cmUnLCByZXN1bHQ6IG51bGx9O1xuICAgICAgICB3aGlsZSAocmVzcG9uc2UucmVzdWx0ICE9PSAnZW1wdHkgc3F1YXJlJykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF0dGFja0FuZFdhaXQoMTAwMCk7XG4gICAgICAgICAgICBzd2l0Y2gocmVzcG9uc2UucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3QoYFRoZSBjb21wdXRlciBtaXNzZWQhYCk7XG4gICAgICAgICAgICAgICAgICAgIERPTS5wb3N0TmV4dChgUGxheWVyIDEsIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQuYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgaGl0JzpcbiAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3QoYFRoZSBjb21wdXRlciBoYXMgaGl0IGEgc2hpcCFgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3QoYFRoZSBjb21wdXRlciBoYXMgc3VuayBhIHNoaXAhYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FsbCBlbmVteSBzaGlwcyBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3QoYFRoZSBjb21wdXRlcmhhcyBzdW5rIGFsbCBlbmVteSBzaGlwcyEgVGhlIGNvbXB1dGVyIHdpbnMhYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3Jlc3VsdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBhdHRhY2tBbmRXYWl0KG1pbGxpc2Vjb25kcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0ge3N0YXR1czogJ2ZhaWx1cmUnfTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnBsYXllcnNbMF0uYm9hcmQucmVjZWl2ZVNtYXJ0QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhdXRvIGF0dGFja2luZywgcmVzcG9uc2U6YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIG1pbGxpc2Vjb25kcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsaWNrUm90YXRlTW9kZWwocGxheWVyTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMnBpY2snLCAncDFjb25maXJtJywgJ3AyY29uZmlybScpKSByZXR1cm47XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcblxuICAgICAgICBpZih0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gcGxheWVyLm1vZGVsc1tpbmRleF07IC8vIGRlYnVnXG4gICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwocGxheWVyTmFtZSwgcGxheWVyLm1vZGVsc1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVNb2RlbChwbGF5ZXIsIGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2xpY2tEZWxldGVNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xpY2tEZWxldGVNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBkZWxldGUgbW9kZWwsICBwbGF5ZXI6ICR7cGxheWVyTmFtZX0sIGluZGV4OiAke2luZGV4fWApO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHBsYXllci5tb2RlbHNbaW5kZXhdLnBsYWNlZCAmJiB0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZSkge1xuICAgICAgICAgICAgRE9NLnJlbW92ZVNoaXAocGxheWVyTmFtZSwgcGxheWVyLmJvYXJkLnNoaXBzW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZU1vZGVsKHBsYXllciwgaW5kZXgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0YXRlKCdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShgJHtwbGF5ZXIubmFtZX1waWNrYCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldmVhbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ2dhbWUnKSkgcmV0dXJuO1xuICAgICAgICBET00ucmV2ZWFsUGxheWVyQm9hcmQodGhpcy50dXJuUGxheWVyKTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ2dhbWUnKSkgcmV0dXJuO1xuICAgICAgICBET00uaGlkZVBsYXllckJvYXJkKHRoaXMudHVyblBsYXllcik7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc2VsZWN0TW9kZWwocGxheWVyTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycylcbiAgICAgICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICAgICAgbW9kZWwuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKS5tb2RlbHNbaW5kZXhdO1xuICAgICAgICBtb2RlbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlbCA9IG1vZGVsO1xuICAgIH1cbiAgICBkZWxldGVNb2RlbChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaGlwc1tpbmRleF0gPSBudWxsO1xuICAgICAgICBwbGF5ZXIubW9kZWxzW2luZGV4XS5wbGFjZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcm90YXRlTW9kZWwocGxheWVyLCBpbmRleCkge1xuICAgICAgICBwbGF5ZXIubW9kZWxzW2luZGV4XS5yb3RhdGUoKTtcbiAgICB9XG4gICAgaGlkZU1vZGVsT3JpZW50YXRpb24ocGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICBpZiAobW9kZWwuc2hpcC5zaGFwZSA9PT0gJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgICAgIG1vZGVsLnJvdGF0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHBsYWNlTW9kZWwoeCwgeSwgcGxheWVyLCBtYW51YWxNb2RlbCkge1xuICAgICAgICBsZXQgbW9kZWwgPSAobWFudWFsTW9kZWwgfHwgdGhpcy5zZWxlY3RlZE1vZGVsKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5hZGRTaGlwKHgsIHksIG1vZGVsLnNoaXAubGVuZ3RoLCBtb2RlbC5zaGlwLnNoYXBlLCBtb2RlbC5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGFjaW5nIG1vZGVsLi4uJywgcmVzdWx0KTsgLy8gREVCVUdcblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBtb2RlbC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgc29uYXIucGxheSgpOyAvLyBUT0RPOlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYXV0b0dlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGF1dG8gZ2VuZXJhdGluZyBzaGlwcyBmb3IgJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX1gKVxuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy50dXJuUGxheWVyO1xuXG4gICAgICAgIHRoaXMuY2xlYXIocGxheWVyKTtcbiAgICAgICAgcGxheWVyLmdlbmVyYXRlTW9kZWxzKHRydWUpO1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucGxhY2VNb2RlbCh4LCB5LCBwbGF5ZXIsIG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2xlYXIocGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpIHtcbiAgICAgICAgICAgIERPTS5yZW1vdmVNb2RlbChwbGF5ZXIubmFtZSwgbW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1vZGVsLnBsYWNlZCkge1xuICAgICAgICAgICAgICAgIERPTS5yZW1vdmVTaGlwKHBsYXllci5uYW1lLCBwbGF5ZXIuYm9hcmQuc2hpcHNbbW9kZWwuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZU1vZGVsKHBsYXllciwgbW9kZWwuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gT1VUUFVUID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBET00udXBkYXRlQnV0dG9ucyh0aGlzLnN0YXRlKTtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzKTtcbiAgICAgICAgRE9NLnVwZGF0ZUdhbWVib2FyZCh0aGlzKTtcbiAgICAgICAgRE9NLnVwZGF0ZUFjdGl2ZVBsYXllcih0aGlzKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGdldFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpXG4gICAgICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09IHBsYXllck5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG4gICAgZ2V0T3RoZXJQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgICAgIGxldCBvdGhlckluZGV4ID0gKHBsYXllci5uYW1lID09PSB0aGlzLnBsYXllcnNbMF0ubmFtZSkgPyAxIDogMDtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc1tvdGhlckluZGV4XTtcbiAgICB9XG4gICAgc3dpdGNoUGxheWVyKCkge1xuICAgICAgICBsZXQgb3RoZXJJbmRleCA9ICh0aGlzLnR1cm5QbGF5ZXIuaW5kZXggPT09IDApID8gMSA6IDA7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1tvdGhlckluZGV4XTtcbiAgICB9XG5cbiAgICBpc1N0YXRlKHN0YXRlQXJncykge1xuICAgICAgICBmb3IgKGxldCBzdGF0ZSBvZiBhcmd1bWVudHMpXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNDb21wdXRlcigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnBsYXllcnNbMV0udHlwZSA9PT0gJ2NvbXB1dGVyJylcbiAgICB9XG5cbiAgICBzZXREZWxheShtcykge1xuICAgICAgICB0aGlzLmRlbGF5ZWQgPSB0cnVlO1xuICAgICAgICB0aHVtcC5wbGF5KCk7IC8vIFRPRE86IGNoYW5nZVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwcm9ncmVzcyc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgfSwgbXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoNSkpO1xuICAgICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmdlbkRlZmF1bHRNb2RlbHMoKTtcbiAgICAgICAgLy8gdGhpcy5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICB9XG5cbiAgICBhZGRTaGlwKHgsIHksIGxlbmd0aCA9IDEsIHNoYXBlID0gJ3ZlcnRpY2FsJywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoeCwgeSkpXG4gICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBvdXQgb2YgYm91bmRzJ307XG4gICAgICAgIFxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGlmIChpc091dE9mQm91bmRzKHNlZ21lbnQueCwgc2VnbWVudC55KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBleHRlbmRzIG91dCBvZiBib3VuZHMnfTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcDIgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgICAgIGlmICghc2hpcDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNoaXAyLnNlZ21lbnRzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudDEueCA9PSBzZWdtZW50Mi54ICYmIHNlZ21lbnQxLnkgPT0gc2VnbWVudDIueSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIGludGVyc2VjdHMgb3RoZXIgc2hpcCd9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdID0gc2hpcDtcbiAgICAgICAgLy8gbGV0IHNlZzAgPSBzaGlwLnNlZ21lbnRzWzBdOyAvLyBkZWJ1Z1xuICAgICAgICAvLyBsZXQgc2VnMSA9IHNoaXAuc2VnbWVudHNbMV07IC8vIGRlYnVnXG4gICAgICAgIC8vIHNlZzAuaGl0ID0gdHJ1ZTsgLy8gREVCVUdcbiAgICAgICAgLy8gc2VnMS5oaXQgPSB0cnVlOyAvLyBERUJVR1xuICAgICAgICAvLyBzZWcwLnN1bmsgPSBzaGlwLmlzU3VuaygpOyAvLyBERUJVR1xuICAgICAgICAvLyBzZWcxLnN1bmsgPSBzaGlwLmlzU3VuaygpOyAvLyBERUJVR1xuICAgICAgICAvLyB0aGlzLmhpdHMucHVzaCh7eDogc2VnMC54LCB5OiBzZWcwLnl9KTsgLy8gZGVidWdcbiAgICAgICAgLy8gdGhpcy5oaXRzLnB1c2goe3g6IHNlZzEueCwgeTogc2VnMS55fSk7IC8vIGRlYnVnXG4gICAgICAgIHJldHVybiB7c3RhdHVzOiAnc3VjY2Vzcyd9O1xuICAgIH1cblxuICAgIGdldCBzaGlwc0Z1bGwoKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcylcbiAgICAgICAgICAgIGlmICghc2hpcClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGFkZE1vZGVsKHgsIHksIGxlbmd0aCA9IDEsIHNoYXBlID0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIHRoaXMubW9kZWxzLnB1c2goe3NoaXA6IHNoaXAsIGluZGV4OiBudWxsLCBwbGFjZWQ6IGZhbHNlLCBzdW5rOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBmb3IgKGxldCBoaXQgb2YgdGhpcy5oaXRzKVxuICAgICAgICAgICAgaWYgKGhpdC54ID09IHggJiYgaGl0LnkgPT0geSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc3F1YXJlIGFscmVhZHkgaGl0J307XG5cbiAgICAgICAgdGhpcy5oaXRzLnB1c2goe3gsIHl9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdlbXB0eSBzcXVhcmUnfTtcblxuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50LnggPT0geCAmJiBzZWdtZW50LnkgPT0geSkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmhpdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucmVzdWx0ID0gJ2VuZW15IHNoaXAgaGl0JztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hcmVTaGlwc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9ICdhbGwgZW5lbXkgc2hpcHMgc3Vuayc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9ICdlbmVteSBzaGlwIHN1bmsnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcmVjZWl2ZVNtYXJ0QXR0YWNrKCkge1xuICAgICAgICBsZXQgaGl0U2VnbWVudHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50LmhpdCAmJiAhc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgaGl0U2VnbWVudHMucHVzaChzZWdtZW50KTtcblxuICAgICAgICBpZiAoaGl0U2VnbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmlyc3QgYXV0byBhdHRhY2sgdy8gcmFuZG9tIHgseScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhZGphY2VudEhpdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBoaXRTZWdtZW50cykge1xuICAgICAgICAgICAgYWRqYWNlbnRIaXRzLnB1c2goe3g6IHNlZ21lbnQueCArIDEsIHk6IHNlZ21lbnQueX0pO1xuICAgICAgICAgICAgYWRqYWNlbnRIaXRzLnB1c2goe3g6IHNlZ21lbnQueCAtIDEsIHk6IHNlZ21lbnQueX0pO1xuICAgICAgICAgICAgYWRqYWNlbnRIaXRzLnB1c2goe3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55ICsgMX0pO1xuICAgICAgICAgICAgYWRqYWNlbnRIaXRzLnB1c2goe3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55IC0gMX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJvdW5kRmlsdGVyZWQgPSBhZGphY2VudEhpdHMuZmlsdGVyKGhpdCA9PiAhaXNPdXRPZkJvdW5kcyhoaXQueCwgaGl0LnkpKVxuICAgICAgICBsZXQgaGl0RmlsdGVyZWQgPSBib3VuZEZpbHRlcmVkLmZpbHRlcihoaXQgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJldkhpdCBvZiB0aGlzLmhpdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGl0LnggPT0gcHJldkhpdC54ICYmIGhpdC55ID09IHByZXZIaXQueSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY2VpdmVBdHRhY2soaGl0RmlsdGVyZWRbMF0ueCwgaGl0RmlsdGVyZWRbMF0ueSk7XG4gICAgfVxuXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZW5EZWZhdWx0U2hpcHMoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDEsIDEsIDIsICd2ZXJ0aWNhbCcsIDApO1xuICAgICAgICB0aGlzLmFkZFNoaXAoMywgMywgMiwgJ3ZlcnRpY2FsJywgMSk7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg1LCA1LCAyLCAndmVydGljYWwnLCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDcsIDcsIDIsICd2ZXJ0aWNhbCcsIDMpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoOSwgNCwgMiwgJ3ZlcnRpY2FsJywgNCk7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdE1vZGVscygpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAyKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA0KTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA1KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWxzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5tb2RlbHNbaV0uaW5kZXggPSBpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNPdXRPZkJvdW5kcyh4LCB5KSB7XG4gICAgcmV0dXJuICh4ID4gMTAgfHwgeCA8PSAwIHx8IHkgPiAxMCB8fCB5IDw9IDApO1xufSIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgdHlwZSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdGhpcy5tb2RlbHMgPSBuZXcgQXJyYXkoNSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU1vZGVscyhyYW5kb21TaGFwZXMgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBzaGFwZSA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICBpZiAocmFuZG9tU2hhcGVzKVxuICAgICAgICAgICAgICAgIHNoYXBlID0gKE1hdGgucmFuZG9tKCkgKiAyID49IDEpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgIHRoaXMubW9kZWxzW2luZGV4XSA9IG5ldyBNb2RlbCh0aGlzLm5hbWUsIGxlbmd0aHNbaW5kZXhdLCBpbmRleCwgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRNb2RlbHMoKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW5rTW9kZWxzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IHRoaXMuYm9hcmQuc2hpcHNbaV07XG4gICAgICAgICAgICB0aGlzLm1vZGVsc1tpXS5zdW5rID0gc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllck5hbWUsIGxlbmd0aCwgaW5kZXgsIHNoYXBlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHBsYXllck5hbWU7XG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBTaGlwKDAsIDAsIGxlbmd0aCwgc2hhcGUpO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIHRoaXMucmVjZW50ZXIoKTtcbiAgICB9XG4gICAgZ2V0IGJvb2xzKCkge1xuICAgICAgICByZXR1cm4ge3NlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLCBwbGFjZWQ6IHRoaXMucGxhY2VkLCBzdW5rOiB0aGlzLnN1bmt9O1xuICAgIH1cbiAgICByb3RhdGUoKSB7XG4gICAgICAgIGxldCBuZXdTaGFwZSA9ICh0aGlzLnNoaXAuc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFNoaXAodGhpcy5zaGlwLngsIHRoaXMuc2hpcC55LCB0aGlzLnNoaXAubGVuZ3RoLCBuZXdTaGFwZSk7XG4gICAgICAgIHRoaXMucmVjZW50ZXIoKTtcbiAgICB9XG4gICAgcmVjZW50ZXIoKSB7XG4gICAgICAgIGxldCBsZWZ0b3ZlcldpZHRoID0gNSAtIHRoaXMuc2hpcC53aWR0aDtcbiAgICAgICAgbGV0IGxlZnRvdmVySGVpZ2h0ID0gNSAtIHRoaXMuc2hpcC5oZWlnaHQ7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGguZmxvb3IobGVmdG92ZXJXaWR0aCAvIDIpO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLmZsb29yKGxlZnRvdmVySGVpZ2h0IC8gMik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlbmd0aCwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGR4ID0gKHNoYXBlID09PSAndmVydGljYWwnKSA/IDAgOiBpO1xuICAgICAgICAgICAgbGV0IGR5ID0gKHNoYXBlID09PSAndmVydGljYWwnKSA/IGkgOiAwO1xuICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKG5ldyBTZWdtZW50KHggKyBkeCwgeSArIGR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgYWRqdXN0Q29ybmVycyh0aGlzLnNlZ21lbnRzKTtcbiAgICB9XG4gICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gXG4gICAgICAgICAgICBwcmV2ICs9IChjdXJyLmlzSGl0KSA/IDEgOiAwLCAwKTtcbiAgICB9XG4gICAgaGl0KHgsIHkpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHggPT0gc2VnbWVudC54ICYmIHkgPT0gc2VnbWVudC55KSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudC5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1N1bmsoKSlcbiAgICAgICAgdGhpcy5zZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4gc2VnbWVudC5zdW5rID0gdHJ1ZSk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiB0aGlzLnNlZ21lbnRzKVxuICAgICAgICAgICAgaWYgKCFzZWdtZW50LmhpdClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQueCk7XG4gICAgICAgIGxldCBtaW4gPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA8IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgbGV0IG1heCA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyID4gcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICByZXR1cm4gbWF4IC0gbWluICsgMTtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuc2VnbWVudHMubWFwKHNlZ21lbnQgPT4gc2VnbWVudC55KTtcbiAgICAgICAgbGV0IG1pbiA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyIDwgcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICBsZXQgbWF4ID0gYXJyLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7cmV0dXJuIChjdXIgPiBwcmV2KSA/IGN1ciA6IHByZXY7fSwgMCk7XG4gICAgICAgIHJldHVybiBtYXggLSBtaW4gKyAxO1xuICAgIH1cbn1cblxuY2xhc3MgU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTsgLy8gVE9ETzogYXV0byB1cGRhdGVcbiAgICAgICAgdGhpcy5jb3JuZXJUTCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcm5lclRSID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ybmVyQkwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JuZXJCUiA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaXQ6IHRoaXMuaGl0LFxuICAgICAgICAgICAgc3VuazogdGhpcy5zdW5rLFxuICAgICAgICAgICAgY29ybmVyVEw6IHRoaXMuY29ybmVyVEwsXG4gICAgICAgICAgICBjb3JuZXJUUjogdGhpcy5jb3JuZXJUUixcbiAgICAgICAgICAgIGNvcm5lckJMOiB0aGlzLmNvcm5lckJMLFxuICAgICAgICAgICAgY29ybmVyQlI6IHRoaXMuY29ybmVyQlIsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkanVzdENvcm5lcnMoc2VnbWVudHMpIHtcbiAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzZWdtZW50cykge1xuICAgICAgICBsZXQgeDEgPSBzZWdtZW50MS54O1xuICAgICAgICBsZXQgeTEgPSBzZWdtZW50MS55O1xuICAgICAgICBmb3IgKGxldCBzZWdtZW50MiBvZiBzZWdtZW50cykge1xuICAgICAgICAgICAgbGV0IHgyID0gc2VnbWVudDIueDtcbiAgICAgICAgICAgIGxldCB5MiA9IHNlZ21lbnQyLnk7XG4gICAgICAgICAgICBpZiAoeDIgPT0geDEtMSAmJiB5MiA9PSB5MSkgeyAvLyB0byB0aGUgbGVmdCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCTCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSsxICYmIHkyID09IHkxKSB7IC8vIHRvIHRoZSByaWdodCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRSID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSAmJiB5MiA9PSB5MS0xKSB7IC8vIHRvIHRoZSB0b3Agb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVFIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDEgJiYgeTIgPT0geTErMSkgeyAvLyB0byB0aGUgYm90dG9tIG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQkwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJSID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==