import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product, ProductDetails } from '../models/index.js';
import db from '../../db/db.js';

@Injectable({
  providedIn: 'root'
})
export class ProductViewerService {
  private product = signal<Product>(db);
  private productsDetails: ProductDetails[] = this.product().productDetails;
  private currentProductImageNumber = signal<number>(0);
  private currentProductDetail = signal<ProductDetails>(this.productsDetails[0]);
  private cardProduct = signal<number>(2);

  getCardProduct(): WritableSignal<number> {
    return this.cardProduct;
  }

  getCurrentProduct(): WritableSignal<Product> {
    return this.product;
  }

  getCurrentProductImageNumber(): WritableSignal<number> {
    return this.currentProductImageNumber;
  }

  getCurrentProductDetail(): WritableSignal<ProductDetails> {
    return this.currentProductDetail;
  }

  getAllProductDetails(): ProductDetails[] {
    return this.productsDetails;
  }

  setCurrentProduct(id: number): void {
    const index = this.productsDetails.findIndex(p => p.id === id);
    if (index !== -1) {
      this.currentProductDetail.set(this.productsDetails[index]);
    }
  }

  nextProduct(): void {
    this.currentProductImageNumber.update((value) => (value + 1) % this.currentProductDetail().image.length);
  }

  prevProduct(): void {
    this.currentProductImageNumber.update((value) => value === 0 ? this.currentProductDetail().image.length - 1 : value - 1);
  }
}
