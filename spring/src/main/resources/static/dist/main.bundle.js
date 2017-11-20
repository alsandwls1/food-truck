webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = "http://localhost:8080/members";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        // private loggedIn = new Subject<boolean>();
        this.subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.subject2 = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    AuthenticationService.prototype.getObservable = function () {
        console.log('getObservable() working');
        return this.subject.asObservable();
    };
    AuthenticationService.prototype.getObservable2 = function () {
        console.log('getObservable() working');
        return this.subject2.asObservable();
    };
    // checkTruck(email:string) {
    //   const url = `http://localhost:8080/trucks/member/${email}`;
    //   console.log(url);
    //   this.http.get(url).subscribe(res=>{
    //     console.log(res.text());
    //     this.subject2.next({check:res.text()});
    //     return res.text();
    //   });
    // }
    AuthenticationService.prototype.checkTruck = function (email) {
        var _this = this;
        var url = "http://localhost:8080/trucks/member/" + email;
        console.log(url);
        this.http.get(url).subscribe(function (res) {
            console.log('serivce' + res.text());
            _this.subject2.next({ check: res.text() });
        });
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var url = this.loginUrl + "/login";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;  charset=utf-8', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var member = { "mEmail": email, "mPassword": password };
        console.log('member = ' + JSON.stringify(member));
        return this.http.post(url, JSON.stringify(member), options).toPromise().then(function (res) {
            var member = res.json();
            console.log('error =' + member.merror);
            if (member.merror !== null) {
                return JSON.stringify(member) || {};
            }
            else {
                var m = JSON.stringify(member);
                sessionStorage.setItem('member', m);
                //이때, top-nav로 가서 처리
                _this.subject.next({ login: 'true' });
                return m || {};
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var url = this.loginUrl + "/logout";
        return this.http.get(url);
    };
    AuthenticationService.prototype.extractDataForObject = function (res) {
        console.log('extractDataForObject#res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || {};
    };
    AuthenticationService.prototype.extractData = function (res) {
        console.log('extractData#res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    AuthenticationService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(res.json().error || 'Server Down');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/canival.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanivalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanivalService = (function () {
    function CanivalService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.canivalListUrl = "http://localhost:8080/canival";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    CanivalService.prototype.getCanivalsView = function () {
        var url = this.canivalListUrl;
        return this.http.get(url)
            .map(function (res) {
            var json = res.text();
            json = JSON.parse(json);
            return json || [];
        });
    };
    CanivalService.prototype.getCanivalDetail = function (cId) {
        var url = this.canivalListUrl + "/view/" + cId;
        return this.http.get(url);
    };
    CanivalService.prototype.getDeleteCanival = function (cId) {
        var url = this.canivalListUrl + "/delete/" + cId;
        return this.http.delete(url, { headers: this.headers });
    };
    CanivalService.prototype.postAddCanival = function (cTitle, cContent, cSdate, cEdate, cImage) {
        var url = this.canivalListUrl + "/post";
        var formdata = new FormData();
        formdata.append('cTitle', cTitle);
        formdata.append('cContent', cContent);
        formdata.append('cSdate', cSdate);
        formdata.append('cEdate', cEdate);
        formdata.append('cImage', cImage);
        return this.http.post(url, formdata);
    };
    CanivalService.prototype.postUpdateCanival = function (cId, cTitle, cContent, cSdate, cEdate, cImage) {
        var url = this.canivalListUrl + "/update/" + cId;
        var formdata = new FormData();
        formdata.append('cId', cId);
        formdata.append('cTitle', cTitle);
        formdata.append('cContent', cContent);
        formdata.append('cSdate', cSdate);
        formdata.append('cEdate', cEdate);
        formdata.append('cImage', cImage);
        return this.http.post(url, formdata);
    };
    return CanivalService;
}());
CanivalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CanivalService);

var _a;
//# sourceMappingURL=canival.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = (function () {
    function UploadFileService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    UploadFileService.prototype.pushFileToStorage = function (file, progress, foodName) {
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('foodName', foodName);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpRequest */]('POST', '/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        this.http.request(req).subscribe(function (event) {
            // if (event.type === HttpEventType.UploadProgress) {
            //   progress.percentage = Math.round(100 * event.loaded / event.total);
            //     this.subject.next({upload:'ok'});
            // } else if (event instanceof HttpResponse) {
            //   console.log('File is completely uploaded!');
            // }
        });
    };
    UploadFileService.prototype.getFiles = function () {
        return this.http.get('/getallfiles');
    };
    UploadFileService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    return UploadFileService;
}());
UploadFileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UploadFileService);

var _a;
//# sourceMappingURL=file-upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/food.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.foodUrl = "http://localhost:8080/foods";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    FoodService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    FoodService.prototype.foodRegist = function (name, price, description, file, tid) {
        var _this = this;
        var url = this.foodUrl + "/post";
        var formdata = new FormData();
        formdata.append('name', name);
        formdata.append('price', price);
        formdata.append('description', description);
        formdata.append('file', file);
        formdata.append('tid', tid);
        console.log('FoodService # tid=' + formdata.get('tid'));
        return this.http.post(url, formdata).subscribe(function (res) { return _this.subject.next({ result: 'ok' }); });
    };
    // getAllfoods() {
    //   const url = `${this.foodUrl}/getAllfoods`;
    //   return this.http.get(url);
    // }
    FoodService.prototype.getAllfoods = function (tid) {
        var url = this.foodUrl + "/" + tid;
        return this.http.get(url);
    };
    FoodService.prototype.removeFood = function (food) {
        var _this = this;
        var url = this.foodUrl + "/delete/" + food.fid;
        console.log('food url=' + url);
        return this.http.delete(url, { headers: this.headers })
            .subscribe(function (res) { return _this.subject.next({ result: 'ok' }); });
    };
    return FoodService;
}());
FoodService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FoodService);

var _a;
//# sourceMappingURL=food.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/google-map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoogleMapService = (function () {
    function GoogleMapService(http) {
        this.http = http;
        this.truckUrl = "http://localhost:8080/trucks";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    GoogleMapService.prototype.getTruckAllList = function () {
        return this.http.get(this.truckUrl)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    GoogleMapService.prototype.extractData = function (res) {
        console.log('res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    GoogleMapService.prototype.extractDataForObject = function (res) {
        console.log('res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || {};
    };
    GoogleMapService.prototype.handleError = function (res) {
        console.log(res);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return GoogleMapService;
}());
GoogleMapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], GoogleMapService);

var _a;
//# sourceMappingURL=google-map.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/hotlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotlistService = (function () {
    function HotlistService(http) {
        this.http = http;
        this.hotlistUrl = "http://localhost:8080/hotlist";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.session = sessionStorage.getItem('member');
    }
    HotlistService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    HotlistService.prototype.getHotlistDetail = function () {
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        var email = this.member.memail;
        var url = this.hotlistUrl + "/" + email;
        return this.http.get(url)
            .map(this.extractData)
            ._catch(this.handleError);
    };
    HotlistService.prototype.checkFavo = function (tId) {
        var _this = this;
        console.log(tId);
        var id = JSON.parse(sessionStorage.getItem('member')).memail;
        console.log("id = " + id);
        var url = this.hotlistUrl + "/check/" + id + "/" + tId;
        console.log(url);
        return this.http.get(url).subscribe(function (res) {
            if (res.json().htruck == tId) {
                _this.subject.next({ check: false });
            }
        });
    };
    HotlistService.prototype.addHotlist = function (truck) {
        console.log(truck);
        console.log(JSON.parse(sessionStorage.getItem('member')).memail);
        var url = this.hotlistUrl + "/post";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var hotlist = { "hMember": JSON.parse(sessionStorage.getItem('member')).memail, "hTruck": truck };
        return this.http.post(url, JSON.stringify(hotlist), options);
    };
    HotlistService.prototype.addHotlist2 = function (tid) {
        var _this = this;
        console.log(tid);
        console.log(JSON.parse(sessionStorage.getItem('member')).memail);
        var url = this.hotlistUrl + "/post";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var hotlist = { "hMember": JSON.parse(sessionStorage.getItem('member')).memail, "hTruck": tid };
        return this.http.post(url, JSON.stringify(hotlist), options).subscribe(function (res) { return _this.subject.next({ favo: 'ok' }); });
    };
    //이미 존재하는 즐찾인지 확인
    HotlistService.prototype.checkHotlist = function (tid, email) {
        var _this = this;
        console.log('checkHotlist====' + tid);
        var url = this.hotlistUrl + "/check/" + tid + "/" + email;
        console.log('이미 존재하는 즐찾인지 url::::' + url);
        return this.http.get(url).subscribe(function (res) {
            console.log('res.text() = ' + res.text());
            if (res.text()) {
                console.log('if(res.text()) = ' + res.text());
                _this.subject.next({ favo: 'ok' });
            }
        });
    };
    // addHotlist(member: string, truck: string): Observable<Hotlist> {
    //   var url = this.hotlistUrl;
    //   let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    //   let options = new RequestOptions({ headers: headers });
    //   let hotlist = { "hId": null, "hMember": member, "hTruck": truck };
    //   console.log(' add holist info = ' + JSON.stringify(hotlist));
    //
    //   return this.http.post(url, JSON.stringify(hotlist), options)
    //     .map(this.extractDataForObject)
    //     ._catch(this.handleError);
    // }
    //되는 remove
    HotlistService.prototype.removeHotlist = function (hotlistdetail) {
        var url = this.hotlistUrl + "/" + hotlistdetail.hid;
        console.log('remove url=' + url);
        return this.http.delete(url, { headers: this.headers })
            .map(function (res) {
            var json = res.text();
            // this.subject.next({ json });
            return json || {};
        })
            ._catch(this.handleError);
    };
    HotlistService.prototype.extractDataForObject = function (res) {
        var json = res.text();
        console.log('hotlist service=' + json);
        json = JSON.parse(json);
        return json || {};
    };
    HotlistService.prototype.extractData = function (res) {
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    HotlistService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return HotlistService;
}());
HotlistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HotlistService);

var _a;
//# sourceMappingURL=hotlist.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


var MemberService = (function () {
    function MemberService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.memberUrl = "http://localhost:8080/members";
    }
    MemberService.prototype.getMember = function (memail) {
        var url = this.memberUrl + "/" + sessionStorage.getItem('member');
        return this.http.get(url)
            .map(this.extractDataForObject)
            ._catch(this.handleError);
    };
    MemberService.prototype.addMember = function (email, password, nickname, registype) {
        var url = this.memberUrl + "/regist";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var member = { "mEmail": email, "mPassword": password, "mNickname": nickname, "mRegistype": registype };
        console.log('member = ' + JSON.stringify(member));
        return this.http.post(url, JSON.stringify(member), options)
            .map(this.extractDataForObject)
            .catch(this.handleError);
    };
    MemberService.prototype.modifyMember = function (member) {
        var url = this.memberUrl + "/update/" + member.memail;
        console.log("rrrr = " + url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // let member = { "mEmail": email, "mPassword": password, "mNickname": nickname };
        console.log('member = ' + JSON.stringify(member));
        return this.http.post(url, JSON.stringify(member), options)
            .map(this.extractDataForObject)
            .catch(this.handleError);
    };
    MemberService.prototype.extractDataForObject = function (res) {
        var json = res.text();
        console.log(json);
        json = JSON.parse(json);
        return json || {};
    };
    MemberService.prototype.extractData = function (res) {
        console.log('extractData#res = ' + JSON.stringify(res));
        var json = res.text();
        json = JSON.parse(json);
        return json || [];
    };
    MemberService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return MemberService;
}());
MemberService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], MemberService);

var _a, _b;
//# sourceMappingURL=member.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.reviewUrl = "http://localhost:8080/reviews";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        // console.log('언제실행?')
        this.session = sessionStorage.getItem('member');
        console.log('review service # constructor # session =' + this.session);
    }
    ReviewService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    ReviewService.prototype.addReview = function (comment, image, score, email, truck) {
        var _this = this;
        var url = this.reviewUrl + "/post";
        // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        var formdata = new FormData();
        formdata.append('comment', comment);
        formdata.append('image', image);
        formdata.append('score', score);
        formdata.append('email', email);
        formdata.append('truck', truck);
        // let review = { "rComment":comment, "rImage": image, "rScore":score, "rMember":email, "rTruck":truck };
        // console.log('add review info = ' + JSON.stringify(review.rImage));
        console.log('reivew 1=' + formdata.get('comment'));
        console.log('reivew 2=' + formdata.get('image'));
        console.log('reivew 3=' + formdata.get('score'));
        console.log('reivew 4=' + formdata.get('email'));
        console.log('reivew 5=' + formdata.get('truck'));
        return this.http.post(url, formdata).subscribe(function (res) { return _this.subject.next({ result: 'ok' }); });
        // .map(res => {
        //   let json = res.text();
        //   console.log('json='+json)
        //   return json || {};
        // })
        // ._catch(this.handleError);
    };
    ReviewService.prototype.addReview2 = function (comment, score, email, truck) {
        var _this = this;
        var url = this.reviewUrl + "/post2";
        // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        var formdata = new FormData();
        formdata.append('comment', comment);
        formdata.append('score', score);
        formdata.append('email', email);
        formdata.append('truck', truck);
        // let review = { "rComment":comment, "rImage": image, "rScore":score, "rMember":email, "rTruck":truck };
        // console.log('add review info = ' + JSON.stringify(review.rImage));
        console.log('reivew 1=' + formdata.get('comment'));
        console.log('reivew 3=' + formdata.get('score'));
        console.log('reivew 4=' + formdata.get('email'));
        console.log('reivew 5=' + formdata.get('truck'));
        return this.http.post(url, formdata).subscribe(function (res) { return _this.subject.next({ result: 'ok' }); });
        // .map(this.extractDataForObject)
        // .map(res => {
        //   let json = res.text();
        //   console.log('json='+json)
        //   return json || {};
        // })
        // ._catch(this.handleError);
    };
    ReviewService.prototype.removeReview = function (review) {
        var url = this.reviewUrl + "/delete/" + review.rid;
        console.log('review remove url= ' + url);
        return this.http.delete(url, { headers: this.headers })
            .map(function (res) {
            var json = res.text();
            return json || {};
        })
            ._catch(this.handleError);
    };
    //내가 등록한 리뷰를 가져온다.
    ReviewService.prototype.getMyReview = function () {
        console.log('review service # getMyReview # session =' + this.session);
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        var email = this.member.memail;
        var url = this.reviewUrl + "/member/" + email;
        console.log('review url=' + url);
        return this.http.get(url)
            .map(this.extractData)
            ._catch(this.handleError);
    };
    ReviewService.prototype.getTruckReview = function (tid) {
        var url = this.reviewUrl + "/truck/" + tid;
        console.log('review url=' + url);
        return this.http.get(url)
            .map(function (res) {
            var json = res.text();
            console.log(json);
            json = JSON.parse(json);
            return json || [];
        })
            ._catch(this.handleError);
    };
    ReviewService.prototype.extractDataForObject = function (res) {
        var json = res.text();
        console.log('review service=' + json);
        json = JSON.parse(json);
        return json || {};
    };
    ReviewService.prototype.extractData = function (res) {
        var json = res.text();
        console.log('review service=' + json);
        json = JSON.parse(json);
        return json || [];
    };
    ReviewService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return ReviewService;
}());
ReviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReviewService);

