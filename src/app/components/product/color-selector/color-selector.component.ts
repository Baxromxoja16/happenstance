import { Component, OnInit, WritableSignal } from '@angular/core';
import { ProductDetails } from '../../../models/index.js';
import { ProductViewerService } from '../../../product-viewer/product-viewer.service.js';

@Component({
  selector: 'app-color-selector',
  imports: [],
  templateUrl: './color-selector.component.html',
  styleUrl: './color-selector.component.scss'
})
export class ColorSelectorComponent implements OnInit {
  currentProduct!: WritableSignal<ProductDetails>;
  products: ProductDetails[] = [];

  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProduct = this.productService.getCurrentProductDetail();
    this.products = this.productService.getAllProductDetails();
  }

  selectColor(id: number): void {
    this.productService.setCurrentProduct(id);
  }
}
