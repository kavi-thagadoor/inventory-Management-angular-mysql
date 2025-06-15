import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, Status, UserAccess } from '../../../utils/types';
import { ProductApiService } from '../../../services/products/product-api.service';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../../../services/routes/route.service';
import { HeaderComponent } from "../../home/header/header.component";
import { LocalService } from '../../../services/local/local.service';

@Component({
  selector: 'app-edit-add-produt',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './edit-add-produt.component.html',
  styleUrl: './edit-add-produt.component.css'
})
export class EditAddProdutComponent {
  isUpdate: boolean = false;
  product: Product = {} as Product;

  constructor(public productService: ProductApiService,
    private Activeroute: ActivatedRoute,
    public route: RouteService,
    public localService: LocalService) { }

  ngOnInit(): void {
    this.checkAdmin()
    this.product.id = Number(this.Activeroute.snapshot.paramMap.get('id'));
    if (this.product.id) {
      this.isUpdate = true;
      this.getProductById(this.product.id)
    }
  }

  onSubmit() {
    if (!this.product.name || !this.product.price || !this.product.product_code || !this.product.quantity || !this.product.description) {
      alert("All fields are required.");
      return;
    }
    const data = this.getData()
    this.product.created_by = data.id
    this.product.updated_by = 0
    console.log(this.product)
      this.productService.addProduct(this.product).subscribe((data: any) => {
        console.log(data)
        if (data.status === Status.Success) {
          alert('Product added successfully');
          this.product = {} as Product
        } else {
          alert('Failed to update product');
        }
      }, error => {
        console.error('Error updating product:', error);
      });
  }

  onUpdate() {
    if (!this.product.name || !this.product.price || !this.product.product_code || !this.product.quantity || !this.product.description) {
      alert("All fields are required.");
      return;
    }
    const data = this.getData()
    this.product.updated_by = data.id
    this.productService.updateProduct(this.product).subscribe((data: any) => {
      if (data.status === 1) {
        alert('Product updated successfully');
        this.isUpdate = false;
        this.product = {} as Product;
        this.route.onNavigate(2);
      } else {
        alert('Failed to update product');
      }
    }, error => {
      console.error('Error updating product:', error);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById({ id: id }).subscribe((data: any) => {
      if (data.status === 1) {
        this.product = data.datas[0];
      } else {
        console.error('Failed to fetch product for update');
      }
    }, error => {
      console.error('Error fetching product for update:', error);
    });
  }

  checkAdmin() {
      const data = this.getData()
      console.log(data)
      switch (data.user) {
        case UserAccess.ADMIN:
          break;
        case UserAccess.Staff:
          this.route.onNavigate(5)
          break;
        default:
          break;
      }

  }

  getData() {
    const token = localStorage.getItem('token');
    if (token) {
        return  this.localService.getUserRole();
    } else {
      this.route.onNavigate(5)
    }
  }


}
