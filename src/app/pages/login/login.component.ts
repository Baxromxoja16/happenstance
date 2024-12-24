import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './services/login.service.js';
import { Subscription } from 'rxjs';
import { TokenService } from '../../core/services/token.service.js';
import { MessageService } from '../../core/services/global-error.service.js';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private tokenService: TokenService,
    private messageService: MessageService,
    private router: Router
  ) {
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
        this.tokenService.setToken(data.token);
        this.messageService.handleSuccess('Login successful');
        this.router.navigate(['/product-detail']);
      },
        (error) => { this.messageService.handleError(error.message); }
      );
      this.subscription.add(login);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}