import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  accountForm: FormGroup;
  user: User = new User();
  savedUser = new User();
  active = true;

  formErrors = {
    'name': '',
    'email': '',
    'telephone': '',
    'city': ''
  };

  validationMessages = {
    'name': {
      'required':   'Name is required.',
      'minlength':  'Name must be at least 3 characters long.'
    },
    'email': {
      'required':     'Email is required.',
      'invalidEmail': 'Verify email address.'
    },
    'telephone': {
      'required':   'Telephone is required.',
      'minlength':  'Verify telephone.',
      'maxlength':  'Verify telephone.'
    },
    'city': {
      'required': 'City is required.'
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.user = this.authService.user;
    this.accountForm = this.formBuilder.group({
      'name': [this.user.name, [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      'email': [this.user.email, [
          Validators.required
        ]
      ],
      'emailOnAd':  [this.user.emailOnAd],
      'telephone': [this.user.telephone, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15)
        ]
      ],
      'telephoneOnAd': [this.user.telephoneOnAd],
      'city': [this.user.city, [
          Validators.required
        ]
      ],
      'methodCall': [this.user.methodCall],
      'methodTextMessage': [this.user.methodTextMessage],
      'methodEmail': [this.user.methodEmail]
    });

    this.accountForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.user = this.accountForm.value;
    this.user.id = this.authService.user.id;
    this.user.accessToken = this.authService.user.accessToken;
    this.user.avatarURL = this.authService.user.avatarURL;
    this.userService.saveUser(this.user).then(() => {
      this.authService.refreshFireBaseVariables().then(() => {
        let snackRef = this.snackBar.open('Saved!');
        setTimeout(() => { snackRef.dismiss(); }, 2000);
        this.buildForm();
      });
    });
  }

  cancelChanges() {
    this.user = this.savedUser;
    this.buildForm();
    return false;
    // this.active = false;
    // setTimeout(() => this.active = true, 0);
  }

  onValueChanged(data?: any) {
    if (!this.accountForm) {
      return;
    }
    const form = this.accountForm;

    for (const field in this.accountForm.controls) {
      if (this.accountForm.contains(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (messages[key] !== '') {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
