import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuestHomeRoutingModule } from './guest-home.routing';
import { GuestHomeComponent } from './guest-home.component';

@NgModule({
  declarations: [
    GuestHomeComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    GuestHomeRoutingModule
  ],
  providers: [],
})
export class GuestHomeModule { }
