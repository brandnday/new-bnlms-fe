webpackHotUpdate("static/development/pages/report.js",{

/***/ "./actions-redux/common.js":
/*!*********************************!*\
  !*** ./actions-redux/common.js ***!
  \*********************************/
/*! exports provided: callGet, callPost, callPostWithAuth, dynamicData, mixedStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callGet", function() { return callGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callPost", function() { return callPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callPostWithAuth", function() { return callPostWithAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicData", function() { return dynamicData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixedStore", function() { return mixedStore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _account_AccountReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/AccountReducer */ "./actions-redux/account/AccountReducer.js");
/* harmony import */ var _constant_apiEndpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constant/apiEndpoints */ "./constant/apiEndpoints.js");








var baseUrl = "http://localhost:3001/";

var callGet =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {
    var param,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            param = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(baseUrl).concat(url), param);

          case 3:
            return _context.abrupt("return", _context.sent.data.response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function callGet(_x) {
    return _ref.apply(this, arguments);
  };
}();
var callPost =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(url) {
    var param,
        _args2 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            param = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(baseUrl).concat(url), param);

          case 3:
            return _context2.abrupt("return", _context2.sent.data.response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function callPost(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var callPostWithAuth = function callPostWithAuth(url) {
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch, getState) {
        var header;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                header = {
                  authoken: Object(_account_AccountReducer__WEBPACK_IMPORTED_MODULE_7__["selectToken"])(getState())
                };
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(baseUrl).concat(url), param, header);

              case 3:
                return _context3.abrupt("return", _context3.sent.data.response);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var dynamicData =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(dataName, dataAction, requestData) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return callPost(Object(_constant_apiEndpoints__WEBPACK_IMPORTED_MODULE_8__["dynamicDataEndpointResolver"])(dataName, dataAction), {
              requestData: requestData
            });

          case 2:
            res = _context4.sent;
            return _context4.abrupt("return", res);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function dynamicData(_x5, _x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
var mixedStore = function mixedStore(reducers) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    AccountReducer: _account_AccountReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, reducers)), Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"])));
};

/***/ })

})
//# sourceMappingURL=report.js.4ea8b6f76f5a8d2d32e9.hot-update.js.map