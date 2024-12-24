import { Component, OnInit, WritableSignal } from '@angular/core';
import { ProductViewerService } from '../../../pages/product-viewer/services/product-viewer.service.js';
import { Product, ProductDetails } from '../../../models/index.js';
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../../../pages/cart/cart.service.js';
import { MessageService } from '../../../core/services/message.service.js';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent implements OnInit {
  currentProduct!: WritableSignal<Product>;
  constructor(
    private productService: ProductViewerService, 
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.currentProduct = this.productService.getCurrentProduct();
  }

  nextProduct(): void {
    this.productService.nextProduct();
  }

  prevProduct(): void {
    this.productService.prevProduct();
  }

  addTocard(): void {
    this.cartService.addCart(this.currentProduct());
    this.messageService.handleSuccess('Product added to cart');
  }
}
