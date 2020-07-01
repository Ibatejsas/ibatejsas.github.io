(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/servicios/util.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/util.service.ts ***!
  \*******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UtilService {
    constructor() { }
    formatearFecha(fecha) {
        const fechaFormateada = fecha.getDate() +
            '/' +
            (fecha.getMonth() + 1) +
            '/' +
            fecha.getFullYear();
        let tiempo = fecha.getHours() + ':';
        if (fecha.getMinutes() < 9) {
            tiempo = tiempo + '0' + fecha.getMinutes();
        }
        else {
            tiempo = tiempo + fecha.getMinutes();
        }
        return tiempo + ' ' + fechaFormateada;
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map