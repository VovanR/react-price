!function(t){function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/static/",n(n.s=0)}([function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(1);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./example/app.jsx\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_./example/app.jsx?")},function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _index = __webpack_require__(2);\n\nvar _index2 = _interopRequireDefault(_index);\n\n__webpack_require__(5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global document React ReactDOM */\n\n// eslint-disable-next-line import/no-unassigned-import\n\n\nvar App = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tcurrencyFirst: false,\n\t\t\tpostfix: '',\n\t\t\tprefix: ''\n\t\t};\n\n\t\t_this.handleClickCurrencyFirst = _this.handleClickCurrencyFirst.bind(_this);\n\t\t_this.handleChangePostfix = _this.handleChangePostfix.bind(_this);\n\t\t_this.handleChangePrefix = _this.handleChangePrefix.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'handleClickCurrencyFirst',\n\t\tvalue: function handleClickCurrencyFirst() {\n\t\t\tthis.setState(function (prevState) {\n\t\t\t\treturn {\n\t\t\t\t\tcurrencyFirst: !prevState.currencyFirst\n\t\t\t\t};\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'handleChangePostfix',\n\t\tvalue: function handleChangePostfix(e) {\n\t\t\tthis.setState({ postfix: e.target.value });\n\t\t}\n\t}, {\n\t\tkey: 'handleChangePrefix',\n\t\tvalue: function handleChangePrefix(e) {\n\t\t\tthis.setState({ prefix: e.target.value });\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _state = this.state,\n\t\t\t    currencyFirst = _state.currencyFirst,\n\t\t\t    postfix = _state.postfix,\n\t\t\t    prefix = _state.prefix;\n\n\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement('input', {\n\t\t\t\t\t\t\tchecked: currencyFirst,\n\t\t\t\t\t\t\tonClick: this.handleClickCurrencyFirst,\n\t\t\t\t\t\t\ttype: 'checkbox'\n\t\t\t\t\t\t}),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Currency first'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Prefix: '\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement('input', {\n\t\t\t\t\t\t\tvalue: prefix,\n\t\t\t\t\t\t\tonChange: this.handleChangePrefix\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'label',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Postfix: '\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement('input', {\n\t\t\t\t\t\t\tvalue: postfix,\n\t\t\t\t\t\t\tonChange: this.handleChangePostfix\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{\n\t\t\t\t\t\tstyle: {\n\t\t\t\t\t\t\tfontSize: '250%',\n\t\t\t\t\t\t\tfontFamily: 'monospace'\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'p',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'time',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'03.02.2016'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'small',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Old: '\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(_index2.default, {\n\t\t\t\t\t\t\tcost: 100,\n\t\t\t\t\t\t\tcurrency: '$',\n\t\t\t\t\t\t\ttype: _index.PRICE_TYPE.OLD,\n\t\t\t\t\t\t\tcurrencyFirst: currencyFirst,\n\t\t\t\t\t\t\tpostfix: postfix,\n\t\t\t\t\t\t\tprefix: prefix\n\t\t\t\t\t\t})\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'small',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'New: '\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(_index2.default, {\n\t\t\t\t\t\t\tcost: 91.55,\n\t\t\t\t\t\t\tcurrency: '\\u20AC',\n\t\t\t\t\t\t\tcurrencyFirst: currencyFirst,\n\t\t\t\t\t\t\tpostfix: postfix,\n\t\t\t\t\t\t\tprefix: prefix\n\t\t\t\t\t\t})\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'small',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Sale: '\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(_index2.default, {\n\t\t\t\t\t\t\tcost: '7 793',\n\t\t\t\t\t\t\tcurrency: '\\u20BD',\n\t\t\t\t\t\t\tcurrencyFirst: currencyFirst,\n\t\t\t\t\t\t\tpostfix: postfix,\n\t\t\t\t\t\t\tprefix: prefix\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./example/app.jsx\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./example/app.jsx?")},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.PRICE_TYPE = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _BLOCK_SETTINGS_BY_TY;\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar className = 'price';\n\nvar PRICE_TYPE = exports.PRICE_TYPE = {\n\tDEF: 'def',\n\tOLD: 'old'\n};\n\nvar BLOCK_SETTINGS_BY_TYPE = (_BLOCK_SETTINGS_BY_TY = {}, _defineProperty(_BLOCK_SETTINGS_BY_TY, PRICE_TYPE.DEF, {\n\tclassName: className,\n\ttagName: 'span'\n}), _defineProperty(_BLOCK_SETTINGS_BY_TY, PRICE_TYPE.OLD, {\n\tclassName: className + '_old',\n\ttagName: 'del'\n}), _BLOCK_SETTINGS_BY_TY);\n\nvar propTypes = {\n\tcost: _propTypes2.default.any,\n\tclassName: _propTypes2.default.string,\n\tcurrency: _propTypes2.default.any,\n\tcurrencyFirst: _propTypes2.default.bool,\n\tprefix: _propTypes2.default.any,\n\tpostfix: _propTypes2.default.any,\n\ttype: _propTypes2.default.oneOf([PRICE_TYPE.DEF, PRICE_TYPE.OLD])\n};\n\nvar defaultProps = {\n\tcost: null,\n\tclassName: '',\n\tcurrency: null,\n\tcurrencyFirst: false,\n\tprefix: null,\n\tpostfix: null,\n\ttype: PRICE_TYPE.DEF\n};\n\nvar Price = function (_Component) {\n\t_inherits(Price, _Component);\n\n\tfunction Price() {\n\t\t_classCallCheck(this, Price);\n\n\t\treturn _possibleConstructorReturn(this, (Price.__proto__ || Object.getPrototypeOf(Price)).apply(this, arguments));\n\t}\n\n\t_createClass(Price, [{\n\t\tkey: 'renderBlock',\n\t\tvalue: function renderBlock(name) {\n\t\t\treturn _react2.default.createElement('span', {\n\t\t\t\tkey: name,\n\t\t\t\tclassName: className + '__' + name\n\t\t\t}, this.props[name]);\n\t\t}\n\t}, {\n\t\tkey: 'getClassName',\n\t\tvalue: function getClassName() {\n\t\t\tvar _props = this.props,\n\t\t\t    className = _props.className,\n\t\t\t    type = _props.type;\n\n\t\t\tvar t = BLOCK_SETTINGS_BY_TYPE[type] || BLOCK_SETTINGS_BY_TYPE[PRICE_TYPE.DEF];\n\t\t\tvar isNotDefault = type !== PRICE_TYPE.DEF && Boolean(BLOCK_SETTINGS_BY_TYPE[type]);\n\t\t\tvar classes = [];\n\n\t\t\tclasses.push(BLOCK_SETTINGS_BY_TYPE[PRICE_TYPE.DEF].className);\n\n\t\t\tif (isNotDefault) {\n\t\t\t\tclasses.push(t.className);\n\t\t\t}\n\n\t\t\tif (className) {\n\t\t\t\tclasses.push(className);\n\t\t\t}\n\n\t\t\treturn classes.join(' ');\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props2 = this.props,\n\t\t\t    cost = _props2.cost,\n\t\t\t    currency = _props2.currency,\n\t\t\t    currencyFirst = _props2.currencyFirst,\n\t\t\t    postfix = _props2.postfix,\n\t\t\t    prefix = _props2.prefix,\n\t\t\t    type = _props2.type;\n\n\t\t\tvar t = BLOCK_SETTINGS_BY_TYPE[type] || BLOCK_SETTINGS_BY_TYPE[PRICE_TYPE.DEF];\n\n\t\t\tvar isCostVisible = isDefined(cost);\n\t\t\tvar isCurrencyVisible = isDefined(currency) && isCostVisible;\n\n\t\t\tvar r = [];\n\n\t\t\tif (prefix && isCostVisible) {\n\t\t\t\tr.push(this.renderBlock('prefix'));\n\t\t\t}\n\n\t\t\tvar priceCost = null;\n\t\t\tif (isCostVisible) {\n\t\t\t\tpriceCost = this.renderBlock('cost');\n\t\t\t}\n\n\t\t\tvar priceCurrency = null;\n\t\t\tif (isCurrencyVisible) {\n\t\t\t\tpriceCurrency = this.renderBlock('currency');\n\t\t\t}\n\n\t\t\tif (currencyFirst) {\n\t\t\t\tr.push(priceCurrency);\n\t\t\t\tr.push(priceCost);\n\t\t\t} else {\n\t\t\t\tr.push(priceCost);\n\t\t\t\tr.push(priceCurrency);\n\t\t\t}\n\n\t\t\tif (postfix && isCostVisible) {\n\t\t\t\tr.push(this.renderBlock('postfix'));\n\t\t\t}\n\n\t\t\treturn _react2.default.createElement(t.tagName, {\n\t\t\t\tclassName: this.getClassName()\n\t\t\t}, r);\n\t\t}\n\t}]);\n\n\treturn Price;\n}(_react.Component);\n\nPrice.propTypes = propTypes;\nPrice.defaultProps = defaultProps;\n\n/**\n * @param {*} item\n * @returns {boolean}\n */\nfunction isDefined(item) {\n\treturn item !== undefined && item !== null && item !== '';\n}\n\nexports.default = Price;\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./index.js?")},function(module,exports){eval('module.exports = React;\n\n//////////////////\n// WEBPACK FOOTER\n// external "React"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22React%22?')},function(module,exports){eval('module.exports = PropTypes;\n\n//////////////////\n// WEBPACK FOOTER\n// external "PropTypes"\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22PropTypes%22?')},function(module,exports,__webpack_require__){eval("\nvar content = __webpack_require__(6);\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(8)(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {\n\tmodule.hot.accept(\"!!./node_modules/css-loader/index.js!./style.css\", function() {\n\t\tvar newContent = require(\"!!./node_modules/css-loader/index.js!./style.css\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./style.css\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./style.css?")},function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(7)(false);\n// imports\n\n\n// module\nexports.push([module.i, ".price{white-space:nowrap;word-spacing:-.1em;display:inline-block}.price__cost+.price__currency,.price__currency,.price__currency+.price__cost{margin-left:.15em}.price_old{color:red;text-decoration:none}.price_old .price__cost{text-decoration:line-through}", ""]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader!./style.css\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./style.css?./node_modules/css-loader')},function(module,exports){eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn "@media " + item[2] + "{" + content + "}";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join("");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === "string")\n\t\t\tmodules = [[null, modules, ""]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === "number")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = "(" + item[2] + ") and (" + mediaQuery + ")";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || \'\';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === \'function\') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn \'/*# sourceURL=\' + cssMapping.sourceRoot + source + \' */\'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n\t}\n\n\treturn [content].join(\'\\n\');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = \'sourceMappingURL=data:application/json;charset=utf-8;base64,\' + base64;\n\n\treturn \'/*# \' + data + \' */\';\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader/lib/css-base.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?')},function(module,exports,__webpack_require__){eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === "undefined") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve "head" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }\n                // }\n                if (typeof target === \'function\') {\n                        return target();\n                }\n                if (typeof memo[target] === "undefined") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(9);\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== "undefined" && DEBUG) {\n\t\tif (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === "object" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = "head";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = "bottom";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error("Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === "top") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === "bottom") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === "object" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + " " + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error("[Style Loader]\\n\\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\\n Must be \'top\', \'bottom\', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement("style");\n\n\toptions.attrs.type = "text/css";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement("link");\n\n\toptions.attrs.type = "text/css";\n\toptions.attrs.rel = "stylesheet";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don\'t add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === "function" &&\n\t\ttypeof URL.createObjectURL === "function" &&\n\t\ttypeof URL.revokeObjectURL === "function" &&\n\t\ttypeof Blob === "function" &&\n\t\ttypeof btoa === "function"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join(\'\\n\');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? "" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute("media", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn\'t defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\n\t}\n\n\tvar blob = new Blob([css], { type: "text/css" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/style-loader/lib/addStyles.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?')},function(module,exports){eval('\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function "fixes" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== "undefined" && window.location;\n\n  if (!location) {\n    throw new Error("fixUrls requires window.location");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== "string") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + "//" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, "/");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word "url" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn\'t a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn\'t a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn\'t a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^"(.*)"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^\'(.*)\'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf("//") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf("/") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with \'/\'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, ""); // Strip leading \'./\'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn "url(" + JSON.stringify(newUrl) + ")";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/style-loader/lib/urls.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?')}]);