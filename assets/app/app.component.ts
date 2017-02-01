import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";
import { AuthService } from './auth/auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service'
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, CookieService, AuthService]
})
export class AppComponent {
}