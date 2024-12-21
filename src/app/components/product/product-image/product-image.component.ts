import { Component, OnInit, WritableSignal } from '@angular/core';
import { ProductDetails } from '../../../models/index.js';
import { ProductViewerService } from '../../../product-viewer/product-viewer.service.js';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-image',
  imports: [NgOptimizedImage],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.scss'
})
export class ProductImageComponent implements OnInit {
  currentProduct!: WritableSignal<ProductDetails>;
  currentProductImageNumber!: WritableSignal<number>;

  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProductImageNumber = this.productService.getCurrentProductImageNumber();
    this.currentProduct = this.productService.getCurrentProductDetail();
  }
}
