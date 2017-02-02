import { RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
// creating our own routes array with expected properties
var APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES } //the auth component itself will have router outlet
];
export var routing = RouterModule.forRoot(APP_ROUTES); //for Root.
//# sourceMappingURL=app.routing.js.map