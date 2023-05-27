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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    background-color: var(--active-board-bg);\n}\n.model-container {\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    gap: 2px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n.icon {\n    align-self: center;\n    justify-self: center;\n    background-color: lightblue;\n    border-radius: 2px;\n    height: 20px;\n    width: 20px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n}\n.icon:hover {filter: brightness(1.2)}\n.icon:active {filter: brightness(1.1)}\n\n.modelboard {\n    grid-area: board;\n\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --bg: darkslategray;\n    --board-bg: #94a3b8;\n    --fg: #1e293baa;\n\n    --skyBlue: #38bdf8;\n    --indigo: #050507aa;\n    --accent: #0E7490;\n    --darkAmber: #451a03;\n    --darkViolet: #2e1065;\n    --darkRed: #450a0a;\n\n    --active-board-bg: darkseagreen;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n\n    background-color: var(--bg);\n    color: var(--fg);\n    font-family: helvetica, sans-serif;\n    font-size: 18px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n/* ============================ Buttons ============================ */\n/* ================================================================= */\n#buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\nbutton {\n    background-color: var(--accent);\n    color: lightgray;\n    font-weight: bold;\n    padding: 4px 12px;\n}\nbutton:hover {filter: brightness(1.1);}\nbutton:not(.active) {\n    filter: opacity(.5);\n}\n/* ======================== Board Container ======================== */\n/* ================================================================= */\n#boards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n.board-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n.ship-container {\n    height: 35vw;\n    padding: 5px;\n    background-color: var(--board-bg);\n    border: 1px dotted #fff6;\n    border-radius: 4px;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/* =========================== Ship Labels ========================= */\n.ship-label {\n    border: 1px solid #fff8;\n    border-radius: 5px;\n    position: relative;\n    padding: 10px;\n\n    /* display: flex;\n    justify-content: center; */\n}\n.ship-label:hover,\n.ship-label[data-used=\"true\"]:hover {\n    background-color: #fff8;\n}\n.ship-label[data-used=\"true\"] {\n    border: none;\n    background-color: #fff6;\n}\n.ship-label:active {backdrop-filter: brightness(1.1)}\nbutton.rotate {\n    padding: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    /* top: 0px; */\n    /* display: block; */\n}\nbutton.rotate:hover {filter: brightness(1.1);}\nbutton.rotate:active {filter: brightness(0.9);}\n/* ============================ Models ============================= */\n.modelboard-container {\n    background-color: var(--board-bg);\n    height: 35vw;\n    padding: 5px;\n    border-radius: 4px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.modelboard-container.active {\n    background-color: var(--active-board-bg);\n}\n.model-container {\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \". board\" \". board\";\n    gap: 2px;\n}\n.model-container[data-player=\"p2\"] {\n    grid-template-columns: 1fr min-content;\n    grid-template-areas: \"board .\" \"board .\";\n}\n.icon {\n    align-self: center;\n    justify-self: center;\n    background-color: lightblue;\n    border-radius: 2px;\n    height: 20px;\n    width: 20px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n}\n.icon:hover {filter: brightness(1.2)}\n.icon:active {filter: brightness(1.1)}\n\n.modelboard {\n    grid-area: board;\n\n    border: 2px solid whitesmoke;\n    border-radius: 2px;\n    width: 50px;\n    height: 50px;\n\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n}\n.modelboard.selected {border: 2px solid greenyellow;}\n.modelboard.placed {border: 2px solid yellow;}\n.modelboard.sunk {border: 2px solid orange;}\n.modelboard:hover>.square {backdrop-filter: brightness(2);}\n.modelsquare {\n    background-color: var(--accent);\n    border: 1px solid #fff6;\n}\n/* ============================= Board ============================= */\n/* ================================================================= */\n.gameboard {\n    border-radius: 4px;\n    background-color: var(--board-bg);\n    width: 35vw;\n    height: 35vw;\n\n    padding: 5px;\n\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(11, 1fr);\n}\n.gameboard>* {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n}\n.square {\n    background-color: var(--accent);\n    border: 1px solid var(--board-bg);\n}\n.ship {\n    border-radius: 0px;\n}\n.ship,\n.square.ship.hit {\n    background-color: var(--indigo);\n}\n.hidden>.ship {\n    background-color: #0E749099;\n}\n.square.hit {\n    color: red;\n}\n.square.ship.hit.sunk {\n    border: none;\n}\n[data-active=\"true\"] {\n    border: 2px solid goldenrod;\n}\n/* =========================== Ship Corners ======================== */\n\n:not(.hidden)>.ship:not(.cornerTL),\n.ship.sunk:not(.cornerTL) {\n    border-top-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerTR),\n.ship.sunk:not(.cornerTR) {\n    border-top-right-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBL),\n.ship.sunk:not(.cornerBL) {\n    border-bottom-left-radius: 20px;\n}\n:not(.hidden)>.ship:not(.cornerBR),\n.ship.sunk:not(.cornerBR) {\n    border-bottom-right-radius: 20px;\n}\n/* ============================== Logs ============================= */\n/* ================================================================= */\n#logs {\n    background-color: var(--board-bg);\n    border-radius: 5px;\n    padding: 15px 30px;\n    font-size: 32px;\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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

        // Check state
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
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${fullName} has sunk a ship!`);
                        _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].postNext(`${fullName}, continue attacking.`);
                        break;
                    case 'all enemy ships sunk':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJnOiBkYXJrc2xhdGVncmF5O1xcbiAgICAtLWJvYXJkLWJnOiAjOTRhM2I4O1xcbiAgICAtLWZnOiAjMWUyOTNiYWE7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDdhYTtcXG4gICAgLS1hY2NlbnQ6ICMwRTc0OTA7XFxuICAgIC0tZGFya0FtYmVyOiAjNDUxYTAzO1xcbiAgICAtLWRhcmtWaW9sZXQ6ICMyZTEwNjU7XFxuICAgIC0tZGFya1JlZDogIzQ1MGEwYTtcXG5cXG4gICAgLS1hY3RpdmUtYm9hcmQtYmc6IGRhcmtzZWFncmVlbjtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQnV0dG9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbn1cXG5idXR0b246aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkICNmZmY2O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFNoaXAgTGFiZWxzID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uc2hpcC1sYWJlbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcbi5zaGlwLWxhYmVsOmhvdmVyLFxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjg7XFxufVxcbi5zaGlwLWxhYmVsW2RhdGEtdXNlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNjtcXG59XFxuLnNoaXAtbGFiZWw6YWN0aXZlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5idXR0b24ucm90YXRlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgLyogdG9wOiAwcHg7ICovXFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbn1cXG5idXR0b24ucm90YXRlOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uLnJvdGF0ZTphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1vZGVscyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5tb2RlbGJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvYXJkLWJnKTtcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5tb2RlbGJvYXJkLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtYm9hcmQtYmcpO1xcbn1cXG4ubW9kZWwtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiBib2FyZFxcXCIgXFxcIi4gYm9hcmRcXFwiO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLm1vZGVsLWNvbnRhaW5lcltkYXRhLXBsYXllcj1cXFwicDJcXFwiXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYm9hcmQgLlxcXCIgXFxcImJvYXJkIC5cXFwiO1xcbn1cXG4uaWNvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pY29uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKX1cXG4uaWNvbjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpfVxcblxcbi5tb2RlbGJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiBib2FyZDtcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4ubW9kZWxib2FyZC5zZWxlY3RlZCB7Ym9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7fVxcbi5tb2RlbGJvYXJkLnBsYWNlZCB7Ym9yZGVyOiAycHggc29saWQgeWVsbG93O31cXG4ubW9kZWxib2FyZC5zdW5rIHtib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7fVxcbi5tb2RlbGJvYXJkOmhvdmVyPi5zcXVhcmUge2JhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcygyKTt9XFxuLm1vZGVsc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjY7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDM1dnc7XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbn1cXG4uZ2FtZWJvYXJkPioge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvYXJkLWJnKTtcXG59XFxuLnNoaXAge1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcbi5zaGlwLFxcbi5zcXVhcmUuc2hpcC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbn1cXG4uaGlkZGVuPi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFNzQ5MDk5O1xcbn1cXG4uc3F1YXJlLmhpdCB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5zcXVhcmUuc2hpcC5oaXQuc3VuayB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkZW5yb2Q7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGlwIENvcm5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lclRMKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyVEwpIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG59XFxuOm5vdCguaGlkZGVuKT4uc2hpcDpub3QoLmNvcm5lclRSKSxcXG4uc2hpcC5zdW5rOm5vdCguY29ybmVyVFIpIHtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJCTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lckJMKSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJCUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lckJSKSB7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTG9ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2xvZ3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCOztJQUVsQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUzs7SUFFVCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0EsY0FBYyx1QkFBdUIsQ0FBQztBQUN0QztJQUNJLG1CQUFt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a3NsYXRlZ3JheTtcXG4gICAgLS1ib2FyZC1iZzogIzk0YTNiODtcXG4gICAgLS1mZzogIzFlMjkzYmFhO1xcblxcbiAgICAtLXNreUJsdWU6ICMzOGJkZjg7XFxuICAgIC0taW5kaWdvOiAjMDUwNTA3YWE7XFxuICAgIC0tYWNjZW50OiAjMEU3NDkwO1xcbiAgICAtLWRhcmtBbWJlcjogIzQ1MWEwMztcXG4gICAgLS1kYXJrVmlvbGV0OiAjMmUxMDY1O1xcbiAgICAtLWRhcmtSZWQ6ICM0NTBhMGE7XFxuXFxuICAgIC0tYWN0aXZlLWJvYXJkLWJnOiBkYXJrc2VhZ3JlZW47XFxufVxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJ1dHRvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTt9XFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGZpbHRlcjogb3BhY2l0eSguNSk7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjZmZmNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGlwIExhYmVscyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnNoaXAtbGFiZWwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbn1cXG4uc2hpcC1sYWJlbDpob3ZlcixcXG4uc2hpcC1sYWJlbFtkYXRhLXVzZWQ9XFxcInRydWVcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY4O1xcbn1cXG4uc2hpcC1sYWJlbFtkYXRhLXVzZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjY7XFxufVxcbi5zaGlwLWxhYmVsOmFjdGl2ZSB7YmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDEuMSl9XFxuYnV0dG9uLnJvdGF0ZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIC8qIHRvcDogMHB4OyAqL1xcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXG59XFxuYnV0dG9uLnJvdGF0ZTpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbmJ1dHRvbi5yb3RhdGU6YWN0aXZlIHtmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNb2RlbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ubW9kZWxib2FyZC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2FyZC1iZyk7XFxuICAgIGhlaWdodDogMzV2dztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ubW9kZWxib2FyZC1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWJvYXJkLWJnKTtcXG59XFxuLm1vZGVsLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gYm9hcmRcXFwiIFxcXCIuIGJvYXJkXFxcIjtcXG4gICAgZ2FwOiAycHg7XFxufVxcbi5tb2RlbC1jb250YWluZXJbZGF0YS1wbGF5ZXI9XFxcInAyXFxcIl0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImJvYXJkIC5cXFwiIFxcXCJib2FyZCAuXFxcIjtcXG59XFxuLmljb24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaWNvbjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMil9XFxuLmljb246YWN0aXZlIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5cXG4ubW9kZWxib2FyZCB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuLm1vZGVsYm9hcmQuc2VsZWN0ZWQge2JvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93O31cXG4ubW9kZWxib2FyZC5wbGFjZWQge2JvcmRlcjogMnB4IHNvbGlkIHllbGxvdzt9XFxuLm1vZGVsYm9hcmQuc3VuayB7Ym9yZGVyOiAycHggc29saWQgb3JhbmdlO31cXG4ubW9kZWxib2FyZDpob3Zlcj4uc3F1YXJlIHtiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoMik7fVxcbi5tb2RlbHNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY2O1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCb2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmdhbWVib2FyZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAzNXZ3O1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuLmdhbWVib2FyZD4qIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib2FyZC1iZyk7XFxufVxcbi5zaGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4uc2hpcCxcXG4uc3F1YXJlLnNoaXAuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG59XFxuLmhpZGRlbj4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTc0OTA5OTtcXG59XFxuLnNxdWFyZS5oaXQge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3F1YXJlLnNoaXAuaGl0LnN1bmsge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbltkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2hpcCBDb3JuZXJzID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUTCksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRMKSB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxufVxcbjpub3QoLmhpZGRlbik+LnNoaXA6bm90KC5jb3JuZXJUUiksXFxuLnNoaXAuc3Vuazpub3QoLmNvcm5lclRSKSB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQkwpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCTCkge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbn1cXG46bm90KC5oaWRkZW4pPi5zaGlwOm5vdCguY29ybmVyQlIpLFxcbi5zaGlwLnN1bms6bm90KC5jb3JuZXJCUikge1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IExvZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNsb2dzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9hcmQtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERPTSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgRE9NO1xuXG5ET00uc2V0TW9kZWxzID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGZvciAobGV0IGJvYXJkTm9kZSBvZiBxdWVyeUFycmF5KFsnbW9kZWxib2FyZCddKSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDU7IHkrKylcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKVxuICAgICAgICAgICAgICAgIGNyZWF0ZURpdihib2FyZE5vZGUsIFsnbW9kZWxzcXVhcmUnXSwgXG4gICAgICAgICAgICAgICAgICAgIHt4OiB4LCB5OiB5LCBwbGF5ZXI6IGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgaW5kZXg6IGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4fSk7XG5cbiAgICAgICAgYm9hcmROb2RlLm9uY2xpY2sgPSAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdhbWUuY2xpY2tNb2RlbChib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXIsIGJvYXJkTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfSgpO1xuXG4gICAgICAgIGxldCBjb250YWluZXJOb2RlID0gYm9hcmROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnRhaW5lck5vZGUuZGF0YXNldC5wbGF5ZXIgPSBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXI7XG5cbiAgICAgICAgbGV0IHJvdGF0ZU5vZGUgPSBjcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJywgJ3JvdGF0ZSddLCBudWxsLCAnbycpO1xuICAgICAgICBsZXQgZGVsZXRlTm9kZSA9IGNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nLCAnZGVsZXRlJ10sIG51bGwsICd4Jyk7XG4gICAgICAgIHJvdGF0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja1JvdGF0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG4gICAgICAgIGRlbGV0ZU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2FtZS5jbGlja0RlbGV0ZU1vZGVsKGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllciwgYm9hcmROb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9KCk7XG5cbiAgICB9XG59XG5cbkRPTS51cGRhdGVNb2RlbHMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmROb2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxib2FyZCddLCB7cGxheWVyOiBwbGF5ZXIubmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4fSk7XG4gICAgICAgICAgICBzZXRDbGFzc2xpc3QoYm9hcmROb2RlLCBtb2RlbC5ib29scyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2YgbW9kZWwuc2hpcC5zZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBbJ21vZGVsc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlZ21lbnQueCArIG1vZGVsLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWdtZW50LnkgKyBtb2RlbC5vZmZzZXRZLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjogcGxheWVyLm5hbWUsIGluZGV4OiBtb2RlbC5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRDbGFzc2xpc3Qobm9kZSwgey4uLnNlZ21lbnQuYm9vbHMsIHNoaXA6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuRE9NLnVwZGF0ZUFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICBmb3IgKGxldCBib2FyZE5vZGUgb2YgcXVlcnlBcnJheShbJ21vZGVsYm9hcmQtY29udGFpbmVyJ10pKSB7XG4gICAgICAgIGxldCB0dXJuUGxheWVyTmFtZSA9IChnYW1lLnR1cm5QbGF5ZXIpID8gZ2FtZS50dXJuUGxheWVyLm5hbWUgOiAnbi9hJztcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gKGdhbWUudHVyblBsYXllciAmJiB0dXJuUGxheWVyTmFtZSA9PT0gYm9hcmROb2RlLmRhdGFzZXQucGxheWVyKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgc2V0Q2xhc3NsaXN0KGJvYXJkTm9kZSwge2FjdGl2ZTogaXNBY3RpdmV9KTtcbiAgICB9XG59XG5cbkRPTS5zZXRHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgYm9hcmROb2RlIG9mIHF1ZXJ5QXJyYXkoWydnYW1lYm9hcmQnXSkpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMTsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDExOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSAwICYmIHkgPT0gMCkgY3JlYXRlRGl2KGJvYXJkTm9kZSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA9PSAwKSBjcmVhdGVUZXh0RGl2KGJvYXJkTm9kZSwgeSlcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5ID09IDApIGNyZWF0ZVRleHREaXYoYm9hcmROb2RlLCB4KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVEaXYoYm9hcmROb2RlLCBbJ3NxdWFyZScsICd0ZXN0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogeCwgeTogeSwgcGxheWVyOiBib2FyZE5vZGUuZGF0YXNldC5wbGF5ZXJ9KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmNsaWNrU3F1YXJlKHgsIHksIGJvYXJkTm9kZS5kYXRhc2V0LnBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkRPTS51cGRhdGVHYW1lYm9hcmQgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBpZiAoIXBsYXllci5ib2FyZC5zaGlwcylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHBsYXllci5ib2FyZC5zaGlwcykge1xuICAgICAgICAgICAgaWYgKCFzaGlwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgICAgICAgICAge3g6IHNlZ21lbnQueCwgeTogc2VnbWVudC55LCBwbGF5ZXI6IHBsYXllci5uYW1lfSk7XG4gICAgICAgICAgICAgICAgc2V0Q2xhc3NsaXN0KG5vZGUsIHsuLi5zZWdtZW50LmJvb2xzLCBzaGlwOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgcGxheWVyIG9mIGdhbWUucGxheWVycykge1xuICAgICAgICBmb3IgKGxldCBoaXQgb2YgcGxheWVyLmJvYXJkLmhpdHMpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFsnc3F1YXJlJ10sXG4gICAgICAgICAgICAgICAge3g6IGhpdC54LHk6IGhpdC55LHBsYXllcjogcGxheWVyLm5hbWV9KTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gJ3gnOyAvLyBUT0RPOiBjaGFuZ2VcbiAgICAgICAgfVxuICAgIH1cbn1cbkRPTS5yZW1vdmVNb2RlbCA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIG1vZGVsKSB7XG4gICAgZm9yIChsZXQgc2VnbWVudCBvZiBtb2RlbC5zaGlwLnNlZ21lbnRzKSB7XG4gICAgICAgIGxldCBub2RlID0gcXVlcnlFbGVtZW50KFsnbW9kZWxzcXVhcmUnXSwge1xuICAgICAgICAgICAgeDogc2VnbWVudC54ICsgbW9kZWwub2Zmc2V0WCx5OiBzZWdtZW50LnkgKyBtb2RlbC5vZmZzZXRZLCBcbiAgICAgICAgICAgIHBsYXllcjogcGxheWVyTmFtZSwgaW5kZXg6IG1vZGVsLmluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICB9XG59XG5ET00ucmVtb3ZlU2hpcCA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIHNoaXApIHtcbiAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBxdWVyeUVsZW1lbnQoWydzcXVhcmUnXSxcbiAgICAgICAgICAgIHt4OiBzZWdtZW50LngsIHk6IHNlZ21lbnQueSwgcGxheWVyOiBwbGF5ZXJOYW1lfSk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIH1cbn1cbkRPTS5yZW1vdmVIaXRzID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgbm9kZSBvZiBxdWVyeUFycmF5KFsnc3F1YXJlJywgJ2hpdCddKSlcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9ICcnOyAvLyBUT0RPOiByZW1vdmUgd2hlbiByZXBsYWNpbmcgaWNvblxufVxuXG5ET00ucG9zdCA9IGZ1bmN0aW9uKG1zZykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dzJykudGV4dENvbnRlbnQgPSBtc2c7XG59XG5ET00ucG9zdE5leHQgPSBmdW5jdGlvbihtc2cpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dzJyk7XG4gICAgbm9kZS50ZXh0Q29udGVudCArPSAnICcgKyBtc2c7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEhJRElORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRE9NLmhpZGVQbGF5ZXJCb2FyZCA9IGZ1bmN0aW9uKHBsYXllcikge1xuICAgIHF1ZXJ5RWxlbWVudChbJ2dhbWVib2FyZCddLCB7cGxheWVyOiBwbGF5ZXIubmFtZX0pLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuRE9NLnJldmVhbFBsYXllckJvYXJkID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgcXVlcnlFbGVtZW50KFsnZ2FtZWJvYXJkJ10sIHtwbGF5ZXI6IHBsYXllci5uYW1lfSkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEJVVFRPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRE9NLnNldEJ1dHRvbnMgPSBmdW5jdGlvbihnYW1lKSB7XG4gICAgbGV0IHR3b1BsYXllck5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvUGxheWVyJyk7XG4gICAgbGV0IGNvbXB1dGVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpO1xuICAgIGxldCBhdXRvR2VuTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvR2VuJyk7XG4gICAgbGV0IGNvbmZpcm1Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0nKTtcbiAgICBsZXQgcmVzZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG4gICAgbGV0IHBlZWsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVlaycpO1xuXG4gICAgdHdvUGxheWVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgncGxheWVyJyk7fSgpO1xuICAgIGNvbXB1dGVyTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RHYW1lVHlwZSgnY29tcHV0ZXInKTt9KCk7XG4gICAgY29uZmlybU5vZGUub25jbGljayA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuc2VsZWN0Q29uZmlybSgpO30oKTtcbiAgICBhdXRvR2VuTm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RBdXRvR2VuKCk7fSgpO1xuICAgIHJlc2V0Tm9kZS5vbmNsaWNrID0gKCkgPT4gZnVuY3Rpb24oKSB7Z2FtZS5zZWxlY3RSZXNldCgpO30oKTtcblxuICAgIHBlZWsub25tb3VzZWRvd24gPSAoKSA9PiBmdW5jdGlvbigpIHtnYW1lLnJldmVhbCgpO30oKTtcbiAgICBwZWVrLm9ubW91c2V1cCA9ICgpID0+IGZ1bmN0aW9uKCkge2dhbWUuaGlkZSgpO30oKTtcbn1cblxuRE9NLnVwZGF0ZUJ1dHRvbnMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKVxuICAgICAgICBzZXRCdXR0b25BY3RpdmUoYnV0dG9uLmlkLCBidXR0b25bc3RhdGVdKTtcbn1cblxuY2xhc3MgQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgc3RhcnQsIHAxcGljaywgcDFjb25maXJtLCBwMnBpY2ssIHAyY29uZmlybSwgZ2FtZSwgcmVzdWx0cykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5wMXBpY2sgPSBwMXBpY2s7XG4gICAgICAgIHRoaXMucDFjb25maXJtID0gcDFjb25maXJtO1xuICAgICAgICB0aGlzLnAycGljayA9IHAycGljaztcbiAgICAgICAgdGhpcy5wMmNvbmZpcm0gPSBwMmNvbmZpcm07XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHNcbiAgICB9XG59XG5jb25zdCBidXR0b25zID0gW1xuICAgIG5ldyBCdXR0b24oJ3R3b1BsYXllcicsIDEsIDAsIDAsIDAsIDAsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ2NvbXB1dGVyJyAsIDEsIDAsIDAsIDAsIDAsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ2F1dG9HZW4nICAsIDAsIDEsIDEsIDEsIDEsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ2NvbmZpcm0nICAsIDAsIDAsIDEsIDAsIDEsIDAsIDApLFxuICAgIG5ldyBCdXR0b24oJ3Jlc2V0JyAgICAsIDAsIDEsIDEsIDEsIDEsIDEsIDEpLFxuICAgIG5ldyBCdXR0b24oJ3BlZWsnICAgICAsIDAsIDAsIDAsIDAsIDAsIDEsIDApXG5dO1xuZnVuY3Rpb24gc2V0QnV0dG9uQWN0aXZlKGlkLCBpc0FjdGl2ZSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChpc0FjdGl2ZSkgbm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBlbHNlIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gY3JlYXRlRGl2KHBhcmVudCwgY2xhc3NBcnJheSwgZGF0YUFycmF5LCB0ZXh0KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kKG5vZGUpO1xuXG4gICAgaWYgKGNsYXNzQXJyYXkpXG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YUFycmF5KVxuICAgICAgICBub2RlLmRhdGFzZXRba2V5XSA9IGRhdGFBcnJheVtrZXldO1xuXG4gICAgaWYgKHRleHQpXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0RGl2KHBhcmVudCwgdGV4dCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChub2RlKTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcXVlcnlBcnJheShjbGFzc0FycmF5LCBkYXRhT2JqZWN0KSB7XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICBzdHJpbmcgKz0gJy4nICsgY2xzO1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhT2JqZWN0KVxuICAgICAgICBzdHJpbmcgKz0gYFtkYXRhLSR7a2V5fT1cIiR7ZGF0YU9iamVjdFtrZXldfVwiXWBcbiAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5nKV07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudChjbGFzc0FycmF5LCBkYXRhT2JqZWN0KSB7XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0FycmF5KVxuICAgICAgICBzdHJpbmcgKz0gJy4nICsgY2xzO1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhT2JqZWN0KVxuICAgICAgICBzdHJpbmcgKz0gYFtkYXRhLSR7a2V5fT1cIiR7ZGF0YU9iamVjdFtrZXldfVwiXWBcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzc2xpc3Qobm9kZSwgYm9vbE9iamVjdCkge1xuICAgIGZvciAobGV0IGtleSBpbiBib29sT2JqZWN0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGJvb2xPYmplY3Rba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGtleSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShrZXkpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJ1xuaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcydcblxuLy8gY29uc3QgYm9hcmROb2RlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5wbGF5ZXIxJyk7XG4vLyBjb25zdCBib2FyZE5vZGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLnBsYXllcjInKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtuZXcgUGxheWVyKCdwMScsIDAsICdwbGF5ZXInKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyKCdwMicsIDEsICdwbGF5ZXInKV07XG4gICAgICAgIGNvbnNvbGUubG9nKCdERUJVRzogcGxheWVycyAnLCB0aGlzLnBsYXllcnMpOyAvLyBERUJVR1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZWwgPSBudWxsO1xuICAgICAgICAvLyBUT0RPOiBjb25zb2xpZGF0ZSBwaWNrL2NvbmZpcm1cbiAgICAgICAgLy8gcDFwaWNrLCBwMWNvbmZpcm0sIHAycGljaywgcDJjb25maXJtLCBnYW1lLCByZXN1bHQsIGFpcGljaz9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7IFxuICAgICAgICBcbiAgICAgICAgRE9NLnNldEJ1dHRvbnModGhpcyk7XG4gICAgICAgIERPTS5zZXRNb2RlbHModGhpcyk7XG4gICAgICAgIERPTS5zZXRHYW1lYm9hcmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3N0YXJ0Jyk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhgJWNuZXcgc3RhdGU6ICVjJHtzdGF0ZX1gLCAnJywgJ2NvbG9yOiBnb2xkZW5yb2Q7IGZvbnQtd2VpZ2h0OiBib2xkJyk7XG5cbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1dlbGNvbWUgdG8gQmF0dGxlc2hpcCEgUGxlYXNlIHNlbGVjdCBnYW1lIHR5cGUuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxcGljayc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBwbGVhc2UgcGxhY2UgeW91ciBzaGlwcy4nKVxuICAgICAgICAgICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxY29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBwcmVzcyBjb25maXJtIHRvIGZpbmFsaXplIHNoaXAgcGxhY2VtZW50LicpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMnBpY2snOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgcGxlYXNlIHBsYWNlIHlvdXIgc2hpcHMuJylcbiAgICAgICAgICAgICAgICBET00uaGlkZVBsYXllckJvYXJkKHRoaXMucGxheWVyc1swXSk7IC8vIHRvZG8gaW1wbGVtZW50XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDJjb25maXJtJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDEsIHByZXNzIGNvbmZpcm0gdG8gZmluYWxpemUgc2hpcCBwbGFjZW1lbnQuJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dhbWUnOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgYXR0YWNrIHRoZSBlbmVteSBib2FyZC4nKVxuICAgICAgICAgICAgICAgIERPTS5oaWRlUGxheWVyQm9hcmQodGhpcy5wbGF5ZXJzWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHRzJzpcbiAgICAgICAgICAgICAgICBET00ucmV2ZWFsUGxheWVyQm9hcmQodGhpcy5wbGF5ZXJzWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSU5QVVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgc2VsZWN0R2FtZVR5cGUodHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdGF0ZSgnc3RhcnQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncDFwaWNrJyk7XG4gICAgfVxuXG4gICAgc2VsZWN0QXV0b0dlbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMWNvbmZpcm0nLCAncDJwaWNrJywgJ3AyY29uZmlybScpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5hdXRvR2VuKCk7XG5cbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFwaWNrJykgPyAncDFjb25maXJtJyA6ICdwMmNvbmZpcm0nO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuXG4gICAgc2VsZWN0Q29uZmlybSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuICAgICBcbiAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgdGhpcy50dXJuUGxheWVyLm1vZGVscylcbiAgICAgICAgICAgIERPTS5yZW1vdmVNb2RlbCh0aGlzLnR1cm5QbGF5ZXIubmFtZSwgbW9kZWwpO1xuICAgICAgICB0aGlzLmhpZGVNb2RlbE9yaWVudGF0aW9uKHRoaXMudHVyblBsYXllcik7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV4dFN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdwMWNvbmZpcm0nKSA/ICdwMnBpY2snIDogJ2dhbWUnO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdFJlc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0YXRlKCdzdGFydCcpKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNldHRpbmcuLi4nKTtcblxuICAgICAgICBET00ucmVtb3ZlSGl0cygpO1xuICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKSB7XG4gICAgICAgICAgICBET00ucmV2ZWFsUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2YgcGxheWVyLmJvYXJkLnNoaXBzKVxuICAgICAgICAgICAgICAgIGlmIChzaGlwKSBET00ucmVtb3ZlU2hpcChwbGF5ZXIubmFtZSwgc2hpcCk7XG4gICAgICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKVxuICAgICAgICAgICAgICAgIERPTS5yZW1vdmVNb2RlbChwbGF5ZXIubmFtZSwgbW9kZWwpO1xuXG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQuY2xlYXIoKTtcbiAgICAgICAgICAgIHBsYXllci5nZW5lcmF0ZU1vZGVscygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnc3RhcnQnKTtcbiAgICB9XG5cbiAgICBjbGlja01vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBtb2RlbCBjbGlja2VkIGF0ICR7cGxheWVyTmFtZX0sICR7aW5kZXh9YCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgc3RhdGVcbiAgICAgICAgdGhpcy5zZWxlY3RNb2RlbChwbGF5ZXJOYW1lLCBpbmRleClcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjbGlja1NxdWFyZSh4LCB5LCBwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzcXVhcmUgY2xpY2tlZCBhdCAke3BsYXllck5hbWV9LCB4OiR7eH0sIHk6JHt5fWApO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB7c3RhdHVzOiAnZmFpbHVyZSd9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMnBpY2snLCAncDFjb25maXJtJywgJ3AyY29uZmlybScpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGVsICYmICF0aGlzLnNlbGVjdGVkTW9kZWwucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IHRoaXMuc2VsZWN0ZWRNb2RlbC5uYW1lICYmIHBsYXllck5hbWUgPT09IHRoaXMudHVyblBsYXllci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5wbGFjZU1vZGVsKHgsIHksIHRoaXMuZ2V0UGxheWVyKHBsYXllck5hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHVyblBsYXllci5ib2FyZC5zaGlwc0Z1bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTdGF0ZSA9ICh0aGlzLnN0YXRlID09PSAncDFwaWNrJykgPyAncDFjb25maXJtJyA6ICdwMmNvbmZpcm0nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGF0ZSgnZ2FtZScpICYmIHRoaXMudHVyblBsYXllci5uYW1lICE9PSBwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyTmFtZSwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBsZXQgZnVsbE5hbWUgPSAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09ICdwMScpID8gJ1BsYXllciAxJyA6ICdQbGF5ZXIgMic7XG4gICAgICAgICAgICAgICAgbGV0IG90aGVyRnVsbE5hbWUgPSAocGxheWVyTmFtZSA9PT0gJ3AxJykgPyAnUGxheWVyIDEnIDogJ1BsYXllciAyJztcbiAgICAgICAgICAgICAgICBzd2l0Y2gocmVzcG9uc2UucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5IHNxdWFyZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gbWlzc2VkIWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3ROZXh0KGAke290aGVyRnVsbE5hbWV9LCBhdHRhY2sgdGhlIGVuZW15IGJvYXJkLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmVteSBzaGlwIGhpdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdChgJHtmdWxsTmFtZX0gaGFzIGhpdCBhIHNoaXAhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7ZnVsbE5hbWV9LCBjb250aW51ZSBhdHRhY2tpbmcuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5lbXkgc2hpcCBzdW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTS5wb3N0KGAke2Z1bGxOYW1lfSBoYXMgc3VuayBhIHNoaXAhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBET00ucG9zdE5leHQoYCR7ZnVsbE5hbWV9LCBjb250aW51ZSBhdHRhY2tpbmcuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWxsIGVuZW15IHNoaXBzIHN1bmsnOlxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NLnBvc3QoYCR7ZnVsbE5hbWV9IGhhcyBzdW5rIGFsbCBlbmVteSBzaGlwcyEgJHtmdWxsTmFtZX0gd2lucyFgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3Jlc3VsdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbiAgICBcbiAgICBjbGlja1JvdGF0ZU1vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdwMXBpY2snLCAncDJwaWNrJywgJ3AxY29uZmlybScsICdwMmNvbmZpcm0nKSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG5cbiAgICAgICAgaWYodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IHBsYXllci5tb2RlbHNbaW5kZXhdOyAvLyBkZWJ1Z1xuICAgICAgICAgICAgRE9NLnJlbW92ZU1vZGVsKHBsYXllck5hbWUsIHBsYXllci5tb2RlbHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlTW9kZWwocGxheWVyLCBpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmNsaWNrRGVsZXRlTW9kZWwocGxheWVyTmFtZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrRGVsZXRlTW9kZWwocGxheWVyTmFtZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgZGVsZXRlIG1vZGVsLCAgcGxheWVyOiAke3BsYXllck5hbWV9LCBpbmRleDogJHtpbmRleH1gKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhdGUoJ3AxcGljaycsICdwMnBpY2snLCAncDFjb25maXJtJywgJ3AyY29uZmlybScpKSByZXR1cm47XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwbGF5ZXIubW9kZWxzW2luZGV4XS5wbGFjZWQgJiYgdGhpcy50dXJuUGxheWVyLm5hbWUgPT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIERPTS5yZW1vdmVTaGlwKHBsYXllck5hbWUsIHBsYXllci5ib2FyZC5zaGlwc1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVNb2RlbChwbGF5ZXIsIGluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdGF0ZSgncDFjb25maXJtJywgJ3AyY29uZmlybScpKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoYCR7cGxheWVyLm5hbWV9cGlja2ApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXZlYWwoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdnYW1lJykpIHJldHVybjtcbiAgICAgICAgRE9NLnJldmVhbFBsYXllckJvYXJkKHRoaXMudHVyblBsYXllcik7XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0YXRlKCdnYW1lJykpIHJldHVybjtcbiAgICAgICAgRE9NLmhpZGVQbGF5ZXJCb2FyZCh0aGlzLnR1cm5QbGF5ZXIpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gQUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNlbGVjdE1vZGVsKHBsYXllck5hbWUsIGluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpXG4gICAgICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKVxuICAgICAgICAgICAgICAgIG1vZGVsLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSkubW9kZWxzW2luZGV4XTtcbiAgICAgICAgbW9kZWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkTW9kZWwgPSBtb2RlbDtcbiAgICB9XG4gICAgZGVsZXRlTW9kZWwocGxheWVyLCBpbmRleCkge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHNbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgcGxheWVyLm1vZGVsc1tpbmRleF0ucGxhY2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHJvdGF0ZU1vZGVsKHBsYXllciwgaW5kZXgpIHtcbiAgICAgICAgcGxheWVyLm1vZGVsc1tpbmRleF0ucm90YXRlKCk7XG4gICAgfVxuICAgIGhpZGVNb2RlbE9yaWVudGF0aW9uKHBsYXllcikge1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKVxuICAgICAgICAgICAgaWYgKG1vZGVsLnNoaXAuc2hhcGUgPT09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgICBtb2RlbC5yb3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cblxuICAgIHBsYWNlTW9kZWwoeCwgeSwgcGxheWVyLCBtYW51YWxNb2RlbCkge1xuICAgICAgICBsZXQgbW9kZWwgPSAobWFudWFsTW9kZWwgfHwgdGhpcy5zZWxlY3RlZE1vZGVsKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5hZGRTaGlwKHgsIHksIG1vZGVsLnNoaXAubGVuZ3RoLCBtb2RlbC5zaGlwLnNoYXBlLCBtb2RlbC5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGFjaW5nIG1vZGVsLi4uJywgcmVzdWx0KTsgLy8gREVCVUdcblxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBtb2RlbC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYXV0b0dlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGF1dG8gZ2VuZXJhdGluZyBzaGlwcyBmb3IgJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX1gKVxuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy50dXJuUGxheWVyO1xuXG4gICAgICAgIHRoaXMuY2xlYXIocGxheWVyKTtcbiAgICAgICAgcGxheWVyLmdlbmVyYXRlTW9kZWxzKHRydWUpO1xuICAgICAgICBmb3IgKGxldCBtb2RlbCBvZiBwbGF5ZXIubW9kZWxzKSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucGxhY2VNb2RlbCh4LCB5LCBwbGF5ZXIsIG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2xlYXIocGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IG1vZGVsIG9mIHBsYXllci5tb2RlbHMpIHtcbiAgICAgICAgICAgIERPTS5yZW1vdmVNb2RlbChwbGF5ZXIubmFtZSwgbW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1vZGVsLnBsYWNlZCkge1xuICAgICAgICAgICAgICAgIERPTS5yZW1vdmVTaGlwKHBsYXllci5uYW1lLCBwbGF5ZXIuYm9hcmQuc2hpcHNbbW9kZWwuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZU1vZGVsKHBsYXllciwgbW9kZWwuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gT1VUUFVUID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBET00udXBkYXRlQnV0dG9ucyh0aGlzLnN0YXRlKTtcbiAgICAgICAgRE9NLnVwZGF0ZU1vZGVscyh0aGlzKTtcbiAgICAgICAgRE9NLnVwZGF0ZUdhbWVib2FyZCh0aGlzKTtcbiAgICAgICAgRE9NLnVwZGF0ZUFjdGl2ZVBsYXllcih0aGlzKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGdldFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpXG4gICAgICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09IHBsYXllck5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG4gICAgZ2V0T3RoZXJQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgICAgIGxldCBvdGhlckluZGV4ID0gKHBsYXllci5uYW1lID09PSB0aGlzLnBsYXllcnNbMF0ubmFtZSkgPyAxIDogMDtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc1tvdGhlckluZGV4XTtcbiAgICB9XG4gICAgc3dpdGNoUGxheWVyKCkge1xuICAgICAgICBsZXQgb3RoZXJJbmRleCA9ICh0aGlzLnR1cm5QbGF5ZXIuaW5kZXggPT09IDApID8gMSA6IDA7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9IHRoaXMucGxheWVyc1tvdGhlckluZGV4XTtcbiAgICB9XG5cbiAgICBpc1N0YXRlKHN0YXRlQXJncykge1xuICAgICAgICBmb3IgKGxldCBzdGF0ZSBvZiBhcmd1bWVudHMpXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gc3RhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIEdhbWVfb2xkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wMSA9IG5ldyBQbGF5ZXIoJ3AxJyk7XG4gICAgICAgIHRoaXMucDIgPSBuZXcgUGxheWVyKCdwMicpO1xuICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwID0gbnVsbDsgLy8gcmVtb3ZlXG4gICAgICAgIHRoaXMuYWN0aXZlTW9kZWwgPSBudWxsO1xuICAgICAgICBET00uY3JlYXRlQm9hcmQoYm9hcmROb2RlMSwgdGhpcywgdGhpcy5wMSk7XG4gICAgICAgIERPTS5jcmVhdGVCb2FyZChib2FyZE5vZGUyLCB0aGlzLCB0aGlzLnAyKTtcbiAgICAgICAgRE9NLmNyZWF0ZU1vZGVscyh0aGlzLCB0aGlzLnAxKTsgLy8gVE9ET1xuICAgICAgICBET00uY3JlYXRlTW9kZWxzKHRoaXMsIHRoaXMucDIpOyAvLyBUT0RPXG4gICAgICAgIERPTS5zZXRTaGlwU2VsZWN0KHRoaXMpO1xuICAgICAgICBET00uc2V0QnV0dG9ucyh0aGlzKTtcblxuICAgICAgICAvLyAnc3RhcnQnLCAncDFwaWNrJywgJ3AxQ29uZmlybScsICdwMnBpY2snLCAncDJDb25maXJtJywgJ2dhbWUnLCAncmVzdWxzdCc7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnQnO1xuICAgICAgICBET00ucG9zdCgnU2VsZWN0IGdhbWUgbW9kZScpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBzdGF0ZSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhgJWNuZXcgc3RhdGU6ICVjJHtzdGF0ZX1gLCAnJywgJ2NvbG9yOiBnb2xkZW5yb2Q7IGZvbnQtd2VpZ2h0OiBib2xkJyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnAxLmJvYXJkLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wMi5ib2FyZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIERPTS5yZXNldFNoaXBTZWxlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncDFwaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJldmVhbCh0aGlzLnAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMSwgc2VsZWN0IHlvdXIgc2hpcHMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AxQ29uZmlybSc6XG4gICAgICAgICAgICAgICAgRE9NLnBvc3QoJ1BsYXllciAxLCBjb25maXJtIHlvdXIgc2hpcCBwbGFjZW1lbnQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3AycGljayc6XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWwodGhpcy5wMik7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUGxheWVyID0gdGhpcy5wMjtcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnUGxheWVyIDIsIHNlbGVjdCB5b3VyIHNoaXBzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwMkNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIERPTS5wb3N0KCdQbGF5ZXIgMiwgY29uZmlybSB5b3VyIHNoaXAgcGxhY2VtZW50Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnYW1lJzpcbiAgICAgICAgICAgICAgICBET00ucG9zdCgnU3RhcnQgdGhlIGdhbWUhIFBsYXllciAxLCBhdHRhY2sgYSBzcXVhcmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5QbGF5ZXIgPSB0aGlzLnAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXN1bHRzJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBET00udXBkYXRlQnV0dG9ucyhzdGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhcnQodHlwZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJWMke3R5cGV9YCsnICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09ICdzdGFydCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0eXBlID09PSAndHdvUGxheWVyJylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AxcGljaycpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCclY2NvbmZpcm0gJWNidXR0b24gcHJlc3NlZCcsICdjb2xvcjogc2t5Ymx1ZScsIG51bGwpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AxQ29uZmlybScpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMnBpY2snKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AyQ29uZmlybScpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdnYW1lJyk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hpZGluZyBwbGF5ZXIgc2hpcHMnKTtcbiAgICAgICAgRE9NLmhpZGUoYm9hcmROb2RlMSwgYm9hcmROb2RlMik7XG4gICAgfVxuICAgIHJldmVhbChwbGF5ZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHJldmVhbGluZyAlYyR7cGxheWVyLm5hbWV9J3Mgc2hpcHNgLCAnY29sb3I6IHNreWJsdWUnKTtcbiAgICAgICAgbGV0IGJvYXJkTm9kZSA9IChwbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IGJvYXJkTm9kZTEgOiBib2FyZE5vZGUyO1xuICAgICAgICBET00ucmV2ZWFsKGJvYXJkTm9kZSk7XG4gICAgfVxuICAgIHBlZWsoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQZWVraW5nIGF0ICR7dGhpcy50dXJuUGxheWVyLm5hbWV9J3Mgc2hpcHNgKTtcbiAgICB9XG5cbiAgICBhdXRvR2VuKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnJWNhdXRvR2VuICVjYnV0dG9uIHByZXNzZWQnLCAnY29sb3I6IHNreWJsdWUnLCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3AxcGljaycpIHtcbiAgICAgICAgICAgIHRoaXMucDEuYm9hcmQuZ2VuRGVmYXVsdFNoaXBzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdwMUNvbmZpcm0nKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAncDJwaWNrJykge1xuICAgICAgICAgICAgdGhpcy5wMi5ib2FyZC5nZW5EZWZhdWx0U2hpcHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoJ3AyQ29uZmlybScpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgZ2VuOiAnLCB0aGlzLnAxKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiB9XG5cbiAgICBzcXVhcmVDbGlja2VkKHgsIHksIG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNsaWNrZWQgeDolYyR7eH0lYyB5OiVjJHt5fSVjIHwgYm9hcmQ6ICVjJHtuYW1lfSVjIHwgdHVybjogJHt0aGlzLnR1cm5QbGF5ZXIubmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IGAke25hbWV9cGlja2ApIHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IHRoaXMuYWN0aXZlTW9kZWwubW9kZWw7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ290IHRoaXMgZmFyJyk7IC8vIERFQlVHXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZU1vZGVsICYmICFtb2RlbC5wbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxhY2luZyBzaGlwOiAnLCBtb2RlbCk7IC8vIERFQlVHXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnR1cm5QbGF5ZXIuYm9hcmQuYWRkU2hpcCh4LCB5LCBtb2RlbC5zaGlwLnNlZ21lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2ZhaWx1cmUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRTaGlwLmNhbGxiYWNrKCk7IC8vIFRPRE9cbiAgICAgICAgICAgICAgICBtb2RlbC5wbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzLmxlbmd0aCA+PSA1KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGAke25hbWV9Q29uZmlybWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBgJHtuYW1lfXBpY2tgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hpcCAmJiAhdGhpcy5jdXJyZW50U2hpcC51c2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYWNpbmcgc2hpcDogJywgdGhpcy5jdXJyZW50U2hpcCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50dXJuUGxheWVyLmJvYXJkLmFkZFNoaXAoeCwgeSwgdGhpcy5jdXJyZW50U2hpcC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdmYWlsdXJlJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcC5jYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLmJvYXJkLnNoaXBzLmxlbmd0aCA+PSA1KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGAke25hbWV9Q29uZmlybWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9ICdnYW1lJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy50dXJuUGxheWVyLm5hbWUgPT09IG5hbWUpXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJFcnJvcjogY2xpY2sgb3RoZXIgcGxheWVyJ3MgYm9hcmRcIik7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy5nZXRPdGhlclBsYXllcihuYW1lKS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2U6ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdmYWlsdXJlJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3VsdCkge1xuICAgICAgICAgICAgY2FzZSAnZW1wdHkgc3F1YXJlJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgaGl0JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZW15IHNoaXAgc3Vuayc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGwgZW5lbXkgc2hpcHMgc3Vuayc6XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgncmVzdWx0cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgbGV0IG5hbWVTdHJpbmcgPSAodGhpcy50dXJuUGxheWVyID09PSB0aGlzLnAxKSA/ICdQbGF5ZXIgMScgOiAnUGxheWVyIDInO1xuICAgICAgICBET00ucG9zdChgJHtuYW1lU3RyaW5nfSwgYXR0YWNrIGEgc3F1YXJlYCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcbiAgICBzaGlwTGFiZWxDbGlja2VkKHBsYXllck5hbWUsIGluZGV4LCB0eXBlLCB1c2VkLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBzaGlwIGluZGV4OiVjJHtpbmRleH0lYyB0eXBlOiVjJHt0eXBlfSVjIHwgcGxheWVyOiAlYyR7cGxheWVyTmFtZX1gLFxuICAgICAgICAgICAgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJywgbnVsbCwgJ2NvbG9yOiBsaWdodGNvcmFsJyk7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcihwbGF5ZXJOYW1lKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwID0ge2xlbmd0aDogTnVtYmVyKHR5cGUpLCB1c2VkOiB1c2VkLCBjYWxsYmFjazogY2FsbGJhY2t9O1xuICAgIH1cblxuICAgIHNoaXBNb2RlbENsaWNrZWQocGxheWVyLCBpbmRleCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCBtb2RlbCBpbmRleDolYyR7aW5kZXh9JWN8IHBsYXllcjogJWMke3BsYXllci5uYW1lfWAsXG4gICAgICAgICAgICAnY29sb3I6IGxpZ2h0Y29yYWwnLCBudWxsLCAnY29sb3I6IGxpZ2h0Y29yYWwnKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU1vZGVsID0ge21vZGVsOiBwbGF5ZXIuYm9hcmQubW9kZWxzW2luZGV4XSwgcGxheWVyOiBwbGF5ZXJ9O1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlIG1vZGVsOiAnLCB0aGlzLmFjdGl2ZU1vZGVsKTtcblxuXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFNoaXAgPSB7bGVuZ3RoOiBOdW1iZXIodHlwZSksIHVzZWQ6IHVzZWQsIGNhbGxiYWNrOiBjYWxsYmFja307XG4gICAgfVxuXG5cbiAgICBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMudHVyblBsYXllciA9ICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IHRoaXMucDIgOiB0aGlzLnAxO1xuICAgIH1cbiAgICBnZXRQbGF5ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMudHVyblBsYXllci5uYW1lID09PSB0aGlzLnAxLm5hbWUpID8gdGhpcy5wMSA6IHRoaXMucDI7XG4gICAgfVxuICAgIGdldE90aGVyUGxheWVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnR1cm5QbGF5ZXIubmFtZSA9PT0gdGhpcy5wMS5uYW1lKSA/IHRoaXMucDIgOiB0aGlzLnAxO1xuICAgIH1cbiBcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIERPTS51cGRhdGVCb2FyZChib2FyZE5vZGUxLCB0aGlzLnAxKTtcbiAgICAgICAgRE9NLnVwZGF0ZUJvYXJkKGJvYXJkTm9kZTIsIHRoaXMucDIpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMsIHRoaXMucDEpO1xuICAgICAgICBET00udXBkYXRlTW9kZWxzKHRoaXMsIHRoaXMucDIpO1xuICAgICAgICBET00udXBkYXRlQ3VycmVudFBsYXllcih0aGlzLnR1cm5QbGF5ZXIpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oaXRzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHMgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSg1KSk7XG4gICAgICAgIHRoaXMubW9kZWxzID0gW107XG4gICAgICAgIHRoaXMuZ2VuRGVmYXVsdE1vZGVscygpO1xuICAgICAgICAvLyB0aGlzLmdlbkRlZmF1bHRTaGlwcygpO1xuICAgIH1cblxuICAgIGFkZFNoaXAoeCwgeSwgbGVuZ3RoID0gMSwgc2hhcGUgPSAndmVydGljYWwnLCBpbmRleCkge1xuICAgICAgICBpZiAoaXNPdXRPZkJvdW5kcyh4LCB5KSlcbiAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIG91dCBvZiBib3VuZHMnfTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoeCwgeSwgbGVuZ3RoLCBzaGFwZSk7XG5cbiAgICAgICAgZm9yIChsZXQgc2VnbWVudCBvZiBzaGlwLnNlZ21lbnRzKVxuICAgICAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoc2VnbWVudC54LCBzZWdtZW50LnkpKVxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhdHVzOiAnZmFpbHVyZScsIG1lc3NhZ2U6ICdzaGlwIGV4dGVuZHMgb3V0IG9mIGJvdW5kcyd9O1xuXG4gICAgICAgIGZvciAobGV0IHNlZ21lbnQxIG9mIHNoaXAuc2VnbWVudHMpXG4gICAgICAgICAgICBmb3IgKGxldCBzaGlwMiBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGlwMilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VnbWVudDIgb2Ygc2hpcDIuc2VnbWVudHMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWdtZW50MS54ID09IHNlZ21lbnQyLnggJiYgc2VnbWVudDEueSA9PSBzZWdtZW50Mi55KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NoaXAgaW50ZXJzZWN0cyBvdGhlciBzaGlwJ307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaGlwc1tpbmRleF0gPSBzaGlwO1xuICAgICAgICByZXR1cm4ge3N0YXR1czogJ3N1Y2Nlc3MnfTtcbiAgICB9XG5cbiAgICBnZXQgc2hpcHNGdWxsKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICBpZiAoIXNoaXApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBhZGRNb2RlbCh4LCB5LCBsZW5ndGggPSAxLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCh4LCB5LCBsZW5ndGgsIHNoYXBlKTtcblxuICAgICAgICB0aGlzLm1vZGVscy5wdXNoKHtzaGlwOiBzaGlwLCBpbmRleDogbnVsbCwgcGxhY2VkOiBmYWxzZSwgc3VuazogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgZm9yIChsZXQgaGl0IG9mIHRoaXMuaGl0cylcbiAgICAgICAgICAgIGlmIChoaXQueCA9PSB4ICYmIGhpdC55ID09IHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGF0dXM6ICdmYWlsdXJlJywgbWVzc2FnZTogJ3NxdWFyZSBhbHJlYWR5IGhpdCd9O1xuXG4gICAgICAgIHRoaXMuaGl0cy5wdXNoKHt4LCB5fSk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHtzdGF0dXM6ICdzdWNjZXNzJywgcmVzdWx0OiAnZW1wdHkgc3F1YXJlJ307XG5cbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNoaXAuc2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudC54ID09IHggJiYgc2VnbWVudC55ID09IHkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5pc0hpdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucmVzdWx0ID0gJ2VuZW15IHNoaXAgaGl0JztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hcmVTaGlwc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9ICdhbGwgZW5lbXkgc2hpcHMgc3Vuayc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9ICdlbmVteSBzaGlwIHN1bmsnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlZ21lbnQgb2Ygc2hpcC5zZWdtZW50cylcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgYXJlU2hpcHNTdW5rKCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpXG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZW5EZWZhdWx0U2hpcHMoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDEsIDEsIDIsICd2ZXJ0aWNhbCcsIDApO1xuICAgICAgICB0aGlzLmFkZFNoaXAoMywgMywgMiwgJ3ZlcnRpY2FsJywgMSk7XG4gICAgICAgIHRoaXMuYWRkU2hpcCg1LCA1LCAyLCAndmVydGljYWwnLCAyKTtcbiAgICAgICAgdGhpcy5hZGRTaGlwKDcsIDcsIDIsICd2ZXJ0aWNhbCcsIDMpO1xuICAgICAgICB0aGlzLmFkZFNoaXAoOSwgNCwgMiwgJ3ZlcnRpY2FsJywgNCk7XG4gICAgfVxuXG4gICAgZ2VuRGVmYXVsdE1vZGVscygpIHtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAyKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAxLCAzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA0KTtcbiAgICAgICAgdGhpcy5hZGRNb2RlbCgyLCAwLCA1KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWxzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5tb2RlbHNbaV0uaW5kZXggPSBpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNPdXRPZkJvdW5kcyh4LCB5KSB7XG4gICAgcmV0dXJuICh4ID4gMTAgfHwgeCA8IDAgfHwgeSA+IDEwIHx8IHkgPCAwKTtcbn0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHRoaXMubW9kZWxzID0gbmV3IEFycmF5KDUpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTW9kZWxzKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVNb2RlbHMocmFuZG9tU2hhcGVzID0gZmFsc2UpIHtcbiAgICAgICAgLy8gbGV0IGxlbmd0aHMgPSBbMSwgMiwgMSwgMSwgMV07XG4gICAgICAgIGxldCBsZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA1OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgc2hhcGUgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgaWYgKHJhbmRvbVNoYXBlcylcbiAgICAgICAgICAgICAgICBzaGFwZSA9IChNYXRoLnJhbmRvbSgpICogMiA+PSAxKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICB0aGlzLm1vZGVsc1tpbmRleF0gPSBuZXcgTW9kZWwodGhpcy5uYW1lLCBsZW5ndGhzW2luZGV4XSwgaW5kZXgsIHNoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0TW9kZWxzKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlTW9kZWxzKCk7XG4gICAgfVxufVxuXG5jbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocGxheWVyTmFtZSwgbGVuZ3RoLCBpbmRleCwgc2hhcGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgdGhpcy5zaGlwID0gbmV3IFNoaXAoMCwgMCwgbGVuZ3RoLCBzaGFwZSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5yZWNlbnRlcigpO1xuICAgIH1cbiAgICBnZXQgYm9vbHMoKSB7XG4gICAgICAgIHJldHVybiB7c2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsIHBsYWNlZDogdGhpcy5wbGFjZWQsIHN1bms6IHRoaXMuc3Vua307XG4gICAgfVxuICAgIHJvdGF0ZSgpIHtcbiAgICAgICAgbGV0IG5ld1NoYXBlID0gKHRoaXMuc2hpcC5zaGFwZSA9PT0gJ3ZlcnRpY2FsJykgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICB0aGlzLnNoaXAgPSBuZXcgU2hpcCh0aGlzLnNoaXAueCwgdGhpcy5zaGlwLnksIHRoaXMuc2hpcC5sZW5ndGgsIG5ld1NoYXBlKTtcbiAgICAgICAgdGhpcy5yZWNlbnRlcigpO1xuICAgIH1cbiAgICByZWNlbnRlcigpIHtcbiAgICAgICAgbGV0IGxlZnRvdmVyV2lkdGggPSA1IC0gdGhpcy5zaGlwLndpZHRoO1xuICAgICAgICBsZXQgbGVmdG92ZXJIZWlnaHQgPSA1IC0gdGhpcy5zaGlwLmhlaWdodDtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5mbG9vcihsZWZ0b3ZlcldpZHRoIC8gMik7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGguZmxvb3IobGVmdG92ZXJIZWlnaHQgLyAyKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBzaGFwZSA9ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZHggPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gMCA6IGk7XG4gICAgICAgICAgICBsZXQgZHkgPSAoc2hhcGUgPT09ICd2ZXJ0aWNhbCcpID8gaSA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2gobmV3IFNlZ21lbnQoeCArIGR4LCB5ICsgZHkpKTtcbiAgICAgICAgfVxuICAgICAgICBhZGp1c3RDb3JuZXJzKHRoaXMuc2VnbWVudHMpO1xuICAgIH1cbiAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBcbiAgICAgICAgICAgIHByZXYgKz0gKGN1cnIuaXNIaXQpID8gMSA6IDAsIDApO1xuICAgIH1cbiAgICBoaXQoeCwgeSkge1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBzZWdtZW50LnggJiYgeSA9PSBzZWdtZW50LnkpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N1bmsoKSkgLy8gVE9ETzogdGVzdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiBzZWdtZW50LnN1bmsgPSB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtyZXR1cm4gKHRoaXMuaGl0cyA+PSB0aGlzLnNlZ21lbnRzLmxlbmd0aCl9XG4gICAgLy8gc3RhdGljIGNvcHlGcm9tKHNoaXAsIHgsIHkpIHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBTaGlwKHgsIHksIHNoaXAubGVuZ3RoLCBzaGlwLnNoYXBlKTtcbiAgICAvLyB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5zZWdtZW50cy5tYXAoc2VnbWVudCA9PiBzZWdtZW50LngpO1xuICAgICAgICBsZXQgbWluID0gYXJyLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7cmV0dXJuIChjdXIgPCBwcmV2KSA/IGN1ciA6IHByZXY7fSwgMCk7XG4gICAgICAgIGxldCBtYXggPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA+IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgcmV0dXJuIG1heCAtIG1pbiArIDE7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQueSk7XG4gICAgICAgIGxldCBtaW4gPSBhcnIucmVkdWNlKChwcmV2LCBjdXIpID0+IHtyZXR1cm4gKGN1ciA8IHByZXYpID8gY3VyIDogcHJldjt9LCAwKTtcbiAgICAgICAgbGV0IG1heCA9IGFyci5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge3JldHVybiAoY3VyID4gcHJldikgPyBjdXIgOiBwcmV2O30sIDApO1xuICAgICAgICByZXR1cm4gbWF4IC0gbWluICsgMTtcbiAgICB9XG59XG5cbmNsYXNzIFNlZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7IC8vIFRPRE86IGF1dG8gdXBkYXRlXG4gICAgICAgIHRoaXMuY29ybmVyVEwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3JuZXJUUiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvcm5lckJMID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ybmVyQlIgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGJvb2xzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGl0OiB0aGlzLmhpdCxcbiAgICAgICAgICAgIHN1bms6IHRoaXMuc3VuayxcbiAgICAgICAgICAgIGNvcm5lclRMOiB0aGlzLmNvcm5lclRMLFxuICAgICAgICAgICAgY29ybmVyVFI6IHRoaXMuY29ybmVyVFIsXG4gICAgICAgICAgICBjb3JuZXJCTDogdGhpcy5jb3JuZXJCTCxcbiAgICAgICAgICAgIGNvcm5lckJSOiB0aGlzLmNvcm5lckJSLFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGp1c3RDb3JuZXJzKHNlZ21lbnRzKSB7XG4gICAgZm9yIChsZXQgc2VnbWVudDEgb2Ygc2VnbWVudHMpIHtcbiAgICAgICAgbGV0IHgxID0gc2VnbWVudDEueDtcbiAgICAgICAgbGV0IHkxID0gc2VnbWVudDEueTtcbiAgICAgICAgZm9yIChsZXQgc2VnbWVudDIgb2Ygc2VnbWVudHMpIHtcbiAgICAgICAgICAgIGxldCB4MiA9IHNlZ21lbnQyLng7XG4gICAgICAgICAgICBsZXQgeTIgPSBzZWdtZW50Mi55O1xuICAgICAgICAgICAgaWYgKHgyID09IHgxLTEgJiYgeTIgPT0geTEpIHsgLy8gdG8gdGhlIGxlZnQgb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQkwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDErMSAmJiB5MiA9PSB5MSkgeyAvLyB0byB0aGUgcmlnaHQgb2YgaXRcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJUUiA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyQlIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeDIgPT0geDEgJiYgeTIgPT0geTEtMSkgeyAvLyB0byB0aGUgdG9wIG9mIGl0XG4gICAgICAgICAgICAgICAgc2VnbWVudDEuY29ybmVyVEwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lclRSID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHgyID09IHgxICYmIHkyID09IHkxKzEpIHsgLy8gdG8gdGhlIGJvdHRvbSBvZiBpdFxuICAgICAgICAgICAgICAgIHNlZ21lbnQxLmNvcm5lckJMID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWdtZW50MS5jb3JuZXJCUiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==