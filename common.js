(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/servicios/plaza-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/plaza-api.service.ts ***!
  \************************************************/
/*! exports provided: PlazaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlazaApiService", function() { return PlazaApiService; });
/* harmony import */ var _plaza_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plaza.service */ "./src/app/servicios/plaza.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






//const urlBasePlazas = 'http://localhost:8080/api/plazas';
const urlBasePlazas = 'https://sigepark.herokuapp.com/api/plazas';
class PlazaApiService extends _plaza_service__WEBPACK_IMPORTED_MODULE_0__["PlazaService"] {
    constructor(http) {
        super();
        this.http = http;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](20);
        this.sharedMessage = this.message.asObservable();
    }
    getPlazasTotales() {
        return this.http.get(urlBasePlazas)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(respuesta => respuesta['page'] ? respuesta['page'].totalElements : 0));
    }
    getPlazasOcupadas() {
        return this.http.get(urlBasePlazas + '/search/total-ocupado?ocupado=true');
    }
    getPlazas() {
        return this.http
            .get(urlBasePlazas)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((respuesta) => respuesta['_embedded'] ? respuesta['_embedded'].plaza : []));
    }
    getSharedMessage() {
        return this.sharedMessage;
    }
    nextMessage(plazasTotales) {
        this.message.next(plazasTotales);
    }
    insertarPlazas(plaza) {
        return this.http.post(urlBasePlazas, plaza)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => { const plazasTotales = this.message.value + 1; this.nextMessage(plazasTotales); }));
    }
    quitarPlazas() {
        return this.http.delete(`${urlBasePlazas}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => { const plazasTotales = this.message.value - 1; this.nextMessage(plazasTotales); }));
    }
}
PlazaApiService.ɵfac = function PlazaApiService_Factory(t) { return new (t || PlazaApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PlazaApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlazaApiService, factory: PlazaApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlazaApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/plaza.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicios/plaza.service.ts ***!
  \********************************************/
/*! exports provided: PlazaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlazaService", function() { return PlazaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlazaService {
}
PlazaService.ɵfac = function PlazaService_Factory(t) { return new (t || PlazaService)(); };
PlazaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlazaService, factory: PlazaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlazaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/servicios/ticket-api.service.ts":
/*!*************************************************!*\
  !*** ./src/app/servicios/ticket-api.service.ts ***!
  \*************************************************/
/*! exports provided: TicketsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsApiService", function() { return TicketsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket.service */ "./src/app/servicios/ticket.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






//const urlBaseTickets = 'http://localhost:8080/api/tickets';
const urlBaseTickets = 'https://sigepark.herokuapp.com/api/tickets';
class TicketsApiService extends _ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"] {
    constructor(http) {
        super();
        this.http = http;
        this.messageOcupadas = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.sharedMessageOcupadas = this.messageOcupadas.asObservable();
    }
    getTarifa(url) {
        return this.http.get(url);
    }
    getPlaza(url) {
        return this.http.get(url);
    }
    getTickets() {
        return this.http
            .get(urlBaseTickets)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((respuesta) => respuesta['_embedded'] ? respuesta['_embedded'].tickets : []));
    }
    getTicketNoPagados() {
        return this.http
            .get(urlBaseTickets + '/search/por-pagado?pagado=false')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((respuesta) => respuesta['_embedded'] ? respuesta['_embedded'].tickets : []));
    }
    crearTicket(matricula) {
        return this.http
            .post(urlBaseTickets, { matricula })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => {
            const plazasOcupadas = this.messageOcupadas.value + 1;
            this.nextMessageOcupadas(plazasOcupadas);
        }));
    }
    pagarTicket(id) {
        return this.http.patch(`${urlBaseTickets}/${id}`, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => {
            const plazasOcupadas = this.messageOcupadas.value - 1;
            this.nextMessageOcupadas(plazasOcupadas);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error.status === 404) {
                alert('Mensaje desde el Observable: Ticket no encontrado');
            }
            else {
                alert('Mensaje desde el Observable: Error inesperado: ' + error.message);
            }
            return [];
        }));
    }
    getSharedMessageOcupadas() {
        return this.sharedMessageOcupadas;
    }
    nextMessageOcupadas(plazasOcupadas) {
        this.messageOcupadas.next(plazasOcupadas);
    }
}
TicketsApiService.ɵfac = function TicketsApiService_Factory(t) { return new (t || TicketsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
TicketsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TicketsApiService, factory: TicketsApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/ticket.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/ticket.service.ts ***!
  \*********************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TicketService {
}
TicketService.ɵfac = function TicketService_Factory(t) { return new (t || TicketService)(); };
TicketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TicketService, factory: TicketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map