var _a;
//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/support.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportService = (function () {
    function SupportService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.supportUrl = "http://localhost:8080/supports";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    SupportService.prototype.getObservable = function () {
        return this.subject.asObservable();
    };
    SupportService.prototype.addSupport = function (f, member) {
        var _this = this;
        var url = this.supportUrl + "/post";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var support = { 'stitle': f.title, 'scontent': f.content, 'sregistype': member.mregistype, 'smember': member.memail };
        this.http.post(url, JSON.stringify(support), options)
            .subscribe(function (res) { return _this.subject.next({ result: 'ok' }); });
    };
    SupportService.prototype.updateSupport = function (sid, stitle, scontent) {
        var _this = this;
        var url = this.supportUrl + "/update";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var support = { 'sid': sid, 'stitle': stitle, 'scontent': scontent };
        console.log(url);
        this.http.post(url, JSON.stringify(support), options)
            .subscribe(function (res) { return _this.subject.next({ result2: 'ok' }); });
    };
    SupportService.prototype.getList = function () {
        var url = "" + this.supportUrl;
        return this.http.get(url);
    };
    SupportService.prototype.getDetail = function (sid) {
        console.log(sid);
        var url = this.supportUrl + "/number/" + sid;
        console.log(url);
        return this.http.get(url);
    };
    return SupportService;
}());
SupportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SupportService);

var _a;
//# sourceMappingURL=support.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/truck.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TruckService = (function () {
    function TruckService(http) {
        this.http = http;
        this.trucks2 = [];
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.truckUrl = "http://localhost:8080/trucks";
    }
    TruckService.prototype.getObservable = function () {
        // console.log('getObservable() working');
        return this.subject.asObservable();
    };
    // truckRegist(name: string, open: string, close: string, lat: string, lng: string, comment: string, file: File) {
    TruckService.prototype.truckRegist = function (name, open, close, lat, lng, comment, file, email) {
        var _this = this;
        var url = this.truckUrl + "/post";
        var formdata = new FormData();
        var address;
        // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
            .subscribe(function (response) {
            // console.log(response.json());
            console.log(response.json().results[0].formatted_address);
            address = response.json().results[0].formatted_address;
            console.log(address);
            formdata.append('name', name);
            formdata.append('open', open);
            formdata.append('close', close);
            formdata.append('lat', lat);
            formdata.append('lng', lng);
            formdata.append('comment', comment);
            formdata.append('file', file);
            formdata.append('address', address);
            formdata.append('email', email);
            console.log(formdata.get('address'));
            console.log(formdata.get('file'));
            console.log(formdata.get('email'));
            return _this.http.post(url, formdata).subscribe(function () {
                _this.subject.next({ check: 'true' });
            });
        });
    };
    TruckService.prototype.truckgetAll = function () {
        var url = "" + this.truckUrl;
        return this.http.get(url);
    };
    TruckService.prototype.truckRegist2 = function (tid, name, open, close, lat, lng, comment, file, email) {
        var _this = this;
        var url = this.truckUrl + "/post2";
        var formdata = new FormData();
        var address;
        // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
            .subscribe(function (response) {
            // console.log(response.json());
            console.log(response.json().results[0].formatted_address);
            address = response.json().results[0].formatted_address;
            console.log(address);
            formdata.append('tid', tid);
            formdata.append('name', name);
            formdata.append('open', open);
            formdata.append('close', close);
            formdata.append('lat', lat);
            formdata.append('lng', lng);
            formdata.append('comment', comment);
            formdata.append('file', file);
            formdata.append('address', address);
            formdata.append('email', email);
            console.log(formdata.get('address'));
            console.log(formdata.get('file'));
            console.log(formdata.get('email'));
            return _this.http.post(url, formdata).subscribe(function () {
                _this.subject.next({ check: 'true' });
            });
        });
    };
    TruckService.prototype.truckRegist3 = function (tid, name, open, close, lat, lng, comment, file, email) {
        var _this = this;
        var url = this.truckUrl + "/post3";
        var formdata = new FormData();
        var address;
        // let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyAmd6XJpMMk5qA869GC9XXrNmo8Fb1cRYg")
            .subscribe(function (response) {
            // console.log(response.json());
            console.log(response.json().results[0].formatted_address);
            address = response.json().results[0].formatted_address;
            console.log(address);
            formdata.append('tid', tid);
            formdata.append('name', name);
            formdata.append('open', open);
            formdata.append('close', close);
            formdata.append('lat', lat);
            formdata.append('lng', lng);
            formdata.append('comment', comment);
            formdata.append('file', file);
            formdata.append('address', address);
            formdata.append('email', email);
            console.log(formdata.get('address'));
            console.log(formdata.get('file'));
            console.log(formdata.get('email'));
            return _this.http.post(url, formdata).subscribe(function () {
                _this.subject.next({ check: 'true' });
            });
        });
    };
    TruckService.prototype.keyFind = function (key) {
        console.log(key);
        var url = this.truckUrl + "/find/" + key;
        console.log(url);
        return this.http.get(url);
    };
    TruckService.prototype.getTruckInfo = function (tid) {
        var url = this.truckUrl + "/" + tid;
        return this.http.get(url)
            .map(this.extractDataForObject)
            ._catch(this.handleError);
    };
    TruckService.prototype.getTruckById = function (tid) {
        var url = this.truckUrl + "/" + tid;
        // console.log(this.http2.get(url));
        console.log(url);
        return this.http.get(url);
    };
    TruckService.prototype.extractDataForObject = function (res) {
        var json = res.text();
        console.log('truck service=' + json);
        json = JSON.parse(json);
        return json || {};
    };
    TruckService.prototype.extractData = function (res) {
        var json = res.text();
        console.log('review service=' + json);
        json = JSON.parse(json);
        return json || [];
    };
    TruckService.prototype.handleError = function (res) {
        console.log("Erroe = " + res);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json().error || 'Server Down');
    };
    return TruckService;
}());
TruckService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TruckService);

