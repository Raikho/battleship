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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n    --border-glow-enemy: #f87171; /* Red 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-rows: 1fr min-content max-content 1fr;\n    grid-template-areas: \".\" \"info\" \"boards\" \".\";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n#info {\n    grid-area: info;\n    align-self: end;\n    width: 50vw;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"buttons logs\";\n    gap: 20px;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n    cursor: inherit;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n    align-self: start;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.modelboard-container.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --indigo-lighter: #05050788;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n\n    --rotate: #1e1b4b;\n    --rotate-lighter: #10b981; /* Emerald 500 */\n    --delete: #1e1b4b;\n    --delete-lighter: #b91c1c; /* Red 700 */\n\n    --border-glow: #22d3ee; /* Cyan 400*/\n    --border-glow-enemy: #f87171; /* Red 400*/\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: min(18px, 2vw);\n\n    display: grid;\n    grid-template-rows: 1fr min-content max-content 1fr;\n    grid-template-areas: \".\" \"info\" \"boards\" \".\";\n\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n#info {\n    grid-area: info;\n    align-self: end;\n    width: 50vw;\n    \n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"buttons logs\";\n    gap: 20px;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    grid-area: buttons;\n    align-self:center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-size:  1.5vw;\n    font-weight: bold;\n    padding: 4px 12px;\n    cursor: inherit;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    display: none;\n    filter: opacity(.5);\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    grid-area: logs;\n\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 2vw;\n    font-weight: bold;\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    grid-area: boards;\n    align-self: start;\n\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n@media(min-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr 1fr min-content;\n        grid-template-areas: \"models1 board1 board2 models2\";\n    \n        justify-items: center;\n        align-items: center;\n        gap: 1vw;\n    }\n}\n@media (max-aspect-ratio: 1) {\n    .board-container {\n        display: grid;\n        grid-template-columns: min-content 1fr  min-content;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: \n            \"models1 board1 board1\" \n            \"board2 board2 models2\";\n        gap: 1vw;\n    }\n}\n/* ======================= Model Container ========================= */\n/* ================================================================= */\n.modelboard-container[data-player=\"p1\"] {grid-area: models1}\n.modelboard-container[data-player=\"p2\"] {grid-area: models2}\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n    border: 5px solid #0000;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.modelboard-container.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.model-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    column-gap: 5px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n\n/* ============================ Model Icons =========================== */\n.icon {\n    height: min(20px, 2vw);\n    width: min(20px, 2vw);\n    background-color: indigo;\n    border-radius: 2px;\n    box-shadow: 5px 5px 5px red;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n\n \n    align-self: center;\n    justify-self: center;\n}\n.icon.rotate {\n    -webkit-mask-image: url('assets/rotate.svg');\n    mask-image: url('assets/rotate.svg');\n    background-color: var(--rotate);\n}\n.icon.delete {\n    -webkit-mask-image: url('assets/delete.svg');\n    mask-image: url('assets/delete.svg');\n    background-color: var(--delete);\n}\n[data-player=\"p1\"]>.icon.delete {transform: rotate(180deg);}\n.icon.rotate:hover {background-color: var(--rotate-lighter);}\n.icon.delete:hover {background-color: var(--delete-lighter);}\n.icon:active {filter: brightness(1.1)}\n\n/* ============================ Model Board =========================== */\n.modelboard {\n    grid-area: board;\n\n    border: 3px solid #f5f5f5bb;\n    border-radius: 2px;\n    width: 5vw;\n    height: 5vw;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {\n    border: 3px solid #f5f5f5;\n    box-shadow: 0 0 15px #f5f5f5;\n}\n.modelboard.sunk {border-color: #ff4500bb;}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n.modelsquare.ship {background-color: var(--indigo-lighter);}\n.modelboard.placed>.modelsquare.ship {background-color: var(--indigo);}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard[data-player=\"p1\"] {grid-area: board1}\n.gameboard[data-player=\"p2\"] {grid-area: board2}\n.gameboard {\n    width: 35vw;\n    height: 35vw;\n    background-color: var(--board-bg);\n    border-radius: 4px;\n    border: 5px solid #0000;\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard.active {\n    border: 5px solid var(--border-glow);\n    box-shadow: 0 0 15px var(--border-glow);\n}\n.gameboard.active.computer {\n    border: 5px solid var(--border-glow-enemy);\n    box-shadow: 0 0 15px var(--border-glow-enemy);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n"],"sourceRoot":""}]);
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
        if (type === 'computer')
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateEnemyColor();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1E7O0FBRTdCLGlCQUFpQixnREFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3JvdGF0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWluZGlnby1saWdodGVyOiAjMDUwNTA3ODg7XFxuICAgIC0tYWNjZW50OiAjMEU3NDkwO1xcbiAgICAtLWRhcmtBbWJlcjogIzQ1MWEwMztcXG4gICAgLS1kYXJrVmlvbGV0OiAjMmUxMDY1O1xcbiAgICAtLWRhcmtSZWQ6ICM0NTBhMGE7XFxuXFxuICAgIC0tYWN0aXZlLWJvYXJkLWJnOiBkYXJrc2VhZ3JlZW47XFxuXFxuICAgIC0tcm90YXRlOiAjMWUxYjRiO1xcbiAgICAtLXJvdGF0ZS1saWdodGVyOiAjMTBiOTgxOyAvKiBFbWVyYWxkIDUwMCAqL1xcbiAgICAtLWRlbGV0ZTogIzFlMWI0YjtcXG4gICAgLS1kZWxldGUtbGlnaHRlcjogI2I5MWMxYzsgLyogUmVkIDcwMCAqL1xcblxcbiAgICAtLWJvcmRlci1nbG93OiAjMjJkM2VlOyAvKiBDeWFuIDQwMCovXFxuICAgIC0tYm9yZGVyLWdsb3ctZW5lbXk6ICNmODcxNzE7IC8qIFJlZCA0MDAqL1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBtaW4oMThweCwgMnZ3KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLlxcXCIgXFxcImluZm9cXFwiIFxcXCJib2FyZHNcXFwiIFxcXCIuXFxcIjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiNpbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiBpbmZvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYnV0dG9ucyBsb2dzXFxcIjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGN1cnNvcjogaW5oZXJpdDtcXG59XFxuYnV0dG9uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSguNSk7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGdyaWQtYXJlYTogbG9ncztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmRzO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEobWluLWFzcGVjdC1yYXRpbzogMSkge1xcbiAgICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibW9kZWxzMSBib2FyZDEgYm9hcmQyIG1vZGVsczJcXFwiO1xcbiAgICBcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC1hc3BlY3QtcmF0aW86IDEpIHtcXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAgICAgXFxcIm1vZGVsczEgYm9hcmQxIGJvYXJkMVxcXCIgXFxuICAgICAgICAgICAgXFxcImJvYXJkMiBib2FyZDIgbW9kZWxzMlxcXCI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczF9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczJ9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyLmFjdGl2ZS5jb21wdXRlciB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93LWVuZW15KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3ctZW5lbXkpO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gYm9hcmRcXFwiIFxcXCIuIGJvYXJkXFxcIjtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG4ubW9kZWwtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJib2FyZCAuXFxcIiBcXFwiYm9hcmQgLlxcXCI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgSWNvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IG1pbigyMHB4LCAydncpO1xcbiAgICB3aWR0aDogbWluKDIwcHgsIDJ2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZWQ7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuXFxuIFxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaWNvbi5yb3RhdGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdGF0ZSk7XFxufVxcbi5pY29uLmRlbGV0ZSB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlKTtcXG59XFxuW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdPi5pY29uLmRlbGV0ZSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt9XFxuLmljb24ucm90YXRlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUtbGlnaHRlcik7fVxcbi5pY29uLmRlbGV0ZTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVsZXRlLWxpZ2h0ZXIpO31cXG4uaWNvbjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQge1xcbiAgICBncmlkLWFyZWE6IGJvYXJkO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjVmNWY1YmI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiA1dnc7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5tb2RlbGJvYXJkLnNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggI2Y1ZjVmNTtcXG59XFxuLm1vZGVsYm9hcmQuc3VuayB7Ym9yZGVyLWNvbG9yOiAjZmY0NTAwYmI7fVxcbi5tb2RlbHNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY2O1xcbn1cXG4ubW9kZWxzcXVhcmUuc2hpcCB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvLWxpZ2h0ZXIpO31cXG4ubW9kZWxib2FyZC5wbGFjZWQ+Lm1vZGVsc3F1YXJlLnNoaXAge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMX1cXG4uZ2FtZWJvYXJkW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IGJvYXJkMn1cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwMDAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmdhbWVib2FyZC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLmdhbWVib2FyZC5hY3RpdmUuY29tcHV0ZXIge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdy1lbmVteSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93LWVuZW15KTtcXG59XFxuLmdhbWVib2FyZD4qIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1iZyk7XFxufVxcbi5zaGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRMKSB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRSKSB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQkwpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCTCkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQlIpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCUikge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7O0lBRWxCLCtCQUErQjs7SUFFL0IsaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFFLGdCQUFnQjtJQUMzQyxpQkFBaUI7SUFDakIseUJBQXlCLEVBQUUsWUFBWTs7SUFFdkMsc0JBQXNCLEVBQUUsWUFBWTtJQUNwQyw0QkFBNEIsRUFBRSxXQUFXO0FBQzdDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7O0lBRVQsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsbURBQW1EO0lBQ25ELDRDQUE0Qzs7SUFFNUMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVzs7SUFFWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxTQUFTO0FBQ2I7QUFDQSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFO0lB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dUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQSxzRUFBc0U7O0FBRXRFOztJQUVJLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLDZCQUE2QjtBQUNqQztBQUNBOztJQUVJLCtCQUErQjtBQUNuQztBQUNBOztJQUVJLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmc6IGRhcmtzbGF0ZWdyYXk7XFxuICAgIC0tYm9hcmQtYmc6ICM5NGEzYjg7XFxuICAgIC0tZmc6ICMxZTI5M2JhYTtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwN2FhO1xcbiAgICAtLWluZGlnby1saWdodGVyOiAjMDUwNTA3ODg7XFxuICAgIC0tYWNjZW50OiAjMEU3NDkwO1xcbiAgICAtLWRhcmtBbWJlcjogIzQ1MWEwMztcXG4gICAgLS1kYXJrVmlvbGV0OiAjMmUxMDY1O1xcbiAgICAtLWRhcmtSZWQ6ICM0NTBhMGE7XFxuXFxuICAgIC0tYWN0aXZlLWJvYXJkLWJnOiBkYXJrc2VhZ3JlZW47XFxuXFxuICAgIC0tcm90YXRlOiAjMWUxYjRiO1xcbiAgICAtLXJvdGF0ZS1saWdodGVyOiAjMTBiOTgxOyAvKiBFbWVyYWxkIDUwMCAqL1xcbiAgICAtLWRlbGV0ZTogIzFlMWI0YjtcXG4gICAgLS1kZWxldGUtbGlnaHRlcjogI2I5MWMxYzsgLyogUmVkIDcwMCAqL1xcblxcbiAgICAtLWJvcmRlci1nbG93OiAjMjJkM2VlOyAvKiBDeWFuIDQwMCovXFxuICAgIC0tYm9yZGVyLWdsb3ctZW5lbXk6ICNmODcxNzE7IC8qIFJlZCA0MDAqL1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWZnKTtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBtaW4oMThweCwgMnZ3KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLlxcXCIgXFxcImluZm9cXFwiIFxcXCJib2FyZHNcXFwiIFxcXCIuXFxcIjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiNpbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiBpbmZvO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYnV0dG9ucyBsb2dzXFxcIjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGN1cnNvcjogaW5oZXJpdDtcXG59XFxuYnV0dG9uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSguNSk7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMb2dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jbG9ncyB7XFxuICAgIGdyaWQtYXJlYTogbG9ncztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2JvYXJkcyB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmRzO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5AbWVkaWEobWluLWFzcGVjdC1yYXRpbzogMSkge1xcbiAgICAuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciAxZnIgbWluLWNvbnRlbnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibW9kZWxzMSBib2FyZDEgYm9hcmQyIG1vZGVsczJcXFwiO1xcbiAgICBcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC1hc3BlY3QtcmF0aW86IDEpIHtcXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgIG1pbi1jb250ZW50O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAgICAgXFxcIm1vZGVsczEgYm9hcmQxIGJvYXJkMVxcXCIgXFxuICAgICAgICAgICAgXFxcImJvYXJkMiBib2FyZDIgbW9kZWxzMlxcXCI7XFxuICAgICAgICBnYXA6IDF2dztcXG4gICAgfVxcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMVxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczF9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtncmlkLWFyZWE6IG1vZGVsczJ9XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1ib3JkZXItZ2xvdyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJvcmRlci1nbG93KTtcXG59XFxuLm1vZGVsYm9hcmQtY29udGFpbmVyLmFjdGl2ZS5jb21wdXRlciB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93LWVuZW15KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3ctZW5lbXkpO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gYm9hcmRcXFwiIFxcXCIuIGJvYXJkXFxcIjtcXG4gICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG4ubW9kZWwtY29udGFpbmVyW2RhdGEtcGxheWVyPVxcXCJwMlxcXCJdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJib2FyZCAuXFxcIiBcXFwiYm9hcmQgLlxcXCI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW9kZWwgSWNvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IG1pbigyMHB4LCAydncpO1xcbiAgICB3aWR0aDogbWluKDIwcHgsIDJ2dyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZWQ7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuXFxuIFxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaWNvbi5yb3RhdGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3JvdGF0ZS5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvcm90YXRlLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3RhdGUpO1xcbn1cXG4uaWNvbi5kZWxldGUge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2RlbGV0ZS5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvZGVsZXRlLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUpO1xcbn1cXG5bZGF0YS1wbGF5ZXI9XFxcInAxXFxcIl0+Lmljb24uZGVsZXRlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO31cXG4uaWNvbi5yb3RhdGU6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdGF0ZS1saWdodGVyKTt9XFxuLmljb24uZGVsZXRlOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWxldGUtbGlnaHRlcik7fVxcbi5pY29uOmFjdGl2ZSB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSl9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbCBCb2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ubW9kZWxib2FyZCB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmNWY1ZjViYjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBoZWlnaHQ6IDV2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuLm1vZGVsYm9hcmQuc2VsZWN0ZWQge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjVmNWY1O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjZjVmNWY1O1xcbn1cXG4ubW9kZWxib2FyZC5zdW5rIHtib3JkZXItY29sb3I6ICNmZjQ1MDBiYjt9XFxuLm1vZGVsc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjY7XFxufVxcbi5tb2RlbHNxdWFyZS5zaGlwIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28tbGlnaHRlcik7fVxcbi5tb2RlbGJvYXJkLnBsYWNlZD4ubW9kZWxzcXVhcmUuc2hpcCB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQm9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5nYW1lYm9hcmRbZGF0YS1wbGF5ZXI9XFxcInAxXFxcIl0ge2dyaWQtYXJlYTogYm9hcmQxfVxcbi5nYW1lYm9hcmRbZGF0YS1wbGF5ZXI9XFxcInAyXFxcIl0ge2dyaWQtYXJlYTogYm9hcmQyfVxcbi5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbn1cXG4uZ2FtZWJvYXJkLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3cpO1xcbn1cXG4uZ2FtZWJvYXJkLmFjdGl2ZS5jb21wdXRlciB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWJvcmRlci1nbG93LWVuZW15KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYm9yZGVyLWdsb3ctZW5lbXkpO1xcbn1cXG4uZ2FtZWJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcbi5zaGlwLFxcbi5zcXVhcmUuc2hpcC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbn1cXG4uaGlkZGVuPi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFNzQ5MDk5O1xcbn1cXG4uc3F1YXJlLmhpdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5zcXVhcmUuc2hpcC5oaXQuc3VuayB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkZW5yb2Q7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGlwIENvcm5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lclRMKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyVEwpIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG59XFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lclRSKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyVFIpIHtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJCTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lckJMKSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJCUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lckJSKSB7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERPTSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgRE9NO1xuXG5ET00uc2V0TW9kZWxzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnbW9kZWxib2FyZCddKSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDU7IHkrKylcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKVxuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihib2FyZE5vZGUsIFsnbW9kZWxzcXVhcmUnXSwgXG4gICAgICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5LCBwbGF5ZXI6IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgaW5kZXg6IGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4fSk7XG5cbiAgICAgICAgYm9hcmROb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdhbWUuY2xpY2tNb2RlbChib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIsIGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSgpO1xuXG4gICAgICAgIGxldCBjb250YWluZXJOb2RlID0gYm9hcmROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnRhaW5lck5vZGUuZGF0YXNldC5wbGF5ZXIgPSBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXI7XG5cbiAgICAgICAgbGV0IHJvdGF0ZU5vZGUgPSBjcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ3JvdGF0ZSddLCBudWxsKTtcbiAgICAgICAgbGV0IGRlbGV0ZU5vZGUgPSBjcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ2RlbGV0ZSddLCBudWxsKTtcbiAgICAgICAgcm90YXRlTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW1lLmNsaWNrUm90YXRlTW9kZWwoYm9hcmROb2RlLmRhdGFzZXQucGxheWVyLCBib2FyZE5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0oKTtcbiAgICAgICAgZGVsZXRlTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnYW1lLmNsaWNrRGVsZXRlTW9kZWwoYm9hcmROb2RlLmRhdGFzZXQucGxheWVyLCBib2FyZE5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIH0oKTtcblxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZU1vZGVscyA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBwbGF5ZXIgb2YgZ2FtZS5wbGF5ZXJzKSB7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpIHtcbiAgICAgICAgICAgIGxldCBib2FyZE5vZGUgPSBxdWVyeUVsZW1lbnQoWydtb2RlbGJvYXJkJ10sIHtwbGF5ZXI6IHBsYXllci5uYW1lLCBpbmRleDogbW9kZWwuaW5kZXh9KTtcbiAgICAgICAgICAgIHNldENsYXNzbGlzdChib2FyZE5vZGUsIG1vZGVsLmJvb2xzKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBtb2RlbC5zaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFsnbW9kZWxzcXVhcmUnXSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VnbWVudC54ICsgbW9kZWwub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlZ21lbnQueSArIG1vZGVsLm9mZnNldFksIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXIubmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNldENsYXNzbGlzdChub2RlLCB7Li4uc2VnbWVudC5ib29scywgc2hpcDogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5ET00udXBkYXRlQWN0aXZlUGxheWVyID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGxldCB0dXJuUGxheWVyTmFtZSA9IChnYW1lLnR1cm5QbGF5ZXIpID8gZ2FtZS50dXJuUGxheWVyLm5hbWUgOiAnbi9hJztcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ21vZGVsYm9hcmQtY29udGFpbmVyJ10pKSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IChnYW1lLnR1cm5QbGF5ZXIgJiYgdHVyblBsYXllck5hbWUgPT09IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcikgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHNldENsYXNzbGlzdChib2FyZE5vZGUsIHthY3RpdmU6IGlzQWN0aXZlfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnZ2FtZWJvYXJkJ10pKSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IChnYW1lLnR1cm5QbGF5ZXIgJiYgdHVyblBsYXllck5hbWUgPT09IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcikgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHNldENsYXNzbGlzdChib2FyZE5vZGUsIHthY3RpdmU6IGlzQWN0aXZlfSk7XG4gICAgfVxufVxuXG5ET00uc2V0R2FtZWJvYXJkID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnZ2FtZWJvYXJkJ10pKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTE7IHkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPT0gMCAmJiB5ID09IDApIGNyZWF0ZURpdihib2FyZE5vZGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPT0gMCkgY3JlYXRlVGV4dERpdihib2FyZE5vZGUsIHkpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeSA9PSAwKSBjcmVhdGVUZXh0RGl2KGJvYXJkTm9kZSwgeCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY3JlYXRlRGl2KGJvYXJkTm9kZSwgWydzcXVhcmUnLCAndGVzdCddLFxuICAgICAgICAgICAgICAgICAgICAgICAge3g6IHgsIHk6IHksIHBsYXllcjogYm9hcmROb2RlLmRhdGFzZXQucGxheWVyfSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5jbGlja1NxdWFyZSh4LCB5LCBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5ET00udXBkYXRlR2FtZWJvYXJkID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IHBsYXllciBvZiBnYW1lLnBsYXllcnMpIHtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYm9hcmQuc2hpcHMpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBwbGF5ZXIuYm9hcmQuc2hpcHMpIHtcbiAgICAgICAgICAgIGlmICghc2hpcClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFsnc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHt4OiBzZWdtZW50LngsIHk6IHNlZ21lbnQueSwgcGxheWVyOiBwbGF5ZXIubmFtZX0pO1xuICAgICAgICAgICAgICAgIHNldENsYXNzbGlzdChub2RlLCB7Li4uc2VnbWVudC5ib29scywgc2hpcDogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IHBsYXllciBvZiBnYW1lLnBsYXllcnMpIHtcbiAgICAgICAgZm9yIChsZXQgaGl0IG9mIHBsYXllci5ib2FyZC5oaXRzKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ3NxdWFyZSddLFxuICAgICAgICAgICAgICAgIHt4OiBoaXQueCx5OiBoaXQueSxwbGF5ZXI6IHBsYXllci5uYW1lfSk7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9ICd4JzsgLy8gVE9ETzogY2hhbmdlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS51cGRhdGVFbmVteUNvbG9yID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGdhbWVib2FyZE5vZGUgPSBxdWVyeUVsZW1lbnQoWydnYW1lYm9hcmQnXSwge3BsYXllcjogJ3AyJ30pXG4gICAgbGV0IG1vZGVsYm9hcmROb2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxib2FyZC1jb250YWluZXInXSwge3BsYXllcjogJ3AyJ30pXG4gICAgZ2FtZWJvYXJkTm9kZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlcicpO1xuICAgIG1vZGVsYm9hcmROb2RlLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyJyk7XG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgZW5lbXkgbm9kZSBjb2xvciBjbGFzcycpO1xufVxuRE9NLnJlc2V0RW5lbXlDb2xvciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBnYW1lYm9hcmROb2RlID0gcXVlcnlFbGVtZW50KFsnZ2FtZWJvYXJkJ10sIHtwbGF5ZXI6ICdwMid9KVxuICAgIGxldCBtb2RlbGJvYXJkTm9kZSA9IHF1ZXJ5RWxlbWVudChbJ21vZGVsYm9hcmQtY29udGFpbmVyJ10sIHtwbGF5ZXI6ICdwMid9KVxuICAgIGdhbWVib2FyZE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcHV0ZXInKTtcbiAgICBtb2RlbGJvYXJkTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlcicpO1xuICAgIGNvbnNvbGUubG9nKCd1bnNldHRpbmcgZW5lbXkgbm9kZSBjb2xvciBjbGFzcycpO1xufVxuXG5ET00ucmVtb3ZlTW9kZWwgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBtb2RlbCkge1xuICAgIGZvciAobGV0IHNlZ21lbnQgb2YgbW9kZWwuc2hpcC5zZWdtZW50cykge1xuICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ21vZGVsc3F1YXJlJ10sIHtcbiAgICAgICAgICAgIHg6IHNlZ21lbnQueCArIG1vZGVsLm9mZnNldFgseTogc2VnbWVudC55ICsgbW9kZWwub2Zmc2V0WSwgXG4gICAgICAgICAgICBwbGF5ZXI6IHBsYXllck5hbWUsIGluZGV4OiBtb2RlbC5pbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfVxufVxuRE9NLnJlbW92ZVNoaXAgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBzaGlwKSB7XG4gICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFsnc3F1YXJlJ10sXG4gICAgICAgICAgICB7eDogc2VnbWVudC54LCB5OiBzZWdtZW50LnksIHBsYXllcjogcGxheWVyTmFtZX0pO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICB9XG59XG5ET00ucmVtb3ZlSGl0cyA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAobGV0IG5vZGUgb2YgcXVlcnlBcnJheShbJ3NxdWFyZScsICdoaXQnXSkpXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSAnJzsgLy8gVE9ETzogcmVtb3ZlIHdoZW4gcmVwbGFjaW5nIGljb25cbn1cblxuRE9NLnBvc3QgPSBmdW5jdGlvbihtc2cpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncycpLnRleHRDb250ZW50ID0gbXNnO1xufVxuRE9NLnBvc3ROZXh0ID0gZnVuY3Rpb24obXNnKSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncycpO1xuICAgIG5vZGUudGV4dENvbnRlbnQgKz0gJyAnICsgbXNnO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBISURJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkRPTS5oaWRlUGxheWVyQm9hcmQgPSBmdW5jdGlvbihwbGF5ZXIpIHtcbiAgICBxdWVyeUVsZW1lbnQoWydnYW1lYm9hcmQnXSwge3BsYXllcjogcGxheWVyLm5hbWV9KS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn1cbkRPTS5yZXZlYWxQbGF5ZXJCb2FyZCA9IGZ1bmN0aW9uKHBsYXllcikge1xuICAgIHF1ZXJ5RWxlbWVudChbJ2dhbWVib2FyZCddLCB7cGxheWVyOiBwbGF5ZXIubmFtZX0pLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBCVVRUT05TID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkRPTS5zZXRCdXR0b25zID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGxldCB0d29QbGF5ZXJOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R3b1BsYXllcicpO1xuICAgIGxldCBjb21wdXRlck5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKTtcbiAgICBsZXQgYXV0b0dlbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b0dlbicpO1xuICAgIGxldCBjb25maXJtTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtJyk7XG4gICAgbGV0IHJlc2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xuICAgIGxldCBwZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlZWsnKTtcblxuICAgIHR3b1BsYXllck5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc2VsZWN0R2FtZVR5cGUoJ3BsYXllcicpO30oKTtcbiAgICBjb21wdXRlck5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc2VsZWN0R2FtZVR5cGUoJ2NvbXB1dGVyJyk7fSgpO1xuICAgIGNvbmZpcm1Ob2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdENvbmZpcm0oKTt9KCk7XG4gICAgYXV0b0dlbk5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc2VsZWN0QXV0b0dlbigpO30oKTtcbiAgICByZXNldE5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc2VsZWN0UmVzZXQoKTt9KCk7XG5cbiAgICBwZWVrLm9ubW91c2Vkb3duID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5yZXZlYWwoKTt9KCk7XG4gICAgcGVlay5vbm1vdXNldXAgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLmhpZGUoKTt9KCk7XG4gICAgcGVlay5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gZ2FtZS5yZXZlYWwoKSk7XG4gICAgcGVlay5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IGdhbWUuaGlkZSgpKTtcbn1cblxuRE9NLnVwZGF0ZUJ1dHRvbnMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKVxuICAgICAgICBzZXRCdXR0b25BY3RpdmUoYnV0dG9uLmlkLCBidXR0b25bc3RhdGVdKTtcbn1cblxuY2xhc3MgQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgc3RhcnQsIHAxcGljaywgcDFjb25maXJtLCBwMnBpY2ssIHAyY29uZmlybSwgZ2FtZSwgcmVzdWx0cykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5wMXBpY2sgPSBwMXBpY2s7XG4gICAgICAgIHRoaXMucDFjb25maXJtID0gcDFjb25maXJtO1xuICAgICAgICB0aGlzLnAycGljayA9IHAycGljaztcbiAgICAgICAgdGhpcy5wMmNvbmZpcm0gPSBwMmNvbmZpcm07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHNcbiAgICB9XG59XG5jb25zdCBidXR0b25zID0gW1xuICAgIG5ldyBCdXR0b24oJ3R3b1BsYXllcicsIDEsIDAsIDAsIDAsIDAsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ2NvbXB1dGVyJyAsIDEsIDAsIDAsIDAsIDAsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ2F1dG9HZW4nICAsIDAsIDEsIDEsIDEsIDEsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ2NvbmZpcm0nICAsIDAsIDAsIDEsIDAsIDEsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ3Jlc2V0JyAgICAsIDAsIDEsIDEsIDEsIDEsIDEsIDEpLFxuICAgIG5ldyBCdXR0b24oJ3BlZWsnICAgICAsIDAsIDAsIDAsIDAsIDAsIDEsIDApXG5dO1xuZnVuY3Rpb24gc2V0QnV0dG9uQWN0aXZlKGlkLCBpc0FjdGl2ZSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChpc0FjdGl2ZSkgbm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBlbHNlIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gY3JlYXRlRGl2KHBhcmVudCwgY2xhc3NBcnJheSwgZGF0YUFycmF5LCB0ZXh0KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kKG5vZGUpO1xuXG4gICAgaWYgKGNsYXNzQXJyYXkpXG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YUFycmF5KVxuICAgICAgICBub2RlLmRhdGFzZXRba2V5XSA9IGRhdGFBcnJheVtrZXldO1xuXG4gICAgaWYgKHRleHQpXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0RGl2KHBhcmVudCwgdGV4dCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChub2RlKTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcXVlcnlBcnJheShjbGFzc0FycmF5LCBkYXRhT2JqZWN0KSB7XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICBzdHJpbmcgKz0gJy4nICsgY2xzO1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhT2JqZWN0KVxuICAgICAgICBzdHJpbmcgKz0gYFtkYXRhLSR7a2V5fT1cIiR7ZGF0YU9iamVjdFtrZXldfVwiXWBcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5nKV07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudChjbGFzc0FycmF5LCBkYXRhT2JqZWN0KSB7XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICBzdHJpbmcgKz0gJy4nICsgY2xzO1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhT2JqZWN0KVxuICAgICAgICBzdHJpbmcgKz0gYFtkYXRhLSR7a2V5fT1cIiR7ZGF0YU9iamVjdFtrZXldfVwiXWBcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzc2xpc3Qobm9kZSwgYm9vbE9iamVjdCkge1xuICAgIGZvciAobGV0IGtleSBpbiBib29sT2JqZWN0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGJvb2xPYmplY3Rba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShrZXkpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJ1xuaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcydcblxuaW1wb3J0IHNvbmFyUmVzb3VyY2UgZnJvbSAnLi9hc3NldHMvc29uYXIubXAzJztcbmltcG9ydCBzcGxhc2hSZXNvdXJjZSBmcm9tICcuL2Fzc2V0cy9zcGxhc2gubXAzJztcbmltcG9ydCB0aHVtcFJlc291cmNlIGZyb20gJy4vYXNzZXRzL3RodW1wLm1wMyc7XG5jb25zdCBzb25hciA9IG5ldyBBdWRpbyhzb25hclJlc291cmNlKTtcbmNvbnN0IHNwbGFzaCA9IG5ldyBBdWRpbyhzcGxhc2hSZXNvdXJjZSk7XG5jb25zdCB0aHVtcCA9IG5ldyBBdWRpbyh0aHVtcFJlc291cmNlKTtcbnNvbmFyLnBsYXkoKTsgXG5cblxuLy8gY29uc3QgYm9hcmROb2RlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIxJyk7XG4vLyBjb25zdCBib2FyZE5vZGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYXllcjInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtuZXcgUGxheWVyKCdwMScsIDAsICdwbGF5ZXInKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyKCdwMicsIDEsICdwbGF5ZXInKV07XG4gICAgICAgIGNvbnNvbGUubG9nKCdERUJVRzogcGxheWVycyAnLCB0aGlzLnBsYXllcnMpOyAvLyBERUJVR1xuICAgICAgICB0aGlzLmRlbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gbnVsbDtcbiAgICAgICAgLy8gVE9ETzogY29uc29saWRhdGUgcGljay9jb25maXJtXG4gICAgICAgIC8vIHAxcGljaywgcDFjb25maXJtLCBwMnBpY2ssIHAyY29uZmlybSwgZ2FtZSwgcmVzdWx0LCBhaXBpY2s/XG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsOyBcbiAgICAgICAgXG4gICAgICAgIERPTS5zZXRCdXR0b25zKHRoaXMpO1xuICAgICAgICBET00uc2V0TW9kZWxzKHRoaXMpO1xuICAgICAgICBET00uc2V0R2FtZWJvYXJkKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdzdGFydCcpO1xuXG4gICAgICAgIHRoaXMuc2V0RGVsYXkoNjAwKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhgJWNuZXcgc3RhdGU6ICVjJHtzdGF0ZX1gLCAnJywgJ2NvbG9yOiBnb2xkZW5yb2Q7IGZvbnQtd2VpZ2h0OiBib2xkJyk7XG5cbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1dlbGNvbWUgdG8gQmF0dGxlc2hpcCEgUGxlYXNlIHNlbGVjdCBnYW1lIHR5cGUuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxcGljayc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBwbGVhc2UgcGxhY2UgeW91ciBzaGlwcy4nKVxuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxY29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBwcmVzcyBjb25maXJtIHRvIGZpbmFsaXplIHNoaXAgcGxhY2VtZW50LicpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMnBpY2snOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMiwgcGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMuJylcbiAgICAgICAgICAgICAgICBET00uaGlkZVBsYXllckJvYXJkKHRoaXMucGxheWVyc1swXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tcHV0ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dG8gZ2VuZXJhdGluZyBjb21wdXRlcidzIHNoaXBzLi4uXCIpOyAvLyBkZWJ1Z1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEF1dG9HZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMmNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMiwgcHJlc3MgY29uZmlybSB0byBmaW5hbGl6ZSBzaGlwIHBsYWNlbWVudC4nKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tcHV0ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dG8gY29uZmlybWluZyBjb21wdXRlcidzIHNoaXBzLi4uXCIpOyAvLyBkZWJ1Z1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdENvbmZpcm0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnYW1lJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQuJylcbiAgICAgICAgICAgICAgICBET00uaGlkZVBsYXllckJvYXJkKHRoaXMucGxheWVyc1sxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVzdWx0cyc6XG4gICAgICAgICAgICAgICAgRE9NLnJldmVhbFBsYXllckJvYXJkKHRoaXMucGxheWVyc1swXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNlbGVjdEdhbWVUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsYXllZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnc3RhcnQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS50eXBlID0gdHlwZTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wdXRlcicpXG4gICAgICAgICAgICBET00udXBkYXRlRW5lbXlDb2xvcigpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxcGljaycpO1xuICAgIH1cblxuICAgIHNlbGVjdEF1dG9HZW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDFjb25maXJtJywgJ3AycGljaycsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuYXV0b0dlbigpO1xuXG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpID8gJ3AxY29uZmlybScgOiAncDJjb25maXJtJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIHNlbGVjdENvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgXG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHRoaXMudHVyblBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwodGhpcy50dXJuUGxheWVyLm5hbWUsIG1vZGVsKTtcbiAgICAgICAgdGhpcy5oaWRlTW9kZWxPcmllbnRhdGlvbih0aGlzLnR1cm5QbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFjb25maXJtJykgPyAncDJwaWNrJyA6ICdnYW1lJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgICBcbiAgICBzZWxlY3RSZXNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgnc3RhcnQnKSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzZXR0aW5nLi4uJyk7XG5cbiAgICAgICAgRE9NLnJlbW92ZUhpdHMoKTtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgRE9NLnJldmVhbFBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcylcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkgRE9NLnJlbW92ZVNoaXAocGxheWVyLm5hbWUsIHNoaXApO1xuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwocGxheWVyLm5hbWUsIG1vZGVsKTtcblxuICAgICAgICAgICAgRE9NLnJlc2V0RW5lbXlDb2xvcigpO1xuICAgICAgICAgICAgcGxheWVyLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICBwbGF5ZXIuZ2VuZXJhdGVNb2RlbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG4gICAgfVxuXG4gICAgY2xpY2tNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbW9kZWwgY2xpY2tlZCBhdCAke3BsYXllck5hbWV9LCAke2luZGV4fWApO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AxY29uZmlybScsICdwMnBpY2snLCAncDJjb25maXJtJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGNsaWNrU3F1YXJlKHgsIHksIHBsYXllck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNxdWFyZSBjbGlja2VkIGF0ICR7cGxheWVyTmFtZX0sIHg6JHt4fSwgeToke3l9YCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHtzdGF0dXM6ICdmYWlsdXJlJ307XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZWwgJiYgIXRoaXMuc2VsZWN0ZWRNb2RlbC5wbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gdGhpcy5zZWxlY3RlZE1vZGVsLm5hbWUgJiYgcGxheWVyTmFtZSA9PT0gdGhpcy50dXJuUGxheWVyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnBsYWNlTW9kZWwoeCwgeSwgdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzRnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdwMXBpY2snKSA/ICdwMWNvbmZpcm0nIDogJ3AyY29uZmlybSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0YXRlKCdnYW1lJykgJiYgdGhpcy50dXJuUGxheWVyLm5hbWUgIT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJOYW1lLCByZXNwb25zZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIGxldCBmdWxsTmFtZSA9ICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gJ3AxJykgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJGdWxsTmFtZSA9IChwbGF5ZXJOYW1lID09PSAncDEnKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICAgICAgICAgIHN3aXRjaChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBtaXNzZWQhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7b3RoZXJGdWxsTmFtZX0sIGF0dGFjayB0aGUgZW5lbXkgYm9hcmQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxhc2gucGxheSgpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09ICdwMicgJiYgdGhpcy5pc0NvbXB1dGVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dG8gYXR0YWNraW5nIG9uIGNvbXB1dGVyJ3MgdHVyblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0F0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIGhpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIGhpdCBhIHNoaXAhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7ZnVsbE5hbWV9LCBjb250aW51ZSBhdHRhY2tpbmcuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtcC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVTdW5rTW9kZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIHN1bmsgYSBzaGlwIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3ROZXh0KGAke2Z1bGxOYW1lfSwgY29udGludWUgYXR0YWNraW5nLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bXAucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FsbCBlbmVteSBzaGlwcyBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVTdW5rTW9kZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIHN1bmsgYWxsIGVuZW15IHNoaXBzISAke2Z1bGxOYW1lfSB3aW5zIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bXAucGxheSgpOyAvLyBUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgXG4gICAgXG4gICAgYXN5bmMgYXV0b0F0dGFjaygpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge3N0YXR1czogJ2ZhaWx1cmUnLCByZXN1bHQ6IG51bGx9O1xuICAgICAgICB3aGlsZSAocmVzcG9uc2UucmVzdWx0ICE9PSAnZW1wdHkgc3F1YXJlJykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF0dGFja0FuZFdhaXQoKTtcbiAgICAgICAgICAgIHN3aXRjaChyZXNwb25zZS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlbXB0eSBzcXVhcmUnOlxuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIG1pc3NlZCFgKTtcbiAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3ROZXh0KGBQbGF5ZXIgMSwgYXR0YWNrIHRoZSBlbmVteSBib2FyZC5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBoaXQnOlxuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBoaXQgYSBzaGlwIWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIHN1bmsnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0udXBkYXRlU3Vua01vZGVscygpO1xuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBzdW5rIGEgc2hpcCFgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0udXBkYXRlU3Vua01vZGVscygpO1xuICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyaGFzIHN1bmsgYWxsIGVuZW15IHNoaXBzISBUaGUgY29tcHV0ZXIgd2lucyFgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBhdHRhY2tBbmRXYWl0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0ge3N0YXR1czogJ2ZhaWx1cmUnfTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLnJhbmQxMCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMucmFuZDEwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5wbGF5ZXJzWzBdLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhdXRvIGF0dGFja2luZyBhdCAke3h9LCR7eX0gcmVzcG9uc2U6YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhdXRvQXR0YWNrX09MRCgpIHsgLy8gVE9ETzogREVMRVRFXG4gICAgICAgIC8vIGZpbHRlciBoaXRzIHRvIG9uZSB3aXRoIHNoaXBzIGJ1dCB1bnN1bmtcbiAgICAgICAgLy8gaWYgbm9uZSwgdGhlbiB0cnkgcmFuZG9tXG4gICAgICAgIHRoaXMuc2V0RGVsYXkoNzAwKTsgLy8gY2hhbmdlXG4gICAgICAgIGxldCByZXNwb25zZSA9IHtzdGF0dXM6ICdmYWlsdXJlJ307XG5cbiAgICAgICAgd2hpbGUgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKSB7XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguY2VpbCgoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguY2VpbCgoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMucGxheWVyc1swXS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGF1dG8gYXR0YWNraW5nIGF0ICR7eH0sJHt5fSByZXNwb25zZTpgLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKHJlc3BvbnNlLnJlc3VsdCkge1xuICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIG1pc3NlZCFgKTtcbiAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYFBsYXllciAxLCBhdHRhY2sgdGhlIGVuZW15IGJvYXJkLmApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgaGl0JzpcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBoaXQgYSBzaGlwIWApO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc2V0IHRpbWVvdXRcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9BdHRhY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgc3Vuayc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyIGhhcyBzdW5rIGEgc2hpcCFgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHNldCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwgZW5lbXkgc2hpcHMgc3Vuayc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnVwZGF0ZVN1bmtNb2RlbHMoKTtcbiAgICAgICAgICAgICAgICBET00ucG9zdChgVGhlIGNvbXB1dGVyaGFzIHN1bmsgYWxsIGVuZW15IHNoaXBzISBUaGUgY29tcHV0ZXIgd2lucyFgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdyZXN1bHRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tSb3RhdGVNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgncDFwaWNrJywgJ3AycGljaycsICdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpO1xuXG4gICAgICAgIGlmKHRoaXMudHVyblBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBwbGF5ZXIubW9kZWxzW2luZGV4XTsgLy8gZGVidWdcbiAgICAgICAgICAgIERPTS5yZW1vdmVNb2RlbChwbGF5ZXJOYW1lLCBwbGF5ZXIubW9kZWxzW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZU1vZGVsKHBsYXllciwgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgdGhpcy5jbGlja0RlbGV0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGlja0RlbGV0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIGRlbGV0ZSBtb2RlbCwgIHBsYXllcjogJHtwbGF5ZXJOYW1lfSwgaW5kZXg6ICR7aW5kZXh9YCk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDJwaWNrJywgJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocGxheWVyLm1vZGVsc1tpbmRleF0ucGxhY2VkICYmIHRoaXMudHVyblBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBET00ucmVtb3ZlU2hpcChwbGF5ZXJOYW1lLCBwbGF5ZXIuYm9hcmQuc2hpcHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kZWwocGxheWVyLCBpbmRleCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhdGUoJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGAke3BsYXllci5uYW1lfXBpY2tgKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV2ZWFsKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnZ2FtZScpKSByZXR1cm47XG4gICAgICAgIERPTS5yZXZlYWxQbGF5ZXJCb2FyZCh0aGlzLnR1cm5QbGF5ZXIpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnZ2FtZScpKSByZXR1cm47XG4gICAgICAgIERPTS5oaWRlUGxheWVyQm9hcmQodGhpcy50dXJuUGxheWVyKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IEFDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBzZWxlY3RNb2RlbChwbGF5ZXJOYW1lLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKVxuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgICAgICBtb2RlbC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpLm1vZGVsc1tpbmRleF07XG4gICAgICAgIG1vZGVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vZGVsID0gbW9kZWw7XG4gICAgfVxuICAgIGRlbGV0ZU1vZGVsKHBsYXllciwgaW5kZXgpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnNoaXBzW2luZGV4XSA9IG51bGw7XG4gICAgICAgIHBsYXllci5tb2RlbHNbaW5kZXhdLnBsYWNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByb3RhdGVNb2RlbChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIHBsYXllci5tb2RlbHNbaW5kZXhdLnJvdGF0ZSgpO1xuICAgIH1cbiAgICBoaWRlTW9kZWxPcmllbnRhdGlvbihwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscylcbiAgICAgICAgICAgIGlmIChtb2RlbC5zaGlwLnNoYXBlID09PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgbW9kZWwucm90YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcGxhY2VNb2RlbCh4LCB5LCBwbGF5ZXIsIG1hbnVhbE1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IChtYW51YWxNb2RlbCB8fCB0aGlzLnNlbGVjdGVkTW9kZWwpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgbW9kZWwuc2hpcC5sZW5ndGgsIG1vZGVsLnNoaXAuc2hhcGUsIG1vZGVsLmluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgbW9kZWwuLi4nLCByZXN1bHQpOyAvLyBERUJVR1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIG1vZGVsLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICBzb25hci5wbGF5KCk7IC8vIFRPRE86XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgYXV0byBnZW5lcmF0aW5nIHNoaXBzIGZvciAke3RoaXMudHVyblBsYXllci5uYW1lfWApXG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnR1cm5QbGF5ZXI7XG5cbiAgICAgICAgdGhpcy5jbGVhcihwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIuZ2VuZXJhdGVNb2RlbHModHJ1ZSk7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGFjZU1vZGVsKHgsIHksIHBsYXllciwgbW9kZWwpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBjbGVhcihwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscykge1xuICAgICAgICAgICAgRE9NLnJlbW92ZU1vZGVsKHBsYXllci5uYW1lLCBtb2RlbCk7XG4gICAgICAgICAgICBpZiAobW9kZWwucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgRE9NLnJlbW92ZVNoaXAocGxheWVyLm5hbWUsIHBsYXllci5ib2FyZC5zaGlwc1ttb2RlbC5pbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kZWwocGxheWVyLCBtb2RlbC5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBPVVRQVVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIERPTS51cGRhdGVCdXR0b25zKHRoaXMuc3RhdGUpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMpO1xuICAgICAgICBET00udXBkYXRlR2FtZWJvYXJkKHRoaXMpO1xuICAgICAgICBET00udXBkYXRlQWN0aXZlUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZ2V0UGxheWVyKHBsYXllck5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycylcbiAgICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cbiAgICBnZXRPdGhlclBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgbGV0IG90aGVySW5kZXggPSAocGxheWVyLm5hbWUgPT09IHRoaXMucGxheWVyc1swXS5uYW1lKSA/IDEgOiAwO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzW290aGVySW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgICAgIGxldCBvdGhlckluZGV4ID0gKHRoaXMudHVyblBsYXllci5pbmRleCA9PT0gMCkgPyAxIDogMDtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzW290aGVySW5kZXhdO1xuICAgIH1cblxuICAgIGlzU3RhdGUoc3RhdGVBcmdzKSB7XG4gICAgICAgIGZvciAobGV0IHN0YXRlIG9mIGFyZ3VtZW50cylcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc0NvbXB1dGVyKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucGxheWVyc1sxXS50eXBlID09PSAnY29tcHV0ZXInKVxuICAgIH1cblxuICAgIHJhbmQxMCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICB9XG5cbiAgICBzZXREZWxheShtcykge1xuICAgICAgICB0aGlzLmRlbGF5ZWQgPSB0cnVlO1xuICAgICAgICB0aHVtcC5wbGF5KCk7IC8vIFRPRE86IGNoYW5nZVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwcm9ncmVzcyc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgfSwgbXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoNSkpO1xuICAgICAgICB0aGlzLm1vZGVscyA9IFtdO1xuICAgICAgICB0aGlzLmdlbkRlZmF1bHRNb2RlbHMoKTtcbiAgICAgICAgLy8gdGhpcy5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICB9XG5cbiAgICBhZGRTaGlwKHgsIHksIGxlbmd0aCA9IDEsIHNoYXBlID0gJ3ZlcnRpY2FsJywgaW5kZXgpIHtcbiAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoeCwgeSkpXG4gICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBvdXQgb2YgYm91bmRzJ307XG4gICAgICAgIFxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHgsIHksIGxlbmd0aCwgc2hhcGUpO1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGlmIChpc091dE9mQm91bmRzKHNlZ21lbnQueCwgc2VnbWVudC55KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBleHRlbmRzIG91dCBvZiBib3VuZHMnfTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcDIgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgICAgIGlmICghc2hpcDIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNoaXAyLnNlZ21lbnRzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VnbWVudDEueCA9PSBzZWdtZW50Mi54ICYmIHNlZ21lbnQxLnkgPT0gc2VnbWVudDIueSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIGludGVyc2VjdHMgb3RoZXIgc2hpcCd9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdID0gc2hpcDtcbiAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJ307XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBzRnVsbCgpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgYWRkTW9kZWwoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoeCwgeSwgbGVuZ3RoLCBzaGFwZSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbHMucHVzaCh7c2hpcDogc2hpcCwgaW5kZXg6IG51bGwsIHBsYWNlZDogZmFsc2UsIHN1bms6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGhpdCBvZiB0aGlzLmhpdHMpXG4gICAgICAgICAgICBpZiAoaGl0LnggPT0geCAmJiBoaXQueSA9PSB5KVxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzcXVhcmUgYWxyZWFkeSBoaXQnfTtcblxuICAgICAgICB0aGlzLmhpdHMucHVzaCh7eCwgeX0pO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB7c3RhdHVzOiAnc3VjY2VzcycsIHJlc3VsdDogJ2VtcHR5IHNxdWFyZSd9O1xuXG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQueCA9PSB4ICYmIHNlZ21lbnQueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9ICdlbmVteSBzaGlwIGhpdCc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYXJlU2hpcHNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgPSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgPSAnZW5lbXkgc2hpcCBzdW5rJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGFyZVNoaXBzU3VuaygpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdFNoaXBzKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYWRkU2hpcCgxLCAxLCAyLCAndmVydGljYWwnLCAwKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDMsIDMsIDIsICd2ZXJ0aWNhbCcsIDEpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoNSwgNSwgMiwgJ3ZlcnRpY2FsJywgMik7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg3LCA3LCAyLCAndmVydGljYWwnLCAzKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDksIDQsIDIsICd2ZXJ0aWNhbCcsIDQpO1xuICAgIH1cblxuICAgIGdlbkRlZmF1bHRNb2RlbHMoKSB7XG4gICAgICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMik7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMSwgMyk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNCk7XG4gICAgICAgIHRoaXMuYWRkTW9kZWwoMiwgMCwgNSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMubW9kZWxzW2ldLmluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzT3V0T2ZCb3VuZHMoeCwgeSkge1xuICAgIHJldHVybiAoeCA+IDEwIHx8IHggPCAwIHx8IHkgPiAxMCB8fCB5IDwgMCk7XG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCB0eXBlKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBBcnJheSg1KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU1vZGVscygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTW9kZWxzKHJhbmRvbVNoYXBlcyA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBsZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA1OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgc2hhcGUgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgaWYgKHJhbmRvbVNoYXBlcylcbiAgICAgICAgICAgICAgICBzaGFwZSA9IChNYXRoLnJhbmRvbSgpICogMiA+PSAxKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB0aGlzLm1vZGVsc1tpbmRleF0gPSBuZXcgTW9kZWwodGhpcy5uYW1lLCBsZW5ndGhzW2luZGV4XSwgaW5kZXgsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0TW9kZWxzKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlTW9kZWxzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3Vua01vZGVscygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXAgPSB0aGlzLmJvYXJkLnNoaXBzW2ldO1xuICAgICAgICAgICAgdGhpcy5tb2RlbHNbaV0uc3VuayA9IHNoaXAuaXNTdW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lLCBsZW5ndGgsIGluZGV4LCBzaGFwZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBwbGF5ZXJOYW1lO1xuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgU2hpcCgwLCAwLCBsZW5ndGgsIHNoYXBlKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLnJlY2VudGVyKCk7XG4gICAgfVxuICAgIGdldCBib29scygpIHtcbiAgICAgICAgcmV0dXJuIHtzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCwgcGxhY2VkOiB0aGlzLnBsYWNlZCwgc3VuazogdGhpcy5zdW5rfTtcbiAgICB9XG4gICAgcm90YXRlKCkge1xuICAgICAgICBsZXQgbmV3U2hhcGUgPSAodGhpcy5zaGlwLnNoYXBlID09PSAndmVydGljYWwnKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBTaGlwKHRoaXMuc2hpcC54LCB0aGlzLnNoaXAueSwgdGhpcy5zaGlwLmxlbmd0aCwgbmV3U2hhcGUpO1xuICAgICAgICB0aGlzLnJlY2VudGVyKCk7XG4gICAgfVxuICAgIHJlY2VudGVyKCkge1xuICAgICAgICBsZXQgbGVmdG92ZXJXaWR0aCA9IDUgLSB0aGlzLnNoaXAud2lkdGg7XG4gICAgICAgIGxldCBsZWZ0b3ZlckhlaWdodCA9IDUgLSB0aGlzLnNoaXAuaGVpZ2h0O1xuICAgICAgICB0aGlzLm9mZnNldFggPSBNYXRoLmZsb29yKGxlZnRvdmVyV2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5mbG9vcihsZWZ0b3ZlckhlaWdodCAvIDIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBsZW5ndGgsIHNoYXBlID0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkeCA9IChzaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyAwIDogaTtcbiAgICAgICAgICAgIGxldCBkeSA9IChzaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyBpIDogMDtcbiAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChuZXcgU2VnbWVudCh4ICsgZHgsIHkgKyBkeSkpO1xuICAgICAgICB9XG4gICAgICAgIGFkanVzdENvcm5lcnModGhpcy5zZWdtZW50cyk7XG4gICAgfVxuICAgIGdldCBoaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IFxuICAgICAgICAgICAgcHJldiArPSAoY3Vyci5pc0hpdCkgPyAxIDogMCwgMCk7XG4gICAgfVxuICAgIGhpdCh4LCB5KSB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IHNlZ21lbnQueCAmJiB5ID09IHNlZ21lbnQueSkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3VuaygpKSAvLyBUT0RPOiB0ZXN0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHNlZ21lbnQuc3VuayA9IHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNTdW5rKCkge3JldHVybiAodGhpcy5oaXRzID49IHRoaXMuc2VnbWVudHMubGVuZ3RoKX1cbiAgICAvLyBzdGF0aWMgY29weUZyb20oc2hpcCwgeCwgeSkge1xuICAgIC8vICAgICByZXR1cm4gbmV3IFNoaXAoeCwgeSwgc2hpcC5sZW5ndGgsIHNoaXAuc2hhcGUpO1xuICAgIC8vIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQueCk7XG4gICAgICAgIGxldCBtaW4gPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA8IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgbGV0IG1heCA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyID4gcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICByZXR1cm4gbWF4IC0gbWluICsgMTtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuc2VnbWVudHMubWFwKHNlZ21lbnQgPT4gc2VnbWVudC55KTtcbiAgICAgICAgbGV0IG1pbiA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyIDwgcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICBsZXQgbWF4ID0gYXJyLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7cmV0dXJuIChjdXIgPiBwcmV2KSA/IGN1ciA6IHByZXY7fSwgMCk7XG4gICAgICAgIHJldHVybiBtYXggLSBtaW4gKyAxO1xuICAgIH1cbn1cblxuY2xhc3MgU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTsgLy8gVE9ETzogYXV0byB1cGRhdGVcbiAgICAgICAgdGhpcy5jb3JuZXJUTCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcm5lclRSID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ybmVyQkwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JuZXJCUiA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaXQ6IHRoaXMuaGl0LFxuICAgICAgICAgICAgc3VuazogdGhpcy5zdW5rLFxuICAgICAgICAgICAgY29ybmVyVEw6IHRoaXMuY29ybmVyVEwsXG4gICAgICAgICAgICBjb3JuZXJUUjogdGhpcy5jb3JuZXJUUixcbiAgICAgICAgICAgIGNvcm5lckJMOiB0aGlzLmNvcm5lckJMLFxuICAgICAgICAgICAgY29ybmVyQlI6IHRoaXMuY29ybmVyQlIsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkanVzdENvcm5lcnMoc2VnbWVudHMpIHtcbiAgICBmb3IgKGxldCBzZWdtZW50MSBvZiBzZWdtZW50cykge1xuICAgICAgICBsZXQgeDEgPSBzZWdtZW50MS54O1xuICAgICAgICBsZXQgeTEgPSBzZWdtZW50MS55O1xuICAgICAgICBmb3IgKGxldCBzZWdtZW50MiBvZiBzZWdtZW50cykge1xuICAgICAgICAgICAgbGV0IHgyID0gc2VnbWVudDIueDtcbiAgICAgICAgICAgIGxldCB5MiA9IHNlZ21lbnQyLnk7XG4gICAgICAgICAgICBpZiAoeDIgPT0geDEtMSAmJiB5MiA9PSB5MSkgeyAvLyB0byB0aGUgbGVmdCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCTCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSsxICYmIHkyID09IHkxKSB7IC8vIHRvIHRoZSByaWdodCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRSID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSAmJiB5MiA9PSB5MS0xKSB7IC8vIHRvIHRoZSB0b3Agb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVFIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDEgJiYgeTIgPT0geTErMSkgeyAvLyB0byB0aGUgYm90dG9tIG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQkwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJSID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==