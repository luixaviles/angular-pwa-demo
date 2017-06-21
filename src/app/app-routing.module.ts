import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'app/home/home.module#HomeModule', pathMatch: 'full'},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
