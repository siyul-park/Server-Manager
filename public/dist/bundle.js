/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {global.Vokkit = __webpack_require__(/*! ./src/Vokkit.js */ \"./public/src/Vokkit.js\")\r\n\r\nwindow.onload = function () {\r\n  Vokkit.init()\r\n}\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./public/index.js?");

/***/ }),

/***/ "./public/src/Client.js":
/*!******************************!*\
  !*** ./public/src/Client.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Lang = __webpack_require__(/*! ./lang/Lang */ \"./public/src/lang/Lang.js\")\n\nconst { Logger, ConsoleHandel, LEVEL } = __webpack_require__(/*! ./log/Logger */ \"./public/src/log/Logger.js\")\n\nconst User = __webpack_require__(/*! ./entity/User */ \"./public/src/entity/User.js\")\n\nconst PluginManager = __webpack_require__(/*! ./manager/PluginManager */ \"./public/src/manager/PluginManager.js\")\nconst UserManager = __webpack_require__(/*! ./manager/UserManager */ \"./public/src/manager/UserManager.js\")\nconst EventManager = __webpack_require__(/*! ./manager/EventManager */ \"./public/src/manager/EventManager.js\")\nconst SocketConnectManager = __webpack_require__(/*! ./manager/SocketConnectManager */ \"./public/src/manager/SocketConnectManager.js\")\n\nclass Client extends User {\n  constructor (id, name, level = LEVEL.ALL) {\n    super(id, 'Client')\n\n    this._logger = new Logger(Lang.format('name.logger'))\n    this._logger.level = level\n    let consolehandle = new ConsoleHandel()\n    consolehandle.level = LEVEL.ALL\n    this._logger.addHandler(consolehandle)\n\n    this._logger.info(Lang.format('msg.application.creating', [this._name]))\n    this.init()\n    this._logger.fine(Lang.format('msg.application.created', [this._name]))\n\n    this._socket = io()\n  }\n\n  async init () {\n    this._managers = []\n\n    this._pluginManager = new PluginManager(this, Lang.format('name.manager.plugin'))\n    this._pluginManager.load()\n    try {\n      await this._pluginManager.enable()\n    } catch (e) {\n      this._logger.warning(e.message)\n    }\n\n    this._userManager = new UserManager(this, Lang.format('name.manager.user'))\n    this._eventManager = new EventManager(this, Lang.format('name.manager.event'))\n    this._socketConnectManager = new SocketConnectManager(this, Lang.format('name.manager.socketConnect'))\n  }\n\n  addManager (manager) {\n    return this._managers.push(manager)\n  }\n\n  getManager (name) {\n    for (let i in this._managers) {\n      if (this._managers[i].name === name) {\n        return this._managers[i]\n      }\n    }\n  }\n\n  removeManager (name) {\n    for (let i in this._managers) {\n      if (this._managers[i].name === name) {\n        this._managers[i].destroyer()\n        this._managers[i].splice(i, 1)\n        return\n      }\n    }\n  }\n\n  get socket () {\n    return this._socket\n  }\n  get logger () {\n    return this._logger\n  }\n  get socketConnectManager () {\n    return this._socketConnectManager\n  }\n  get pluginManager () {\n    return this._pluginManager\n  }\n  get eventManager () {\n    return this._eventManager\n  }\n  get userManager () {\n    return this._userManager\n  }\n\n  destroyer () {\n    this._logger.info(Lang.format('msg.application.destroying', [this._name]))\n    this.destroy()\n    this._logger.fine(Lang.format('msg.application.destroyed', [this._name]))\n  }\n\n  destroy () {\n    for (let i in this._managers) {\n      this._managers[i].destroyer()\n    }\n    this._pluginManager.destroyer()\n    this._eventManager.destroyer()\n    this._socketConnectManager.destroyer()\n    this._userManager.destroyer()\n  }\n}\n\nmodule.exports = Client\n\n\n//# sourceURL=webpack:///./public/src/Client.js?");

/***/ }),

/***/ "./public/src/Vokkit.js":
/*!******************************!*\
  !*** ./public/src/Vokkit.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Client = __webpack_require__(/*! ./Client.js */ \"./public/src/Client.js\")\r\nconst Lang = __webpack_require__(/*! ./lang/Lang */ \"./public/src/lang/Lang.js\")\r\n\r\nlet _client\r\n\r\nclass Vokkit {\r\n  static init () {\r\n    Lang.setLanguage(navigator.language.substring(0, 2))\r\n    _client = new Client()\r\n  }\r\n\r\n  static getClient () {\r\n    return _client\r\n  }\r\n}\r\n\r\nmodule.exports = Vokkit\r\n\n\n//# sourceURL=webpack:///./public/src/Vokkit.js?");

