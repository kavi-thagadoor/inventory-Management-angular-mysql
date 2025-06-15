import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  onNavigate(key: number,id?:number) {
    switch (key) {
      case 1:
      this.router.navigate(['/login']);
        break;
      case 2:
  this.router.navigate(['/dashboard']);
        break;
         case 3:
  this.router.navigate(['/edit-product',id]);
        break;
        case 4:
      this.router.navigate(['/add-product']);
        break;
        case 5:
      localStorage.removeItem('token');
      this.router.navigate(['/']);
        break;
      default:
        break;
    }
  }

}