var _a;
//# sourceMappingURL=truck.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_map_google_map_component__ = __webpack_require__("../../../../../src/app/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_home_main_home_component__ = __webpack_require__("../../../../../src/app/main-home/main-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__join_page_join_page_component__ = __webpack_require__("../../../../../src/app/join-page/join-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__truck_list_truck_list_component__ = __webpack_require__("../../../../../src/app/truck-list/truck-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__support_support_component__ = __webpack_require__("../../../../../src/app/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__truck_info_truck_info_component__ = __webpack_require__("../../../../../src/app/truck-info/truck-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__truck_reviews_truck_reviews_component__ = __webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_list_menu_list_component__ = __webpack_require__("../../../../../src/app/menu-list/menu-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__truck_regist_truck_regist_component__ = __webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__support_support_write_support_write_component__ = __webpack_require__("../../../../../src/app/support/support-write/support-write.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__support_support_detail_support_detail_component__ = __webpack_require__("../../../../../src/app/support/support-detail/support-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__support_support_update_support_update_component__ = __webpack_require__("../../../../../src/app/support/support-update/support-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__member_profile_member_profile_component__ = __webpack_require__("../../../../../src/app/member-profile/member-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__canival_canival_detail_canival_detail_component__ = __webpack_require__("../../../../../src/app/canival/canival-detail/canival-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__canival_canival_view_canival_view_component__ = __webpack_require__("../../../../../src/app/canival/canival-view/canival-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__canival_canival_write_canival_write_component__ = __webpack_require__("../../../../../src/app/canival/canival-write/canival-write.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: '/main-home', pathMatch: 'full' },
    { path: 'main-home', component: __WEBPACK_IMPORTED_MODULE_3__main_home_main_home_component__["a" /* MainHomeComponent */] },
    { path: 'truck-map', component: __WEBPACK_IMPORTED_MODULE_2__google_map_google_map_component__["a" /* GoogleMapComponent */] },
    { path: 'login-page', component: __WEBPACK_IMPORTED_MODULE_4__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'join-page', component: __WEBPACK_IMPORTED_MODULE_5__join_page_join_page_component__["a" /* JoinPageComponent */] },
    { path: 'truck-list', component: __WEBPACK_IMPORTED_MODULE_6__truck_list_truck_list_component__["a" /* TruckListComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_8__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_7__support_support_component__["a" /* SupportComponent */] },
    { path: 'support-detail/:sid', component: __WEBPACK_IMPORTED_MODULE_15__support_support_detail_support_detail_component__["a" /* SupportDetailComponent */] },
    { path: 'support/write', component: __WEBPACK_IMPORTED_MODULE_14__support_support_write_support_write_component__["a" /* SupportWriteComponent */] },
    { path: 'support-update/:sid', component: __WEBPACK_IMPORTED_MODULE_16__support_support_update_support_update_component__["a" /* SupportUpdateComponent */] },
    { path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_9__reviews_reviews_component__["a" /* ReviewsComponent */] },
    { path: 'menu-list', component: __WEBPACK_IMPORTED_MODULE_12__menu_list_menu_list_component__["a" /* MenuListComponent */] },
    { path: 'truck-info/:tid', component: __WEBPACK_IMPORTED_MODULE_10__truck_info_truck_info_component__["a" /* TruckInfoComponent */] },
    { path: 'truck-reviews', component: __WEBPACK_IMPORTED_MODULE_11__truck_reviews_truck_reviews_component__["a" /* TruckReviewsComponent */] },
    { path: 'truck-regist', component: __WEBPACK_IMPORTED_MODULE_13__truck_regist_truck_regist_component__["a" /* TruckRegistComponent */] },
    { path: 'member-profile', component: __WEBPACK_IMPORTED_MODULE_17__member_profile_member_profile_component__["a" /* MemberProfileComponent */] },
    { path: 'canival-view', component: __WEBPACK_IMPORTED_MODULE_19__canival_canival_view_canival_view_component__["a" /* CanivalViewComponent */] },
    { path: 'canival-detail/:cid', component: __WEBPACK_IMPORTED_MODULE_18__canival_canival_detail_canival_detail_component__["a" /* CanivalDetailComponent */] },
    { path: 'canival-write', component: __WEBPACK_IMPORTED_MODULE_20__canival_canival_write_canival_write_component__["a" /* CanivalWriteComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-nav></app-top-nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_star_rating__ = __webpack_require__("../../../../angular-star-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/modules/ngx-smart-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__google_map_google_map_component__ = __webpack_require__("../../../../../src/app/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_home_main_home_component__ = __webpack_require__("../../../../../src/app/main-home/main-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__join_page_join_page_component__ = __webpack_require__("../../../../../src/app/join-page/join-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__truck_list_truck_list_component__ = __webpack_require__("../../../../../src/app/truck-list/truck-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__support_support_component__ = __webpack_require__("../../../../../src/app/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__truck_info_truck_info_component__ = __webpack_require__("../../../../../src/app/truck-info/truck-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__truck_reviews_truck_reviews_component__ = __webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__menu_list_menu_list_component__ = __webpack_require__("../../../../../src/app/menu-list/menu-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__truck_regist_truck_regist_component__ = __webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__support_support_detail_support_detail_component__ = __webpack_require__("../../../../../src/app/support/support-detail/support-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__support_support_write_support_write_component__ = __webpack_require__("../../../../../src/app/support/support-write/support-write.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__support_support_update_support_update_component__ = __webpack_require__("../../../../../src/app/support/support-update/support-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__canival_canival_detail_canival_detail_component__ = __webpack_require__("../../../../../src/app/canival/canival-detail/canival-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__canival_canival_view_canival_view_component__ = __webpack_require__("../../../../../src/app/canival/canival-view/canival-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__canival_canival_write_canival_write_component__ = __webpack_require__("../../../../../src/app/canival/canival-write/canival-write.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__member_profile_member_profile_component__ = __webpack_require__("../../../../../src/app/member-profile/member-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_member_service__ = __webpack_require__("../../../../../src/app/_services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_hotlist_service__ = __webpack_require__("../../../../../src/app/_services/hotlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_review_service__ = __webpack_require__("../../../../../src/app/_services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_google_map_service__ = __webpack_require__("../../../../../src/app/_services/google-map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_file_upload_service__ = __webpack_require__("../../../../../src/app/_services/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_food_service__ = __webpack_require__("../../../../../src/app/_services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_support_service__ = __webpack_require__("../../../../../src/app/_services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_canival_service__ = __webpack_require__("../../../../../src/app/_services/canival.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//rating star : npm install angular-star-rating --save

//pagination : npm install ngx-pagination --save

//icons :  npm install --save font-awesome angular-font-awesome
//기본설정 - angular-cli.json파일에 아래의 것을 추가
// "styles": [
//   "styles.css",
//   "../node_modules/font-awesome/css/font-awesome.css"
// ],

// modal : npm i ngx-smart-modal --save


//timepicker: npm install ngx-bootstrap --save



//component





















//service










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__google_map_google_map_component__["a" /* GoogleMapComponent */],
            __WEBPACK_IMPORTED_MODULE_16__main_home_main_home_component__["a" /* MainHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__join_page_join_page_component__["a" /* JoinPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__top_nav_top_nav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_20__truck_list_truck_list_component__["a" /* TruckListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__support_support_component__["a" /* SupportComponent */],
            __WEBPACK_IMPORTED_MODULE_22__favorites_favorites_component__["a" /* FavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__reviews_reviews_component__["a" /* ReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__truck_info_truck_info_component__["a" /* TruckInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_25__truck_reviews_truck_reviews_component__["a" /* TruckReviewsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__menu_list_menu_list_component__["a" /* MenuListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__truck_regist_truck_regist_component__["a" /* TruckRegistComponent */],
            __WEBPACK_IMPORTED_MODULE_28__support_support_detail_support_detail_component__["a" /* SupportDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_29__support_support_write_support_write_component__["a" /* SupportWriteComponent */],
            __WEBPACK_IMPORTED_MODULE_30__support_support_update_support_update_component__["a" /* SupportUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_34__member_profile_member_profile_component__["a" /* MemberProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_31__canival_canival_detail_canival_detail_component__["a" /* CanivalDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_32__canival_canival_view_canival_view_component__["a" /* CanivalViewComponent */],
            __WEBPACK_IMPORTED_MODULE_33__canival_canival_write_canival_write_component__["a" /* CanivalWriteComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            //rating star
            __WEBPACK_IMPORTED_MODULE_8_angular_star_rating__["a" /* StarRatingModule */].forRoot(),
            //pagination
            __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */],
            //icons
            __WEBPACK_IMPORTED_MODULE_10_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            //modal
            __WEBPACK_IMPORTED_MODULE_11_ngx_smart_modal__["a" /* NgxSmartModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            //timepicker
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["c" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["b" /* PopoverModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBFQmGdDApLDMW8Fp3F8VtOv9kwAg1xAUU',
                region: "kr",
                libraries: ["places"],
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_36__services_member_service__["a" /* MemberService */],
            __WEBPACK_IMPORTED_MODULE_37__services_hotlist_service__["a" /* HotlistService */],
            __WEBPACK_IMPORTED_MODULE_38__services_review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_39__services_google_map_service__["a" /* GoogleMapService */],
            __WEBPACK_IMPORTED_MODULE_40__services_truck_service__["a" /* TruckService */],
            __WEBPACK_IMPORTED_MODULE_41__services_file_upload_service__["a" /* UploadFileService */],
            __WEBPACK_IMPORTED_MODULE_42__services_food_service__["a" /* FoodService */],
            __WEBPACK_IMPORTED_MODULE_43__services_support_service__["a" /* SupportService */],
            __WEBPACK_IMPORTED_MODULE_44__services_canival_service__["a" /* CanivalService */],
            //modal service
            __WEBPACK_IMPORTED_MODULE_11_ngx_smart_modal__["b" /* NgxSmartModalService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/canival/canival-detail/canival-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canival/canival-detail/canival-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!click\">\r\n  <table class=\"table table-view\">\r\n    <colgroup>\r\n      <col width=\"7%\">\r\n      <col width=\"*\">\r\n      <col width=\"15%\">\r\n      <col width=\"10%\">\r\n      <col width=\"7%\">\r\n    </colgroup>\r\n    <thead>\r\n      <tr>\r\n        <th class=\"subject\"><b>제목 : </b> {{cTitle}}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td class=\"infocell pull-right\" >\r\n\r\n          <b>글번호</b> &nbsp; &nbsp; {{cId}} &nbsp; &nbsp;\r\n          <b>시작일</b> &nbsp; &nbsp; {{cSdate}} &nbsp; &nbsp;\r\n          <b>종료일</b> &nbsp; &nbsp; {{cEdate}} &nbsp; &nbsp;\r\n          <b>조회수</b> &nbsp; {{cViewcount}} &nbsp;\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"contents pull-center\">\r\n          <img src=\"http://localhost:8080/image/{{cImage}}\" alt=\"x\" width=\"450px\" height=\"auto\"><br>\r\n          {{cContent}}\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <hr>\r\n  <a class=\"btn btn-primary\" [routerLink]=\"['/canival-view']\" >목록</a>\r\n  <a class=\"btn btn-primary\" (click)=\"preview(cId)\" *ngIf=\"cId>0\">이전글</a>\r\n  <a class=\"btn btn-primary\" (click)=\"next(cId)\" *ngIf=\"cId<100\">다음글</a>\r\n  <a class=\"btn btn-primary\" (click)=\"updateButton()\">수정</a>\r\n  <a class=\"btn btn-primary\" (click)=\"getDeleteCanival(cId)\">삭제</a>\r\n</div>\r\n\r\n<!-- 수정 버튼 누르면 보이는 폼 -->\r\n\r\n<div class=\"container\" *ngIf=\"click\">\r\n  <form class=\"form-horizontal\" #f=\"ngForm\" (ngSubmit)=\"postUpdateCanival(f)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"writer\" class=\"control-label col-xs-2\">글번호</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cId\" name=\"cId\" placeholder=\"{{cId}}\" readonly>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" class=\"control-label col-xs-2\">제목</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cTitle\" name=\"cTitle\" placeholder=\"축제 또는 행사명을 적어주세요\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"writer\" class=\"control-label col-xs-2\">작성자</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"관리자\" readonly>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-xs-2\" for=\"picture\">사진</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"file\" class=\"form-control\" (change)=\"selectFile($event)\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"content\" class=\"control-label col-xs-2\">내용</label>\r\n      <div class=\"col-xs-10\">\r\n        <textarea rows=\"20\" class=\"form-control\" [(ngModel)]=\"cContent\" name=\"cContent\" placeholder=\"상세 내용을 적어주세요.\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" class=\"control-label col-xs-2\">시작일</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cSdate\" name=\"cSdate\" placeholder=\"2017.11.08 처럼 적어주세요\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" class=\"control-label col-xs-2\">종료일</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cEdate\" name=\"cEdate\" placeholder=\"2017.11.10 처럼 적어주세요\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-xs-offset-2 col-xs-10\">\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/canival-view']\">목록</a>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">저장</button>\r\n        <a class=\"btn btn-primary\" (click)=\"getDeleteCanival(f)\">삭제</a>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/canival/canival-detail/canival-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanivalDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_canival_service__ = __webpack_require__("../../../../../src/app/_services/canival.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanivalDetailComponent = (function () {
    function CanivalDetailComponent(canivalService, activatedRoute, router) {
        this.canivalService = canivalService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.click = false;
    }
    CanivalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 축제글 배열의 길이 뽑아서 변수에 저장 --> 다음글 메소드에 필요
        this.canivalService.getCanivalsView().subscribe(function (res) {
            _this.length = res.length;
        });
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.cId = params['cid'];
            _this.getCanivalDetail(_this.cId);
        });
    };
    // 특정 축제 정보 보여주는 메소드
    CanivalDetailComponent.prototype.getCanivalDetail = function (cId) {
        var _this = this;
        this.canivalService.getCanivalDetail(cId).subscribe(function (res) {
            console.log(res.json());
            _this.cId = res.json().cid;
            _this.cTitle = res.json().ctitle;
            _this.cSdate = res.json().csdate;
            _this.cEdate = res.json().cedate;
            _this.cContent = res.json().ccontent;
            _this.cViewcount = res.json().cviewcnt;
            _this.cImage = res.json().cimage;
        });
    };
    // 특정 축제 정보 삭제 메소드
    CanivalDetailComponent.prototype.getDeleteCanival = function (cId) {
        this.canivalService.getDeleteCanival(cId).subscribe();
        this.router.navigate(['/canival-view']);
    };
    //수정 버튼, 수정 가능 양식으로 변환 해줌.
    CanivalDetailComponent.prototype.updateButton = function () {
        this.click = !this.click;
    };
    // 특정 축제 정보 수정 메소드
    CanivalDetailComponent.prototype.postUpdateCanival = function (f) {
        var _this = this;
        if (f.valid) {
            this.click = !this.click;
            f.value.cImage = this.selectedFiles.item(0);
            f.value.cId = this.cId;
            this.canivalService.postUpdateCanival(f.value.cId, f.value.cTitle, f.value.cContent, f.value.cSdate, f.value.cEdate, f.value.cImage).subscribe(function (res) {
                console.log("여기여기여기여기");
                // this.router.navigate(["canival-detail", res.json().cid]);
                _this.getCanivalDetail(_this.cId);
            });
        }
    };
    // 사진 선택
    CanivalDetailComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    // 이전글 이동 메소드
    CanivalDetailComponent.prototype.preview = function (cId) {
        var key = parseInt(cId) - 1;
        this.getCanivalDetail(key);
    };
    // 다음글 이동 메소드
    CanivalDetailComponent.prototype.next = function (cId) {
        var key = parseInt(cId) + 1;
        this.getCanivalDetail(key);
    };
    return CanivalDetailComponent;
}());
CanivalDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-canival-detail',
        template: __webpack_require__("../../../../../src/app/canival/canival-detail/canival-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canival/canival-detail/canival-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_canival_service__["a" /* CanivalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_canival_service__["a" /* CanivalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CanivalDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=canival-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/canival/canival-view/canival-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canival/canival-view/canival-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <table class=\"table table-hover\">\r\n    <!-- <colgroup>\r\n      <col width=\"7%\">\r\n      <col width=\"*\">\r\n      <col width=\"15%\">\r\n      <col width=\"10%\">\r\n      <col width=\"7%\">\r\n    </colgroup> -->\r\n    <thead>\r\n      <tr>\r\n        <!-- <th style=\"text-align:center\">글 번호</th>\r\n        <th style=\"text-align:center\">제목</th>\r\n        <th style=\"text-align:center\">작성자</th>\r\n        <th style=\"text-align:center\">시작일</th>\r\n        <th style=\"text-align:center\">종료일</th>\r\n        <th style=\"text-align:center\">조회수</th> -->\r\n        <th class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\">글번호</th>\r\n        <th class=\"col-xs-2 col-sm-4 col-md-4 col-lg-4\">제목</th>\r\n        <th class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">작성자</th>\r\n        <th class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">시작일</th>\r\n        <th class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">종료일</th>\r\n        <th class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\">조회수</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let c of canival | paginate: {itemsPerPage: 15,\r\n                                                currentPage: p}\">\r\n        <td>{{c.cid}}</td>\r\n        <td><a (click)=\"getCanivalDetail(c.cid)\">{{c.ctitle}}</a></td>\r\n        <td>관리자</td>\r\n        <td>{{c.csdate}}</td>\r\n        <td>{{c.cedate}}</td>\r\n        <td>{{c.cviewcnt}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"\">\r\n    <a class=\"btn btn-default pull-right\" [routerLink]=\"['/canival-write']\">글쓰기</a>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <ul class=\"pagination\" style=\"\">\r\n      <pagination-controls (pageChange)=\"p = $event\"\r\n                            directionLinks=\"true\"\r\n                            autoHide=\"true\"\r\n                            previousLabel=\"\"\r\n                            nextLabel=\"\"\r\n                            screenReaderPaginationLabel=\"Pagination\"\r\n                            screenReaderPageLabel=\"page\"\r\n                            screenReaderCurrentLabel=\"You're on page\">\r\n      </pagination-controls>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/canival/canival-view/canival-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanivalViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_canival_service__ = __webpack_require__("../../../../../src/app/_services/canival.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanivalViewComponent = (function () {
    function CanivalViewComponent(canivalService, router) {
        this.canivalService = canivalService;
        this.router = router;
    }
    CanivalViewComponent.prototype.ngOnInit = function () {
        this.getCanivalsView();
    };
    // 축제 리스트 보여주는 메소드
    CanivalViewComponent.prototype.getCanivalsView = function () {
        var _this = this;
        this.canivalService.getCanivalsView().subscribe(function (res) {
            _this.canival = res;
        });
    };
    // 특정 축제 정보 보여주는 메소드
    CanivalViewComponent.prototype.getCanivalDetail = function (cid) {
        this.router.navigate(["canival-detail", cid]);
    };
    return CanivalViewComponent;
}());
CanivalViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-canival-view',
        template: __webpack_require__("../../../../../src/app/canival/canival-view/canival-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canival/canival-view/canival-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_canival_service__["a" /* CanivalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_canival_service__["a" /* CanivalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanivalViewComponent);

var _a, _b;
//# sourceMappingURL=canival-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/canival/canival-write/canival-write.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canival/canival-write/canival-write.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form-horizontal\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" class=\"control-label col-xs-2\">제목</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cTitle\" name=\"cTitle\" placeholder=\"축제 또는 행사명을 적어주세요\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"writer\" class=\"control-label col-xs-2\">작성자</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"관리자\" required value=\"관리자\" readonly>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-xs-2\" for=\"picture\">사진</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"file\" class=\"form-control\" (change)=\"selectFile($event)\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"content\" class=\"control-label col-xs-2\">내용</label>\r\n      <div class=\"col-xs-10\">\r\n        <textarea rows=\"20\" class=\"form-control\" [(ngModel)]=\"cContent\" name=\"cContent\" placeholder=\"상세 내용을 적어주세요.\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" class=\"control-label col-xs-2\">시작일</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cSdate\" name=\"cSdate\" placeholder=\"2017.11.08 처럼 적어주세요\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" class=\"control-label col-xs-2\">종료일</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cEdate\" name=\"cEdate\" placeholder=\"2017.11.10 처럼 적어주세요\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-xs-offset-2 col-xs-10\">\r\n        <a [routerLink]=\"['/canival-view']\" class=\"btn btn-primary\">목록</a>\r\n        <button type=\"submit\" class=\"btn btn-primary\" name=\"button\" [disabled]=\"f.invalid\">저장</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/canival/canival-write/canival-write.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanivalWriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_canival_service__ = __webpack_require__("../../../../../src/app/_services/canival.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanivalWriteComponent = (function () {
    function CanivalWriteComponent(canivalService, router) {
        this.canivalService = canivalService;
        this.router = router;
    }
    CanivalWriteComponent.prototype.ngOnInit = function () {
    };
    CanivalWriteComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    CanivalWriteComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (this.selectedFiles == undefined) {
            alert("사진을 첨부해 주십시오.");
        }
        else {
            f.value.cImage = this.selectedFiles.item(0);
            this.canivalService.postAddCanival(f.value.cTitle, f.value.cContent, f.value.cSdate, f.value.cEdate, f.value.cImage).subscribe(function (res) {
                _this.router.navigate(["canival-detail", res.json().cid]);
            });
        }
    };
    return CanivalWriteComponent;
}());
CanivalWriteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-canival-write',
        template: __webpack_require__("../../../../../src/app/canival/canival-write/canival-write.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canival/canival-write/canival-write.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_canival_service__["a" /* CanivalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_canival_service__["a" /* CanivalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanivalWriteComponent);

var _a, _b;
//# sourceMappingURL=canival-write.component.js.map

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating {\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bs-example container\">\r\n\r\n  <div class=\"row\">\r\n    <h3>{{member.mnickname}} 님의 즐겨찾기</h3>\r\n    <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div>\r\n    <div  class=\"col-md-6\" *ngFor=\"let h of hotlistDetail  | paginate: {itemsPerPage: 5,\r\n                                                                        currentPage: p}\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >\r\n          즐겨찾기 번호: {{h.hid}}\r\n          <div class=\"pull-right\">\r\n            <button type=\"button\" class=\"btn btn-xs btn-default\" (click)=\"getFoodTruck(h.tid)\">바로가기</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-body\" >\r\n          <div class=\"col-sm-3\">\r\n            <img src=\"http://localhost:8080/image/{{h.timage}}\" alt=\"image X\" width=\"100px\" height=\"100px\">\r\n          </div>\r\n          <div class=\"col-sm-9\">\r\n            가게이름 : {{h.tname}} <br>\r\n            <div class=\"rating label-left\">\r\n              <div class=\"lavel-value\">{{h.tavg}}</div>\r\n              <div class=\"star-container\">\r\n                <star-rating-comp\r\n                  [starType]=\"'svg'\"\r\n                  [hoverEnabled]=\"false\"\r\n                  [size]=\"'medium'\"\r\n                  [direction]=\"'ltr'\"\r\n                  [rating]=\"h.tavg\"\r\n                  [step]=\"0.1\"\r\n                  [showHalfStars]=\"true\"\r\n                  [readOnly]=\"true\">\r\n              </star-rating-comp>\r\n              </div>\r\n            </div>\r\n            주인장 한마디: {{h.tcomment}}<br>\r\n            영업시간: {{h.topen}} ~ {{h.tclose}}<br>\r\n            주소 : {{h.taddress}}<br>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer clearfix\">\r\n          <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/favorites']\" class=\"text-warning\" (click)=\"removeHotlist(h)\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <ul class=\"pagination\" style=\"\">\r\n      <pagination-controls (pageChange)=\"p = $event\"\r\n                            directionLinks=\"true\"\r\n                            autoHide=\"true\"\r\n                            previousLabel=\"\"\r\n                            nextLabel=\"\"\r\n                            screenReaderPaginationLabel=\"Pagination\"\r\n                            screenReaderPageLabel=\"page\"\r\n                            screenReaderCurrentLabel=\"You're on page\">\r\n      </pagination-controls>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hotlist_service__ = __webpack_require__("../../../../../src/app/_services/hotlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesComponent = (function () {
    function FavoritesComponent(hotlistService, http, router) {
        this.hotlistService = hotlistService;
        this.http = http;
        this.router = router;
        this.session = sessionStorage.getItem('member');
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.getHotlistDetail();
    };
    FavoritesComponent.prototype.getHotlistDetail = function () {
        var _this = this;
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
        }
        this.hotlistService.getHotlistDetail()
            .subscribe(function (result) {
            // console.log('hotlist detail='+result);
            _this.hotlistDetail = result;
        });
    };
    FavoritesComponent.prototype.removeHotlist = function (hotlistdetail) {
        var _this = this;
        this.hotlistService.removeHotlist(hotlistdetail)
            .subscribe(function (result) {
            console.log('hotlist remove = ' + result);
            _this.message = result;
            _this.getHotlistDetail();
        });
    };
    FavoritesComponent.prototype.getFoodTruck = function (tid) {
        console.log(tid);
        this.router.navigate(["truck-info", tid]);
    };
    return FavoritesComponent;
}());
FavoritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-favorites',
        template: __webpack_require__("../../../../../src/app/favorites/favorites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/favorites/favorites.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_hotlist_service__["a" /* HotlistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_hotlist_service__["a" /* HotlistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], FavoritesComponent);

var _a, _b, _c;
//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 700px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-content\" style=\"max-width:1400px;margin-top:80px\">\r\n  <div class=\"container\">\r\n\r\n    <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">My Google Maps</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n  <ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"nav-item active\">\r\n  <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n</li>\r\n<li class=\"nav-item\">\r\n<a class=\"nav-link\" href=\"#\">Link</a>\r\n</li>\r\n</ul>\r\n<form class=\"form-inline my-2 my-lg-0\">\r\n<input class=\"form-control\" style=\"width: 450px;\" #search placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"\r\ntype=\"text\">\r\n</form>\r\n<button type=\"button\" name=\"button\" (click)=\"saveLocal()\">현재 위치 마커</button>\r\n</div>\r\n</nav> -->\r\n\r\n<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\" (mapClick)=\"mapClick($event)\" #gm>\r\n  <agm-marker *ngFor=\"let truck of trucks; let i = index\" [latitude]=\"truck.tlat\" [longitude]=\"truck.tlng\" (markerClick)=\"gm.lastOpen?.close(); gm.lastOpen = infoWindow; clickedMarker(truck, i)\">\r\n    <agm-info-window [disableAutoPan]=\"true\" #infoWindow>\r\n      <div class=\"\">\r\n        <strong>{{truck.tname}}</strong>\r\n        <div class=\"\">\r\n          {{truck.tcomment}}<br>\r\n          Open : {{truck.topen}} ~ Close : {{truck.tclose}}\r\n        </div>\r\n        <button type=\"button\" (click)=\"getFoodTruck(truck.tid)\">바로가기</button>\r\n      </div>\r\n    </agm-info-window>\r\n  </agm-marker>\r\n</agm-map>\r\n\r\n\r\n<div class=\"alert alert-warning\" role=\"alert\">\r\n  현재 지도 위치 : {{latitude}}, {{longitude}}\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_google_map_service__ = __webpack_require__("../../../../../src/app/_services/google-map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//npm install --save @agm/core 설치필요




var GoogleMapComponent = (function () {
    function GoogleMapComponent(mapsAPILoader, ngZone, mapService, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapService = mapService;
        this.router = router;
        this.trucks = [];
        this.markers = [
            {
                latitude: 37.483038487116616,
                longitude: 126.90061283105024,
            }
        ];
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        //set google maps defaults
        this.zoom = 16;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.mapTypeId = 'roadmap'; // 'roadmap'|'hybrid'|'satellite'|'terrain'
        //set current position
        this.setCurrentPosition();
        this.getAllTrucks();
        //load Places Autocomplete
        // this.mapsAPILoader.load().then(() => {
        //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //     types: ["geocode"]
        //   });
        //   autocomplete.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //
        //       //verify result
        //       if (place.geometry === undefined || place.geometry === null) {
        //         return;
        //       }
        //
        //       //set latitude, longitude and zoom
        //       this.latitude = place.geometry.location.lat();
        //       this.longitude = place.geometry.location.lng();
        //       this.zoom = 16;
        //     });
        //   });
        // });
    };
    GoogleMapComponent.prototype.mapClick = function (event) {
        console.log("mapClick called : " + event.coords);
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    };
    GoogleMapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        console.log('set=' + navigator);
        console.log('set=' + navigator.geolocation.getCurrentPosition);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                console.log('lat' + _this.latitude);
                _this.longitude = position.coords.longitude;
                console.log('lng' + _this.longitude);
                _this.zoom = 16;
                console.log(position.coords);
            });
        }
    };
    GoogleMapComponent.prototype.getAllTrucks = function () {
        var _this = this;
        this.mapService.getTruckAllList().subscribe(function (trucks) {
            for (var i = 0; i < trucks.length; i++) {
                _this.trucks.push(trucks[i]);
            }
        });
        console.log(this.trucks);
    };
    GoogleMapComponent.prototype.saveLocal = function () {
        console.log(navigator.geolocation.getCurrentPosition);
    };
    GoogleMapComponent.prototype.clickedMarker = function (marker, index) {
        console.log(marker);
    };
    GoogleMapComponent.prototype.getFoodTruck = function (tid) {
        console.log(tid);
        this.router.navigate(["truck-info", tid]);
    };
    return GoogleMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], GoogleMapComponent.prototype, "searchElementRef", void 0);
GoogleMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-google-map',
        template: __webpack_require__("../../../../../src/app/google-map/google-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/google-map/google-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_google_map_service__["a" /* GoogleMapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_google_map_service__["a" /* GoogleMapService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], GoogleMapComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=google-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/join-page/join-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/join-page/join-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  join-page works!\r\n</p>\r\n<div class=\"container\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>회원가입</h2>\r\n    <form name=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid  }\">\r\n        <label for=\"email\">이메일</label>\r\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\"  name=\"email\" placeholder=\"Email\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        <!-- <div *ngIf=\"f.submitted && !email.valid && errorMessage\" class=\"help-block\">Email is required</div> -->\r\n      </div>\r\n      <div class=\"form-group\" >\r\n        <label for=\"password\">비밀번호</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"password\"  name=\"password\" placeholder=\"password\" required>\r\n      </div>\r\n      <div class=\"form-group\" >\r\n        <label for=\"nickname\">닉네임</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nickname\"  name=\"nickname\" placeholder=\"name\" required>\r\n      </div>\r\n\r\n      <div class=\"form-check form-check-inline\">\r\n        <label class=\"form-check-label\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"registype\" [(ngModel)]=\"registype\" id=\"inlineRadio1\" value=\"1\"> 일반회원(1)\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check form-check-inline\">\r\n        <label class=\"form-check-label\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"registype\" [(ngModel)]=\"registype\" id=\"inlineRadio2\" value=\"2\"> 사업자회원(2)\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\">\r\n          <b class=\"glyphicon glyphicon-plus\"></b>SEND\r\n        </button>\r\n        <a [routerLink]=\"['/login-page']\" class=\"btn btn-link\">취소</a>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/join-page/join-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_member_service__ = __webpack_require__("../../../../../src/app/_services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoinPageComponent = (function () {
    function JoinPageComponent(memberService, router) {
        this.memberService = memberService;
        this.router = router;
        this.model = {};
    }
    JoinPageComponent.prototype.ngOnInit = function () {
    };
    JoinPageComponent.prototype.onSubmit = function (f) {
        if (f.valid) {
            var member = f.value;
            this.addMember(member.email, member.password, member.nickname, member.registype);
        }
    };
    JoinPageComponent.prototype.addMember = function (email, password, nickname, registype) {
        var _this = this;
        console.log('registype=' + registype);
        this.memberService.addMember(email, password, nickname, registype)
            .subscribe(function (res) {
            var member = res;
            if (member.merror !== null) {
                _this.errorMessage = member.merror;
                console.log(_this.errorMessage);
            }
            else {
                _this.router.navigate(['/login-page']);
            }
        });
    };
    return JoinPageComponent;
}());
JoinPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-join-page',
        template: __webpack_require__("../../../../../src/app/join-page/join-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/join-page/join-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], JoinPageComponent);

var _a, _b;
//# sourceMappingURL=join-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\r\n\twidth: 360px;\r\n\tpadding: 8% 0 0;\r\n\tmargin: auto;\r\n}\r\n\r\n.form {\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tbackground: #FFFFFF;\r\n\tmax-width: 360px;\r\n\tmargin: 0 auto 100px;\r\n\tpadding: 45px;\r\n\ttext-align: center;\r\n\tbox-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login-page works!\r\n</p>\r\n<div class=\"login-page\">\r\n\t<div class=\"form\">\r\n\t\t<form name=\"form\" class=\"login-form\" (ngSubmit)=\"f.form.valid && login(f)\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !memail.valid }\">\r\n        <label for=\"memail\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"memail\" placeholder=\"Email\" [(ngModel)]=\"model.memail\" #memail=\"ngModel\"  required />\r\n        <div *ngIf=\"f.submitted && !memail.valid\" class=\"help-block\">Email is required</div>\r\n      </div>\r\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !mpassword.valid }\">\r\n        <label for=\"mpassword\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"mpassword\" placeholder=\"Password\" [(ngModel)]=\"model.mpassword\" #mpassword=\"ngModel\" required />\r\n        <div *ngIf=\"f.submitted && !mpassword.valid\" class=\"help-block\">Password is required</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" [disabled]=\"f.invalid\">Login</button>\r\n      </div>\r\n      <p class=\"message\">Not registered? <a href=\"#\">Create an account</a></p>\r\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {};
        this.error = '';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.login = function (f) {
        var _this = this;
        this.authService.login(this.model.memail, this.model.mpassword)
            .then(function (result) {
            console.log('login log = ' + result);
            var member = JSON.parse(result);
            console.log('login member = ' + member.memail);
            if (member.merror === null) {
                _this.session = sessionStorage.getItem('member');
                _this.authService.checkTruck(_this.model.memail);
                _this.router.navigate(['/']);
            }
            else {
                _this.session = null;
                _this.error = member.merror;
            }
            // if(result === "fail") {
            //   this.session = null;
            //   this.error = "login fail";
            // } else {
            //   // console.log("login component  success = " + result);
            //   this.session = sessionStorage.getItem('member');
            //   this.router.navigate(['/']);
            // }
        });
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-home/main-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n  background-color: #f2f2f2;\r\n  padding: 25px;\r\n}\r\n\r\n.carousel-inner img {\r\n  width: 100%;\r\n  height: 80%;\r\n  margin: auto;\r\n  min-height: 200px;\r\n\r\n}\r\n\r\n.service-description {\r\n  margin: 20px 0px 20px 0px;\r\n}\r\n\r\n/* Hide the carousel text when the screen is less than 600 pixels wide */\r\n\r\n@media (max-width: 600px) {\r\n  .carousel-caption {\r\n    display: none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-home/main-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"item active\">\r\n      <img src=\"http://localhost:8080/image/truck/truck_image1.jpg\" alt=\"Image\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>food truck</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"http://localhost:8080/image/truck/truck_image2.jpg\" alt=\"Image\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>food truck</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"http://localhost:8080/image/truck/truck_image3.jpg\" alt=\"Image\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>food truck</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Left and right controls -->\r\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>\r\n\r\n<div class=\"container text-center\">\r\n  <!-- <h3>FoodTruck 제공 기능</h3><br> -->\r\n  <br><br>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 service-description\">\r\n      <a [routerLink]=\"['/truck-map']\"><i class=\"fa fa-map-marker fa-5x\" aria-hidden=\"true\"></i></a><br>\r\n      <h4><strong>트럭지도</strong></h4>\r\n      <p>\r\n        현재 위치를 기반으로 <br>\r\n        등록된 푸드트럭의 위치를 제공합니다\r\n      </p>\r\n      <!-- <img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"> -->\r\n      <!-- <button type=\"button\" class=\"submit\" routerLink=\"truck-map\">트럭지도</button> -->\r\n    </div>\r\n    <div class=\"col-sm-4 service-description\">\r\n      <a [routerLink]=\"['/truck-list']\"><i class=\"fa fa-th-list fa-5x\" aria-hidden=\"true\"></i></a><br>\r\n      <h4><strong>트럭리스트</strong></h4>\r\n      <p>\r\n        모든 트럭을 리스트 형식으로 보고 <br>\r\n        주소 검색을 제공합니다.\r\n      </p>\r\n      <!-- <img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\r\n      <button type=\"button\" class=\"submit\" routerLink=\"favorites\">나의즐겨찾기</button> -->\r\n    </div>\r\n    <div class=\"col-sm-4 service-description\">\r\n      <a [routerLink]=\"['/canival-view']\"><i class=\"fa fa-calendar fa-5x\" aria-hidden=\"true\"></i></a><br>\r\n      <h4><strong>축제정보</strong></h4>\r\n      <p>\r\n        서울지역에 있는 축제 정보를 제공합니다.<br><br>\r\n      </p>\r\n      <!-- <img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\r\n      <button type=\"button\" class=\"submit\" routerLink=\"truck-list\">트럭리스트</button> -->\r\n    </div>\r\n    <div class=\"col-sm-4 service-description\" *ngIf=\"session\">\r\n      <a [routerLink]=\"['/reviews']\"><i class=\"fa fa-commenting fa-5x\" aria-hidden=\"true\"></i></a><br>\r\n      <h4><strong>나의리뷰</strong></h4>\r\n      <p>\r\n        내의 리뷰를 모두 볼 수 있습니다.<br><br>\r\n      </p>\r\n      <!-- <img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\r\n      <button type=\"button\" class=\"submit\" routerLink=\"reviews\">나의리뷰</button> -->\r\n    </div>\r\n    <div class=\"col-sm-4 service-description\" *ngIf=\"session\">\r\n      <a [routerLink]=\"['/favorites']\"><i class=\"fa fa-gratipay fa-5x\" aria-hidden=\"true\"></i></a><br>\r\n      <h4><strong>나의즐겨찾기</strong></h4>\r\n      <p>\r\n        트럭을 즐겨찾기 할 수 있습니다.<br><br>\r\n      </p>\r\n      <!-- <img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\r\n      <button type=\"button\" class=\"submit\" routerLink=\"canival-view\">축제정보</button> -->\r\n    </div>\r\n    <div class=\"col-sm-4 service-description\">\r\n      <a [routerLink]=\"['/support']\"><i class=\"fa fa-question-circle fa-5x\" aria-hidden=\"true\"></i></a><br>\r\n      <h4><strong>고객센터</strong></h4>\r\n      <p>\r\n        문의글을 남겨주세요. <br>\r\n      </p>\r\n      <!-- <img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\r\n      <button type=\"button\" class=\"submit\" routerLink=\"support\">고객센터</button> -->\r\n    </div>\r\n  </div>\r\n</div><br>\r\n\r\n<footer class=\"container-fluid text-center\">\r\n  <span><i class=\"fa fa-comments-o fa-1x\" aria-hidden=\"true\"></i> food truck</span>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-home/main-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHomeComponent = (function () {
    function MainHomeComponent() {
        this.session = sessionStorage.getItem('member');
    }
    MainHomeComponent.prototype.ngOnInit = function () {
    };
    return MainHomeComponent;
}());
MainHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-home',
        template: __webpack_require__("../../../../../src/app/main-home/main-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-home/main-home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainHomeComponent);

//# sourceMappingURL=main-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/member-profile/member-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member-profile/member-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>회원 정보 수정</h2>\r\n    <form name=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\" >\r\n        <label for=\"email\">이메일</label>\r\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"member.memail\" id=\"email\" name=\"email\" placeholder=\"Email\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" readonly=\"readonly\" value=\"{{member.memail}}\" >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">비밀번호</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"member.mpassword\" id=\"password\" name=\"password\" placeholder=\"password\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"nickname\">닉네임</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"member.mnickname\" id=\"nickname\" name=\"nickname\" placeholder=\"name\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\">\r\n          <b class=\"glyphicon glyphicon-plus\"></b>저장\r\n        </button>\r\n        <a [routerLink]=\"['/main-home']\" class=\"btn btn-link\">취소</a>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/member-profile/member-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_member_service__ = __webpack_require__("../../../../../src/app/_services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberProfileComponent = (function () {
    function MemberProfileComponent(memberService, router) {
        this.memberService = memberService;
        this.router = router;
    }
    MemberProfileComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('member')) {
            this.member = JSON.parse(sessionStorage.getItem('member'));
        }
        console.log(this.member);
    };
    MemberProfileComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.valid) {
            this.memberService.modifyMember(this.member).subscribe(function (res) {
                _this.member = res;
                sessionStorage.setItem('member', JSON.stringify(_this.member));
                console.log(sessionStorage.getItem('member'));
                _this.router.navigateByUrl("main-home");
            });
        }
    };
    return MemberProfileComponent;
}());
MemberProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-member-profile',
        template: __webpack_require__("../../../../../src/app/member-profile/member-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/member-profile/member-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_member_service__["a" /* MemberService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MemberProfileComponent);

var _a, _b;
//# sourceMappingURL=member-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-list/menu-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-list/menu-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h3>푸드리스트</h3>\r\n    <!-- 화면에 결과 메세지를 띄우고 싶을 때, 지금은 alert사용 -->\r\n    <div  class=\"col-md-4\" *ngFor=\"let f of foods\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >음식 번호: {{f.fid}}</div>\r\n        <div class=\"panel-body\" >\r\n          <div class=\"col-sm-5 \" >\r\n            <img src=\"http://localhost:8080/image/{{f.fimage}}\" alt=\"img X\" width=\"120px\" height=\"120px\">\r\n          </div>\r\n          <div class=\"col-sm-7 \">\r\n            <strong>{{f.fname}}</strong> <br>\r\n            {{f.fprice}} 원<br>\r\n            <div class=\"description\" style=\"font-size:0.8em\">\r\n              {{f.fdescription}}<br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer clearfix\" *ngIf=\"check()\">\r\n          <div class=\"pull-right\">\r\n            <a [routerLink]=\"['/truck-info', tid]\" class=\"text-warning\" (click)=\"removeFood(f)\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"\" *ngIf=\"check()\">\r\n    <form class=\"form-horizontal\" name=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"control-label col-xs-2\">이름</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"name\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"price\" class=\"control-label col-xs-2\">가격</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"price\" name=\"price\" placeholder=\"price\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\" class=\"control-label col-xs-2\">설명</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"description\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"sr-only\" class=\"control-label col-xs-2\" for=\"image\">사진</label>\r\n        <div class=\"col-xs-10\">\r\n          <input #myfile type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectFile($event)\">\r\n          <img *ngIf=\"preview\" src=\"{{url}}\" alt=\"\" width=\"120px\" height=\"120px\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-xs-offset-2 col-xs-10\">\r\n          <!-- <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div> -->\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Add</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu-list/menu-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_food_service__ = __webpack_require__("../../../../../src/app/_services/food.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuListComponent = (function () {
    function MenuListComponent(foodService) {
        this.foodService = foodService;
        this.foods = [];
        this.preview = true;
        this.session = sessionStorage.getItem('member');
        console.log('top#component# constructor session=' + this.session);
        if (this.session !== null) {
            var member = JSON.parse(this.session);
            this.email = member.memail;
        }
    }
    MenuListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.getObservable().subscribe(function (messege) {
            if (messege.result = 'ok') {
                _this.foodService.getAllfoods(_this.tid).subscribe(function (res) {
                    console.log(res);
                    _this.foods = res.json();
                });
            }
        });
        // this.foodServiceService.getAllfoods().subscribe(res => {
        //   console.log(res.json())
        //   this.foods = res.json();
        // });
        this.foodService.getAllfoods(this.tid).subscribe(function (res) {
            console.log('foodtruck==' + res.text());
            _this.foods = res.json();
            _this.check();
        });
    };
    //파일 추가할 때, 미리보기 기능
    MenuListComponent.prototype.selectFile = function (event) {
        var _this = this;
        this.preview = true;
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    MenuListComponent.prototype.onSubmit = function (f) {
        if (this.selectedFiles === undefined) {
            alert('사진을 등록하세요');
        }
        else {
            f.value.file = this.selectedFiles.item(0);
            this.foodService.foodRegist(f.value.name, f.value.price, f.value.description, f.value.file, this.tid);
            f.resetForm();
            console.log(this.selectedFiles + "/////////////////");
            this.preview = false;
        }
    };
    MenuListComponent.prototype.check = function () {
        //트럭아이디로 주인 이메일을 찾기, 로그인한 아이디와 동일한지 체크
        if (this.email === this.tmember) {
            return true;
        }
        else {
            return false;
        }
    };
    MenuListComponent.prototype.removeFood = function (food) {
        console.log('fff=' + food.fname);
        this.foodService.removeFood(food);
    };
    return MenuListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('tid'),
    __metadata("design:type", String)
], MenuListComponent.prototype, "tid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('tmember'),
    __metadata("design:type", String)
], MenuListComponent.prototype, "tmember", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myfile'),
    __metadata("design:type", Object)
], MenuListComponent.prototype, "myfile", void 0);
MenuListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-list',
        template: __webpack_require__("../../../../../src/app/menu-list/menu-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-list/menu-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */]) === "function" && _a || Object])
], MenuListComponent);

