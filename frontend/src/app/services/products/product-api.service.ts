import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private baseUrl = 'http://localhost:3000';


  constructor(public http:HttpClient) { }


   getProducts(product:any) {
    return this.http.post(`${this.baseUrl}/product/get-products`,product);
  }

   deleteProduct(id:any) {
    return this.http.post(`${this.baseUrl}/product/delete-product`,id);
  }

  addProduct(product:any) {
    return this.http.post(`${this.baseUrl}/product/add-products`,product);
  }

   updateProduct(id:any) {
    return this.http.post(`${this.baseUrl}/product/update-products`,id);
  }

   getProductById(id:any) {
    return this.http.post(`${this.baseUrl}/product/get-productById`,id);
  }


}
