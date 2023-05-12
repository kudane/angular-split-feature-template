import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCreateOrderRoutingModule } from './customer-create-order.routing';
import { CustomerCreateOrderComponent } from './customer-create-order.component';

@NgModule({
  declarations: [
    CustomerCreateOrderComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CustomerCreateOrderRoutingModule
  ],
  providers: [],
})
export class CustomerCreateOrderModule { }
