import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserResponse } from '../../utils/types';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  getUserRole(): any {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const decoded = jwtDecode<UserResponse>(token);
      return decoded;
    } catch (error) {
      console.error('Invalid token format');
      return null;
    }
  }

}
