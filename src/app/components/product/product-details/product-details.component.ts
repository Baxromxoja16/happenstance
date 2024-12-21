import { Component, WritableSignal } from '@angular/core';
import { Product, ProductDetails } from '../../../models/index.js';
import { ProductViewerService } from '../../../product-viewer/product-viewer.service.js';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  currentProductDetail!: WritableSignal<ProductDetails>;
  currentProduct!: WritableSignal<Product>;

  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProduct = this.productService.getCurrentProduct();
    this.currentProductDetail = this.productService.getCurrentProductDetail();
  }
}
