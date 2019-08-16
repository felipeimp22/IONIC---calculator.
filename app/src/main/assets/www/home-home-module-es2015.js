(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">\n      Calculator\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"master\">\n  <div class=\"shape\">\n    <ion-item>\n      <ion-label class=\"value\">{{ value }}</ion-label>\n    </ion-item>\n    <div *ngFor=\"let numG of numbers\" class=\"numG\">\n      <ion-button\n        class=\"btnNum\"\n        *ngFor=\"let num of numG\"\n        (click)=\"buttonPress(num)\"\n        >{{ num }}</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".value {\n  display: -webkit-box;\n  display: flex;\n  text-align: right;\n  font-size: 32px;\n  margin-bottom: 10%;\n  height: 60px;\n  width: 100px;\n  box-shadow: 1px 2px 4px 1px #8b8b8b;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.btnNum {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 22%;\n  margin-left: 2%;\n  margin-right: 2%;\n  text-decoration: none;\n}\n\n.numG {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: stretch;\n          justify-content: stretch;\n}\n\n.title {\n  height: 60px;\n  background-color: #2faadb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXENhRmVcXERlc2t0b3BcXGlvbmljXFxtYXBwL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FERUE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBRUEsVUFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0FDRkY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAxcHggcmdiKDEzOSwgMTM5LCAxMzkpO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bk51bSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gIHdpZHRoOiAyMiU7XG5cbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5udW1HIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xufVxuLnRpdGxlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDE3MCwgMjE5KTtcbn1cbiIsIi52YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCAjOGI4YjhiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bk51bSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMjIlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm51bUcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG59XG5cbi50aXRsZSB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmYWFkYjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.readyIn = true;
        this.countValue = "0";
        this.value = "0";
        this.secondValue = "0";
        this.operator = "+";
        this.numbers = [
            ["C", "L/D", "<-", "√"],
            [7, 8, 9, "x"],
            [4, 5, 6, "-"],
            [1, 2, 3, "+"],
            [0, ".", "/", "="]
        ];
    }
    buttonPress(num) {
        if (!isNaN(num)) {
            if (this.readyIn)
                this.value = "" + num;
            else
                this.value += "" + num;
            this.readyIn = false;
        }
        else if (num === "C") {
            this.value = "0";
            this.readyIn = true;
        }
        else if (num === "=") {
            if (this.operator === "x")
                this.value = "" + parseInt(this.secondValue) * parseInt(this.value);
            else if (this.operator === "+")
                this.value = "" + (parseInt(this.value) + parseInt(this.secondValue));
            else if (this.operator === "/")
                this.value = "" + parseInt(this.secondValue) / parseInt(this.value);
            else if (this.operator === "√")
                this.value = "" + Math.sqrt(parseInt(this.secondValue));
            else if (this.operator === "-")
                this.value = "" + (parseInt(this.secondValue) - parseInt(this.value));
        }
        else {
            this.readyIn = true;
            this.secondValue = this.value;
            this.operator = num;
        }
        console.log(num);
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map