import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'app', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', redirectTo: '/app', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule,ReactiveFormsModule,FormsModule]
})
export class AppRoutingModule { }
