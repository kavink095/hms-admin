import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBoardComponent } from './main-board/main-board.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { MaintainceComponent } from './maintaince/maintaince.component';
import { ChargesComponent } from './charges/charges.component';
import { CategoryComponent } from './category/category.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddDoctorDTO } from './dtos/add-doctorDTO';


const routes: Routes = [
  { path: 'main', component: MainBoardComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: 'maintaince', component: MaintainceComponent },
  { path: 'charges', component: ChargesComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'addDoc', component: AddDoctorComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
