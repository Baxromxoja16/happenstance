import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, WritableSignal } from '@angular/core';
import { Product, Size } from '../models/index.js';
import { ProductViewerService } from './product-viewer.service.js';
import { SocialShareComponent } from '../components/shared/social-share/social-share.component.js';
import { FooterComponent } from '../components/footer/footer.component.js';
import { ColorSelectorComponent } from '../components/product/color-selector/color-selector.component.js';
import { ProductDetailsComponent } from '../components/product/product-details/product-details.component.js';
import { ProductImageComponent } from '../components/product/product-image/product-image.component.js';
import { SizeSelectorComponent } from '../components/product/size-selector/size-selector.component.js';

@Component({
  selector: 'app-product-viewer',
  imports: [
    CommonModule, 
    SocialShareComponent, 
    FooterComponent, 
    ColorSelectorComponent, 
    ProductDetailsComponent, 
    ProductImageComponent, 
    SizeSelectorComponent
  ],
  templateUrl: './product-viewer.component.html',
  styleUrl: './product-viewer.component.scss',
  standalone: true
})
export class ProductViewerComponent implements OnInit {
  products: Product[] = [];
  selectedSize: string = '';
  currentProduct!: WritableSignal<Product>;
  currentProductImageNumber!: WritableSignal<number>;

  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProductImageNumber = this.productService.getCurrentProductImageNumber();
    this.currentProduct = this.productService.getCurrentProduct();
    this.products = this.productService.getAllProducts();
  }
}