/***/ }),

/***/ "./public/src/entity/Entity.js":
/*!*************************************!*\
  !*** ./public/src/entity/Entity.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Entity {\n  constructor (id) {\n    this._id = id\n  }\n\n  get id () {\n    return this._id\n  }\n\n  equals (object) {\n    return object instanceof this.constructor && object.getId() === this.getId()\n  }\n}\n\nmodule.exports = Entity\n\n\n//# sourceURL=webpack:///./public/src/entity/Entity.js?");

/***/ }),

/***/ "./public/src/entity/User.js":
/*!***********************************!*\
  !*** ./public/src/entity/User.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Entity = __webpack_require__(/*! ./Entity.js */ \"./public/src/entity/Entity.js\")\n\nclass User extends Entity {\n  constructor (id, name) {\n    super(id)\n\n    this._name = name\n  }\n\n  get name () {\n    return this._name\n  }\n\n  set name (name) {\n    this._name = name\n  }\n\n  toObject () {\n    return {\n      name: this._name,\n      id: this._id\n    }\n  }\n\n  static fromObject (object) {\n    return new User(object.id, object.name)\n  }\n}\n\nmodule.exports = User\n\n\n//# sourceURL=webpack:///./public/src/entity/User.js?");

/***/ }),

/***/ "./public/src/event/Event.js":
/*!***********************************!*\
  !*** ./public/src/event/Event.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Event {\n  constructor (data = {}) {\n    this._data = data\n    this._eventName = Event.eventName\n  }\n\n  get eventName () {\n    return this._eventName\n  }\n\n  static get eventName () {\n    return ''\n  }\n}\n\nmodule.exports = Event\n\n\n//# sourceURL=webpack:///./public/src/event/Event.js?");

/***/ }),

/***/ "./public/src/event/EventExecutor.js":
/*!*******************************************!*\
  !*** ./public/src/event/EventExecutor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const EventPriority = __webpack_require__(/*! ./EventPriority.js */ \"./public/src/event/EventPriority.js\")\r\n\r\nclass EventExecutor {\r\n  constructor (app) {\r\n    this._app = app\r\n    this._plugin = undefined\r\n    this._eventName = ''\r\n    this._eventPriority = EventPriority.NORMAL\r\n  }\r\n  get eventName () {\r\n    return this._eventName\r\n  }\r\n\r\n  get plugin () {\r\n    return this._plugin\r\n  }\r\n\r\n  get eventPriority () {\r\n    return this._eventPriority\r\n  }\r\n\r\n  excute (event) {}\r\n}\r\n\r\nmodule.exports = EventExecutor\r\n\n\n//# sourceURL=webpack:///./public/src/event/EventExecutor.js?");

/***/ }),

/***/ "./public/src/event/EventPriority.js":
/*!*******************************************!*\
  !*** ./public/src/event/EventPriority.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const EventPriority = {\n  HIGHEST: 5,\n  HIGH: 4,\n  NORMAL: 3,\n  LOW: 2,\n  LOWEST: 1,\n  MONITOR: 0\n}\n\nmodule.exports = EventPriority\n\n\n//# sourceURL=webpack:///./public/src/event/EventPriority.js?");

/***/ }),

/***/ "./public/src/event/user/AssignedGuestEvent.js":
/*!*****************************************************!*\
  !*** ./public/src/event/user/AssignedGuestEvent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const UserEvent = __webpack_require__(/*! ./UserEvent */ \"./public/src/event/user/UserEvent.js\")\r\n\r\nclass AssignedGuestEvent extends UserEvent {\r\n  constructor (data = {}) {\r\n    super(data)\r\n    this._eventName = AssignedGuestEvent.eventName\r\n    this._name = data.name\r\n  }\r\n\r\n  set name (name) {\r\n    this._name = name\r\n  }\r\n  get name () {\r\n    return this._name\r\n  }\r\n\r\n  static get eventName () {\r\n    return 'assigned_guest_id'\r\n  }\r\n}\r\n\r\nmodule.exports = AssignedGuestEvent\r\n\n\n//# sourceURL=webpack:///./public/src/event/user/AssignedGuestEvent.js?");