var _a;
//# sourceMappingURL=menu-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating {\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h3>{{member.mnickname}} 님의 리뷰</h3>\r\n    <!-- 화면에 결과 메세지를 띄우고 싶을 때, 지금은 alert사용 -->\r\n    <!-- <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div> -->\r\n    <div  class=\"col-md-12\" *ngFor=\"let r of myReviews  | paginate: {itemsPerPage: 5,\r\n                                                                    currentPage: p}\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >리뷰 번호: {{r.rid}}</div>\r\n        <div class=\"panel-body\" >\r\n          <div class=\"col-md-2 col-sm-3\" *ngIf=\"r.rimage\">\r\n            <img src=\"http://localhost:8080/image/{{r.rimage}}\" alt=\"x\" width=\"120px\" height=\"120px\">\r\n          </div>\r\n          <div class=\"col-md-10 col-sm-9\">\r\n            해당트럭: {{r.rtruck}} <span style=\"color: gray; font-size: 0.7em\"> | 작성일: {{r.rdate}}</span><br>\r\n            <div class=\"rating\">\r\n              <div class=\"star-container\">\r\n                <star-rating-comp\r\n                  [starType]=\"'svg'\"\r\n                  [hoverEnabled]=\"false\"\r\n                  [staticColor]=\"'ok'\"\r\n                  [size]=\"'medium'\"\r\n                  [direction]=\"'ltr'\"\r\n                  [rating]=\"r.rscore\"\r\n                  [showHalfStars]=\"true\"\r\n                  [readOnly]=\"true\">\r\n              </star-rating-comp>\r\n              </div>\r\n            </div>\r\n            내용: {{r.rcomment}}<br>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <ul class=\"pagination\" style=\"\">\r\n      <pagination-controls (pageChange)=\"p = $event\"\r\n                            directionLinks=\"true\"\r\n                            autoHide=\"true\"\r\n                            previousLabel=\"\"\r\n                            nextLabel=\"\"\r\n                            screenReaderPaginationLabel=\"Pagination\"\r\n                            screenReaderPageLabel=\"page\"\r\n                            screenReaderCurrentLabel=\"You're on page\">\r\n      </pagination-controls>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__("../../../../../src/app/_services/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewsComponent = (function () {
    function ReviewsComponent(http, router, reviewService) {
        this.http = http;
        this.router = router;
        this.reviewService = reviewService;
        var session = sessionStorage.getItem('member');
        if (session !== null) {
            this.member = JSON.parse(session);
        }
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.getMyReview();
    };
    ReviewsComponent.prototype.getMyReview = function () {
        var _this = this;
        this.reviewService.getMyReview()
            .subscribe(function (result) {
            // console.log('reviewService myReviews='+result);
            _this.myReviews = result;
        });
    };
    // onSubmit(f) {
    //   if (f.valid) {
    //     var r = f.value;
    //     this.addReview(r.comment, r.image, r.score, this.member.memail, r.truck);
    //   }
    // }
    //실제로 리뷰를 등록할 때는 해당 트럭의 트럭정보에 가서 리뷰를 입력.
    //따라서 실제 서비스를 할 때 트럭아이디ㄴ는 아땋게 가져오나?
    // addReview(comment:string, image:string, score:number, email:string, truck: number) {
    //   this.reviewService.addReview(comment, image, score, email, truck)
    //     .subscribe(res => {
    //       console.log('addReview = '+res);
    //         // this.message = res;
    //         this.getMyReview();
    //     });
    // }
    ReviewsComponent.prototype.removeReview = function (review) {
        var _this = this;
        this.reviewService.removeReview(review)
            .subscribe(function (result) {
            // this.message = result;
            alert(result);
            _this.getMyReview();
        });
    };
    return ReviewsComponent;
}());
ReviewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reviews',
        template: __webpack_require__("../../../../../src/app/reviews/reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reviews/reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === "function" && _c || Object])
], ReviewsComponent);

