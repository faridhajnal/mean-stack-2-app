import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthService } from './auth.service';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {

    constructor(private cookieService:CookieService, private authService : AuthService, private router: Router){}

    myForm: FormGroup;

    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signIn(user)
        .subscribe((data) => {
            this.cookieService.put('auth-token', data.token);
            this.cookieService.put('user-id', data.uid);
            //localStorage.setItem('token', data.token);
            this.router.navigateByUrl('/');
        },
        (error) => console.log(error));
        this.myForm.reset();
    }

    ngOnInit() {
        this.cookieService.put('pi', (Math.random()*10).toString());
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}