/***/ }),

/***/ "./public/src/event/user/AssignedGuestEventExecutor.js":
/*!*************************************************************!*\
  !*** ./public/src/event/user/AssignedGuestEventExecutor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const EventExecutor = __webpack_require__(/*! ../EventExecutor */ \"./public/src/event/EventExecutor.js\")\r\nconst Lang = __webpack_require__(/*! ../../lang/Lang */ \"./public/src/lang/Lang.js\")\r\n\r\nclass AssignedGuestEventExecutor extends EventExecutor {\r\n  constructor (app) {\r\n    super(app)\r\n    this._eventName = 'assigned_guest_id'\r\n  }\r\n\r\n  excute (event) {\r\n    this._app._id = event.id\r\n    this._app.name = event.name\r\n\r\n    this._app.logger.config(Lang.format('form.user.login', [this._app.name, this._app.id]))\r\n  }\r\n}\r\n\r\nmodule.exports = AssignedGuestEventExecutor\r\n\n\n//# sourceURL=webpack:///./public/src/event/user/AssignedGuestEventExecutor.js?");

/***/ }),

/***/ "./public/src/event/user/UserEvent.js":
/*!********************************************!*\
  !*** ./public/src/event/user/UserEvent.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Event = __webpack_require__(/*! ../Event.js */ \"./public/src/event/Event.js\")\n\nclass UserEvent extends Event {\n  constructor (data = {}) {\n    super(data)\n    this._eventName = UserEvent.eventName\n    this._id = data.id\n  }\n\n  get id () {\n    return this._id\n  }\n  get user () {\n    return this._user\n  }\n  set user (user) {\n    this._user = user\n  }\n\n  static get eventName () {\n    return 'UserEvent'\n  }\n}\n\nmodule.exports = UserEvent\n\n\n//# sourceURL=webpack:///./public/src/event/user/UserEvent.js?");

/***/ }),

/***/ "./public/src/event/user/UserMsgByServerEvent.js":
/*!*******************************************************!*\
  !*** ./public/src/event/user/UserMsgByServerEvent.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const UserEvent = __webpack_require__(/*! ./UserEvent */ \"./public/src/event/user/UserEvent.js\")\r\n\r\nclass UserMsgByServerEvent extends UserEvent {\r\n  constructor (data = {}) {\r\n    super(data)\r\n    this._eventName = UserMsgByServerEvent.eventName\r\n    this._message = data.message\r\n  }\r\n\r\n  get message () {\r\n    return this._message\r\n  }\r\n\r\n  static get eventName () {\r\n    return 'msg_by_server'\r\n  }\r\n}\r\n\r\nmodule.exports = UserMsgByServerEvent\r\n\n\n//# sourceURL=webpack:///./public/src/event/user/UserMsgByServerEvent.js?");

/***/ }),

