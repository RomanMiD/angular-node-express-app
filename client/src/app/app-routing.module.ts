import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsersListComponent } from './components/users-list/users-list.component'
import { UserDetailsComponent } from './components/user-details/user-details.component'
import { AddUserComponent } from './components/add-user/add-user.component'

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'add-user', component: AddUserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }