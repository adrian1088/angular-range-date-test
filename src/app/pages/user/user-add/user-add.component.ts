import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../interfaces/user.interface';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  };
  formUser: FormGroup = new FormGroup({});
  autoTips: Record<string, Record<string, string>> = {
    en: {
      required: 'Input is required'
    },
  };

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) { 
    this.initForm()
  }

  ngOnInit(): void {
  }

  initForm(): void{
    this.formUser = this.fb.group({
      id: [null],
      first_name: [null, [Validators.required, Validators.minLength(3)]],
      last_name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null,[Validators.required, Validators.email]],
    });
  }
  saveData(): void{
    if (this.formUser.valid) {
      console.log('submit', this.formUser.value);
    } else {
      Object.values(this.formUser.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