/***/ "./public/src/lang/Lang.js":
/*!*********************************!*\
  !*** ./public/src/lang/Lang.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let languageData = {\n  ko: {\n    name_application: '어플리케이션',\n    name_logger: '로거',\n    name_manager_socketConnect: '소켓연결 관리자',\n    name_manager_plugin: '플러그인 관리자',\n    name_manager_event: '이벤트 관리자',\n    name_manager_user: '유저 관리자',\n\n    name_logger_default: '기본 로거',\n\n    msg_creating: '%s을(를) 생성하고 있습니다...',\n    msg_created: '%s이(가) 생성되었습니다.',\n\n    msg_destroying: '%s을(를) 소멸하고 있습니다...',\n    msg_destroyed: '%s이(가) 소멸되었습니다.',\n\n    msg_application_creating: '%s을(를) 생성하고 있습니다...',\n    msg_application_created: '%s이(가) 생성되었습니다.',\n\n    msg_application_destroying: '%s을(를) 종료하고 있습니다...',\n    msg_application_destroyed: '%s이(가) 종료되었습니다.',\n\n    msg_plugin_loading: '%s 플러그인(버전: %s)이 로드되고 있습니다...',\n    msg_plugin_load_succeed: '플러그인이 성공적으로 로드되었습니다.',\n    msg_plugin_load_fail: '플러그인 로드가 실패했습니다.',\n    msg_plugin_enabling: '%s(버전: %s) 활성화중...',\n    msg_plugin_enable_fail: '%s(버전: %s) 활성화 완료.',\n    msg_plugin_enable_succeed: '%s(버전: %s) 활성화 중 오류가 발생했습니다.',\n\n    msg_user_login: '%s [%s:%s]이(가) 로그인 했습니다.',\n    msg_user_connect: '[%s:%s]이(가) 서버에 접촉했습니다.',\n    msg_user_disconnect: '[%s:%s]이(가) 서버에서 나갔습니다.',\n\n    msg_event_added: '%s 이벤트가 추가되었습니다',\n\n    err_login_emptyId: '빈 ID를 사용할 수 없습니다.',\n    err_login_longId: 'ID는 %s자를 넘을 수 없습니다.',\n    err_login_sameId: 'ID가 중복됩니다.',\n\n    form_log_msg_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[37m <%s> %s\\x1b[0m',\n    form_log_info_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[37m [ 알림 ] %s\\x1b[0m',\n    form_log_warn_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[31m [ 경고 ] %s\\x1b[0m',\n    form_log_config_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[35m [ 구성 ] %s\\x1b[0m',\n    form_log_fine_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[32m [ 성공 ] %s\\x1b[0m',\n    form_log_finer_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[32m [매우성공] %s\\x1b[0m',\n    form_log_finest_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[32m [엄청성공] %s\\x1b[0m',\n\n    form_log_msg: '[%s] <%s> %s',\n    form_log_info: '[%s] [ 알림 ] %s',\n    form_log_warn: '[%s] [ 경고 ] %s',\n    form_log_config: '[%s] [ 구성 ] %s',\n    form_log_fine: '[%s] [ 성공 ] %s',\n    form_log_finer: '[%s] [매우성공] %s',\n    form_log_finest: '[%s] [엄청성공] %s',\n\n    form_user_login: '%s님(id: %s)이 로그인 하셨습니다.'\n  },\n  en: {\n    name_application: 'Application',\n    name_logger: 'Logger',\n    name_manager_socketConnect: 'SocketConnect Manager',\n    name_manager_plugin: 'Plugin Manager',\n    name_manager_event: 'Event Manager',\n    name_manager_user: 'User Manager',\n\n    name_logger_default: 'Default Logger',\n\n    msg_creating: 'Creating %s...',\n    msg_created: 'Created %s.',\n\n    msg_destroying: 'Destroying %s...',\n    msg_destroyed: 'Destroyed %s.',\n\n    msg_application_creating: 'Creating %s...',\n    msg_application_created: 'Created %s.',\n\n    msg_application_destroying: 'Destroying %s...',\n    msg_application_destroyed: 'Destroyed %s.',\n\n    msg_plugin_loading: 'Loading %s Plugin(version: %s)...',\n    msg_plugin_load_succeed: 'Succeed Loading Plugin.',\n    msg_plugin_load_fail: 'Fail Loading Plugin.',\n    msg_plugin_compile_first: 'Please Complie Plugin First.',\n    msg_plugin_enabling: 'Enabling %s(version: %s).',\n    msg_plugin_enable_fail: 'Fail to enable %s(version: %s).',\n    msg_plugin_enable_succeed: 'Succed to enable %s(version: %s).',\n\n    msg_user_login: '%s [%s:%s] Login.',\n    msg_user_connect: '[%s:%s] Connect.',\n    msg_user_disconnect: '[%s:%s] Disconnect.',\n\n    msg_event_added: 'Event %s is added.',\n\n    err_login_emptyId: 'Cannot use empty ID.',\n    err_login_longId: 'ID cannot exceed %s characters.',\n    err_login_sameId: 'Same ID exists!',\n\n    form_log_msg_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[37m <%s> %s\\x1b[0m',\n    form_log_info_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[37m [ INFO ] %s\\x1b[0m',\n    form_log_warn_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[31m [ WARN ] %s\\x1b[0m',\n    form_log_config_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[35m [CONFIG] %s\\x1b[0m',\n    form_log_fine_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[32m [ FINE ] %s\\x1b[0m',\n    form_log_finer_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[32m [FINER ] %s\\x1b[0m',\n    form_log_finest_color: '\\x1b[1m\\x1b[36m[%s]\\x1b[32m [FINEST] %s\\x1b[0m',\n\n    form_log_msg: '[%s] <%s> %s',\n    form_log_info: '[%s] [ INFO ] %s',\n    form_log_warn: '[%s] [ WARN ] %s',\n    form_log_config: '[%s] [CONFIG] %s',\n    form_log_fine: '[%s] [ FINE ] %s',\n    form_log_finer: '[%s] [FINER ] %s',\n    form_log_finest: '[%s] [FINEST] %s',\n\n    form_user_login: '%s(id: %s) is login'\n  }\n}\n\nclass Lang {\n  static setLanguage (language) {\n    if (languageData[language]) {\n      this.language = language\n      this.data = languageData[language]\n    } else {\n      this.language = language\n      this.data = languageData['en']\n    }\n  }\n\n  static registerData (data) {\n    languageData = Object.assign(data, languageData)\n    if (languageData[this.language]) {\n      this.data = languageData[this.language]\n    } else {\n      this.data = languageData['en']\n    }\n  }\n\n  static format (key, args = []) {\n    let ans = this.data[key.replace(/\\./g, '_')]\n    for (const i in args) {\n      ans = ans.replace('%s', args[i])\n    }\n    return ans\n  }\n\n  static formatString (string, args = []) {\n    for (const i in args) {\n      string = string.replace('%s', args[i])\n    }\n    return string\n  }\n}\n\nmodule.exports = Lang\n\n\n//# sourceURL=webpack:///./public/src/lang/Lang.js?");

/***/ }),

