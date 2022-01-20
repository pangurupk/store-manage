import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { BrandTypeComponent } from './brand-type/brand-type.component';
import { CatagoryBrandComponent } from './catagory-brand/catagory-brand.component';
import { CatagoryTypeComponent } from './catagory-type/catagory-type.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ManageProductsComponent } from './manage-products.component';

const routes: Routes = [
  { path: '', component: ManageProductsComponent },
  { path: 'catagory', component: CatagoryComponent },
  { path: 'type', component: CatagoryTypeComponent },
  { path: 'brand', component: CatagoryBrandComponent },
  { path: 'brand-type', component: BrandTypeComponent },
  { path: 'product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageProductsRoutingModule {}
