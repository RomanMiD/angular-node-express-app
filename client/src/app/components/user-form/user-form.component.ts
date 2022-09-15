import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserSex } from 'src/app/enums/sex.enum'
import { UserModel } from 'src/app/models/user.model'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public userForm!: FormGroup
  @Input()
  public user!: UserModel
  userSex = UserSex

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  initForm(): void {
    this.userForm= this.formBuilder.group({
      firstname : new FormControl("", [Validators.required]),
      lastname  : new FormControl("", [Validators.required]),
      number    : new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$"), Validators.maxLength(11)]),
      address   : new FormControl("", [Validators.required]),
      sex       : new FormControl("", [Validators.required])
    })
  }
  get fc(){
    return this.userForm.controls
  }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params["id"])
    this.initForm()
  }
  onSubmit(){
    this.userService.create(this.userForm.value)
  }


  getUser(id: string): void {
    this.userService.get(id)
      .subscribe({
        next: (data) => {
          this.user = data
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }

  updateUser(): void {
    const data : UserModel = {
      id: this.user.id,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      address: this.user.address,
      number: this.user.number,
      sex: this.user.sex,
    }

    this.userService.update(this.user.id, data)
      .subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

  deleteUser(): void {
    this.userService.delete(this.user.id)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(['/users'])
        },
        error: (e) => console.error(e)
      })
  }

}