/***/ "./public/src/log/Clock.js":
/*!*********************************!*\
  !*** ./public/src/log/Clock.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Clock {\n  constructor () {\n    this._hour = Clock.getDate().getHours()\n    this._min = Clock.getDate().getMinutes()\n    this._sec = Clock.getDate().getSeconds()\n\n    this._time = Clock.getDate().getTime()\n  }\n\n  update () {\n    this._hour = Clock.getDate().getHours()\n    this._min = Clock.getDate().getMinutes()\n    this._sec = Clock.getDate().getSeconds()\n\n    this._time = Clock.getDate().getTime()\n  }\n\n  get hours () {\n    return (this._hour < 10 ? '0' : '') + this._hour\n  }\n\n  get minutes () {\n    return (this._min < 10 ? '0' : '') + this._min\n  }\n\n  get seconds () {\n    return (this._sec < 10 ? '0' : '') + this._sec\n  }\n\n  get time () {\n    return this.hours + ':' + this.minutes + ':' + this.seconds\n  }\n\n  deltaTimeToString (clock) {\n    let deltaHour = this._hour - clock._hour\n    let deltaMin = this._min - clock._min\n    let deltasec = this._sec - clock._sec\n\n    return ((deltaHour < 10 ? '0' : '') + deltaHour) + ':' +\n      ((deltaMin < 10 ? '0' : '') + deltaMin) + ':' +\n      ((deltasec < 10 ? '0' : '') + deltasec)\n  }\n\n  deltaTime (clock) {\n    return this.time - clock.time\n  }\n\n  static getDate () {\n    const date = new Date()\n\n    return date\n  }\n}\n\nmodule.exports = Clock\n\n\n//# sourceURL=webpack:///./public/src/log/Clock.js?");

/***/ }),

