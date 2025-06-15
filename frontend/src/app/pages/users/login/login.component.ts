import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../services/user/user-api.service';
import { CommonModule } from '@angular/common';
import { Status, User } from '../../../utils/types';
import { FormsModule } from '@angular/forms';
import { RouteService } from '../../../services/routes/route.service';
import { HeaderComponent } from "../../home/header/header.component";

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user:User = {} as User

  constructor(private userService:UserApiService,public route:RouteService) { }

  ngOnInit(): void {

  }

 onLogin() {
  this.userService.LoginUser(this.user).subscribe((data: any) => {
    switch (data.status) {
      case 1:
        localStorage.setItem('token', data.token);
        this.route.onNavigate(2);
        break;
      case 2:
        alert(data.message);
        break;
    }
  });
}

}
