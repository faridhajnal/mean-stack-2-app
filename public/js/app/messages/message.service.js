import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { CookieService } from 'angular2-cookie/core';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Message } from "./message.model";
import { ErrorService } from '../errors/error.service';
var LOCALROUTE = "http://localhost:3000";
var HEROKUROUTE = "https://angular-node-example-messages.herokuapp.com/";
export var MessageService = (function () {
    function MessageService(http, cookieService, errorService) {
        this.http = http;
        this.cookieService = cookieService;
        this.errorService = errorService;
        this.messages = [];
        this.messageIsEdit = new EventEmitter();
    }
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = this.cookieService.get('auth-token') ? '?token=' + this.cookieService.get('auth-token') : '';
        return this.http.post(HEROKUROUTE + '/message' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            _this.messages.push(message);
            return message;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json()); //still need to throw it
        });
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        return this.http.get(HEROKUROUTE + '/message')
            .map(function (response) {
            var messages = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json()); //still need to throw it
        });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    MessageService.prototype.updateMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = this.cookieService.get('auth-token') ? '?token=' + this.cookieService.get('auth-token') : '';
        return this.http.patch(HEROKUROUTE + '/message/' + message.messageId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json()); //still need to throw it
        });
    };
    MessageService.prototype.deleteMessage = function (message) {
        var _this = this;
        this.messages.splice(this.messages.indexOf(message), 1);
        var token = this.cookieService.get('auth-token') ? '?token=' + this.cookieService.get('auth-token') : '';
        return this.http.delete(HEROKUROUTE + '/message/' + message.messageId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json()); //still need to throw it
        });
    };
    MessageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = [
        { type: Http, },
        { type: CookieService, },
        { type: ErrorService, },
    ];
    return MessageService;
}());
//# sourceMappingURL=message.service.js.map