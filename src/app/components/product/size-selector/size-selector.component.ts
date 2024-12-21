import { Component, OnInit, WritableSignal } from '@angular/core';
import { Product } from '../../../models/index.js';
import { ProductViewerService } from '../../../product-viewer/product-viewer.service.js';

@Component({
  selector: 'app-size-selector',
  imports: [],
  templateUrl: './size-selector.component.html',
  styleUrl: './size-selector.component.scss'
})
export class SizeSelectorComponent implements OnInit {
  selectedSize: string = '';
  currentProduct!: WritableSignal<Product>;
  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProduct = this.productService.getCurrentProduct();
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

}
