import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AddUserComponent } from './components/add-user/add-user.component'
import { UserDetailsComponent } from './components/user-details/user-details.component'
import { UsersListComponent } from './components/users-list/users-list.component'
import { ReactiveFormsModule } from '@angular/forms'
import { UserFormComponent } from './components/user-form/user-form.component'

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserDetailsComponent,
    UsersListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
