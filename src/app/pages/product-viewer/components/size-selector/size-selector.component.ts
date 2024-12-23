import { Component, OnInit, WritableSignal } from '@angular/core';
import { ProductDetails } from '../../../../models/index.js';
import { ProductViewerService } from '../../services/product-viewer.service.js';

@Component({
  selector: 'app-size-selector',
  imports: [],
  templateUrl: './size-selector.component.html',
  styleUrl: './size-selector.component.scss'
})
export class SizeSelectorComponent implements OnInit {
  selectedSize: string = '';
  currentProduct!: WritableSignal<ProductDetails>;
  constructor(private productService: ProductViewerService) {}

  ngOnInit(): void {
    this.currentProduct = this.productService.getCurrentProductDetail();
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

}
