import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../services/products/product-api.service';
import { Product, UserAccess } from '../../../utils/types'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteService } from '../../../services/routes/route.service';
import { HeaderComponent } from "../../home/header/header.component";
import { LocalService } from '../../../services/local/local.service';

@Component({
  selector: 'app-list-products',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
  isAdmin :Boolean = false;
  products: Product[] = [];

  constructor(public ProductService: ProductApiService,public route:RouteService,public localService: LocalService) { }

  ngOnInit(): void {
    this.getProducts();
    this.checkAdmin();
  }

  getProducts() {
    this.ProductService.getProducts({}).subscribe((data: any) => {
      switch (data.status) {
        case 1:
          this.products = data.datas;
          console.log('Products fetched successfully:', this.products);
          break;
        case 2:
          console.log('Products not found:');
          break;
        default:
          break;
      }
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  deleteProduct(id: number) {
    this.ProductService.deleteProduct({ id }).subscribe((data: any) => {
      switch (data.status) {
        case 1:
          this.getProducts();
          break;
        case 2:
          console.log('Failed to delete product');
          break;
        default:
          console.log('Unexpected status:', data.status);
          break;
      }
    }, error => {
      console.error('Error deleting product:', error);
    }
  );
}

  editProduct(productid: number) {
   this.route.onNavigate(3,productid);
  }

  checkAdmin(){
    const token = localStorage.getItem('token');
          console.log(token)
        if (token) {
          const data = this.localService.getUserRole();
          switch (data.user) {
            case UserAccess.ADMIN:
              this.isAdmin = true;
              break;
            case UserAccess.Staff:
              this.isAdmin = false;
              break;
            default:
              break;
          }
        } else {
          this.route.onNavigate(5)
        }
  }
}