var _a, _b, _c;
//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/support/support-detail/support-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".support-content {\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/support/support-detail/support-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <table class=\"table table-view\">\r\n    <!-- <colgroup>\r\n      <col width=\"7%\">\r\n      <col width=\"*\">\r\n      <col width=\"15%\">\r\n      <col width=\"10%\">\r\n      <col width=\"7%\">\r\n    </colgroup> -->\r\n    <thead>\r\n      <tr>\r\n        <th class=\"col-xs-7 col-sm-9 col-md-9 col-lg-9\">\r\n          <span><b>제목 :</b> {{title}}</span>\r\n        </th>\r\n        <th class=\"col-xs-5 col-sm-3 col-md-3 col-lg-3\">\r\n          <!-- <b>작성일 :</b> {{date}} -->\r\n          <span class=\"pull-right\"> {{date}} </span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td colspan=\"2\" class=\"text-right\" >\r\n          <b>작성자</b> : {{member}}\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"2\" height=\"500\" class=\"contents\">\r\n          <div class=\"support-content\">\r\n            {{content}}\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <hr>\r\n  <div class=\"pull-right\">\r\n    <a [routerLink]=\"['/support']\" class=\"btn btn-default\">목록</a>\r\n    <a *ngIf=\"check()\" [routerLink]=\"['/support-update', sid]\" class=\"btn btn-primary\">수정</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/support/support-detail/support-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_support_service__ = __webpack_require__("../../../../../src/app/_services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportDetailComponent = (function () {
    function SupportDetailComponent(supportService, route) {
        this.supportService = supportService;
        this.route = route;
        this.click = false;
    }
    SupportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.sid = params['sid'];
        });
        this.supportService.getObservable().subscribe(function (res) {
            console.log(res.result);
            if (res.result2 === 'ok') {
                _this.supportService.getDetail(_this.sid).subscribe(function (res) {
                    console.log(res.json());
                    _this.title = res.json().stitle;
                    _this.date = res.json().sdate;
                    _this.content = res.json().scontent;
                    _this.member = res.json().smember;
                });
            }
        });
        this.supportService.getDetail(this.sid).subscribe(function (res) {
            console.log(res.json());
            _this.title = res.json().stitle;
            _this.date = res.json().sdate;
            _this.content = res.json().scontent;
            _this.member = res.json().smember;
        });
    };
    //로그인한 사람과 글 작성자가 동일 인물인지 체크
    SupportDetailComponent.prototype.check = function () {
        var m = JSON.parse(sessionStorage.getItem('member'));
        if (this.member === m.memail) {
            console.log('check' + m.memail);
            return true;
        }
        else {
            return false;
        }
    };
    //업데이트 버튼을 누르면 수정가능하게 해줌.
    SupportDetailComponent.prototype.updateButton = function () {
        this.click = !this.click;
    };
    return SupportDetailComponent;
}());
SupportDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-support-detail',
        template: __webpack_require__("../../../../../src/app/support/support-detail/support-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/support/support-detail/support-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_support_service__["a" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_support_service__["a" /* SupportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], SupportDetailComponent);

var _a, _b;
//# sourceMappingURL=support-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/support/support-update/support-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/support/support-update/support-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form-horizontal\"  #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n    <div class=\"form-group\" hidden>\r\n\t\t\t<label for=\"sid\" class=\"control-label col-xs-2\">ID</label>\r\n\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"sid\" name=\"sid\" value=\"{{sid}}\" placeholder=\"sid\" required readonly>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\" class=\"control-label col-xs-2\">제목</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" id=\"title\" name=\"title\" value=\"{{title}}\" placeholder=\"Title\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"writer\" class=\"control-label col-xs-2\">작성자</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"writer\" name=\"writer\" placeholder=\"Writer\" required\r\n          value=\"{{member}}\" readonly>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"content\" class=\"control-label col-xs-2\">내용</label>\r\n      <div class=\"col-xs-10\">\r\n        <textarea class=\"form-control\" rows=\"20\" [(ngModel)]=\"content\" id=\"content\" name=\"content\" placeholder=\"Content\" required>{{content}}</textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"regDate\" class=\"control-label col-xs-2\">작성일</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"regDate\" name=\"regDate\" placeholder=\"Date\" required\r\n        value=\"{{date}}\"readonly>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-xs-offset-2 col-xs-10\">\r\n        <a [routerLink]=\"['/support-detail', sid]\" class=\"btn btn-primary\">수정취소</a>\r\n        <button type=\"submit\"  class=\"btn btn-primary\">수정완료</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/support/support-update/support-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_support_service__ = __webpack_require__("../../../../../src/app/_services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportUpdateComponent = (function () {
    function SupportUpdateComponent(supportService, route, router) {
        this.supportService = supportService;
        this.route = route;
        this.router = router;
        this.click = false;
    }
    SupportUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.sid = params['sid'];
        });
        this.supportService.getDetail(this.sid).subscribe(function (res) {
            console.log(res.json());
            _this.title = res.json().stitle;
            _this.date = res.json().sdate;
            _this.content = res.json().scontent;
            _this.member = res.json().smember;
        });
    };
    //업데이트할 때, 데이터 보냄.
    SupportUpdateComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        if (f.valid) {
            this.updateSupport(f.value.sid, f.value.title, f.value.content);
        }
    };
    SupportUpdateComponent.prototype.updateSupport = function (sid, stitle, scontent) {
        console.log(sid + "," + stitle + "," + scontent);
        this.supportService.updateSupport(sid, stitle, scontent);
        this.router.navigate(['/support-detail', sid]);
    };
    return SupportUpdateComponent;
}());
SupportUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-support-update',
        template: __webpack_require__("../../../../../src/app/support/support-update/support-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/support/support-update/support-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_support_service__["a" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_support_service__["a" /* SupportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SupportUpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=support-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/support/support-write/support-write.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/support/support-write/support-write.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>문의하기</h2>\r\n\t<form class=\"form-horizontal\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"title\" class=\"control-label col-xs-2\">제목</label>\r\n\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Title\" required>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"writer\" class=\"control-label col-xs-2\">작성자</label>\r\n\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"writer\" value=\"{{member.memail}}\" required readonly>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"content\" class=\"control-label col-xs-2\">내용</label>\r\n\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t<textarea rows=\"20\" class=\"form-control\" [(ngModel)]=\"content\" name=\"content\" placeholder=\"Content\" required></textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"col-xs-offset-2 col-xs-10\">\r\n\t\t\t\t<a [routerLink]=\"['/support']\" class=\"btn btn-primary\">목록</a>\r\n        <button type=\"submit\" class=\"btn btn-primary\" name=\"button\">작성완료</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/support/support-write/support-write.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportWriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_support_service__ = __webpack_require__("../../../../../src/app/_services/support.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportWriteComponent = (function () {
    function SupportWriteComponent(supportService, router) {
        this.supportService = supportService;
        this.router = router;
    }
    SupportWriteComponent.prototype.ngOnInit = function () {
        this.session = sessionStorage.getItem('member');
        if (this.session !== null) {
            this.member = JSON.parse(this.session);
            this.email = this.member.memail;
        }
    };
    SupportWriteComponent.prototype.onSubmit = function (f) {
        var _this = this;
        console.log(f.value);
        this.supportService.addSupport(f.value, this.member);
        this.supportService.getObservable().subscribe(function (message) {
            if (message.result == 'ok') {
                _this.supportService.getList();
                _this.router.navigate(['/support']);
            }
        });
    };
    return SupportWriteComponent;
}());
SupportWriteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-support-write',
        template: __webpack_require__("../../../../../src/app/support/support-write/support-write.component.html"),
        styles: [__webpack_require__("../../../../../src/app/support/support-write/support-write.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_support_service__["a" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_support_service__["a" /* SupportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SupportWriteComponent);

var _a, _b;
//# sourceMappingURL=support-write.component.js.map

/***/ }),

/***/ "../../../../../src/app/support/support.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>고객센터</h2>\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\">글번호</th>\r\n        <th class=\"col-xs-5 col-sm-6 col-md-6 col-lg-6\">제목</th>\r\n        <th class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">작성자</th>\r\n        <th class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">작성일</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let s of supports | paginate: {itemsPerPage: 15,\r\n                                                currentPage: p}\">\r\n        <td>{{s.sid}}</td>\r\n        <td><a [routerLink]=\"['/support-detail', s.sid]\">{{s.stitle}}</a></td>\r\n        <td>{{s.smember}}</td>\r\n        <td>{{s.sdate}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"\">\r\n    <a class=\"btn btn-default pull-right\" routerLink=\"write\">글쓰기</a>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <ul class=\"pagination\" style=\"\">\r\n      <pagination-controls (pageChange)=\"p = $event\"\r\n                            directionLinks=\"true\"\r\n                            autoHide=\"true\"\r\n                            previousLabel=\"\"\r\n                            nextLabel=\"\"\r\n                            screenReaderPaginationLabel=\"Pagination\"\r\n                            screenReaderPageLabel=\"page\"\r\n                            screenReaderCurrentLabel=\"You're on page\">\r\n      </pagination-controls>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <!-- <star-rating-comp\r\n    [id]=\"starRatingConfig.id\"\r\n    [rating]=\"starRatingConfig.rating\"\r\n    [step]=\"starRatingConfig.step\"\r\n    [showHalfStars]=\"starRatingConfig.showHalfStars\"\r\n    [numOfStars]=\"starRatingConfig.numOfStars\"\r\n    [size]=\"starRatingConfig.size\"\r\n    [space]=\"starRatingConfig.space\"\r\n    [staticColor]=\"starRatingConfig.staticColor\"\r\n    [disabled]=\"starRatingConfig.disabled\"\r\n    [hoverEnabled]=\"starRatingConfig.hoverEnabled\"\r\n    [starType]=\"starRatingConfig.starType\"\r\n    [labelText]=\"starRatingConfig.labelText\"\r\n    [labelPosition]=\"starRatingConfig.labelPosition\"\r\n\r\n    [speed]=\"starRatingConfig.speed\"\r\n    [direction]=\"starRatingConfig.direction\"\r\n    [readOnly]=\"starRatingConfig.readOnly\"\r\n    [getColor]=\"starRatingConfig.getColor\"\r\n    [getHalfStarVisible]=\"starRatingConfig.getHalfStarVisible\"\r\n    (onHoverRatingChange)=\"starRatingConfig.onHoverRatingChange($event)\"\r\n    (onClick)=\"starRatingConfig.onClick($event)\"\r\n    (onRatingChange)=\"starRatingConfig.onRatingChange($event)\">\r\n</star-rating-comp> -->\r\n<hr>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_support_service__ = __webpack_require__("../../../../../src/app/_services/support.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportComponent = (function () {
    function SupportComponent(supportService, router) {
        this.supportService = supportService;
        this.router = router;
        this.supports = [];
        this.rating = 0;
    }
    SupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.supportService.getList().subscribe(function (res) {
            console.log(res.json());
            _this.supports = res.json();
        });
    };
    return SupportComponent;
}());
SupportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-support',
        template: __webpack_require__("../../../../../src/app/support/support.component.html"),
        styles: [__webpack_require__("../../../../../src/app/support/support.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_support_service__["a" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_support_service__["a" /* SupportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SupportComponent);

var _a, _b;
//# sourceMappingURL=support.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-nav/top-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n\t\t\t\tdata-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"navbar-brand\" routerLink=\"\">Home</a>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n        <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\r\n\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"badge\">메뉴</span> <span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n            <li routerLinkActive=\"active\"><a routerLink=\"truck-map\">트럭지도</a></li>\r\n    \t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"truck-list\">트럭리스트</a></li>\r\n            <li routerLinkActive=\"active\" *ngIf=\"check2()\"><a routerLink=\"truck-regist\">트럭등록</a></li>\r\n            <li routerLinkActive=\"active\" *ngIf=\"check3()\"><a routerLink=\"truck-info/{{tid}}\">나의 트럭가기 tid: {{tid}}</a></li>\r\n            <li routerLinkActive=\"active\"><a routerLink=\"canival-view\">축제</a></li>\r\n    \t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"support\">고객센터</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n        <li *ngIf=\"!session\"><a routerLink=\"join-page\">join-page</a></li>\r\n        <li *ngIf=\"!session\"><a routerLink=\"login-page\">Login</a></li>\r\n\r\n        <li class=\"dropdown\" *ngIf=\"session\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\r\n\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"badge\">{{email}}</span> <span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"member-profile\">회원정보수정</a></li>\r\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"favorites\">나의 즐겨찾기</a></li>\r\n\t\t\t\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"reviews\">나의 리뷰</a></li>\r\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n            <li routerLinkActive=\"active\"><a href=\"/login-page\" (click)=\"logout()\"><b class=\"glyphicon glyphicon-log-out\"></b> logout</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\r\n      </ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopNavComponent = (function () {
    function TopNavComponent(authService, router, truckService) {
        this.authService = authService;
        this.router = router;
        this.truckService = truckService;
        this.session = sessionStorage.getItem('member');
        console.log('top#component# constructor session=' + this.session);
        if (this.session !== null) {
            var member = JSON.parse(this.session);
            this.email = member.memail;
            this.registype = member.mregistype;
            console.log('check=' + this.check);
        }
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('top#component# ngOnInit() session=' + this.session);
        //동적으로 top-nav의 session 적용
        console.log('top ngOnInit() work');
        this.authService.getObservable().subscribe(function (massege) {
            if (massege.login = 'true') {
                _this.session = sessionStorage.getItem('member');
                if (_this.session !== null) {
                    var member = JSON.parse(_this.session);
                    // console.log('topnav='+member.memail);
                    _this.email = member.memail;
                    _this.registype = member.mregistype;
                }
            }
        });
        this.authService.getObservable2().subscribe(function (message) {
            if (message.check === '0') {
                _this.check = message.check;
            }
            else {
                _this.check = '1';
                _this.tid = JSON.parse(message.check).tid;
                console.log(_this.tid);
            }
        });
        // this.truckService.getObservable().subscribe(
        //   message => {
        //     console.log(message.check);
        //   }
        // );
        this.authService.checkTruck(this.email);
    };
    TopNavComponent.prototype.check2 = function () {
        if (this.check === '0' && this.registype === 2) {
            return true;
        }
        else {
            return false;
        }
    };
    TopNavComponent.prototype.check3 = function () {
        if (this.tid !== undefined) {
            // console.log(this.tid)
            return true;
        }
        else {
            return false;
        }
    };
    TopNavComponent.prototype.logout = function () {
        sessionStorage.removeItem('member');
        this.session = null;
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-top-nav',
        template: __webpack_require__("../../../../../src/app/top-nav/top-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-nav/top-nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_truck_service__["a" /* TruckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_truck_service__["a" /* TruckService */]) === "function" && _c || Object])
], TopNavComponent);

var _a, _b, _c;
//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-info/truck-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-pane{\r\n  display: block;\r\n  height: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.tab-pane.active{\r\n  height: auto;\r\n  overflow: visible;\r\n}\r\n.rating {\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-info/truck-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>truck-info works!</h2>\r\n  <div class=\"row\">\r\n    <div  class=\"col-md-12\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">트럭 번호: {{tid}}\r\n          <div class=\"pull-right\" *ngIf=\"!check2()\">\r\n            <!-- <button type=\"button\" class=\"btn btn-xs btn-default\" *ngIf=\"check\" (click)=\"favorite(tid)\">즐겨찾기 추가</button> -->\r\n            <!-- <button type=\"button\" class=\"btn btn-xs btn-default\" *ngIf=\"!checkHot\" (click)=\"addHotlist(tid)\">즐겨찾기 추가</button> -->\r\n            <button type=\"button\" class=\"btn btn-xs btn-default\" *ngIf=\"!checkHot\" (click)=\"addHotlist(tid)\">즐겨찾기 추가</button>\r\n            <button type=\"button\" class=\"btn btn-xs btn-default\"  *ngIf=\"checkHot\" >즐겨찾기 완료</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-body\" >\r\n          <div class=\"col-sm-3\">\r\n            <img src=\"http://localhost:8080/image/{{timage}}\" alt=\"image X\" width=\"100px\" height=\"100px\">\r\n          </div>\r\n          <div class=\"col-sm-9\">\r\n            가게: {{tname}}<br>\r\n            <div class=\"rating label-left\">\r\n              <div class=\"lavel-value\">{{tavg}}</div>\r\n              <div class=\"star-container\">\r\n                <star-rating-comp\r\n                  [starType]=\"'svg'\"\r\n                  [hoverEnabled]=\"false\"\r\n                  [size]=\"'medium'\"\r\n                  [direction]=\"'ltr'\"\r\n                  [rating]=\"tavg\"\r\n                  [step]=\"0.1\"\r\n                  [showHalfStars]=\"true\"\r\n                  [readOnly]=\"true\">\r\n              </star-rating-comp>\r\n              </div>\r\n            </div>\r\n            주인장 한마디: {{tcomment}}<br>\r\n            영업시간: {{topen}} ~ {{tclose}}<br>\r\n            주소: {{taddress}}<br>\r\n            주인: {{tmember}}<br>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer clearfix\" *ngIf=\"check2()\">\r\n          <div class=\"pull-right\">\r\n            <button class=\"btn btn-default\" (click)=\"ngxSmartModalService.getModal('myModal').open() ; editTruck(f)\">트럭정보수정</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr><hr>\r\n  <ul class=\"nav nav-tabs\">\r\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#menu\">메뉴보기</a></li>\r\n    <li><a data-toggle=\"tab\" href=\"#reviews\">리뷰보기</a></li>\r\n    <li><a data-toggle=\"tab\" href=\"#location\">트럭위치</a></li>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <div id=\"menu\" class=\"tab-pane fade in active\">\r\n      <app-menu-list [tid]=\"tid\" [tmember]=\"tmember\"></app-menu-list>\r\n    </div>\r\n    <div id=\"reviews\" class=\"tab-pane fade\">\r\n      <app-truck-reviews [tid]=\"tid\"></app-truck-reviews>\r\n    </div>\r\n    <div id=\"location\" class=\"tab-pane fade\">\r\n      <p>트럭 위치</p>\r\n      <hr>\r\n      <agm-map [latitude]=\"tlat\" [longitude]=\"tlng\" [scrollwheel]=\"false\" [zoom]=\"16\"\r\n      [mapDraggable]=\"false\" [streetViewControl]=\"false\" [zoomControl]=\"false\"\r\n      style=\"width: 100%; height: 300px\">\r\n        <agm-marker [latitude]=\"tlat\" [longitude]=\"tlng\"></agm-marker>\r\n      </agm-map>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- modal  -->\r\n<div class=\"container\">\r\n  <ngx-smart-modal #myModal [identifier]=\"'myModal'\">\r\n    <h2>트럭정보수정</h2>\r\n    <div class=\"\">\r\n      <form class=\"form-horizontal\" name=\"f\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n        <div class=\"form-group\">\r\n    \t\t\t<label for=\"tname\" class=\"control-label col-xs-2\">이름</label>\r\n    \t\t\t<div class=\"col-xs-10\">\r\n    \t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"tname\" name=\"tname\"  value=\"{{tname}}\" placeholder=\"tname\" required>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n        <div class=\"form-group\">\r\n          <label for=\"tcomment\" class=\"control-label col-xs-2\">한마디</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tcomment\" id=\"tcomment\" name=\"tcomment\" value=\"{{tcomment}}\" placeholder=\"tcomment\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"topen\" class=\"control-label col-xs-2\">오픈시간</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"topen\" id=\"topen\" name=\"topen\"  value=\"{{topen}}\" placeholder=\"topen\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"tclose\" class=\"control-label col-xs-2\">종료시간</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tclose\" id=\"tclose\" name=\"tclose\" value=\"{{tclose}}\" placeholder=\"tclose\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-xs-2\" for=\"address\">위치</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tlat\" value=\"{{tlat}}\" name=\"tlat\" placeholder=\"tlat\" required>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tlng\" value=\"{{tlng}}\" name=\"tlng\" placeholder=\"tlng\" required>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"setCurrentPosition()\" name=\"button\">위치 등록</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"timage\" class=\"control-label col-xs-2\">사진</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"file\" class=\"form-control\" (change)=\"selectFile($event)\" id=\"timage\" name=\"timage\" placeholder=\"timage\" required>\r\n            <img src=\"{{url}}\" alt=\"\" width=\"120px\" height=\"120px\">\r\n            <img *ngIf=\"!url\" src=\"http://localhost:8080/image/{{timage}}\" alt=\"\" width=\"120px\" height=\"120px\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-offset-2 col-xs-10\">\r\n            <a (click)=\"myModal.close() ; clean()\" (onClose)=\"'hi'\" class=\"btn btn-primary\">수정취소</a>\r\n              <button type=\"submit\" (click)=\"myModal.close()\"  class=\"btn btn-primary\">수정완료</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </ngx-smart-modal>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-info/truck-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service__ = __webpack_require__("../../../../../src/app/_services/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_hotlist_service__ = __webpack_require__("../../../../../src/app/_services/hotlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_smart_modal__ = __webpack_require__("../../../../ngx-smart-modal/modules/ngx-smart-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//modal


var TruckInfoComponent = (function () {
    function TruckInfoComponent(route, truckService, reviewService, ngZone, hotlistService, 
        //modal
        ngxSmartModalService, authenticationService, router) {
        this.route = route;
        this.truckService = truckService;
        this.reviewService = reviewService;
        this.ngZone = ngZone;
        this.hotlistService = hotlistService;
        this.ngxSmartModalService = ngxSmartModalService;
        this.authenticationService = authenticationService;
        this.router = router;
        // truck: Truck;
        this.favolist = [];
        this.check = true;
        //////////////////////////////min
        this.checkHot = false;
        this.mapTypeId = "roadmap";
        this.privew = false;
        this.session = sessionStorage.getItem('member');
        if (this.session !== null) {
            var member = JSON.parse(this.session);
            this.email = member.memail;
        }
    }
    TruckInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.tid = params['tid'];
            //트럭정보 초기에 불러오기
            _this.getTruckInfo(_this.tid);
            _this.agmMap.triggerResize();
        });
        this.checkHotlist(this.tid, this.email);
        this.truckService.getObservable().subscribe(function (message) {
            console.log(message.check);
            if (message.check === 'true') {
                _this.getTruckInfo(_this.tid);
                _this.agmMap.triggerResize();
                _this.checkHotlist(_this.tid, _this.email);
            }
        });
        //홍 - 즐겨찾기
        // this.hotlistService.checkFavo(this.tid);
        //민-즐겨찾기 추가시, 즐찾버튼삭제
        this.hotlistService.getObservable().subscribe(function (result) {
            if (result.favo === 'ok') {
                _this.checkHot = true;
            }
        });
        //홍 - 즐겨찾기
        // this.hotlistService.getObservable().subscribe(
        //   message => {
        //     console.log('check')
        //     if (message.check == false) {
        //       this.check = message.check;
        //     }
        //   }
        // );
        //별점을 줬을 때, 트럭평균별점 변경.
        this.reviewService.getObservable().subscribe(function (message) {
            console.log(message);
            if (message.result == 'ok') {
                _this.getTruckInfo(_this.tid);
            }
        });
    }; //end ngOnInit()
    //주인인지 아닌지를 확인 -> 트럭수정버튼 확인
    TruckInfoComponent.prototype.check2 = function () {
        if (this.email === this.tmember) {
            return true;
        }
        else {
            return false;
        }
    };
    TruckInfoComponent.prototype.getTruckInfo = function (tid) {
        var _this = this;
        this.truckService.getTruckInfo(tid).subscribe(function (result) {
            console.log(result);
            _this.tname = result.tname;
            _this.timage = result.timage;
            _this.tavg = result.tavg;
            _this.tcomment = result.tcomment;
            _this.topen = result.topen;
            _this.tclose = result.tclose;
            _this.taddress = result.taddress;
            _this.tfoodmaterial = result.tfoodmaterial;
            _this.tmember = result.tmember;
            _this.tlat = parseFloat(result.tlat);
            _this.tlng = parseFloat(result.tlng);
        });
    };
    //인홍 favorite추가
    TruckInfoComponent.prototype.favorite = function (f) {
        var _this = this;
        console.log(f);
        this.hotlistService.addHotlist(f).subscribe(function () { _this.hotlistService.checkFavo(f); });
    };
    //민 - 즐겨찾기 insert
    TruckInfoComponent.prototype.addHotlist = function (tid) {
        console.log(tid);
        this.hotlistService.addHotlist2(tid);
    };
    //민- 회면이 그려질때, 즉시 즐찾현황을 찾음
    TruckInfoComponent.prototype.checkHotlist = function (tid, email) {
        this.hotlistService.checkHotlist(tid, email);
    };
    TruckInfoComponent.prototype.selectFile = function (event) {
        var _this = this;
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    //트럭 정보 업데이트할 때, 데이터 보냄.
    TruckInfoComponent.prototype.onSubmit = function (f) {
        var _this = this;
        console.log(f.value);
        if (this.selectedFiles === undefined) {
            if (this.session !== null) {
                this.member = JSON.parse(this.session);
            }
            // this.truckService.truckRegist(f.value.name, f.value.open, f.value.close, f.value.lat, f.value.lng, f.value.comment, f.value.file);
            this.truckService.truckRegist2(this.tid, f.value.tname, f.value.topen, f.value.tclose, f.value.tlat, f.value.tlng, f.value.tcomment, this.timage, this.member.memail);
            this.truckService.getObservable().subscribe(function (message) {
                if (message.check == 'true') {
                    _this.authenticationService.checkTruck(_this.member.memail);
                    // alert('등록되었습니다.');
                    console.log('update되었음');
                    _this.router.navigate(['/truck-info', _this.tid]);
                }
            });
        }
        else {
            f.value.file = this.selectedFiles.item(0);
            //3
            if (this.session !== null) {
                this.member = JSON.parse(this.session);
            }
            console.log(f.value);
            // this.truckService.truckRegist(f.value.name, f.value.open, f.value.close, f.value.lat, f.value.lng, f.value.comment, f.value.file);
            this.truckService.truckRegist3(this.tid, f.value.tname, f.value.topen, f.value.tclose, f.value.tlat, f.value.tlng, f.value.tcomment, f.value.file, this.member.memail);
            this.truckService.getObservable().subscribe(function (message) {
                if (message.check == 'true') {
                    _this.authenticationService.checkTruck(_this.member.memail);
                    // alert('등록되었습니다.');
                    console.log('update되었음');
                    _this.router.navigate(['/truck-info', _this.tid]);
                }
            });
        }
    };
    TruckInfoComponent.prototype.editTruck = function (f) {
        console.log(f.value);
        this.rename = f.value.tname;
        this.recomment = f.value.tcomment;
        this.reopen = f.value.topen;
        this.reclose = f.value.tclose;
        this.relat = f.value.tlat;
        this.relng = f.value.tlng;
    };
    TruckInfoComponent.prototype.clean = function () {
        this.tname = this.rename;
        this.tcomment = this.recomment;
        this.topen = this.reopen;
        this.tclose = this.reclose;
        this.tlat = this.relat;
        this.tlng = this.relng;
    };
    //위치등록
    TruckInfoComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.tlat = position.coords.latitude;
                _this.tlng = position.coords.longitude;
            });
        }
    };
    return TruckInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */]) === "function" && _a || Object)
], TruckInfoComponent.prototype, "agmMap", void 0);
TruckInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-info',
        template: __webpack_require__("../../../../../src/app/truck-info/truck-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-info/truck-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_truck_service__["a" /* TruckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_truck_service__["a" /* TruckService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_hotlist_service__["a" /* HotlistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_hotlist_service__["a" /* HotlistService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_smart_modal__["b" /* NgxSmartModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_smart_modal__["b" /* NgxSmartModalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _j || Object])
], TruckInfoComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=truck-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-list/truck-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rating {\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-list/truck-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form\" (ngSubmit)=\"search(f)\" #f=\"ngForm\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" name=\"key\" [(ngModel)]=\"key\" required placeholder=\"검색하실 주소를 입력해주세요.\">\r\n      <div class=\"input-group-btn\">\r\n        <button class=\"btn btn-default\">\r\n            <i class=\"glyphicon glyphicon-search\"></i>\r\n          </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <br>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\" *ngFor=\"let t of trucks\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            번호 {{t.tid}}\r\n            <div class=\"pull-right\">\r\n              <button type=\"button\" class=\"btn btn-xs btn-default\" (click)=\"getFoodTruck(t.tid)\">바로가기</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"col-md-2 col-sm-3\">\r\n              <img src=\"http://localhost:8080/image/{{t.timage}}\" alt=\"\" width=\"150px\" height=\"150px\">\r\n            </div>\r\n            <div class=\"col-md-10 col-sm-9\">\r\n              이름: {{t.tname}}<br>\r\n              <div class=\"rating label-left\">\r\n                <div class=\"lavel-value\">{{t.tavg}}</div>\r\n                <div class=\"star-container\">\r\n                  <star-rating-comp\r\n                    [starType]=\"'svg'\"\r\n                    [hoverEnabled]=\"false\"\r\n                    [size]=\"'medium'\"\r\n                    [direction]=\"'ltr'\"\r\n                    [rating]=\"t.tavg\"\r\n                    [step]=\"0.1\"\r\n                    [showHalfStars]=\"true\"\r\n                    [readOnly]=\"true\">\r\n                </star-rating-comp>\r\n                </div>\r\n              </div>\r\n              영업시간: {{t.topen}} ~ {{t.tclose}}<br>\r\n              주소: {{t.taddress}}<br>\r\n              사업자: {{t.tmember}}<br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-list/truck-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TruckListComponent = (function () {
    function TruckListComponent(truckService, router) {
        this.truckService = truckService;
        this.router = router;
        this.trucks = [];
    }
    TruckListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.truckService.truckgetAll().subscribe(function (res) {
            console.log(res.json());
            _this.trucks = res.json();
        });
    };
    TruckListComponent.prototype.search = function (f) {
        console.log(f.value.key);
        this.truckService.keyFind(f.value.key).subscribe(function (res) {
            console.log(res.json());
            // this.trucks=res.json();
        });
    };
    TruckListComponent.prototype.getFoodTruck = function (tid) {
        console.log(tid);
        this.router.navigate(["truck-info", tid]);
    };
    return TruckListComponent;
}());
TruckListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-list',
        template: __webpack_require__("../../../../../src/app/truck-list/truck-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-list/truck-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_truck_service__["a" /* TruckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_truck_service__["a" /* TruckService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TruckListComponent);

var _a, _b;
//# sourceMappingURL=truck-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-regist/truck-regist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-regist/truck-regist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <form class=\"form-horizontal\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"email\">Name</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"name\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"password\">Open</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"open\"  name=\"open\" placeholder=\"open\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"name\">Close</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"close\" name=\"close\" placeholder=\"close\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"address\">위치</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lat\" value=\"{{lat}}\" name=\"lat\" placeholder=\"lat\" required>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lng\" value=\"{{lng}}\" name=\"lng\" placeholder=\"lng\" required>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"setCurrentPosition()\" name=\"button\">위치 등록</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"comment\">소개글</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" placeholder=\"comment\" required>\r\n        </div>\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-xs-2\" for=\"picture\">사진</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"file\" (change)=\"selectFile($event)\" name=\"picture\" class=\"form-control\" required>\r\n            <img src=\"{{url}}\" alt=\"\" width=\"120px\" height=\"120px\">\r\n          </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\"  [disabled]=\"f.invalid\">\r\n        <b class=\"glyphicon glyphicon-plus\"></b>SEND\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<ng-template #popTemplate>Here we go: <div [innerHtml]=\"html\"></div></ng-template>\r\n<button type=\"button\" class=\"btn btn-success\"\r\n        [popover]=\"popTemplate\" popoverTitle=\"Dynamic html inside\">\r\n  Show me popover with html\r\n</button>\r\n<input type=\"text\" [popover]=\"popTemplate\"name=\"comment\" placeholder=\"comment\" required>\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <form class=\"form-horizontal\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"email\">Name</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"name\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"name\">open</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"open\" name=\"open\" placeholder=\"open\" required>\r\n          <timepicker\r\n          [(ngModel)]=\"opentime\"\r\n          [hourStep]=\"1\"\r\n          [minuteStep]=\"10\"\r\n          [showMeridian]=\"ismeridian\"\r\n          [readonlyInput]=\"!isEnabled\"\r\n          ></timepicker>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"name\">Close</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"close\" name=\"close\" placeholder=\"close\" required>\r\n          <timepicker\r\n          [(ngModel)]=\"closetime\"\r\n          [hourStep]=\"1\"\r\n          [minuteStep]=\"10\"\r\n          [showMeridian]=\"ismeridian\"\r\n          [readonlyInput]=\"!isEnabled\"\r\n          ></timepicker>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"address\">위치</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lat\" value=\"{{lat}}\" name=\"lat\" placeholder=\"lat\" required>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lng\" value=\"{{lng}}\" name=\"lng\" placeholder=\"lng\" required>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"setCurrentPosition()\" name=\"button\">위치 등록</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-xs-2\" for=\"comment\">소개글</label>\r\n        <div class=\"col-xs-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" placeholder=\"comment\" required>\r\n        </div>\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-xs-2\" for=\"picture\">사진</label>\r\n          <div class=\"col-xs-10\">\r\n            <input type=\"file\" (change)=\"selectFile($event)\" name=\"picture\" class=\"form-control\" required>\r\n            <img src=\"{{url}}\" alt=\"\" width=\"120px\" height=\"120px\">\r\n          </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\"  [disabled]=\"f.invalid\">\r\n        <b class=\"glyphicon glyphicon-plus\"></b>SEND\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n <hr>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-5 col-xs-5\" style=\"border:1px solid black\">\r\n      <label class=\"control-label col-sm-2\" for=\"picture\">open</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" name=\"\" value=\"{{opentime}}\" class=\"timepicker\">\r\n        <timepicker\r\n        [(ngModel)]=\"opentime\"\r\n        [hourStep]=\"1\"\r\n        [minuteStep]=\"10\"\r\n        [showMeridian]=\"ismeridian\"\r\n        [readonlyInput]=\"!isEnabled\"\r\n        ></timepicker>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-sm-5  col-xs-5\" style=\"border:1px solid black\">\r\n      <label class=\"control-label col-sm-2\" for=\"picture\">close</label>\r\n      <div class=\"col-sm-10\">\r\n        <timepicker\r\n        [(ngModel)]=\"closetime\"\r\n        [hourStep]=\"1\"\r\n        [minuteStep]=\"10\"\r\n        [showMeridian]=\"ismeridian\"\r\n        [readonlyInput]=\"!isEnabled\"\r\n        ></timepicker>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\" style=\"border:1px solid black\">\r\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"isEnabled=!isEnabled\">확정</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<pre class=\"alert alert-info\">Time is: {{opentime | date: 'hh:mm'}} ~ {{closetime | date: 'hh:mm'}}</pre>\r\n<hr>\r\n<hr> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-regist/truck-regist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckRegistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_truck_service__ = __webpack_require__("../../../../../src/app/_services/truck.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
//
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { TimepickerConfig, TimepickerActions, TimepickerComponent,TimepickerStore } from 'ngx-bootstrap/timepicker';
//
// import { TruckService } from '../_services/truck.service';
// import {AuthenticationService} from '../_services/authentication.service'
// import { Member } from '../_models/member.model';
//
// @Component({
//   selector: 'app-truck-regist',
//   templateUrl: './truck-regist.component.html',
//   styleUrls: ['./truck-regist.component.css']
// })
// export class TruckRegistComponent implements OnInit {
//
//   name: string;
//   open: string;
//   close: string;
//   address: string;
//   comment: string;
//   lat: number;
//   lng: number;
//
//   selectedFiles: FileList;
//   currentFileUpload: File;
//   url: string;
//
//   //1
//   session: string;
//   member: Member;
//
//   ////////////////////
//   ismeridian: boolean = false;
//   isEnabled: boolean = true;
//   opentime:Date = new Date();
//   closetime:Date = new Date();
//   hours: string;
//
//   ///////////////////
//   constructor(
//     private truckService: TruckService,
//     private authenticationService:AuthenticationService,
//     private router: Router,
//     _config: TimepickerConfig,
//    // _cd: ChangeDetectorRef,
//    private _store: TimepickerStore,
//    private _timepickerActions: TimepickerActions
//   ) { }
//
//   ngOnInit() {
//     //2
//     this.session = sessionStorage.getItem('member');
//   }
//   /////////////
//   prevDef($event: any) {
//    $event.preventDefault();
//  }
//  changeHours(step: number, source: 'key'): void {
//     this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
//   }
//   ////////////////
//
//   selectFile(event) {
//     this.selectedFiles = event.target.files;
//     if (event.target.files && event.target.files[0]) {
//       var reader = new FileReader();
//       reader.onload = (event:any) => {
//         this.url = event.target.result;
//       }
//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }
//
//   onSubmit(f) {
//     if(this.selectedFiles === undefined) {
//       alert('사진을 등록하세요');
//     } else {
//     f.value.file = this.selectedFiles.item(0);
//     //3
//     if (this.session !== null) {
//       this.member = JSON.parse(this.session);
//     }
//
//     console.log(f.value);
//     // this.truckService.truckRegist(f.value.name, f.value.open, f.value.close, f.value.lat, f.value.lng, f.value.comment, f.value.file);
//     this.truckService.truckRegist(f.value.name, f.value.open, f.value.close,
//       f.value.lat, f.value.lng, f.value.comment, f.value.file, this.member.memail);
//
//     this.truckService.getObservable().subscribe(message=>{
//       if(message.check=='true'){
//           this.authenticationService.checkTruck(this.member.memail);
//           alert('등록되었습니다.');
//           this.router.navigate(["truck-list"]);
//       }
//     });
//   }
//
// }
//
//   private setCurrentPosition() {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.lat = position.coords.latitude;
//         this.lng = position.coords.longitude;
//       });
//     }
//   }
//
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TruckRegistComponent = (function () {
    ///////////////////
    function TruckRegistComponent(truckService, authenticationService, router, _config, 
        // _cd: ChangeDetectorRef,
        _store, _timepickerActions) {
        this.truckService = truckService;
        this.authenticationService = authenticationService;
        this.router = router;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        ////////////////////
        this.ismeridian = false;
        this.isEnabled = true;
        this.opentime = new Date();
        this.closetime = new Date();
    }
    TruckRegistComponent.prototype.ngOnInit = function () {
        //2
        this.session = sessionStorage.getItem('member');
    };
    /////////////
    TruckRegistComponent.prototype.prevDef = function ($event) {
        $event.preventDefault();
    };
    TruckRegistComponent.prototype.changeHours = function (step, source) {
        this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
    };
    ////////////////
    TruckRegistComponent.prototype.selectFile = function (event) {
        var _this = this;
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    TruckRegistComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (this.selectedFiles === undefined) {
            alert('사진을 등록하세요');
        }
        else {
            f.value.file = this.selectedFiles.item(0);
            //3
            if (this.session !== null) {
                this.member = JSON.parse(this.session);
            }
            console.log(f.value);
            // this.truckService.truckRegist(f.value.name, f.value.open, f.value.close, f.value.lat, f.value.lng, f.value.comment, f.value.file);
            this.truckService.truckRegist(f.value.name, f.value.open, f.value.close, f.value.lat, f.value.lng, f.value.comment, f.value.file, this.member.memail);
            this.truckService.getObservable().subscribe(function (message) {
                if (message.check == 'true') {
                    _this.authenticationService.checkTruck(_this.member.memail);
                    alert('등록되었습니다.');
                    _this.router.navigate(["truck-list"]);
                }
            });
        }
    };
    TruckRegistComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    return TruckRegistComponent;
}());
TruckRegistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-regist',
        template: __webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-regist/truck-regist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_truck_service__["a" /* TruckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_truck_service__["a" /* TruckService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_timepicker__["b" /* TimepickerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_timepicker__["b" /* TimepickerConfig */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_timepicker__["d" /* TimepickerStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_timepicker__["d" /* TimepickerStore */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_timepicker__["a" /* TimepickerActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_timepicker__["a" /* TimepickerActions */]) === "function" && _f || Object])
], TruckRegistComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=truck-regist.component.js.map

