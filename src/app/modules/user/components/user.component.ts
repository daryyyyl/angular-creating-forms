import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: ['']
    })
  }

  onSubmit = () => {
    // const myUserForm:User = this.userForm.getRawValue() as User
    console.log('myUserForm', this.userForm.getRawValue() as User)
    this.userForm.reset()
  }
}
