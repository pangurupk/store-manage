import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManageProductsComponent } from './manage-products.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { CatagoryBrandComponent } from './catagory-brand/catagory-brand.component';
import { CatagoryTypeComponent } from './catagory-type/catagory-type.component';
import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { BrandTypeComponent } from './brand-type/brand-type.component';

@NgModule({
  declarations: [
    ManageProductsComponent,
    AddProductComponent,
    CatagoryComponent,
    CatagoryBrandComponent,
    CatagoryTypeComponent,
    BrandTypeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManageProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  /* exports: [
    ManageProductsComponent,
    AddProductComponent,
    CatagoryComponent,
    CatagoryBrandComponent,
    CatagoryTypeComponent,
  ], */
})
export class ManageProductsModule {}
