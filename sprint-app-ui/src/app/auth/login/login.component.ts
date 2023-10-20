import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/models/user';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loading = false;
  loginFormGroup!: FormGroup;

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.loading = true;
    this.authService
      .login(
        this.loginFormGroup.get('email')?.value,
        this.loginFormGroup.get('password')?.value
      )
      .subscribe((user: User) => {
        if (user.id) {
          this.sharedService.user$.next(user);
          this.router.navigate(['/', 'dashboard']);
        } else {
          //failed to login
        }
        this.loading = false;
      });
  }

  isInvalid(control: AbstractControl | null) {
    return control?.touched && control.errors?.['required'];
  }
}
