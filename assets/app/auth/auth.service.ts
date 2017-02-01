import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from "rxjs";
@Injectable()

export class AuthService {

    constructor(private http: Http, private cookieService: CookieService) {} 

    signUp(user: User){
        console.log(user);
        const body = JSON.stringify(user);
        console.log(body);
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
        return this.http.post('http://localhost:3000/user', body, {headers : headers})
        .map((response : Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    signIn(user: User){
        
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });
        return this.http.post('http://localhost:3000/user/signin', body, {headers : headers})
        .map((response : Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    logout(){
        this.cookieService.removeAll();
    }

    isLoggedIn(){
        return this.cookieService.get('auth-token') !== null && this.cookieService.get('auth-token') !== undefined;
    }

}