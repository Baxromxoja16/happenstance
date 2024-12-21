import { Component, WritableSignal } from '@angular/core';
import { Product } from '../../../models/index.js';
import { ProductViewerService } from '../../../product-viewer/product-viewer.service.js';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  currentProduct!: WritableSignal<Product>;
  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProduct = this.productService.getCurrentProduct();
  }
}
