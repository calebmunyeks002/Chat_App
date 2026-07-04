import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  hidePassword = true;
  loading = false;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.loginForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        Validators.required
      ],

      rememberMe: [false]

    });

  }

  login() {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;

    }

    this.loading = true;

    // Backend Authentication (Spring Boot)
    setTimeout(() => {

      this.loading = false;

      this.router.navigate(['/dashboard']);

    }, 1500);

  }

  goToRegister() {

    this.router.navigate(['/register']);

  }

  forgotPassword() {

    alert("Forgot Password Module Coming Soon");

  }

}