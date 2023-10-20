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
import { HttpErrorResponse } from '@angular/common/http';

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
      .subscribe({
        next: (user: User) => {
          this.sharedService.addMessage(
            'success',
            'Success',
            `Welcome, ${user.firstName}`
          );
          this.sharedService.user$.next(user);
          this.router.navigate(['/', 'dashboard']);
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
          this.sharedService.addMessage(
            'error',
            err.error.error,
            err.error.message
          );
        },
      });
  }

  isInvalid(control: AbstractControl | null) {
    return control?.touched && control.errors?.['required'];
  }
}
