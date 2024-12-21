import { Component, OnInit, WritableSignal } from '@angular/core';
import { Product } from '../../../models/index.js';
import { ProductViewerService } from '../../../product-viewer/product-viewer.service.js';

@Component({
  selector: 'app-color-selector',
  imports: [],
  templateUrl: './color-selector.component.html',
  styleUrl: './color-selector.component.scss'
})
export class ColorSelectorComponent implements OnInit {
  currentProduct!: WritableSignal<Product>;
  products: Product[] = [];

  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProduct = this.productService.getCurrentProduct();
    this.products = this.productService.getAllProducts();
  }

  selectColor(id: number): void {
    this.productService.setCurrentProduct(id);
  }
}
