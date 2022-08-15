/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_bodyParser2.default.json());\napp.use((0, _helmet2.default)());\napp.use((0, _cors2.default)());\n\n(0, _routes2.default)(app);\nexports.default = app;\n\n//# sourceURL=webpack://server/./src/app.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nmodule.exports = {\n  mongo: process.env.DB || \"mongodb://localhost:27017/todo-list\",\n  port: process.env.PORT || 44300\n};\n\n//# sourceURL=webpack://server/./src/config/config.js?");

/***/ }),

/***/ "./src/controllers/todo.controllers.js":
/*!*********************************************!*\
  !*** ./src/controllers/todo.controllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _todo = __webpack_require__(/*! ../models/todo.model */ \"./src/models/todo.model.js\");\n\nvar _todo2 = _interopRequireDefault(_todo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n  var todo = (0, _todo2.default)(req.body);\n  todo.save(function (err, data) {\n    if (err) {\n      return res.status(400).json(err.message);\n    }\n    res.status(201).json(data);\n  });\n};\n\nvar list = function list(req, res) {\n  _todo2.default.find(function (err, data) {\n    if (err) {\n      return res.status(400).json(err.message);\n    }\n    res.status(200).json(data);\n  });\n};\n\nvar update = function update(req, res) {\n  var id = req.params.id;\n  var isCompleted = req.body.isCompleted;\n  if (id) {\n    _todo2.default.findByIdAndUpdate(id, { isCompleted: isCompleted }, function (err, docs) {\n      if (err) {\n        res.status(400).json({ message: \"Todo has not been updated.\" });\n      } else {\n        res.status(200).json({ message: \"Todo details successfully updated.\" });\n      }\n    });\n  } else {\n    res.json({ error: \"Todo has not been updated.\" });\n  }\n};\n\nvar remove = function remove(req, res) {\n  var id = req.params.id;\n  _todo2.default.findById(id).exec(function (err, data) {\n    if (err || !data) {\n      return res.status(400).json(\"Todo not found!\");\n    }\n    data.remove(function (err, data) {\n      if (err) {\n        return res.status(400).json(err.message);\n      }\n      res.status(200).json(\"Todo successfully deleted.\");\n    });\n  });\n};\n\nexports.default = { list: list, create: create, update: update, remove: remove };\n\n//# sourceURL=webpack://server/./src/controllers/todo.controllers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _config = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_app2.default.listen(_config2.default.port, function (error) {\n  if (error) console.log(error);\n  console.log(\"Server is listening on port \" + _config2.default.port);\n});\n\n_mongoose2.default.connect(_config2.default.mongo, {\n  useUnifiedTopology: true,\n  useNewUrlParser: true\n}).then(function () {\n  return console.log(\"Database connected\");\n}).catch(function () {\n  return console.log(\"Error connecting to database\");\n});\n\n//# sourceURL=webpack://server/./src/index.js?");

/***/ }),

/***/ "./src/models/todo.model.js":
/*!**********************************!*\
  !*** ./src/models/todo.model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TodoSchema = new _mongoose2.default.Schema({\n  text: {\n    type: String,\n    required: [true, \"The todo text field is required\"]\n  },\n  isCompleted: {\n    type: Boolean,\n    default: false\n  }\n});\n\nexports.default = _mongoose2.default.model(\"Todo\", TodoSchema);\n\n//# sourceURL=webpack://server/./src/models/todo.model.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _todo = __webpack_require__(/*! ./todo.router */ \"./src/routes/todo.router.js\");\n\nvar _todo2 = _interopRequireDefault(_todo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n  app.use(\"/\", _todo2.default);\n};\n\n//# sourceURL=webpack://server/./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/todo.router.js":
/*!***********************************!*\
  !*** ./src/routes/todo.router.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _todo = __webpack_require__(/*! ../controllers/todo.controllers */ \"./src/controllers/todo.controllers.js\");\n\nvar _todo2 = _interopRequireDefault(_todo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route(\"/api/todos\").get(_todo2.default.list).post(_todo2.default.create);\nrouter.route(\"/api/todos/:id\").put(_todo2.default.update).delete(_todo2.default.remove);\n\nexports.default = router;\n\n//# sourceURL=webpack://server/./src/routes/todo.router.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;