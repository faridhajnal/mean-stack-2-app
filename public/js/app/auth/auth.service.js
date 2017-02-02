import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
var LOCALROUTE = "http://localhost:3000";
var HEROKUROUTE = "https://angular-node-example-messages.herokuapp.com/";
export var AuthService = (function () {
    function AuthService(http, cookieService, errorService) {
        this.http = http;
        this.cookieService = cookieService;
        this.errorService = errorService;
    }
    AuthService.prototype.signUp = function (user) {
        var _this = this;
        console.log(user);
        var body = JSON.stringify(user);
        console.log(body);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(HEROKUROUTE + ' /user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json()); //still need to throw it
        });
    };
    AuthService.prototype.signIn = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(HEROKUROUTE + '/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json()); //still need to throw it
        });
    };
    AuthService.prototype.logout = function () {
        this.cookieService.removeAll();
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.cookieService.get('auth-token') !== null && this.cookieService.get('auth-token') !== undefined;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
        { type: CookieService, },
        { type: ErrorService, },
    ];
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map