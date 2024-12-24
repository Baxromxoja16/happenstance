import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './services/login.service.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const login = this.loginService.login(email, password).subscribe((data) => {
        console.log(data, 'data');
      },
        (error) => { console.log(error, 'error') }
      );
      this.subscription.add(login);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}