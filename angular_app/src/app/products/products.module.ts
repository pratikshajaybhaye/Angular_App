import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
  constructor() {
    console.log('ProductsModule called');
    
  }
 }
