webpackHotUpdate("static/development/pages/report.js",{

/***/ "./actions-redux/report-manager/ReportManagerActionCreator.js":
/*!********************************************************************!*\
  !*** ./actions-redux/report-manager/ReportManagerActionCreator.js ***!
  \********************************************************************/
/*! exports provided: downloadBIrthdayReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadBIrthdayReport", function() { return downloadBIrthdayReport; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./actions-redux/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constant_apiEndpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constant/apiEndpoints */ "./constant/apiEndpoints.js");
/* harmony import */ var _account_AccountReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account/AccountReducer */ "./actions-redux/account/AccountReducer.js");
/* harmony import */ var _tools_csvGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/csvGenerator */ "./tools/csvGenerator.js");








var downloadBIrthdayReport = function downloadBIrthdayReport(monthId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var churchId, res, csvData, monthName;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                churchId = Object(_account_AccountReducer__WEBPACK_IMPORTED_MODULE_6__["selectSelectedChurch"])(getState());
                _context.next = 3;
                return dispatch(Object(_common__WEBPACK_IMPORTED_MODULE_2__["callPostWithAuth"])(_constant_apiEndpoints__WEBPACK_IMPORTED_MODULE_5__["REPORT_BIRTHDAY_GET"], {
                  monthId: monthId,
                  churchId: churchId
                }));

              case 3:
                res = _context.sent;
                csvData = [];

                if (monthId === 12) {
                  csvData = res.rows.map(function (people) {
                    return {
                      Name: people.name,
                      Birthdate: moment__WEBPACK_IMPORTED_MODULE_3___default()(people.birthdate).format("DD MMM YYYY"),
                      Birthmonth: moment__WEBPACK_IMPORTED_MODULE_3___default()(people.birthdate).format("MM")
                    };
                  });
                  csvData = lodash_sortBy__WEBPACK_IMPORTED_MODULE_4___default()(csvData, "Birthmonth");
                } else {
                  csvData = res.rows.map(function (people) {
                    return {
                      Name: people.name,
                      Birthdate: moment__WEBPACK_IMPORTED_MODULE_3___default()(people.birthdate).format("DD MMM YYYY")
                    };
                  });
                }

                monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "All Months"];
                Object(_tools_csvGenerator__WEBPACK_IMPORTED_MODULE_7__["downloadCSV"])({
                  filename: "Birthday ".concat(monthName[monthId], ".csv"),
                  data: csvData,
                  columns: ["Name", "Birthdate"]
                });

              case 8:
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

/***/ })

})
//# sourceMappingURL=report.js.fc80d0958607d8552197.hot-update.js.map