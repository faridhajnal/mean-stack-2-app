import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CookieService } from 'angular2-cookie/core';
import { AuthService } from './auth.service';
import { User } from './user.model';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    constructor(private cookieService: CookieService, private authService : AuthService) {}

    myForm: FormGroup;

    onSubmit() {
        const formValue = this.myForm.value;
        const user = new User(formValue.email, formValue.password, formValue.firstName, formValue.lastName);
        this.authService.signUp(user)
            .subscribe( data => console.log(data),
            error => console.log(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
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
    }
}