/***/ }),

/***/ "../../../../../src/app/truck-reviews/truck-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".star-rating-comp {\r\n  font-size:1.2rem;\r\n  line-height: 1.2rem;\r\n  /*display: inline-block;*/\r\n}\r\n.rating {\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/truck-reviews/truck-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n  <div class=\"row\">\r\n    <h3>트럭 {{tid}}번의 리뷰</h3>\r\n    화면에 결과 메세지를 띄우고 싶을 때, 지금은 alert사용\r\n    <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div>\r\n    <div  class=\"col-md-12\" *ngFor=\"let r of truckReviews | paginate: {itemsPerPage: 5,\r\n                                                                      currentPage: p}\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >리뷰 번호: {{r.rid}}</div>\r\n        <div class=\"panel-body\" >\r\n          <div class=\"col-md-2 col-sm-4 col-xs-6\" *ngIf=\"r.rimage\">\r\n            <img src=\"http://localhost:8080/image/{{r.rimage}}\" alt=\"x\" width=\"120px\" height=\"120px\">\r\n          </div>\r\n          <div class=\"col-md-10 col-sm-8 col-xs-6\">\r\n            내용: {{r.rcomment}}<br>\r\n            점수: {{r.rscore}}<br>\r\n            작성일: {{r.rdate}}<br>\r\n            작성자: {{r.rmember}}<br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <ul class=\"pagination\" style=\"\">\r\n      <pagination-controls (pageChange)=\"p = $event\"\r\n                            directionLinks=\"true\"\r\n                            autoHide=\"true\"\r\n                            previousLabel=\"\"\r\n                            nextLabel=\"\"\r\n                            screenReaderPaginationLabel=\"Pagination\"\r\n                            screenReaderPageLabel=\"page\"\r\n                            screenReaderCurrentLabel=\"You're on page\">\r\n      </pagination-controls>\r\n    </ul>\r\n  </div>\r\n  <form class=\"form-horizontal\" *ngIf=\"member\" name=\"form\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"comment\" class=\"control-label col-xs-2\">글내용</label>\r\n      <div class=\"col-xs-10\">\r\n        <textarea rows=\"5\" class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"score\" class=\"control-label col-xs-2\">별점</label>\r\n      <div class=\"col-xs-10\">\r\n        <div class=\"star-rating\">\r\n          <star-rating-comp   [(ngModel)]=\"score\"\r\n                              [starType]=\"'svg'\"\r\n                              [hoverEnabled]=\"true\"\r\n                              [size]=\"'medium'\"\r\n                              [staticColor]=\"'ok'\"\r\n                              [direction]=\"'ltr'\"\r\n                              [rating]=\"3\"\r\n                              [step]=\"0.5\"\r\n                              [showHalfStars]=\"true\"\r\n                              (onClick)=\"onClick($event)\"\r\n                              (onRatingChange)=\"onRatingChange($event)\"\r\n                              (onHoverRatingChange)=\"onHoverRatingChange($event)\">\r\n          </star-rating-comp>\r\n          <p>onHoverRatingChangeResult: {{onHoverRatingChangeResult | json}}</p>\r\n          <p>onClickResult: {{onClickResult | json}}</p>\r\n          <p>onRatingChangeResult: {{onRatingChangeResult | json}}</p>\r\n        </div>\r\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"score\" name=\"score\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"sr-only\" class=\"control-label col-xs-2\" for=\"image\">사진</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectFile($event)\">\r\n        <img src=\"{{url}}\" alt=\"\" width=\"120px\" height=\"120px\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-xs-offset-2 col-xs-10\">\r\n        <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"f.invalid\">Add</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n  <hr>\r\n  <div class=\"star-rating\">\r\n    <star-rating-comp   [starType]=\"'svg'\"\r\n                        [hoverEnabled]=\"true\"\r\n                        [size]=\"'medium'\"\r\n                        [staticColor]=\"'ok'\"\r\n                        [direction]=\"'ltr'\"\r\n                        [rating]=\"3\"\r\n                        [step]=\"0.5\"\r\n                        [showHalfStars]=\"true\"\r\n                        (onClick)=\"onClick($event)\"\r\n                        (onRatingChange)=\"onRatingChange($event)\"\r\n                        (onHoverRatingChange)=\"onHoverRatingChange($event)\">\r\n    </star-rating-comp>\r\n    <p>onHoverRatingChangeResult: {{onHoverRatingChangeResult | json}}</p>\r\n    <p>onClickResult: {{onClickResult | json}}</p>\r\n    <p>onRatingChangeResult: {{onRatingChangeResult | json}}</p>\r\n  </div>\r\n</div>\r\n<hr> -->\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h3>트럭 {{tid}}번의 리뷰</h3>\r\n    <div *ngIf=\"message\" class=\"alert alert-info\">{{message}}</div>\r\n    <div  class=\"col-md-12\" *ngFor=\"let r of truckReviews | paginate: {itemsPerPage: 5,\r\n                                                                      currentPage: p}\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\" >리뷰 번호: {{r.rid}}</div>\r\n        <div class=\"panel-body\" >\r\n          <div class=\"col-md-2 col-sm-3\" *ngIf=\"r.rimage\">\r\n            <img src=\"http://localhost:8080/image/{{r.rimage}}\" alt=\"x\" width=\"120px\" height=\"120px\">\r\n          </div>\r\n          <div class=\"col-md-10 col-sm-9\">\r\n            작성자: {{r.rmember}} <span style=\"color: gray; font-size: 0.7em\"> | {{r.rdate}}</span> <br>\r\n            <div class=\"rating\">\r\n              <div class=\"star-container\">\r\n                <star-rating-comp\r\n                  [starType]=\"'svg'\"\r\n                  [hoverEnabled]=\"false\"\r\n                  [staticColor]=\"'ok'\"\r\n                  [size]=\"'medium'\"\r\n                  [direction]=\"'ltr'\"\r\n                  [rating]=\"r.rscore\"\r\n                  [showHalfStars]=\"true\"\r\n                  [readOnly]=\"true\">\r\n              </star-rating-comp>\r\n              </div>\r\n            </div>\r\n            내용: {{r.rcomment}}<br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <ul class=\"pagination\" style=\"\">\r\n      <pagination-controls (pageChange)=\"p = $event\"\r\n                            directionLinks=\"true\"\r\n                            autoHide=\"true\"\r\n                            previousLabel=\"\"\r\n                            nextLabel=\"\"\r\n                            screenReaderPaginationLabel=\"Pagination\"\r\n                            screenReaderPageLabel=\"page\"\r\n                            screenReaderCurrentLabel=\"You're on page\">\r\n      </pagination-controls>\r\n    </ul>\r\n  </div>\r\n  <form class=\"form-horizontal\" *ngIf=\"member\" name=\"form\" [formGroup]=\"f\" (ngSubmit)=\"onSubmit(f.value)\"  novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"comment\" class=\"control-label col-xs-2\">글내용</label>\r\n      <div class=\"col-xs-10\">\r\n        <textarea rows=\"5\" class=\"form-control\" formControlName=\"comment\" name=\"comment\" required></textarea>\r\n      </div>\r\n      <div class=\"alert\" *ngIf=\"!f.controls['comment'].valid && f.controls['comment'].touched\">must write</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"score\" class=\"control-label col-xs-2\">별점</label>\r\n      <div class=\"col-xs-10\">\r\n        <div class=\"star-rating\">\r\n          <star-rating-comp   formControlName=\"score\"\r\n                              [starType]=\"'svg'\"\r\n                              [hoverEnabled]=\"true\"\r\n                              [size]=\"'medium'\"\r\n                              [staticColor]=\"'ok'\"\r\n                              [rating]=\"3\"\r\n                              [showHalfStars]=\"true\">\r\n          </star-rating-comp>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"sr-only\" class=\"control-label col-xs-2\" for=\"image\">사진</label>\r\n      <div class=\"col-xs-10\">\r\n        <input type=\"file\" class=\"form-control\" name=\"image\" (change)=\"selectFile($event)\">\r\n        <img src=\"{{url}}\" alt=\"\" width=\"120px\" height=\"120px\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-xs-offset-2 col-xs-10\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\">Add</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<hr>\r\n"

/***/ }),

