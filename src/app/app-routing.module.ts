import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcountDetailsComponent } from './acount-details/acount-details.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListAccountComponent } from './list-account/list-account.component';

const routes: Routes = [
  {
    'path': '',
    component: ListAccountComponent ,
  },
  {
    'path': 'add',
    component:AddAccountComponent,
  },
  {
    'path': 'detail/:id',
    component: AcountDetailsComponent,
  },
  {
    'path': 'dashboard',
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
