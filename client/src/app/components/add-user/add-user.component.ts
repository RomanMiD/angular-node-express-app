import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserSex } from 'src/app/enums/sex.enum';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userSex = UserSex
  user: UserModel = {
    firstname: "",
    lastname: "",
    number: "",
    address:"",
    sex: ""
  };
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  public saveUser(): void {
    const data = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      number: this.user.number,
      address: this.user.address,
      sex: this.user.sex
    };
    console.log(JSON.stringify(data))
    this.userService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  public newUser(): void {
    this.submitted = false;
    this.user = {
      firstname: "",
      lastname: "",
      number: "",
      address:"",
      sex: ""
  }
  this.router.navigate(['/users']);
}

}