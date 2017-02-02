import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthService } from './auth.service';
export var SigninComponent = (function () {
    function SigninComponent(cookieService, authService, router) {
        this.cookieService = cookieService;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signIn(user)
            .subscribe(function (data) {
            _this.cookieService.put('auth-token', data.token);
            _this.cookieService.put('user-id', data.uid);
            //localStorage.setItem('token', data.token);
            _this.router.navigateByUrl('/');
        }, function (error) { return console.log(error); });
        this.myForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.cookieService.put('pi', (Math.random() * 10).toString());
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signin',
                    templateUrl: './signin.component.html'
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = [
        { type: CookieService, },
        { type: AuthService, },
        { type: Router, },
    ];
    return SigninComponent;
}());
//# sourceMappingURL=signin.component.js.map