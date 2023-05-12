import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestAboutComponent } from './guest-about.component';

const routes: Routes = [
  {
    path: "guest",
    children: [
      { path: "about", component: GuestAboutComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestAboutRoutingModule { }
