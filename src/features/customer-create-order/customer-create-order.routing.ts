import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateOrderComponent } from './customer-create-order.component';

const routes: Routes = [
  {
    path: "customer",
    children: [
      { path: "createorder", component: CustomerCreateOrderComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCreateOrderRoutingModule { }
