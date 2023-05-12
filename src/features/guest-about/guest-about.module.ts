import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuestAboutRoutingModule } from './guest-about.routing';
import { GuestAboutComponent } from './guest-about.component';

@NgModule({
  declarations: [
    GuestAboutComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    GuestAboutRoutingModule
  ],
  providers: [],
})
export class GuestAboutModule { }
