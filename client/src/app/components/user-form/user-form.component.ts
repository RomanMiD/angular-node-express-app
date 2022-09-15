import { Component, Input, OnInit, Output } from '@angular/core'
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
  @Output()
  public currentUser!: UserModel
  userSex = UserSex
  constructor( private formBuilder: FormBuilder) { }

  initForm(): void {
    this.userForm= this.formBuilder.group({
      firstname : new FormControl(this.user.firstname || "", [Validators.required]),
      lastname  : new FormControl(this.user.lastname || "", [Validators.required]),
      number    : new FormControl(this.user.number || "", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$"), Validators.maxLength(11)]),
      address   : new FormControl(this.user.address || "", [Validators.required]),
      sex       : new FormControl(this.user.sex || "", [Validators.required])
    })
  }
  get fc(){
    return this.userForm.controls
  }

  ngOnInit(): void {
    this.initForm()
  }


  onSubmit(): void {
    console.log(JSON.stringify(this.user))
    console.log(JSON.stringify(this.userForm.value))
  }
}