/***/ "./public/src/log/Logger.js":
/*!**********************************!*\
  !*** ./public/src/log/Logger.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Clock = __webpack_require__(/*! ./Clock.js */ \"./public/src/log/Clock.js\")\nconst Lang = __webpack_require__(/*! ../lang/Lang */ \"./public/src/lang/Lang.js\")\n\nconst LEVEL = {\n  OFF: 0,\n  WARNING: 1,\n  INFO: 2,\n  CONFIG: 4,\n  FINE: 8,\n  FINER: 16,\n  FINEST: 32,\n  ALL: 63\n}\n\nclass Handel {\n  constructor () {\n    this._buffer = ''\n    this._level = LEVEL.OFF\n    this._ANSI_COLOR = false\n  }\n\n  close () { }\n\n  add (message) {\n    this._buffer += message\n  }\n\n  flush () {\n\n  }\n\n  clearBuffer () {\n    this._buffer = ''\n  }\n\n  set level (level) {\n    this._level = level\n  }\n\n  get level () {\n    return this._level\n  }\n\n  isSupportColor () {\n    return this._ANSI_COLOR\n  }\n}\n\nclass ConsoleHandel extends Handel {\n  constructor () {\n    super()\n    this._ANSI_COLOR = true\n  }\n\n  add (message) {\n    Handel.prototype.add.call(this, message)\n\n    this.flush()\n  }\n\n  flush () {\n    console.log(this._buffer)\n\n    this.clearBuffer()\n  }\n}\n\nclass Logger {\n  constructor (name) {\n    this._name = name || Lang.format('name.logger')\n    this._clock = new Clock()\n    this._level = LEVEL.OFF\n    this._handel = []\n\n    this._prompForm = '\\n' + Lang.format('form.promp')\n  }\n\n  get name () {\n    return this._name\n  }\n\n  set level (level) {\n    this._level = level\n  }\n\n  get level () {\n    return this._level\n  }\n\n  addHandler (handel) {\n    this._handel.push(handel)\n  }\n\n  info (message) {\n    if ((this._level & LEVEL.INFO) === 0) return\n\n    this._clock.update()\n    this._handel.forEach(element => {\n      if ((element.level & LEVEL.INFO) !== 0) {\n        if (element.isSupportColor()) {\n          element.add(Lang.format('form.log.info.color', [this._clock.time, message]))\n        } else {\n          element.add(Lang.format('form.log.info', [this._clock.time, message]))\n        }\n      }\n    })\n  }\n\n  warning (message) {\n    if ((this._level & LEVEL.WARNING) === 0) return\n\n    this._clock.update()\n    this._handel.forEach(element => {\n      if ((element.level & LEVEL.WARNING) !== 0) {\n        if (element.isSupportColor()) {\n          element.add(Lang.format('form.log.warn.color', [this._clock.time, message]))\n        } else {\n          element.add(Lang.format('form.log.warn', [this._clock.time, message]))\n        }\n      }\n    })\n  }\n\n  config (message) {\n    if ((this._level & LEVEL.CONFIG) === 0) return\n\n    this._clock.update()\n    this._handel.forEach(element => {\n      if ((element.level & LEVEL.CONFIG) !== 0) {\n        if (element.isSupportColor()) {\n          element.add(Lang.format('form.log.config.color', [this._clock.time, message]))\n        } else {\n          element.add(Lang.format('form.log.config', [this._clock.time, message]))\n        }\n      }\n    })\n  }\n\n  fine (message) {\n    if ((this._level & LEVEL.FINE) === 0) return\n\n    this._clock.update()\n    this._handel.forEach(element => {\n      if ((element.level & LEVEL.FINE) !== 0) {\n        if (element.isSupportColor()) {\n          element.add(Lang.format('form.log.fine.color', [this._clock.time, message]))\n        } else {\n          element.add(Lang.format('form.log.fine', [this._clock.time, message]))\n        }\n      }\n    })\n  }\n\n  finer (message) {\n    if ((this._level & LEVEL.FINER) === 0) return\n\n    this._clock.update()\n    this._handel.forEach(element => {\n      if ((element.level & LEVEL.FINE) !== 0) {\n        if (element.isSupportColor()) {\n          element.add(Lang.format('form.log.finer.color', [this._clock.time, message]))\n        } else {\n          element.add(Lang.format('form.log.finer', [this._clock.time, message]))\n        }\n      }\n    })\n  }\n\n  finest (message) {\n    if ((this._level & LEVEL.FINEST) === 0) return\n\n    this._clock.update()\n    this._handel.forEach(element => {\n      if ((element.level & LEVEL.FINE) !== 0) {\n        if (element.isSupportColor()) {\n          element.add(Lang.format('form.log.finest.color', [this._clock.time, message]))\n        } else {\n          element.add(Lang.format('form.log.finest', [this._clock.time, message]))\n        }\n      }\n    })\n  }\n\n  message (name, message) {\n    this._handel.forEach(element => {\n      if (element.isSupportColor()) {\n        element.add(Lang.format('form.log.msg.color', [this._clock.time, name, message]))\n      } else {\n        element.add(Lang.format('form.log.msg', [this._clock.time, name, message]))\n      }\n    })\n  }\n\n  close () {\n    this._handel.forEach(element => {\n      element.close()\n    })\n  }\n}\n\nmodule.exports = { Logger, ConsoleHandel, LEVEL }\n\n\n//# sourceURL=webpack:///./public/src/log/Logger.js?");

/***/ }),

