import { Component } from '@angular/core';
import { RouteService } from '../../../services/routes/route.service';
import { CommonModule } from '@angular/common';
import { LocalService } from '../../../services/local/local.service';
import { UserAccess } from '../../../utils/types'

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public route: RouteService, public localService: LocalService) { }
  isMenuOpen = false;
  isAdminMenu = false;

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isMenuOpen = true;
      const data = this.localService.getUserRole();
      switch (data.user) {
        case UserAccess.ADMIN:
          this.isAdminMenu = true;
          break;
        case UserAccess.Staff:
          this.isAdminMenu = false;
          break;
        default:
          break;
      }
      console.log('User Role:', data.user);
    } else {
      this.isMenuOpen = false;
    }
  }

  onNavigate(key: number) {
    this.route.onNavigate(key);
  }
}
