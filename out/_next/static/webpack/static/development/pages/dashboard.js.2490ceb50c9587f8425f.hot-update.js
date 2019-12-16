webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./actions-redux/account/AccountActionCreator.js":
/*!*******************************************************!*\
  !*** ./actions-redux/account/AccountActionCreator.js ***!
  \*******************************************************/
/*! exports provided: getAvailableChurchList, checkAuthorize, updateToken, updateCurrentChurchId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableChurchList", function() { return getAvailableChurchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthorize", function() { return checkAuthorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToken", function() { return updateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentChurchId", function() { return updateCurrentChurchId; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _AccountActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountActionTypes */ "./actions-redux/account/AccountActionTypes.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./actions-redux/common.js");
/* harmony import */ var _constant_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/apiEndpoints */ "./constant/apiEndpoints.js");
/* harmony import */ var _AccountReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccountReducer */ "./actions-redux/account/AccountReducer.js");






var getAvailableChurchList = function getAvailableChurchList(nickname) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_common__WEBPACK_IMPORTED_MODULE_3__["callPost"])(_constant_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["GET_AVAILABLE_CHURCH_ENDPOINT"], {
                  token: Object(_AccountReducer__WEBPACK_IMPORTED_MODULE_5__["selectToken"])(getState())
                });

              case 2:
                res = _context.sent;
                res.length > 0 && dispatch(updateCurrentChurchId(res[0].id));
                dispatch({
                  type: _AccountActionTypes__WEBPACK_IMPORTED_MODULE_2__["AVAILABLE_CHURCH_UPDATE"],
                  payload: res
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var checkAuthorize = function checkAuthorize(token, role) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch, getState) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dispatch(callPostWithAuth(_constant_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["AUTHORIZE_ENDPOINT"], {
                  role: role
                }));

              case 2:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var updateToken = function updateToken(token) {
  return {
    type: _AccountActionTypes__WEBPACK_IMPORTED_MODULE_2__["CURRENT_TOKEN_UPDATE"],
    payload: token
  };
};
var updateCurrentChurchId = function updateCurrentChurchId(churchId) {
  return {
    type: _AccountActionTypes__WEBPACK_IMPORTED_MODULE_2__["CHURCH_SELECTED_UPDATE"],
    payload: churchId
  };
};

/***/ })

})
//# sourceMappingURL=dashboard.js.2490ceb50c9587f8425f.hot-update.js.map