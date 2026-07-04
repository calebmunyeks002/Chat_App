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
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  hidePassword = true;
  hideConfirmPassword = true;

  imagePreview: string | ArrayBuffer | null = null;

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.registerForm = this.fb.group({

      fullName: ['', Validators.required],

      username: ['', Validators.required],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: ['', Validators.required],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],

      confirmPassword: ['', Validators.required]

    });

  }

  onImageSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);

  }

  register(): void {

  // Mark all fields as touched so validation messages can appear
  this.registerForm.markAllAsTouched();

  if (this.registerForm.invalid) {

    const fullName = this.registerForm.get('fullName');
    const username = this.registerForm.get('username');
    const email = this.registerForm.get('email');
    const phone = this.registerForm.get('phone');
    const password = this.registerForm.get('password');
    const confirmPassword = this.registerForm.get('confirmPassword');

    if (fullName?.hasError('required')) {
      alert('Full Name is required.');
      return;
    }

    if (username?.hasError('required')) {
      alert('Username is required.');
      return;
    }

    if (email?.hasError('required')) {
      alert('Email address is required.');
      return;
    }

    if (email?.hasError('email')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (phone?.hasError('required')) {
      alert('Phone number is required.');
      return;
    }

    if (password?.hasError('required')) {
      alert('Password is required.');
      return;
    }

    if (password?.hasError('minlength')) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (confirmPassword?.hasError('required')) {
      alert('Please confirm your password.');
      return;
    }

    alert('Please complete the registration form correctly.');
    return;
  }

  // Check if passwords match
  if (
    this.registerForm.value.password !==
    this.registerForm.value.confirmPassword
  ) {

    alert('Passwords do not match.');

    return;
  }

  // Save temporarily until backend integration
  localStorage.setItem(
    'registeredUser',
    JSON.stringify(this.registerForm.value)
  );

  console.log('Registered User:', this.registerForm.value);

  alert('Account created successfully.');

  this.router.navigate(['/login']);

}
goToLogin(): void {

  this.router.navigate(['/login']);

}
}