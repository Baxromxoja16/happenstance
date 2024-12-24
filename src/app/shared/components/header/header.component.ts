import { Component, OnInit, WritableSignal } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { TokenService } from '../../../core/services/token.service.js';
import { MessageService } from '../../../core/services/message.service.js';
import { CartService } from '../../../pages/cart/cart.service.js';
import { Product } from '../../../models/index.js';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartCount!: WritableSignal<Product[]>;
  constructor(
    private router: Router, 
    private tokenService: TokenService,
    private messageService: MessageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartCount = this.cartService.carts
  }

  logOut() {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }

  settings() {
    this.messageService.handleSuccess('Settings page is not available yet');
  }

  openCart() {
    this.messageService.handleSuccess('Cart page is not available yet');
  }
}
