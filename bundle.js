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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    background-color: var(--active-board-bg);\n}\n.model-container {\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    gap: 2px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n.icon {\n    align-self: center;\n    justify-self: center;\n    background-color: lightblue;\n    border-radius: 2px;\n    height: 20px;\n    width: 20px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n}\n.icon:hover {filter: brightness(1.2)}\n.icon:active {filter: brightness(1.1)}\n\n.modelboard {\n    grid-area: board;\n\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}g\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.modelsquare.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.modelsquare.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.modelsquare.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.modelsquare.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    background-color: var(--active-board-bg);\n}\n.model-container {\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    gap: 2px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n.icon {\n    align-self: center;\n    justify-self: center;\n    background-color: lightblue;\n    border-radius: 2px;\n    height: 20px;\n    width: 20px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n}\n.icon:hover {filter: brightness(1.2)}\n.icon:active {filter: brightness(1.1)}\n\n.modelboard {\n    grid-area: board;\n\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 20px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}g\n/* =========================== Ship Corners ======================== */\n.hidden>.square.ship {border-radius: 0px;}\n.hidden>.sunk.ship {border-radius: 20px;}\n\n.square.ship.cornerTL,\n.modelsquare.cornerTL,\n.hidden>.sunk.ship.cornerTL {border-top-left-radius: 0px;}\n.square.ship.cornerTR,\n.modelsquare.cornerTR,\n.hidden>.sunk.ship.cornerTR {border-top-right-radius: 0px;}\n.square.ship.cornerBL,\n.modelsquare.cornerBL,\n.hidden>.sunk.ship.cornerBL {border-bottom-left-radius: 0px;}\n.square.ship.cornerBR,\n.modelsquare.cornerBR,\n.hidden>.sunk.ship.cornerBR {border-bottom-right-radius: 0px;}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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

        let rotateNode = createDiv(containerNode, ['icon', 'rotate'], null, 'o');
        let deleteNode = createDiv(containerNode, ['icon', 'delete'], null, 'x');
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
    for (let boardNode of queryArray(['modelboard-container'])) {
        let turnPlayerName = (game.turnPlayer) ? game.turnPlayer.name : 'n/a';
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
function createButton(parent, classArray) {
    let node = document.createElement('button');
    parent.append(node);
    if (classArray)
        for (let cls of classArray)
            node.classList.add(cls);
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
        // TODO: consolidate pick/confirm
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
            case 'confirm':
                break;
            case 'p2pick':
                this.turnPlayer = this.players[1];
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

    clickModel(playerName, index) {
        console.log(`model clicked at ${playerName}, ${index}`);

        // Check state
        this.selectModel(playerName, index)

        this.update();
    }
    clickSquare(x, y, playerName) {
        console.log(`square clicked at ${playerName}, x:${x}, y:${y}`);
        let result = {status: 'failure'};

        if (this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm')) {
            if (this.selectedModel && !this.selectedModel.placed) {
                if (playerName === this.selectedModel.name && playerName === this.turnPlayer.name) {
                    result = this.placeModel(x, y, this.getPlayer(playerName));
                }
            }
        }

        if (result.status === 'success') {
            this.update();
            if (this.turnPlayer.board.shipsFull) {
                let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
                this.updateState(nextState);
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

        // this.ships.push(ship);
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
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");



const game = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0NBQWtDO0FBQy9FLDZDQUE2QyxrQ0FBa0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0NBQWtDO0FBQy9FLDZDQUE2QyxrQ0FBa0M7QUFDL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNROztBQUU3QixpQkFBaUIsZ0RBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1hY2NlbnQ6ICMwRTc0OTA7XFxuICAgIC0tZGFya0FtYmVyOiAjNDUxYTAzO1xcbiAgICAtLWRhcmtWaW9sZXQ6ICMyZTEwNjU7XFxuICAgIC0tZGFya1JlZDogIzQ1MGEwYTtcXG5cXG4gICAgLS1hY3RpdmUtYm9hcmQtYmc6IGRhcmtzZWFncmVlbjtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkICNmZmY2O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgTGFiZWxzID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uc2hpcC1sYWJlbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcbi5zaGlwLWxhYmVsOmhvdmVyLFxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjg7XFxufVxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG59XFxuLnNoaXAtbGFiZWw6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5idXR0b24ucm90YXRlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgLyogdG9wOiAwcHg7ICovXFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbn1cXG5idXR0b24ucm90YXRlOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uLnJvdGF0ZTphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtYm9hcmQtYmcpO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiBib2FyZFxcXCIgXFxcIi4gYm9hcmRcXFwiO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYm9hcmQgLlxcXCIgXFxcImJvYXJkIC5cXFwiO1xcbn1cXG4uaWNvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pY29uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKX1cXG4uaWNvbjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcblxcbi5tb2RlbGJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4ubW9kZWxib2FyZC5zZWxlY3RlZCB7Ym9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnBsYWNlZCB7Ym9yZGVyOiAycHggc29saWQgeWVsbG93O31cXG4ubW9kZWxib2FyZC5zdW5rIHtib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuLm1vZGVsc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjY7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbn1cXG4uZ2FtZWJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1nXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgQ29ybmVycyA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGlkZGVuPi5zcXVhcmUuc2hpcCB7Ym9yZGVyLXJhZGl1czogMHB4O31cXG4uaGlkZGVuPi5zdW5rLnNoaXAge2JvcmRlci1yYWRpdXM6IDIwcHg7fVxcblxcbi5zcXVhcmUuc2hpcC5jb3JuZXJUTCxcXG4ubW9kZWxzcXVhcmUuY29ybmVyVEwsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRMIHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJUUixcXG4ubW9kZWxzcXVhcmUuY29ybmVyVFIsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRSIHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQkwsXFxuLm1vZGVsc3F1YXJlLmNvcm5lckJMLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJCTCB7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQlIsXFxuLm1vZGVsc3F1YXJlLmNvcm5lckJSLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJCUiB7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IExvZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNsb2dzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjs7SUFFbEIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7O0lBRVQsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTtJQUNJLCtCQUErQjtJ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LHNFQUFzRTtBQUN0RTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1hY2NlbnQ6ICMwRTc0OTA7XFxuICAgIC0tZGFya0FtYmVyOiAjNDUxYTAzO1xcbiAgICAtLWRhcmtWaW9sZXQ6ICMyZTEwNjU7XFxuICAgIC0tZGFya1JlZDogIzQ1MGEwYTtcXG5cXG4gICAgLS1hY3RpdmUtYm9hcmQtYmc6IGRhcmtzZWFncmVlbjtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkICNmZmY2O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgTGFiZWxzID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uc2hpcC1sYWJlbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcbi5zaGlwLWxhYmVsOmhvdmVyLFxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjg7XFxufVxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG59XFxuLnNoaXAtbGFiZWw6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5idXR0b24ucm90YXRlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgLyogdG9wOiAwcHg7ICovXFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbn1cXG5idXR0b24ucm90YXRlOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uLnJvdGF0ZTphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtYm9hcmQtYmcpO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiBib2FyZFxcXCIgXFxcIi4gYm9hcmRcXFwiO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYm9hcmQgLlxcXCIgXFxcImJvYXJkIC5cXFwiO1xcbn1cXG4uaWNvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pY29uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKX1cXG4uaWNvbjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcblxcbi5tb2RlbGJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4ubW9kZWxib2FyZC5zZWxlY3RlZCB7Ym9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnBsYWNlZCB7Ym9yZGVyOiAycHggc29saWQgeWVsbG93O31cXG4ubW9kZWxib2FyZC5zdW5rIHtib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuLm1vZGVsc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjY7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbn1cXG4uZ2FtZWJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1nXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgQ29ybmVycyA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGlkZGVuPi5zcXVhcmUuc2hpcCB7Ym9yZGVyLXJhZGl1czogMHB4O31cXG4uaGlkZGVuPi5zdW5rLnNoaXAge2JvcmRlci1yYWRpdXM6IDIwcHg7fVxcblxcbi5zcXVhcmUuc2hpcC5jb3JuZXJUTCxcXG4ubW9kZWxzcXVhcmUuY29ybmVyVEwsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRMIHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7fVxcbi5zcXVhcmUuc2hpcC5jb3JuZXJUUixcXG4ubW9kZWxzcXVhcmUuY29ybmVyVFIsXFxuLmhpZGRlbj4uc3Vuay5zaGlwLmNvcm5lclRSIHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQkwsXFxuLm1vZGVsc3F1YXJlLmNvcm5lckJMLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJCTCB7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O31cXG4uc3F1YXJlLnNoaXAuY29ybmVyQlIsXFxuLm1vZGVsc3F1YXJlLmNvcm5lckJSLFxcbi5oaWRkZW4+LnN1bmsuc2hpcC5jb3JuZXJCUiB7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IExvZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNsb2dzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERPTSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgRE9NO1xuXG5ET00uc2V0TW9kZWxzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnbW9kZWxib2FyZCddKSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDU7IHkrKylcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKVxuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihib2FyZE5vZGUsIFsnbW9kZWxzcXVhcmUnXSwgXG4gICAgICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5LCBwbGF5ZXI6IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgaW5kZXg6IGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4fSk7XG5cbiAgICAgICAgYm9hcmROb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdhbWUuY2xpY2tNb2RlbChib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIsIGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSgpO1xuXG4gICAgICAgIGxldCBjb250YWluZXJOb2RlID0gYm9hcmROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnRhaW5lck5vZGUuZGF0YXNldC5wbGF5ZXIgPSBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXI7XG5cbiAgICAgICAgbGV0IHJvdGF0ZU5vZGUgPSBjcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ3JvdGF0ZSddLCBudWxsLCAnbycpO1xuICAgICAgICBsZXQgZGVsZXRlTm9kZSA9IGNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nLCAnZGVsZXRlJ10sIG51bGwsICd4Jyk7XG4gICAgICAgIHJvdGF0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja1JvdGF0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG4gICAgICAgIGRlbGV0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja0RlbGV0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG5cbiAgICB9XG59XG5cbkRPTS51cGRhdGVNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmROb2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxib2FyZCddLCB7cGxheWVyOiBwbGF5ZXIubmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4fSk7XG4gICAgICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCBtb2RlbC5ib29scyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2YgbW9kZWwuc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBbJ21vZGVsc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlZ21lbnQueCArIG1vZGVsLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWdtZW50LnkgKyBtb2RlbC5vZmZzZXRZLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjogcGxheWVyLm5hbWUsIGluZGV4OiBtb2RlbC5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRDbGFzc2xpc3Qobm9kZSwgey4uLnNlZ21lbnQuYm9vbHMsIHNoaXA6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ21vZGVsYm9hcmQtY29udGFpbmVyJ10pKSB7XG4gICAgICAgIGxldCB0dXJuUGxheWVyTmFtZSA9IChnYW1lLnR1cm5QbGF5ZXIpID8gZ2FtZS50dXJuUGxheWVyLm5hbWUgOiAnbi9hJztcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gKGdhbWUudHVyblBsYXllciAmJiB0dXJuUGxheWVyTmFtZSA9PT0gYm9hcmROb2RlLmRhdGFzZXQucGxheWVyKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgc2V0Q2xhc3NsaXN0KGJvYXJkTm9kZSwge2FjdGl2ZTogaXNBY3RpdmV9KTtcbiAgICB9XG59XG5cbkRPTS5zZXRHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydnYW1lYm9hcmQnXSkpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDExOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSAwICYmIHkgPT0gMCkgY3JlYXRlRGl2KGJvYXJkTm9kZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA9PSAwKSBjcmVhdGVUZXh0RGl2KGJvYXJkTm9kZSwgeSlcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5ID09IDApIGNyZWF0ZVRleHREaXYoYm9hcmROb2RlLCB4KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVEaXYoYm9hcmROb2RlLCBbJ3NxdWFyZScsICd0ZXN0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogeCwgeTogeSwgcGxheWVyOiBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXJ9KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmNsaWNrU3F1YXJlKHgsIHksIGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS51cGRhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBpZiAoIXBsYXllci5ib2FyZC5zaGlwcylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcykge1xuICAgICAgICAgICAgaWYgKCFzaGlwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgICAgICAgICAge3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55LCBwbGF5ZXI6IHBsYXllci5uYW1lfSk7XG4gICAgICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KG5vZGUsIHsuLi5zZWdtZW50LmJvb2xzLCBzaGlwOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5ET00ucmVtb3ZlTW9kZWwgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBtb2RlbCkge1xuICAgIGZvciAobGV0IHNlZ21lbnQgb2YgbW9kZWwuc2hpcC5zZWdtZW50cykge1xuICAgICAgICBsZXQgbm9kZSA9IHF1ZXJ5RWxlbWVudChbJ21vZGVsc3F1YXJlJ10sIHtcbiAgICAgICAgICAgIHg6IHNlZ21lbnQueCArIG1vZGVsLm9mZnNldFgseTogc2VnbWVudC55ICsgbW9kZWwub2Zmc2V0WSwgXG4gICAgICAgICAgICBwbGF5ZXI6IHBsYXllck5hbWUsIGluZGV4OiBtb2RlbC5pbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfVxufVxuRE9NLnJlbW92ZVNoaXAgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBzaGlwKSB7XG4gICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFsnc3F1YXJlJ10sXG4gICAgICAgICAgICB7eDogc2VnbWVudC54LCB5OiBzZWdtZW50LnksIHBsYXllcjogcGxheWVyTmFtZX0pO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEJVVFRPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRE9NLnNldEJ1dHRvbnMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgbGV0IHR3b1BsYXllck5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvUGxheWVyJyk7XG4gICAgbGV0IGNvbXB1dGVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpO1xuICAgIGxldCBhdXRvR2VuTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvR2VuJyk7XG4gICAgbGV0IGNvbmZpcm1Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0nKTtcbiAgICBsZXQgcmVzZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG4gICAgbGV0IHBlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVlaycpO1xuXG4gICAgdHdvUGxheWVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgncGxheWVyJyk7fSgpO1xuICAgIGNvbXB1dGVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgnY29tcHV0ZXInKTt9KCk7XG4gICAgY29uZmlybU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc2VsZWN0Q29uZmlybSgpO30oKTtcblxuICAgIGF1dG9HZW5Ob2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnNlbGVjdEF1dG9HZW4oKTt9KCk7XG59XG5cbkRPTS51cGRhdGVCdXR0b25zID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBmb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucylcbiAgICAgICAgc2V0QnV0dG9uQWN0aXZlKGJ1dHRvbi5pZCwgYnV0dG9uW3N0YXRlXSk7XG59XG5cbmNsYXNzIEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoaWQsIHN0YXJ0LCBwMXBpY2ssIHAxY29uZmlybSwgcDJwaWNrLCBwMmNvbmZpcm0sIGdhbWUsIHJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMucDFwaWNrID0gcDFwaWNrO1xuICAgICAgICB0aGlzLnAxY29uZmlybSA9IHAxY29uZmlybTtcbiAgICAgICAgdGhpcy5wMnBpY2sgPSBwMnBpY2s7XG4gICAgICAgIHRoaXMucDJjb25maXJtID0gcDJjb25maXJtO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzXG4gICAgfVxufVxuY29uc3QgYnV0dG9ucyA9IFtcbiAgICBuZXcgQnV0dG9uKCd0d29QbGF5ZXInLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb21wdXRlcicgLCAxLCAwLCAwLCAwLCAwLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdhdXRvR2VuJyAgLCAwLCAxLCAxLCAxLCAxLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdjb25maXJtJyAgLCAwLCAwLCAxLCAwLCAxLCAwLCAwKSxcbiAgICBuZXcgQnV0dG9uKCdyZXNldCcgICAgLCAwLCAxLCAxLCAxLCAxLCAxLCAxKSxcbiAgICBuZXcgQnV0dG9uKCdwZWVrJyAgICAgLCAwLCAwLCAwLCAwLCAwLCAxLCAwKVxuXTtcbmZ1bmN0aW9uIHNldEJ1dHRvbkFjdGl2ZShpZCwgaXNBY3RpdmUpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoaXNBY3RpdmUpIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZWxzZSBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIGNyZWF0ZURpdihwYXJlbnQsIGNsYXNzQXJyYXksIGRhdGFBcnJheSwgdGV4dCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChub2RlKTtcblxuICAgIGlmIChjbGFzc0FycmF5KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFBcnJheSlcbiAgICAgICAgbm9kZS5kYXRhc2V0W2tleV0gPSBkYXRhQXJyYXlba2V5XTtcblxuICAgIGlmICh0ZXh0KVxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dERpdihwYXJlbnQsIHRleHQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQobm9kZSk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBjcmVhdGVCdXR0b24ocGFyZW50LCBjbGFzc0FycmF5KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwYXJlbnQuYXBwZW5kKG5vZGUpO1xuICAgIGlmIChjbGFzc0FycmF5KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NBcnJheSlcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBxdWVyeUFycmF5KGNsYXNzQXJyYXksIGRhdGFPYmplY3QpIHtcbiAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzQXJyYXkpXG4gICAgICAgIHN0cmluZyArPSAnLicgKyBjbHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFPYmplY3QpXG4gICAgICAgIHN0cmluZyArPSBgW2RhdGEtJHtrZXl9PVwiJHtkYXRhT2JqZWN0W2tleV19XCJdYFxuICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHJpbmcpXTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50KGNsYXNzQXJyYXksIGRhdGFPYmplY3QpIHtcbiAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzQXJyYXkpXG4gICAgICAgIHN0cmluZyArPSAnLicgKyBjbHM7XG4gICAgZm9yIChsZXQga2V5IGluIGRhdGFPYmplY3QpXG4gICAgICAgIHN0cmluZyArPSBgW2RhdGEtJHtrZXl9PVwiJHtkYXRhT2JqZWN0W2tleV19XCJdYFxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5Q2hpbGRFbGVtZW50KHBhcmVudENsYXNzLCBjbGFzc0FycmF5LCBkYXRhT2JqZWN0KSB7XG4gICAgbGV0IHN0cmluZyA9IGBgO1xuICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICBzdHJpbmcgKz0gJy4nICsgY2xzO1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhT2JqZWN0KVxuICAgICAgICBzdHJpbmcgKz0gYFtkYXRhLSR7a2V5fT1cIiR7ZGF0YU9iamVjdFtrZXldfVwiXWBcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzc2xpc3Qobm9kZSwgYm9vbE9iamVjdCkge1xuICAgIGZvciAobGV0IGtleSBpbiBib29sT2JqZWN0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGJvb2xPYmplY3Rba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShrZXkpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJ1xuaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcydcblxuLy8gY29uc3QgYm9hcmROb2RlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIxJyk7XG4vLyBjb25zdCBib2FyZE5vZGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYXllcjInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtuZXcgUGxheWVyKCdwMScsIDAsICdwbGF5ZXInKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyKCdwMicsIDEsICdwbGF5ZXInKV07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVycyk7IC8vIERFQlVHXG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlbCA9IG51bGw7XG4gICAgICAgIC8vIFRPRE86IGNvbnNvbGlkYXRlIHBpY2svY29uZmlybVxuICAgICAgICAvLyBwMXBpY2ssIHAxY29uZmlybSwgcDJwaWNrLCBwMmNvbmZpcm0sIGdhbWUsIHJlc3VsdCwgYWlwaWNrP1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0JzsgXG4gICAgICAgIFxuICAgICAgICBET00uc2V0QnV0dG9ucyh0aGlzKTtcbiAgICAgICAgRE9NLnNldE1vZGVscyh0aGlzKTtcbiAgICAgICAgRE9NLnNldEdhbWVib2FyZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY25ldyBzdGF0ZTogJWMke3N0YXRlfWAsICcnLCAnY29sb3I6IGdvbGRlbnJvZDsgZm9udC13ZWlnaHQ6IGJvbGQnKTtcblxuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBib2FyZFxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IG1vZGVsc1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHNoaXAgc2VsZWN0XG4gICAgICAgICAgICAgICAgLy8gaGlkZSBib2FyZHM/XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlID8/XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMXBpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpcm0nOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJwaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnBsYXllcnNbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IElOUFVUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNlbGVjdEdhbWVUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3N0YXJ0JykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBsYXllcnNbMV0udHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxcGljaycpO1xuICAgIH1cblxuICAgIHNlbGVjdEF1dG9HZW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDFjb25maXJtJywgJ3AycGljaycsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuYXV0b0dlbigpO1xuXG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpID8gJ3AxY29uZmlybScgOiAncDJjb25maXJtJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIHNlbGVjdENvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMWNvbmZpcm0nLCAncDJjb25maXJtJykpIHJldHVybjtcbiAgICAgXG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHRoaXMudHVyblBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICBET00ucmVtb3ZlTW9kZWwodGhpcy50dXJuUGxheWVyLm5hbWUsIG1vZGVsKTtcbiAgICAgICAgdGhpcy5oaWRlTW9kZWxPcmllbnRhdGlvbih0aGlzLnR1cm5QbGF5ZXIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFjb25maXJtJykgPyAncDJwaWNrJyA6ICdnYW1lJztcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIGNsaWNrTW9kZWwocGxheWVyTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG1vZGVsIGNsaWNrZWQgYXQgJHtwbGF5ZXJOYW1lfSwgJHtpbmRleH1gKTtcblxuICAgICAgICAvLyBDaGVjayBzdGF0ZVxuICAgICAgICB0aGlzLnNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGNsaWNrU3F1YXJlKHgsIHksIHBsYXllck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNxdWFyZSBjbGlja2VkIGF0ICR7cGxheWVyTmFtZX0sIHg6JHt4fSwgeToke3l9YCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7c3RhdHVzOiAnZmFpbHVyZSd9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMnBpY2snLCAncDFjb25maXJtJywgJ3AyY29uZmlybScpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGVsICYmICF0aGlzLnNlbGVjdGVkTW9kZWwucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IHRoaXMuc2VsZWN0ZWRNb2RlbC5uYW1lICYmIHBsYXllck5hbWUgPT09IHRoaXMudHVyblBsYXllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucGxhY2VNb2RlbCh4LCB5LCB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuc2hpcHNGdWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFwaWNrJykgPyAncDFjb25maXJtJyA6ICdwMmNvbmZpcm0nO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbiAgICBcbiAgICBjbGlja1JvdGF0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDJwaWNrJywgJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG5cbiAgICAgICAgaWYodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IHBsYXllci5tb2RlbHNbaW5kZXhdOyAvLyBkZWJ1Z1xuICAgICAgICAgICAgRE9NLnJlbW92ZU1vZGVsKHBsYXllck5hbWUsIHBsYXllci5tb2RlbHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlTW9kZWwocGxheWVyLCBpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNsaWNrRGVsZXRlTW9kZWwocGxheWVyTmFtZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrRGVsZXRlTW9kZWwocGxheWVyTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgZGVsZXRlIG1vZGVsLCAgcGxheWVyOiAke3BsYXllck5hbWV9LCBpbmRleDogJHtpbmRleH1gKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMnBpY2snLCAncDFjb25maXJtJywgJ3AyY29uZmlybScpKSByZXR1cm47XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwbGF5ZXIubW9kZWxzW2luZGV4XS5wbGFjZWQgJiYgdGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIERPTS5yZW1vdmVTaGlwKHBsYXllck5hbWUsIHBsYXllci5ib2FyZC5zaGlwc1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVNb2RlbChwbGF5ZXIsIGluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgncDFjb25maXJtJywgJ3AyY29uZmlybScpKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoYCR7cGxheWVyLm5hbWV9cGlja2ApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBBQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc2VsZWN0TW9kZWwocGxheWVyTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycylcbiAgICAgICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICAgICAgbW9kZWwuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKS5tb2RlbHNbaW5kZXhdO1xuICAgICAgICBtb2RlbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb2RlbCA9IG1vZGVsO1xuICAgIH1cbiAgICBkZWxldGVNb2RlbChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaGlwc1tpbmRleF0gPSBudWxsO1xuICAgICAgICBwbGF5ZXIubW9kZWxzW2luZGV4XS5wbGFjZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcm90YXRlTW9kZWwocGxheWVyLCBpbmRleCkge1xuICAgICAgICBwbGF5ZXIubW9kZWxzW2luZGV4XS5yb3RhdGUoKTtcbiAgICB9XG4gICAgaGlkZU1vZGVsT3JpZW50YXRpb24ocGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpXG4gICAgICAgICAgICBpZiAobW9kZWwuc2hpcC5zaGFwZSA9PT0gJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgICAgIG1vZGVsLnJvdGF0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuXG4gICAgcGxhY2VNb2RlbCh4LCB5LCBwbGF5ZXIsIG1hbnVhbE1vZGVsKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IChtYW51YWxNb2RlbCB8fCB0aGlzLnNlbGVjdGVkTW9kZWwpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgbW9kZWwuc2hpcC5sZW5ndGgsIG1vZGVsLnNoaXAuc2hhcGUsIG1vZGVsLmluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgbW9kZWwuLi4nLCByZXN1bHQpOyAvLyBERUJVR1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIG1vZGVsLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgYXV0byBnZW5lcmF0aW5nIHNoaXBzIGZvciAke3RoaXMudHVyblBsYXllci5uYW1lfWApXG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnR1cm5QbGF5ZXI7XG5cbiAgICAgICAgdGhpcy5jbGVhcihwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIuZ2VuZXJhdGVNb2RlbHModHJ1ZSk7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGFjZU1vZGVsKHgsIHksIHBsYXllciwgbW9kZWwpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBjbGVhcihwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgcGxheWVyLm1vZGVscykge1xuICAgICAgICAgICAgRE9NLnJlbW92ZU1vZGVsKHBsYXllci5uYW1lLCBtb2RlbCk7XG4gICAgICAgICAgICBpZiAobW9kZWwucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgRE9NLnJlbW92ZVNoaXAocGxheWVyLm5hbWUsIHBsYXllci5ib2FyZC5zaGlwc1ttb2RlbC5pbmRleF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlTW9kZWwocGxheWVyLCBtb2RlbC5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBPVVRQVVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIERPTS51cGRhdGVCdXR0b25zKHRoaXMuc3RhdGUpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMpO1xuICAgICAgICBET00udXBkYXRlR2FtZWJvYXJkKHRoaXMpO1xuICAgICAgICBET00udXBkYXRlQWN0aXZlUGxheWVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZ2V0UGxheWVyKHBsYXllck5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycylcbiAgICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cblxuICAgIGlzU3RhdGUoc3RhdGVBcmdzKSB7XG4gICAgICAgIGZvciAobGV0IHN0YXRlIG9mIGFyZ3VtZW50cylcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgR2FtZV9vbGQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnAxID0gbmV3IFBsYXllcigncDEnKTtcbiAgICAgICAgdGhpcy5wMiA9IG5ldyBQbGF5ZXIoJ3AyJyk7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSBudWxsOyAvLyByZW1vdmVcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RlbCA9IG51bGw7XG4gICAgICAgIERPTS5jcmVhdGVCb2FyZChib2FyZE5vZGUxLCB0aGlzLCB0aGlzLnAxKTtcbiAgICAgICAgRE9NLmNyZWF0ZUJvYXJkKGJvYXJkTm9kZTIsIHRoaXMsIHRoaXMucDIpO1xuICAgICAgICBET00uY3JlYXRlTW9kZWxzKHRoaXMsIHRoaXMucDEpOyAvLyBUT0RPXG4gICAgICAgIERPTS5jcmVhdGVNb2RlbHModGhpcywgdGhpcy5wMik7IC8vIFRPRE9cbiAgICAgICAgRE9NLnNldFNoaXBTZWxlY3QodGhpcyk7XG4gICAgICAgIERPTS5zZXRCdXR0b25zKHRoaXMpO1xuXG4gICAgICAgIC8vICdzdGFydCcsICdwMXBpY2snLCAncDFDb25maXJtJywgJ3AycGljaycsICdwMkNvbmZpcm0nLCAnZ2FtZScsICdyZXN1bHN0JztcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydCc7XG4gICAgICAgIERPTS5wb3N0KCdTZWxlY3QgZ2FtZSBtb2RlJyk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHN0YXRlKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY25ldyBzdGF0ZTogJWMke3N0YXRlfWAsICcnLCAnY29sb3I6IGdvbGRlbnJvZDsgZm9udC13ZWlnaHQ6IGJvbGQnKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHN3aXRjaChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIHRoaXMucDEuYm9hcmQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnAyLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgRE9NLnJlc2V0U2hpcFNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMXBpY2snOlxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsKHRoaXMucDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBzZWxlY3QgeW91ciBzaGlwcycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFDb25maXJtJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIGNvbmZpcm0geW91ciBzaGlwIHBsYWNlbWVudCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJwaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVhbCh0aGlzLnAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAyO1xuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMiwgc2VsZWN0IHlvdXIgc2hpcHMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AyQ29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAyLCBjb25maXJtIHlvdXIgc2hpcCBwbGFjZW1lbnQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dhbWUnOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdTdGFydCB0aGUgZ2FtZSEgUGxheWVyIDEsIGF0dGFjayBhIHNxdWFyZScpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucDE7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jlc3VsdHMnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIERPTS51cGRhdGVCdXR0b25zKHN0YXRlKTtcbiAgICB9XG5cbiAgICBzdGFydCh0eXBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyR7dHlwZX1gKycgJWNidXR0b24gcHJlc3NlZCcsICdjb2xvcjogc2t5Ymx1ZScsIG51bGwpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3N0YXJ0JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGUgPT09ICd0d29QbGF5ZXInKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFwaWNrJyk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyVjY29uZmlybSAlY2J1dHRvbiBwcmVzc2VkJywgJ2NvbG9yOiBza3libHVlJywgbnVsbCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncDFDb25maXJtJylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AycGljaycpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAncDJDb25maXJtJylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ2dhbWUnKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGlkaW5nIHBsYXllciBzaGlwcycpO1xuICAgICAgICBET00uaGlkZShib2FyZE5vZGUxLCBib2FyZE5vZGUyKTtcbiAgICB9XG4gICAgcmV2ZWFsKHBsYXllcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmV2ZWFsaW5nICVjJHtwbGF5ZXIubmFtZX0ncyBzaGlwc2AsICdjb2xvcjogc2t5Ymx1ZScpO1xuICAgICAgICBsZXQgYm9hcmROb2RlID0gKHBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gYm9hcmROb2RlMSA6IGJvYXJkTm9kZTI7XG4gICAgICAgIERPTS5yZXZlYWwoYm9hcmROb2RlKTtcbiAgICB9XG4gICAgcGVlaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFBlZWtpbmcgYXQgJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX0ncyBzaGlwc2ApO1xuICAgIH1cblxuICAgIGF1dG9HZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCclY2F1dG9HZW4gJWNidXR0b24gcHJlc3NlZCcsICdjb2xvcjogc2t5Ymx1ZScsIG51bGwpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncDFwaWNrJykge1xuICAgICAgICAgICAgdGhpcy5wMS5ib2FyZC5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxQ29uZmlybScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdwMnBpY2snKSB7XG4gICAgICAgICAgICB0aGlzLnAyLmJvYXJkLmdlbkRlZmF1bHRTaGlwcygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDJDb25maXJtJyk7XG4gICAgICAgIH0gZWxzZSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBnZW46ICcsIHRoaXMucDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuIH1cblxuICAgIHNxdWFyZUNsaWNrZWQoeCwgeSwgbmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCB4OiVjJHt4fSVjIHk6JWMke3l9JWMgfCBib2FyZDogJWMke25hbWV9JWMgfCB0dXJuOiAke3RoaXMudHVyblBsYXllci5uYW1lfWAsXG4gICAgICAgICAgICAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gYCR7bmFtZX1waWNrYCkge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5hY3RpdmVNb2RlbC5tb2RlbDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb3QgdGhpcyBmYXInKTsgLy8gREVCVUdcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlTW9kZWwgJiYgIW1vZGVsLnBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGFjaW5nIHNoaXA6ICcsIG1vZGVsKTsgLy8gREVCVUdcblxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHVyblBsYXllci5ib2FyZC5hZGRTaGlwKHgsIHksIG1vZGVsLnNoaXAuc2VnbWVudHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnZmFpbHVyZScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFNoaXAuY2FsbGJhY2soKTsgLy8gVE9ET1xuICAgICAgICAgICAgICAgIG1vZGVsLnBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RlbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuc2hpcHMubGVuZ3RoID49IDUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoYCR7bmFtZX1Db25maXJtYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IGAke25hbWV9cGlja2ApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwICYmICF0aGlzLmN1cnJlbnRTaGlwLnVzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwOiAnLCB0aGlzLmN1cnJlbnRTaGlwKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuYWRkU2hpcCh4LCB5LCB0aGlzLmN1cnJlbnRTaGlwLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuc2hpcHMubGVuZ3RoID49IDUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoYCR7bmFtZX1Db25maXJtYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gJ2dhbWUnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gbmFtZSlcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkVycm9yOiBjbGljayBvdGhlciBwbGF5ZXIncyBib2FyZFwiKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLmdldE90aGVyUGxheWVyKG5hbWUpLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZTogJywgcmVzcG9uc2UpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2UucmVzdWx0KSB7XG4gICAgICAgICAgICBjYXNlICdlbXB0eSBzcXVhcmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBoaXQnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBzdW5rJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FsbCBlbmVteSBzaGlwcyBzdW5rJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdyZXN1bHRzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuICAgICAgICBsZXQgbmFtZVN0cmluZyA9ICh0aGlzLnR1cm5QbGF5ZXIgPT09IHRoaXMucDEpID8gJ1BsYXllciAxJyA6ICdQbGF5ZXIgMic7XG4gICAgICAgIERPTS5wb3N0KGAke25hbWVTdHJpbmd9LCBhdHRhY2sgYSBzcXVhcmVgKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIHNoaXBMYWJlbENsaWNrZWQocGxheWVyTmFtZSwgaW5kZXgsIHR5cGUsIHVzZWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIHNoaXAgaW5kZXg6JWMke2luZGV4fSVjIHR5cGU6JWMke3R5cGV9JWMgfCBwbGF5ZXI6ICVjJHtwbGF5ZXJOYW1lfWAsXG4gICAgICAgICAgICAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnKTtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSB7bGVuZ3RoOiBOdW1iZXIodHlwZSksIHVzZWQ6IHVzZWQsIGNhbGxiYWNrOiBjYWxsYmFja307XG4gICAgfVxuXG4gICAgc2hpcE1vZGVsQ2xpY2tlZChwbGF5ZXIsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjbGlja2VkIG1vZGVsIGluZGV4OiVjJHtpbmRleH0lY3wgcGxheWVyOiAlYyR7cGxheWVyLm5hbWV9YCxcbiAgICAgICAgICAgICdjb2xvcjogbGlnaHRjb3JhbCcsIG51bGwsICdjb2xvcjogbGlnaHRjb3JhbCcpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kZWwgPSB7bW9kZWw6IHBsYXllci5ib2FyZC5tb2RlbHNbaW5kZXhdLCBwbGF5ZXI6IHBsYXllcn07XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgbW9kZWw6ICcsIHRoaXMuYWN0aXZlTW9kZWwpO1xuXG5cbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U2hpcCA9IHtsZW5ndGg6IE51bWJlcih0eXBlKSwgdXNlZDogdXNlZCwgY2FsbGJhY2s6IGNhbGxiYWNrfTtcbiAgICB9XG5cblxuICAgIHN3aXRjaFBsYXllcigpIHtcbiAgICAgICAgdGhpcy50dXJuUGxheWVyID0gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMiA6IHRoaXMucDE7XG4gICAgfVxuICAgIGdldFBsYXllcihuYW1lKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHRoaXMucDEubmFtZSkgPyB0aGlzLnAxIDogdGhpcy5wMjtcbiAgICB9XG4gICAgZ2V0T3RoZXJQbGF5ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMiA6IHRoaXMucDE7XG4gICAgfVxuIFxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgRE9NLnVwZGF0ZUJvYXJkKGJvYXJkTm9kZTEsIHRoaXMucDEpO1xuICAgICAgICBET00udXBkYXRlQm9hcmQoYm9hcmROb2RlMiwgdGhpcy5wMik7XG4gICAgICAgIERPTS51cGRhdGVNb2RlbHModGhpcywgdGhpcy5wMSk7XG4gICAgICAgIERPTS51cGRhdGVNb2RlbHModGhpcywgdGhpcy5wMik7XG4gICAgICAgIERPTS51cGRhdGVDdXJyZW50UGxheWVyKHRoaXMudHVyblBsYXllcik7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KDUpKTtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5nZW5EZWZhdWx0TW9kZWxzKCk7XG4gICAgICAgIC8vIHRoaXMuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgfVxuXG4gICAgYWRkU2hpcCh4LCB5LCBsZW5ndGggPSAxLCBzaGFwZSA9ICd2ZXJ0aWNhbCcsIGluZGV4KSB7XG4gICAgICAgIGlmIChpc091dE9mQm91bmRzKHgsIHkpKVxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgb3V0IG9mIGJvdW5kcyd9O1xuICAgICAgICBcbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCh4LCB5LCBsZW5ndGgsIHNoYXBlKTtcblxuICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICBpZiAoaXNPdXRPZkJvdW5kcyhzZWdtZW50LngsIHNlZ21lbnQueSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgZXh0ZW5kcyBvdXQgb2YgYm91bmRzJ307XG5cbiAgICAgICAgZm9yIChsZXQgc2VnbWVudDEgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAyIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNoaXAyKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50MiBvZiBzaGlwMi5zZWdtZW50cylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQxLnggPT0gc2VnbWVudDIueCAmJiBzZWdtZW50MS55ID09IHNlZ21lbnQyLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ2ZhaWx1cmUnLCBtZXNzYWdlOiAnc2hpcCBpbnRlcnNlY3RzIG90aGVyIHNoaXAnfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHRoaXMuc2hpcHNbaW5kZXhdID0gc2hpcDtcbiAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJ307XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBzRnVsbCgpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKVxuICAgICAgICAgICAgaWYgKCFzaGlwKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgYWRkTW9kZWwoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnKSB7XG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoeCwgeSwgbGVuZ3RoLCBzaGFwZSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbHMucHVzaCh7c2hpcDogc2hpcCwgaW5kZXg6IG51bGwsIHBsYWNlZDogZmFsc2UsIHN1bms6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGhpdCBvZiB0aGlzLmhpdHMpXG4gICAgICAgICAgICBpZiAoaGl0LnggPT0geCAmJiBoaXQueSA9PSB5KVxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzcXVhcmUgYWxyZWFkeSBoaXQnfTtcblxuICAgICAgICB0aGlzLmhpdHMucHVzaCh7eCwgeX0pO1xuXG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlZ21lbnQueCA9PSB4ICYmIHNlZ21lbnQueSA9PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuaXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnLCByZXN1bHQ6ICdlbmVteSBzaGlwIGhpdCd9O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFyZVNoaXBzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnYWxsIGVuZW15IHNoaXBzIHN1bmsnfTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnZW5lbXkgc2hpcCBzdW5rJ307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnZW1wdHkgc3F1YXJlJ307XG4gICAgfVxuXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZW5EZWZhdWx0U2hpcHMoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDEsIDEsIDIsICd2ZXJ0aWNhbCcsIDApO1xuICAgICAgICB0aGlzLmFkZFNoaXAoMywgMywgMiwgJ3ZlcnRpY2FsJywgMSk7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg1LCA1LCAyLCAndmVydGljYWwnLCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDcsIDcsIDIsICd2ZXJ0aWNhbCcsIDMpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoOSwgNCwgMiwgJ3ZlcnRpY2FsJywgNCk7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdE1vZGVscygpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAyKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA0KTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA1KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWxzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5tb2RlbHNbaV0uaW5kZXggPSBpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNPdXRPZkJvdW5kcyh4LCB5KSB7XG4gICAgcmV0dXJuICh4ID4gMTAgfHwgeCA8IDAgfHwgeSA+IDEwIHx8IHkgPCAwKTtcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHRoaXMubW9kZWxzID0gbmV3IEFycmF5KDUpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTW9kZWxzKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVNb2RlbHMocmFuZG9tU2hhcGVzID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGxlbmd0aHMgPSBbMiwgMywgMywgNCwgNV1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBzaGFwZSA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICBpZiAocmFuZG9tU2hhcGVzKVxuICAgICAgICAgICAgICAgIHNoYXBlID0gKE1hdGgucmFuZG9tKCkgKiAyID49IDEpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgIHRoaXMubW9kZWxzW2luZGV4XSA9IG5ldyBNb2RlbCh0aGlzLm5hbWUsIGxlbmd0aHNbaW5kZXhdLCBpbmRleCwgc2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocGxheWVyTmFtZSwgbGVuZ3RoLCBpbmRleCwgc2hhcGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFNoaXAoMCwgMCwgbGVuZ3RoLCBzaGFwZSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5yZWNlbnRlcigpO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7c2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsIHBsYWNlZDogdGhpcy5wbGFjZWQsIHN1bms6IHRoaXMuc3Vua307XG4gICAgfVxuICAgIHJvdGF0ZSgpIHtcbiAgICAgICAgbGV0IG5ld1NoYXBlID0gKHRoaXMuc2hpcC5zaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgU2hpcCh0aGlzLnNoaXAueCwgdGhpcy5zaGlwLnksIHRoaXMuc2hpcC5sZW5ndGgsIG5ld1NoYXBlKTtcbiAgICAgICAgdGhpcy5yZWNlbnRlcigpO1xuICAgIH1cbiAgICByZWNlbnRlcigpIHtcbiAgICAgICAgbGV0IGxlZnRvdmVyV2lkdGggPSA1IC0gdGhpcy5zaGlwLndpZHRoO1xuICAgICAgICBsZXQgbGVmdG92ZXJIZWlnaHQgPSA1IC0gdGhpcy5zaGlwLmhlaWdodDtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5mbG9vcihsZWZ0b3ZlcldpZHRoIC8gMik7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGguZmxvb3IobGVmdG92ZXJIZWlnaHQgLyAyKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHggPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gMCA6IGk7XG4gICAgICAgICAgICBsZXQgZHkgPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gaSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2gobmV3IFNlZ21lbnQoeCArIGR4LCB5ICsgZHkpKTtcbiAgICAgICAgfVxuICAgICAgICBhZGp1c3RDb3JuZXJzKHRoaXMuc2VnbWVudHMpO1xuICAgIH1cbiAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBcbiAgICAgICAgICAgIHByZXYgKz0gKGN1cnIuaXNIaXQpID8gMSA6IDAsIDApO1xuICAgIH1cbiAgICBoaXQoeCwgeSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBzZWdtZW50LnggJiYgeSA9PSBzZWdtZW50LnkpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N1bmsoKSkgLy8gVE9ETzogdGVzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiBzZWdtZW50LnN1bmsgPSB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtyZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLnNlZ21lbnRzLmxlbmd0aCl9XG4gICAgLy8gc3RhdGljIGNvcHlGcm9tKHNoaXAsIHgsIHkpIHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBTaGlwKHgsIHksIHNoaXAubGVuZ3RoLCBzaGlwLnNoYXBlKTtcbiAgICAvLyB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5zZWdtZW50cy5tYXAoc2VnbWVudCA9PiBzZWdtZW50LngpO1xuICAgICAgICBsZXQgbWluID0gYXJyLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7cmV0dXJuIChjdXIgPCBwcmV2KSA/IGN1ciA6IHByZXY7fSwgMCk7XG4gICAgICAgIGxldCBtYXggPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA+IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgcmV0dXJuIG1heCAtIG1pbiArIDE7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQueSk7XG4gICAgICAgIGxldCBtaW4gPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA8IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgbGV0IG1heCA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyID4gcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICByZXR1cm4gbWF4IC0gbWluICsgMTtcbiAgICB9XG59XG5cbmNsYXNzIFNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7IC8vIFRPRE86IGF1dG8gdXBkYXRlXG4gICAgICAgIHRoaXMuY29ybmVyVEwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JuZXJUUiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcm5lckJMID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ybmVyQlIgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGJvb2xzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGl0OiB0aGlzLmhpdCwgXG4gICAgICAgICAgICBjb3JuZXJUTDogdGhpcy5jb3JuZXJUTCxcbiAgICAgICAgICAgIGNvcm5lclRSOiB0aGlzLmNvcm5lclRSLFxuICAgICAgICAgICAgY29ybmVyQkw6IHRoaXMuY29ybmVyQkwsXG4gICAgICAgICAgICBjb3JuZXJCUjogdGhpcy5jb3JuZXJCUixcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRqdXN0Q29ybmVycyhzZWdtZW50cykge1xuICAgIGZvciAobGV0IHNlZ21lbnQxIG9mIHNlZ21lbnRzKSB7XG4gICAgICAgIGxldCB4MSA9IHNlZ21lbnQxLng7XG4gICAgICAgIGxldCB5MSA9IHNlZ21lbnQxLnk7XG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQyIG9mIHNlZ21lbnRzKSB7XG4gICAgICAgICAgICBsZXQgeDIgPSBzZWdtZW50Mi54O1xuICAgICAgICAgICAgbGV0IHkyID0gc2VnbWVudDIueTtcbiAgICAgICAgICAgIGlmICh4MiA9PSB4MS0xICYmIHkyID09IHkxKSB7IC8vIHRvIHRoZSBsZWZ0IG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVEwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJMID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHgyID09IHgxKzEgJiYgeTIgPT0geTEpIHsgLy8gdG8gdGhlIHJpZ2h0IG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVFIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJSID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHgyID09IHgxICYmIHkyID09IHkxLTEpIHsgLy8gdG8gdGhlIHRvcCBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh4MiA9PSB4MSAmJiB5MiA9PSB5MSsxKSB7IC8vIHRvIHRoZSBib3R0b20gb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQlIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=