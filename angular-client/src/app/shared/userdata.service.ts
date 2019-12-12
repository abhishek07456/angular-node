import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/Map';
import { Response } from 'selenium-webdriver/http';
import {Signup} from './signup.model';
// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable({
   providedIn: 'root'
 })
 export class UserdataService {
 private readonly url = 'http://localhost:3000/getUsers';
 constructor(private http: HttpClient) {}
   public getusers() : Observable<Signup[]> {
     return this.http.get<Signup[]>(this.url);
  }
 }

