import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CookieService } from 'angular2-cookie/core';
import { AuthService } from './auth.service';
import { User } from './user.model';
export var SignupComponent = (function () {
    function SignupComponent(cookieService, authService) {
        this.cookieService = cookieService;
        this.authService = authService;
    }
    SignupComponent.prototype.onSubmit = function () {
        var formValue = this.myForm.value;
        var user = new User(formValue.email, formValue.password, formValue.firstName, formValue.lastName);
        this.authService.signUp(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.myForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        //console.log(this.cookieService.get('pi'));
        console.log(this.cookieService.get('auth-token'));
        console.log(this.cookieService.get('user-id'));
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signup',
                    templateUrl: './signup.component.html'
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = [
        { type: CookieService, },
        { type: AuthService, },
    ];
    return SignupComponent;
}());
//# sourceMappingURL=signup.component.js.map