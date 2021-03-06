import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { CookieService } from 'angular2-cookie/core';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Message } from "./message.model";
import { ErrorService } from '../errors/error.service';

const LOCALROUTE = "http://localhost:3000";

const HEROKUROUTE = "https://angular-node-example-messages.herokuapp.com";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private cookieService : CookieService, private errorService : ErrorService) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = this.cookieService.get('auth-token') ? '?token=' + this.cookieService.get('auth-token') : '';
        return this.http.post(HEROKUROUTE +'/message' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json()); //still need to throw it
            });
    }

    getMessages() {
        return this.http.get(HEROKUROUTE +'/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json()); //still need to throw it
            });
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = this.cookieService.get('auth-token') ? '?token=' + this.cookieService.get('auth-token') : '';
        return this.http.patch(HEROKUROUTE +'/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json()); //still need to throw it
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = this.cookieService.get('auth-token') ? '?token=' + this.cookieService.get('auth-token') : '';
        return this.http.delete(HEROKUROUTE +'/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json()); //still need to throw it
            });
    }
}