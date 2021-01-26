import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from '../core/http-interceptors';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const dashboardRoutes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    component: DashboardComponent,
    pathMatch: 'full'
  }
];
@NgModule({
    declarations: [
      DashboardComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(dashboardRoutes)
    ],
    exports: [],
    providers: [],
})
export class DashboardModule { }
