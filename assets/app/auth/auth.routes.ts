import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
import { WelcomeComponent } from "./welcome.component";
export const AUTH_ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', redirectTo: 'welcome'}
];