/***/ "./public/src/manager/EventManager.js":
/*!********************************************!*\
  !*** ./public/src/manager/EventManager.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Manager = __webpack_require__(/*! ./Manager */ \"./public/src/manager/Manager.js\")\r\nconst EventPriority = __webpack_require__(/*! ../event/EventPriority.js */ \"./public/src/event/EventPriority.js\")\r\nconst Lang = __webpack_require__(/*! ../lang/Lang */ \"./public/src/lang/Lang.js\")\r\n\r\nconst UserManager = __webpack_require__(/*! ./UserManager */ \"./public/src/manager/UserManager.js\")\r\n\r\nconst UserMsgByServerEventExecutor = __webpack_require__(/*! ../event/user/UserMsgByServerEvent */ \"./public/src/event/user/UserMsgByServerEvent.js\")\r\nconst UserMsgByServerEvent = __webpack_require__(/*! ../event/user/UserMsgByServerEvent */ \"./public/src/event/user/UserMsgByServerEvent.js\")\r\nconst AssignedGuestEventExecutor = __webpack_require__(/*! ../event/user/AssignedGuestEventExecutor */ \"./public/src/event/user/AssignedGuestEventExecutor.js\")\r\nconst AssignedGuestEvent = __webpack_require__(/*! ../event/user/AssignedGuestEvent */ \"./public/src/event/user/AssignedGuestEvent.js\")\r\n\r\nclass EventManager extends Manager {\r\n  init (args) {\r\n    this._registeredExcutor = []\r\n    this._registeredEvent = []\r\n\r\n    this.registerExecutor(new UserMsgByServerEventExecutor(this._app))\r\n    this.registerEvent(UserMsgByServerEvent)\r\n    this.registerExecutor(new AssignedGuestEventExecutor(this._app))\r\n    this.registerEvent(AssignedGuestEvent)\r\n  }\r\n\r\n  registerExecutor (executor) {\r\n    this._registeredExcutor.push(executor)\r\n  }\r\n  registerEvent (event, grade = UserManager.GRADE.GUEST) {\r\n    let name = event.eventName\r\n\r\n    this._logger.config(Lang.format('msg.event.added', [ name ]))\r\n    this._registeredEvent.push({ Event: event, grade: grade })\r\n  }\r\n\r\n  sendEvent (name, args = {}) {\r\n    let socket = this._app.socket\r\n    let obj = { senderID: this._app.id }\r\n    Object.assign(args, obj)\r\n\r\n    socket.emit(name, args)\r\n  }\r\n\r\n  extuteEvent (event) {\r\n    for (let i in this._registeredExcutor) {\r\n      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.HIGHEST) {\r\n        this._registeredExcutor[i].excute(event)\r\n      }\r\n    }\r\n    for (let i in this._registeredExcutor) {\r\n      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.HIGH) {\r\n        this._registeredExcutor[i].excute(event)\r\n      }\r\n    }\r\n    for (let i in this._registeredExcutor) {\r\n      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.NORMAL) {\r\n        this._registeredExcutor[i].excute(event)\r\n      }\r\n    }\r\n    for (let i in this._registeredExcutor) {\r\n      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.LOW) {\r\n        this._registeredExcutor[i].excute(event)\r\n      }\r\n    }\r\n    for (let i in this._registeredExcutor) {\r\n      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.LOWEST) {\r\n        this._registeredExcutor[i].excute(event)\r\n      }\r\n    }\r\n    for (let i in this._registeredExcutor) {\r\n      if (this._registeredExcutor[i].eventName === event.eventName && this._registeredExcutor[i].eventPriority === EventPriority.MONITOR) {\r\n        this._registeredExcutor[i].excute(event)\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = EventManager\r\n\n\n//# sourceURL=webpack:///./public/src/manager/EventManager.js?");

/***/ }),

/***/ "./public/src/manager/Manager.js":
/*!***************************************!*\
  !*** ./public/src/manager/Manager.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Lang = __webpack_require__(/*! ../lang/Lang */ \"./public/src/lang/Lang.js\")\r\n\r\nclass Manager {\r\n  constructor (app, name, args = {}) {\r\n    this._app = app\r\n    this._name = name\r\n    this._logger = this._app.logger\r\n\r\n    this._logger.info(Lang.format('msg.creating', [this._name]))\r\n    this.init(args)\r\n    this._logger.fine(Lang.format('msg.created', [this._name]))\r\n  }\r\n\r\n  init (args = {}) { }\r\n\r\n  destroyer () {\r\n    this._logger.info(Lang.format('msg.destroying', [this._name]))\r\n    this.destroy()\r\n    this._logger.fine(Lang.format('msg.destroyed', [this._name]))\r\n  }\r\n\r\n  destroy () { }\r\n\r\n  get name () {\r\n    return this._name\r\n  }\r\n\r\n  get logger () {\r\n    return this._logger\r\n  }\r\n}\r\n\r\nmodule.exports = Manager\r\n\n\n//# sourceURL=webpack:///./public/src/manager/Manager.js?");

