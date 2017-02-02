import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { WelcomeComponent } from "./auth/welcome.component";
import { ErrorComponent } from "./errors/error.component";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        MessageComponent,
                        MessageListComponent,
                        MessageInputComponent,
                        MessagesComponent,
                        AuthenticationComponent,
                        HeaderComponent,
                        LogoutComponent,
                        SignupComponent,
                        SigninComponent,
                        WelcomeComponent,
                        ErrorComponent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        routing,
                        ReactiveFormsModule,
                        HttpModule
                    ],
                    providers: [ErrorService, AuthService, CookieService],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map