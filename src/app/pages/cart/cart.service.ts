import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/index.js';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: WritableSignal<Product[]> = signal<Product[]>([]);
  constructor() { }

  addCart(cart: Product): void {
    this.carts.update((value: Product[]) => [...value, cart]);
  }
}
