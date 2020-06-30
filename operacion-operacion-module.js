(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operacion-operacion-module"],{

/***/ "./src/app/modelo/tarifa.ts":
/*!**********************************!*\
  !*** ./src/app/modelo/tarifa.ts ***!
  \**********************************/
/*! exports provided: FactorTiempo, Tipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactorTiempo", function() { return FactorTiempo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipo", function() { return Tipo; });
var FactorTiempo;
(function (FactorTiempo) {
    FactorTiempo["MINUTO"] = "MINUTO";
    FactorTiempo["HORA"] = "HORA";
})(FactorTiempo || (FactorTiempo = {}));
var Tipo;
(function (Tipo) {
    Tipo["NORMAL"] = "NORMAL";
    Tipo["FIN_SEMANA"] = "FIN_SEMANA";
})(Tipo || (Tipo = {}));


/***/ }),

/***/ "./src/app/operacion/operacion-home/operacion-home.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/operacion/operacion-home/operacion-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: OperacionHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionHomeComponent", function() { return OperacionHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class OperacionHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
OperacionHomeComponent.ɵfac = function OperacionHomeComponent_Factory(t) { return new (t || OperacionHomeComponent)(); };
OperacionHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperacionHomeComponent, selectors: [["app-operacion-home"]], decls: 24, vars: 0, consts: [[1, "row"], [1, "container-fluid", "mt-4"], [1, "tituloText"], [1, "row", "justify-content-center"], [1, "col-auto", "mb-3"], [1, "card"], [1, "card-body"], [1, "tituloTextCard"], [1, "container"], ["routerLink", "tickets"], [1, "btn", "btn-warning"], ["routerLink", "plazas"]], template: function OperacionHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OPERACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ENTRADAS / SALIDAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " OPERAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "OCUPACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " VER LISTADOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div.row[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n}\n\np.tituloText[_ngcontent-%COMP%] {\n  color: #ffe600;\n  font-size: 50px;\n  font-family: sans-serif;\n  font-weight: bolder;\n  filter: brightness(1.3);\n  justify-content: center;\n  text-align: center;\n}\n\np.tituloTextCard[_ngcontent-%COMP%] {\n  color: #ffe600;\n  font-size: 20px;\n  font-family: sans-serif;\n  font-weight: bolder;\n  filter: brightness(1.3);\n  justify-content: center;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  filter: brightness(1.3);\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {  \n    background-color: rgba(255, 255, 255, 0.1);\n    padding: 10px;\n    width: 20rem;\n  }\n\nbody[_ngcontent-%COMP%] {\r\n  background: url('fondo3.jpg') no-repeat center center fixed;\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL2FwcC9vcGVyYWNpb24vb3BlcmFjaW9uLWhvbWUvb3BlcmFjaW9uLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLFlBQVk7RUFDZDs7QUNsQ0Y7RUFDRSwyREFBK0U7RUFJL0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL29wZXJhY2lvbi9vcGVyYWNpb24taG9tZS9vcGVyYWNpb24taG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAudGl0dWxvVGV4dCB7XG4gIGNvbG9yOiAjZmZlNjAwO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucC50aXR1bG9UZXh0Q2FyZCB7XG4gIGNvbG9yOiAjZmZlNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQsXG5idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCB7ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjByZW07XG4gIH1cblxuICBcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzLmNzcyc7XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ZvbmRvMy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperacionHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operacion-home',
                templateUrl: './operacion-home.component.html',
                styleUrls: ['./operacion-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/operacion/operacion-lista/operacion-lista.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/operacion/operacion-lista/operacion-lista.component.ts ***!
  \************************************************************************/
/*! exports provided: OperacionListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionListaComponent", function() { return OperacionListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_ticket_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../servicios/ticket-api.service */ "./src/app/servicios/ticket-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function OperacionListaComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r2, " ");
} }
function OperacionListaComponent_tr_24_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const ticket_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ticket_r3[col_r5], " ");
} }
function OperacionListaComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OperacionListaComponent_tr_24_td_1_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.index);
} }
class OperacionListaComponent {
    constructor(ticketsApiService) {
        this.ticketsApiService = ticketsApiService;
        this.collection = { count: 10, data: [] };
        this.columns = ['Numero de Ticket', 'Matricula', 'Hora de entrada'];
        this.index = ['id', 'matricula', 'entrada'];
        this.tickets = [];
        this.ticketsNoPagados = [];
    }
    ngOnInit() {
        this.ticketsApiService.getTickets().subscribe((response) => {
            this.tickets = response;
        }, (error) => console.log(error));
        this.ticketsApiService.getTicketNoPagados().subscribe((response) => {
            this.ticketsNoPagados = response;
        }, (error) => console.log(error));
    }
}
OperacionListaComponent.ɵfac = function OperacionListaComponent_Factory(t) { return new (t || OperacionListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_ticket_api_service__WEBPACK_IMPORTED_MODULE_1__["TicketsApiService"])); };
OperacionListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperacionListaComponent, selectors: [["app-operacion-lista"]], decls: 28, vars: 2, consts: [[1, "row"], [1, "container-fluid", "mt-4"], [1, "tituloText"], [1, "row", "justify-content-center"], [1, "col-auto", "mb-3"], [1, "card"], [1, "card-body"], [1, "tituloTextCard"], [1, "container"], ["data-toggle", "modal", "data-target", "#modalTicketList2", 1, "btn", "btn-warning"], ["id", "modalTicketList2", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "row", "modal-body"], ["id", "tickets"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-warning"]], template: function OperacionListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OPERACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vehiculos en Parking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " OPERAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " LISTA DE VEHICULOS EN EL PARKING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OperacionListaComponent_th_23_Template, 2, 1, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OperacionListaComponent_tr_24_Template, 2, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticketsNoPagados);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["div.row[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n}\n\np.tituloText[_ngcontent-%COMP%] {\n  color: #ffe600;\n  font-size: 50px;\n  font-family: sans-serif;\n  font-weight: bolder;\n  filter: brightness(1.3);\n  justify-content: center;\n  text-align: center;\n}\n\np.tituloTextCard[_ngcontent-%COMP%] {\n  color: #ffe600;\n  font-size: 20px;\n  font-family: sans-serif;\n  font-weight: bolder;\n  filter: brightness(1.3);\n  justify-content: center;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  filter: brightness(1.3);\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {  \n    background-color: rgba(255, 255, 255, 0.1);\n    padding: 10px;\n    width: 20rem;\n  }\n\nbody[_ngcontent-%COMP%] {\r\n  background: url('fondo3.jpg') no-repeat center center fixed;\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n}\n\ntable[_ngcontent-%COMP%] {\r\n  color: #ffe600;\r\n}\n\n#tickets[_ngcontent-%COMP%] {\r\n  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\n\n#tickets[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #tickets[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #ffe600;\r\n  padding: 8px;\r\n\r\n}\n\n#tickets[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: center;\r\n}\n\n.tickets[_ngcontent-%COMP%] {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  color: #405061;\r\n  width: 30em;\r\n}\n\nlabel[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .close[_ngcontent-%COMP%] {\r\n  color: #ffe600;\r\n\r\n}\n\n.modal-content[_ngcontent-%COMP%] {\r\n  border-radius: 30px;\r\n  border-width: 5px;\r\n  border-color: #f3f707;\r\n  padding: 10px;\r\n  background-color: rgba(0, 0, 0, 0.712);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL2FwcC9vcGVyYWNpb24vb3BlcmFjaW9uLWxpc3RhL29wZXJhY2lvbi1saXN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsWUFBWTtFQUNkOztBQ2xDRjtFQUNFLDJEQUErRTtFQUkvRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlEQUF5RDtFQUN6RCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvb3BlcmFjaW9uL29wZXJhY2lvbi1saXN0YS9vcGVyYWNpb24tbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wLnRpdHVsb1RleHQge1xuICBjb2xvcjogI2ZmZTYwMDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAudGl0dWxvVGV4dENhcmQge1xuICBjb2xvcjogI2ZmZTYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0LFxuYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQgeyAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDIwcmVtO1xuICB9XG5cbiAgXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy5jc3MnO1xyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mb25kbzMuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGNvbG9yOiAjZmZlNjAwO1xyXG59XHJcblxyXG4jdGlja2V0cyB7XHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN0aWNrZXRzIHRkLFxyXG4jdGlja2V0cyB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZTYwMDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG59XHJcblxyXG4jdGlja2V0cyB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGlja2V0cyB7XHJcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICM0MDUwNjE7XHJcbiAgd2lkdGg6IDMwZW07XHJcbn1cclxuXHJcbmxhYmVsLFxyXG5oNixcclxuLmNsb3NlIHtcclxuICBjb2xvcjogI2ZmZTYwMDtcclxuXHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2YzZjcwNztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTIpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperacionListaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operacion-lista',
                templateUrl: './operacion-lista.component.html',
                styleUrls: ['./operacion-lista.component.css']
            }]
    }], function () { return [{ type: _servicios_ticket_api_service__WEBPACK_IMPORTED_MODULE_1__["TicketsApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/operacion/operacion-ticket/operacion-ticket.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/operacion/operacion-ticket/operacion-ticket.component.ts ***!
  \**************************************************************************/
/*! exports provided: OperacionTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionTicketComponent", function() { return OperacionTicketComponent; });
/* harmony import */ var _modelo_tarifa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../modelo/tarifa */ "./src/app/modelo/tarifa.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _servicios_ticket_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../servicios/ticket-api.service */ "./src/app/servicios/ticket-api.service.ts");
/* harmony import */ var _servicios_plaza_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../servicios/plaza-api.service */ "./src/app/servicios/plaza-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function OperacionTicketComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " IMPRIMIR TICKET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Matricula");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "N\u00BA Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Hora Entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tarifa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Aceptar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.ticket.matricula);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.ticket.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.entradaFormateada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.tarifa.factor, " / ", ctx_r0.factorTiempo, "");
} }
function OperacionTicketComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " IMPRIMIR FACTURA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Matricula");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Hora Entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Hora de Salida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Tarifa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Aceptar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.ticket.matricula);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.entradaFormateada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.salidaFormateada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.tarifa.factor, " / ", ctx_r1.factorTiempo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.importe);
} }
class OperacionTicketComponent {
    constructor(fb, ticketApiService, plazasApiService) {
        this.fb = fb;
        this.ticketApiService = ticketApiService;
        this.plazasApiService = plazasApiService;
        this.newTicketForm = this.fb.group({
            matricula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.payTicketForm = this.fb.group({
            numeroTicket: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.showFactura = false;
    }
    //llamamos a plazas totales y plazas ocupadas
    ngOnInit() {
        this.setPlazasTotales();
        this.setPlazasOcupadas();
    }
    //no viene plaza o tarifa
    crearTicket() {
        this.ticketApiService
            .crearTicket(this.newTicketForm.value.matricula)
            .subscribe((resultado) => {
            this.ticket = resultado; //ya tenemos el ticket
            this.setPlazasOcupadas();
            //el link esta definido de padres a hijos
            this.ticketApiService
                .getTarifa(resultado._links.tarifa.href)
                .subscribe((tarifa) => {
                this.tarifa = tarifa;
                this.formatearEntrada();
                this.factorTiempo = this.tarifa.factorTiempo.toLowerCase();
                $('#modalTicket').modal('show');
                this.newTicketForm.reset();
            });
        }, (error) => {
            alert('La matricula ya existe');
        });
    }
    formatearEntrada() {
        this.ticket.entrada = new Date(this.ticket.entrada);
        const fecha = this.ticket.entrada.getDate() +
            '/' +
            (this.ticket.entrada.getMonth() + 1) +
            '/' +
            this.ticket.entrada.getFullYear();
        const tiempo = this.ticket.entrada.getHours() + ':' + this.ticket.entrada.getMinutes();
        this.entradaFormateada = tiempo + ' ' + fecha;
    }
    pagarTicket() {
        console.log(this.payTicketForm.value); // ver valor por consola
        this.ticketApiService
            .pagarTicket(this.payTicketForm.value.numeroTicket)
            .subscribe((resultado) => {
            //el .value devuelve un json con los controlname
            this.ticket = resultado;
            this.setPlazasOcupadas();
            this.setPlazasTotales();
            this.ticketApiService
                .getTarifa(resultado._links.tarifa.href)
                .subscribe((tarifa) => {
                this.tarifa = tarifa;
                this.importe = this.calcularImporte();
                this.formatearSalida();
                this.factorTiempo = this.tarifa.factorTiempo.toLowerCase()
                    .substring(0, 1);
                this.showFactura = true;
                $('#modalFactura').modal('show');
                this.payTicketForm.reset();
            });
        });
    }
    formatearSalida() {
        this.ticket.salida = new Date(this.ticket.salida);
        const fecha = this.ticket.salida.getDate() +
            '/' +
            (this.ticket.salida.getMonth() + 1) +
            '/' +
            this.ticket.salida.getFullYear();
        const tiempo = this.ticket.salida.getHours() + ':' + this.ticket.salida.getMinutes();
        this.salidaFormateada = tiempo + ' ' + fecha;
    }
    setPlazasTotales() {
        return this.plazasApiService
            .getPlazasTotales()
            .subscribe((plazas) => (this.plazasTotales = plazas));
    }
    setPlazasOcupadas() {
        return this.plazasApiService
            .getPlazasOcupadas()
            .subscribe((plazas) => (this.plazasOcupadas = plazas));
    }
    calcularImporte() {
        const entrada = new Date(this.ticket.entrada);
        const salida = new Date(this.ticket.salida);
        let tiempo;
        if (this.tarifa.factorTiempo === _modelo_tarifa__WEBPACK_IMPORTED_MODULE_0__["FactorTiempo"].MINUTO) {
            tiempo = (salida.getTime() - entrada.getTime()) / (60 * 1000); //minutos
        }
        else {
            tiempo = (salida.getTime() - entrada.getTime()) / (60 * 60 * 1000); //horas
        }
        return tiempo * Number(this.tarifa.factor);
    }
}
OperacionTicketComponent.ɵfac = function OperacionTicketComponent_Factory(t) { return new (t || OperacionTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_ticket_api_service__WEBPACK_IMPORTED_MODULE_3__["TicketsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_plaza_api_service__WEBPACK_IMPORTED_MODULE_4__["PlazaApiService"])); };
OperacionTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OperacionTicketComponent, selectors: [["app-operacion-ticket"]], decls: 34, vars: 8, consts: [[1, "row"], [1, "container-fluid", "mt-4"], [1, "tituloText"], [1, "row", "justify-content-center"], [1, "col-auto", "mb-3"], [1, "card"], [1, "card-body"], [1, "tituloTextCard"], [1, "container"], [3, "formGroup", "ngSubmit"], ["placeholder", "Matricula", "type", "text", "formControlName", "matricula", "required", "", 1, "form-control", "form-control-dark"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["placeholder", "Ticket", "type", "text", "formControlName", "numeroTicket", "required", "", 1, "form-control", "form-control-dark"], ["id", "modalTicket", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm"], ["class", "modal-content", 4, "ngIf"], ["id", "modalFactura", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "row", "modal-body"], [1, "container", "col-md-6", "mb-3"], [1, "col-md-6", "mb-3"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-warning"], ["src", ".\\assets\\img\\logo.png", "alt", "SIGEPARK", "title", "Sistema de Gesti\u00F3n de Parking", "width", "50"]], template: function OperacionTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ENTRADA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OperacionTicketComponent_Template_form_ngSubmit_12_listener() { return ctx.crearTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "SALIDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OperacionTicketComponent_Template_form_ngSubmit_23_listener() { return ctx.pagarTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OperacionTicketComponent_div_30_Template, 28, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, OperacionTicketComponent_div_33_Template, 36, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Plazas ", ctx.plazasOcupadas, "/", ctx.plazasTotales, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newTicketForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.newTicketForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.payTicketForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.payTicketForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ticket && ctx.tarifa);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFactura);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["div.row[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n}\n\np.tituloText[_ngcontent-%COMP%] {\n  color: #ffe600;\n  font-size: 50px;\n  font-family: sans-serif;\n  font-weight: bolder;\n  filter: brightness(1.3);\n  justify-content: center;\n  text-align: center;\n}\n\np.tituloTextCard[_ngcontent-%COMP%] {\n  color: #ffe600;\n  font-size: 20px;\n  font-family: sans-serif;\n  font-weight: bolder;\n  filter: brightness(1.3);\n  justify-content: center;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  filter: brightness(1.3);\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {  \n    background-color: rgba(255, 255, 255, 0.1);\n    padding: 10px;\n    width: 20rem;\n  }\n\nbody[_ngcontent-%COMP%] {\r\n  background: url('fondo3.jpg') no-repeat center center fixed;\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n}\n\n.form-control-dark[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n\r\n}\n\n.form-control-dark[_ngcontent-%COMP%]:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px #ffe600;\r\n}\n\n[_ngcontent-%COMP%]::placeholder {\r\n  color: #000000a6;\r\n  opacity: 1;\r\n}\n\nlabel[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .close[_ngcontent-%COMP%] {\r\n  color: #ffe600;\r\n}\n\n.modal-content[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  border-width: 5px;\r\n  border-color: #f3f707;\r\n  padding: 10px;\r\n  background-color: rgba(0, 0, 0, 0.712);\r\n}\n\np[_ngcontent-%COMP%] {\r\n  color: #ffe600;\r\n  font-size: 15px;\r\n  font-family: sans-serif;\r\n  filter: brightness(1.3);\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL2FwcC9vcGVyYWNpb24vb3BlcmFjaW9uLXRpY2tldC9vcGVyYWNpb24tdGlja2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0FDbENGO0VBQ0UsMkRBQStFO0VBSS9FLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMENBQTBDOztBQUU1Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9vcGVyYWNpb24vb3BlcmFjaW9uLXRpY2tldC9vcGVyYWNpb24tdGlja2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucC50aXR1bG9UZXh0IHtcbiAgY29sb3I6ICNmZmU2MDA7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wLnRpdHVsb1RleHRDYXJkIHtcbiAgY29sb3I6ICNmZmU2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dCxcbmJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHsgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgfVxuXG4gIFxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuY3NzJztcclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZm9uZG8zLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjZmZlNjAwO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzAwMDAwMGE2O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmxhYmVsLFxyXG5oNixcclxuLmNsb3NlIHtcclxuICBjb2xvcjogI2ZmZTYwMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjNmNzA3O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxMik7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjZmZlNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OperacionTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-operacion-ticket',
                templateUrl: './operacion-ticket.component.html',
                styleUrls: ['./operacion-ticket.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _servicios_ticket_api_service__WEBPACK_IMPORTED_MODULE_3__["TicketsApiService"] }, { type: _servicios_plaza_api_service__WEBPACK_IMPORTED_MODULE_4__["PlazaApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/operacion/operacion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/operacion/operacion.module.ts ***!
  \***********************************************/
/*! exports provided: OperacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionModule", function() { return OperacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _operacion_home_operacion_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operacion-home/operacion-home.component */ "./src/app/operacion/operacion-home/operacion-home.component.ts");
/* harmony import */ var _operacion_lista_operacion_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operacion-lista/operacion-lista.component */ "./src/app/operacion/operacion-lista/operacion-lista.component.ts");
/* harmony import */ var _operacion_ticket_operacion_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operacion-ticket/operacion-ticket.component */ "./src/app/operacion/operacion-ticket/operacion-ticket.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comun_comun_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comun/comun.module */ "./src/app/comun/comun.module.ts");









const routes = [
    {
        path: '',
        component: _operacion_home_operacion_home_component__WEBPACK_IMPORTED_MODULE_2__["OperacionHomeComponent"]
    },
    {
        path: 'plazas',
        component: _operacion_lista_operacion_lista_component__WEBPACK_IMPORTED_MODULE_3__["OperacionListaComponent"]
    },
    {
        path: 'tickets',
        component: _operacion_ticket_operacion_ticket_component__WEBPACK_IMPORTED_MODULE_4__["OperacionTicketComponent"]
    }
];
class OperacionModule {
}
OperacionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OperacionModule });
OperacionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OperacionModule_Factory(t) { return new (t || OperacionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _comun_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OperacionModule, { declarations: [_operacion_home_operacion_home_component__WEBPACK_IMPORTED_MODULE_2__["OperacionHomeComponent"], _operacion_lista_operacion_lista_component__WEBPACK_IMPORTED_MODULE_3__["OperacionListaComponent"], _operacion_ticket_operacion_ticket_component__WEBPACK_IMPORTED_MODULE_4__["OperacionTicketComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _comun_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperacionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_operacion_home_operacion_home_component__WEBPACK_IMPORTED_MODULE_2__["OperacionHomeComponent"], _operacion_lista_operacion_lista_component__WEBPACK_IMPORTED_MODULE_3__["OperacionListaComponent"], _operacion_ticket_operacion_ticket_component__WEBPACK_IMPORTED_MODULE_4__["OperacionTicketComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _comun_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=operacion-operacion-module.js.map