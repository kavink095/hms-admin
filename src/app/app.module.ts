import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';

import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import {HttpClientModule} from '@angular/common/http';
import {Addadminservice} from '../app/services/addadminservice';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    AddAdminComponent,
    CreateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Addadminservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
