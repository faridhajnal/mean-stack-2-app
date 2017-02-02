import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import { WelcomeComponent } from "./welcome.component";
export var AUTH_ROUTES = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', redirectTo: 'welcome' }
];
//# sourceMappingURL=auth.routes.js.map