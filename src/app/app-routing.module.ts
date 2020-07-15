import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBoardComponent } from './main-board/main-board.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';


const routes: Routes = [
  { path: 'main', component: MainBoardComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
