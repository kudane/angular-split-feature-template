import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import('../features').then(m => m.AdminSummaryReportModule) },
  { path: "", loadChildren: () => import('../features').then(m => m.CustomerCreateOrderModule) },
  { path: "", loadChildren: () => import('../features').then(m => m.GuestAboutModule) },
  { path: "", loadChildren: () => import('../features').then(m => m.GuestHomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
