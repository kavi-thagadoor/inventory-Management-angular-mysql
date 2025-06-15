import { Routes } from '@angular/router';
import { LoginComponent } from './pages/users/login/login.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { EditAddProdutComponent } from './pages/products/edit-add-produt/edit-add-produt.component';

export const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:ListProductsComponent},
  {path:'edit-product/:id',component:EditAddProdutComponent},
  {path:'add-product',component:EditAddProdutComponent},
];
