import { Component, Input, OnInit, Output } from '@angular/core'
import { UserService } from 'src/app/services/user.service'
import { ActivatedRoute, Router } from '@angular/router'
import { UserModel } from 'src/app/models/user.model'
import { UserSex } from 'src/app/enums/sex.enum'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  @Input()  user!: UserModel;
  @Output()currentUser: UserModel = {
    id: null,
    firstname: "",
    lastname: "",
    number: "",
    address:"",
    sex: ""
  }


  userSex = UserSex
  data = {}
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.getUser(this.route.snapshot.params["id"])
      this.currentUser = this.user
  }

  getUser(id: string): void {
    this.userService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }

  updateUser(): void {
    const data : UserModel = {
      id: this.currentUser.id,
      firstname: this.currentUser.firstname,
      lastname: this.currentUser.lastname,
      address: this.currentUser.address,
      number: this.currentUser.number,
      sex: this.currentUser.sex,
    }

    this.userService.update(this.currentUser.id, data)
      .subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

  deleteUser(): void {
    this.userService.delete(this.currentUser.id)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(['/users'])
        },
        error: (e) => console.error(e)
      })
  }

}