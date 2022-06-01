import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { Shopping0cartComponent } from './shopping0cart/shopping0cart.component';
import { LoginComponent } from './login/login.component';
import {Component} from '@angular/core';
const routes: Routes = 
[
  {path:'products',component:ProductsComponent},
  {path:'orders',component:MyOrdersComponent},
  {path:'admin/orders',component:AdminOrdersComponent},
  {path:'admin/prouducts',component:ProductsComponent},
  {path:'shopping0cart',component:Shopping0cartComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
