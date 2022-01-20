import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingPageComponent } from './billing-page/billing-page.component';

const routes: Routes = [
  {
    path: 'billing',
    data: { title: 'Billing' },
    component: BillingPageComponent,
  },
  {
    path: 'manageproducts',
    data: { title: 'Manage Products' },
    loadChildren: () =>
      import('./manage-products/manage-products.module').then(
        (m) => m.ManageProductsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'billing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
