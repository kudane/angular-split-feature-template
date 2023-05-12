import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestHomeComponent } from './guest-home.component';

const routes: Routes = [
  {
    path: "guest",
    children: [
      { path: "home", component: GuestHomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestHomeRoutingModule { }
