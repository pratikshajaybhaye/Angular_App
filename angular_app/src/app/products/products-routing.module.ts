import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { MobileComponent } from './mobile/mobile.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  { path: '', canActivate:[AuthGuard],  component: ProductsComponent, children: [
    {path: 'mobile', component: MobileComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  constructor() {
    console.log('ProductsRoutingModule called');
  }
 }