/***/ }),

/***/ "./public/src/manager/PluginManager.js":
/*!*********************************************!*\
  !*** ./public/src/manager/PluginManager.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Manager = __webpack_require__(/*! ./Manager */ \"./public/src/manager/Manager.js\")\n\nclass PluginManager extends Manager {\n  init (args) {\n    this._plugins = []\n  }\n\n  load () {\n    this._loadedPlugins = {\n\n    }\n    for (let i in this.loadedPlugins) {\n      let plugin = new (this._loadedPlugins[i])(this._app)\n      plugin.onLoad()\n      this._plugins.push({\n        name: i,\n        plugin: plugin\n      })\n    }\n  }\n\n  enable () {\n    for (let i in this.plugins) {\n      this._plugins[i].plugin.onEnable()\n    }\n  }\n}\n\nmodule.exports = PluginManager\n\n\n//# sourceURL=webpack:///./public/src/manager/PluginManager.js?");

/***/ }),

/***/ "./public/src/manager/SocketConnectManager.js":
/*!****************************************************!*\
  !*** ./public/src/manager/SocketConnectManager.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Manager = __webpack_require__(/*! ./Manager.js */ \"./public/src/manager/Manager.js\")\n\nclass SocketConnectManager extends Manager {\n  init (args = {}) {\n    this._socket = args.socket\n\n    this.linkEvent()\n  }\n\n  linkEvent () {\n    let eventManager = this._app.eventManager\n    let events = eventManager._registeredEvent\n    let socket = this._app.socket\n\n    events.forEach(element => {\n      socket.on(element.Event.eventName, function (data) {\n        eventManager.extuteEvent(new element.Event(data))\n      })\n    })\n  }\n}\n\nmodule.exports = SocketConnectManager\n\n\n//# sourceURL=webpack:///./public/src/manager/SocketConnectManager.js?");

/***/ }),

/***/ "./public/src/manager/UserManager.js":
/*!*******************************************!*\
  !*** ./public/src/manager/UserManager.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Manager = __webpack_require__(/*! ./Manager */ \"./public/src/manager/Manager.js\")\r\n\r\nclass UserManager extends Manager {\r\n  init (args = {}) {\r\n    this._userList = []\r\n  }\r\n\r\n  getUser (name) {\r\n    for (let i in this._userList) {\r\n      if (this._userList[i].getName() === name) {\r\n        return this._userList[i]\r\n      }\r\n    }\r\n\r\n    return null\r\n  }\r\n\r\n  addUser (user) {\r\n    for (let i in this._userList) {\r\n      if (this._userList[i].id === user.id) {\r\n        return false\r\n      }\r\n    }\r\n    this._userList.push(user)\r\n    return true\r\n  }\r\n\r\n  removeUser (user) {\r\n    for (let i in this._userList) {\r\n      if (this._userList[i].id === user.id) {\r\n        this._userList.splice(i, 1)\r\n        return\r\n      }\r\n    }\r\n  }\r\n\r\n  getUserByID (id) {\r\n    for (let i in this._userList) {\r\n      if (this._userList[i].id === id) {\r\n        return this._userList[i]\r\n      }\r\n    }\r\n\r\n    return null\r\n  }\r\n\r\n  getUsers () {\r\n    return this._userList.slice()\r\n  }\r\n\r\n  // Grade\r\n  static get GRADE () {\r\n    return {\r\n      GUEST: 1,\r\n      USER: 2,\r\n      ADMINISTRATOR: 3\r\n    }\r\n  }\r\n\r\n  sendMessage (user, message) {\r\n    let eventManager = this._app.eventManager\r\n    eventManager.sendEvent('msg_to_client', {\r\n      id: user.id,\r\n      message: message.toString()\r\n    })\r\n  }\r\n\r\n  destroy () {\r\n  }\r\n}\r\n\r\nmodule.exports = UserManager\r\n\n\n//# sourceURL=webpack:///./public/src/manager/UserManager.js?");

/***/ })

/******/ });