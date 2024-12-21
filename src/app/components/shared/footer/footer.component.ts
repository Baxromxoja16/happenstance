import { Component, OnInit, WritableSignal } from '@angular/core';
import { ProductViewerService } from '../../../product-viewer/product-viewer.service.js';
import { Product, ProductDetails } from '../../../models/index.js';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true
})
export class FooterComponent implements OnInit {
  currentProduct!: WritableSignal<Product>;
  constructor(private productService: ProductViewerService) {}

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
    alert('Product added to card');
    this.productService.getCardProduct().update((value) => value + 1);
  }
}