/***/ "../../../../../src/app/truck-reviews/truck-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service__ = __webpack_require__("../../../../../src/app/_services/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TruckReviewsComponent = (function () {
    function TruckReviewsComponent(http, router, reviewService, fb) {
        this.http = http;
        this.router = router;
        this.reviewService = reviewService;
        this.fb = fb;
        //pagination
        this.p = 1;
        //로그인한 회원의 정보 구하기
        var session = sessionStorage.getItem('member');
        if (session !== null) {
            this.member = JSON.parse(session);
        }
        //star-rating
        this.f = fb.group({
            'comment': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(500)])],
            'score': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('')
        });
    }
    TruckReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTruckReview(this.tid);
        this.reviewService.getObservable().subscribe(function (messege) {
            if (messege.result = 'ok') {
                _this.reviewService.getTruckReview(_this.tid).subscribe(function (res) {
                    console.log(res);
                    _this.truckReviews = res;
                    _this.message = null;
                });
            }
        });
    };
    //star-rating
    // onClickResult: OnClickEvent;
    // onHoverRatingChangeResult: OnHoverRatingChangeEvent;
    // onRatingChangeResult: OnRatingChangeEven;
    //
    // onClick = ($event: OnClickEvent) => {
    //   console.log('onClick $event: ', $event);
    //   this.onClickResult = $event;
    // };
    //
    // onRatingChange = ($event: OnRatingChangeEven) => {
    //   console.log('onRatingUpdated $event: ', $event);
    //   this.onRatingChangeResult = $event;
    // };
    //
    // onHoverRatingChange = ($event: OnHoverRatingChangeEvent) => {
    //   console.log('onHoverRatingChange $event: ', $event);
    //   this.onHoverRatingChangeResult = $event;
    // };
    //사진올리기
    TruckReviewsComponent.prototype.selectFile = function (event) {
        var _this = this;
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    TruckReviewsComponent.prototype.onSubmit = function (post) {
        if (this.selectedFiles === undefined) {
            this.addReview2(post.comment, post.score, this.member.memail, this.tid);
        }
        else {
            post.image = this.selectedFiles.item(0);
            console.log(post);
            this.addReview(post.comment, post.image, post.score, this.member.memail, this.tid);
        }
    };
    // onSubmit(f) {
    //   if (this.selectedFiles === undefined) {
    //     this.addReview2(f.value.comment, f.value.score, this.member.memail, this.tid);
    //   } else {
    //     f.value.image = this.selectedFiles.item(0);
    //     console.log(f.value);
    //     this.addReview(f.value.comment, f.value.image, f.value.score, this.member.memail, this.tid);
    //   }
    // }
    TruckReviewsComponent.prototype.addReview = function (comment, image, score, email, truck) {
        this.reviewService.addReview(comment, image, score, email, truck);
        alert('등록완료');
    };
    TruckReviewsComponent.prototype.addReview2 = function (comment, score, email, truck) {
        this.reviewService.addReview2(comment, score, email, truck);
        alert('등록완료');
    };
    TruckReviewsComponent.prototype.removeReview = function (review) {
        var _this = this;
        this.reviewService.removeReview(review)
            .subscribe(function (result) {
            // this.message = result;
            alert(result);
            _this.getTruckReview(_this.tid);
        });
    };
    TruckReviewsComponent.prototype.getTruckReview = function (tid) {
        var _this = this;
        this.reviewService.getTruckReview(tid)
            .subscribe(function (result) {
            result;
            result.map(function (res) {
                if (res.rerror !== null) {
                    _this.message = res.rerror;
                }
                else {
                    _this.truckReviews = result;
                }
            });
        });
    };
    return TruckReviewsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('tid'),
    __metadata("design:type", String)
], TruckReviewsComponent.prototype, "tid", void 0);
TruckReviewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-truck-reviews',
        template: __webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/truck-reviews/truck-reviews.component.css")]
    })
    //나의리뷰와 같은 리뷰이기 때문에 따로 service를 만들지 않고 같은 reviewService를 사용.
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service__["a" /* ReviewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], TruckReviewsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=truck-reviews.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map