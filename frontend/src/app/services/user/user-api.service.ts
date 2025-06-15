import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../utils/types';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {

  private baseUrl = 'http://localhost:3000';

  headers ={
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Token': 'your-authentication-token'
  }

  constructor(public http:HttpClient) { }


  getUser() {
    return this.http.get(`${this.baseUrl}/version`,{headers: this.headers});
  }

   addUser(user:User) {
    return this.http.post(`${this.baseUrl}/add-user`,user,{headers: this.headers});
  }

  LoginUser(user:User) {
    return this.http.post(`${this.baseUrl}/loginUser`,user,{headers: this.headers});
  }

}
