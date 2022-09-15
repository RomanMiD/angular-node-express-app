import { Component, OnInit } from '@angular/core'
import { UserModel } from 'src/app/models/user.model'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users?: UserModel[]
  currentUser: UserModel = {
    address: '',
    firstname: '',
    lastname: '',
    number: '',
    sex: '',
  }
  currentIndex = -1
  title = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUsers()
  }
  get userSelected(){
    return this.currentIndex >= 0
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void {
    this.retrieveUsers()
    this.currentUser = {
      address: '',
      firstname: '',
      lastname: '',
      number: '',
      sex: '',
    }
    this.currentIndex = -1
  }

  setActiveUser(user: UserModel, index: number): void {
    this.currentUser = user
    this.currentIndex = index
  }
}